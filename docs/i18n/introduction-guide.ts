import type { SupportedLocale } from './locales'

export type IntroductionArt = 'network' | 'voucher' | 'offer' | 'pool' | 'send' | 'receive' | 'wallet'

export type IntroductionGuideMessages = {
  label: string
  back: string
  next: string
  about: string
  slides: ReadonlyArray<{ art: IntroductionArt; title: string; body: string }>
}

// Copied from the CLC App introduction catalogs at commit 28ba4cb22182a22c2781ca24af1aa8c0291b3339.
// Keeping this docs-owned copy makes the splash carousel work without a runtime app dependency.
export const introductionGuideMessages = {
  "en": {
    "label": "How to use CLC",
    "back": "Back",
    "next": "Next",
    "about": "About Cosmo-Local Credit",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "Cosmo-Local Credit helps people and organizations support, share, and exchange goods and services."
      },
      {
        "art": "voucher",
        "title": "What is a voucher?",
        "body": "A voucher represents its issuer’s promise to provide goods or services. Check what it can be used for and who accepts it."
      },
      {
        "art": "offer",
        "title": "What is an offer?",
        "body": "An offer describes goods or services someone provides. Check the details, price, and which voucher is accepted."
      },
      {
        "art": "pool",
        "title": "What's a pool?",
        "body": "A pool holds vouchers together so members can swap between them at a published value."
      },
      {
        "art": "send",
        "title": "Send a voucher",
        "body": "Choose a recipient, a voucher you hold, and the amount. Check the details before you confirm, then wait for the transfer result."
      },
      {
        "art": "receive",
        "title": "Receive a voucher",
        "body": "Open Receive and share your receiving QR code or wallet address with the sender. Keep your private wallet key to yourself."
      },
      {
        "art": "wallet",
        "title": "Your wallet",
        "body": "Your wallet holds your vouchers. Create an account and save your wallet access details to get started."
      }
    ]
  },
  "ar": {
    "label": "كيفية استخدام CLC",
    "back": "رجوع",
    "next": "التالي",
    "about": "حول Cosmo-Local Credit",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "تساعد Cosmo-Local Credit الأشخاص والمؤسسات على دعم السلع والخدمات ومشاركتها وتبادلها."
      },
      {
        "art": "voucher",
        "title": "ما هي القسيمة؟",
        "body": "تمثل القسيمة وعدًا من مُصدرها بتقديم سلع أو خدمات. تحقق مما يمكن استخدامها له ومن يقبلها."
      },
      {
        "art": "offer",
        "title": "ما هو العرض؟",
        "body": "يصف العرض سلعًا أو خدمات يقدمها شخص ما. تحقق من التفاصيل والسعر والقسيمة المقبولة."
      },
      {
        "art": "pool",
        "title": "ما هو الصندوق؟",
        "body": "يحتفظ الصندوق بالقسائم معًا لكي يتمكن الأعضاء من مبادلتها بقيمة منشورة."
      },
      {
        "art": "send",
        "title": "إرسال قسيمة",
        "body": "اختر المستلم وقسيمة تملكها والمبلغ. راجع التفاصيل قبل التأكيد، ثم انتظر نتيجة التحويل."
      },
      {
        "art": "receive",
        "title": "استلام قسيمة",
        "body": "افتح الاستلام وشارك رمز QR الخاص بالاستلام أو عنوان محفظتك مع المُرسل. احتفظ بالمفتاح الخاص لمحفظتك لنفسك."
      },
      {
        "art": "wallet",
        "title": "محفظتك",
        "body": "تحتفظ محفظتك بقسائمك. أنشئ حسابًا واحفظ بيانات الوصول إلى محفظتك للبدء."
      }
    ]
  },
  "de": {
    "label": "So nutzen Sie CLC",
    "back": "Rücken",
    "next": "Weiter",
    "about": "Über Cosmo-Local Credit",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "Cosmo-Local Credit hilft Menschen und Organisationen dabei, Waren und Dienstleistungen zu unterstützen, zu teilen und auszutauschen."
      },
      {
        "art": "voucher",
        "title": "Was ist ein Gutschein?",
        "body": "Ein Gutschein steht für das Versprechen des Herausgebers, Waren oder Dienstleistungen bereitzustellen. Prüfe, wofür er verwendet werden kann und wer ihn annimmt."
      },
      {
        "art": "offer",
        "title": "Was ist ein Angebot?",
        "body": "Ein Angebot beschreibt Waren oder Dienstleistungen, die jemand anbietet. Prüfe die Details, den Preis und welcher Gutschein angenommen wird."
      },
      {
        "art": "pool",
        "title": "Was ist ein Fonds?",
        "body": "Ein Fonds hält Gutscheine zusammen, so dass Mitglieder zwischen ihnen zu einem veröffentlichten Wert tauschen können."
      },
      {
        "art": "send",
        "title": "Gutschein senden",
        "body": "Wähle einen Empfänger, einen Gutschein aus deinem Bestand und den Betrag. Prüfe die Angaben vor der Bestätigung und warte dann auf das Ergebnis der Übertragung."
      },
      {
        "art": "receive",
        "title": "Gutschein empfangen",
        "body": "Öffne Empfangen und teile deinen Empfangs-QR-Code oder deine Wallet-Adresse mit dem Absender. Behalte deinen privaten Wallet-Schlüssel für dich."
      },
      {
        "art": "wallet",
        "title": "Deine Wallet",
        "body": "Deine Wallet enthält deine Gutscheine. Erstelle ein Konto und bewahre deine Wallet-Zugangsdaten auf, um loszulegen."
      }
    ]
  },
  "dz": {
    "label": "CLC ག་དེ་སྦེ་ལག་ལེན་འཐབ་ནི།",
    "back": "རྒྱབ་ལོག",
    "next": "ཤུལ་མམ།",
    "about": "Cosmo-Local Credit གི་སྐོར་ལས།",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "Cosmo-Local Credit གིས་ མི་ངོམ་དང་ལས་སྡེ་ཚུ་ལུ་ ཅ་དངོས་དང་ཞབས་ཏོག་ཚུ་ལུ་རྒྱབ་སྐྱོར་འབད་ནི་དང་ མཉམ་སྤྱོད་འབད་ནི་ བརྗེ་སོར་འབད་ནི་ལུ་ཕན་ཐོགས་འབདཝ་ཨིན།"
      },
      {
        "art": "voucher",
        "title": "བའུ་ཆར་ཟེར་མི་ག་ཅི་སྨོ?",
        "body": "བའུ་ཆར་གྱིས་ དེ་སྤྲོད་མི་གིས་ཅ་ཆས་ཡང་ན་ཞབས་ཏོག་སྤྲོད་ནིའི་ཁས་བླངས་མཚོནམ་ཨིན། ག་ཅིའི་དོན་ལུ་ལག་ལེན་འཐབ་ཚུགསཔ་དང་ག་གིས་དང་ལེན་འབདཝ་ཨིན་ན་ཞིབ་དཔྱད་འབད།"
      },
      {
        "art": "offer",
        "title": "མཁོ་སྤྲོད་ཟེར་མི་ག་ཅི་སྨོ?",
        "body": "མཁོ་སྤྲོད་ཀྱིས་མི་ཅིག་གིས་སྤྲོད་མི་ཅ་ཆས་ཡང་ན་ཞབས་ཏོག་གི་སྐོར་ལས་བཤདཔ་ཨིན། ཁ་གསལ་དང་གོང་ཚད་ དང་ལེན་འབད་མི་བའུ་ཆར་ཚུ་ཞིབ་དཔྱད་འབད།"
      },
      {
        "art": "pool",
        "title": "དངུལ་ཁུངས་ཟེར་མི་ག་ཅི་སྨོ?",
        "body": "མཉམ་སྤྱོད་དངུལ་ཁུངས་ཅིག་གིས་འཛིན་ཤོག་ཚུ་གཅིག་ཁར་བཞག་སྟེ་ འཐུས་མི་ཚུ་གིས་ཁྱབ་བསྒྲགས་འབད་ཡོད་པའི་གནས་གོང་ཐོག་བརྗེ་ལེན་འབད་ཚུགས།"
      },
      {
        "art": "send",
        "title": "བའུ་ཆར་གཏང་།",
        "body": "ལེན་མི་དང་ ཁྱོད་ལུ་ཡོད་མི་བའུ་ཆར་ དངུལ་བསྡོམས་གདམ་ཁ་རྐྱབ། ངེས་གཏན་མ་འབད་བའི་ཧེ་མ་ཁ་གསལ་ཞིབ་དཔྱད་འབད་དེ་ སྤོ་སོར་གྱི་གྲུབ་འབྲས་ལུ་སྒུག།"
      },
      {
        "art": "receive",
        "title": "བའུ་ཆར་ལེན།",
        "body": "ལེན་ནི་ཁ་ཕྱེ་སྟེ་ ཁྱོད་ཀྱི་ལེན་ནིའི་QR་ཨང་རྟགས་ཡང་ན་དངུལ་ཁུག་གི་ཁ་བྱང་གཏང་མི་ལུ་བརྗེ་སོར་འབད། དངུལ་ཁུག་གི་སྒེར་གྱི་ལྡེ་མིག་གཞན་ལུ་མ་སྤྲོད།"
      },
      {
        "art": "wallet",
        "title": "ཁྱོད་ཀྱི་དངུལ་ཁུག",
        "body": "ཁྱོད་ཀྱི་དངུལ་ཁུག་ནང་བའུ་ཆར་ཚུ་བཞགཔ་ཨིན། འགོ་བཙུགས་ནིའི་དོན་ལུ་ རྩིས་ཁྲ་བཟོ་སྟེ་དངུལ་ཁུག་ནང་འཛུལ་ནིའི་བརྡ་དོན་ཚུ་ཉེན་སྲུང་འབད་བཞག།"
      }
    ]
  },
  "es": {
    "label": "Cómo usar CLC",
    "back": "Atrás",
    "next": "Siguiente",
    "about": "Acerca de Cosmo-Local Credit",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "Cosmo-Local Credit ayuda a personas y organizaciones a apoyar, compartir e intercambiar bienes y servicios."
      },
      {
        "art": "voucher",
        "title": "¿Qué es un vale?",
        "body": "Un vale representa la promesa de su emisor de proporcionar bienes o servicios. Consulta para qué se puede usar y quién lo acepta."
      },
      {
        "art": "offer",
        "title": "¿Qué es una oferta?",
        "body": "Una oferta describe bienes o servicios que alguien proporciona. Consulta los detalles, el precio y qué vale se acepta."
      },
      {
        "art": "pool",
        "title": "¿Qué es un fondo?",
        "body": "Un fondo reúne vales para que sus miembros puedan intercambiarlos entre sí según un valor publicado."
      },
      {
        "art": "send",
        "title": "Enviar un vale",
        "body": "Elige un destinatario, un vale que tengas y el importe. Revisa los datos antes de confirmar y espera el resultado de la transferencia."
      },
      {
        "art": "receive",
        "title": "Recibir un vale",
        "body": "Abre Recibir y comparte tu código QR de recepción o la dirección de tu cartera con quien te envía el vale. No compartas la clave privada de tu cartera."
      },
      {
        "art": "wallet",
        "title": "Tu cartera",
        "body": "Tu cartera guarda tus vales. Crea una cuenta y guarda los datos de acceso a tu cartera para empezar."
      }
    ]
  },
  "fil": {
    "label": "Paano gamitin ang CLC",
    "back": "Bumalik",
    "next": "Susunod",
    "about": "Tungkol sa Cosmo-Local Credit",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "Tinutulungan ng Cosmo-Local Credit ang mga tao at organisasyon na suportahan, ibahagi, at palitan ang mga kalakal at serbisyo."
      },
      {
        "art": "voucher",
        "title": "Ano ang voucher?",
        "body": "Ang voucher ay kumakatawan sa pangako ng nag-isyu nito na magbigay ng mga produkto o serbisyo. Tingnan kung saan ito magagamit at kung sino ang tumatanggap nito."
      },
      {
        "art": "offer",
        "title": "Ano ang alok?",
        "body": "Inilalarawan ng alok ang mga produkto o serbisyong ibinibigay ng isang tao. Tingnan ang mga detalye, presyo, at kung aling voucher ang tinatanggap."
      },
      {
        "art": "pool",
        "title": "Ano ang pool?",
        "body": "Pinagsasama-sama ng pool ang mga voucher upang makapagpalit ang mga miyembro sa naka-publish na halaga."
      },
      {
        "art": "send",
        "title": "Magpadala ng voucher",
        "body": "Pumili ng tatanggap, voucher na hawak mo, at halaga. Suriin ang mga detalye bago kumpirmahin, saka hintayin ang resulta ng paglilipat."
      },
      {
        "art": "receive",
        "title": "Tumanggap ng voucher",
        "body": "Buksan ang Tumanggap at ibahagi ang iyong QR code sa pagtanggap o wallet address sa nagpadala. Huwag ibahagi ang pribadong susi ng iyong wallet."
      },
      {
        "art": "wallet",
        "title": "Ang iyong wallet",
        "body": "Nasa iyong wallet ang iyong mga voucher. Gumawa ng account at itabi ang mga detalye ng pag-access sa wallet para makapagsimula."
      }
    ]
  },
  "fr": {
    "label": "Comment utiliser CLC",
    "back": "Précédent",
    "next": "Suivant",
    "about": "À propos de Cosmo-Local Credit",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "Cosmo-Local Credit aide les personnes et les organisations à soutenir, partager et échanger des biens et des services."
      },
      {
        "art": "voucher",
        "title": "Qu’est-ce qu’un bon ?",
        "body": "Un bon représente la promesse de son émetteur de fournir des biens ou des services. Vérifiez à quoi il peut servir et qui l’accepte."
      },
      {
        "art": "offer",
        "title": "Qu’est-ce qu’une offre ?",
        "body": "Une offre décrit des biens ou des services proposés par une personne. Vérifiez les détails, le prix et le bon accepté."
      },
      {
        "art": "pool",
        "title": "Qu’est-ce qu’un bassin ?",
        "body": "Un bassin regroupe des bons d’échange afin que ses membres puissent les échanger selon une valeur publiée."
      },
      {
        "art": "send",
        "title": "Envoyer un bon",
        "body": "Choisissez un destinataire, un bon que vous détenez et le montant. Vérifiez les informations avant de confirmer, puis attendez le résultat du transfert."
      },
      {
        "art": "receive",
        "title": "Recevoir un bon",
        "body": "Ouvrez Recevoir et partagez votre code QR de réception ou l’adresse de votre portefeuille avec l’expéditeur. Gardez votre clé privée pour vous."
      },
      {
        "art": "wallet",
        "title": "Votre portefeuille",
        "body": "Votre portefeuille contient vos bons. Créez un compte et conservez vos informations d’accès au portefeuille pour commencer."
      }
    ]
  },
  "hi": {
    "label": "CLC का उपयोग कैसे करें",
    "back": "वापस",
    "next": "अगला",
    "about": "Cosmo-Local Credit के बारे में",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "Cosmo-Local Credit लोगों और संगठनों को वस्तुओं और सेवाओं का समर्थन, साझा करने और विनिमय करने में मदद करता है।"
      },
      {
        "art": "voucher",
        "title": "वाउचर क्या है?",
        "body": "वाउचर जारीकर्ता के सामान या सेवाएँ देने के वादे को दर्शाता है। जाँचें कि इसका उपयोग किस लिए किया जा सकता है और इसे कौन स्वीकार करता है।"
      },
      {
        "art": "offer",
        "title": "ऑफ़र क्या है?",
        "body": "ऑफ़र किसी व्यक्ति के दिए जाने वाले सामान या सेवाओं का विवरण है। विवरण, कीमत और स्वीकार किए जाने वाले वाउचर की जाँच करें।"
      },
      {
        "art": "pool",
        "title": "पूल क्या है?",
        "body": "एक पूल वाउचर को एक साथ रखता है ताकि सदस्य प्रकाशित मूल्य पर उनके बीच अदला-बदली कर सकें।"
      },
      {
        "art": "send",
        "title": "वाउचर भेजें",
        "body": "प्राप्तकर्ता, अपने पास मौजूद वाउचर और राशि चुनें। पुष्टि करने से पहले विवरण जाँचें, फिर हस्तांतरण के परिणाम की प्रतीक्षा करें।"
      },
      {
        "art": "receive",
        "title": "वाउचर प्राप्त करें",
        "body": "प्राप्त करें खोलें और अपना प्राप्ति QR कोड या वॉलेट पता भेजने वाले के साथ साझा करें। अपने वॉलेट की निजी कुंजी किसी को न दें।"
      },
      {
        "art": "wallet",
        "title": "आपका वॉलेट",
        "body": "आपके वाउचर आपके वॉलेट में रहते हैं। शुरू करने के लिए खाता बनाएँ और अपने वॉलेट की पहुँच संबंधी जानकारी सुरक्षित रखें।"
      }
    ]
  },
  "it": {
    "label": "Come usare CLC",
    "back": "Indietro",
    "next": "Avanti",
    "about": "Informazioni su Cosmo-Local Credit",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "Cosmo-Local Credit aiuta persone e organizzazioni a sostenere, condividere e scambiare beni e servizi."
      },
      {
        "art": "voucher",
        "title": "Che cos’è un buono?",
        "body": "Un buono rappresenta la promessa dell’emittente di fornire beni o servizi. Verifica per cosa può essere usato e chi lo accetta."
      },
      {
        "art": "offer",
        "title": "Che cos’è un’offerta?",
        "body": "Un’offerta descrive beni o servizi forniti da qualcuno. Controlla i dettagli, il prezzo e quale buono viene accettato."
      },
      {
        "art": "pool",
        "title": "Che cos’è un fondo?",
        "body": "Un fondo riunisce i buoni affinché i membri possano scambiarli al valore pubblicato."
      },
      {
        "art": "send",
        "title": "Invia un buono",
        "body": "Scegli un destinatario, un buono che possiedi e l’importo. Controlla i dati prima di confermare, poi attendi l’esito del trasferimento."
      },
      {
        "art": "receive",
        "title": "Ricevi un buono",
        "body": "Apri Ricevi e condividi il tuo codice QR di ricezione o l’indirizzo del portafoglio con il mittente. Non condividere la chiave privata del portafoglio."
      },
      {
        "art": "wallet",
        "title": "Il tuo portafoglio",
        "body": "Il tuo portafoglio contiene i tuoi buoni. Crea un account e conserva i dati di accesso al portafoglio per iniziare."
      }
    ]
  },
  "nl": {
    "label": "Zo gebruikt u CLC",
    "back": "Terug",
    "next": "Volgende",
    "about": "Over Cosmo-Local Credit",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "Cosmo-Local Credit helpt mensen en organisaties om goederen en diensten te ondersteunen, te delen en uit te wisselen."
      },
      {
        "art": "voucher",
        "title": "Wat is een voucher?",
        "body": "Een voucher staat voor de belofte van de uitgever om goederen of diensten te leveren. Controleer waarvoor je hem kunt gebruiken en wie hem accepteert."
      },
      {
        "art": "offer",
        "title": "Wat is een aanbod?",
        "body": "Een aanbod beschrijft goederen of diensten die iemand levert. Bekijk de details, de prijs en welke voucher wordt geaccepteerd."
      },
      {
        "art": "pool",
        "title": "Wat is een fonds?",
        "body": "Een fonds houdt waardebonnen bij elkaar, zodat leden ze tegen een gepubliceerde waarde kunnen ruilen."
      },
      {
        "art": "send",
        "title": "Een voucher versturen",
        "body": "Kies een ontvanger, een voucher die je bezit en het bedrag. Controleer de gegevens voordat je bevestigt en wacht op het resultaat van de overdracht."
      },
      {
        "art": "receive",
        "title": "Een voucher ontvangen",
        "body": "Open Ontvangen en deel je ontvangst-QR-code of walletadres met de afzender. Houd de privésleutel van je wallet voor jezelf."
      },
      {
        "art": "wallet",
        "title": "Je wallet",
        "body": "Je wallet bewaart je vouchers. Maak een account en bewaar je toegangsgegevens voor je wallet om te beginnen."
      }
    ]
  },
  "nl-BE": {
    "label": "Zo gebruikt u CLC",
    "back": "Terug",
    "next": "Volgende",
    "about": "Over Cosmo-Local Credit",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "Cosmo-Local Credit helpt mensen en organisaties om goederen en diensten te ondersteunen, te delen en uit te wisselen."
      },
      {
        "art": "voucher",
        "title": "Wat is een voucher?",
        "body": "Een voucher staat voor de belofte van de uitgever om goederen of diensten te leveren. Controleer waarvoor je hem kunt gebruiken en wie hem accepteert."
      },
      {
        "art": "offer",
        "title": "Wat is een aanbod?",
        "body": "Een aanbod beschrijft goederen of diensten die iemand levert. Bekijk de details, de prijs en welke voucher wordt geaccepteerd."
      },
      {
        "art": "pool",
        "title": "Wat is een fonds?",
        "body": "Een fonds houdt waardebonnen bij elkaar, zodat leden ze tegen een gepubliceerde waarde kunnen omwisselen."
      },
      {
        "art": "send",
        "title": "Een voucher versturen",
        "body": "Kies een ontvanger, een voucher die je bezit en het bedrag. Controleer de gegevens voordat je bevestigt en wacht op het resultaat van de overdracht."
      },
      {
        "art": "receive",
        "title": "Een voucher ontvangen",
        "body": "Open Ontvangen en deel je ontvangst-QR-code of walletadres met de afzender. Houd de privésleutel van je wallet voor jezelf."
      },
      {
        "art": "wallet",
        "title": "Je wallet",
        "body": "Je wallet bewaart je vouchers. Maak een account en bewaar je toegangsgegevens voor je wallet om te beginnen."
      }
    ]
  },
  "pt": {
    "label": "Como usar o CLC",
    "back": "Voltar",
    "next": "Seguinte",
    "about": "Sobre a Cosmo-Local Credit",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "A Cosmo-Local Credit ajuda pessoas e organizações a apoiar, partilhar e trocar bens e serviços."
      },
      {
        "art": "voucher",
        "title": "O que é um vale?",
        "body": "Um vale representa a promessa de seu emissor de fornecer bens ou serviços. Confira para que pode ser usado e quem o aceita."
      },
      {
        "art": "offer",
        "title": "O que é uma oferta?",
        "body": "Uma oferta descreve bens ou serviços que alguém fornece. Confira os detalhes, o preço e qual vale é aceito."
      },
      {
        "art": "pool",
        "title": "O que é um fundo?",
        "body": "Um fundo reúne vales para que seus membros possam trocar entre si de acordo com um valor publicado."
      },
      {
        "art": "send",
        "title": "Enviar um vale",
        "body": "Escolha um destinatário, um vale que você possui e o valor. Confira os dados antes de confirmar e aguarde o resultado da transferência."
      },
      {
        "art": "receive",
        "title": "Receber um vale",
        "body": "Abra Receber e compartilhe seu código QR de recebimento ou o endereço da carteira com o remetente. Não compartilhe a chave privada da sua carteira."
      },
      {
        "art": "wallet",
        "title": "Sua carteira",
        "body": "Sua carteira guarda seus vales. Crie uma conta e guarde os dados de acesso à carteira para começar."
      }
    ]
  },
  "sr": {
    "label": "Како се користи CLC",
    "back": "Назад",
    "next": "Даље",
    "about": "О Cosmo-Local Credit-у",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "Cosmo-Local Credit помаже људима и организацијама да подржавају, дијеле и размјењују робу и услуге."
      },
      {
        "art": "voucher",
        "title": "Шта је ваучер?",
        "body": "Ваучер представља обећање издаваоца да ће обезбедити робу или услуге. Проверите за шта се може користити и ко га прихвата."
      },
      {
        "art": "offer",
        "title": "Шта је понуда?",
        "body": "Понуда описује робу или услуге које неко пружа. Проверите детаље, цену и који ваучер се прихвата."
      },
      {
        "art": "pool",
        "title": "Шта је тржница?",
        "body": "Тржница окупља ваучере како би чланови могли да их размењују по објављеној вредности."
      },
      {
        "art": "send",
        "title": "Пошаљите ваучер",
        "body": "Изаберите примаоца, ваучер који имате и износ. Проверите податке пре потврде, а затим сачекајте резултат преноса."
      },
      {
        "art": "receive",
        "title": "Примите ваучер",
        "body": "Отворите Пријем и поделите свој QR код за пријем или адресу новчаника са пошиљаоцем. Приватни кључ новчаника задржите за себе."
      },
      {
        "art": "wallet",
        "title": "Ваш новчаник",
        "body": "Ваш новчаник чува ваше ваучере. Направите налог и сачувајте податке за приступ новчанику да бисте почели."
      }
    ]
  },
  "sw": {
    "label": "Jinsi ya kutumia CLC",
    "back": "Rudi",
    "next": "Endelea",
    "about": "Kuhusu Cosmo-Local Credit",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "Cosmo-Local Credit huwasaidia watu na mashirika kuunga mkono, kushiriki na kubadilishana bidhaa na huduma."
      },
      {
        "art": "voucher",
        "title": "Vocha ni nini?",
        "body": "Vocha inawakilisha ahadi ya mtoaji wake ya kutoa bidhaa au huduma. Angalia inaweza kutumika kwa nini na nani anaikubali."
      },
      {
        "art": "offer",
        "title": "Ofa ni nini?",
        "body": "Ofa inaeleza bidhaa au huduma ambazo mtu anatoa. Angalia maelezo, bei na vocha inayokubaliwa."
      },
      {
        "art": "pool",
        "title": "Puli ni nini?",
        "body": "Puli hukusanya vocha pamoja ili wanachama waweze kuzibadilisha kwa thamani iliyochapishwa."
      },
      {
        "art": "send",
        "title": "Tuma vocha",
        "body": "Chagua mpokeaji, vocha uliyo nayo na kiasi. Hakiki taarifa kabla ya kuthibitisha, kisha subiri matokeo ya uhamisho."
      },
      {
        "art": "receive",
        "title": "Pokea vocha",
        "body": "Fungua Pokea na umshirikishe mtumaji msimbo wako wa QR wa kupokea au anwani ya pochi yako. Usimpe mtu mwingine ufunguo binafsi wa pochi yako."
      },
      {
        "art": "wallet",
        "title": "Pochi yako",
        "body": "Pochi yako huhifadhi vocha zako. Fungua akaunti na uhifadhi taarifa za kufikia pochi yako ili uanze."
      }
    ]
  },
  "uk": {
    "label": "Як користуватися CLC",
    "back": "Назад",
    "next": "Далі",
    "about": "Про Cosmo-Local Credit",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "Cosmo-Local Credit допомагає людям і організаціям підтримувати, ділитися та обмінюватися товарами й послугами."
      },
      {
        "art": "voucher",
        "title": "Що таке ваучер?",
        "body": "Ваучер представляє обіцянку його емітента надати товари або послуги. Перевірте, для чого його можна використати та хто його приймає."
      },
      {
        "art": "offer",
        "title": "Що таке пропозиція?",
        "body": "Пропозиція описує товари або послуги, які хтось надає. Перевірте деталі, ціну та який ваучер приймається."
      },
      {
        "art": "pool",
        "title": "Що таке пул?",
        "body": "Пул спільно зберігає ваучери, щоб учасники могли обмінювати їх за оприлюдненою вартістю."
      },
      {
        "art": "send",
        "title": "Надіслати ваучер",
        "body": "Виберіть одержувача, ваучер, який у вас є, та суму. Перевірте дані перед підтвердженням, а потім дочекайтеся результату переказу."
      },
      {
        "art": "receive",
        "title": "Отримати ваучер",
        "body": "Відкрийте Отримати та поділіться QR-кодом для отримання або адресою гаманця з відправником. Нікому не передавайте приватний ключ гаманця."
      },
      {
        "art": "wallet",
        "title": "Ваш гаманець",
        "body": "Ваш гаманець зберігає ваші ваучери. Створіть обліковий запис і збережіть дані доступу до гаманця, щоб почати."
      }
    ]
  },
  "zh": {
    "label": "如何使用 CLC",
    "back": "返回",
    "next": "下一个",
    "about": "关于 Cosmo-Local Credit",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "Cosmo-Local Credit 帮助人们和组织支持、共享和交换商品和服务。"
      },
      {
        "art": "voucher",
        "title": "什么是凭证？",
        "body": "凭证代表发行者提供商品或服务的承诺。请确认它可用于哪些用途，以及谁接受它。"
      },
      {
        "art": "offer",
        "title": "什么是供给？",
        "body": "供给描述某人提供的商品或服务。请查看详情、价格以及接受哪种凭证。"
      },
      {
        "art": "pool",
        "title": "什么是资金池？",
        "body": "资金池将代金券结合在一起，因此成员可以按已发布的值在它们之间兑换。"
      },
      {
        "art": "send",
        "title": "发送凭证",
        "body": "选择接收人、你持有的凭证和金额。确认前检查信息，然后等待转账结果。"
      },
      {
        "art": "receive",
        "title": "接收凭证",
        "body": "打开“接收”，将收款二维码或钱包地址分享给发送人。请勿分享钱包私钥。"
      },
      {
        "art": "wallet",
        "title": "你的钱包",
        "body": "你的钱包用于存放凭证。创建账户并妥善保存钱包的访问资料，即可开始使用。"
      }
    ]
  },
  "zh-Hant": {
    "label": "如何使用 CLC",
    "back": "返回",
    "next": "下一個",
    "about": "關於 Cosmo-Local Credit",
    "slides": [
      {
        "art": "network",
        "title": "Cosmo-Local Credit",
        "body": "Cosmo-Local Credit 幫助個人與組織支持、分享及交換商品和服務。"
      },
      {
        "art": "voucher",
        "title": "什麼是憑證？",
        "body": "憑證代表發行者提供商品或服務的承諾。請確認它可用於哪些用途，以及誰接受它。"
      },
      {
        "art": "offer",
        "title": "什麼是供給？",
        "body": "供給描述某人提供的商品或服務。請查看詳情、價格以及接受哪種憑證。"
      },
      {
        "art": "pool",
        "title": "什麼是資金池？",
        "body": "資金池將代金券結合在一起，因此成員可以按已發佈的值在它們之間兌換。"
      },
      {
        "art": "send",
        "title": "傳送憑證",
        "body": "選擇接收人、你持有的憑證和金額。確認前檢查資訊，然後等待轉帳結果。"
      },
      {
        "art": "receive",
        "title": "接收憑證",
        "body": "開啟「接收」，將收款 QR 碼或錢包地址分享給傳送人。請勿分享錢包私鑰。"
      },
      {
        "art": "wallet",
        "title": "你的錢包",
        "body": "你的錢包用於存放憑證。建立帳戶並妥善保存錢包的存取資料，即可開始使用。"
      }
    ]
  }
} satisfies Record<SupportedLocale, IntroductionGuideMessages>
