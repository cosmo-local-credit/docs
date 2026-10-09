# Mecanismos de gobernanza

La gobernanza en Cosmo-Local Credit (CLC) se divide entre funciones distintas en lugar de asignarse a una autoridad universal. Esta página describe las opciones de gobernanza de las redes compatibles con CLC-; no prescribe una sola forma jurídica, sistema de votación o organización.

Grassroots Economics Foundation (GEF) opera la aplicación web progresiva pública en `cosmolocal.credit` y sus servicios de apoyo. En ese papel, GEF puede mantener interfaces y catálogos, aplicar normas mínimas de inclusión o seguridad, moderar contenido, restringir las características de las aplicaciones y coordinar operaciones técnicas. A menos que acepte expresamente otro papel para un acuerdo en particular, GEF no es el emisor de un vale creado por el usuario, el administrador de un grupo creado por el usuario, un garante, asegurador, custodio, prestamista, prestatario, redentor o parte de una transacción de usuario a usuario.

El [Términos de servicio](/es/governance/terms) regir el uso de la aplicación pública y explicar estas responsabilidades en detalle.

[Conceptos y vocabulario](/es/introduction/concepts) mapas de estos roles públicos a la propiedad de contratos, administración de proxy, control de dependencias, moderación de catálogo y recibo de tarifas.

## Responsabilidad por función

- **Emitentes de vales** gobiernan sus propias Ofertas. Publican información exacta sobre identidad, capacidad, suministro, valoración, vencimiento, presentación, cumplimiento, geografía, tiempo, tarifas, restricción y recursos, y siguen siendo responsables de cumplir esos compromisos.
- **Responsables de Fondos** regir la admisión, la curaduría de activos, la valoración, las tarifas, los límites, el inventario, las reservas, las contribuciones, los conflictos, la procedencia, la configuración, las pausas, las actualizaciones y cualquier mecanismo de garantía o asignación de pérdidas para sus Fondos.
- **Administradores de registros y servicios** podrá regir qué Fondos o activos aparecen en un registro y las normas y tarifas para el enrutamiento, la vigilancia, el apoyo a la liquidez u otros servicios compartidos.
- **Los usuarios** decidir si un emisor, un vale, una reserva, una cotización y una transacción son aceptables y legales para ellos. Una entrada en el registro o una lista de aplicaciones no es una garantía ni un respaldo.

Una persona o organización puede desempeñar más de una función, pero debe revelar cada función y los conflictos y obligaciones que se derivan de ella.

## Estructuras de gobernanza responsables

Un grupo, registro o servicio compatible con CLC- puede ser administrado por una fundación sin fines de lucro, cooperativa, grupo comunitario, federación, empresa, multisig, agencia pública, consejo institucional, sistema de votación en cadena u otra estructura responsable. Cualquiera que sea la estructura elegida, los participantes deben poder determinar:

- que tenga autoridad para tomar y ejecutar decisiones;
- la forma en que los activos, los emisores y los participantes son admitidos, revisados, suspendidos o eliminados;
- la forma en que se establecen y cambian las valoraciones, tarifas, límites, reservas, garantías y otros ajustes materiales;
- cuáles dependencias o contratos pueden ser actualizados, sustituidos, suspendidos o cerrados de forma permanente;
- la forma en que se divulgan y manejan los conflictos de intereses;
- los registros, avisos, aprobaciones y períodos de revisión aplicables;
- cuáles son los poderes de emergencia y cómo se revisa su uso; y
- la forma en que los participantes pueden quejarse, salir, migrar o abordar obligaciones no resueltas.

Las normas publicadas deben corresponder a las competencias disponibles en los contratos y servicios pertinentes. La gobernanza debe mantener las decisiones esenciales transparentes y auditables y no debe describir la convertibilidad, la liquidez, los rendimientos, los seguros, las reservas o las garantías en términos más amplios de lo que la parte responsable realmente puede proporcionar.

## Opciones de gobernanza técnica

Cuando el voto simbólico sea apropiado, una implementación puede utilizar [OpenZeppelin Gobernador](https://docs.openzeppelin.com/contracts/4.x/api/governance) contratos y una interfaz como Tally. Otras implementaciones pueden basarse en aprobaciones multisig, resoluciones de cooperación, decisiones de la junta directiva, mandatos de agencias públicas o procesos híbridos.

Estas herramientas son opcionales. La discusión de la votación token, el seguro compartido, el enrutamiento en toda la red, la compensación o los programas de liquidez no significa que todas las capacidades estén activas en la aplicación pública o estén regidas por GEF. Cada despliegue debe identificar a sus tomadores de decisiones reales, contratos, proveedores de servicios y políticas.

## Acción de interfaz y estado en cadena

Un operador de aplicación o administrador de registro puede ocultar, marcar, suspender o eliminar un elemento de una interfaz. Dicha acción no necesariamente interrumpe un contrato inteligente, revoca una transacción completada, elimina un registro de la cadena de bloques pública, elimina un saldo o cumple una obligación entre usuarios. Los planes de gobernanza deben distinguir los controles de interfaz de las autoridades que existen dentro de la cadena y de las obligaciones legales que continúan fuera de la cadena.

Para un diseño más amplio, véase el Libro Blanco [Capítulo Mecánica de la gobernanza](/es/white-paper/chapter-11-governance-mechanics).
