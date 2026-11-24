# 智能合约

合约记录代币余额并执行资金池交换。[CLC 软件文档](https://software.cosmolocal.credit/contracts/)是软件实现的权威参考，目前提供英文版本。本页说明参与者在使用这些合约前应了解的内容。

受治理的承诺资金池与其 `SwapPool` 合约之间，以及交换与发行方履行之间的区别，见[概念与词汇](/zh/introduction/concepts)。

## 代金券（`GiftableToken`）

代金券把数字余额与发行方公布的承诺联系起来。条款说明用途、接受的地点和时间，以及责任方。创建代币不能证明发行方有能力提供承诺的商品或服务。

创建、铸造、销毁和到期机制，见[代金券](https://software.cosmolocal.credit/contracts/vouchers)。

## 承诺资金池（`SwapPool`）

承诺资金池按照公布的规则汇集选定的代金券。合约持有库存并交换受支持资产。存入资产不会自动赋予存入人资金池份额、还款权、提款权、奖励或治理权；此类权利需要另行披露的条款。

### 组成与可选依赖项

请检查资金池接受哪些代金券、如何设定汇率、有哪些限额和费用，以及谁能更改这些设置。软件参考文档说明[资金池配置与封存](https://software.cosmolocal.credit/contracts/pools)。

### 交换结算

成功的交换会改变相关余额，但不能证明发行方已交付商品或服务。确认前，请查看输入、输出、接收方、最低收到数量和报价到期时间。

执行方式和结算记录，见[交换报价与结算](https://software.cosmolocal.credit/contracts/swaps)。

### 叠加费用计算

交换可能同时收取资金池费用和额外协议费。请查看报价显示的总额；通过多个资金池的路线可能在每一步收费。[交换参考](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement)维护最新计算方法和完整示例。

### 所有者与升级权限

资金池所有者可以提取可用库存。其他权限方可能控制升级或设置。存入资产或依赖资金池之前，应结合管理者公布的规则审查这些权力。仅仅封存设置，不能证明库存已永久锁定。

技术检查方法，见[资金池](https://software.cosmolocal.credit/contracts/pools)和[验证实例](https://software.cosmolocal.credit/contracts/deployments#verify-an-instance)。

## 估值模块

资金池的汇率不同于代金券的标示价值，也不同于发行方的兑换条款。请查看资金池选择的方法以及谁能更改其输入。软件参考文档介绍可用的[报价器（Quoter）](https://software.cosmolocal.credit/contracts/quoters)。

## 费用政策与限制

App 中的 **“信用额度”** 是资金池可以持有某种代金券的最大余额。它表示交换容量，不是个人借款或履行担保。限额和费用如何应用，见[资金池规则与配置](https://software.cosmolocal.credit/contracts/pools)。

## 协议费控制器

协议费用有一个配置的接收方。收取费用不会自动使其成为资金池管理者或担保人。当前机制见[费用参考](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement)，责任与披露见[治理机制](/zh/governance/mechanics)。
