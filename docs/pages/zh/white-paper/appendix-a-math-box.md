## A. 拟议的衡量与费用模型

本附件定义了拟议的测量框架.Protocol v1.1.0 不记录发行方的履行,现实世界核销或下面要求的每个数据字段.

### 事件与存量定义

凭证类*j*,队列或期 *t*,以及披露的估值方法 *m*:

- `O_{j,t,m}`:在测量边界的未偿还可资格承诺值.
- `X_{j,t,m}`:该期内完成的组交换额值.
- `P_{j,t}`:有效向发行人提交以偿还的单位.
- `F_{j,t}`:有单独证明的发行人满意度的呈现单位.
- `G_{j,t}`:具有核销记录,防止重复使用的完成单元.

`O` 不能仅从代币供应中得出结论. 测量政策必须确定负责发行者,并将根据适用的情况排除发行人持有的库存,燃烧的单元,过期的单数,释放的单项,试验余额,不可访问的余额和代币,其条款不会产生未偿付的第三方承诺.

每个估值的指标都必须公布分数,来源,估值方法,时间和对不同汇率进行处理.`X` 没有证据,`F` 或`G`.

### 基于群组的履约指标

对于有效的赎回表单的一组:

`FulfillmentRate = FulfilledPresentments / ValidPresentments`

`DischargeCompleteness = DischargedFulfillments / FulfilledPresentments`

在每个计数器和命名器中使用相同的关闭或成熟队列. 单独报告拒绝,撤销,过期,争议,部分实现,纠正和仍然开放的表达.

`FulfillmentLatency = median(t_fulfilled - t_presented)`

`HoldingDuration = median(t_presented - t_acquired)`

执行延迟测量发行方服务在呈现后.持有时间是单独的衡量标准,不能标记为赎回延迟.

### 不同的周转速度指标

只有在 `O` 和实现价值使用相同的估值方法时,可计算拟议的承诺核销速度:

`V_commit,t = FulfilledValue_t / AverageOutstandingEligibleCommitmentValue_t`

组交换活动措施是单独的:

`V_swap,t = PoolSwapValue_t / AverageMeasuredPoolInventoryValue_t`

任何价值都不能证明社会影响,发行人能力,利率或现金可转换性.

### 拟议的网络收入模型

让:

- `PF_t` 是该期内产生的汇总费用;
- `NR_t` 是实际收到的该集团费用的公开份额;
- `RF_t` 是单独提出的路由费或实际收到的服务费;以及
- `χ_t` 是经费和政策约束后可用于现金换的受收到收入的衡量份额.

从拟议的网络预算角度来看:

`ProposedNetworkRevenue_t = NR_t + RF_t`

`CashUsableNetworkRevenue_t = χ_t × (NR_t + RF_t)`

没有添加 `PF_t` 转移到 `NR_t` 杆是从总积分费转移,否则将被计数两次.Protocol v1.1.0 根据该协议,该协议的收益必须与拟议的杆模型分别报告.
