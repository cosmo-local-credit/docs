# 協議

**Commitment Pooling Protocol（CPP，承諾匯聚協議）** 說明獨立治理的資金池如何選擇代金券、公佈交換規則並支援交換。持有人之後向發行方使用代金券，獲得承諾的商品或服務。這些是不同的步驟，各自有不同的責任。

本網站解釋這些概念以及如何使用 CLC App。[CLC 軟體文件](https://software.cosmolocal.credit/)是軟體實現、合約、API、部署和營運的權威參考，目前提供英文版本。

瞭解共同術語，可以先閱讀[概念與詞彙](/zh-Hant/introduction/concepts)；瞭解更廣泛的設計和提案，可以閱讀[白皮書](/zh-Hant/white-paper)。

## 部署模式

不同社區和組織可以按照自己的規則運行相容軟體。Grassroots Economics Foundation 營運[公共 CLC App](https://cosmolocal.credit)。每項部署都應說明營運方、合約和責任機構。

合約地址、部署說明以及如何覈實所有者和升級權限，見[部署與驗證](https://software.cosmolocal.credit/contracts/deployments)。運行配套服務，可以從 [CLC Core API](https://software.cosmolocal.credit/core-api/) 開始。

## 元件概覽

以下主題請查閱軟體參考文件：

| 主題 | 權威軟體文件 |
| --- | --- |
| 代金券建立、供應量和到期機制 | [代金券](https://software.cosmolocal.credit/contracts/vouchers) |
| 資金池配置、存入、提取和控制 | [資金池](https://software.cosmolocal.credit/contracts/pools) |
| 匯率計算 | [報價器（Quoter）](https://software.cosmolocal.credit/contracts/quoters) |
| 交換執行、費用和交易記錄 | [交換報價與結算](https://software.cosmolocal.credit/contracts/swaps) |
| 透過多個資金池交換 | [路由](https://software.cosmolocal.credit/contracts/routing) |
| 發現服務和配套合約 | [註冊表與工具](https://software.cosmolocal.credit/contracts/registries) |
| API 請求和響應 | [OpenAPI 參考](https://software.cosmolocal.credit/core-api/reference) |
| 後端和路由設定 | [配置](https://software.cosmolocal.credit/core-api/configuration) |

## 應用層路徑兌換

有合適路線時，App 可以幫助參與者透過多個資金池交換。參與者審核報價並授權交換。每個資金池仍保留自己的規則和責任方。

參與者應瞭解的含義，見[路線與責任](/zh-Hant/protocol/network)；軟體如何報價和執行路線，見[路由實現](https://software.cosmolocal.credit/contracts/routing)。

軟體使交換成為可能；發行方仍對代金券承諾負責，資金池管理者仍對自己公佈的規則負責。公共 App 的使用受[服務條款](/zh-Hant/governance/terms)約束。
