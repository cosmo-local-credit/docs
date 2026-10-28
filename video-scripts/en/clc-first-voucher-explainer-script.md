---
title: "Cosmo-Local Credit: Wants, Vouchers, and a Pool Exchange"
subtitle: "Doctor and farmer two-account walkthrough"
lang: en
date: 26 October 2026
---

# A doctor and a farmer exchange what they offer

- **Target length:** 4 minutes 40 seconds to 4 minutes 58 seconds
- **Audience:** People using the CLC App for the first time
- **Format:** Edited desktop overview with two mobile-width browser panes side by side; not a real-time click-along tutorial
- **Outcome:** The viewer sees how two people publish what they offer, how a Want reveals an opportunity, and how a prepared Pool lets them exchange and use their Vouchers.

## The story

Use two new, prepared demonstration accounts:

- **DOCTOR — Dr. Amina:** offers medical consultations and wants fresh local food.
- **FARMER — Kofi:** offers fresh food and needs a medical consultation.

Both people first create a Voucher and an Offering. Amina then prepares the Health Care Pool: she approves and deposits her Health Care Vouchers, reviews Kofi's Food Basket Voucher, and approves it with a credit limit of USD 200. Amina publishes a Want for fresh local food. Kofi discovers the Want, examines Amina's offer and Pool, sees that his Voucher already has available Pool credit, and swaps for Health Care Vouchers. After receiving care, he returns those Vouchers to Amina through **Redeem**. Because Amina remains ready to provide future care, she offers the returned units again and swaps them for Food Basket Vouchers. She redeems them and sends Kofi a private food-delivery order.

## Terms to explain once

- A **Voucher** works much like a gift card from the person who provides the good or service.
- An **Offering** is a listing that explains what the Voucher can be used for and its price.
- A **Want** is a public request for something a person needs.
- A **Commitment Pool** connects selected Vouchers under clear exchange rules.
- A Pool's **Credit limit** is the maximum value of a Voucher the Pool may hold at one time. **Available credit** is the unused part of that limit. Neither is a personal loan.

After each definition, prefer the shorter terms Voucher, listing, request, Pool, limit, and available capacity.

## Suggested demonstration values

| Item | Demonstration value |
| --- | --- |
| Doctor account | Dr. Amina |
| Doctor Voucher | Health Care Voucher (`MED`), 400 initial Vouchers |
| Doctor Voucher terms | 1 `MED` counts as USD 1 toward the eligible medical services described in Amina's terms |
| Doctor Offering | Medical consultation, `session`, USD 120 per session |
| Farmer account | Kofi |
| Farmer Voucher | Food Basket Voucher (`FOOD`), 400 initial Vouchers |
| Farmer Voucher terms | 1 `FOOD` counts as USD 1 toward the eligible food described in Kofi's terms |
| Farmer Offering | Fresh food basket, `bundle`, USD 60 per basket |
| Pool | Health Care Pool, unit of account USD, relative pricing |
| Health Care Voucher Pool settings | 1 `MED` is measured as USD 1 under the Pool's published rate; credit limit at least USD 400 |
| Opening Pool inventory | Deposit at least 200 `MED` |
| Food Basket Voucher Pool settings | 1 `FOOD` is measured as USD 1 under the Pool's published rate; credit limit USD 200 |
| Doctor Want | Fresh local food: a weekly supply of locally grown fruit and vegetables |
| Farmer's swap | Send enough `FOOD` for **You receive** to show at least 120 `MED` after displayed fees |
| Farmer's use | **Redeem** 120 `MED` to Amina after the appointment |
| Doctor's swap | Send enough returned `MED` for **You receive** to show at least 60 `FOOD` after displayed fees |
| Doctor's use | **Redeem** 60 `FOOD`, select the Fresh food basket Offering, and privately request delivery |

These figures make the story easy to follow. They are not default settings, recommended prices, cash guarantees, or promises that every Pool will use USD.

## Before filming

- Use a filming build based on, or rechecked against, CLC App `origin/develop` commit `8f49f61120c383e73223b4c4c68945aa57863609`.
- Use two isolated browser profiles or contexts so one login cannot replace the other. Keep both panes about 360–430 CSS pixels wide, with **DOCTOR — Dr. Amina** and **FARMER — Kofi** visible above them.
- Highlight the active pane and dim the other. Never operate both accounts at once.
- Prepare two safe demonstration Wallets. Do not expose real passkeys, private keys, recovery information, contact details, precise home locations, or health information.
- Give both accounts the required Voucher, Want, and Pool allowances. The story starts after sign-in.
- Give both Vouchers safe demonstration contact details. Amina's Health Care Voucher needs a public contact action such as **Call** so Kofi can arrange the appointment after the swap.
- Make Kofi a registered Cosmo user with a published Fresh food basket Offering. This lets Amina use **Add a message or place an order** after redeeming `FOOD`.
- Give Amina a saved demonstration location so she can privately share **Location** with the delivery request.
- Keep the Health Care Pool's purpose broad enough to include food, such as: “Connect local health care with food and other services that support community well-being.”
- Record every operation completely, then use cuts or speed ramps for repetitive data entry and confirmation waits. This is an edited overview; a novice-readable real-time tutorial would be longer than five minutes.
- Use a zero or small Pool fee for a clear demonstration, but show the live Pool fee, protocol fee, total fees, and quote from the filming build.

## Script

### Scene 1 — Two people can help each other

**Time:** 0:00–0:15

**Visuals:** Show Amina in a clinic and Kofi packing fresh produce. Bring up the two App panes and preview the completed exchanges.

**Voiceover:**

> Dr. Amina provides medical care. Kofi grows fresh food. Amina wants local produce, and Kofi needs a consultation. Cosmo-Local Credit helps them make their offers clear, find each other, and exchange.

**On-screen text:** `Offer what you have. Find what you need.`

### Scene 2 — Amina creates her Voucher and medical Offering

**Time:** 0:15–0:50

**Visuals:** Highlight Amina. Open **Wallet** and select **Create voucher**. Enter **Health Care Voucher**, create `400`, and use `MED` as the symbol. Under **Advanced**, set **Price** to `1` and **Priced in** to `USD`. Add a description, safe public contact details, location, and terms. Move quickly through **Next** and **Confirm & Publish**. Open the Voucher, select **Add offering**, enter **Medical consultation**, set **Price per unit in USD** to `120`, choose **Session**, add a demonstration photo, and select **Publish offering**. Briefly show the Health Care Voucher pin on the **Market** map and open it to reveal the Offering.

**Voiceover:**

> Amina creates a Health Care Voucher. A Voucher works much like a gift card from the person who provides the service. Her terms say that one Health Care Voucher counts as one U.S. dollar toward eligible care.
>
> She adds an Offering called Medical consultation. An Offering is a listing of a specific service. Its price is one hundred and twenty U.S. dollars per session.

**On-screen callouts:** `Create voucher` · `Health Care Voucher` · `Add offering` · `Medical consultation` · `USD 120 per session`

### Scene 3 — Kofi creates his Voucher and food Offering

**Time:** 0:50–1:18

**Visuals:** Highlight Kofi. Use the same shortened flow to create **Food Basket Voucher**, issue `400`, use symbol `FOOD`, set **Price** to `1`, and use `USD`. Publish clear food terms and contact details. Open the Voucher, select **Add offering**, enter **Fresh food basket**, set **Price per unit in USD** to `60`, choose **Bundle**, add a photo, and select **Publish offering**. Briefly show the Food Basket Voucher pin on the **Market** map and open it to reveal the Offering.

**Voiceover:**

> Kofi creates a Food Basket Voucher. His terms explain the food he provides and say that one Voucher counts as one U.S. dollar toward an eligible order.
>
> He adds a Fresh food basket Offering priced at sixty U.S. dollars per basket. Now both people have made their offers visible and clear.

**On-screen callouts:** `Food Basket Voucher` · `FOOD` · `Fresh food basket` · `USD 60 per bundle`

### Scene 4 — Amina prepares the Health Care Pool

**Time:** 1:18–1:58

**Visuals:** Highlight Amina. In **Wallet**, select **Create pool**. Enter **Health Care Pool**, describe its food-and-health purpose, choose `USD` under **Unit of Account**, and choose **Relative pricing**. Publish and open the Pool. Under **Vouchers**, select **Approve voucher**, approve Health Care Voucher with **Exchange rate** `1` and a credit limit of at least `400`. Select **Deposit** and deposit at least `200 MED`. Find Kofi's public Food Basket Voucher through **Market** or its prepared link. Review its issuer, terms, and Fresh food basket Offering. Return to Health Care Pool, select **Vouchers** → **Approve voucher**, search for `FOOD`, set **Exchange rate** to `1`, set **Credit limit** to `200`, and select **Approve voucher**.

**Voiceover:**

> Amina creates the Health Care Pool to connect care with food and other local services. A Commitment Pool connects selected Vouchers under clear exchange rules.
>
> She approves the Health Care Voucher and deposits two hundred into the Pool. That inventory is what Kofi can later receive. Amina also reviews Kofi's Food Basket Voucher, approves it, sets the exchange rate, and gives it a credit limit of two hundred U.S. dollars.

**On-screen callouts:** `Approve MED` · `Deposit 200 MED` · `Approve FOOD` · `Credit limit: USD 200`

### Scene 5 — Amina publishes a Want for food

**Time:** 1:58–2:20

**Visuals:** Still in Amina's pane, open **Wallet**, find **My Wants**, and select **Create Want**. Enter **Fresh local food**. Describe a weekly supply of locally grown fruit and vegetables. Add tags and a location. Under **How should people contact you?**, add safe **Contact instructions** and select a demonstration contact method. Select **Create Want**.

**Voiceover:**

> Amina now publishes a Want called Fresh local food. A Want is a public request. She describes what she needs, adds the location and tags, and chooses how people may contact her.

**On-screen callouts:** `My Wants` · `Create Want` · `Fresh local food`

### Scene 6 — Kofi finds the Want, offer, Pool, and available credit

**Time:** 2:20–2:51

**Visuals:** Highlight Kofi. Open **Market**, choose **Wants**, and use **Search Wants** for `fresh food`. Open Amina's Want. Show **When and where**, **Description**, and **Contact**. Under **Vouchers**, open Health Care Voucher and inspect the Medical consultation Offering. Return to the Want and open Health Care Pool under **Creditable pools**. In the Pool, open **Credit** and show Food Basket Voucher with `200.00 of 200.00 USD available credit`.

**Voiceover:**

> Kofi searches Wants and finds Amina's request. The page also shows her Health Care Voucher and a related Pool. He checks the consultation, then opens the Pool.
>
> Under Credit, Kofi sees that his Food Basket Voucher already has two hundred U.S. dollars of available credit. This is the remaining value the Pool will accept at its published rate. It is exchange capacity, not a personal loan.

**On-screen text:** `200.00 of 200.00 USD available credit` · `Pool capacity — not a personal loan`

### Scene 7 — Kofi exchanges for Health Care Vouchers

**Time:** 2:51–3:22

**Visuals:** In Health Care Pool, select **Swap**. Put `MED` under **You receive** and `FOOD` under **You send**, following the form's order. Increase the input until the quote shows at least `120 MED`. Pause on **Rate**, **Pool fee**, **Protocol fee**, **Total fees**, **You receive**, and **You send**. Select **Swap** to open the confirmation sheet, then select **Confirm swap**. Show the receipt and Kofi's Health Care Voucher balance.

**Voiceover:**

> Kofi selects Swap. He chooses Health Care Vouchers to receive and Food Basket Vouchers to send. He adjusts the amount until the quote shows that he will receive at least one hundred and twenty Health Care Vouchers after fees.
>
> He checks the rate, fees, and final amounts, then confirms. Food Basket Vouchers enter the Pool, and Health Care Vouchers reach Kofi's Wallet.

**On-screen callouts:** `You receive: at least 120 MED` · `You send: FOOD` · `Swap` · `Confirm swap`

### Scene 8 — Kofi arranges care and pays with his Vouchers

**Time:** 3:22–3:53

**Visuals:** In Kofi's **Wallet**, open Health Care Voucher and select its public **Call** action to arrange an appointment outside the App. Use a simple caption instead of showing private health information. After a brief visit shot, open Health Care Voucher and select **Redeem**. Show Amina prefilled as **Recipient**, enter `120 MED`, select **Send**, review **Confirm send**, select **Confirm and send**, and show the **Sent** receipt.

**Voiceover:**

> With the Health Care Vouchers in his Wallet, Kofi uses Amina's public contact details to arrange the appointment directly. After receiving care, he opens the Voucher and selects Redeem.
>
> The App fills in Amina, who issued the Voucher. Kofi sends one hundred and twenty Health Care Vouchers back to her. Redeem records the transfer; the medical care happens directly between Kofi and Amina.

**On-screen text:** `Arrange the appointment directly` · `Redeem 120 MED to Amina`

### Scene 9 — Amina exchanges the returned Vouchers for food

**Time:** 3:53–4:23

**Visuals:** Highlight Amina. Show the returned `120 MED` in her Wallet. Add a clear caption: “Offered again for future care.” Open Health Care Pool and select **Swap**. Put `FOOD` under **You receive** and `MED` under **You send**. Increase the input until the quote shows at least `60 FOOD`. Select **Swap**, review the confirmation, select **Confirm swap**, and show Food Basket Voucher in Amina's Wallet.

**Voiceover:**

> The Health Care Vouchers are now back with Amina. Because she is ready to provide more care, she can offer those units again. She opens the Pool and exchanges them for enough Food Basket Vouchers to obtain one basket.
>
> This places the Health Care Vouchers back in the Pool for a future exchange and moves Food Basket Vouchers to Amina's Wallet.

**On-screen text:** `Returned MED offered again for future care` · `MED → FOOD`

### Scene 10 — Amina redeems and privately requests delivery

**Time:** 4:23–4:48

**Visuals:** Open Food Basket Voucher and select **Redeem**. Show Kofi prefilled as **Recipient**, enter `60 FOOD`, select **Send**, complete **Confirm send** and **Confirm and send**, and show the **Sent** receipt. Expand **Add a message or place an order**. Under **Order (optional)**, select **Fresh food basket** and quantity `1`. In **Message**, write “Please deliver next week.” Select **Location** to share Amina's saved demonstration location, then select **Share**. Show **Message or order shared.**

**Voiceover:**

> Amina opens the Food Basket Voucher and selects Redeem. After sending the Vouchers to Kofi, she selects Add a message or place an order. She chooses one Fresh food basket, asks for delivery the following week, privately shares the delivery location, and selects Share.
>
> The message requests delivery. Kofi still needs to accept and provide the food.

**On-screen callouts:** `Add a message or place an order` · `Order (optional)` · `Location` · `Share`

### Scene 11 — Close with the simple idea

**Time:** 4:48–4:58

**Visuals:** Show Amina and Kofi with the goods and services they received. End on the CLC logo and URL.

**Voiceover:**

> Their offers were clear. The Want helped them connect. The Pool helped them exchange. What can you offer? Visit cosmolocal dot credit.

**On-screen text:** `Make what you offer easier to find and exchange.` · `cosmolocal.credit`

## Full voiceover

> Dr. Amina provides medical care. Kofi grows fresh food. Amina wants local produce, and Kofi needs a consultation. Cosmo-Local Credit helps them make their offers clear, find each other, and exchange.
>
> Amina creates a Health Care Voucher. A Voucher works much like a gift card from the person who provides the service. Her terms say that one Health Care Voucher counts as one U.S. dollar toward eligible care.
>
> She adds an Offering called Medical consultation. An Offering is a listing of a specific service. Its price is one hundred and twenty U.S. dollars per session.
>
> Kofi creates a Food Basket Voucher. His terms explain the food he provides and say that one Voucher counts as one U.S. dollar toward an eligible order.
>
> He adds a Fresh food basket Offering priced at sixty U.S. dollars per basket. Now both people have made their offers visible and clear.
>
> Amina creates the Health Care Pool to connect care with food and other local services. A Commitment Pool connects selected Vouchers under clear exchange rules.
>
> She approves the Health Care Voucher and deposits two hundred into the Pool. That inventory is what Kofi can later receive. Amina also reviews Kofi's Food Basket Voucher, approves it, sets the exchange rate, and gives it a credit limit of two hundred U.S. dollars.
>
> Amina now publishes a Want called Fresh local food. A Want is a public request. She describes what she needs, adds the location and tags, and chooses how people may contact her.
>
> Kofi searches Wants and finds Amina's request. The page also shows her Health Care Voucher and a related Pool. He checks the consultation, then opens the Pool.
>
> Under Credit, Kofi sees that his Food Basket Voucher already has two hundred U.S. dollars of available credit. This is the remaining value the Pool will accept at its published rate. It is exchange capacity, not a personal loan.
>
> Kofi selects Swap. He chooses Health Care Vouchers to receive and Food Basket Vouchers to send. He adjusts the amount until the quote shows that he will receive at least one hundred and twenty Health Care Vouchers after fees.
>
> He checks the rate, fees, and final amounts, then confirms. Food Basket Vouchers enter the Pool, and Health Care Vouchers reach Kofi's Wallet.
>
> With the Health Care Vouchers in his Wallet, Kofi uses Amina's public contact details to arrange the appointment directly. After receiving care, he opens the Voucher and selects Redeem.
>
> The App fills in Amina, who issued the Voucher. Kofi sends one hundred and twenty Health Care Vouchers back to her. Redeem records the transfer; the medical care happens directly between Kofi and Amina.
>
> The Health Care Vouchers are now back with Amina. Because she is ready to provide more care, she can offer those units again. She opens the Pool and exchanges them for enough Food Basket Vouchers to obtain one basket.
>
> This places the Health Care Vouchers back in the Pool for a future exchange and moves Food Basket Vouchers to Amina's Wallet.
>
> Amina opens the Food Basket Voucher and selects Redeem. After sending the Vouchers to Kofi, she selects Add a message or place an order. She chooses one Fresh food basket, asks for delivery the following week, privately shares the delivery location, and selects Share.
>
> The message requests delivery. Kofi still needs to accept and provide the food.
>
> Their offers were clear. The Want helped them connect. The Pool helped them exchange. What can you offer? Visit cosmolocal dot credit.

## Shot checklist

### Doctor pane

- [ ] Health Care Voucher: description, terms, safe contact, location, and `400 MED`
- [ ] `Add offering` → Medical consultation → `USD 120` → `Session`
- [ ] Health Care Voucher pin and Medical consultation Offering on the `Market` map
- [ ] `Create pool` → Health Care Pool → `USD` → `Relative pricing`
- [ ] `Vouchers` → `Approve voucher` for `MED`
- [ ] `Deposit` at least `200 MED`
- [ ] Review Kofi's public Food Basket Voucher and Fresh food basket Offering
- [ ] `Vouchers` → `Approve voucher` for `FOOD`
- [ ] `Exchange rate: 1` and `Credit limit: 200 USD`
- [ ] `My Wants` → `Create Want` → Fresh local food
- [ ] Later `Swap`: receive at least `60 FOOD`, send returned `MED`
- [ ] Food Basket Voucher → `Redeem 60 FOOD` → `Send` → `Confirm and send`
- [ ] `Add a message or place an order` → Fresh food basket → `Location` → `Share`

### Farmer pane

- [ ] Food Basket Voucher: description, terms, contact, location, and `400 FOOD`
- [ ] `Add offering` → Fresh food basket → `USD 60` → `Bundle`
- [ ] Food Basket Voucher pin and Fresh food basket Offering on the `Market` map
- [ ] `Market` → `Wants` → `Search Wants`
- [ ] Open Fresh local food Want
- [ ] Inspect `Contact`, `Vouchers`, and `Creditable pools`
- [ ] Open Health Care Voucher and Medical consultation Offering
- [ ] Health Care Pool → `Credit` → `200.00 of 200.00 USD available credit` for `FOOD`
- [ ] `Swap`: receive at least `120 MED`, send `FOOD`
- [ ] Review rate, Pool fee, protocol fee, total fees, and final quote
- [ ] Health Care Voucher → public `Call` action
- [ ] Health Care Voucher → `Redeem 120 MED` → `Send` → `Confirm and send`

## Accuracy and editing notes

- Amina's Want does not display a creator-name field. Keep the **DOCTOR — Dr. Amina** pane label visible.
- Amina's Want can show her public **Vouchers** and **Creditable pools**. A creditable Pool has capacity for at least one Voucher issued by the Want creator; the label does not establish Pool ownership.
- Kofi opens the Pool's separate **Credit** tab to see the available credit for his Food Basket Voucher.
- Amina must be the actual Pool contract owner to see **Approve voucher**. She may also be described publicly as its Pool Steward.
- The Pool must approve Health Care Voucher and hold enough `MED` before Kofi's swap. Approval alone adds no inventory.
- The `USD 200` **Credit limit** caps how much Food Basket Voucher value the Pool may hold at one time. With no `FOOD` yet held, the **Credit** tab may show `200.00 of 200.00 USD available credit`. This is Pool exchange capacity, not cash, a personal loan, a grant, a debt, or guaranteed purchasing power.
- The Offering price states what a good or service costs. The Pool exchange rate measures Vouchers for a swap. Neither makes a Voucher cash, legal tender, a bank deposit, or a CLC-guaranteed claim.
- Show the live quote and fees. Even with both rates set to `1`, fees may require Kofi to send more than `120 FOOD` to receive `120 MED`, and Amina to send more than `60 MED` to receive `60 FOOD`.
- Kofi's swap moves `FOOD` into the Pool and `MED` out. Amina's later swap moves returned `MED` into the Pool and `FOOD` out.
- When Amina places returned `MED` back into circulation, she renews the commitment to provide eligible future care. State this clearly; do not imply that already fulfilled care is being counted twice.
- **Redeem** prefills the verified Voucher issuer as **Recipient** in the ordinary send flow. The holder selects **Send**, reviews **Confirm send**, completes **Confirm and send**, and reaches the **Sent** receipt.
- On Amina's `FOOD` receipt, **Add a message or place an order** is available only when Kofi is a registered Cosmo user and the verified Voucher issuer. **Order (optional)** can show his published Fresh food basket Offering.
- The App states: “This order is shared as a private message. It does not change the voucher amount already sent.” The **Location** option privately shares Amina's saved profile location with Kofi for this request.
- The order is a request, not Kofi's acceptance or proof of delivery. The appointment, medical care, and food delivery happen directly between Amina and Kofi.
- The Map can display Wants when that resource type is selected. **Market** → **Wants** → **Search Wants** is the clearest path for this walkthrough.
- A Voucher's location creates the Market-map resource. The Offering is published separately and becomes visible when someone opens the Voucher; do not imply that creating an Offering creates a separate map pin.
- Recheck all visible labels, permissions, Pool limits, inventory, and fees against the filming build immediately before recording.
