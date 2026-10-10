## **9. Proposed economics para sa mga programa ng likididad**

Ang kabanata na ito ay naglalarawan ng isang hinaharap, nag-iiba na modelo. Hindi ito isang kasalukuyang tampok ng App, isang alok, isang ipinangako na pagbabalik, o isang karapatan na nilikha sa pamamagitan ng pagdeposito sa `SwapPool`.

### **9.1 Proposed na mga mapagkukunan ng kita**

Ang isang hinaharap na badyet ng network ay maaaring tumanggap:

1. isang inihayag **network rake** kinuha bilang bahagi ng mga bayad na nakukuha ng mga kalahok na pool;
2. pag-iisa ng mga bayad sa routing o serbisyo mula sa nai-implementang nakabahagi na mga serbisyo; at
3. iba pang expressly adopted, natanggap na kita.

Ang mga gross pool fees na pinananatili ng mga pool ay hindi kita sa network.Protocol v1.1.0 Gumagamit ng ibang modelo: ang optional protocol fee ay dagdag sa pool fee at direktang ipinapadala sa naka-configure na recipient nito.

### **9.2 Illustrative rake matematika**

Kung ang isang nakikibahagi na pool ay nagbabayad ng 2.00% ng bayad sa pool at ang isang inaminang network rake ay tumatanggap ng 20% ng bayad ng pool, ang iminungkahi na epektibong rate ng network-rake sa itinuro na halaga ay:

`rake_rate = 2.00% × 20% = 0.40% = 40 bps`

Kung ang 25% ng natanggap na rake at mga asset sa bayad sa serbisyo ay karapat-dapat at maibabalik para sa isang nabanggit na cash-denominated na paggamit pagkatapos ng mga gastos, ang cash-usable share ng 40-bps rake ay humigit-kumulang 10 bps.

Ang iminungkahi na kita sa network ay:

`network_rake_received + routing_or_service_fees_received`

Huwag magdagdag ng gross pool fees sa network rake: ang rake ay isang paglipat mula sa mga fees na iyon at kung hindi ay double count.

### **9.3 Mga karapatan sa programa ng likido**

Ang isang hiwalay na programa ay maaaring pondohan ang imbentaryo ng Pool, mga serbisyo sa pag-routing, pagsubaybay, o iba pang mga mandato.

- kung ang isang paglipat ay isang regalo, endowment, pautang, maibalik na kontribusyon, o pagbili;
- pangangalaga at kontrol;
- mga patakaran sa pag-alis, pagbabayad, pagkawala, at prayoridad;
- pagiging karapat-dapat sa bayad at gantimpala;
- karapatan sa pamamahala;
- mga pamamaraan ng valuation at pagreport; at
- suspension, termination, at remedies.

Ang kasalukuyang `SwapPool` ay hindi lumilikha ng anumang token ng pool-share o awtomatikong karapatan sa kontribusyon.
