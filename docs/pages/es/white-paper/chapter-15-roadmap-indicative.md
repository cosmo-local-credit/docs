## **15. Mapa de ruta (indicativo)**

### **15.1 Fundamento actual**

GEF opera el CLC App en `cosmolocal.credit` en Gnosis Chain. La aplicación proporciona acceso a cuentas y billeteras compatibles, un catálogo de mercado público e interfaces para tokens, vales, Ofertas, Fondos de Compromisos, transferencias y swaps directos de Fondo.

Protocol v1.1.0 proporciona la base del contrato actual: `GiftableToken`, ejecución directa de `SwapPool`, registros opcionales, módulos de valoración, límites máximos del balance de tokens de la bolsa, tarifas de la bolsa, una tarifa adicional del protocolo y una cotización exclusiva de `SwapRouter`. La disponibilidad sigue dependiendo de la interfaz, los contratos implementados, el inventario, la configuración, el estado de la red, la elegibilidad, los proveedores, la jurisdicción y los términos publicados del emisor o del grupo.

### **15.2 Los hitos propuestos**

Estos hitos nombrados son instrucciones de diseño, no números de lanzamiento, fechas de entrega o compromisos que lanzará una característica.

- **Fundación de gobernanza:** el token de gobernanza CLC propuesto; el conjunto de redes CLC propuesto; adaptadores de tarifas; el quórum, el plazo y las bases de gobernanza.
- **Enrutamiento y observabilidad:** El enrutador SDK y las API de registro; tablas de control de salud; un marco de política de seguros propuesto; las intenciones de reequilibrio opt-in; prototipo de redes de lotes.
- **Herramientas de riesgo entre dominios:** HTLC o en trayectoria de garantía; módulos de garantía regulados por separado; fijación preestablecida de los límites de movimiento, cuenta y niveles.
- **Acceso regulado:** los servicios de pago de terceros específicos de la implementación; microfondos personales; el descubrimiento del servicio de cumplimiento; auditorías de terceros de las clases de vales.

Cualquier servicio de pago sería proporcionado por terceros identificados por separado en virtud de la jurisdicción, la elegibilidad, las tarifas, los límites y los términos aplicables. Los contratos CLC App y Protocol v1.1.0 no operan por sí mismos en vía fiduciaria.

La ejecución multi-hop, el seguro compartido, el token de gobernanza CLC propuesto y el fondo de red CLC propuesto, la compensación por lotes, los micro-fondos personales y los servicios de pago regulados siguen siendo propuestos o dependientes del despliegue hasta que una implementación y sus términos de gobierno los identifiquen como activos.
