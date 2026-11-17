## **8. Ámbito de aplicación técnico y crecimiento**

Este capítulo distingue el servicio de enrutamiento actualmente en producción de las ampliaciones opcionales o propuestas. Una capacidad actual descrita aquí sigue siendo específica del despliegue público de la CLC App y CLC Core; no es automáticamente una función de los contratos de Protocol v1.1.0 ni de otro despliegue.

El despliegue público actual incluye:

- descubrimiento mediante un grafo de los vales accesibles a través de Fondos compatibles;
- cotizaciones autorizadas en un bloque fijado para rutas seleccionadas en la misma cadena;
- cálculo en cada paso de las comisiones del Fondo y del protocolo, las salidas mínimas y los plazos;
- simulación del lote completo, firma del participante y ejecución Calibur retransmitida;
- una sola transacción en la misma cadena que revierte todos los llamados de la ruta si uno falla; y
- recibos agrupados y conciliación de los eventos de liquidación de cada paso.

Las posibles áreas de crecimiento incluyen:

- los adaptadores de escrow o HTLC bloqueados en el tiempo para la ejecución transfronteriza cuando no esté disponible la liquidación atómica;
- perfiles adicionales de registro o política y enrutamiento entre perfiles;
- reequilibrio voluntario del inventario de los Fondos y compensación por lotes;
- interfaces y herramientas de política para Fondos pequeñas o personales;
- registros auditables de vales, fondos, métodos de cambio, límites, controladores y tarifas;
- los conectores de proveedores de pagos específicos de la implementación, los flujos de pago y los controles de elegibilidad;
- las conexiones de activos fungibles con centros externos de liquidez para el reequilibrio y la liquidez de pagos; y
- la conversión de tesorería cubierta por políticas para la cobertura adoptada, los costes operativos o los mandatos de liquidez.

Los precios del mercado exterior no determinan lo que debe un emisor en virtud de los términos de los vales. Un grupo podría utilizar una referencia externa protegida para un activo fungible, pero su método de cambio publicado, límites, tarifas e inventario regirían sus cotizaciones.

### **8.1 Servicio de enrutamiento actual y normas más amplias**

**Descubrimiento.** CLC Core mantiene un grafo reconciliado a partir de catálogos configurados, relaciones del registro, parámetros de los Fondos, comisiones, límites, saldos y eventos de la cadena. Estima lo que puede alcanzar una billetera de sesión y señala los datos obsoletos. La configuración pública busca rutas de hasta tres pasos. El descubrimiento no constituye una promesa ejecutable.

**Cotización autorizada.** Para una ruta seleccionada, CLC Core lee los Fondos participantes en un mismo bloque fijado y reproduce los cálculos admitidos por `SwapPool`. Detalla las comisiones del Fondo y del protocolo, establece salidas mínimas en cada paso y un plazo, prepara los llamados de la billetera y simula el lote completo. Se rechazan los tokens, módulos de cotización, billeteras o condiciones del Fondo que no sean compatibles.

**Ejecución actual.** El participante firma un lote Calibur que contiene, en cada paso, la puesta a cero de la autorización, la concesión de la autorización y un retiro limitado. Un relé envía una sola transacción en la misma cadena con `revertOnFailure` activado. Esto hace que la ruta actual se ejecute por completo o se revierta al nivel de la transacción. No es atomicidad intercadena, enrutamiento mediante HTLC o depósito en garantía, reequilibrio automático ni compensación.

**Recibos y operaciones.** La CLC App agrupa la ruta bajo un mismo identificador de seguimiento y registra el estado de la transacción, el orden de los pasos, los Fondos, los pares de tokens, los importes cotizados y liquidados, las comisiones de los Fondos, las comisiones del protocolo y los restos intermedios. El servicio supervisa la frescura del grafo, los resultados de la enumeración y la cotización de rutas, los fallos de simulación, la duración y las correcciones de la conciliación, y los miembros indexados no resueltos o desconocidos. La telemetría operativa no prueba el cumplimiento del emisor.

**Perfiles de red.** Un cliente podría admitir más de una raíz de registro o perfil de política. Informaría al participante del perfil, las contrapartes, los adaptadores, las restricciones y los operadores de servicios responsables utilizados por una cotización. Una ruta entre perfiles tendría que cumplir las condiciones aplicables a cada paso.

Un operador responsable podría excluir las dependencias o contrapartes inseguras y aplicar límites a nivel de ruta, requisitos de frescura y criterios de salud. Estas señales apoyarían una decisión; no garantizarían el cumplimiento o la protección contra la pérdida.

**Comisiones y límites.** La cotización actual detalla, en cada paso, las comisiones del Fondo y cualquier comisión adicional del protocolo. La CLC App pública no añade actualmente una comisión independiente por el servicio de enrutamiento. Cualquier futura comisión de servicio se publicaría por separado. La ejecución rechaza las cotizaciones vencidas o los límites superados.

**Atomicidad y recuperación entre dominios.** Si una futura ruta no pudiera utilizar el lote atómico actual en la misma cadena y empleara HTLC o depósito en garantía, el servicio publicaría los plazos, las vías de cancelación, los controladores responsables, los procedimientos de incidentes y los riesgos residuales.

**Compensación por lotes y reequilibrio propuestos.** Un servicio voluntario podría recopilar intenciones de reequilibrio y buscar ciclos o cadenas compatibles. Debería:

1. publicar un recibo legible por máquina que identifique los ciclos ejecutados, los activos, los importes, las marcas de tiempo de valoración y las comisiones;
2. hacer cumplir los límites máximos adoptados por período y las políticas de contraparte;
3. rechazar cualquier actividad que infrinja la autorización, los límites o el inventario disponible de un grupo participante; y
4. conservar las entradas y los recibos determinísticos para su revisión y resolución de controversias.

**Requisitos del SDK y de la interfaz.** Una integración de rutas reutilizable debería proporcionar una correspondencia determinista entre cotización y recibo, comprobaciones de invariantes en cada paso, códigos de fallo comprensibles y registros fáciles de auditar. La implementación actual de producción de la CLC App y CLC Core proporciona estas funciones para su propio perfil. El `SwapRouter` Solidity de Protocol v1.1.0 sigue calculando únicamente cotizaciones y no ejecuta la ruta.

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
