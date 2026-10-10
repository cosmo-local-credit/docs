## A. Proposed na modelo ng pagsukat at bayad

Itinatakda ng appendix na ito ang isang iminungkahing balangkas sa pagsukat. Hindi itinatala ng Protocol v1.1.0 ang pagtupad ng tagapag-isyu, real-world discharge, o bawat data field na kinakailangan sa ibaba.

### Mga kahulugan ng kaganapan at stock

Para sa klase ng voucher *j*, cohort o period *t*, at isang naitalahang pamamaraan ng valuation *m*:

- `O_{j,t,m}`: halaga ng mga outstanding eligible commitments sa limitasyon ng pagsukat.
- `X_{j,t,m}`: halaga ng natapos na mga pool swap sa loob ng panahon.
- `P_{j,t}`: mga unit na may katumbas na ipinapakita sa tagapag-isyu para sa pagbabayad.
- `F_{j,t}`: ipinapakita ang mga unit na may nag-iiba na napatunayan na pagkumpirma ng tagapag-isyu.
- `G_{j,t}`: natatapos na mga yunit na may rekord ng discharge upang maiwasan ang muling paggamit.

Ang `O` ay hindi maaaring alisin mula sa supply ng token lamang. Ang isang patakaran sa pagsukat ay dapat maka-identify ang responsable na tagapag-isyu at maiwasan, ayon sa kahilingan, ang inventory na pinananatili ng tagapag-isyu, mga naka-burnt unit, expired units, discharged units, test balances, inaccessible balances at tokens na kung saan ang mga termino ay hindi lumilikha ng isang outstanding third party commitment.

Dapat ilathala ng bawat sinusukat na halaga ang unit, source, valuation method, timestamp, at pagtrato sa magkakaibang exchange rate ng Pool. Maaaring suportahan ng on-chain transfer ang `X` o ebidensiya ng presentment; hindi nito pinatutunayan nang mag-isa ang `F` o `G`.

### Mga hakbang sa pagpapatupad na batay sa cohort

Para sa isang cohort ng mga valid redemption presentations:

`FulfillmentRate = FulfilledPresentments / ValidPresentments`

`DischargeCompleteness = DischargedFulfillments / FulfilledPresentments`

Gamitin ang parehong naka-close o matandang cohort sa bawat numerator at denominator.

`FulfillmentLatency = median(t_fulfilled - t_presented)`

`HoldingDuration = median(t_presented - t_acquired)`

Ang pagganap ng latency ay tumutukoy sa serbisyo ng tagapag-isyu pagkatapos ng paghahatid. Ang tagal ng pagpapanatili ay isang hiwalay na sukat at hindi dapat i-label ang redemption latency

### Iba't ibang mga sukat ng bilis

Ang iminungkahi na bilis ng pagpapahintulot sa pananagutan ay maaaring kalkulahin lamang kung ang `O` at ang natupad na halaga ay gumagamit ng parehong pamamaraan ng pagpapahalaga:

`V_commit,t = FulfilledValue_t / AverageOutstandingEligibleCommitmentValue_t`

Ang isang hakbang sa pag-swap ng pool ay hiwalay:

`V_swap,t = PoolSwapValue_t / AverageMeasuredPoolInventoryValue_t`

Wala sa dalawang halaga ang nagpapatunay ng epekto sa lipunan, kapasidad ng tagapag-isyu, kapaki-pakinabang, o cash convertibility.

### Proposed na kita sa network

Hayaan:

- `PF_t` ang gross fees ng pool na nabuo sa loob ng panahon;
- `NR_t` ay ang iminungkahi na network rake na talagang natanggap bilang isang inihayag na bahagi ng mga fees ng pool;
- `RF_t` ay nag-iiba na iminungkahi ng mga bayad sa ruta o serbisyo na talagang natanggap; at
- `χ_t` ay ang kinukunan na bahagi ng natanggap na kita na karapat-dapat at maibabalik para sa isang tinukoy na paggamit sa cash denominated pagkatapos ng mga gastos at mga paghihigpit sa patakaran.

Mula sa iminungkahi na network-budget perspective:

`ProposedNetworkRevenue_t = NR_t + RF_t`

`CashUsableNetworkRevenue_t = χ_t × (NR_t + RF_t)`

Huwag idagdag ang `PF_t` sa `NR_t`: ang rake ay paglilipat mula sa gross na bayad sa Pool at mabibilang nang dalawang beses kung pagsasamahin ang mga ito. Sa halip, sinusuportahan ng kasalukuyang Protocol v1.1.0 ang isang karagdagang protocol fee; kailangang iulat nang hiwalay ang mga receipt nito mula sa iminungkahing modelo ng rake.
