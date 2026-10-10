## E. Pag-aaral ng halimbawa — iminungkahi na network rake

Ang halimbawa na ito ay nagpapahiwatig ng iminungkahi na modelo ng rake. Hindi ito ang karagdagang pagkalkula ng protocol-fee na ginagamit ng Protocol v1.1.0.

Ipagpalagay:

- ang isang nakikibahagi na pool ay nagbabayad ng 2.00% pool fee;
- ang iminungkahi na network rake ay nakatanggap ng 20% ng bayad sa pool na iyon; at
- Ang 25% ng natanggap na rake ay karapat-dapat at maibabalik para sa isang nasabing cash denominated na paggamit pagkatapos ng mga gastos.

Ang epektibong iminungkahi na rate ng network-rake sa itinuro na halaga ay:

`rake_rate = 2.00% × 20% = 0.40% = 40 bps`

Ang bahagi na magagamit sa pera sa ilalim ng inaasahang 25% na katumbas ay:

`cash_usable_rate = 40 bps × 25% = 10 bps`

Kung ang isang iminungkahi na badyet ng network ay may buwanang cash-denominated requirement ng $150,000 at walang iba pang kita, ang ilustrasyong routed value na kinakailangan sa isang 10-bps cash-usable rate ay:

`required_routed_value = $150,000 / 0.001 = $150,000,000 per month`

Ang pagkalkula na ito ay hindi kinabibilangan ang gross fees ng pool na pinananatili ng pool.

Ang isang tunay na pagsusuri sa badyet ay kailangang mag-publish din:

- ang totoong mga resibo ng rake at bayad sa serbisyo;
- ang pagiging karapat-dapat ng mga asset at mga gastos sa pagbabagong loob;
- Ang pag-aari ng grupo at saklaw ng ruta;
- itinatag ng mga reserve at operational targets;
- ang mga pagkawala, litigation, corrections, at hindi magagamit na assets; at
- mga senaryo ng pagiging sensitibo kaysa sa ipinangako na paglago o pagbabalik.

Ang anumang iminungkahi na badyet ng bayad-access o programa sa likididad ay mananatiling downstream ng kanyang inaminang mga prayoridad at maaaring maging zero.
