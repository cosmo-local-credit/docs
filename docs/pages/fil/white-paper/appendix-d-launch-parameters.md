## D. Proposed launch parameters

Ang bawat halaga sa ibaba ay nagpapaliwanag. Hindi ito isang kasalukuyang default na app, setting ng Protocol v1.1.0, garantiya, alok, o pangako sa paghahatid.

- **Quorum levels para sa iminungkahi na CLC governance token:**
  - Q1 routine: hindi bababa sa 4% quorum at higit sa 50% approvals.
  - Q2 sensitibo: hindi bababa sa 10% quorum at hindibaba sa 60% approval.
  - Q3 critical: hindi bababa sa 20% quorum at hindi bababa sa 66.7% approval.
- **Proposed na mga oras:**
  - T1: 48 oras para sa mga Q1 action.
  - T2: 7 araw para sa mga Q2 action.
  - T3: 30 araw para sa mga Q3 action.
- **Epoch cadence:** 7 mga araw, kabilang ang anumang inaminang vote, pag-publish ng badyet, at iminungkahi na sCLC windows.
- **Pagpahinga ng emerhensiya:** agad sa pamamagitan ng isang nakikilala na awtoridad sa emerhensiya, na nagtatapos pagkatapos ng 72 oras maliban kung ratifikado sa ilalim ng proseso na inamin.
- **Proposed network rake:** 20% ng mga bayad sa pool na nakikibahagi sa default, limitado sa pamamagitan ng patakaran.
- **Illustrative Range ng bayad sa pool:** 0%–20%, na inilathala ng bawat nakikilahok na pool.
- **Proposed routing or service fee cap:** 20 bps sa bawat ruta.
- **Proposed network-rake rate:** `rake_rate_p = pool_fee_p × rake_share_p`.
- **Revenue eligibility:** uriin ang mga natanggap na asset bilang cash-eligible na `E_cash` o in-kind na `E_kind` sa ilalim ng isang inilathalang pamamaraan.
- **Mga kontrol sa pag-convert:** mga may-akda ng asset at venue, responsible authorities, price sources, time windows, slippage limits, caps, and reporting.
- **Pagbibigay-daan sa badyet:** mag-publish ng isang iminungkahi na badyet sa pag-access sa mga bayad pagkatapos lamang matupad ang tinatanggap na cover reserve at operating targets; ang badyets ay maaaring maging zero.
- **Mga lansangan ng panganib:** huwag palampasin ang isang kategorya ng asset sa panganib ng ibang kategorya nang walang eksplisit, informed opt-in ayon sa naaangkop na batas.
- **Proposed rolling at account limits:** tumanggi sa hindi pinapayagan na aktibidad sa pagitan ng mga klase at mag-apply ng inamin na caps.
- **Optional na pagbawas ng saklaw:** lamang kung pinahihintulutan ito ng umiiral na mga tuntunin sa pagkopya, kinakailangang pahintulot, at ang naaangkop na batas; hindi nito binabawasan ang pangako sa voucher ng isang tagapag-isyu o ang balanse sa chain.
- **Ang mga panlabas na kontrol sa likido, kung naka-enable nang hiwalay:** mag-publish ng saklaw ng lugar, paraan ng pagsukat, trigger, gastos at volume caps, mga kontrol sa pagpapatupad, emergency stops, at receipts. Huwag ipakilala ang programa bilang suporta sa token price.

Ang kasalukuyang Protocol v1.1.0 Mga bayad sa pool, karagdagang mga bayad sa protocol, at ang mga cap-token-balance ng pool ay patuloy na ginagampanan ng mga naka-implementar na kontrata at konfigurasyon, hindi ang mga iminungkahi na halaga.
