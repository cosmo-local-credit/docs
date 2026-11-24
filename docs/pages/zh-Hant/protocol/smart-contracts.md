# 智慧合約

合約記錄代幣餘額並執行資金池交換。[CLC 軟體文件](https://software.cosmolocal.credit/contracts/)是軟體實現的權威參考，目前提供英文版本。本頁說明參與者在使用這些合約前應瞭解的內容。

受治理的承諾資金池與其 `SwapPool` 合約之間，以及交換與發行方履約之間的區別，見[概念與詞彙](/zh-Hant/introduction/concepts)。

## 代金券（`GiftableToken`）

代金券把數位餘額與發行方公佈的承諾聯繫起來。條款說明用途、接受的地點和時間，以及責任方。建立代幣不能證明發行方有能力提供承諾的商品或服務。

建立、鑄造、銷毀和到期機制，見[代金券](https://software.cosmolocal.credit/contracts/vouchers)。

## 承諾資金池（`SwapPool`）

承諾資金池按照公佈的規則匯聚選定的代金券。合約持有庫存並交換受支援資產。存入資產不會自動賦予存入人資金池份額、還款權、提款權、獎勵或治理權；此類權利需要另行披露的條款。

### 組成與可選依賴項

請檢查資金池接受哪些代金券、如何設定匯率、有哪些限額和費用，以及誰能更改這些設定。軟體參考文件說明[資金池配置與封存](https://software.cosmolocal.credit/contracts/pools)。

### 交換結算

成功的交換會改變相關餘額，但不能證明發行方已交付商品或服務。確認前，請查看輸入、輸出、接收方、最低收到數量和報價到期時間。

執行方式和結算記錄，見[交換報價與結算](https://software.cosmolocal.credit/contracts/swaps)。

### 疊加費用計算

交換可能同時收取資金池費用和額外協議費。請查看報價顯示的總額；透過多個資金池的路線可能在每一步收費。[交換參考](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement)維護最新計算方法和完整示例。

### 所有者與升級權限

資金池所有者可以提取可用庫存。其他權限方可能控制升級或設定。存入資產或依賴資金池之前，應結合管理者公佈的規則審查這些權力。僅僅封存設定，不能證明庫存已永久鎖定。

技術檢查方法，見[資金池](https://software.cosmolocal.credit/contracts/pools)和[驗證實例](https://software.cosmolocal.credit/contracts/deployments#verify-an-instance)。

## 估值模組

資金池的匯率不同於代金券的標示價值，也不同於發行方的兌換條款。請查看資金池選擇的方法以及誰能更改其輸入。軟體參考文件介紹可用的[報價器（Quoter）](https://software.cosmolocal.credit/contracts/quoters)。

## 費用政策與限制

App 中的 **“信用額度”** 是資金池可以持有某種代金券的最大餘額。它表示交換容量，不是個人借款或履約擔保。限額和費用如何應用，見[資金池規則與配置](https://software.cosmolocal.credit/contracts/pools)。

## 協議費控制器

協議費用有一個配置的接收方。收取費用不會自動使其成為資金池管理者或擔保人。當前機制見[費用參考](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement)，責任與披露見[治理機制](/zh-Hant/governance/mechanics)。
