# 协议

Protocol v1.1.0 合约提供了白皮书 [第 1 章](/zh/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive) 中所述 **承诺汇聚协议 (CPP)** 的链上构件。本参考文档以公开的 [`v1.1.0` 版本](https://github.com/cosmo-local-credit/protocol/tree/v1.1.0) 为准。

有关本文使用的产品层级、负责任角色、操作生命周期、价值、限制、费用和状态术语，请参阅 [概念和术语](/zh/introduction/concepts)。

Grassroots Economics Foundation (GEF) 运营 [cosmolocal.credit](https://cosmolocal.credit) 上的渐进式网页应用，该应用是与这些合约交互的一种方式。应用和合约彼此独立。仅运营界面不会使 GEF 自动成为代金券发行方、资金池管理者、托管人、担保人或用户交易的对手方。这些角色取决于相关部署、控制者地址以及已公布的发行方或资金池条款。请参阅 [服务条款](/zh/governance/terms)。

## 部署模式

大多数有状态模块都通过 Solady 的 `ERC1967Factory` 初始化为 **ERC-1967 代理实例**。多个实例可以共享一个实现，同时保持各自独立的所有者、配置和存储。部署还可以使用确定性盐值，便于在部署前预测地址。

并非每个合约都使用代理。`DecimalQuoter` 和 `SwapRouter` 是无状态的直接部署；`RescueVault` 和 `ERC1967Factory` 也是直接部署。下面列出的其余有状态模块均为代理部署而设计。

每个代理都有一名可替换其实现的管理员。代理管理与合约所有权相互独立，应当分配给受适当治理的地址。即使资金池已封存配置，升级仍可能改变行为，因此用户应同时评估资金池所有者和代理管理员。

EIP-165 支持也取决于具体合约，并非普遍存在。`GiftableToken`、三个报价器、`OracleRelay`、`Limiter`、多个注册表和索引、`Splitter`、`EthFaucet`、`PeriodSimple` 和 `RescueVault` 都提供 EIP-165 支持。在 v1.1.0 中，`SwapPool`、`SwapRouter`、`FeePolicy`、`ProtocolFeeController` 和 `CAT` 不提供 `supportsInterface`。

## 组件概览

- **GiftableToken** — ERC20 供应、铸造、销毁和可选过期机制。发行方可以将某个实例用作代金券，但合约本身不会定义可兑付的内容、兑付人、地点或条款。
- **SwapPool** — 代币保管库和交换结算引擎。部署可以连接筛选、估值、费用、限制和协议费用组件，也可以不设置某些受支持的依赖项。
- **DecimalQuoter、RelativeQuoter 和 OracleQuoter** — 可互换的估值模块，分别用于小数位平价、所有者管理的相对汇率，或预言机推导的汇率。`OracleRelay` 可以为 `OracleQuoter` 中继一个外部数据源。
- **FeePolicy 和 Limiter** — 可选的资产对费用规则和每代币资金池余额上限。
- **ProtocolFeeController** — 可选、可变的协议费率、接收方和活跃状态，资金池可在结算时读取它。
- **TokenUniqueSymbolIndex、AccountsIndex 和 ContractRegistry** — 代币、账户和地址发现组件。`CAT` 记录某个账户按顺序排列的结算代币偏好。
- **SwapRouter** — 针对拟议的多资金池路径进行仅报价的精确输入和精确输出计算。它不托管代币，也不执行交换。
- **Splitter、EthFaucet、PeriodSimple 和 RescueVault** — 用于分配、Gas 资助、频率限制和资产恢复的支持工具。

这些合约可以以不同方式组合。注册表上架、报价或图上路径都不能保证交易必然执行：当前流动性、代币限制、费用、预言机状态、授权、截止时间、网络状况和各资金池的配置仍然适用。
