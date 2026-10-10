# 協議

Protocol v1.1.0 合約提供了白皮書 [第 1 章](/zh-Hant/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive) 中所述 **承諾匯聚協議 (CPP)** 的鏈上構件。本參考文件以公開的 [`v1.1.0` 版本](https://github.com/cosmo-local-credit/protocol/tree/v1.1.0) 為準。

有關本文使用的產品層級、負責任角色、操作生命週期、價值、限制、費用和狀態術語，請參閱 [概念和術語](/zh-Hant/introduction/concepts)。

Grassroots Economics Foundation (GEF) 運營 [cosmolocal.credit](https://cosmolocal.credit) 上的漸進式網頁應用，該應用是與這些合約互動的一種方式。應用和合約彼此獨立。僅運營介面不會使 GEF 自動成為代金券發行方、資金池管理者、託管人、擔保人或使用者交易的對手方。這些角色取決於相關部署、控制者地址以及已公佈的發行方或資金池條款。請參閱 [服務條款](/zh-Hant/governance/terms)。

## 部署模式

大多數有狀態模組都透過 Solady 的 `ERC1967Factory` 初始化為 **ERC-1967 代理例項**。多個例項可以共享一個實現，同時保持各自獨立的所有者、配置和儲存。部署還可以使用確定性鹽值，便於在部署前預測地址。

並非每個合約都使用代理。`DecimalQuoter` 和 `SwapRouter` 是無狀態的直接部署；`RescueVault` 和 `ERC1967Factory` 也是直接部署。下面列出的其餘有狀態模組均為代理部署而設計。

每個代理都有一名可替換其實現的管理員。代理管理與合約所有權相互獨立，應當分配給受適當治理的地址。即使資金池已封存配置，升級仍可能改變行為，因此使用者應同時評估資金池所有者和代理管理員。

EIP-165 支援也取決於具體合約，並非普遍存在。`GiftableToken`、三個報價器、`OracleRelay`、`Limiter`、多個登錄檔和索引、`Splitter`、`EthFaucet`、`PeriodSimple` 和 `RescueVault` 都提供 EIP-165 支援。在 v1.1.0 中，`SwapPool`、`SwapRouter`、`FeePolicy`、`ProtocolFeeController` 和 `CAT` 不提供 `supportsInterface`。

## 元件概覽

- **GiftableToken** — ERC20 供應、鑄造、銷燬和可選過期機制。發行方可以將某個例項用作代金券，但合約本身不會定義可兌付的內容、兌付人、地點或條款。
- **SwapPool** — 代幣保管庫和交換結算引擎。部署可以連線篩選、估值、費用、限制和協議費用元件，也可以不設定某些受支援的依賴項。
- **DecimalQuoter、RelativeQuoter 和 OracleQuoter** — 可互換的估值模組，分別用於小數位平價、所有者管理的相對匯率，或預言機推導的匯率。`OracleRelay` 可以為 `OracleQuoter` 中繼一個外部資料來源。
- **FeePolicy 和 Limiter** — 可選的資產對費用規則和每代幣資金池餘額上限。
- **ProtocolFeeController** — 可選、可變的協議費率、接收方和活躍狀態，資金池可在結算時讀取它。
- **TokenUniqueSymbolIndex、AccountsIndex 和 ContractRegistry** — 代幣、賬戶和地址發現元件。`CAT` 記錄某個賬戶按順序排列的結算代幣偏好。
- **SwapRouter** — 針對擬議的多資金池路徑進行僅報價的精確輸入和精確輸出計算。它不託管代幣，也不執行交換。
- **Splitter、EthFaucet、PeriodSimple 和 RescueVault** — 用於分配、Gas 資助、頻率限制和資產恢復的支援工具。

這些合約可以以不同方式組合。登錄檔上架、報價或圖上路徑都不能保證交易必然執行：當前流動性、代幣限制、費用、預言機狀態、授權、截止時間、網路狀況和各資金池的配置仍然適用。
