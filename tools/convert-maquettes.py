#!/usr/bin/env python3
"""Convertit les maquettes EGA (.dc.html exportés du canevas « Maquettes EGA »)
en pages React (TSX) branchées sur les composants partagés de src/components.

Usage : python3 -I tools/convert-maquettes.py <dossier des .dc.html>

- styles en ligne -> objets de style, couleurs et polices -> variables CSS des jetons EGA ;
- liens « X.dc.html » -> <Link> du routeur ;
- pictogrammes -> <Icon name>, motifs décoratifs -> <Pattern variant> ;
- barre latérale et en-tête d'EGA Central -> <CentralSidebar>, <CentralTopbar> ;
- logique d'état des maquettes (renderVals) -> hook useScreenState.
"""
import hashlib
import json
import os
import re
import sys
from html.parser import HTMLParser

SRC = sys.argv[1]
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'src')

VOID = {'input', 'br', 'img', 'meta', 'link', 'hr', 'source', 'col'}

# ---------------------------------------------------------------- routes

def kebab(s):
    s = re.sub(r'(?<=[a-z])(?=[A-Z])', '-', s)
    return s.lower()


def screen_info(fname):
    stem = fname[:-len('.dc.html')]
    if stem == 'Main':
        return 'central', 'Stock', '/central/stock'
    app, _, rest = stem.partition('-')
    comp = rest.replace('-', '')
    return app.lower(), comp, f'/{app.lower()}/{kebab(rest)}'


# ---------------------------------------------------------------- arbre

class Node:
    def __init__(self, tag, attrs, parent=None):
        self.tag, self.attrs, self.children, self.parent = tag, attrs, [], parent

    def text(self):
        out = []
        for c in self.children:
            out.append(c if isinstance(c, str) else c.text())
        return ''.join(out)

    def find(self, pred):
        if pred(self):
            return self
        for c in self.children:
            if isinstance(c, Node):
                r = c.find(pred)
                if r:
                    return r
        return None

    def find_all(self, pred, acc=None):
        acc = [] if acc is None else acc
        if pred(self):
            acc.append(self)
        for c in self.children:
            if isinstance(c, Node):
                c.find_all(pred, acc)
        return acc

    def raw(self):
        a = ''.join(f' {k}="{v}"' for k, v in self.attrs if k != 'style')
        inner = ''.join(c if isinstance(c, str) else c.raw() for c in self.children)
        return f'<{self.tag}{a}>{inner}</{self.tag}>'


class Parser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node('#root', [])
        self.cur = self.root

    def handle_starttag(self, tag, attrs):
        n = Node(tag, [(k, '' if v is None else v) for k, v in attrs], self.cur)
        self.cur.children.append(n)
        if tag not in VOID:
            self.cur = n

    def handle_startendtag(self, tag, attrs):
        n = Node(tag, [(k, '' if v is None else v) for k, v in attrs], self.cur)
        self.cur.children.append(n)

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        n = self.cur
        while n is not self.root and n.tag != tag:
            n = n.parent
        if n is not self.root:
            self.cur = n.parent

    def handle_data(self, data):
        self.cur.children.append(data)


def attr(n, k, default=None):
    for a, v in n.attrs:
        if a == k:
            return v
    return default


# ---------------------------------------------------------------- styles

HEX = {
    '#0F2942': 'var(--color-primary)',
    '#F57C00': 'var(--color-accent)',
    '#B45309': 'var(--color-accent-text)',
    '#92400E': 'var(--color-warning-text)',
    '#16A34A': 'var(--color-success)',
    '#166534': 'var(--color-success-text)',
    '#D97706': 'var(--color-warning)',
    '#DC2626': 'var(--color-danger)',
    '#991B1B': 'var(--color-danger-text)',
    '#111827': 'var(--color-text)',
    '#4B5563': 'var(--color-text-muted)',
    '#D5DBE1': 'var(--color-border)',
    '#F4F6F8': 'var(--color-background)',
    '#C9D3DE': 'var(--color-on-primary-muted)',
    '#E8ECF0': 'var(--color-divider)',
}
RGBA = {
    'rgba(22,163,74,0.12)': 'var(--color-success-bg)',
    'rgba(217,119,6,0.12)': 'var(--color-warning-bg)',
    'rgba(220,38,38,0.12)': 'var(--color-danger-bg)',
    'rgba(75,85,99,0.12)': 'var(--color-neutral-bg)',
    'rgba(245,124,0,0.16)': 'var(--color-accent-soft)',
}
FONTS = {
    'Inter, Roboto, system-ui, sans-serif': 'var(--font-sans)',
    'Space Grotesk, Inter, system-ui, sans-serif': 'var(--font-display)',
    'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace': 'var(--font-mono)',
}
SHADOWS = {
    '0 1px 2px rgba(15,41,66,0.06), 0 6px 20px rgba(15,41,66,0.07)': 'var(--shadow-card)',
    '0 6px 16px rgba(245,124,0,0.28)': 'var(--shadow-accent)',
    '0 16px 48px rgba(15,41,66,0.28)': 'var(--shadow-popover)',
}


def tokenize_value(prop, val):
    if prop == 'font-family' and val in FONTS:
        return FONTS[val]
    if prop == 'box-shadow' and val in SHADOWS:
        return SHADOWS[val]
    for k, v in RGBA.items():
        val = val.replace(k, v)

    def hx(m):
        h = m.group(0).upper()
        if h == '#FFFFFF':
            if prop in ('background', 'background-color'):
                return 'var(--color-surface)'
            if prop == 'color':
                return 'var(--color-on-primary)'
            return m.group(0)
        return HEX.get(h, m.group(0))

    return re.sub(r'#[0-9A-Fa-f]{6}\b', hx, val)


def camel(p):
    if p.startswith('--'):
        return p
    return re.sub(r'-([a-z])', lambda m: m.group(1).upper(), p)


def parse_style(s):
    decls = []
    for part in re.split(r';(?![^(]*\))', s):
        if ':' not in part:
            continue
        k, v = part.split(':', 1)
        decls.append((k.strip(), v.strip()))
    return decls


def style_obj(decls):
    items = []
    decls = list(dict(decls).items())  # propriété répétée : la dernière l'emporte, comme en CSS
    for k, v in decls:
        v = tokenize_value(k, v)
        key = camel(k)
        key = json.dumps(key) if not re.match(r'^[A-Za-z_]\w*$', key) else key
        items.append(f'{key}: {json.dumps(v, ensure_ascii=False)}')
    return '{ ' + ', '.join(items) + ' }'


# ---------------------------------------------------------------- pictogrammes

ICON_NAMES = [
    ('M5 12.5l4.5 4.5L19 7.5', 'check'),
    ('M2 12.5l4.5 4.5L16 7.5', 'checkDouble'),
    ('M8 12.5l3 3 5-6', 'checkCircle'),
    ('M12 19V5M6 11l6-6 6 6', 'arrowUp'),
    ('M12 5v14M6 13l6 6 6-6', 'arrowDown'),
    ('M4 8l8-4 8 4v8', 'box'),
    ('M20 12a8 8 0 11-3-6.2', 'refresh'),
    ('M12 4L2.5 20h19', 'alert'),
    ('M4 4h7v7H4z', 'grid'),
    ('M5 7h14M5 12h14M5 17h14', 'sliders'),
    ('M6 17v-6a6 6 0 0112 0', 'bell'),
    ('M6 11h12v9H6z', 'lock'),
    ('M4 8h14l-3-3', 'transfer'),
    ('cx="11" cy="11" r="6"', 'search'),
    ('cx="12" cy="8" r="4"', 'user'),
    ('M12 5v14M5 12h14', 'plus'),
    ('M12 21s7-6.2', 'mapPin'),
    ('M12 4v11M7 10l5 5 5-5', 'download'),
    ('M6 6l12 12M18 6L6 18', 'close'),
    ('M15 6l-6 6 6 6', 'chevronLeft'),
    ('M9 6l6 6-6 6', 'chevronRight'),
    ('M4 4h8l8 8', 'tag'),
    ('M12 7v5l3 2', 'clock'),
    ('M2 7h11v9H2z', 'truck'),
    ('M5.6 5.6l12.8 12.8', 'offline'),
    ('M12 3l8 3v6', 'shield'),
    ('M6 3h9l4 4v14H6z', 'document'),
    ('M4 8V5h3M17 5h3v3', 'scan'),
    ('M4 11l8-7 8 7v9H4z', 'home'),
    ('M12 11v6M12 7.5v.5', 'info'),
    ('M4 20l1-4L16 5', 'pencil'),
    ('M8 6h12M8 12h12M8 18h12', 'list'),
    ('cx="5" cy="12" r="1.2"', 'more'),
    ('M4 8h3l2-2h6l2 2h3v11H4z', 'camera'),
    ('M7 9V4h10v5', 'printer'),
    ('M20 14A8 8 0 1110 4', 'moon'),
    ('M9.5 15c.6.9', 'coin'),
    ('M9 9h11v11H9z', 'copy'),
    ('M5 12h14', 'minus'),  # en dernier : préfixe de « plus »
]
icons = {}  # nom -> jsx interne


def icon_name(inner_raw):
    for key, name in ICON_NAMES:
        if key in inner_raw:
            if name == 'minus' and inner_raw != '<path d="M5 12h14"></path>':
                continue
            return name
    raise SystemExit('Pictogramme inconnu : ' + inner_raw)


# ---------------------------------------------------------------- motifs décoratifs

patterns = {}  # nom -> jsx


def pattern_name(n):
    w, h = attr(n, 'width'), attr(n, 'height')
    return {
        ('202', '82'): 'header',
        ('202', '52'): 'footer',
        ('172', '172'): 'hero',
        ('492', '660'): 'login',
    }.get((w, h))


# ---------------------------------------------------------------- JSX

ATTR_MAP = {
    'class': 'className', 'for': 'htmlFor', 'autocomplete': 'autoComplete',
    'tabindex': 'tabIndex', 'readonly': 'readOnly', 'colspan': 'colSpan',
    'rowspan': 'rowSpan', 'maxlength': 'maxLength', 'inputmode': 'inputMode',
    'viewbox': 'viewBox', 'preserveaspectratio': 'preserveAspectRatio',
    'onclick': 'onClick', 'onchange': 'onChange', 'oninput': 'onInput',
    'datetime': 'dateTime', 'enterkeyhint': 'enterKeyHint',
}
SVG_ATTRS = {
    'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-opacity',
    'stroke-dasharray', 'stroke-opacity', 'fill-rule', 'clip-rule',
    'vector-effect', 'stop-color', 'stop-opacity', 'text-anchor',
    'dominant-baseline', 'font-size', 'font-weight', 'font-family',
}
BOOL_ATTRS = {'disabled', 'checked', 'required', 'readonly', 'selected', 'hidden', 'multiple'}

BIND = re.compile(r'^\{\{\s*([\w.]+)\s*\}\}$')


class Ctx:
    def __init__(self, routes, app):
        self.routes = routes
        self.app = app
        self.uses = set()
        self.vals = set()


def js_text(s):
    s = s.replace('{', '&#123;').replace('}', '&#125;').replace('<', '&lt;').replace('>', '&gt;')
    return s


def text_jsx(s, ctx):
    parts = re.split(r'(\{\{\s*[\w.]+\s*\}\})', s)
    out = []
    for p in parts:
        m = BIND.match(p)
        if m:
            ctx.vals.add(m.group(1))
            out.append('{v.' + m.group(1) + '}')
        else:
            out.append(js_text(p))
    return ''.join(out)


def attrs_jsx(n, ctx, extra=None):
    out = []
    tag = n.tag
    has_change = any(k in ('onchange', 'oninput') for k, _ in n.attrs)
    for k, v in n.attrs:
        lk = k.lower()
        if lk.startswith('hint-') or lk == 'data-dc-script':
            continue
        m = BIND.match(v.strip()) if v else None
        if lk == 'style':
            out.append(f'style={{{style_obj(parse_style(v))}}}')
            continue
        name = ATTR_MAP.get(lk, None)
        if name is None:
            if lk in SVG_ATTRS:
                name = camel(lk)
            else:
                name = k
        if lk == 'href' and tag == 'a':
            continue  # géré par link()
        if m:
            ctx.vals.add(m.group(1))
            out.append(f'{name}={{v.{m.group(1)}}}')
            continue
        if tag in ('input', 'textarea') and lk == 'value' and not has_change:
            name = 'defaultValue'
        if tag == 'input' and lk == 'checked' and not has_change:
            out.append('defaultChecked')
            continue
        if lk in BOOL_ATTRS and v == '':
            out.append(name)
            continue
        if lk == 'selected':
            continue  # traité sur <select>
        if lk in ('rows', 'cols', 'colspan', 'rowspan', 'maxlength', 'tabindex', 'size') and v.isdigit():
            out.append(f'{name}={{{v}}}')
            continue
        out.append(f'{name}={json.dumps(v, ensure_ascii=False)}')
    if tag == 'select':
        sel = [c for c in n.children if isinstance(c, Node) and c.tag == 'option' and any(a == 'selected' for a, _ in c.attrs)]
        if sel:
            out.append(f'defaultValue={json.dumps(attr(sel[0], "value") or sel[0].text(), ensure_ascii=False)}')
    if extra:
        out.extend(extra)
    return (' ' + ' '.join(out)) if out else ''


def children_jsx(n, ctx, ind):
    out = []
    for c in n.children:
        if isinstance(c, str):
            if c.strip() == '':
                if '\n' not in c and n.tag not in ('svg', 'tr', 'tbody', 'thead', 'table', 'ul', 'ol', 'select'):
                    out.append("{' '}")  # espace entre éléments en ligne
                continue
            t = re.sub(r'\s*\n\s*', ' ', c)
            out.append(text_jsx(t, ctx))
        else:
            out.append(node_jsx(c, ctx, ind))
    return ''.join(out)


def node_jsx(n, ctx, ind=0):
    tag = n.tag
    # Composants partagés d'EGA Central.
    if tag == 'nav' and attr(n, 'aria-label') == 'Modules':
        return sidebar_jsx(n, ctx)
    if tag == 'header' and n.find(lambda x: attr(x, 'id') == 'g-search'):
        return topbar_jsx(n, ctx)
    if tag == 'div' and attr(n, 'role') == 'img' and attr(n, 'aria-label') == 'EGA':
        st = dict(parse_style(attr(n, 'style', '')))
        ctx.uses.add('Logo')
        size, radius, fs = (st[k].replace('px', '') for k in ('width', 'border-radius', 'font-size'))
        tone = ' tone="primary"' if st.get('background', '').upper() == '#0F2942' else ''
        return f'<Logo size={{{size}}} radius={{{radius}}} fontSize={{{fs}}}{tone} />'
    if tag == 'sc-if':
        m = BIND.match(attr(n, 'value', '').strip())
        ctx.vals.add(m.group(1))
        return f'{{v.{m.group(1)} && (<>{children_jsx(n, ctx, ind)}</>)}}'
    if tag == 'svg':
        inner = ''.join(c.raw() if isinstance(c, Node) else '' for c in n.children)
        if attr(n, 'stroke') == 'currentColor' and attr(n, 'viewbox') == '0 0 24 24':
            name = icon_name(inner)
            icons.setdefault(name, children_jsx(n, Ctx({}, ''), 0))
            ctx.uses.add('Icon')
            props = [f'name="{name}"']
            size = attr(n, 'width')
            if size != '20':
                props.append(f'size={{{size}}}')
            sw = attr(n, 'stroke-width')
            if sw != '2':
                props.append(f'strokeWidth={{{sw}}}')
            st = [d for d in parse_style(attr(n, 'style', '')) if d != ('flex', 'none')]
            if st:
                props.append(f'style={{{style_obj(st)}}}')
            if attr(n, 'aria-hidden') != 'true' and attr(n, 'aria-label'):
                props.append(f'label={json.dumps(attr(n, "aria-label"), ensure_ascii=False)}')
            return f'<Icon {" ".join(props)} />'
        pname = pattern_name(n)
        if pname:
            body = children_jsx(n, Ctx({}, ''), 0)
            if pname in patterns and patterns[pname][1] != body:
                pname = pname + str(sum(1 for p in patterns if p.startswith(pname)) + 1)
            patterns.setdefault(pname, (n, body))
            ctx.uses.add('Pattern')
            st = attr(n, 'style', '')
            sp = f' style={{{style_obj(parse_style(st))}}}' if st else ''
            return f'<Pattern variant="{pname}"{sp} />'
    if tag == 'a' and attr(n, 'href'):
        href = attr(n, 'href')
        if href.endswith('.dc.html'):
            route = ctx.routes[href]
            ctx.uses.add('Link')
            return f'<Link to="{route}"{attrs_jsx(n, ctx)}>{children_jsx(n, ctx, ind)}</Link>'
        a = attrs_jsx(n, ctx, [f'href={json.dumps(href)}'])
        return f'<a{a}>{children_jsx(n, ctx, ind)}</a>'
    a = attrs_jsx(n, ctx)
    if tag in VOID:
        return f'<{tag}{a} />'
    kids = children_jsx(n, ctx, ind)
    if tag == 'textarea':
        return f'<textarea{a} defaultValue={json.dumps(n.text(), ensure_ascii=False)} />'
    if not kids and tag in ('path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse', 'stop'):
        return f'<{tag}{a} />'
    return f'<{tag}{a}>{kids}</{tag}>'


# ---------------------------------------------------------------- composants Central

def sidebar_jsx(n, ctx):
    cur = n.find(lambda x: x.tag == 'a' and attr(x, 'aria-current') == 'page')
    role = 'admin' if 'Référentiel' in n.text() else 'magasinier'
    ctx.uses.add('CentralSidebar')
    return f'<CentralSidebar active="{ctx.routes[attr(cur, "href")]}" role="{role}" />'


def topbar_jsx(n, ctx):
    crumb = n.find(lambda x: x.tag == 'span' and x.text().startswith('EGA Central /')).text()
    title = n.find(lambda x: x.tag == 'h1').text()
    ctx.uses.add('CentralTopbar')
    crumb = crumb.replace('EGA Central / ', '', 1)
    return f'<CentralTopbar breadcrumb={json.dumps(crumb, ensure_ascii=False)} title={json.dumps(title, ensure_ascii=False)} />'


# ---------------------------------------------------------------- logique d'état

def logic(script):
    m = re.search(r'Object\.assign\((\{.*?\}), this\.state', script)
    defaults = m.group(1) if m else '{}'
    body = re.search(r'const r = \{\};\n(.*?)\nreturn r;', script, re.S)
    if not body:
        return None
    lines = []
    for line in body.group(1).splitlines():
        # L'ouverture des notifications est portée par CentralTopbar.
        if line.startswith('r.notif ='):
            continue
        line = re.sub(r'\((e)\) =>', r'(\1: React.ChangeEvent<HTMLInputElement>) =>', line)
        lines.append('    ' + line.strip())
    if not lines:
        return None
    return defaults, '\n'.join(lines)


# ---------------------------------------------------------------- page

def adapt_root(root, app):
    """Racine fixe des maquettes -> mise en page réelle."""
    decls = parse_style(attr(root, 'style', ''))
    new = []
    for k, v in decls:
        if app == 'central' and k == 'min-height':
            v = '100vh'
        if app != 'central' and k == 'width' and v == '390px':
            v = 'var(--mobile-frame-width)'
        if app != 'central' and k == 'height' and v == '844px':
            v = 'var(--mobile-frame-height)'
        new.append((k, v))
    root.attrs = [(k, v) if k != 'style' else ('style', '; '.join(f'{a}: {b}' for a, b in new)) for k, v in root.attrs]


def repair(src):
    """Répare les attributs style mal échappés de certaines maquettes :
    style="&quot;color:" #4b5563;="" font-size:="" 13px"="" -> style="color: #4b5563; font-size: 13px"."""
    def fix(m):
        toks = [m.group(1)] + re.findall(r' ([^ =>]+)=""', m.group(2))
        return 'style="' + ' '.join(toks).rstrip('"') + '"'
    return re.sub(r'style="&quot;([^"]*)"((?: [^ =>]+="")+)', fix, src)


def convert(fname, routes):
    src = repair(open(os.path.join(SRC, fname), encoding='utf-8').read())
    app, comp, route = screen_info(fname)
    p = Parser()
    p.feed(src)
    xdc = p.root.find(lambda x: x.tag == 'x-dc')
    root = [c for c in xdc.children if isinstance(c, Node) and c.tag != 'helmet']
    assert len(root) == 1, fname
    root = root[0]
    adapt_root(root, app)
    script = p.root.find(lambda x: x.tag == 'script' and attr(x, 'data-dc-script') is not None).text()
    title = p.root.find(lambda x: x.tag == 'title').text()

    ctx = Ctx(routes, app)
    jsx = node_jsx(root, ctx)
    lg = logic(script)

    imports = ["import type React from 'react';"] if lg and 'React.' in lg[1] else []
    if 'Link' in ctx.uses:
        imports.append("import { Link } from 'react-router-dom';")
    comps = sorted(ctx.uses - {'Link'})
    for c in comps:
        imports.append(f"import {{ {c} }} from '../../components/{c}';")
    imports.append("import { useDocumentTitle } from '../../hooks/useDocumentTitle';")
    body = [f"  useDocumentTitle({json.dumps(title, ensure_ascii=False)});"]
    if ctx.vals:
        if not lg:
            raise SystemExit(f'{fname}: valeurs liées sans logique')
        imports.append("import { useScreenState } from '../../hooks/useScreenState';")
        body.append(f"  const v = useScreenState({lg[0]}, (s, set) => {{\n    const r = {{}} as Record<string, any>;\n{lg[1]}\n    return r;\n  }});")
    wrap_open, wrap_close = ('', '')
    if app != 'central':
        wrap_open, wrap_close = '<div className="mobile-stage">', '</div>'
    out = '\n'.join(imports) + '\n\n'
    out += f'/** {title} — maquette « {fname} ». */\n'
    out += f'export default function {app.capitalize()}{comp}() {{\n' + '\n'.join(body) + '\n'
    out += f'  return (\n    {wrap_open}{jsx}{wrap_close}\n  );\n}}\n'
    path = os.path.join(OUT, 'pages', app, comp + '.tsx')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(out)
    return app, comp, route, title


def main():
    files = sorted(f for f in os.listdir(SRC) if f.endswith('.dc.html'))
    routes = {f: screen_info(f)[2] for f in files}
    # Le motif du pied de la barre latérale (CentralSidebar) prend le nom « footer ».
    p = Parser()
    p.feed(open(os.path.join(SRC, 'Main.dc.html'), encoding='utf-8').read())
    nav = p.root.find(lambda x: x.tag == 'nav' and attr(x, 'aria-label') == 'Modules')
    svg = nav.find(lambda x: x.tag == 'svg' and pattern_name(x) == 'footer')
    patterns['footer'] = (svg, children_jsx(svg, Ctx({}, ''), 0))
    for icon in nav.find_all(lambda x: x.tag == 'svg' and attr(x, 'stroke') == 'currentColor'):
        node_jsx(icon, Ctx(routes, 'central'))
    screens = [convert(f, routes) for f in files]

    # Pictogrammes.
    with open(os.path.join(OUT, 'components', 'iconPaths.tsx'), 'w', encoding='utf-8') as f:
        f.write('// Généré par tools/convert-maquettes.py depuis les maquettes EGA.\n')
        f.write('export const iconPaths = {\n')
        for name in sorted(icons):
            f.write(f'  {name}: <>{icons[name]}</>,\n')
        f.write('};\n\nexport type IconName = keyof typeof iconPaths;\n')

    # Motifs.
    with open(os.path.join(OUT, 'components', 'patternShapes.tsx'), 'w', encoding='utf-8') as f:
        f.write('// Généré par tools/convert-maquettes.py depuis les maquettes EGA.\n')
        f.write('export const patternShapes = {\n')
        for name in sorted(patterns):
            n, body = patterns[name]
            f.write(f'  {name}: {{ width: {attr(n, "width")}, height: {attr(n, "height")}, shapes: <>{body}</> }},\n')
        f.write('};\n\nexport type PatternVariant = keyof typeof patternShapes;\n')

    # Routes.
    with open(os.path.join(OUT, 'routes.tsx'), 'w', encoding='utf-8') as f:
        f.write('// Généré par tools/convert-maquettes.py : un écran par maquette.\n')
        f.write("import { lazy } from 'react';\n\n")
        f.write('export const screens = [\n')
        for app, comp, route, title in screens:
            f.write(f"  {{ app: '{app}', path: '{route}', title: {json.dumps(title, ensure_ascii=False)}, Component: lazy(() => import('./pages/{app}/{comp}')) }},\n")
        f.write('] as const;\n')
    print(f'{len(screens)} écrans, {len(icons)} pictogrammes, {len(patterns)} motifs')


main()
