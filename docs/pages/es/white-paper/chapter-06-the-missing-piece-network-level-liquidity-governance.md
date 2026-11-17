# 6. Proposición de liquidez y gobernanza a nivel de red

La experiencia del histórico Sarafu Network motivó la investigación en dos cuestiones de diseño más amplias:

1. la forma en que los grupos administrados de forma independiente podrían coordinar los servicios de liquidez y de enrutamiento; y
2. cómo los servicios compartidos podrían seguir siendo responsables a medida que crezca la participación.

Un diseño CLC propuesto presenta un **Fondo de Red CLC propuesto** como acuerdo de compensación y coordinación presupuestaria a escala de red, además de un **token de gobernanza CLC propuesto**. Ninguno existe en la aplicación actual ni en Protocol v1.1.0. Otras implementaciones podrían usar cooperativas, organismos públicos, federaciones, multisigs, operadores de servicios u otras estructuras responsables sin adoptar ninguna de estas propuestas.

## **6.1 Los controles a la baja y la opcionalidad**

En la actualidad, Protocol v1.1.0 puede aplicar límites máximos de balance de tokens de Fondo y controles de inventario. Estos controles limitan las acciones contractuales seleccionadas; no impiden el incumplimiento del emisor, la pérdida de valor, la pérdida de claves, el incumplimiento del contrato o cualquier otra pérdida.

Un futuro despliegue podría agregar interruptores de circuito, bloqueos de tiempo, reservas, garantías o seguros. Cualquier protección requeriría una parte responsable identificada, el evento cubierto, la financiación, el límite, las exclusiones, la duración, la evidencia, el proceso de reclamación y los términos aplicables.

La gobernanza propuesta debe mantener estrechos y revisables los poderes de registro y de servicio. Las acciones ordinarias pueden utilizar procesos de notificación, retraso, publicación de motivos, apelación y corrección. Las acciones de emergencia deben producir registros de incidentes y caducar o recibir una revisión en virtud de una política adoptada.

La CLC App y CLC Core de producción ofrecen ahora descubrimiento de rutas compatibles y ejecución de varios pasos en la misma cadena para rutas autorizadas por los participantes mediante el perfil público configurado. Las cotizaciones aplican, en cada paso, límites, comisiones, inventario y otras restricciones, y simulan el lote; un solo lote firmado por la billetera se revierte en su totalidad si falla un llamado.

Ese servicio no autoriza el reequilibrio automático de Fondos ni el control de su inventario a nivel de red. El reequilibrio, la compensación por lotes, la ejecución entre dominios mediante HTLC o depósito en garantía y la gobernanza compartida de la liquidez requerirían autoridad adicional, software, límites, gestión de fallos y reglas adoptadas. Un mayor número de intercambios cotizados o ejecutados no demuestra por sí solo el cumplimiento de los vales ni el impacto social.
