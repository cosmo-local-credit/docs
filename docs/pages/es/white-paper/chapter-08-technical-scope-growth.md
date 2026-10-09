## **8. Ámbito de aplicación técnico y crecimiento**

Este capítulo describe el trabajo opcional o propuesto. No se trata de una lista de características garantizadas para estar presentes en el actual CLC App o Protocol v1.1.0.

Las áreas de trabajo posibles incluyen:

- enrutamiento de ejecución a través de Fondos compatibles, con registro, cotización, límite, tarifa y descubrimiento de inventario;
- los adaptadores de escrow o HTLC bloqueados en el tiempo para la ejecución transfronteriza cuando no esté disponible la liquidación atómica;
- interfaces y herramientas de política para Fondos pequeñas o personales;
- registros auditables de vales, fondos, métodos de cambio, límites, controladores y tarifas;
- los conectores de proveedores de pagos específicos de la implementación, los flujos de pago y los controles de elegibilidad;
- las conexiones de activos fungibles con centros externos de liquidez para el reequilibrio y la liquidez de pagos; y
- la conversión de tesorería cubierta por políticas para la cobertura adoptada, los costes operativos o los mandatos de liquidez.

Los precios del mercado exterior no determinan lo que debe un emisor en virtud de los términos de los vales. Un grupo podría utilizar una referencia externa protegida para un activo fungible, pero su método de cambio publicado, límites, tarifas e inventario regirían sus cotizaciones.

### **8.1 Normas propuestas de servicio de rutas y SDK**

**El descubrimiento.** Un servicio de ruta propuesto buscaría registros identificados para la admisión de activos, métodos de cambio, límites, tarifas, inventario, incidentes e información del controlador. Los registros almacenados en caché incluirían límites de frescura y identificadores de fuente.

**Perfiles de la red.** Un cliente podría soportar más de un perfil de raíz o política de registro. Indicaría al participante qué perfil, contrapartes, adaptadores, restricciones y operadores de servicios responsables utiliza una cotización. Una ruta transversal tendría que satisfacer todas las condiciones aplicables para el salto.

**La política del camino.** Un operador responsable podría excluir dependencias o contrapartes no seguras y aplicar límites a nivel de ruta, requisitos de frescura y criterios de salud. Estas señales apoyarían una decisión; no garantizarían el cumplimiento ni la protección contra la pérdida.

**Tarifas y límites.** Una cotización detallaría las tarifas del grupo, cualquier tarifa adicional actual del Protocolo y cualquier tarifa de enrutamiento o servicio propuesta por separado. La ejecución rechazaría las cotizaciones vencidas o los límites incumplidos.

**Atomicidad y recuperación.** La ejecución multi-hop sería atómica cuando sea posible. En caso de que utilizara HTLC o escrow, el servicio revelaría tiempos de espera, trayectorias de interrupción, controladores responsables, procedimientos de incidentes y riesgos residuales.

**Proposición de compensación por lotes y reequilibrio.** Un servicio de opt-in puede recopilar intenciones de reequilibrio y buscar ciclos o cadenas compatibles. Eso sería:

1. publicar un recibo legible por máquina que identifique los ciclos ejecutados, los activos, los importes, los sellos de tiempo de valoración y las tarifas;
2. hacer cumplir los límites máximos adoptados por período y las políticas de contraparte;
3. rechazar actividades que violan las autorizaciones, los límites o el inventario disponible de cualquier grupo participante; y
4. preservar las entradas y recibos deterministas para la revisión y el manejo de disputas.

**Requisitos del SDK.** Un SDK para rutas ejecutadas proporcionaría un mapeo determinista de cotización a recibo, controles de invariantes por espera, códigos de fallas comprensibles y registros amigables con la auditoría. El Protocol v1.1.0 `SwapRouter` actual sólo proporciona cotizaciones; no ejecuta estas rutas propuestas.

#### **8.1.1 Especificación mínima de compatibilidad con la confederación**

Un ecosistema Fondo que busque un enrutamiento transversal publicaría información legible por máquina para:

1. **Raíces del registro:** Identificadores de activos, Fondos, métodos de tipo de cambio, límites y políticas de tarifas, o una raíz que los resuelva deterministicamente.
2. **Los recibos:** el perfil, los activos entrantes y salientes, los importes, la fuente de cotización y el sello de tiempo, la instantánea límite, las tarifas, el resultado del inventario y el resultado de ejecución de cada salto.
3. **Las señales de funcionamiento:** información limitada a la actualidad sobre el inventario, la utilización limitada, los incidentes y cualquier cumplimiento o protección financiada comprobada por separado.
4. **Las restricciones políticas:** las contrapartes permitidas o rechazadas, las clases de activos, los adaptadores y los requisitos de custodia.
5. **Códigos de fallas:** explicaciones deterministas para el rechazo, la expiración, el límite, el inventario, la política, la dependencia o los fallos incidentales.

Un perfil podría agregar cobertura, cumplimiento, arbitraje u otros servicios sin que sean requisitos para la compatibilidad básica de CPP. Cada servicio opcional identificaría a su parte responsable, autoridad, alcance y términos.

### **8.2 Licencia, verificación y salida**

Los contratos de Protocol v1.1.0 son compatibles con EVM-. Los contratos en el directorio `src` del repositorio del Protocolo se publican bajo AGPL-3.0, a excepción de los componentes de terceros no modificados identificados que conservan sus propios términos. Las instrucciones de origen, ABI y despliegue publicadas apoyan una revisión independiente, pero por sí mismas no demuestran una auditoría, un despliegue seguro o un cumplimiento legal.

Cada implementación revelaría por separado su versión de código, la procedencia de la construcción, las direcciones, los poderes de controlador y actualización, el estado de auditoría, los espejos del registro y cualquier protección de bloqueo temporal o pausa.

Una propuesta **kit de tenedor** podrían incluir:

1. los scripts de despliegue determinista;
2. imágenes instantáneas del registro y herramientas de exportación;
3. un proceso documentado para redireccionar los servicios de ruta, los SDK y las interfaces a una nueva raíz de registro;
4. una lista de verificación Responsable del Fondo para salir de un registro compartido de forma segura; y
5. una lista de verificación de migración de los vales pendientes, incluidos los avisos del emisor, los plazos de presentación y cumplimiento, el acceso continuo a los registros y los recursos.

Las bifurcaciones compatibles pueden mejorar la resiliencia cuando las comunidades, cooperativas, agencias públicas, federaciones, multisigas o operadores de servicios necesitan una gobernanza diferente. La continuidad real sigue dependiendo de la propiedad del contrato, las claves, las dependencias, las interfaces, la infraestructura, las obligaciones legales y los servicios de terceros.
