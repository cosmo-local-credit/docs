# Mga smart contract

Inilalarawan ng pahinang ito ang pangunahing mga contract ng Pool at Voucher sa Protocol v1.1.0. Nagbibigay ang mga contract ng mekanismo para sa settlement; hindi nila pinapalitan ang mga pagsisiwalat ng tagapag-isyu, tuntunin ng Pool, o ibang transaction terms na naaangkop sa isang partikular na paggamit.

Gamitin ang [Mga konsepto at bokabularyo](/fil/introduction/concepts) upang makilala ang pinamamahalaang Pool ng Pangako mula sa `SwapPool`, at ang swap settlement mula sa paghaharap para tubusin, pagtupad, at discharge.

## Voucher (`GiftableToken`)

Ang `GiftableToken` ay isang ERC20 token na may mga mekanismong magagamit ng tagapag-isyu para sa isang Voucher:

- **Awtorisadong minting** — Maaaring magtalaga ang owner ng mga writer na makapag-iisyu ng token gamit ang `mintTo`.
- **Opsyonal na expiry** — Kapag `0` ang expiry, walang expiry sa antas ng contract. Kung mayroon, magre-revert ang paglilipat, minting, at burning sa o pagkatapos ng naka-configure na timestamp. Maaaring panatilihin ng sinuman ang panghuling `expired` state sa direktang pagtawag sa `applyExpiry`.
- **Pagtatala ng supply** — Ipinapakita ng `totalMinted` at `totalBurned` ang pinagsama-samang aktibidad ng supply. Sinusunog ng owner-only na `burn` function ang mga token na hawak ng address ng owner.

Hindi tinutukoy ng token contract ang mga kalakal o serbisyo ng tagapag-isyu, hindi ito nagtatakda ng halaga sa pagtubos, nagpapatunay ng kakayahang tumupad, o nangangako ng pagpapalit sa salapi. Nagiging pangakong maaaring tubusin ang `GiftableToken` dahil lamang sa hiwalay na inilathalang mga tuntunin at kilos ng tagapag-isyu. Nananatiling responsable ang mga tagapag-isyu sa tumpak na paglalarawan at pagtupad sa mga tuntuning iyon.

## Pool ng Pangako (`SwapPool`)

Ang `SwapPool` ay isang token vault at makina para sa swap settlement. Bagama't naglalantad ito ng ERC20 metadata para sa pangalan, simbolo, at decimals ng Pool, hindi nagmi-mint ng Pool-share token ang v1.1.0 contract. Ibinibigay ang liquidity sa pamamagitan ng paglilipat ng mga token sa Pool, at maaaring i-withdraw ng contract owner ang available na liquidity.

### Komposisyon at mga opsyonal na dependency

| Configuration | Kapag hindi naka-set | Maaaring i-seal ang address slot |
| --- | --- | --- |
| `tokenRegistry` | Maaaring makapasa ang anumang token sa curation check ng Pool | Oo |
| `tokenLimiter` | Walang contract-level balance cap ang mga deposito | Oo |
| `quoter` | Itinuturing ang raw input amount bilang raw quoted output amount | Oo |
| `feePolicy` | Zero ang bayad sa Pool | Oo |
| `feeAddress` | Hindi naiipon ang mga bayad sa Pool bilang maaaring i-withdraw na bayad para sa isang itinalagang recipient | Oo |
| `protocolFeeController` | Walang sinisingil na bayad sa Protocol | Hindi |

Permanenteng nila-lock ng limang seal bit ang kasalukuyang mga address ng `feePolicy`, `feeAddress`, `quoter`, `tokenRegistry`, at `tokenLimiter` laban sa kani-kanilang setter. Mga initialization value ang `protocolFeeController` at `feesDecoupled` at hindi kabilang sa limang bit na iyon.

Hindi pina-freeze ng pag-seal sa isang address slot ang contract sa address na iyon. Maaari pa ring magbago ang isang sealed registry, limiter, quoter, o fee policy—at ang naka-configure na protocol-fee controller—kung pinapayagan ito ng sarili nitong pamamahala. Maaari ring i-upgrade ng ERC-1967 proxy administrator ang implementation ng Pool. Kaya nakasalalay ang anumang makabuluhang pahayag tungkol sa immutability sa pamamahala ng Pool owner, proxy administrator, at bawat naka-configure na dependency.

### Swap settlement

Para sa isang palitan, ginagawa ng `SwapPool` ang sumusunod:

1. Sinusuri kung nakapasa ang input at output token sa opsyonal na registry at kung pasok ang hinihinging input sa opsyonal na limitasyon ng balanse sa Pool.
2. Kinukuha ang input token mula sa caller at sinusukat ang halagang aktuwal na natanggap. Ang nasukat na halaga ang ginagamit sa pricing, kabilang ang fee-on-transfer token.
3. Kumukuha ng gross quote mula sa naka-configure na quoter, o ginagamit ang raw na halagang natanggap kapag walang quoter.
4. Kinakalkula ang bayad sa Pool at anumang karagdagang bayad sa Protocol, saka sinusuri ang available na liquidity ng output token.
5. Direktang ipinapadala ang protocol fee sa naka-configure na protocol recipient, inililipat ang nominal net output sa recipient, at itinatala ang Pool fee kapag may naka-configure na fee address.
6. Nag-e-emit ng lumang `Swap` event at ng mas detalyadong `SwapSettlement` event.

Itinatala ng `SwapSettlement` ang initiator, parehong token, nasukat na input, gross quoted output, nominal output na ipinadala, output na aktuwal na naobserbahan sa recipient, bayad sa Pool, at bayad sa Protocol. Maaaring magkaiba ang nominal at observed output kapag naniningil din ng transfer fee ang output token. Ang `fee` field sa lumang `Swap` event ay bayad sa Pool lamang.

Ang anim-na-argumentong overload na `withdraw(tokenOut, tokenIn, value, recipient, minAmountOut, deadline)` ang bounded execution path. Nagre-revert ito pagkatapos ng deadline o kapag mas mababa sa `minAmountOut` ang naobserbahang pagtaas sa balanse ng recipient. Ito ang dapat piliin ng mga integrator dahil pansamantala lamang ang ipinapakitang quote: maaaring magbago ang quoter state, fee policy, liquidity, limitasyon, at oracle data bago ang execution. Hindi ibinibigay ng mas lumang tatlo- at apat-na-argumentong overload ang mga bound na iyon sa antas ng Pool.

### Additive na pagkalkula ng bayad

Parehong ibinabawas sa gross quoted output ang bayad sa Pool at bayad sa Protocol. Ang protocol fee ay **hindi kinukuha mula sa bayad sa Pool**, at pinananatili ng Pool ang buong nakalkulang bayad nito.

Halimbawa, sa gross quote na 100 yunit:

- 2 yunit ang maiipon sa Pool para sa 2% Pool fee;
- isa pang 0.2 yunit ang direktang mapupunta sa protocol recipient para sa 10% protocol rate na inilapat sa Pool fee; at
- 97.8 yunit ang matatanggap ng user.

Ginagamit sa protocol calculation ang mas mataas sa nakalkulang Pool fee at ipinapalagay na 1% fee base. Pinipigilan nitong mapaliit nang halos zero ang protocol calculation dahil sa napakaliit na Pool fee. Nagre-revert ang hindi wastong pinagsamang rate gamit ang `FeeTooHigh`, at nagre-revert gamit ang `InsufficientOutput` ang quote na magiging zero ang settlement.

### Mga kapangyarihan ng owner at upgrade

Maaaring kolektahin ng contract owner ang naipong Pool fees at tawagin ang `withdrawLiquidity` upang ilipat ang anumang available na token ng Pool sa napiling non-zero address. Kapag decoupled ang fees, inilalaan ang naipong fees mula sa liquidity-withdrawal path na ito; kung hindi, nananatili ang mga ito bilang bahagi ng balanse ng Pool. Hindi dapat ipalagay ng mga kalahok na permanenteng naka-lock ang idinepositong liquidity maliban kung may karagdagang napapatunayang governance control na nagtatakda nito.

Hindi inaalis ng configuration sealing ang kapangyarihang ito sa pag-withdraw ng liquidity. Hindi rin nito inaalis ang hiwalay na upgrade power ng ERC-1967 proxy administrator.

## Mga module ng valuation

Ipinapatupad ng tatlong quoter ang forward at reverse quote function na ginagamit ng `SwapPool` at `SwapRouter`:

- **`DecimalQuoter`** — Stateless na decimal normalization sa ilalim ng 1:1 value-parity assumption.
- **`RelativeQuoter`** — Decimal normalization at mga relative price index na pinamamahalaan ng owner. Default sa parity ang token index na hindi naka-set.
- **`OracleQuoter`** — Binibigyan ng rate ang bawat token sa pamamagitan ng naka-configure na oracle, na may global o per-token staleness limit at opsyonal na 0.9-to-1.0 output multiplier.

Kasing maaasahan lamang ng feed selection at administration nito ang isang `OracleQuoter`. Kailangang pare-pareho ang denomination at direction ng feed, tama ang decimals, positibo at sariwa ang mga update, at maaaring palitan ng governance ang feed o freshness setting. Maaaring magdulot ng maling quote o magpa-revert sa palitan ang pagmamanipula sa source, naantalang update, network outage, maling pair configuration, o pagkawala ng oracle-owner key.

Ang `OracleRelay` ay opsyonal na single-feed, latest-round relay na compatible sa oracle interface. Muling inilalathala ng itinalagang writer ang mga value ng source; walang cross-chain proof at walang nakaimbak na round history. Tinatanggap ng relay ang mga value ng writer na may future-timestamp check lamang. Hiwalay na tinatanggihan ng `OracleQuoter` ang non-positive o stale na sagot, habang maaaring palitan ng relay owner ang writer o i-invalidate ang kasalukuyang round. Kaya dapat suriin ng mga user ang source feed, relay writer, relay owner, at monitoring process.

## Patakaran sa bayad at mga limitasyon

Nag-iimbak ang `FeePolicy` ng default fee sa parts per million at opsyonal na directional pair override. Maaaring baguhin ng owner nito ang mga rate maliban kung nililimitahan ng governance sa labas ng contract ang kapangyarihang iyon.

Nag-iimbak ang `Limiter` ng maximum balance para sa isang token sa isang partikular na address ng Pool. Maaaring baguhin ng owner o awtorisadong writer ang limitasyong iyon. Hinaharangan ng zero limit ang deposito kapag aktibo ang limiter; nananatiling walang cap ang deposito kapag walang limiter.

Inilalarawan ng mga limitasyong ito ang naka-configure na **token exposure** sa isang Pool. Hindi nila, sa sarili lamang, inuuri ang token balance bilang pautang o legal na utang, pinatutunayan ang kakayahan ng tagapag-isyu, o ginagarantiya ang pagtupad. Nakadepende ang mga tanong na iyon sa mga tuntunin ng tagapag-isyu, tuntunin ng Pool, transaksyong ipinakita sa user, at naaangkop na batas.

## Controller ng bayad sa Protocol

Ang `ProtocolFeeController` ay opsyonal na fee component sa antas ng deployment. Maaaring baguhin ng owner nito ang protocol rate at recipient o i-deactivate ang bayad. Maaaring i-share ng maraming Pool ang isang controller, ngunit hindi hinihingi ng Protocol ang isang controller bawat network.

Kapag aktibo at naka-configure, direktang binabayaran ang recipient gamit ang output token sa bawat matagumpay na palitan. Kung paano ginagamit ng recipient ang pondo—halimbawa, para sa operasyon, monitoring, liquidity support, o ibang inilathalang layunin—ay usapin ng pamamahala, hindi garantiya ng contract.
