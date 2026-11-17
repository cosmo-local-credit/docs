# Resumo executivo

A Comissão **Protocolo de Partilha de Compromissos (CPP)** descreve como a Fundos de Compromissos, governada de forma independente, pode criar compromissos reembolsáveis, publicar métodos e limites de taxa de câmbio, manter um inventário e permitir uma troca responsável. Os emitentes continuam a ser responsáveis pelos seus compromissos com os vales. A Gestores de Fundos continua a ser responsável pelas regras do Fundo e por quaisquer garantias que assumam expressamente. Nem o CLC App nem o GEF são um garante universal.

O Protocol v1.1.0 fornece os componentes atuais para trocas diretas: `GiftableToken`, `SwapPool`, registos e módulos de avaliação opcionais, limites de saldo de tokens do Fundo, comissões do Fundo, uma comissão adicional do protocolo e um `SwapRouter` Solidity que apenas calcula cotações. A CLC App e o CLC Core em produção descobrem agora rotas na mesma cadeia através de até três Fundos, produzem cotações num bloco fixado, simulam e preparam lotes atómicos assinados pela carteira, retransmitem-nos e agrupam os respetivos registos de liquidação. Os contratos continuam sem registar o cumprimento no mundo real, criar participações automáticas para fornecedores de liquidez, realizar encaminhamento entre cadeias ou compensação por lotes, nem fornecer reservas, garantias ou seguros universais.

O histórico **Sarafu Network** Utilizou conceitos de partilha de compromissos entre moedas comunitárias, Fundos de poupança, sistemas de ajuda mútua e compromissos de produção. Seu serviço passou mais tarde para o CLC App. Esta não foi uma representação de que cada conta histórica, carteira, token, vale, Fundo, saldo, relatório, participante ou obrigação migrou.

**Histórico Sarafu Network instantâneo — Atividade Celo de 5 de julho de 2023 a 20 de julho de 2025**

**Fonte:** [Painel de controle Dune Analytics](https://dune.com/grassrootseconomics/sarafu-network)

- 26.367 utilizadores
- 285.197 trocas entre pares
- 188 exclusivo ativo Fundos de Compromissos
- 745 vales ativos únicos
- $320.692 Volume de troca de Fundo
- 899 Relatórios publicados ([arquivo de relatórios históricos](https://sarafu.network/reports))

Estes números são evidências históricas, não os atuais números de utilização do CLC.

Os números reproduzem as etiquetas publicadas no painel para um único período de medição coerente. «Utilizador», «ativo», «troca» e a conversão para USD do volume de trocas dos Fundos dependem das consultas e do método de avaliação subjacentes ao painel; não devem ser tratados como definições universais dos indicadores CLC. Este repositório não recalculou o conjunto de dados de forma independente. Qualquer reutilização deve conservar as datas, a ligação à fonte, as etiquetas e o seu caráter histórico. Os requisitos de medição propostos no [Apêndice C](/pt/white-paper/appendix-c-kpi-definitions) são mais rigorosos para relatórios futuros.

O projeto mais amplo do CLC combina o roteamento atual com propostas de como as redes compatíveis poderiam:

1. Estender os serviços de rotas responsáveis a perfis e domínios adicionais de registos ou políticas;
2. Coordenar serviços de rede responsáveis sem prejuízo da responsabilidade local;
3. Apoio aos mandatos de liquidez, garantias, reservas ou apólices de seguros financiados separadamente;
4. Medir os swaps de fundo separadamente da apresentação, realização e liquidação dos vales; e
5. utilizar uma percentagem de rede proposta e comissões de serviço adotadas separadamente para financiar serviços partilhados.

A proposta inclui uma **token de governação CLC proposto** e um **Proposta CLC Fundo de rede**. Nem faz parte da atual aplicação nem do Protocol v1.1.0.

No âmbito do modelo proposto, os participantes da liquidez e da governação só poderiam agir através de programas separadamente adotados com elegibilidade publicada, riscos, controles, direitos de transferência, termos de recuperação e regras de taxas. Os depósitos do Fundo Ordinary não criam direitos automáticos de participação, reembolso, retirada, recompensa ou governação.

O objectivo comum é:

> Aumentar o intercâmbio responsável e o cumprimento dos compromissos reais, preservando simultaneamente o cuidado, a equidade, a responsabilidade local e a resiliência.

A luta contra a captura e a saída credível continuam a ser os principais objectivos do projeto. Os controlos propostos incluem governação retardada em tempo, limiares de aprovação múltiplos, delegação transparente, regras de conflito, revisão de incidentes e um processo documentado de transferência. Estes controlos reduziriam os riscos de governação selecionados, mas não poderiam eliminar perdas ou garantir resultados.
