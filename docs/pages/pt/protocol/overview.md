# Protocolo

O **Protocolo de Agrupamento de Compromissos (CPP)** descreve como Fundos governados de forma independente selecionam Vales, publicam regras e permitem trocas. Mais tarde, o Titular utiliza um Vale junto do seu Emissor para obter os bens ou serviços prometidos. São etapas distintas, com responsabilidades distintas.

Este site explica esses conceitos e como utilizar a CLC App. A [documentação do software CLC](https://software.cosmolocal.credit/) é a referência definitiva sobre a implementação, os contratos, as API, a instalação e a operação dos serviços. Atualmente, está disponível em inglês.

Consulte [Conceitos e vocabulário](/pt/introduction/concepts) para conhecer os termos comuns, ou o [Livro Branco](/pt/white-paper) para o modelo geral e as propostas.

## Padrão de implementação

Diferentes comunidades e organizações podem operar software compatível segundo as suas próprias regras. A Grassroots Economics Foundation opera a [CLC App pública](https://cosmolocal.credit). Cada implementação deve identificar os seus operadores, contratos e autoridades responsáveis.

Para consultar endereços de contratos, instruções de implementação e como verificar os proprietários e os poderes de atualização, veja [Implementações e verificação](https://software.cosmolocal.credit/contracts/deployments). Para operar os serviços de apoio, comece pela [API do CLC Core](https://software.cosmolocal.credit/core-api/).

## Mapa de componentes

A documentação do software abrange os seguintes temas:

| Tema | Referência definitiva do software |
| --- | --- |
| Criação, quantidade emitida e validade dos Vales | [Vales](https://software.cosmolocal.credit/contracts/vouchers) |
| Configuração, depósitos, levantamentos e controlo dos Fundos | [Fundos](https://software.cosmolocal.credit/contracts/pools) |
| Cálculo de taxas de câmbio | [Módulos de cotação (Quoter)](https://software.cosmolocal.credit/contracts/quoters) |
| Execução de trocas, comissões e registos de transações | [Cotação e liquidação de trocas](https://software.cosmolocal.credit/contracts/swaps) |
| Trocas através de vários Fundos | [Encaminhamento](https://software.cosmolocal.credit/contracts/routing) |
| Descoberta e contratos de apoio | [Registos e utilitários](https://software.cosmolocal.credit/contracts/registries) |
| Pedidos e respostas da API | [Referência OpenAPI](https://software.cosmolocal.credit/core-api/reference) |
| Parâmetros dos serviços e do encaminhamento | [Configuração](https://software.cosmolocal.credit/core-api/configuration) |

## Intercâmbio encaminhado a nível de aplicação

Quando existe uma rota adequada, a aplicação pode ajudar um participante a trocar através de vários Fundos. O participante analisa a cotação e autoriza a troca. Cada Fundo mantém as suas próprias regras e partes responsáveis.

Consulte [Rotas e responsabilidades](/pt/protocol/network) para compreender o que isso significa para os participantes, e a [implementação do encaminhamento](https://software.cosmolocal.credit/contracts/routing) para saber como o software calcula as cotações e executa as rotas.

O software permite a troca; os Emissores continuam responsáveis pelas promessas dos seus Vales e os Gestores dos Fundos, pelas regras publicadas. A utilização da aplicação pública é regida pelas [Condições de Serviço](/pt/governance/terms).
