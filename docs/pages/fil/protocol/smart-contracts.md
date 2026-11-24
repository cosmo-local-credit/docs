# Mga smart contract

Itinatala ng mga contract ang balanse ng token at isinasagawa ang mga palitan sa Pool. Ang [dokumentasyon ng CLC software](https://software.cosmolocal.credit/contracts/) ang pangunahing sanggunian sa implementasyon, na kasalukuyang nasa Ingles. Ipinapaliwanag ng pahinang ito ang dapat maunawaan ng mga kalahok bago gamitin ang mga contract.

Tingnan ang [Mga konsepto at bokabularyo](/fil/introduction/concepts) para sa pagkakaiba ng pinamamahalaang Pool ng Pangako at ng `SwapPool` contract nito, at ng palitan at pagtupad ng Tagapag-isyu.

## Voucher (`GiftableToken`)

Iniuugnay ng Voucher ang isang digital na balanse sa inilathalang pangako ng Tagapag-isyu. Ipinapaliwanag ng mga tuntunin kung para saan ito, saan at kailan ito tinatanggap, at sino ang may pananagutan. Ang paggawa ng token ay hindi patunay na kayang ibigay ng Tagapag-isyu ang ipinangakong produkto o serbisyo.

Para sa mekanismo ng paggawa, pag-mint, pag-burn, at pag-expire, basahin ang [Mga Voucher](https://software.cosmolocal.credit/contracts/vouchers).

## Pool ng Pangako (`SwapPool`)

Pinagsasama ng Pool ng Pangako ang mga piling Voucher sa ilalim ng inilathalang mga patakaran. Hawak ng contract nito ang imbentaryo at ipinagpapalit nito ang mga suportadong asset. Hindi awtomatikong nagbibigay ang deposito ng bahagi sa Pool o karapatan sa pagbabayad, withdrawal, reward, o pamamahala; kailangan ng hiwalay na isiniwalat na mga tuntunin para sa mga karapatang iyon.

### Komposisyon at mga opsyonal na dependency

Suriin kung aling Voucher ang tinatanggap ng Pool, paano nito itinatakda ang rate ng palitan, ang mga limitasyon at bayarin, at sino ang maaaring magbago ng mga ito. Inilalarawan ng sanggunian sa software ang [configuration at pag-seal ng Pool](https://software.cosmolocal.credit/contracts/pools).

### Swap settlement

Binabago ng matagumpay na palitan ang mga kaugnay na balanse. Hindi nito pinatutunayang naihatid na ng Tagapag-isyu ang produkto o serbisyo. Bago kumpirmahin, suriin ang input, output, tatanggap, minimum na matatanggap, at pag-expire ng quote.

Para sa mga paraan ng pagsasagawa at tala ng settlement, basahin ang [Pag-quote at pag-settle ng palitan](https://software.cosmolocal.credit/contracts/swaps).

### Additive na pagkalkula ng bayad

Maaaring may bayarin sa Pool at karagdagang bayarin sa protocol ang isang palitan. Suriin ang kabuuang nasa quote; maaaring may bayarin sa bawat hakbang ng rutang dumaraan sa maraming Pool. Pinananatili sa [sanggunian sa palitan](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) ang kalkulasyon at halimbawang may mga halaga.

### Mga kapangyarihan ng owner at upgrade

Maaaring mag-withdraw ang may-ari ng Pool ng magagamit na imbentaryo. Maaaring ibang awtoridad ang may kontrol sa upgrade o mga setting. Suriin ang mga kapangyarihang ito kasama ng inilathalang mga patakaran ng Tagapangasiwa bago magdeposito o umasa sa Pool. Ang pag-seal sa mga setting lamang ay hindi patunay na permanenteng naka-lock ang imbentaryo.

Tingnan ang [Mga Pool](https://software.cosmolocal.credit/contracts/pools) at [Pagberipika ng isang instance](https://software.cosmolocal.credit/contracts/deployments#verify-an-instance) para sa mga teknikal na pagsusuri.

## Mga module ng valuation

Magkahiwalay ang rate ng palitan ng Pool, ang nakasaad na halaga ng Voucher, at ang mga tuntunin ng Tagapag-isyu sa pagtubos. Suriin ang napiling paraan ng Pool at kung sino ang maaaring magbago ng mga input nito. Ipinapaliwanag ng sanggunian sa software ang mga available na [Quoter](https://software.cosmolocal.credit/contracts/quoters).

## Patakaran sa bayad at mga limitasyon

Ang **“Credit limit”** sa App ang pinakamataas na balanse ng isang partikular na Voucher na maaaring hawakan ng Pool. Inilalarawan nito ang kapasidad sa palitan, hindi personal na pangungutang o garantiya ng pagtupad. Tingnan ang [mga patakaran at configuration ng Pool](https://software.cosmolocal.credit/contracts/pools) para sa paglalapat ng limitasyon at bayarin.

## Controller ng bayad sa Protocol

May naka-configure na tatanggap ang bayarin sa protocol. Hindi awtomatikong ginagawang Tagapangasiwa ng Pool o guarantor ang tatanggap dahil sa bayaring iyon. Tingnan ang [sanggunian sa bayarin](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) para sa kasalukuyang mekanismo at [mga mekanismo ng pamamahala](/fil/governance/mechanics) para sa pananagutan at pagsisiwalat.
