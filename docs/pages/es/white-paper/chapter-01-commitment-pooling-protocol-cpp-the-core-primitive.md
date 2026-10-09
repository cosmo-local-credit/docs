## **1. Protocolo de agrupación de compromisos (CPP): el núcleo primitivo**

**Modelo mental:** Un Fondo de Compromisos es un acuerdo regulado para admitir vales u otros activos, publicar reglas de intercambio, mantener inventario y permitir swaps. Los titulares luego presentan vales a sus emisores para su cumplimiento en el mundo real. El intercambio de fondos y el cumplimiento del emisor son ciclos de vida separados.

CPP coordina el valor a través de compromisos claramente descritos. El modelo se analiza en [Economía de base: reflexión y práctica](https://willruddick.substack.com/p/grassroots-economics-the-book-is).

### **1.1 ¿Qué es un compromiso?**

Un compromiso es la promesa de una parte identificada de entrega futura, por ejemplo, alimentos, transporte, mano de obra, almacenamiento u otro bien, servicio, beneficio u rendimiento legal. En el caso A **el vale** es un token o registro representado como ese compromiso en términos publicados.

El contrato de tokens registra mecánica digital. Los términos del vale identifican al emisor, la oferta, la capacidad, el lugar, el momento, las restricciones, la presentación, el cumplimiento, las quejas y el proceso de descarga.

### **1.2 ¿Qué es un Fondo de Compromisos?**

Un Fondo de Compromisos es el arreglo regido. Puede ser administrada por un individuo, cooperativa, grupo comunitario, agencia pública, federación, multisig, operador de servicios u otra estructura responsable.

Las funciones y autoridades pertinentes incluyen:

- **Responsable del Fondo:** publicará y administrará las normas del grupo y cualquier garantía expresamente asumida;
- **Propietario del Fondo:** posee los poderes actuales de titular de `SwapPool`;
- **administrador proxy:** puede actualizar una implementación proxied;
- **controladores de dependencias:** regir registros, cotizaciones, limitadores o componentes de tarifas configurados;
- **buscador o operador de ruta:** podrá descubrir cotizaciones o, en una futura aplicación, ejecutar una ruta autorizada por separado; y
- **garantía:** asume una obligación definida únicamente a través de términos publicados y financiados.

Grupos CPP Las funciones del grupo se dividen en cuatro conceptos:

- **Cuidadores:** admitir tokens o vales apoyados.
- **Valoración:** publicará el método utilizado para un tipo de cambio o cotización.
- **Limitación:** aplicar límites máximos actuales de saldo de tokens del grupo o otros controles implementados por separado.
- **Intercambio:** mantener inventario, ejecutar swaps, contabilizar tarifas y emitir registros de transacciones.

Protocol v1.1.0 implementa estas funciones a través de `SwapPool` y dependencias opcionales. Su actual `Limiter` cubre un saldo de tokens en un Fondo; no dispone de límites de swap en circulación, por cuenta o en toda la red. Su actual `SwapRouter` calcula cotizaciones de múltiples Fondos; no ejecuta swaps.

El diseño más amplio propuesto de CPP puede añadir límites de movimiento, controles de cuentas, enrutadores de ejecución, caminos HTLC o escrow y redes de lotes. Se trata de componentes propuestos, no de descripciones del limitador o del enrutador actual.

### **1.3 Lógica de intercambio directo actual**

Un swap directo de Fondo actual:

1. revisa el registro opcional de los tokens de entrada y salida;
2. medir las entradas recibidas;
3. obtiene una cotización del indicador de cotización configurado o aplica la paridad de unidad en bruto;
4. comprueba el saldo de los tokens de Fondo resultantes frente al limitador opcional;
5. calculará la cuota del grupo y cualquier cuota adicional del protocolo;
6. revisa el inventario de productos disponibles;
7. transfiere la tarifa del protocolo y la salida y las cuentas de la tarifa del grupo; y
8. emite eventos de intercambio.

La cotización es un parámetro de transacción, no prueba de la capacidad del emisor, el valor de redención, el valor razonable, la convertibilidad en efectivo o una garantía.

### **1.4 Uso más amplio**

Fondos de Compromisos puede apoyar el intercambio comunitario, la producción, la ayuda mutua, los programas públicos y otras estructuras responsables. Un producto de crédito documentado por separado podría utilizar un vale como garantía o instrumento de reembolso, pero requeriría términos complementarios y específicos de la transacción. Un envío ordinario, un depósito de fondo, un swap de fondo, una presentación de canje, cumplimiento o descarga no son automáticamente un préstamo o un reembolso.

CPP está destinado a registros de transacciones de intercambio responsables y auditables, no a operaciones especulativas. Los registros en cadena todavía no prueban el cumplimiento del mundo real o el impacto social.
