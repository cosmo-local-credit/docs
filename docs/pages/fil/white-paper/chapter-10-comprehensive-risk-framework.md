## **10. Komprehensibong balangkas ng panganib**

Ang iniproposed na framework ay naghiwalay ng sampung kategorya ng panganib. Para sa bawat kategorya ito ay nakikilala ang mga posibleng tagapagpahiwatig, kontrol, pagsusulit ng stress, at isang indikatibong kagustuhan sa panganib. Ito ay mga rekomendasyon sa disenyo, hindi mga pangangasihan na ang bawat kontrol ay inilalapat, epektibo, o sapat. Limits, reserbas, garantiya, pagmamataas, saklaw, at pamamahala ay hindi maaaring alisin ang pagkawala.

### **10.1 Protokol at panganib sa smart contract**

- **Mga banta:** mga bug sa kontrata, mga pagkakamali sa pag-upgrade, mga pagkabigo ng pagkakapantay-pantay, at maling naka-configure na mga limitasyon o bayad.
- **Mga tagapagpahiwatig:** ang mga natuklasan ng audit, hindi maipaliwanag na paggalaw ng inventory, invariant failure, at di-pangkaraniwang mga pagbabalik.
- **Posible na mga kontrol:** independent audits; minimum privileged roles; disclosed proxy at dependence controllers; time-locked upgrades; on-chain monitoring; incident pauses na may nai-publish na awtoridad at mga pamantayan; at isang nasubok na landas ng migration.
- **Mga pagsubok sa stress:** hindi available quote o limit dependencies, kakulangan ng inventory, paused contracts, at burst traffic.
- **Pangarap sa panganib:** Mababang bago ma-scale ang mga outstanding obligation o volume ng swap.

### **10.2 Mga panganib sa ekonomiya at merkado**

- **Mga banta:** ang manipis na imbentaryo, unilateral na daloy, mabilis na pag-withdrawals, at manipulasyon o nakaraan ng mga referensiya sa presyo.
- **Mga tagapagpahiwatig:** mataas na paggamit ng pool token-balance cap, pagpapalawak ng mga pagkakaiba sa quote, madalas na pagtanggi ng limitasyon, at nakatuon inventory.
- **Posible na mga kontrol:** ang kasalukuyang mga limitasyon sa balanse ng token ng pool; iminungkahi na mga limitasyong rolling o account; nag-iiba na inaminang mga reserbas; pinansiyal na mga referensiya sa presyo; pagbubukod ng ruta; at mga bayad o limitasyón ng insidente na limitado sa oras.
- **Mga pagsubok sa stress:** malalaking pag-aalis sa presyo ng referensya, pagtaas ng presentasyon, mga kahilingan sa pag-withdraw, at pagputol sa mapagkukunan ng data.
- **Pangarap sa panganib:** matindi lamang sa loob ng mga nai-publish na parameter at pinansiyal na kapasidad sa pagbubuntis ng pagkawala.

### **10.3 Ang panganib ng tagapag-isyu at voucher**

- **Mga banta:** ang emisyon sa kabila ng kapasidad ng pagpapatupad, default ng tagapag-isyu, maling mga termino, at hindi malinaw na window ng availability o presentation.
- **Mga tagapagpahiwatig:** bumaba ang mga rate ng nakumpirma na pagpapatupad, pag-aging ng mga outstanding voucher, hindi natatapos na mga reklamo, at nakatuon na pagkakalantad sa isang tagapag-isyu.
- **Posible na mga kontrol:** pag-aalaga sa mga tagapag-isyu; malinaw na mga termino ng voucher at Offer; mga limitasyon sa emisyon o pagpasok; independiyenteng pinansiyal na mga bond o garantiya; pagreport sa cohort; at responsable na pagsusuri ng registry.
- **Mga pagsubok sa stress:** insolvency ng tagapag-isyu, regional production shocks, counterfeit claims, at long-term compliance delays.
- **Pangarap sa panganib:** mas mababa sa pagtaas ng konsentrasyon ng tagapag-isyu o nag-aalok.

### **10.4 Ang panganib ng pagpapahayag at pagpapatupad**

- **Mga banta:** hindi valid o duplicate presentation, di sapat na kapasidad ng tagapag-isyu, stockouts, logistics failure, at nawawala ang mga record ng discharge.
- **Mga tagapagpahiwatig:** late-to-fulfill request, nabalitaan o pinagtataloang mga presentation, stocks, backlogs ng tiket, at natupad na mga unit na walang discharge.
- **Posible na mga kontrol:** ang nai-publish na mga pamamaraan ng pagtatanghal at pagpapatupad; pagpapahayag ng kapasidad; maraming mga lugar ng pagtugon kung saan legal; mga pamantayan sa katibayan; mga landas ng reklamo at remedyo; at mga talaan na naghahati sa paghahayag, pagtugon, at discharge.
- **Mga pagsubok sa stress:** dalawang hanggang apat na beses ang dami ng paghahatid, mga pagputol sa pasilidad, mga pagkakamali ng supplier, at mga pagtatangka ng duplikatong paggamit.
- **Pangarap sa panganib:** Mababang kung may kinalaman ang mga mahalagang kalakalan, mahihirapan na kalahok, o mahabang window ng pagpapatupad.

### **10.5 Mga panganib sa pamamahala**

- **Mga banta:** Kapanghulihan ng steward o controller, mabilis na pagbabago ng parameter, mga pakikibaka sa interes, lihim na teknikal na kapangyarihan, at mahihirap na appeals.
- **Mga tagapagpahiwatig:** naka-concentrate na awtoridad, madalas na mga aksyon sa emerhensiya, hindi maipaliwanag na pagbabago ng patakaran, at paulit-ulit na overrides.
- **Posible na mga kontrol:** ang mga pagbibigay ng impormasyon tungkol sa papel at kapangyarihan; proportional approval thresholds; time-locks; conflicts and recusal rules; public change records; appeals; automatic emergency power sunset; at forkability.
- **Mga pagsubok sa stress:** mga pagtatanghal ng kontrabida, pagkawala ng signature, pagsisikap na kumita, at pagkuha sa pamamagitan ng pagtipon o naka-delegate na kontrol.
- **Pangarap sa panganib:** mababa para sa mga aksyon na nakakaapekto sa mga pamamaraan ng halaga, pag-withdraw, root ng registry, coverage, o emergency powers.

Para sa isang hinaharap na paglalapat ng iminungkahi na CLC governance token, ang capture test ay magsasama ng pagpupulong na sinundan ng mga pagtatangka upang i-redirect ang mga badyet, mabawasan ang mga pamantayan ng registry, pahintulot ang mga mandato ng may kaugnayan na partido, o maubos ang pinansiyal na coverage.

### **10.6 Mga panganib sa ligal at pagsunod**

- **Mga banta:** ang isang voucher, serbisyo, promosyon, o asset sa pamamahala na nakatanggap ng hindi inaasahang paggamot sa regulasyon; mga pagkabigo sa proteksyon ng mamimili; pagkakalantad ng salapi o sanksyon; at cross-border na mga paghihigpit.
- **Mga tagapagpahiwatig:** mga flags ng jurisdiction, mga imbestigasyon ng regulator, mga reklamo, pag-uugnay ng limitado na partido, at pagkakaiba sa pagitan ng advertised at tunay na pag-uugali.
- **Posible na mga kontrol:** pagsusuri sa pamamagitan ng mga klase at hurisdiksyon; tumpak na pagpapahayag; geofined interface; proportional eligibility or attestation checks; promosyon controls; records ng awtoridad at pagtanggap; at malinaw na responsable na partido.
- **Mga pagsubok sa stress:** isang paghihigpit sa hurisdiksyon, pagtatapos ng provider, mandatory re-classification, at isang utos na ihinto ang isang tampok o asset class.
- **Pangarap sa panganib:** mababa; i-restrict o pause ang hindi suportado na aktibidad.

#### 10.6.1 Legal na pag-uugali at pagpaplano ng mga token

1. **Infrastruktura na maaaring suriin:** Protocol v1.1.0 ang mga kontrata ayEVM-ang mga pinagmulan ay nai-publish sa ilalim ng mga lisensya at third party exceptions na nakikilala sa protocol repository. Ang pag-publika ay nagbibigay-daan sa pagsusuri ngunit hindi mismo patunayan ang isang audit, ligtas na deployment, o legal compliance.
2. **Proposed-token posture:** sa disenyo na ito, ang iminungkahi na CLC governance token ay mag-coordinate ng pamamahala at policy-gated access. Hindi ito lumilikha ng mga dividend, profit sharing, residual rights, o isang garantiya ng halaga o likido.
3. **Kaugnay na mga iminungkahing asset:** Maaaring payagan ng hiwalay na ipinatupad na patakaran ang pag-lock ng iminungkahing CLC governance token upang mag-mint ng stCLC at maaaring mag-awtorisa ng epoch-scoped na sCLC. Kailangang tukuyin ng mga pinagtibay na tuntunin ang eksaktong karapatan, limitasyon, expiry, transferability, at pagtrato sa mga ito.
4. **Mga komunikasyon:** Hindi dapat mangako ng kita, pagtaas ng halaga, passive income, o garantisadong access ang mga materyal para sa anumang deployment ng iminungkahing CLC governance token, stCLC, o sCLC.
5. **Mga kontrol sa hurisdiksyon:** ang isang paglalapat ay maaaring nangangailangan ng geofencing interface, mga atestasyong para sa limitado na mga klase, mga limitasyon sa promosyon, pagsusuri ng asset-specific, o mga kontrol na nagpigil sa isang iminungkahi na tampok.
6. **Pakikinig ng mga kalahok:** ang mga termino na inamin ay magpaliwanag kung kailan maaaring mabawasan o mai-deactivate ang pag-access para sa mga dahilan ng batas, operasyonal, o panganib at kung may anumang kompensasyon o remedyo.

### **10.7 Ang panganib sa pag-route at cross-domain**

- **Mga banta:** partial execution, stuck hops, bridge or escrow exploits, outdated quotes, path inflation, at front-running ng inihayag na pagbabago sa halaga.
- **Mga tagapagpahiwatig:** ang mga rate ng expiration ng route, escrow backlogs, pagkakaiba sa quote-to-execution, paulit-ulit na hindi kinakailangang hops, at bridge incidents.
- **Posible na mga kontrol:** atomic execution kung available; conservative HTLC or escrow timeouts; path and counterparty policies; route level caps; deterministic quote-to-receipt mapping; at accountable service operators.
- **Mga pagsubok sa stress:** isang pagtigil ng tulay, reorganization ng kadena, dependency breakdown, at isang nabigo na hop sa isang iminungkahi multi-hop ruta.
- **Pangarap sa panganib:** Mababang hanggang moderate lamang para sa mga kinikilala at nasubaybayan na depende.

### **10.8 Ang panganib ng custody at key-management**

- **Mga banta:** nawala o naka-compromise key, signer collusion, at hindi malinaw na pagbawi o awtoridad ng administrator.
- **Mga tagapagpahiwatig:** anomaly signatures, controller changes, failed rotations, at hindi pangkaraniwang pag-withdrawals.
- **Posible na mga kontrol:** Multisig o threshold authorization; hardware-backed keys; role separation; signer rotation; public controller inventories; monitored withdrawal limits; at na-test recovery procedures.
- **Pangarap sa panganib:** Mababang.

### **10.9 Reputasyon at panganib sa lipunan**

- **Mga banta:** maling mga pangungusap, mapanganib na insentibo, hindi mai-access ang mga reklamo, masamang karanasan sa pagpapatupad, pagkabigo ng privacy, at proteksyon na pabor sa mga nasa loob.
- **Mga tagapagpahiwatig:** ang mga reklamo sa pamamagitan ng cohort, hindi nalutas na mga litigasyon, mga trend sa pagganap ng tagapag-isyu, konsentrasyon ng mga benepisyo o pagkawala, at feedback ng komunidad.
- **Posible na mga kontrol:** ang malinaw na pagpapahayag; mga landas ng reklamo at paglilinis; mai-access na katibayan; transparent na pagreport; pagsusuri sa insidente; at katumbas na sanksyon para sa maling pagtatanghal.
- **Pangarap sa panganib:** mababa, na may partikular na pag-aalaga sa mga naapektuhan na pamayanan at maluwag na kalahok.

### **10.10 Ang panganib ng konsentrasyon at pagkahiwalay**

- **Mga banta:** depende sa isang maliit na bilang ng mga tagapag-isyu, pool, controller, provider, network, o hindi kapareha fork.
- **Mga tagapagpahiwatig:** ang mga hakbang sa pagpapatungo ng tagapag-isyu, pool, inventory, controller, o provider ng serbisyo; pagkukulang sa ruta sa pagitan ng mga cluster; at kritikal na indibidwal na depende.
- **Posible na mga kontrol:** ang nai-publish na mga hangganan ng konsentrasyon; maramihang responsable operator; katumbas ng mga pamantayan; independiyenteng mga registry; sinusubukan na mga pamamaraan ng pag-exit; at ligtas na interoperability.
- **Mga pagsubok sa stress:** pagkawala ng pinakamalaking tagapag-isyu, pool, operator, provider, o root ng registry.
- **Pangarap sa panganib:** mga deployment-specific at disclosed, na may mas mahigpit na mga limitasyon para sa mga mahalagang serbisyo o hindi maibabalik na depende.
