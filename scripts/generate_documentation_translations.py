#!/usr/bin/env python3
"""Generate the static documentation translations with a local NLLB model.

This is a maintainer tool, not a site runtime dependency. It preserves Markdown,
code, formulas, URLs, identifiers, and product names; applies the clc-app glossary;
and records source hashes plus an automated back-translation review.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
from dataclasses import dataclass
from difflib import SequenceMatcher
from pathlib import Path
from typing import Callable

import ctranslate2
import sentencepiece as spm


ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "docs/pages"
I18N = ROOT / "docs/i18n"
LOCALES = ["ar", "de", "dz", "es", "fr", "it", "pt", "sr", "sw", "uk"]
LANGUAGE_CODES = {
    "en": "eng_Latn",
    "ar": "arb_Arab",
    "de": "deu_Latn",
    "dz": "dzo_Tibt",
    "es": "spa_Latn",
    "fr": "fra_Latn",
    "it": "ita_Latn",
    "pt": "por_Latn",
    "sr": "srp_Cyrl",
    "sw": "swh_Latn",
    "uk": "ukr_Cyrl",
}
APP_BASELINE = "32265981e7e2f7fcca9c0bb53b7aad8a1559f7f1"
TRANSLATION_DATES = {
    "fr": "9 October 2026",
    "es": "9 October 2026",
    "it": "10 October 2026",
    "pt": "10 October 2026",
}
UNCHANGED_NAMES = [
    "Cosmo-Local Credit",
    "CLC App",
    "Sarafu Network",
    "Grassroots Economics Foundation",
    "Joseph Kimani",
    "William O. Ruddick",
    "Mohamed Sohail",
    "Protocol v1.1.0",
    "White Paper v0.8",
    "SwapPool",
    "SwapRouter",
    "Limiter",
    "Quoter",
    "VoucherFactory",
    "PoolFactory",
    "OpenZeppelin",
    "MiniSearch",
]
MANUAL_TRANSLATIONS = {
    "it": {
        "cosmolocal.credit": "cosmolocal.credit",
        "Introduction": "Introduzione",
        "Protocol": "Protocollo",
        "Governance": "Governance",
        "White Paper": "Libro bianco",
        "Getting started": "Per iniziare",
        "Concepts and vocabulary": "Concetti e vocabolario",
        "Example": "Esempio",
        "History": "Storia",
        "Overview": "Panoramica",
        "Smart contracts": "Contratti intelligenti",
        "Network architecture": "Architettura della rete",
        "Governance mechanics": "Meccanismi di governance",
        "Terms of Service": "Termini di servizio",
        "Executive summary": "Sintesi",
        "Commitment Pooling Protocol (CPP)": "Protocollo di messa in comune degli impegni (CPP)",
        "The accounting shift": "Il cambiamento contabile",
        "Fulfillment, discharge & exchange": "Adempimento, estinzione e scambio",
        "Reusable forward-style collateral": "Garanzia riutilizzabile di tipo forward",
        "From isolated Pools to a federated network": "Da Fondi isolati a una rete federata",
        "Proposed network liquidity & governance": "Liquidità e governance di rete proposte",
        "Proposed governance assets": "Asset di governance proposti",
        "Technical scope & growth": "Ambito tecnico e crescita",
        "Proposed liquidity-program economics": "Economia proposta del programma di liquidità",
        "Comprehensive risk framework": "Quadro completo dei rischi",
        "Proposed liquidity-program term sheet": "Term sheet proposto del programma di liquidità",
        "Glossary": "Glossario",
        "Proposed KPI specification": "Specifica KPI proposta",
        "Roadmap": "Tabella di marcia",
        "Values & evaluation template": "Modello di valori e valutazione",
        "Legal & compliance note": "Nota legale e di conformità",
        "Conclusion": "Conclusione",
        "Math box": "Riquadro matematico",
        "Fee waterfall": "Distribuzione delle commissioni",
        "KPI definitions": "Definizioni dei KPI",
        "Launch parameters": "Parametri di lancio",
        "Worked example": "Esempio pratico",
        "Dataroom checklist": "Lista di controllo della data room",
        "1. Commitment Pooling Protocol (CPP)": "1. Protocollo di messa in comune degli impegni (CPP)",
        "2. The accounting shift": "2. Il cambiamento contabile",
        "3. Fulfillment, discharge & exchange": "3. Adempimento, estinzione e scambio",
        "4. Reusable forward-style collateral": "4. Garanzia riutilizzabile di tipo forward",
        "5. From isolated Pools to a federated network": "5. Da Fondi isolati a una rete federata",
        "6. Proposed network liquidity & governance": "6. Liquidità e governance di rete proposte",
        "7. Proposed governance assets": "7. Asset di governance proposti",
        "8. Technical scope & growth": "8. Ambito tecnico e crescita",
        "9. Proposed liquidity-program economics": "9. Economia proposta del programma di liquidità",
        "10. Comprehensive risk framework": "10. Quadro completo dei rischi",
        "11. Governance mechanics": "11. Meccanismi di governance",
        "12. Proposed liquidity-program term sheet": "12. Term sheet proposto del programma di liquidità",
        "13. Glossary": "13. Glossario",
        "14. Proposed KPI specification": "14. Specifica KPI proposta",
        "15. Roadmap": "15. Tabella di marcia",
        "16. Values & evaluation template": "16. Modello di valori e valutazione",
        "17. Legal & compliance note": "17. Nota legale e di conformità",
        "18. Conclusion": "18. Conclusione",
        "Appendix A. Math box": "Appendice A. Riquadro matematico",
        "Appendix B. Fee waterfall": "Appendice B. Distribuzione delle commissioni",
        "Appendix C. KPI definitions": "Appendice C. Definizioni dei KPI",
        "Appendix D. Launch parameters": "Appendice D. Parametri di lancio",
        "Appendix E. Worked example": "Appendice E. Esempio pratico",
        "Appendix F. Dataroom checklist": "Appendice F. Lista di controllo della data room",
        "Issuer": "Emittente",
        "Holder": "Titolare",
        "Steward": "Responsabile del Fondo",
        "Fulfillment": "Adempimento",
        "Discharge": "Estinzione",
        "Token": "Token",
        "Voucher": "Buono",
        "Wallet": "Portafoglio",
        "“Redeem”": "“Riscattare”",
        "“Retire voucher”": "“Ritiri il buono”",
        "“Credit limit”": "“Limite di credito”",
        "“Credit limits”": "“Limiti di credito”",
        "You": "Lei",
        "you": "lei",
        "User": "Utente",
        "Search": "Cerca",
        "Close search dialog": "Chiudi la finestra di ricerca",
        "Toggle detail view": "Attiva o disattiva la vista dettagliata",
        "Reset search": "Azzera la ricerca",
        "Navigate": "Naviga",
        "Select": "Seleziona",
        "Close": "Chiudi",
        "Reset": "Azzera",
        "Menu": "Menu",
        "On this page": "In questa pagina",
        "Previous": "Precedente",
        "Next": "Successivo",
        "Copy": "Copia",
        "Copied": "Copiato",
        "Skip to content": "Vai al contenuto",
        "Ask in ChatGPT": "Chiedi a ChatGPT",
        "Copy page for LLMs": "Copia la pagina per gli LLM",
        "Last updated:": "Ultimo aggiornamento:",
        "Code group": "Gruppo di codice",
        "Terminal": "Terminale",
        "File": "File",
        "No results for": "Nessun risultato per",
        "Top": "Inizio",
        "Scroll to top": "Torna all'inizio",
        "Page not found": "Pagina non trovata",
        "The page you were looking for could not be found.": "Impossibile trovare la pagina cercata.",
        "Go to home page": "Vai alla pagina iniziale",
        "Scroll horizontally to view the full diagram.": "Scorri orizzontalmente per vedere il diagramma completo.",
        "The diagram could not be rendered": "Non è stato possibile visualizzare il diagramma",
        "Convenience translation": "Prima traduzione per la revisione",
        "This translation is provided for convenience. The English Terms are the source text and control unless applicable law requires otherwise.": (
            "Questa traduzione è fornita per agevolare la lettura. I Termini in inglese "
            "sono il testo originale e prevalgono, salvo ove diversamente richiesto dalla legge applicabile."
        ),
        "Read the English Terms": "Leggi i Termini in inglese",
        "About this translation": "Informazioni su questa traduzione",
        "This is a translation of White Paper v0.8. The English source was published on 30 September 2026. This translation was published on 8 October 2026. English is the source text.": (
            "Questa è una prima traduzione del Libro bianco v0.8 (White Paper v0.8), "
            "preparata per la revisione. Il testo originale in inglese è stato pubblicato "
            "il 30 settembre 2026. Questa traduzione è stata preparata il 10 ottobre 2026. "
            "L'inglese è il testo originale."
        ),
        "Read the English source": "Leggi il testo originale in inglese",
        "The superseded v0.7 PDF is available in English only.": "Il PDF della versione v0.7, ormai superata, è disponibile solo in inglese.",
        "Email: `info@grassecon.org`": "E-mail: `info@grassecon.org`",
        "Version 0.7 PDF": "PDF della versione 0.7",
        "SDK requirements.": "Requisiti dell'SDK.",
    },
    "pt": {
        "cosmolocal.credit": "cosmolocal.credit",
        "Introduction": "Introdução",
        "Protocol": "Protocolo",
        "Governance": "Governação",
        "White Paper": "Livro Branco",
        "Getting started": "Começar",
        "Concepts and vocabulary": "Conceitos e vocabulário",
        "Example": "Exemplo",
        "History": "História",
        "Overview": "Visão geral",
        "Smart contracts": "Contratos inteligentes",
        "Network architecture": "Arquitetura da rede",
        "Governance mechanics": "Mecanismos de governação",
        "Terms of Service": "Termos de Serviço",
        "Executive summary": "Resumo executivo",
        "Commitment Pooling Protocol (CPP)": "Protocolo de Partilha de Compromissos (CPP)",
        "The accounting shift": "A mudança contabilística",
        "Fulfillment, discharge & exchange": "Cumprimento, quitação e troca",
        "Reusable forward-style collateral": "Garantia reutilizável de tipo forward",
        "From isolated Pools to a federated network": "De Fundos isolados a uma rede federada",
        "Proposed network liquidity & governance": "Proposta de liquidez e governação da rede",
        "Proposed governance assets": "Ativos de governação propostos",
        "Technical scope & growth": "Âmbito técnico e crescimento",
        "Proposed liquidity-program economics": "Economia proposta do programa de liquidez",
        "Comprehensive risk framework": "Quadro abrangente de riscos",
        "Proposed liquidity-program term sheet": "Resumo de condições do programa de liquidez proposto",
        "Glossary": "Glossário",
        "Proposed KPI specification": "Especificação proposta de KPI",
        "Roadmap": "Roteiro",
        "Values & evaluation template": "Modelo de valores e avaliação",
        "Legal & compliance note": "Nota jurídica e de conformidade",
        "Conclusion": "Conclusão",
        "Math box": "Quadro matemático",
        "Fee waterfall": "Distribuição de comissões",
        "KPI definitions": "Definições de KPI",
        "Launch parameters": "Parâmetros de lançamento",
        "Worked example": "Exemplo prático",
        "Dataroom checklist": "Lista de verificação da sala de dados",
        "1. Commitment Pooling Protocol (CPP)": "1. Protocolo de Partilha de Compromissos (CPP)",
        "2. The accounting shift": "2. A mudança contabilística",
        "3. Fulfillment, discharge & exchange": "3. Cumprimento, quitação e troca",
        "4. Reusable forward-style collateral": "4. Garantia reutilizável de tipo forward",
        "5. From isolated Pools to a federated network": "5. De Fundos isolados a uma rede federada",
        "6. Proposed network liquidity & governance": "6. Proposta de liquidez e governação da rede",
        "7. Proposed governance assets": "7. Ativos de governação propostos",
        "8. Technical scope & growth": "8. Âmbito técnico e crescimento",
        "9. Proposed liquidity-program economics": "9. Economia proposta do programa de liquidez",
        "10. Comprehensive risk framework": "10. Quadro abrangente de riscos",
        "11. Governance mechanics": "11. Mecanismos de governação",
        "12. Proposed liquidity-program term sheet": "12. Resumo de condições do programa de liquidez proposto",
        "13. Glossary": "13. Glossário",
        "14. Proposed KPI specification": "14. Especificação proposta de KPI",
        "15. Roadmap": "15. Roteiro",
        "16. Values & evaluation template": "16. Modelo de valores e avaliação",
        "17. Legal & compliance note": "17. Nota jurídica e de conformidade",
        "18. Conclusion": "18. Conclusão",
        "Appendix A. Math box": "Apêndice A. Quadro matemático",
        "Appendix B. Fee waterfall": "Apêndice B. Distribuição de comissões",
        "Appendix C. KPI definitions": "Apêndice C. Definições de KPI",
        "Appendix D. Launch parameters": "Apêndice D. Parâmetros de lançamento",
        "Appendix E. Worked example": "Apêndice E. Exemplo prático",
        "Appendix F. Dataroom checklist": "Apêndice F. Lista de verificação da sala de dados",
        "Issuer": "Emissor",
        "Holder": "Titular",
        "Steward": "Gestor do Fundo",
        "Fulfillment": "Cumprimento",
        "Discharge": "Quitação",
        "Token": "Token",
        "Voucher": "Vale",
        "Wallet": "Carteira",
        "“Redeem”": "“Resgatar”",
        "“Retire voucher”": "“Retirar vale”",
        "“Credit limit”": "“Limite de crédito”",
        "“Credit limits”": "“Limites de crédito”",
        "You": "Você",
        "you": "você",
        "User": "Utilizador",
        "Close search dialog": "Fechar caixa de diálogo de pesquisa",
        "Toggle detail view": "Alternar vista detalhada",
        "Reset search": "Limpar pesquisa",
        "Navigate": "Navegar",
        "Select": "Selecionar",
        "Close": "Fechar",
        "Reset": "Repor",
        "Menu": "Menu",
        "On this page": "Nesta página",
        "Previous": "Anterior",
        "Next": "Seguinte",
        "Copy": "Copiar",
        "Copied": "Copiado",
        "Skip to content": "Saltar para o conteúdo",
        "Ask in ChatGPT": "Perguntar no ChatGPT",
        "Copy page for LLMs": "Copiar página para LLMs",
        "Last updated:": "Última atualização:",
        "Code group": "Grupo de código",
        "Terminal": "Terminal",
        "File": "Ficheiro",
        "No results for": "Nenhum resultado para",
        "Top": "Topo",
        "Scroll to top": "Voltar ao topo",
        "Page not found": "Página não encontrada",
        "The page you were looking for could not be found.": (
            "Não foi possível encontrar a página que procurava."
        ),
        "Go to home page": "Ir para a página inicial",
        "Scroll horizontally to view the full diagram.": (
            "Desloque-se horizontalmente para ver o diagrama completo."
        ),
        "The diagram could not be rendered": "Não foi possível apresentar o diagrama",
        "Convenience translation": "Primeira tradução para revisão",
        "This translation is provided for convenience. The English Terms are the source text and control unless applicable law requires otherwise.": (
            "Esta tradução é fornecida para facilitar a leitura. Os Termos em inglês "
            "são o texto original e prevalecem, salvo se a lei aplicável exigir o contrário."
        ),
        "Read the English Terms": "Ler os Termos em inglês",
        "About this translation": "Sobre esta tradução",
        "This is a translation of White Paper v0.8. The English source was published on 30 September 2026. This translation was published on 8 October 2026. English is the source text.": (
            "Esta é uma primeira tradução do Livro Branco v0.8 (White Paper v0.8), "
            "preparada para revisão. O texto original em inglês foi publicado em 30 de "
            "setembro de 2026. Esta tradução foi preparada em 10 de outubro de 2026. "
            "O inglês é o texto original."
        ),
        "Read the English source": "Ler o texto original em inglês",
        "The superseded v0.7 PDF is available in English only.": (
            "O PDF da versão v0.7, já substituída, está disponível apenas em inglês."
        ),
        "Email: `info@grassecon.org`": "Correio eletrónico: `info@grassecon.org`",
        "Version 0.7 PDF": "PDF da versão 0.7",
        "SDK requirements.": "Requisitos do SDK.",
    },
    "es": {
        "cosmolocal.credit": "cosmolocal.credit",
        "“Redeem”": "“Canjear”",
        "“Retire voucher”": "“Retirar vale”",
        "“Credit limit”": "“Límite de crédito”",
        "“Credit limits”": "“Límites de crédito”",
        "You": "Usted",
        "Convenience translation": "Primera traducción para revisión",
        "This translation is provided for convenience. The English Terms are the source text and control unless applicable law requires otherwise.": (
            "Esta traducción se ofrece para facilitar la lectura. Las Condiciones en inglés "
            "son el texto original y prevalecen, salvo que la legislación aplicable exija lo contrario."
        ),
        "Read the English Terms": "Leer las Condiciones en inglés",
        "About this translation": "Acerca de esta traducción",
        "This is a translation of White Paper v0.8. The English source was published on 30 September 2026. This translation was published on 8 October 2026. English is the source text.": (
            "Esta es una primera traducción del Libro Blanco v0.8 (White Paper v0.8) "
            "preparada para revisión. El texto original en inglés se publicó el 30 de "
            "septiembre de 2026. Esta traducción se preparó el 9 de octubre de 2026. "
            "El inglés es el texto original."
        ),
        "Read the English source": "Leer el texto original en inglés",
        "The superseded v0.7 PDF is available in English only.": (
            "El PDF de la versión v0.7, ya sustituida, solo está disponible en inglés."
        ),
        "Email: `info@grassecon.org`": "Correo electrónico: `info@grassecon.org`",
        "Version 0.7 PDF": "PDF de la versión 0.7",
        "SDK requirements.": "Requisitos del SDK.",
    },
    "fr": {
        "Email: `info@grassecon.org`": "Adresse électronique : `info@grassecon.org`",
        "Version 0.7 PDF": "PDF de la version 0.7",
        "SDK requirements.": "Exigences du SDK.",
        "Current Protocol v1.1.0 Pool fees, additional protocol fees, and Pool token-balance caps remain governed by the deployed contracts and configuration, not these proposed values.": (
            "Les frais actuels des Bassins dans Protocol v1.1.0, les frais de protocole "
            "supplémentaires et les plafonds de solde de jetons des Bassins restent régis "
            "par les contrats déployés et leur configuration, et non par les valeurs proposées ici."
        ),
    }
}


@dataclass
class Protected:
    token: str
    source: str
    replacement: str


class NllbTranslator:
    def __init__(self, model: Path, threads: int) -> None:
        self.engine = ctranslate2.Translator(
            str(model),
            device="cpu",
            compute_type="int8",
            inter_threads=1,
            intra_threads=threads,
        )
        self.tokenizer = spm.SentencePieceProcessor(
            model_file=str(model / "sentencepiece.bpe.model")
        )

    def translate_many(
        self, texts: list[str], source: str, target: str, beam_size: int = 4
    ) -> list[str]:
        if not texts:
            return []
        unique_texts = list(dict.fromkeys(texts))
        tokenized = [
            [LANGUAGE_CODES[source]] + self.tokenizer.encode(text, out_type=str) + ["</s>"]
            for text in unique_texts
        ]
        results = self.engine.translate_batch(
            tokenized,
            target_prefix=[[LANGUAGE_CODES[target]]] * len(tokenized),
            beam_size=beam_size,
            max_batch_size=256,
            batch_type="tokens",
            max_decoding_length=512 if target == "dz" else 256,
            replace_unknowns=True,
        )
        translated_unique = [
            self.tokenizer.decode(result.hypotheses[0][1:]).strip()
            for result in results
        ]
        translations = dict(zip(unique_texts, translated_unique, strict=True))
        return [translations[text] for text in texts]


class MarianPairTranslator:
    """Translate one locale with dedicated forward and backward Marian models."""

    def __init__(
        self, forward_model: Path, backward_model: Path, locale: str, threads: int
    ) -> None:
        self.locale = locale
        self.forward = ctranslate2.Translator(
            str(forward_model),
            device="cpu",
            compute_type="int8",
            inter_threads=1,
            intra_threads=threads,
        )
        self.backward = ctranslate2.Translator(
            str(backward_model),
            device="cpu",
            compute_type="int8",
            inter_threads=1,
            intra_threads=threads,
        )
        self.forward_source = spm.SentencePieceProcessor(
            model_file=str(forward_model / "source.spm")
        )
        self.forward_target = spm.SentencePieceProcessor(
            model_file=str(forward_model / "target.spm")
        )
        self.backward_source = spm.SentencePieceProcessor(
            model_file=str(backward_model / "source.spm")
        )
        self.backward_target = spm.SentencePieceProcessor(
            model_file=str(backward_model / "target.spm")
        )
        # split_long only needs a source tokenizer with an encode method.
        self.tokenizer = self.forward_source

    def translate_many(
        self, texts: list[str], source: str, target: str, beam_size: int = 4
    ) -> list[str]:
        if not texts:
            return []
        if source == "en" and target == self.locale:
            engine = self.forward
            source_tokenizer = self.forward_source
            target_tokenizer = self.forward_target
        elif source == self.locale and target == "en":
            engine = self.backward
            source_tokenizer = self.backward_source
            target_tokenizer = self.backward_target
        else:
            raise ValueError(f"Unsupported Marian direction: {source} -> {target}")

        unique_texts = list(dict.fromkeys(texts))
        tokenized = [
            source_tokenizer.encode(text, out_type=str) + ["</s>"]
            for text in unique_texts
        ]
        results = engine.translate_batch(
            tokenized,
            beam_size=beam_size,
            max_batch_size=256,
            batch_type="tokens",
            max_decoding_length=512,
            replace_unknowns=True,
        )
        translated_unique = [
            target_tokenizer.decode(result.hypotheses[0]).strip()
            for result in results
        ]
        translations = dict(zip(unique_texts, translated_unique, strict=True))
        return [translations[text] for text in texts]


class CachedTranslator:
    def __init__(
        self,
        translator: NllbTranslator | MarianPairTranslator,
        path: Path,
        batch_size: int = 128,
    ) -> None:
        self.translator = translator
        self.tokenizer = translator.tokenizer
        self.path = path
        self.batch_size = batch_size
        self.cache: dict[str, str] = (
            json.loads(path.read_text()) if path.exists() else {}
        )

    @staticmethod
    def key(text: str, source: str, target: str, beam_size: int) -> str:
        return digest(
            json.dumps(
                [source, target, beam_size, text],
                ensure_ascii=False,
                separators=(",", ":"),
            )
        )

    def translate_many(
        self, texts: list[str], source: str, target: str, beam_size: int = 4
    ) -> list[str]:
        unique_texts = list(dict.fromkeys(texts))
        missing = [
            text
            for text in unique_texts
            if self.key(text, source, target, beam_size) not in self.cache
        ]
        for start in range(0, len(missing), self.batch_size):
            batch = missing[start : start + self.batch_size]
            translated = self.translator.translate_many(
                batch, source, target, beam_size=beam_size
            )
            for text, result in zip(batch, translated, strict=True):
                self.cache[self.key(text, source, target, beam_size)] = result
            self.path.write_text(
                json.dumps(self.cache, ensure_ascii=False, separators=(",", ":"))
            )
            print(
                f"cached {source}->{target} batch "
                f"{min(start + len(batch), len(missing))}/{len(missing)}",
                flush=True,
            )
        return [
            self.cache[self.key(text, source, target, beam_size)] for text in texts
        ]


def digest(value: str) -> str:
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def english_sources() -> list[Path]:
    sources: list[Path] = []
    for section in ["introduction", "protocol", "governance", "white-paper"]:
        sources.extend(
            path
            for path in sorted((PAGES / section).glob("*"))
            if path.suffix in {".md", ".mdx"}
        )
    return sources


def route_for(path: Path) -> str:
    relative = path.relative_to(PAGES).with_suffix("").as_posix()
    return "/" + (relative.removesuffix("/index") or "")


def protect_text(
    value: str,
    locale: str,
    canonical_terms: dict[str, str],
    app_glossary: dict[str, dict[str, str]],
) -> tuple[str, list[Protected]]:
    protected: list[Protected] = []

    def store(
        source: str,
        replacement: str | None = None,
        _token_hint: str | None = None,
    ) -> str:
        token = f"XxOpaque{len(protected):04d}Xx"
        protected.append(
            Protected(token, source, replacement if replacement is not None else source)
        )
        return token

    for name in sorted(UNCHANGED_NAMES, key=len, reverse=True):
        pattern = rf"(?<![\w]){re.escape(name)}(?![\w])"
        value = re.sub(
            pattern,
            lambda match: store(match.group(0), match.group(0)),
            value,
        )

    # Multi-word canonical concepts are safe to protect as complete units. Single
    # words need sentence context so French articles, contractions and agreement
    # remain grammatical; those are normalized after translation instead.
    glossary = canonical_terms
    for source, replacement in sorted(glossary.items(), key=lambda item: len(item[0]), reverse=True):
        pattern = rf"(?<![\w]){re.escape(source)}(?![\w])"
        value = re.sub(
            pattern,
            lambda match, target=replacement: store(match.group(0), target),
            value,
            flags=re.IGNORECASE,
        )

    patterns = [
        r"\*\*[^*\n]*(?:=|≈|−|≤|≥)[^*\n]*\*\*",
        r"__",
        r"`[^`\n]+`",
        r"(?<=\])\([^\n)]*\)",
        r"https?://[^\s)>]+",
        r"mailto:[^\s)>]+",
        r"<[^>]+>",
        r"\$[^$\n]+\$",
        r"\\\([^\n]+?\\\)",
        r"\{[^{}\n]+\}",
        r"\b0x[a-fA-F0-9]+\b",
        r"\b\d+(?:\.\d+)+(?:-[A-Za-z0-9.]+)?\b",
        r"\b[a-z]+(?:[A-Z][A-Za-z0-9]*)+\b",
        r"(?!XxOpaque\d{4}Xx)\b[A-Z][A-Z0-9-]{1,}\b",
    ]
    for pattern in patterns:
        value = re.sub(pattern, lambda match: store(match.group(0)), value)
    return value, protected


def restore_text(value: str, protected: list[Protected]) -> str:
    for item in reversed(protected):
        token_pattern = re.escape(item.token)
        if item.token.startswith("XxOpaque"):
            token_pattern = re.escape(item.token[:-2]) + r"Xx?"
        token_match = re.search(token_pattern, value, flags=re.IGNORECASE)
        if not token_match:
            if item.replacement in value:
                continue
            raise ValueError(
                f"Translation dropped protected token {item.token}: {item.source}; output={value!r}"
            )
        value = re.sub(
            token_pattern,
            lambda _match, replacement=item.replacement: replacement,
            value,
            flags=re.IGNORECASE,
        )
    return value


def normalize_translation(source: str, value: str, locale: str) -> str:
    if locale == "it":
        def pool_term(match: re.Match[str]) -> str:
            term = "Fondi" if match.group(0).lower().endswith("s") else "Fondo"
            return term if match.group(0)[0].isupper() else term.lower()

        value = re.sub(r"\bpools?\b", pool_term, value, flags=re.IGNORECASE)
        value = re.sub(r"(?<!CLC )\bApp\b", "app", value)
        value = re.sub(r"\bProtocol\b(?! v1\.1\.0)", "protocollo", value)
        value = value.replace("- Sì , certo .", ".")
        value = value.replace("- Sì, certo.", ".")
        value = value.replace("- Si ' .", ".")
        value = value.replace("- Si'.", ".")
        value = value.replace("cosmolocal.crédito", "cosmolocal.credit")
        value = value.replace("Redeem”", "“Riscattare”")
        value = value.replace("Retire voucher”", "“Ritiri il buono”")
        value = value.replace("Voucher di pensione", "“Ritiri il buono”")
        value = value.replace("Limite di credito”", "“Limite di credito”")
        value = value.replace("Tenitore", "Titolare")
        value = value.replace("Tenitori", "Titolari")
        value = value.replace("Raccoglienza delle tasse", "Riscossione delle commissioni")
        value = value.replace("rake di rete", "quota di rete")
        value = value.replace("Rake di rete", "Quota di rete")
        value = re.sub(r"\bdelle piscine\b", "dei Fondi", value, flags=re.IGNORECASE)
        value = re.sub(r"\bdella piscina\b", "del Fondo", value, flags=re.IGNORECASE)
        value = re.sub(r"\balle piscine\b", "ai Fondi", value, flags=re.IGNORECASE)
        value = re.sub(r"\balla piscina\b", "al Fondo", value, flags=re.IGNORECASE)
        value = re.sub(r"\ble piscine\b", "i Fondi", value, flags=re.IGNORECASE)
        value = re.sub(r"\bla piscina\b", "il Fondo", value, flags=re.IGNORECASE)
        value = re.sub(r"\buna piscina\b", "un Fondo", value, flags=re.IGNORECASE)
        value = re.sub(r"\bpiscine\b", "Fondi", value, flags=re.IGNORECASE)
        value = re.sub(r"\bpiscina\b", "Fondo", value, flags=re.IGNORECASE)
        value = re.sub(r"\buna Fondo\b", "un Fondo", value, flags=re.IGNORECASE)
        value = re.sub(r"\bla Fondo\b", "il Fondo", value, flags=re.IGNORECASE)
        value = re.sub(r"\bdella Fondo\b", "del Fondo", value, flags=re.IGNORECASE)
        value = re.sub(r"\balla Fondo\b", "al Fondo", value, flags=re.IGNORECASE)
        value = re.sub(r"\ble Fondi\b", "i Fondi", value, flags=re.IGNORECASE)
        value = re.sub(r"\bdelle Fondi\b", "dei Fondi", value, flags=re.IGNORECASE)
        value = re.sub(r"\bResponsabile dei Fondi\b", "Responsabile del Fondo", value)
        value = re.sub(r"\bResponsabili del Fondo\b", "Responsabili dei Fondi", value)
        value = re.sub(r"\bIl app\b", "L'app", value)
        value = re.sub(r"\bil app\b", "l'app", value)
        value = re.sub(r"\bLa app\b", "L'app", value)
        value = re.sub(r"\bla app\b", "l'app", value)
        value = value.replace("l' app", "l'app").replace("L' app", "L'app")
        value = value.replace("l' CLC App", "la CLC App")
        value = re.sub(r"\bmeccaniche\b", "meccanismi", value, flags=re.IGNORECASE)
        value = re.sub(r"\bdiscarico\b", "estinzione", value, flags=re.IGNORECASE)
        value = re.sub(r"\bscarico\b", "estinzione", value, flags=re.IGNORECASE)
        value = re.sub(r"\bdiscarica\b", "estinzione", value, flags=re.IGNORECASE)
        if re.search(r"\bcurrent\b", source, flags=re.IGNORECASE):
            value = re.sub(r"\bcorrente\b", "attuale", value, flags=re.IGNORECASE)
        if re.search(r"\bredemption\b", source, flags=re.IGNORECASE):
            value = re.sub(
                r"\bpresentazione della redenzione\b",
                "presentazione per il riscatto",
                value,
                flags=re.IGNORECASE,
            )
            value = re.sub(r"\breden[zt]ione\b", "riscatto", value, flags=re.IGNORECASE)
        if re.search(r"\bvouchers\b", source, flags=re.IGNORECASE):
            value = re.sub(r"\bvouchers?\b", "buoni", value, flags=re.IGNORECASE)
        elif re.search(r"\bvoucher\b", source, flags=re.IGNORECASE):
            value = re.sub(r"\bvoucher\b", "buono", value, flags=re.IGNORECASE)
        return value

    if locale == "pt":
        def pool_term(match: re.Match[str]) -> str:
            term = "Fundos" if match.group(0).lower().endswith("s") else "Fundo"
            return term if match.group(0)[0].isupper() else term.lower()

        value = re.sub(r"\bpools?\b", pool_term, value, flags=re.IGNORECASE)
        if re.search(r"\bpools?\b", source, flags=re.IGNORECASE):
            value = re.sub(
                r"\bgrupos\b",
                "Fundos",
                value,
                flags=re.IGNORECASE,
            )
            value = re.sub(
                r"\bgrupo\b",
                "Fundo",
                value,
                flags=re.IGNORECASE,
            )
        value = re.sub(r"(?<!CLC )\bApp\b", "aplicação", value)
        value = re.sub(r"\bProtocol\b(?! v1\.1\.0)", "protocolo", value)
        value = value.replace("- Não .", ".")
        value = value.replace("-; Não", "; não")
        value = value.replace("CLC-;", "CLC;")
        value = value.replace("CPP-;", "CPP;")
        value = re.sub(r"\b(CLC|CPP)-(?=\s)", r"\1", value)
        value = value.replace("cosmolocal.crédito", "cosmolocal.credit")
        value = value.replace("Redeem”", "“Resgatar”")
        value = value.replace("Retire voucher”", "“Retirar vale”")
        value = value.replace("Limite de crédito”", "“Limite de crédito”")
        value = value.replace("ancinho da rede", "comissão de rede")
        value = value.replace("rake da rede", "comissão de rede")
        value = value.replace("rede de ancinho", "comissão de rede")
        value = re.sub(
            r"\b(?:rasto|rastreamento|rack) d[ae] rede\b",
            "comissão de rede",
            value,
            flags=re.IGNORECASE,
        )
        value = re.sub(r"\baplicativos\b", "aplicações", value, flags=re.IGNORECASE)
        value = re.sub(r"\baplicativo\b", "aplicação", value, flags=re.IGNORECASE)
        value = re.sub(r"\bO aplicação\b", "A aplicação", value)
        value = re.sub(r"\bo aplicação\b", "a aplicação", value)
        value = re.sub(r"\bum aplicação\b", "uma aplicação", value, flags=re.IGNORECASE)
        value = re.sub(r"\bdo aplicação\b", "da aplicação", value, flags=re.IGNORECASE)
        value = re.sub(r"\bno aplicação\b", "na aplicação", value, flags=re.IGNORECASE)
        value = re.sub(r"\bao aplicação\b", "à aplicação", value, flags=re.IGNORECASE)
        value = re.sub(r"\bos aplicações\b", "as aplicações", value, flags=re.IGNORECASE)
        value = re.sub(r"\bdos aplicações\b", "das aplicações", value, flags=re.IGNORECASE)
        value = re.sub(
            r"\baplicação web progressivo\b",
            "aplicação web progressiva",
            value,
            flags=re.IGNORECASE,
        )
        value = value.replace("aplicação's", "aplicação")
        value = re.sub(r"\bgovernança\b", "governação", value, flags=re.IGNORECASE)
        value = re.sub(r"\bmecânicas\b", "mecanismos", value, flags=re.IGNORECASE)
        value = re.sub(r"\bconceptos\b", "conceitos", value, flags=re.IGNORECASE)
        value = re.sub(r"\bcotizações\b", "cotações", value, flags=re.IGNORECASE)
        value = re.sub(r"\bcotização\b", "cotação", value, flags=re.IGNORECASE)
        value = re.sub(r"\bcuratividade\b", "curadoria", value, flags=re.IGNORECASE)
        value = re.sub(
            r"\bagregação de compromissos\b",
            "partilha de compromissos",
            value,
            flags=re.IGNORECASE,
        )
        value = re.sub(r"\bimplantação\b", "implementação", value, flags=re.IGNORECASE)
        value = re.sub(r"\bimplantações\b", "implementações", value, flags=re.IGNORECASE)
        if re.search(r"\bcurrent\b", source, flags=re.IGNORECASE):
            value = re.sub(r"\bcorrente\b", "atual", value, flags=re.IGNORECASE)
        if re.search(r"\bdischarge\b", source, flags=re.IGNORECASE):
            value = re.sub(r"\bdescarga\b", "quitação", value, flags=re.IGNORECASE)
        if re.search(r"\bredemption\b", source, flags=re.IGNORECASE):
            value = re.sub(r"\bredenção\b", "resgate", value, flags=re.IGNORECASE)
            value = re.sub(r"\bpresentação\b", "apresentação", value, flags=re.IGNORECASE)
        if re.search(r"\bissuer\b", source, flags=re.IGNORECASE):
            value = re.sub(r"\bemitentes\b", "emissores", value, flags=re.IGNORECASE)
            value = re.sub(r"\bemitente\b", "emissor", value, flags=re.IGNORECASE)
        value = re.sub(r"\bFundos governadas\b", "Fundos governados", value)
        value = re.sub(r"\buma Fundo\b", "um Fundo", value, flags=re.IGNORECASE)
        value = re.sub(r"\bA Fundo\b", "O Fundo", value)
        value = re.sub(r"\ba Fundo\b", "o Fundo", value)
        value = re.sub(r"\bUm Oferta\b", "Uma Oferta", value)
        value = re.sub(r"\bA token\b", "O token", value)
        value = re.sub(r"\buma token\b", "um token", value, flags=re.IGNORECASE)
        value = value.replace("““Limite de crédito”", "“Limite de crédito”")
        value = re.sub(r"\bde piscinas\b", "de Fundos", value, flags=re.IGNORECASE)
        value = re.sub(r"\bdas piscinas\b", "dos Fundos", value, flags=re.IGNORECASE)
        value = re.sub(r"\bda piscina\b", "do Fundo", value, flags=re.IGNORECASE)
        value = re.sub(r"\bàs piscinas\b", "aos Fundos", value, flags=re.IGNORECASE)
        value = re.sub(r"\bà piscina\b", "ao Fundo", value, flags=re.IGNORECASE)
        value = re.sub(r"\bas piscinas\b", "os Fundos", value, flags=re.IGNORECASE)
        value = re.sub(r"\ba piscina\b", "o Fundo", value, flags=re.IGNORECASE)
        value = re.sub(r"\bumas piscinas\b", "uns Fundos", value, flags=re.IGNORECASE)
        value = re.sub(r"\buma piscina\b", "um Fundo", value, flags=re.IGNORECASE)
        value = re.sub(r"\bpiscinas\b", "Fundos", value, flags=re.IGNORECASE)
        value = re.sub(r"\bpiscina\b", "Fundo", value, flags=re.IGNORECASE)
        value = re.sub(r"\bmicro\s+Fundos\b", "microfundos", value, flags=re.IGNORECASE)
        value = re.sub(r"\b(?:cupons|cupões)\b", "vales", value, flags=re.IGNORECASE)
        value = re.sub(r"\b(?:cupom|cupão)\b", "vale", value, flags=re.IGNORECASE)
        if re.search(r"\bvouchers\b", source, flags=re.IGNORECASE):
            value = re.sub(r"\bvouchers?\b", "vales", value, flags=re.IGNORECASE)
        elif re.search(r"\bvoucher\b", source, flags=re.IGNORECASE):
            value = re.sub(r"\bvoucher\b", "vale", value, flags=re.IGNORECASE)
        return value

    if locale == "es":
        def pool_term(match: re.Match[str]) -> str:
            term = "Fondos" if match.group(0).lower().endswith("s") else "Fondo"
            return term if match.group(0)[0].isupper() else term.lower()

        value = re.sub(r"\bpools?\b", pool_term, value, flags=re.IGNORECASE)
        value = re.sub(r"(?<!CLC )\bApp\b", "aplicación", value)
        value = re.sub(r"\bProtocol\b(?! v1\.1\.0)", "protocolo", value)
        value = value.replace("¿ Qué es eso ?", "").replace("¿Qué es eso?", "")
        value = value.replace("cosmolocal.crédito", "cosmolocal.credit")
        value = value.replace("Redeem”", "“Canjear”")
        value = value.replace("Buchón de jubilación”", "“Retirar vale”")
        value = value.replace("Limite de crédito”", "“Límite de crédito”")
        value = value.replace("Taxa", "Tasa")
        value = value.replace("rayo de la red", "comisión de red")
        value = value.replace("racha de red", "comisión de red")
        value = value.replace("Rastreado de red", "Comisión de red")
        value = value.replace("red de lotes", "compensación por lotes")
        value = re.sub(r"\bde las piscinas\b", "de los Fondos", value, flags=re.IGNORECASE)
        value = re.sub(r"\bde la piscina\b", "del Fondo", value, flags=re.IGNORECASE)
        value = re.sub(r"\ba las piscinas\b", "a los Fondos", value, flags=re.IGNORECASE)
        value = re.sub(r"\ba la piscina\b", "al Fondo", value, flags=re.IGNORECASE)
        value = re.sub(r"\blas piscinas\b", "los Fondos", value, flags=re.IGNORECASE)
        value = re.sub(r"\bla piscina\b", "el Fondo", value, flags=re.IGNORECASE)
        value = re.sub(r"\bunas piscinas\b", "unos Fondos", value, flags=re.IGNORECASE)
        value = re.sub(r"\buna piscina\b", "un Fondo", value, flags=re.IGNORECASE)
        value = re.sub(r"\bpiscinas\b", "Fondos", value, flags=re.IGNORECASE)
        value = re.sub(r"\bpiscina\b", "Fondo", value, flags=re.IGNORECASE)
        value = re.sub(r"\bmicro\s+Fondos\b", "microfondos", value, flags=re.IGNORECASE)
        value = re.sub(r"\bcupones\b", "vales", value, flags=re.IGNORECASE)
        value = re.sub(r"\bcupón\b", "vale", value, flags=re.IGNORECASE)
        value = re.sub(r"\bofrendas\b", "Ofertas", value, flags=re.IGNORECASE)
        value = re.sub(r"\bofrenda\b", "Oferta", value, flags=re.IGNORECASE)
        if re.search(r"\bvouchers\b", source, flags=re.IGNORECASE):
            value = re.sub(
                r"\b(?:bonos|cupones|vouchers?)\b",
                "vales",
                value,
                flags=re.IGNORECASE,
            )
        elif re.search(r"\bvoucher\b", source, flags=re.IGNORECASE):
            value = re.sub(
                r"\b(?:bono|cupón|voucher)\b",
                "vale",
                value,
                flags=re.IGNORECASE,
            )
        return value

    if locale != "fr":
        return value

    def pool_term(match: re.Match[str]) -> str:
        term = "Bassins" if match.group(0).lower().endswith("s") else "Bassin"
        return term if match.group(0)[0].isupper() else term.lower()

    value = re.sub(r"\bpools?\b", pool_term, value, flags=re.IGNORECASE)
    value = re.sub(r"(?<!CLC )\bApp\b", "application", value)
    value = re.sub(r"\bProtocol\b(?! v1\.1\.0)", "protocole", value)

    if re.search(r"\bvouchers\b", source, flags=re.IGNORECASE):
        value = re.sub(
            r"\b(?:bons d'achat|bons|coupons)\b(?!\s+d['’]échange)",
            "bons d’échange",
            value,
            flags=re.IGNORECASE,
        )
    elif re.search(r"\bvoucher\b", source, flags=re.IGNORECASE):
        value = re.sub(
            r"\b(?:bon d'achat|bon|coupon)\b(?!\s+d['’]échange)",
            "bon d’échange",
            value,
            flags=re.IGNORECASE,
        )
    if re.search(r"\bhops?\b", source, flags=re.IGNORECASE):
        value = re.sub(
            r"\bsauts?\b",
            lambda match: "étapes" if match.group(0).lower().endswith("s") else "étape",
            value,
            flags=re.IGNORECASE,
        )
    if re.search(r"\brake\b", source, flags=re.IGNORECASE):
        value = re.sub(
            r"\b(?:râteau|rake)(?:\s+de)?\s+réseau\b",
            "prélèvement de réseau",
            value,
            flags=re.IGNORECASE,
        )
        value = re.sub(r"\b(?:râteau|rake)\b", "prélèvement", value, flags=re.IGNORECASE)
    value = re.sub(r"bons? d'échange", lambda match: match.group(0).replace("'", "’"), value)
    return value


def split_long(value: str, tokenizer: spm.SentencePieceProcessor) -> list[str]:
    pieces = re.split(r"(?<=[.!?。؟;])\s+", value)
    if len(pieces) > 1:
        return [piece for piece in pieces if piece]
    if len(tokenizer.encode(value, out_type=str)) <= 420:
        return [value]
    chunks: list[str] = []
    current = ""
    for piece in pieces:
        candidate = f"{current} {piece}".strip()
        if current and len(tokenizer.encode(candidate, out_type=str)) > 380:
            chunks.append(current)
            current = piece
        else:
            current = candidate
    if current:
        chunks.append(current)
    return chunks


class MarkdownTemplate:
    def __init__(self, source: str) -> None:
        self.source = source
        self.segments: list[str] = []
        self.template: str | None = None

    def marker(self, value: str) -> str:
        if not value.strip():
            return value
        whitespace = re.fullmatch(r"(\s*)(.*?)(\s*)", value, flags=re.DOTALL)
        if whitespace and (whitespace.group(1) or whitespace.group(3)):
            return (
                whitespace.group(1)
                + self.marker(whitespace.group(2))
                + whitespace.group(3)
            )
        if "<br/>" in value:
            return "<br/>".join(self.marker(part) for part in value.split("<br/>"))
        if re.search(r"<a\s+[^>]*>.*?</a>", value):
            output: list[str] = []
            offset = 0
            for match in re.finditer(r"(<a\s+[^>]*>)(.*?)(</a>)", value):
                output.append(self.marker(value[offset : match.start()]))
                output.append(
                    f"{match.group(1)}{self.marker(match.group(2))}{match.group(3)}"
                )
                offset = match.end()
            output.append(self.marker(value[offset:]))
            return "".join(output)
        if re.search(r"!?\[[^\]]*\]\([^)]*\)", value):
            output: list[str] = []
            offset = 0
            for match in re.finditer(r"(!?)\[([^\]]*)\]\(([^)]*)\)", value):
                output.append(self.marker(value[offset : match.start()]))
                output.append(
                    f"{match.group(1)}[{self.marker(match.group(2))}]({match.group(3)})"
                )
                offset = match.end()
            output.append(self.marker(value[offset:]))
            return "".join(output)
        if re.search(r"\*\*.+?\*\*", value):
            output: list[str] = []
            offset = 0
            for match in re.finditer(r"\*\*(.+?)\*\*", value):
                output.append(self.marker(value[offset : match.start()]))
                output.append(f"**{self.marker(match.group(1))}**")
                offset = match.end()
            output.append(self.marker(value[offset:]))
            return "".join(output)
        bold = re.fullmatch(r"(\s*)\*\*(.+?)\*\*(\s*)", value)
        if bold:
            content = bold.group(2)
            number = re.match(r"^(\d+(?:\.\d+)*[.)]?\s+)(.+)$", content)
            prefix = number.group(1) if number else ""
            content = number.group(2) if number else content
            marker = f"CLCTRANSLATE{len(self.segments):05d}"
            self.segments.append(content)
            return f"{bold.group(1)}**{prefix}{marker}**{bold.group(3)}"
        bold_prefix = re.fullmatch(r"(\s*)\*\*(.+?)\*\*(.+)", value)
        if bold_prefix:
            label_source = bold_prefix.group(2)
            label_suffix = ":" if label_source.endswith(":") else ""
            label = self.marker(label_source.removesuffix(":")) + label_suffix
            remainder_source = bold_prefix.group(3)
            separator = re.match(r"\s*", remainder_source).group(0)  # type: ignore[union-attr]
            remainder = self.marker(remainder_source[len(separator) :])
            return f"{bold_prefix.group(1)}**{label}**{separator}{remainder}"
        number = re.match(r"^(\s*\d+(?:\.\d+)*[.)]?\s+)(.+)$", value)
        prefix = number.group(1) if number else ""
        value = number.group(2) if number else value
        marker = f"CLCTRANSLATE{len(self.segments):05d}"
        self.segments.append(value)
        return prefix + marker

    def build(self) -> str:
        if self.template is not None:
            return self.template
        lines = self.source.splitlines()
        output: list[str] = []
        in_code = False
        in_math = False
        in_chart = False
        for line in lines:
            stripped = line.strip()
            if stripped.startswith("```"):
                in_code = not in_code
                output.append(line)
                continue
            if stripped == "$$":
                in_math = not in_math
                output.append(line)
                continue
            if in_code or in_math:
                output.append(line)
                continue
            if line.startswith("import ") or line.startswith("export "):
                output.append(line.replace("../../components/", "../../../components/"))
                continue
            if re.fullmatch(r"\s*<[A-Z][A-Za-z0-9]*", line):
                output.append(line)
                continue
            property_match = re.fullmatch(r'(\s*[A-Za-z][A-Za-z0-9]*=")([^"]+)("\s*)', line)
            if property_match:
                output.append(
                    f"{property_match.group(1)}{self.marker(property_match.group(2))}"
                    f"{property_match.group(3)}"
                )
                continue
            if "chart={`" in line:
                in_chart = True
                output.append(line)
                continue
            if in_chart:
                if "`}" in line:
                    in_chart = False
                    output.append(line)
                    continue
                line = re.sub(
                    r'(?<=\[\")(.+?)(?=\"\])',
                    lambda match: self.marker(match.group(0)),
                    line,
                )
                line = re.sub(
                    r"(?<=\|)([^|]+)(?=\|)",
                    lambda match: self.marker(match.group(0)),
                    line,
                )
                output.append(line)
                continue
            if re.fullmatch(r"\s*\|?(?:\s*:?-+:?\s*\|)+\s*", line):
                output.append(line)
                continue
            if stripped.startswith("|") and stripped.endswith("|"):
                cells = line.split("|")
                output.append("|".join(self.marker(cell) if cell.strip() else cell for cell in cells))
                continue
            if re.fullmatch(r"\s*(?:</?[A-Z][^>]*>|[A-Z][A-Za-z]+\s*=.*|/>)\s*", line):
                label_match = re.search(r'label="([^"]+)"', line)
                if label_match:
                    value = self.marker(label_match.group(1))
                    line = line[: label_match.start(1)] + value + line[label_match.end(1) :]
                output.append(line)
                continue
            prefix_match = re.match(
                r"^(\s*(?:(?:#{1,6}|>|[-+*]|\d+[.)])\s+|\[[ xX]\]\s+))",
                line,
            )
            if prefix_match:
                prefix = prefix_match.group(1)
                output.append(prefix + self.marker(line[len(prefix) :]))
            else:
                output.append(self.marker(line))
        self.template = "\n".join(output) + ("\n" if self.source.endswith("\n") else "")
        return self.template

    def render(self, translated: list[str]) -> str:
        value = self.build()
        for index, segment in enumerate(translated):
            value = value.replace(f"CLCTRANSLATE{index:05d}", segment)
        if "CLCTRANSLATE" in value:
            raise ValueError("Not every Markdown translation marker was resolved")
        return value


def translate_segments(
    translator: NllbTranslator | MarianPairTranslator | CachedTranslator,
    segments: list[str],
    locale: str,
    canonical_terms: dict[str, str],
    app_glossary: dict[str, dict[str, str]],
) -> tuple[list[str], dict[str, float | int]]:
    protected_segments: list[tuple[list[str], list[Protected]]] = []
    flat_chunks: list[str] = []
    chunk_counts: list[int] = []
    for segment in segments:
        manual = MANUAL_TRANSLATIONS.get(locale, {}).get(segment)
        if manual is None and re.fullmatch(
            r"[A-Za-z][A-Za-z0-9]*(?:\s*[·|]\s*[A-Za-z][A-Za-z0-9]*)+",
            segment,
        ):
            manual = segment
        if manual is not None:
            protected_segments.append(([manual], []))
            chunk_counts.append(0)
            continue
        protected_value, protected = protect_text(
            segment, locale, canonical_terms, app_glossary
        )
        visible_source = protected_value
        for item in protected:
            visible_source = re.sub(
                re.escape(item.token), "", visible_source, flags=re.IGNORECASE
            )
        visible_source = re.sub(r"<[^>]+>", "", visible_source)
        chunks = (
            split_long(protected_value, translator.tokenizer)
            if re.search(r"[A-Za-z]", visible_source)
            else [protected_value]
        )
        protected_segments.append((chunks, protected))
        if re.search(r"[A-Za-z]", visible_source):
            flat_chunks.extend(chunks)
            chunk_counts.append(len(chunks))
        else:
            chunk_counts.append(0)

    translated_chunks = translator.translate_many(flat_chunks, "en", locale)
    translated: list[str] = []
    offset = 0
    for source_segment, (source_chunks, protected), count in zip(
        segments, protected_segments, chunk_counts, strict=True
    ):
        value = (
            " ".join(translated_chunks[offset : offset + count])
            if count
            else source_chunks[0]
        )
        try:
            translated.append(
                normalize_translation(
                    source_segment, restore_text(value, protected), locale
                )
            )
        except ValueError:
            # A smaller model can paraphrase away an opaque token. Translate only
            # the natural-language spans around those tokens, then reassemble the
            # unit so contract names and identifiers cannot be lost.
            retry_source = " ".join(source_chunks)
            retry_parts = re.split(r"(XxOpaque\d{4}Xx)", retry_source)
            natural_parts = [
                part
                for part in retry_parts
                if not re.fullmatch(r"XxOpaque\d{4}Xx", part)
                and re.search(r"[A-Za-z]", part)
            ]
            retry_translated = iter(
                translator.translate_many(
                    natural_parts, "en", locale, beam_size=1
                )
            )
            retry_value = "".join(
                part
                if re.fullmatch(r"XxOpaque\d{4}Xx", part)
                or not re.search(r"[A-Za-z]", part)
                else next(retry_translated)
                for part in retry_parts
            )
            try:
                translated.append(
                    normalize_translation(
                        source_segment, restore_text(retry_value, protected), locale
                    )
                )
            except ValueError as error:
                raise ValueError(f"source={source_segment!r}; {error}") from error
        offset += count

    # Verification is a separate full back-translation pass over every unit.
    back_chunks = translator.translate_many(translated, locale, "en", beam_size=1)
    similarities = [
        SequenceMatcher(None, source.casefold(), back.casefold()).ratio()
        for source, back in zip(segments, back_chunks, strict=True)
    ]
    review = {
        "units": len(segments),
        "meanBackTranslationSimilarity": round(sum(similarities) / len(similarities), 4)
        if similarities
        else 1.0,
        "unitsBelow0_35": sum(score < 0.35 for score in similarities),
        "scores": similarities,
    }
    return translated, review


def review_scores(scores: list[float]) -> dict[str, float | int]:
    return {
        "units": len(scores),
        "meanBackTranslationSimilarity": round(sum(scores) / len(scores), 4)
        if scores
        else 1.0,
        "unitsBelow0_35": sum(score < 0.35 for score in scores),
    }


def json_template(value: object, segments: list[str]) -> object:
    if isinstance(value, str):
        index = len(segments)
        segments.append(value)
        return {"__clcTranslationIndex": index}
    if isinstance(value, list):
        return [json_template(item, segments) for item in value]
    if isinstance(value, dict):
        return {key: json_template(item, segments) for key, item in value.items()}
    return value


def render_json_template(value: object, translated: list[str]) -> object:
    if isinstance(value, dict) and set(value) == {"__clcTranslationIndex"}:
        return translated[int(value["__clcTranslationIndex"])]
    if isinstance(value, list):
        return [render_json_template(item, translated) for item in value]
    if isinstance(value, dict):
        return {key: render_json_template(item, translated) for key, item in value.items()}
    return value


def translate_json(
    value: object,
    translate: Callable[[list[str]], tuple[list[str], dict[str, float | int]]],
) -> tuple[object, list[dict[str, float | int]]]:
    reviews: list[dict[str, float | int]] = []
    if isinstance(value, str):
        translated, review = translate([value])
        reviews.append(review)
        return translated[0], reviews
    if isinstance(value, list):
        output = []
        for item in value:
            translated, item_reviews = translate_json(item, translate)
            output.append(translated)
            reviews.extend(item_reviews)
        return output, reviews
    if isinstance(value, dict):
        output = {}
        for key, item in value.items():
            translated, item_reviews = translate_json(item, translate)
            output[key] = translated
            reviews.extend(item_reviews)
        return output, reviews
    return value, reviews


def localize_links(value: str, locale: str, routes: set[str]) -> str:
    def replace_target(match: re.Match[str]) -> str:
        wrapper, target = match.groups()
        path, suffix = re.match(r"([^?#]+)(.*)", target).groups()  # type: ignore[union-attr]
        if path not in routes:
            return match.group(0)
        return f"{wrapper}/{locale}{path}{suffix}"

    value = re.sub(r"((?:\]\(|href=[\"']))(/[^)\"']+)", replace_target, value)
    return value


def insert_notice(value: str, notice: str) -> str:
    lines = value.splitlines()
    for index, line in enumerate(lines):
        if line.startswith("# "):
            lines[index + 1 : index + 1] = ["", notice]
            break
    return "\n".join(lines) + "\n"


def aggregate_reviews(reviews: list[dict[str, float | int]]) -> dict[str, float | int]:
    units = sum(int(review["units"]) for review in reviews)
    if not units:
        return {"units": 0, "meanBackTranslationSimilarity": 1.0, "unitsBelow0_35": 0}
    weighted = sum(
        float(review["meanBackTranslationSimilarity"]) * int(review["units"])
        for review in reviews
    )
    return {
        "units": units,
        "meanBackTranslationSimilarity": round(weighted / units, 4),
        "unitsBelow0_35": sum(int(review["unitsBelow0_35"]) for review in reviews),
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", type=Path)
    parser.add_argument("--forward-model", type=Path)
    parser.add_argument("--back-model", type=Path)
    parser.add_argument("--locales", nargs="*", choices=LOCALES, default=LOCALES)
    parser.add_argument("--threads", type=int, default=10)
    parser.add_argument("--cache", type=Path)
    parser.add_argument(
        "--manifest", type=Path, default=I18N / "translation-manifest.json"
    )
    args = parser.parse_args()
    translation_dates = {
        TRANSLATION_DATES.get(locale, "10 October 2026")
        for locale in args.locales
    }
    if len(translation_dates) != 1:
        parser.error("generate locales with different publication dates separately")
    translation_date = translation_dates.pop()

    if args.forward_model or args.back_model:
        if not args.forward_model or not args.back_model or len(args.locales) != 1:
            parser.error(
                "--forward-model and --back-model require exactly one --locales value"
            )
        translator: NllbTranslator | MarianPairTranslator | CachedTranslator = MarianPairTranslator(
            args.forward_model, args.back_model, args.locales[0], args.threads
        )
        translation_method = "dedicated Marian translation with protected technical tokens"
    elif args.model:
        translator = NllbTranslator(args.model, args.threads)
        translation_method = "semantic NLLB translation with protected technical tokens"
    else:
        parser.error("provide --model or both --forward-model and --back-model")
    if args.cache:
        translator = CachedTranslator(translator, args.cache)
    glossary_data = json.loads((I18N / "glossary.json").read_text())
    if glossary_data["sourceAppCommit"] != APP_BASELINE:
        raise ValueError("The glossary is not synchronized to the required clc-app commit")
    app_glossary = glossary_data["terms"]
    english_ui = json.loads((I18N / "ui/en.json").read_text())
    english_navigation = json.loads((I18N / "navigation/en.json").read_text())
    sources = english_sources()
    routes = {route_for(path) for path in sources}
    manifest: dict[str, object] = {
        "sourceAppCommit": APP_BASELINE,
        "translationPublicationDate": translation_date,
        "status": "first-draft-review",
        "reviewProcess": [
            translation_method,
            "clarity normalization with complete-line context and the clc-app glossary",
            "unit-by-unit automated back-translation and structural verification",
        ],
        "pages": {},
    }

    for locale in args.locales:
        canonical_source = ["Commitment Pool", "Commitment Pools", "Pool Steward", "Pool Stewards"]
        canonical_terms = {
            source: app_glossary[source][locale] for source in canonical_source
        }

        def translate(values: list[str]):
            return translate_segments(
                translator, values, locale, canonical_terms, app_glossary
            )

        ui_segments: list[str] = []
        ui_template = json_template(english_ui, ui_segments)
        ui_translated, ui_review = translate(ui_segments)
        ui = render_json_template(ui_template, ui_translated)
        # Reuse the app-aligned controls already reviewed for the splash page.
        splash = json.loads((I18N / f"messages/{locale}.json").read_text())
        ui["controls"] = {
            key: splash["controls"][key]
            for key in ["language", "colorTheme", "lightMode", "darkMode"]
        }
        nav_segments: list[str] = []
        nav_template = json_template(english_navigation, nav_segments)
        nav_translated, nav_review = translate(nav_segments)
        navigation = render_json_template(nav_template, nav_translated)
        locale_reviews: list[dict[str, float | int]] = [ui_review, nav_review]
        page_jobs: list[tuple[Path, str, MarkdownTemplate, int, int]] = []
        all_page_segments: list[str] = []
        for source_path in sources:
            source = source_path.read_text()
            template = MarkdownTemplate(source)
            template.build()
            start = len(all_page_segments)
            all_page_segments.extend(template.segments)
            page_jobs.append(
                (source_path, source, template, start, len(all_page_segments))
            )

        try:
            all_translated, all_review = translate(all_page_segments)
        except ValueError as error:
            raise ValueError(f"documentation corpus: {error}") from error
        all_scores = all_review.pop("scores")

        rendered_pages: list[tuple[Path, str]] = []
        for source_path, source, template, start, end in page_jobs:
            translated_segments = all_translated[start:end]
            review = review_scores(all_scores[start:end])
            translated = template.render(translated_segments)
            translated = re.sub(
                r"\*\*\s*([^*\n]*?\S)\s*\*\*",
                lambda match: f"**{match.group(1)}**",
                translated,
            )
            translated = localize_links(translated, locale, routes)

            if source_path == PAGES / "protocol/network.mdx":
                diagram_messages = ui["chrome"]
                translated = translated.replace(
                    "<MermaidDiagram\n",
                    "<MermaidDiagram\n"
                    f"  scrollMessage={json.dumps(diagram_messages['diagramScroll'], ensure_ascii=False)}\n"
                    f"  errorMessage={json.dumps(diagram_messages['diagramError'], ensure_ascii=False)}\n",
                )

            route = route_for(source_path)
            if route == "/governance/terms":
                legal = ui["legal"]
                notice = (
                    f"> **{legal['translationTitle']}.** {legal['translationNotice']} "
                    f'<a data-english-source="true" href="/governance/terms" hrefLang="en">'
                    f"{legal['englishSource']}</a>."
                )
                translated = insert_notice(translated, notice)
            elif route.startswith("/white-paper"):
                paper = ui["whitePaper"]
                notice = (
                    f"> **{paper['translationTitle']}.** {paper['translationNotice']} "
                    f'<a data-english-source="true" href="{route}" hrefLang="en">'
                    f"{paper['englishSource']}</a>."
                )
                translated = insert_notice(translated, notice)
                localized_pdf = (
                    ROOT
                    / "docs/public/white-paper"
                    / f"Cosmo-Local-Credit-CLC-White-Paper-v8-{locale}.pdf"
                )
                if route == "/white-paper" and localized_pdf.exists():
                    translated = translated.replace(
                        "Cosmo-Local-Credit-CLC-White-Paper-v8.pdf",
                        f"Cosmo-Local-Credit-CLC-White-Paper-v8-{locale}.pdf",
                    )
                if route == "/white-paper/archive":
                    translated += f"\n> {paper['archivedEnglishOnly']}\n"

            relative = source_path.relative_to(PAGES)
            destination = PAGES / locale / relative
            destination.parent.mkdir(parents=True, exist_ok=True)
            rendered_pages.append((destination, translated))
            locale_reviews.append(review)

            pages = manifest["pages"]
            page_entry = pages.setdefault(  # type: ignore[union-attr]
                route,
                {
                    "source": relative.as_posix(),
                    "sourceSha256": digest(source),
                    "locales": {},
                },
            )
            page_entry["locales"][locale] = {  # type: ignore[index]
                "sha256": digest(translated),
                "review": review,
            }

        # Write only after the full locale has translated and verified successfully.
        (I18N / f"ui/{locale}.json").write_text(
            json.dumps(ui, ensure_ascii=False, indent=2) + "\n"
        )
        (I18N / f"navigation/{locale}.json").write_text(
            json.dumps(navigation, ensure_ascii=False, indent=2) + "\n"
        )
        for destination, translated in rendered_pages:
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_text(translated)

        print(f"{locale}: {aggregate_reviews(locale_reviews)}", flush=True)

    args.manifest.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n"
    )


if __name__ == "__main__":
    main()
