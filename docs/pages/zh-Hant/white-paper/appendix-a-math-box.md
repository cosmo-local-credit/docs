## A. 擬議的衡量與費用模型

本附件定義了擬議的測量框架.Protocol v1.1.0 不記錄發行方的履行,現實世界核銷或下面要求的每個資料欄位.

### 事件與存量定義

憑證類*j*,佇列或期 *t*,以及披露的估值方法 *m*:

- `O_{j,t,m}`:在測量邊界的未償還可資格承諾值.
- `X_{j,t,m}`:該期內完成的組交換額值.
- `P_{j,t}`:有效向發行人提交以償還的單位.
- `F_{j,t}`:有單獨證明的發行人滿意度的呈現單位.
- `G_{j,t}`:具有核銷記錄,防止重複使用的完成單元.

`O` 不能僅從代幣供應中得出結論. 測量政策必須確定負責發行者,並將根據適用的情況排除發行人持有的庫存,燃燒的單元,過期的單數,釋放的單項,試驗餘額,不可訪問的餘額和代幣,其條款不會產生未償付的第三方承諾.

每個估值的指標都必須公佈分數,來源,估值方法,時間和對不同匯率進行處理.`X` 沒有證據,`F` 或`G`.

### 基於群組的履約指標

對於有效的贖回表單的一組:

`FulfillmentRate = FulfilledPresentments / ValidPresentments`

`DischargeCompleteness = DischargedFulfillments / FulfilledPresentments`

在每個計數器和命名器中使用相同的關閉或成熟佇列. 單獨報告拒絕,撤銷,過期,爭議,部分實現,糾正和仍然開放的表達.

`FulfillmentLatency = median(t_fulfilled - t_presented)`

`HoldingDuration = median(t_presented - t_acquired)`

執行延遲測量發行方服務在呈現後.持有時間是單獨的衡量標準,不能標記為贖回延遲.

### 不同的週轉速度指標

只有在 `O` 和實現價值使用相同的估值方法時,可計算擬議的承諾核銷速度:

`V_commit,t = FulfilledValue_t / AverageOutstandingEligibleCommitmentValue_t`

組交換活動措施是單獨的:

`V_swap,t = PoolSwapValue_t / AverageMeasuredPoolInventoryValue_t`

任何價值都不能證明社會影響,發行人能力,利率或現金可轉換性.

### 擬議的網路收入模型

讓:

- `PF_t` 是該期內產生的彙總費用;
- `NR_t` 是實際收到的該集團費用的公開份額;
- `RF_t` 是單獨提出的路由費或實際收到的服務費;以及
- `χ_t` 是經費和政策約束後可用於現金換的受收到收入的衡量份額.

從擬議的網路預算角度來看:

`ProposedNetworkRevenue_t = NR_t + RF_t`

`CashUsableNetworkRevenue_t = χ_t × (NR_t + RF_t)`

沒有新增 `PF_t` 轉移到 `NR_t` 杆是從總積分費轉移,否則將被計數兩次.Protocol v1.1.0 根據該協議,該協議的收益必須與擬議的杆模型分別報告.
