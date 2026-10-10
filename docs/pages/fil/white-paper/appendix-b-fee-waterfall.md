## B. Illustrative future fee waterfall

Ito ay isang iminungkahi na disenyo para sa isang hinaharap na paglalapat. Ito ay naaangkop lamang kung ipinatupad, pinansiyal, at tinanggap sa pamamagitan ng nai-publish na pamamahala at mga termino ng kalahok. Hindi ito naglalarawan ng kasalukuyang bayad ng Protocol v1.1.0, karapatan ng kontribudor, reserba, garantiya, o kasunduan ng seguro.

Ang `F_in` ay ang mga kita na tunay na natanggap sa iminungkahi na badyet ng network sa loob ng isang panahon: ang iminungkahin na network rake, nag-iiba na routing o service fees, at anumang iba pang expressly designated revenue.

Ang mga asset sa kita ay dapat i-classify bilang:

- `E_cash`: mga assets na karapat-dapat para sa isang idetereklarar na paggamit sa cash denominated sa ilalim ng pinapayagan na patakaran; o
- `E_kind`: in-kind na mga voucher o iba pang assets na hindi itinuturing na cash convertible.

Ang anumang patakaran sa pag-conversion ay nangangailangan ng mga allowanist ng mga asset at venue, responsable na awtoridad, mga mapagkukunan ng presyo, mga limitasyon ng slippage, pagreport, at naaangkop na legal na kontrol.

Ang isang iminungkahi na waterfall ay maaaring magamit ang natanggap na kita sa pagkakasunud-sunod:

1. **Target ng nasa ilalim na reserba:** pag-aalaga ng isang inaminang target sa reserba o seguro batay lamang sa tinukoy na nasa ilalim na exposure, karapat-dapat na mga asset, exclusions, at mga patakaran ng claim.
2. **Mga pangunahing operasyon:** pag-iimbitahan ng isang inihayag na, caped operating budget.
3. **Mga tungkulin sa likido:** pinapayagan ng pondo, nag-iiba na pinamamahalaan ang mga programa sa pool o routing.
4. **Ang natitirang badyet:** i-allocate ang anumang natitirang halaga sa mga operasyon, programa ng likididad, at isang karagdagang buffer sa ilalim ng nai-publish caps.

Ang isang layunin ng reserba ay hindi mismo isang garantiya.Ang anumang seguro o garantiya ay dapat na tukuyin ang obligadong partido, nasa ilalim ng pangyayari, pondo, cap, mga pag-iwas, tagal, katibayan, proseso ng claim, at allocation ng pagkawala.

**Ang guardrail:** Ang mga alokasyon ng waterfall ay inilaan para sa inamin na coverage, operasyon, at liquidity services.

Sa ilalim ng iminungkahi na modelo, ang anumang inirerekumenda na CLC governance tokens na nakuha sa pamamagitan ng isang hiwalay na pinapayagan na programa ng panlabas na likido ay mai-retire o ilagay sa isang naipaliwanag na walang vote sink.
