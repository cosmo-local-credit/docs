# Protocolo

Los contratos Protocol v1.1.0 proporcionan los bloques de construcción en cadena para la **Protocolo de agrupación de compromisos (CPP)** descrito en [Capítulo 1](/es/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive) del Libro Blanco. Esta referencia sigue al público [La liberación de `v1.1.0`](https://github.com/cosmo-local-credit/protocol/tree/v1.1.0).

Utilización [Conceptos y vocabulario](/es/introduction/concepts) para las capas de producto, las funciones responsables, el ciclo de vida de la acción, los valores, los límites, las tarifas y los términos de estado utilizados aquí.

Grassroots Economics Foundation (GEF) opera la aplicación web progresiva en [cosmolocal.credit](https://cosmolocal.credit), que ofrece una forma de interactuar con estos contratos. La aplicación y los contratos son distintos. El funcionamiento de la interfaz no convierte en sí mismo a GEF en emisor de vales, Responsable del Fondo, custodio, garante o contraparte de una transacción de usuario. Dichas funciones dependerán del despliegue pertinente, de las direcciones del responsable del tratamiento y de los términos publicados del emisor o del grupo. Veamos el [Términos de servicio](/es/governance/terms).


## Modelo de despliegue

La mayoría de los módulos de estado se inicializan como **Instancias de proxy ERC-1967** a través de Solady's `ERC1967Factory`. Múltiples instancias pueden compartir una implementación manteniendo propietarios, configuración y almacenamiento separados. Un despliegue también puede utilizar sales deterministas para que se puedan predecir direcciones antes del despliegue.

No todos los contratos son mandados. `DecimalQuoter` y `SwapRouter` son despliegues directos sin estado; También se despliegan directamente `RescueVault` y `ERC1967Factory`. Los restantes módulos de estado enumerados a continuación están diseñados para el despliegue de proxy.

Cada proxy tiene un administrador que puede reemplazar su implementación. La administración proxy está separada de la propiedad del contrato y debe asignarse a una dirección regulada adecuadamente. Una actualización puede cambiar el comportamiento incluso después de que un Fondo haya sellado la configuración, por lo que los usuarios deben evaluar tanto al propietario del Fondo como al administrador proxy.

El soporte EIP-165 también es específico del contrato y no universal. Está expuesta por `GiftableToken`, las tres cotizaciones, `OracleRelay`, `Limiter`, varios registros e índices, `Splitter`, `EthFaucet`, `PeriodSimple` y `RescueVault`. `SwapPool`, `SwapRouter`, `FeePolicy`, `ProtocolFeeController` y `CAT` no exponen a `supportsInterface` en el v1.1.0.


## Mapa de componentes

- **GiftableToken** ERC20 suministro, acuñación, combustión y mecánica de caducidad opcional. Un emisor puede utilizar una instancia como un vale, pero el contrato por sí solo no define qué puede ser canjeado, por quién, dónde o en qué condiciones.
- **SwapPool** Motor de reserva de tokens y de liquidación de swap. Una implementación puede adjuntar componentes de curaduría, valoración, tarifa, límite y tarifa de protocolo o dejar sin ajustar las dependencias soportadas.
- **DecimalQuoter, RelativeQuoter y OracleQuoter** módulos de valoración intercambiables para la paridad decimal, las tasas relativas administradas por los propietarios o las tasas derivadas del oráculo. `OracleRelay` puede transmitir una alimentación externa para su uso por un `OracleQuoter`.
- **Política de tarifas yLimiter** Reglas opcionales de las tarifas de pareja y límites por token del balance de fondo.
- **ProtocoloFeeController** Tasa de tarifa de protocolo, destinatario y estado activo opcionales y variables que un grupo puede consultar durante la liquidación.
- **TokenUniqueSymbolIndex, índice de cuentas y registro de contratos** Componentes de detección de tokens, cuentas y direcciones. `CAT` registra las preferencias de tokens de liquidación ordenadas de una cuenta.
- **SwapRouter** Calculaciones exactas de entrada y salida exactas en una ruta multi-Fondo propuesta. No guarda fichas ni ejecuta swaps.
- **Splitter, EthFaucet, PeriodSimple y RescueVault** Apoyo a los servicios públicos de distribución, financiación del gas, límite de tasas y recuperación de activos.

Los contratos pueden combinarse de diferentes maneras. Una lista de registro, cotización o ruta gráfica no es una garantía de que una transacción se ejecutará: la liquidez actual, los límites de tokens, las tarifas, el estado del oráculo, la autorización, los plazos, las condiciones de la red y la configuración de cada Fondo todavía se aplican.
