# 15. Mapa de ruta (indicativo)

## **15.1 Fundamento actual**

GEF opera la CLC App en `cosmolocal.credit` sobre Gnosis Chain. La CLC App ofrece acceso compatible a cuentas y billeteras, un catálogo público del Mercado e interfaces para tokens, vales, Ofertas, Necesidades, Fondos de Compromisos, transferencias, intercambios directos de Fondo e intercambios enrutados.

Protocol v1.1.0 proporciona la base contractual actual: `GiftableToken`, ejecución directa mediante `SwapPool`, registros opcionales, módulos de valoración, límites de saldo de tokens del Fondo, comisiones del Fondo, una comisión adicional del protocolo y un `SwapRouter` Solidity que solo calcula cotizaciones.

CLC Core proporciona ahora la base de enrutamiento en la misma cadena y de observabilidad de la CLC App pública: descubrimiento mediante un grafo reconciliado, rutas de hasta tres intercambios de Fondo, cotizaciones en un bloque fijado, límites y comisiones en cada paso, simulación del lote completo, ejecución atómica Calibur firmada, seguimiento del relé, conciliación de liquidaciones, recibos agrupados y métricas operativas. La disponibilidad sigue dependiendo de la interfaz, el comportamiento admitido de billeteras y tokens, los contratos desplegados, el inventario, la configuración, la frescura del servicio, el estado de la red, la elegibilidad, los proveedores, la jurisdicción y las condiciones publicadas por el emisor o el Fondo.

## **15.2 Los hitos propuestos**

Estos hitos nombrados son instrucciones de diseño, no números de lanzamiento, fechas de entrega o compromisos que lanzará una característica.

- **Fundamentos de gobernanza:** el token de gobernanza CLC propuesto; el Fondo de Red CLC propuesto; adaptadores de comisiones; y reglas de quórum, plazos y gobernanza.
- **Enrutamiento y observabilidad:** ampliar las interfaces actuales de rutas y recibos a otros perfiles; publicar paneles de salud e informes a nivel de servicio; desarrollar un marco de política de seguros; diseñar intenciones voluntarias de reequilibrio; y crear un prototipo de compensación por lotes.
- **Herramientas de riesgo entre dominios:** HTLC o en trayectoria de garantía; módulos de garantía regulados por separado; fijación preestablecida de los límites de movimiento, cuenta y niveles.
- **Acceso regulado:** los servicios de pago de terceros específicos de la implementación; microfondos personales; el descubrimiento del servicio de cumplimiento; auditorías de terceros de las clases de vales.

Cualquier servicio de pago sería proporcionado por terceros identificados por separado en virtud de la jurisdicción, la elegibilidad, las tarifas, los límites y los términos aplicables. Los contratos CLC App y Protocol v1.1.0 no operan por sí mismos en vía fiduciaria.

La ejecución de varios pasos entre dominios, el reequilibrio automático de Fondos, los seguros compartidos, el token de gobernanza CLC propuesto, el Fondo de Red CLC propuesto, la compensación por lotes, los microfondos personales y los servicios de pago regulados siguen siendo propuestas o dependen del despliegue hasta que una implementación y sus condiciones los identifiquen como activos. El enrutamiento en la misma cadena iniciado por los participantes en la CLC App pública es una capacidad actual.
