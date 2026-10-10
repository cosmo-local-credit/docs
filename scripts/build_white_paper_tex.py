#!/usr/bin/env python3
"""Build docs-owned LaTeX from the Vocs white-paper pages."""

from __future__ import annotations

import html
import argparse
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PAGES_ROOT = ROOT / "docs" / "pages"
PAGES = PAGES_ROOT / "white-paper"
OUT_DIR = ROOT / "white-paper"
OUT_TEX = OUT_DIR / "clc_white_paper.tex"
LOCALES = ["en", "ar", "zh", "zh-Hant", "dz", "de", "es", "fil", "fr", "hi", "it", "nl", "pt", "sr", "uk", "sw"]
POLYGLOSSIA_LANGUAGES = {
    "ar": "arabic",
    "de": "german",
    "dz": "tibetan",
    "es": "spanish",
    "fil": "english",
    "fr": "french",
    "hi": "hindi",
    "it": "italian",
    "nl": "dutch",
    "pt": "portuguese",
    "sr": "serbian",
    "sw": "english",
    "uk": "ukrainian",
    "zh": "chinese",
    "zh-Hant": "chinese",
}

TRANSLATION_DATES = {
    "es": "9 October 2026",
    "fr": "9 October 2026",
    "fil": "10 October 2026",
    "ar": "10 October 2026",
    "de": "10 October 2026",
    "dz": "10 October 2026",
    "hi": "10 October 2026",
    "it": "10 October 2026",
    "nl": "10 October 2026",
    "pt": "10 October 2026",
    "sr": "10 October 2026",
    "sw": "10 October 2026",
    "uk": "10 October 2026",
    "zh": "10 October 2026",
    "zh-Hant": "10 October 2026",
}

DISPLAY_FORMULAS = {
    "V_j (network) = S_j/D_j": r"V_j^{\mathrm{network}} = \frac{S_j}{D_j}",
    "Credit - Debt = Backing Capacity": r"\mathrm{Credit} - \mathrm{Debt} = \mathrm{Backing\ Capacity}",
    "D_j = ∑_k D_{j, k}": r"D_j = \sum_k D_{j,k}",
    "S_j = ∑_k S_{j, k}": r"S_j = \sum_k S_{j,k}",
    "V_j = S_j / D_j (if D_j = 0, define V_j = 0)": r"V_j = \frac{S_j}{D_j}\quad \text{if }D_j>0,\qquad V_j=0\quad \text{if }D_j=0",
    "F ≈ τ · Q_swap": r"F \approx \tau \cdot Q_{\mathrm{swap}}",
    "F_cash ≈ χ · F": r"F_{\mathrm{cash}} \approx \chi \cdot F",
    "Ex-Post-Metrics_LP ≈ (ϕ · F) / K": r"\mathrm{ExPostMetric}_{LP} \approx \frac{\phi \cdot F}{K}",
    "FeeFlow_LP ≈ (ϕ · F) / K = (ϕ · τ · Q_swap) / K": r"\mathrm{FeeFlow}_{LP} \approx \frac{\phi \cdot F}{K} = \frac{\phi \cdot \tau \cdot Q_{\mathrm{swap}}}{K}",
    "τ_p = f_p · r_p": r"\tau_p = f_p \cdot r_p",
    "limit_user_epoch = F_epoch × (stCLC_user / stCLC_total)": r"\mathrm{limit}_{\mathrm{user,epoch}} = F_{\mathrm{epoch}} \times \frac{\mathrm{stCLC}_{\mathrm{user}}}{\mathrm{stCLC}_{\mathrm{total}}}",
    "R_required ≈ B_cash / (τ · χ)": r"R_{\mathrm{required}} \approx \frac{B_{\mathrm{cash}}}{\tau \cdot \chi}",
    "t ≈ log(R_required / R_0) / log(1 + g)": r"t \approx \frac{\log(R_{\mathrm{required}}/R_0)}{\log(1+g)}",
    "`V_commit,t = FulfilledValue_t / AverageOutstandingEligibleCommitmentValue_t`": r"V_{\mathrm{commit},t} = \frac{\mathrm{FulfilledValue}_t}{\mathrm{AverageOutstandingEligibleCommitmentValue}_t}",
}

ORDER = [
    "executive-summary.md",
    "chapter-01-commitment-pooling-protocol-cpp-the-core-primitive.md",
    "chapter-02-the-accounting-shift-from-assets-to-trust.md",
    "chapter-03-velocity-of-settlement-why-liquidity-providers-should-care.md",
    "chapter-04-reusable-forward-style-collateral.md",
    "chapter-05-from-isolated-pools-to-a-federated-network.md",
    "chapter-06-the-missing-piece-network-level-liquidity-governance.md",
    "chapter-07-clc-stewardship-and-the-clc-token.md",
    "chapter-08-technical-scope-growth.md",
    "chapter-09-economics-for-lps.md",
    "chapter-10-comprehensive-risk-framework.md",
    "chapter-11-governance-mechanics.md",
    "chapter-12-lp-term-sheet-non-binding-outline.md",
    "chapter-13-jargon-plain-language-glossary.md",
    "chapter-14-kpis-health-indicators.md",
    "chapter-15-roadmap-indicative.md",
    "chapter-16-values-evaluation-template-for-listings-liquidity-mandates.md",
    "chapter-17-legal-compliance-note.md",
    "chapter-18-conclusion.md",
    "appendix-a-math-box.md",
    "appendix-b-fee-waterfall.md",
    "appendix-c-kpi-definitions.md",
    "appendix-d-launch-parameters.md",
    "appendix-e-worked-example.md",
    "appendix-f-dataroom-checklist.md",
]

LATEX_SNIPPETS = {
    "\u00a0": " ",
    "\u200b": "",
    "\ufeff": "",
    "“": "``",
    "”": "''",
    "‘": "`",
    "’": "'",
    "—": "---",
    "–": "--",
    "−": "-",
    "‑": "-",
    "…": r"\ldots{}",
    "§": r"\S{}",
    "•": r"\textbullet{}",
    "→": r"$\to$",
    "←": r"$\leftarrow$",
    "↔": r"$\leftrightarrow$",
    "≤": r"$\leq$",
    "≥": r"$\geq$",
    "≈": r"$\approx$",
    "∑": r"$\sum$",
    "·": r"$\cdot$",
    "×": r"$\times$",
    "±": r"$\pm$",
    "τ": r"$\tau$",
    "χ": r"$\chi$",
    "ϕ": r"$\phi$",
    "α": r"$\alpha$",
    "β": r"$\beta$",
    "γ": r"$\gamma$",
    "π": r"$\pi$",
    "Δ": r"$\Delta$",
    "Σ": r"$\Sigma$",
    "∈": r"$\in$",
    "↑": r"$\uparrow$",
    "↓": r"$\downarrow$",
    "\u0304": "",
}

SPECIALS = {
    "\\": r"\textbackslash{}",
    "&": r"\&",
    "%": r"\%",
    "$": r"\$",
    "#": r"\#",
    "_": r"\_",
    "{": r"\{",
    "}": r"\}",
    "~": r"\textasciitilde{}",
    "^": r"\textasciicircum{}",
}


def escape_text(text: str) -> str:
    out: list[str] = []
    for char in text:
        if char in LATEX_SNIPPETS:
            out.append(LATEX_SNIPPETS[char])
        elif char in SPECIALS:
            out.append(SPECIALS[char])
        else:
            out.append(char)
    return "".join(out)


def escape_url(url: str) -> str:
    if url.startswith("/"):
        url = f"https://docs.cosmolocal.credit{url}"
    return url.replace("\\", "/").replace(" ", "%20").replace("%", r"\%").replace("#", r"\#")


def normalize_source(text: str) -> str:
    text = html.unescape(text)
    text = re.sub(r'<a\b[^>]*href="([^"]+)"[^>]*>([^<]+)</a>', r"[\2](\1)", text)
    text = re.sub(r"<[^>]+>", "", text)
    return text.replace("\r\n", "\n")


def strip_md(text: str) -> str:
    text = text.strip()
    text = re.sub(r"^\*{1,2}(.*?)\*{1,2}$", r"\1", text)
    text = re.sub(r"^#+\s*", "", text)
    return text.strip()


def render_inline(text: str) -> str:
    placeholders: list[tuple[str, str]] = []

    def protect(value: str) -> str:
        token = f"@@PH{len(placeholders)}@@"
        placeholders.append((token, value))
        return token

    def code_repl(match: re.Match[str]) -> str:
        return protect(r"\texttt{" + escape_text(match.group(1)) + "}")

    def link_repl(match: re.Match[str]) -> str:
        label = render_inline(match.group(1))
        url = escape_url(match.group(2).strip())
        return protect(r"\href{" + url + "}{" + label + "}")

    def bold_repl(match: re.Match[str]) -> str:
        return protect(r"\textbf{" + render_inline(match.group(1)) + "}")

    def italic_repl(match: re.Match[str]) -> str:
        return protect(r"\emph{" + render_inline(match.group(1)) + "}")

    text = re.sub(r"`([^`]+)`", code_repl, text)
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", link_repl, text)
    text = re.sub(r"(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)", italic_repl, text)
    text = re.sub(r"\*\*([^*]+)\*\*", bold_repl, text)

    rendered = escape_text(text)
    for _ in range(5):
        changed = False
        for token, value in reversed(placeholders):
            if token in rendered:
                rendered = rendered.replace(token, value)
                changed = True
        if not changed:
            break
    return rendered


def normalize_formula_key(line: str) -> str:
    return re.sub(r"\s+", " ", line.strip().rstrip("."))


def render_display_formula(line: str, locale: str) -> list[str]:
    formula = DISPLAY_FORMULAS.get(normalize_formula_key(line))
    if not formula:
        return []
    if locale in {"ar", "dz", "hi"}:
        formula = re.sub(
            r"\\mathrm\{([^{}]+)\}",
            lambda match: rf"\text{{\latinfont {match.group(1)}}}",
            formula,
        )
        formula = formula.replace(r"\text{if }", r"\text{\latinfont if }")
    return [r"\[", formula, r"\]", ""]


def safe_toc_text(rendered: str) -> str:
    replacements = {
        r"$\to$": "to",
        r"$\leftarrow$": "from",
        r"$\leftrightarrow$": "and",
        r"$\leq$": "<=",
        r"$\geq$": ">=",
        r"$\approx$": "approximately",
        r"$\sum$": "sum",
        r"$\cdot$": ".",
        r"$\times$": "x",
        r"$\pm$": "+/-",
        r"$\tau$": "tau",
        r"$\chi$": "chi",
        r"$\phi$": "phi",
        r"$\alpha$": "alpha",
        r"$\beta$": "beta",
        r"$\gamma$": "gamma",
    }
    for old, new in replacements.items():
        rendered = rendered.replace(old, new)
    return re.sub(r"\$([^$]*)\$", r"\1", rendered)


def heading_command(level: int) -> str:
    if level <= 2:
        return "section"
    if level == 3:
        return "subsection"
    return "subsubsection"


def render_heading(level: int, title: str) -> list[str]:
    command = heading_command(level)
    clean = render_inline(strip_md(title))
    lines = [rf"\{command}*{{{clean}}}"]
    if command in {"section", "subsection"}:
        lines.append(rf"\addcontentsline{{toc}}{{{command}}}{{{safe_toc_text(clean)}}}")
    return lines


def split_table_row(line: str) -> list[str]:
    return [cell.strip() for cell in line.strip().strip("|").split("|")]


def render_table(rows: list[str]) -> list[str]:
    parsed = [split_table_row(row) for row in rows]
    parsed = [row for row in parsed if not all(re.fullmatch(r":?-{3,}:?", cell) for cell in row)]
    if not parsed:
        return []
    columns = len(parsed[0])
    col_spec = " ".join(["P{0.30\\linewidth}", "P{0.62\\linewidth}"][:columns])
    if columns > 2:
        width = 0.92 / columns
        col_spec = " ".join([f"P{{{width:.2f}\\linewidth}}" for _ in range(columns)])

    lines = [rf"\begin{{longtable}}{{{col_spec}}}", r"\toprule"]
    header, *body = parsed
    lines.append(" & ".join(render_inline(cell) for cell in header) + r" \\")
    lines.append(r"\midrule")
    lines.append(r"\endhead")
    for row in body:
        padded = row + [""] * max(0, columns - len(row))
        lines.append(" & ".join(render_inline(cell) for cell in padded[:columns]) + r" \\")
    lines.extend([r"\bottomrule", r"\end{longtable}", ""])
    return lines


def render_image(line: str) -> list[str]:
    match = re.match(r"!\[([^\]]*)\]\(([^)\s]+)(?:\s+\"([^\"]+)\")?\)", line.strip())
    if not match:
        return []
    alt = match.group(1).strip() or "diagram"
    path = match.group(2).strip()
    title = (match.group(3) or "").strip()
    local_asset = OUT_DIR / "assets" / Path(path).name
    asset_path = f"white-paper/assets/{local_asset.name}" if local_asset.exists() else ""
    if not asset_path:
        return [
            r"\begin{center}",
            r"\emph{[" + render_inline(f"Source image not found: {alt} ({path})") + r"]}",
            r"\end{center}",
            "",
        ]
    caption = title or alt
    return [
        r"\begin{figure}[htbp]",
        r"\centering",
        rf"\includegraphics[width=0.90\linewidth]{{{asset_path}}}",
        rf"\caption{{{render_inline(caption)}}}",
        r"\end{figure}",
        "",
    ]


def list_type(marker: str) -> str:
    return "enumerate" if re.match(r"\d+[.)]", marker) else "itemize"


def close_lists(out: list[str], stack: list[tuple[int, str]], target: int = -1) -> None:
    while stack and stack[-1][0] > target:
        _indent, env = stack.pop()
        out.append(rf"\end{{{env}}}")


def convert_lines(lines: list[str], locale: str) -> list[str]:
    out: list[str] = []
    stack: list[tuple[int, str]] = []
    i = 0
    while i < len(lines):
        raw = lines[i].rstrip()
        if locale == "ar":
            raw = raw.replace("–", "-")
        line = raw.strip()
        if line.startswith("> "):
            line = line[2:].lstrip()

        if not line:
            i += 1
            continue

        if line in {"---", "##"}:
            close_lists(out, stack)
            out.append("")
            i += 1
            continue

        if line.startswith("|"):
            close_lists(out, stack)
            table_rows: list[str] = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                table_rows.append(lines[i].strip())
                i += 1
            out.extend(render_table(table_rows))
            continue

        if line.startswith("!["):
            close_lists(out, stack)
            out.extend(render_image(line))
            i += 1
            continue

        display_formula = render_display_formula(line, locale)
        if display_formula:
            close_lists(out, stack)
            out.extend(display_formula)
            i += 1
            continue

        heading = re.match(r"^(#{1,6})\s+(.+)$", line)
        if heading:
            close_lists(out, stack)
            out.extend(render_heading(len(heading.group(1)), heading.group(2)))
            out.append("")
            i += 1
            continue

        bold_heading = re.match(r"^\*\*([^*]+)\*\*$", line)
        numbered_heading = re.match(r"^(\d+(?:\.\d+)+\.?)\s+(.+)$", line)
        appendix_heading = re.match(r"^([A-Z]\.)\s+(.+)$", line)
        if bold_heading and len(bold_heading.group(1)) < 95:
            close_lists(out, stack)
            out.extend(render_heading(3, bold_heading.group(1)))
            out.append("")
            i += 1
            continue
        if numbered_heading:
            close_lists(out, stack)
            out.extend(render_heading(3, line))
            out.append("")
            i += 1
            continue
        if appendix_heading:
            close_lists(out, stack)
            out.extend(render_heading(2, line))
            out.append("")
            i += 1
            continue

        item = re.match(r"^(\s*)((?:[-*•])|(?:\d+[.)]))\s+(.+)$", raw)
        if item:
            indent = len(item.group(1).replace("\t", "    "))
            env = list_type(item.group(2))
            while stack and stack[-1][0] > indent:
                close_lists(out, stack, stack[-2][0] if len(stack) > 1 else -1)
            if not stack or stack[-1][0] < indent or stack[-1][1] != env:
                if stack and stack[-1][0] == indent and stack[-1][1] != env:
                    close_lists(out, stack, indent - 1)
                out.append(rf"\begin{{{env}}}[leftmargin=*]")
                stack.append((indent, env))
            out.append(r"\item " + render_inline(item.group(3)))
            i += 1
            continue

        close_lists(out, stack)
        out.append(render_inline(line))
        out.append("")
        i += 1

    close_lists(out, stack)
    return out


def extract_index(pages_dir: Path = PAGES) -> tuple[list[str], str, dict[str, str]]:
    text = normalize_source((pages_dir / "index.mdx").read_text(encoding="utf-8"))
    lines = text.splitlines()
    version = ""
    publication_date = ""
    distribution = ""
    framing = ""
    audience = ""
    abstract: list[str] = []
    body: list[str] = []
    in_abstract = False
    in_body = False

    for line in lines:
        stripped = line.strip()
        if stripped.startswith("**Version:**"):
            version = stripped
        elif stripped.startswith("**Date:**"):
            publication_date = stripped
        elif stripped.startswith("**Distribution:**"):
            distribution = stripped
        elif stripped.startswith("**Framing note:**"):
            framing = stripped
        elif stripped.startswith("**Intended audience:**"):
            audience = stripped
            continue
        elif stripped == "## How to read this paper":
            in_body = True
            body.append(stripped)
            continue
        elif stripped in {"**Abstract**", "## Abstract"}:
            in_abstract = True
            in_body = False
            continue
        elif in_abstract and re.match(r"^#{1,6}\s", stripped):
            in_abstract = False
            in_body = True
            body.append(stripped)
            continue
        elif stripped.startswith("**Pool Sovereignty"):
            in_abstract = False
            in_body = True
            body.append(stripped)
            continue

        if in_abstract:
            abstract.append(line)
        elif in_body:
            body.append(line)

    version_value = re.sub(r"^\*\*Version:\*\*\s*", "", version).strip()
    date_value = re.sub(r"^\*\*Date:\*\*\s*", "", publication_date).strip()
    if not version_value or not date_value:
        raise ValueError("White Paper index must define **Version:** and **Date:** metadata")

    front_lines = ["## Front Matter and Key Concepts", ""]
    for value in [version, publication_date, distribution, framing, audience]:
        if value:
            front_lines.append(value)
            front_lines.append("")
    front_lines.extend(body)
    abstract_text = "\n\n".join(
        render_inline(line.strip())
        for line in abstract
        if line.strip()
    )
    return front_lines, abstract_text, {
        "version": version_value,
        "date": date_value,
    }


def english_preamble(abstract_text: str, version: str, publication_date: str) -> list[str]:
    return [
        r"\documentclass[11pt]{article}",
        "",
        r"\usepackage[utf8]{inputenc}",
        r"\usepackage[T1]{fontenc}",
        r"\usepackage{lmodern}",
        r"\usepackage[margin=1in]{geometry}",
        r"\usepackage{amsmath,amssymb}",
        r"\usepackage{booktabs}",
        r"\usepackage{array}",
        r"\usepackage{longtable}",
        r"\usepackage{tabularx}",
        r"\usepackage{graphicx}",
        r"\usepackage{caption}",
        r"\usepackage{enumitem}",
        r"\usepackage{hyperref}",
        r"\usepackage{url}",
        r"\newcolumntype{P}[1]{>{\raggedright\arraybackslash}p{#1}}",
        r"\captionsetup{font=small,labelfont=bf}",
        r"\setlength{\emergencystretch}{2em}",
        r"\hypersetup{",
        r"  colorlinks=true,",
        r"  linkcolor=blue,",
        r"  citecolor=blue,",
        r"  urlcolor=blue,",
        r"  pdftitle={Cosmo-Local Credit (CLC) White Paper},",
        r"  pdfauthor={William O. Ruddick and Mohamed Sohail}",
        r"}",
        "",
        r"\title{Cosmo-Local Credit (CLC): A Network for Routing Credit, Coordinating Commitments, and Financing a Healthy Cosmo-Local Economy}",
        r"\author{William O. Ruddick \\ Mohamed Sohail \\ Grassroots Economics Foundation \\ \texttt{info@grassecon.org}}",
        rf"\date{{Version {escape_text(version)} --- {escape_text(publication_date)}}}",
        "",
        r"\begin{document}",
        r"\maketitle",
        "",
        r"\begin{abstract}",
        abstract_text,
        r"\end{abstract}",
        "",
        r"\noindent\textbf{Publication status:} Final versioned public publication. This paper is not investment advice and does not constitute an offer to sell or a solicitation to buy any security or financial instrument. Later versions may revise the designs described here.",
        "",
        r"\tableofcontents",
        r"\newpage",
        "",
    ]


def localized_preamble(locale: str, subtitle: str) -> list[str]:
    language = POLYGLOSSIA_LANGUAGES[locale]
    language_setup = [
        r"\usepackage{polyglossia}",
        (
            r"\setdefaultlanguage[variant=traditional]{chinese}"
            if locale == "zh-Hant"
            else rf"\setdefaultlanguage{{{language}}}"
        ),
    ]
    if locale == "ar":
        language_setup = [
            r"\usepackage[bidi=basic]{babel}",
            r"\babelprovide[main,import]{arabic}",
            r"\babelprovide[import]{english}",
            r"\babelfont[english]{rm}{Noto Sans}",
        ]
    font_setup = [
        r"\setmainfont{Noto Sans}",
        r"\setsansfont{Noto Sans}",
        r"\setmonofont{Noto Sans Mono}",
    ]
    language_fonts: list[str] = []
    complex_script = {
        "ar": ("Noto Sans Arabic", "Arabic", "arabic"),
        "dz": ("Noto Serif Tibetan", "Tibetan", "tibetan"),
        "hi": ("Noto Sans Devanagari", "Devanagari", "devanagari"),
    }.get(locale)
    if complex_script:
        script_font, script, family = complex_script
        font_setup = [
            r'\directlua{luaotfload.add_fallback("clclatin", {"name:Noto Sans:mode=harf"})}',
            r'\directlua{luaotfload.add_fallback("clclatinmono", {"name:Noto Sans Mono:mode=harf"})}',
            rf"\setmainfont[Script={script},RawFeature={{fallback=clclatin}}]{{{script_font}}}",
            rf"\setsansfont[Script={script},RawFeature={{fallback=clclatin}}]{{{script_font}}}",
            rf"\setmonofont[Script={script},RawFeature={{fallback=clclatinmono}}]{{{script_font}}}",
        ]
        language_fonts = [
            rf"\newfontfamily\{family}font[Script={script},RawFeature={{fallback=clclatin}}]{{{script_font}}}",
            rf"\newfontfamily\{family}fontsf[Script={script},RawFeature={{fallback=clclatin}}]{{{script_font}}}",
            rf"\newfontfamily\{family}fonttt[Script={script},RawFeature={{fallback=clclatinmono}}]{{{script_font}}}",
            r"\newfontfamily\latinfont{Noto Sans}",
        ]
    elif locale in {"zh", "zh-Hant"}:
        cjk_font = "Noto Sans CJK TC" if locale == "zh-Hant" else "Noto Sans CJK SC"
        font_setup = [
            rf"\setmainfont{{{cjk_font}}}",
            rf"\setsansfont{{{cjk_font}}}",
            rf"\setmonofont{{{cjk_font}}}",
        ]
        language_fonts = [
            rf"\newfontfamily\chinesefont{{{cjk_font}}}",
            rf"\newfontfamily\cjkfont{{{cjk_font}}}",
            rf"\newfontfamily\cjkfontsf{{{cjk_font}}}",
            rf"\newfontfamily\cjkfonttt{{{cjk_font}}}",
        ]
    elif locale in {"sr", "uk"}:
        language_fonts = [r"\newfontfamily\cyrillicfont[Script=Cyrillic]{Noto Sans}"]

    column_alignment = r"\raggedleft" if locale == "ar" else r"\raggedright"
    if locale == "ar":
        title_name = r"\foreignlanguage{english}{Cosmo-Local Credit (CLC)}"
    elif locale == "dz":
        # Tibetan font metrics extend far above the Latin baseline. Add explicit
        # cover space so the title's upper glyphs stay inside the page margin.
        title_name = r"\vspace*{0.85in}Cosmo-Local Credit (CLC)"
    else:
        title_name = "Cosmo-Local Credit (CLC)"
    return [
        r"\documentclass[11pt]{article}",
        "",
        r"\usepackage{fontspec}",
        r"\defaultfontfeatures{Renderer=Harfbuzz,Ligatures=TeX}",
        *font_setup,
        r"\usepackage[margin=1in]{geometry}",
        r"\usepackage{amsmath,amssymb}",
        r"\usepackage{booktabs}",
        r"\usepackage{array}",
        r"\usepackage{longtable}",
        r"\usepackage{tabularx}",
        r"\usepackage{graphicx}",
        r"\usepackage{caption}",
        r"\usepackage{enumitem}",
        r"\usepackage{ragged2e}",
        r"\usepackage{hyperref}",
        r"\usepackage{url}",
        *language_setup,
        *language_fonts,
        rf"\newcolumntype{{P}}[1]{{>{{{column_alignment}\arraybackslash}}p{{#1}}}}",
        r"\captionsetup{font=small,labelfont=bf}",
        r"\setlength{\emergencystretch}{6em}",
        r"\hypersetup{",
        r"  unicode=true,",
        r"  colorlinks=true,",
        r"  linkcolor=blue,",
        r"  citecolor=blue,",
        r"  urlcolor=blue,",
        rf"  pdflang={{{'zh-CN' if locale == 'zh' else 'fil-PH' if locale == 'fil' else locale}}},",
        r"  pdftitle={Cosmo-Local Credit (CLC) White Paper v0.8},",
        r"  pdfauthor={William O. Ruddick and Mohamed Sohail}",
        r"}",
        "",
        rf"\title{{{title_name}\\" + render_inline(subtitle) + "}",
        r"\author{William O. Ruddick \\ Mohamed Sohail \\ Grassroots Economics Foundation \\ \texttt{info@grassecon.org}}",
        rf"\date{{White Paper v0.8 translation: {TRANSLATION_DATES[locale]}}}",
        "",
        r"\begin{document}",
        r"\maketitle",
        *([r"\newpage"] if locale == "dz" else []),
        r"\tableofcontents",
        r"\newpage",
        r"\sloppy",
        r"\RaggedLeft" if locale == "ar" else r"\RaggedRight",
        "",
    ]


def localized_index(pages_dir: Path) -> tuple[list[str], str]:
    lines = normalize_source((pages_dir / "index.mdx").read_text(encoding="utf-8")).splitlines()
    subtitle = "A Network for Routing Credit, Coordinating Commitments, and Financing a Healthy Cosmo-Local Economy"
    output: list[str] = []
    found_subtitle = False
    for line in lines:
        if line.startswith("# "):
            continue
        if line.startswith("## ") and not found_subtitle:
            subtitle = strip_md(line)
            found_subtitle = True
            continue
        output.append(line)
    return output, subtitle


def build(locale: str = "en") -> str:
    if locale == "en":
        front_lines, abstract_text, meta = extract_index()
        out = english_preamble(abstract_text, meta["version"], meta["date"])
        pages_dir = PAGES
    else:
        pages_dir = PAGES_ROOT / locale / "white-paper"
        front_lines, subtitle = localized_index(pages_dir)
        out = localized_preamble(locale, subtitle)
    out.extend(convert_lines(front_lines, locale))
    for filename in ORDER:
        source = normalize_source((pages_dir / filename).read_text(encoding="utf-8"))
        out.extend(convert_lines(source.splitlines(), locale))
        out.append("")
    out.append(r"\end{document}")
    return "\n".join(out) + "\n"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--all", action="store_true")
    parser.add_argument("--locale", choices=LOCALES)
    args = parser.parse_args()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    locales = LOCALES if args.all else [args.locale or "en"]
    for locale in locales:
        output = OUT_TEX if locale == "en" else OUT_DIR / f"clc_white_paper_{locale}.tex"
        output.write_text(build(locale), encoding="utf-8")
        print(output)


if __name__ == "__main__":
    main()
