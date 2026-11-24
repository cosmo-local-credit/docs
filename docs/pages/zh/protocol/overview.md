# 协议

**Commitment Pooling Protocol（CPP，承诺汇集协议）** 说明独立治理的资金池如何选择代金券、公布交换规则并支持交换。持有人之后向发行方使用代金券，获得承诺的商品或服务。这些是不同的步骤，各自有不同的责任。

本网站解释这些概念以及如何使用 CLC App。[CLC 软件文档](https://software.cosmolocal.credit/)是软件实现、合约、API、部署和运营的权威参考，目前提供英文版本。

了解共同术语，可以先阅读[概念与词汇](/zh/introduction/concepts)；了解更广泛的设计和提案，可以阅读[白皮书](/zh/white-paper)。

## 部署模式

不同社区和组织可以按照自己的规则运行兼容软件。Grassroots Economics Foundation 运营[公共 CLC App](https://cosmolocal.credit)。每项部署都应说明运营方、合约和责任机构。

合约地址、部署说明以及如何核实所有者和升级权限，见[部署与验证](https://software.cosmolocal.credit/contracts/deployments)。运行配套服务，可以从 [CLC Core API](https://software.cosmolocal.credit/core-api/) 开始。

## 组件概览

以下主题请查阅软件参考文档：

| 主题 | 权威软件文档 |
| --- | --- |
| 代金券创建、供应量和到期机制 | [代金券](https://software.cosmolocal.credit/contracts/vouchers) |
| 资金池配置、存入、提取和控制 | [资金池](https://software.cosmolocal.credit/contracts/pools) |
| 汇率计算 | [报价器（Quoter）](https://software.cosmolocal.credit/contracts/quoters) |
| 交换执行、费用和交易记录 | [交换报价与结算](https://software.cosmolocal.credit/contracts/swaps) |
| 通过多个资金池交换 | [路由](https://software.cosmolocal.credit/contracts/routing) |
| 发现服务和配套合约 | [注册表与工具](https://software.cosmolocal.credit/contracts/registries) |
| API 请求和响应 | [OpenAPI 参考](https://software.cosmolocal.credit/core-api/reference) |
| 后端和路由设置 | [配置](https://software.cosmolocal.credit/core-api/configuration) |

## 应用层路径兑换

有合适路线时，App 可以帮助参与者通过多个资金池交换。参与者审核报价并授权交换。每个资金池仍保留自己的规则和责任方。

参与者应了解的含义，见[路线与责任](/zh/protocol/network)；软件如何报价和执行路线，见[路由实现](https://software.cosmolocal.credit/contracts/routing)。

软件使交换成为可能；发行方仍对代金券承诺负责，资金池管理者仍对自己公布的规则负责。公共 App 的使用受[服务条款](/zh/governance/terms)约束。
