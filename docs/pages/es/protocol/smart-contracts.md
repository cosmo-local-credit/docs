# Los contratos inteligentes

Los contratos registran saldos de tokens y ejecutan intercambios de Fondos. La [documentación del software CLC](https://software.cosmolocal.credit/contracts/) es la referencia definitiva de implementación, actualmente en inglés. Esta página explica lo que los participantes deben comprender antes de utilizar esos contratos.

Consulta [Conceptos y vocabulario](/es/introduction/concepts) para distinguir un Fondo de Compromisos gobernado de su contrato `SwapPool`, y el intercambio del cumplimiento de la promesa por parte del Emisor.

## Bonos (`GiftableToken`)

Un Vale combina un saldo digital con la promesa publicada de un Emisor. Sus términos explican para qué sirve, dónde y cuándo se acepta y quién es responsable. Crear un token no demuestra que el Emisor pueda proporcionar los bienes o servicios prometidos.

Para conocer los mecanismos de creación, emisión, quema y vencimiento, consulta [Vales](https://software.cosmolocal.credit/contracts/vouchers).

## Fondo de Compromisos (`SwapPool`)

Un Fondo de Compromisos reúne Vales seleccionados según reglas publicadas. Su contrato mantiene inventario e intercambia activos compatibles. Un depósito no concede automáticamente al depositante participaciones del Fondo ni derechos de reembolso, retiro, recompensa o gobernanza; esos derechos requieren condiciones comunicadas por separado.

### Composición y dependencias opcionales

Comprueba qué Vales acepta un Fondo, cómo establece sus tipos de cambio, sus límites y comisiones, y quién puede modificarlos. La referencia del software describe la [configuración y el sellado de parámetros del Fondo](https://software.cosmolocal.credit/contracts/pools).

### Saldo de intercambio

Un intercambio completado cambia los saldos correspondientes. No demuestra que un Emisor haya entregado bienes o servicios. Antes de confirmar, revisa lo que entregas y recibes, el destinatario, el mínimo recibido y el vencimiento de la cotización.

Para los métodos de ejecución y los registros de liquidación, consulta [Cotizar y liquidar intercambios](https://software.cosmolocal.credit/contracts/swaps).

### Calculo de las tarifas adicionales

Un intercambio puede incluir una comisión del Fondo y una comisión adicional del protocolo. Revisa el total mostrado en la cotización; una ruta mediante varios Fondos puede generar comisiones en cada paso. La [referencia de intercambios](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) mantiene el cálculo y un ejemplo numérico.

### Poderes de titularidad y actualización

El propietario del Fondo puede retirar el inventario disponible. Otras autoridades pueden controlar actualizaciones o parámetros. Revisa esos poderes junto con las reglas publicadas del Responsable antes de depositar activos o depender de un Fondo. Sellar parámetros no demuestra por sí solo que el inventario esté bloqueado permanentemente.

Consulta [Fondos](https://software.cosmolocal.credit/contracts/pools) y [Verificar una instancia](https://software.cosmolocal.credit/contracts/deployments#verify-an-instance) para conocer las comprobaciones técnicas.

## Modulos de evaluación

El tipo de cambio de un Fondo es distinto del valor declarado de un Vale y de los términos de canje del Emisor. Revisa el método elegido por el Fondo y quién puede cambiar sus datos. La referencia del software explica los [cotizadores (Quoter)](https://software.cosmolocal.credit/contracts/quoters) disponibles.

## Política de tarifas y límites

El **«Límite de crédito»** de la App es el saldo máximo de un Vale concreto que el Fondo puede mantener. Describe capacidad de intercambio, no endeudamiento personal ni una garantía de cumplimiento. Consulta las [reglas y la configuración del Fondo](https://software.cosmolocal.credit/contracts/pools) para saber cómo se aplican límites y comisiones.

## Controlador de las tarifas de protocolo

Una comisión del protocolo tiene un destinatario configurado. Recibirla no convierte automáticamente al destinatario en Responsable del Fondo ni en garante. Consulta la [referencia de comisiones](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) para los mecanismos actuales y los [mecanismos de gobernanza](/es/governance/mechanics) para las responsabilidades y la información que se debe publicar.
