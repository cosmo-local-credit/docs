# 14. Mga KPI at health indicator

Dapat lamang maglathala ng KPI ang isang deployment kapag malinaw nitong natutukoy ang event, source, cohort o panahon, unit, valuation method at timestamp, mga exclusion, correction policy, off-chain evidence, at mga limitasyon sa kalidad ng data.

Masusukat ng kasalukuyang route service ang mga event sa discovery, quote, execution, settlement, at reconciliation. Kailangan pa rin ng hiwalay na ebidensiya para sa fulfillment ng Voucher at mga social outcome. Kabilang sa mga inirerekomendang sukat ang:

- valid redemption presentments;
- fulfillment rate ayon sa cohort;
- completeness ng discharge;
- tagal mula presentment hanggang fulfillment;
- holding duration mula acquisition hanggang presentment;
- natitirang kwalipikadong commitment sa ilalim ng nakasaad na methodology;
- volume ng nakumpletong direct Pool swap;
- mga route-discovery attempt at bilang ng available na candidate route;
- mga attempt, resulta, depth, expiry, at quoted fee ng may-awtoridad na route quote;
- mga routed-exchange attempt, confirmed at reverted route, at dahilan ng failure;
- input at output volume ng buong route, na minsan lamang binibilang sa bawat route at hindi sa bawat hop;
- per-hop settlement amount, Pool fee, protocol fee, at intermediate remainder;
- mga route constraint, kabilang ang kulang na liquidity, Pool token-balance cap, hindi sinusuportahang dependency, at limitasyon ng wallet;
- graph freshness, tagal ng reconciliation, correction, at failure;
- nasukat na Pool inventory;
- paggamit ng Pool token-balance cap;
- discovery success at quote pass rate, na hiwalay sa route execution at settlement rate;
- kwalipikadong reserve na hinati sa tahasang sakop na exposure;
- claim at recovery sa guarantor sa ilalim ng tinukoy na policy;
- kasalukuyang bayarin sa Pool at protocol sa bawat hop, na hiwalay sa anumang proposed network rake o service fee sa hinaharap;
- oras ng governance detection, decision, pause, repair, at closure;
- mga complaint, dispute, correction, at remedy; at
- hiwalay na napatunayang social o ecological outcome.

Hindi sapat ang on-chain transaction data lamang upang patunayan ang identity, performance ng issuer, satisfaction, causality, kalusugan ng komunidad, o social impact. Kailangan ng sariling methodology at ebidensiya ang mga claim na iyon.

Tingnan ang [Appendix C](/fil/white-paper/appendix-c-kpi-definitions) para sa proposed measurement specification.
