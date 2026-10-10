## **1. Commitment Pooling Protocol (CPP): ang pangunahing mekanismo**

**Payak na paliwanag:** Ang Pool ng Pangako ay isang pinamamahalaang kaayusan para sa pagtanggap ng mga voucher o iba pang asset, paglalathala ng mga tuntunin sa palitan, paghawak ng inventory, at pagpapahintulot ng mga swap. Pagkatapos, inihaharap ng mga may hawak ang mga voucher sa mga tagapag-isyu nito para matupad ang ipinangakong produkto o serbisyo. Magkaibang proseso ang palitan sa Pool at ang pagtupad ng tagapag-isyu.

Iniuugnay ng CPP ang halaga sa pamamagitan ng malinaw na inilalarawang mga pangako. Tinatalakay ang modelong ito sa [Grassroots Economics: Reflection and Practice](https://willruddick.substack.com/p/grassroots-economics-the-book-is).

### **1.1 Ano ang isang pangako?**

Ang isang commitment ay pangako ng isang nakikilalang partido na maghatid sa hinaharap—halimbawa, pagkain, transportasyon, paggawa, imbakan, o iba pang legal na produkto, serbisyo, benepisyo, o pagganap. Ang **voucher** ay isang token o talaan na kumakatawan sa pangakong iyon sa ilalim ng mga inilathalang tuntunin.

Itinatala ng token contract ang mga digital na mekanismo. Tinutukoy ng mga tuntunin ng voucher ang tagapag-isyu, Offering, kapasidad, lugar, oras, mga paghihigpit, presentment, pagtupad, mga reklamo, at proseso ng discharge.

### **1.2 Ano ang isang Pool ng Pangako?**

Ang Pool ng Pangako ang pinamamahalaang kaayusan. Maaari itong pangasiwaan ng isang indibidwal, kooperatiba, pangkat ng komunidad, pampublikong ahensya, pederasyon, multisig, operator ng serbisyo, o iba pang may pananagutang istruktura.

Kabilang sa mga may kaugnayan na tungkulin at awtoridad ang:

- **Tagapangasiwa ng Pool:** naglalathala at nangangasiwa sa mga tuntunin ng Pool at sa anumang hayagang ipinapalagay na garantiya;
- **may-ari ng Pool:** may kasalukuyang kapangyarihan bilang may-ari ng `SwapPool`;
- **proxy administrator:** maaaring mag-upgrade ng isang proxied implementation;
- **mga controller ng dependency:** namamahala sa mga naka-configure na registry, quoter, limiter, o bahagi ng bayad;
- **tagahanap o operator ng ruta:** maaaring tumuklas ng mga quote o, sa isang pagpapatupad sa hinaharap, magsagawa ng hiwalay na awtorisadong ruta; at
- **guarantor:** umaako lamang ng isang tiyak na obligasyon sa pamamagitan ng inilathala at pinondohang mga tuntunin.

Pinapangkat ng CPP ang mga gawain ng Pool sa apat na konsepto:

- **Curation:** tanggapin ang mga sinusuportahang token o voucher.
- **Valuation:** ilathala ang paraang ginagamit para sa exchange rate o quote.
- **Limitation:** ilapat ang kasalukuyang cap sa balanse ng token ng Pool o iba pang hiwalay na ipinatupad na kontrol.
- **Exchange:** humawak ng inventory, magsagawa ng mga swap, magtala ng mga bayad, at maglabas ng mga rekord ng transaksyon.

Ipinatutupad ng Protocol v1.1.0 ang mga gawaing ito sa pamamagitan ng `SwapPool` at mga opsyonal na dependency. Nililimitahan ng kasalukuyang `Limiter` ang balanse ng isang token sa isang Pool; hindi ito nagbibigay ng rolling, per-account, o network-wide na mga limitasyon sa swap. Kinakalkula ng kasalukuyang `SwapRouter` ang mga multi-Pool quote; hindi ito nagsasagawa ng mga swap.

Maaaring magdagdag ang mas malawak na iminungkahing disenyo ng CPP ng rolling limits, account controls, execution routers, HTLC o escrow paths, at batch netting. Mga iminungkahing bahagi ang mga ito, hindi paglalarawan ng kasalukuyang limiter o router.

### **1.3 Logika ng kasalukuyang direktang swap**

Ang isang kasalukuyang direktang swap sa Pool ay:

1. sinusuri ang opsyonal na registry para sa input at output token;
2. sinusukat ang natanggap na input;
3. kumukuha ng quote mula sa naka-configure na quoter o gumagamit ng raw-unit parity;
4. sinusuri ang magiging balanse ng token ng Pool laban sa opsyonal na limiter;
5. kinakalkula ang bayad sa Pool at anumang karagdagang protocol fee;
6. sinusuri ang magagamit na output inventory;
7. inililipat ang protocol fee at output at itinatala ang bayad sa Pool; at
8. naglalabas ng mga swap event.

Ang quote ay parameter ng transaksyon, hindi patunay ng kapasidad ng tagapag-isyu, redemption value, patas na halaga, kakayahang ipalit sa cash, o garantiya.

### **1.4 Mas malawak na paggamit**

Maaaring suportahan ng mga Pool ng Pangako ang palitan sa komunidad, produksyon, mutual aid, mga pampublikong programa, at iba pang may pananagutang istruktura. Maaaring gumamit ang isang hiwalay na dokumentadong produktong kredito ng voucher bilang collateral o instrumento sa pagbabayad, ngunit mangangailangan iyon ng karagdagan at transaksyon-tiyak na mga tuntunin. Ang karaniwang pagpapadala, deposito sa Pool, swap sa Pool, presentment para sa redemption, pagtupad, o discharge ay hindi awtomatikong pautang o pagbabayad ng pautang.

Nilalayon ang CPP para sa may pananagutang palitan at naa-audit na mga rekord ng transaksyon, hindi para sa speculative churn. Hindi pa rin pinatutunayan ng mga on-chain record ang aktuwal na pagtupad o epekto sa lipunan.
