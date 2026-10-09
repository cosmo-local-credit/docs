# Los contratos inteligentes

Esta página describe los principales contratos de Fondo y vale en el protocolo v1.1.0. El comportamiento del contrato proporciona una mecánica de liquidación; no sustituye las divulgaciones del emisor, las reglas del grupo o otros términos de transacción que se apliquen a un uso particular.

Utilización [Conceptos y vocabulario](/es/introduction/concepts) para distinguir la Fondo de Compromisos regulada de la `SwapPool`, y la liquidación de swap de la presentación, cumplimiento y descarga de la redención.


## Bonos (`GiftableToken`)

`GiftableToken` es un token ERC20 con mecánica que un emisor puede utilizar para un vale:

- **La acuñación autorizada** El propietario puede designar escritores que pueden emitir tokens con `mintTo`.
- **Cumplimiento opcional** Una expiración de `0` significa que no hay expiración a nivel de contrato. De lo contrario, las transferencias, la acuñación y la quema vuelven a ocurrir en o después del sello de tiempo configurado. Cualquiera puede persistir en el estado terminal `expired` llamando directamente a `applyExpiry`.
- **Contabilidad del suministro** `totalMinted` y `totalBurned` exponen la actividad de suministro acumulada. La función `burn` solo para el propietario quema fichas de la dirección del propietario.

El contrato simbólico no **No** Identificar los bienes o servicios del emisor, fijar un valor de redención, demostrar capacidad o prometer conversión en efectivo. Un `GiftableToken` se convierte en un compromiso canjeable sólo a través de los términos y conductas publicados por separado por el emisor. Los emisores siguen siendo responsables de describir y respetar con precisión esos términos.


## Fondo de Compromisos (`SwapPool`)

`SwapPool` es una bóveda de tokens y un motor de liquidación de swap. Aunque expone metadatos de ERC20 para el nombre, símbolo y decimales de Fondo, el contrato v1.1.0 no acuña tokens de Fondo-share. La liquidez se suministra mediante la transferencia de tokens al grupo, y el titular del contrato puede retirar la liquidez disponible.

### Composición y dependencias opcionales

| Configuración | Cuando no se establece | Espacio de direcciones sellable |
| --- | --- | --- |
| `tokenRegistry` | Cualquier token puede pasar el cheque de curación del Fondo | Sí , es cierto . |
| `tokenLimiter` | Los depósitos no tienen límite máximo del saldo a nivel del contrato | Sí , es cierto . |
| `quoter` | La cantidad de entrada en bruto se trata como la cantidad de salida cotizada en bruto | Sí , es cierto . |
| `feePolicy` | La tarifa del Fondo es cero . | Sí , es cierto . |
| `feeAddress` | Las tasas del grupo no se acumulan como tasas retirables para un destinatario designado | Sí , es cierto . |
| `protocolFeeController` | No se cobra ninguna tarifa de protocolo | No es así. |

Los cinco bits de sellado bloquean permanentemente las direcciones actuales `feePolicy`, `feeAddress`, `quoter`, `tokenRegistry` y `tokenLimiter` contra sus ajustes correspondientes. `protocolFeeController` y `feesDecoupled` son valores de inicialización y no se encuentran entre esos cinco bits.

El sellamiento de una ranura de dirección no congelará el contrato en esa dirección. Un registro sellado, un limitador, una política de cotización o de tarifas y un controlador de protocolos-tarifas configurados todavía pueden cambiar si su propia gobernanza lo permite. El administrador de proxy ERC-1967 también puede actualizar la implementación de Fondo. Por lo tanto, una reclamación de inmutabilidad significativa depende de la gobernanza del propietario del Fondo, del administrador proxy y de cada dependencia configurada.

### Saldo de intercambio

Para un intercambio, `SwapPool`:

1. Verifica si los tokens de entrada y salida pasan por el registro opcional y prueba la entrada solicitada con respecto al límite opcional de equilibrio de fondo.
2. Extrae el token de entrada del llamador y mide la cantidad realmente recibida. En la fijación de precios se utiliza este importe medido, incluidos los tokens de pago por transferencia.
3. Obtiene una cotización bruta de la cotización configurada, o utiliza la cantidad recibida en bruto cuando no se establece ninguna cotización.
4. Calcula la cuota del grupo y cualquier cuota adicional del protocolo, luego comprueba la liquidez disponible de los tokens de salida.
5. Envía la tarifa del protocolo directamente al destinatario del protocolo configurado, transfiere la salida neta nominal al destinatario y registra la tarifa del grupo cuando se configura una dirección de tarifa.
6. Emite el evento `Swap` heredado y el evento `SwapSettlement` más detallado.

`SwapSettlement` registra el iniciador, ambos tokens, la entrada medida, la salida cotizada bruta, la salida nominal enviada, la salida realmente observada en el destinatario, la tarifa de fondo y la tarifa de protocolo. Las salidas nominales y observadas pueden diferir cuando el token de salida mismo cobra una tarifa de transferencia. El campo `fee` en el evento heredado `Swap` es solo la tarifa del Fondo.

La sobrecarga de seis argumentos `withdraw(tokenOut, tokenIn, value, recipient, minAmountOut, deadline)` es la ruta de ejecución limitada. Se revertirá después de la fecha límite o cuando el aumento observado del saldo del beneficiario sea inferior a `minAmountOut`. Los integradores deben preferirlo porque una cotización mostrada es temporal: el estado de cotización, la política de tarifas, la liquidez, los límites y los datos del oráculo pueden cambiar antes de la ejecución. Las anteriores sobrecargas de tres y cuatro argumentos no proporcionan esos límites a nivel de Fondo.

### Calculo de las tarifas adicionales

Las tasas de base y de protocolo se deducen de la producción bruta cotizada. La tarifa del protocolo es **No incluido en la cuota del Fondo**, y el Fondo mantiene la totalidad de la cuota calculada.

Por ejemplo, en una cotización bruta de 100 unidades:

- un 2% de la cuota de fondo se acumula en 2 unidades a la cuota;
- una tasa de protocolo del 10% aplicada a dicha tarifa del grupo envía otras unidades 0.2 directamente al destinatario del protocolo; y
- el usuario recibe unidades 97.8.

En el cálculo del protocolo se utiliza la mayor de la cuota de grupo calculada y una base de cuota del 1% asumida. Esto evita que una muy pequeña tarifa de Fondo reduzca el cálculo del protocolo a casi cero. Las tasas combinadas inválidas revierten con `FeeTooHigh`, y una cotización que se liquidaría a cero revierten con `InsufficientOutput`.

### Poderes de titularidad y actualización

El propietario del contrato puede cobrar las tasas acumuladas del fondo y puede llamar a `withdrawLiquidity` para transferir cualquier token del fondo disponible a una dirección no cero elegida. Cuando se desacoplen las tarifas, las tarifas acumuladas se reservan a partir de esta vía de retiro de liquidez; de lo contrario, seguirán formando parte del saldo del grupo. Los participantes en el grupo no deben interpretar la liquidez depositada como permanentemente bloqueada, a menos que los controles de gobernanza adicionales y verificables establezcan ese resultado.

El sellamiento de configuración no elimina este poder de retiro de liquidez. Tampoco elimina el poder de actualización del administrador de proxy ERC-1967 separado.


## Modulos de evaluación

Todas las tres cotizaciones implementan las funciones de cotización hacia adelante y hacia atrás utilizadas por `SwapPool` y `SwapRouter`:

- **`DecimalQuoter`** Normalización decimal sin estado bajo una suposición de paridad de valor 1:1.
- **`RelativeQuoter`** Normalización decimal más índices de precios relativos administrados por los propietarios. Un índice de tokens sin ajustar se configura por defecto en paridad.
- **`OracleQuoter`** Rate cada token a través de un oráculo configurado, con un límite de estancidad global o por token y un multiplicador de salida opcional 0.9-to-1.0.

Un `OracleQuoter` es tan fiable como su selección y administración de piensos. La denominación y la dirección de los piensos deben ser consistentes, las decimales deben ser correctas, las actualizaciones deben ser positivas y frescas, y la gobernanza puede reemplazar los piensos o cambiar los ajustes de frescura. La manipulación de la fuente, las actualizaciones retrasadas, las interrupciones de la red, la configuración incorrecta de los pares o la pérdida de la clave del propietario del oráculo pueden causar malas cotizaciones o hacer que los swaps se reviertan.

`OracleRelay` es un relé de última ronda de alimentación única opcional compatible con la interfaz del oráculo. Un autor designado volverá a publicar los valores de origen; No hay pruebas de cadena cruzada y no hay historia almacenada. El relevo acepta los valores del escritor con sólo un chequeo de tiempo futuro. `OracleQuoter` rechaza independientemente las respuestas no positivas o obsoletas, mientras que el dueño del relé puede girar el escritor o invalidar la ronda actual. Por lo tanto, los usuarios deben evaluar la fuente de alimentación, el redactor del relé, el propietario del relé y el proceso de monitoreo.


## Política de tarifas y límites

`FeePolicy` almacena una tarifa por defecto en partes por millón y el par direccional opcional se anula. Su propietario puede cambiar esas tasas a menos que la gobernanza fuera del contrato restrinja esa facultad.

`Limiter` almacena un saldo máximo para un token en una dirección específica del Fondo. El propietario o un escritor autorizado puede cambiar ese límite. Un límite cero bloquea los depósitos cuando el limitador está activo; un limitador no establecido deja los depósitos sin límite.

Estos límites describen la configuración **exposición simbólica** En un Fondo. No clasifican, por sí solos, un saldo simbólico como un préstamo o una deuda legal, ni demuestran la capacidad de un emisor ni garantizan el cumplimiento. Estas preguntas dependen de las condiciones del emisor, de las reglas del grupo, de la transacción presentada al usuario y de la legislación aplicable.


## Controlador de las tarifas de protocolo

`ProtocolFeeController` es un componente opcional de la tarifa a nivel de despliegue. Su propietario puede cambiar la tarifa del protocolo y el destinatario o desactivar la tarifa. Un solo controlador puede ser compartido por múltiples Fondos, pero el protocolo no requiere un controlador por red.

Cuando está activo y configurado, el destinatario se paga directamente en el token de salida durante cada intercambio exitoso. La forma en que el beneficiario utiliza los fondos, por ejemplo, para operaciones, monitoreo, apoyo a la liquidez u otro propósito publicado, es una cuestión de gobernanza y no una garantía del contrato.
