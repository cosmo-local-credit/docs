# 6. Proposta de liquidez e governação a nível da rede

A experiência do histórico Sarafu Network motivou a investigação em duas questões de design mais amplas:

1. a forma como as Fundos governados de forma independente poderiam coordenar os serviços de liquidez e de roteamento; e
2. Como os serviços compartilhados podem continuar a ser responsáveis à medida que a participação aumenta.

Uma proposta de projeto CLC introduz uma **Proposta CLC Fundo de rede** como um acordo de compensação e de coordenação orçamental a nível da rede e **token de governação CLC proposto**. Nenhum deles existe na aplicação atual ou no Protocol v1.1.0. Outras implementações poderiam utilizar cooperativas, agências públicas, federações, multissociações, operadores de serviços ou outras estruturas responsáveis sem adotar qualquer proposta.

## **6.1 Controle para baixo e opcionalidade**

O Protocol v1.1.0 atual pode aplicar limites de saldo de tokens Fundo e verificações de estoque. Estes controlos restringem determinadas ações contratuais; Não impedem o incumprimento do emissor, a perda de valor, a perda de chave, a falha de contrato ou qualquer outra perda.

Uma futura implementação pode adicionar interruptores de circuito, bloqueios de tempo, reservas, garantias ou seguro. Qualquer proteção exigiria uma parte responsável identificada, evento coberto, financiamento, limite, exclusões, duração, provas, processo de reclamação e termos aplicáveis.

A governação proposta deve manter os poderes de registo e de serviço restritos e revisaveis. As ações ordinárias podem usar processos de aviso, atraso, publicação de razões, recurso e correção. As ações de emergência devem produzir registos de incidentes e expirar ou receber revisão no âmbito de uma política adoptada.

A CLC App e o CLC Core em produção fornecem agora descoberta de rotas compatíveis e execução com vários passos na mesma cadeia para rotas autorizadas pelos participantes através do perfil público configurado. As cotações aplicam em cada passo limites de montante, comissões, inventário, limites de saldo e simulação, enquanto um lote assinado pela carteira é revertido por inteiro se uma chamada falhar.

Esse serviço não autoriza o reequilíbrio automático de Fundos nem o controlo, ao nível da rede, dos seus inventários. O reequilíbrio, a compensação por lotes, a execução entre domínios por HTLC ou depósito em garantia e a governação da liquidez partilhada exigiriam autoridade adicional, software, limites, tratamento de falhas e regras adotadas. Mais trocas cotadas ou executadas não provam, por si só, o cumprimento dos vales nem o impacto social.
