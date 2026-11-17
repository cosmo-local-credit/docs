# 15. Mapa de estrada (indicativo)

## **15.1 Fundamento atual**

A GEF opera a CLC App em `cosmolocal.credit` na Gnosis Chain. A aplicação fornece acesso suportado a contas e carteiras, um catálogo público do Mercado e interfaces para tokens, vales, Ofertas, Wants, Fundos de Compromissos, transferências, trocas diretas de Fundo e trocas encaminhadas.

O Protocol v1.1.0 fornece a base contratual atual: `GiftableToken`, execução direta por `SwapPool`, registos opcionais, módulos de avaliação, limites de saldo de tokens do Fundo, comissões do Fundo, uma comissão adicional do protocolo e um `SwapRouter` Solidity que apenas calcula cotações.

O CLC Core fornece agora a base do encaminhamento e da observabilidade, na mesma cadeia, da CLC App pública: descoberta através de um grafo reconciliado, rotas com até três trocas de Fundo, cotações num bloco fixado, limites e comissões em cada passo, simulação do lote completo, execução atómica Calibur assinada, acompanhamento da retransmissão, reconciliação da liquidação, recibos agrupados e métricas operacionais. A disponibilidade continua a depender da interface, dos comportamentos suportados da carteira e dos tokens, dos contratos implementados, do inventário, da configuração, da atualidade do serviço, do estado da rede, da elegibilidade, dos fornecedores, da jurisdição e das condições publicadas pelo emissor ou pelo Fundo.

## **15.2 Propostas marcas**

Estes marcos nomeados são instruções de projeto, não números de lançamento, datas de entrega ou compromissos que um recurso lançará.

- **Fundação Governance:** O token de governação CLC proposto; Proposta de Fundo de rede CLC; adaptadores de taxas; Quorum, prazo e fundações de governação.
- **Encaminhamento e observabilidade:** alargar as atuais interfaces de rotas e recibos a outros perfis; publicar painéis de estado e relatórios de nível de serviço; desenvolver um quadro de políticas de seguro; conceber intenções voluntárias de reequilíbrio; e criar um protótipo de compensação por lotes.
- **Ferramentas de risco transnacionais:** HTLC ou encaminhamento de garantia; Modulos de garantia regidos separadamente; Preconceitos dos limites de rotação, contabilidade e nível.
- **Acesso regulamentado:** Serviços de pagamento de terceiros específicos para a implementação; Micro-fundos pessoais; A descoberta do serviço de conformidade; Auditos de terceiros das categorias de vales.

Qualquer serviço de pagamento seria prestado por terceiros identificados separadamente sob a jurisdição, a elegibilidade, as taxas, os limites e os termos aplicáveis. Os contratos CLC App e Protocol v1.1.0 não operam por si só trilhas fiduciárias.

A execução com vários passos entre domínios, o reequilíbrio automático de Fundos, o seguro partilhado, o token de governação CLC proposto, o Fundo de Rede CLC proposto, a compensação por lotes, os microfundos pessoais e os serviços de pagamento regulados continuam propostos ou dependentes da implementação até que uma implementação e as suas condições os identifiquem como ativos. O encaminhamento na mesma cadeia iniciado pelos participantes na CLC App pública é uma capacidade atual.
