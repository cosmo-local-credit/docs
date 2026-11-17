# 6. Proposed na likido at pamamahala sa antas ng network

Ang karanasan mula sa makasaysayang Sarafu Network ay nag-imbak ng pananaliksik sa dalawang mas malawak na mga katanungan sa disenyo:

1. kung paano ang mga independiyenteng pinamamahalaan na pool ay maaaring koordinate ang mga liquidity at routing services; at
2. kung paano ang mga pinagsasama na serbisyo ay maaaring manatiling responsable habang lumalaki ang kalahok.

Isang iminungkahi CLC disenyo ay nagtataguyod ng isang **iminungkahi na CLC Network Pool** bilang isang kaayusan sa pag-clearing at koordinasyon ng badyet sa antas ng network at **Proposed na CLC governance token**. Wala sa kasalukuyang App o Protocol v1.1.0. Ang iba pang mga deployment ay maaaring gumamit ng mga kooperatiba, pampublikong ahensya, federasyon, multisig, operator ng serbisyo, o iba pang responsable na istraktura nang hindi sumasailalim sa sinumang proposal.

## **6.1 Mga control sa downside at optional**

Ang kasalukuyang Protocol v1.1.0 ay maaaring mag-apply ng Pool token balance caps at inventory checks.

Ang isang future deployment ay maaaring magdagdag ng mga circuit breaker, timelock, reservations, guarantees, o insurance.

Ang iminungkahi na pamamahala ay dapat panatilihin ang mga kapangyarihan ng rehistro at serbisyo na mahigpit at mai-review. Ang ordinaryong mga aksyon ay maaaring gumamit ng pahibalo, pag-atras, dahilan publication, appeal, at correction process. Ang mga hakbang sa emerhensiya ay dapat gumawa ng mga talaan ng insidente at matapos o tumanggap ng pagsusuri sa ilalim ng isang inaminang patakaran.

Nagbibigay ngayon ang production CLC App at CLC Core ng katugmang route discovery at same-chain multi-hop execution para sa mga rutang awtorisado ng kalahok sa naka-configure na pampublikong profile. Inilalapat ng quote ang per-hop na limitasyon, bayarin, inventory, boundary, at simulation; ang pinirmahang Wallet batch ay babalik nang buo kapag may call na nabigo.

Ang serbisyong iyon ay hindi nagpapahintulot sa awtomatikong pag-rebalanse ng Pool o kontrol sa antas ng network ng imbentaryo ng Pool. Ang rebalancing, batch netting, cross-domain HTLC o escrow execution, at shared liquidity governance ay kakailanganin ng karagdagang awtoridad, software, limitasyon, failure handling, at pinagtibay na mga patakaran. Ang mga swap na mas nakalista o pinatupad ay hindi sa kanilang sarili nagpapatunay ng katuparan ng Voucher o epekto sa lipunan.
