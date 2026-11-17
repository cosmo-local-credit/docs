## **1. Protocolo de partilha de compromissos (CPP): o núcleo primitivo**

**Modelo mental:** Um Fundo de Compromissos é um regime regulado para a admissão de vales ou outros ativos, a publicação de regras de câmbio, a detenção de inventário e a possibilitação de swaps. Os titulares posteriormente apresentam vales aos seus emissores para realização no mundo real. A troca de fundos e o cumprimento dos emissores são ciclos de vida separados.

CPP coordena o valor através de compromissos claramente descritos. O modelo é discutido em [Economia de base: reflexão e prática](https://willruddick.substack.com/p/grassroots-economics-the-book-is).

### **1.1 O que é um compromisso?**

Um compromisso é a promessa de uma parte identificada de entrega futura, por exemplo, alimentos, transportes, mão-de-obra, armazenamento ou outro bem, serviço, benefício ou desempenho legal. A **vale** é um token ou registro representado como esse compromisso em termos publicados.

O contrato de tokens registra mecânica digital. Os termos do vale identificam o emissor, a oferta, a capacidade, o local, o horário, as restrições, a apresentação, o cumprimento, as reclamações e o processo de quitação.

### **1.2 O que é um Fundo de Compromissos?**

Um Fundo de Compromissos é o arranjo regido. Pode ser administrado por um indivíduo, cooperativa, Fundo comunitário, agência pública, federação, multisig, operador de serviços ou outra estrutura responsável.

As funções e as autoridades pertinentes incluem:

- **Gestor do Fundo:** Publica e administra as regras do Fundo e quaisquer garantias expressamente assumidas;
- **Proprietário do Fundo:** Possui atuais poderes de proprietário do `SwapPool`;
- **administrador proxy:** Pode atualizar uma implementação proxied;
- **Controladores de dependência:** Registros, cotadores, limitadores ou componentes de taxas configurados;
- **Operador do serviço de rotas:** pode descobrir, cotar, simular, preparar, retransmitir e registar separadamente uma rota autorizada dentro do seu âmbito publicado; e
- **Garante:** assume uma obrigação definida apenas através de termos publicados e financiados.

Fundos CPP As funções do Fundo dividem-se em quatro conceitos:

- **Curadoria:** Admitir tokens ou vales apoiados.
- **Avaliação:** Publicar o método utilizado para uma taxa de câmbio ou uma cotação.
- **Limitação:** Aplicar limites máximos atuais de saldo de tokens do Fundo ou outros controles implementados separadamente.
- **Intercâmbio:** Deter inventário, executar swaps, contabilizar taxas e emitir registos de transações.

O Protocol v1.1.0 implementa estas funções através de `SwapPool` e dependências opcionais. O `Limiter` atual limita o saldo de um token num Fundo; não fornece limites móveis de troca, por conta ou ao nível de toda a rede. O `SwapRouter` Solidity atual calcula cotações através de vários Fundos; não executa trocas.

A CLC App e o CLC Core em produção implementam encaminhamento na mesma cadeia ao nível da aplicação, acima desses contratos. O CLC Core descobre caminhos, lê os Fundos selecionados num mesmo bloco fixado, prepara e simula um lote Calibur assinado pela carteira, coordena a retransmissão e agrupa os registos de liquidação resultantes. A configuração pública atual procura até três trocas de Fundo. Cada Fundo continua a ser governado de forma independente e cada passo continua a ser executado diretamente através do seu próprio `SwapPool`.

O projeto CPP proposto, mais amplo, pode acrescentar limites móveis, controlos por conta, caminhos entre domínios por HTLC ou depósito em garantia, reequilíbrio automático de Fundos e compensação por lotes. Estes são componentes propostos, não descrições do `Limiter` atual, do `SwapRouter` Solidity nem do fluxo de rotas da CLC App e do CLC Core.

### **1.3 Lógico de troca direta atual**

Uma troca direta do Fundo atual:

1. Verifica o registo opcional dos tokens de entrada e saída;
2. Medem as entradas recebidas;
3. Obter uma cotação do cotador configurado ou aplicar a paridade de unidade bruta;
4. Verifica o saldo resultante dos tokens do fundo em relação ao limitador opcional;
5. Calcula a taxa do Fundo e quaisquer taxas adicionais de protocolo;
6. verifica o inventário de saídas disponível;
7. Transfere a taxa de protocolo e a saída e contabiliza a taxa do Fundo; e
8. Emite eventos de swap.

A cotação é um parâmetro de transação, não prova da capacidade do emissor, do valor de resgate, do justo valor, da convertibilidade de caixa ou de uma garantia.

### **1.4 Uso mais amplo**

O Fundos de Compromissos pode apoiar o intercâmbio comunitário, a produção, a ajuda mútua, os programas públicos e outras estruturas responsáveis. Um produto de crédito documentado separadamente poderia utilizar um vale como garantia ou instrumento de reembolso, mas exigiria termos suplementares e específicos da transação. Um envio ordinário, depósito de fundo, troca de fundo, apresentação de resgate, cumprimento ou liquidação não são automaticamente um empréstimo ou reembolso.

O CPP é destinado a registos de transações de câmbio e auditáveis, e não a circulação especulativa. Os registros em cadeia ainda não provam realização do mundo real ou impacto social.
