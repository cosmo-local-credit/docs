# Mecanismos de governação

A governação no Cosmo-Local Credit (CLC) é dividida entre funções distintas, em vez de ser atribuída a uma autoridade universal. Esta página descreve as opções de governação para redes compatíveis com CLC; não prescreve uma única forma jurídica, sistema de votação ou organização.

A Grassroots Economics Foundation (GEF) opera a aplicação web progressiva pública na `cosmolocal.credit` e os seus serviços de apoio. Nessa função, a GEF pode manter interfaces e catálogos, aplicar normas mínimas de listagem ou de segurança, moderar conteúdo, restringir as funcionalidades da aplicação e coordenar operações técnicas. A menos que aceite expressamente outro papel para um determinado acordo, o GEF não é o emissor de um vale criado pelo utilizador, o administrador de um fundo criado pelo utilizador, garante, segurador, custodiador, credor, mutuário, redentor ou parte numa transação entre utilizadores.

Os [Termos de Serviço](/pt/governance/terms) regem a utilização da aplicação pública e explicam estas responsabilidades em detalhe.

[Conceitos e vocabulário](/pt/introduction/concepts) mapeia esses papéis públicos para a propriedade de contratos, administração por procuração, controle de dependência, moderação do catálogo e receção de taxas.

## Responsabilidade por função

- **Emissores de vales** governam as suas próprias Ofertas. Publicam informações precisas sobre identidade, capacidade, oferta, avaliação, expiração, apresentação, cumprimento, geografia, data, taxa, restrição e recurso, e continuam a ser responsáveis pelo cumprimento desses compromissos.
- **Gestores de Fundos** Reger a admissão, a curadoria dos ativos, a avaliação, os honorários, os limites, o inventário, as reservas, as contribuições, os conflitos, a proveniência, a configuração, as pausas, as atualizações e qualquer mecanismo de atribuição de garantias ou perdas para as suas Fundos.
- **Administradores de registos e serviços** Pode determinar quais Fundos ou ativos aparecem num registo e as regras e taxas para roteamento, monitoramento, apoio à liquidez ou outros serviços compartilhados.
- **Utilizadores** decidir se um emissor, vale, Fundo, Cotação e Transação são aceitáveis e legais para eles. Uma entrada no registo ou listagem de aplicações não é uma garantia ou endosso.

Uma pessoa ou organização pode desempenhar mais de uma função, mas deve revelar cada função e os conflitos e obrigações que a resultam.

## Estruturas de governação responsáveis

Um Fundo, registro ou serviço compatível com o CLC pode ser governado por uma fundação sem fins lucrativos, cooperativa, Fundo comunitário, federação, empresa, multisig, agência pública, conselho institucional, sistema de votação em cadeia ou outra estrutura responsável. Qualquer que seja a estrutura escolhida, os participantes devem ser capazes de determinar:

- que tenha autoridade para tomar e executar decisões;
- a forma como os ativos, emissores e participantes são admitidos, revisados, suspensos ou retirados;
- Como são estabelecidas e alteradas as avaliações, taxas, limites, reservas, garantias e outras configurações materiais;
- quais dependências ou contratos podem ser atualizados, substituídos, suspensos ou fechados permanentemente;
- a forma como os conflitos de interesses são divulgados e tratados;
- quais são os registos, avisos, aprovações e períodos de revisão aplicáveis;
- quais são os poderes de emergência existentes e como é analisada a sua utilização; e
- Como os participantes podem reclamar, sair, migrar ou abordar obrigações não resolvidas.

As regras publicadas devem corresponder às competências disponíveis nos contratos e serviços relevantes. A governação deve manter as decisões relevantes transparentes e auditáveis e não deve descrever a convertibilidade, a liquidez, os rendimentos, os seguros, as reservas ou as garantias de forma mais ampla do que a parte responsável pode realmente fornecer.

## Opções de governação técnica

Quando o voto simbólico for apropriado, uma implementação pode utilizar [OpenZeppelin Governador](https://docs.openzeppelin.com/contracts/4.x/api/governance) contratos e uma interface como a Tally. Outras implementações podem basear-se em aprovações multisig, resoluções de cooperação, decisões do conselho, mandatos de agências públicas ou processos híbridos.

Estas ferramentas são opcionais. A discussão de votação de tokens, seguro compartilhado, roteamento em toda a rede, rede ou programas de liquidez não significa que todos os recursos sejam ativos na aplicação público ou governados pelo GEF. Cada implementação deve identificar os seus tomadores de decisão, contratos, prestadores de serviços e políticas reais.

## Ação da interface e estado na cadeia

Um operador de aplicação ou administrador de registro pode esconder, marcar, suspender ou remover um item de uma interface. Essa ação não impede necessariamente a pausa de um contrato inteligente, a revogação de uma transação concluída, a remoção de um registro público de blockchain, a eliminação de um saldo ou a realização de uma obrigação entre os utilizadores. Os planos de governação devem distinguir os controles de interface das autoridades que existem na cadeia e das obrigações legais que continuam fora da cadeia.

Para um quadro mais amplo, consulte o Livro Branco [Capítulo Mecânica de governação](/pt/white-paper/chapter-11-governance-mechanics).
