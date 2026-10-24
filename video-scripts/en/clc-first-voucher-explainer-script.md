---
title: "Cosmo-Local Credit: First Voucher, Offering, and Pool Exchange"
subtitle: "Carpentry and apples walkthrough"
lang: en
date: 23 October 2026
---

# Your first voucher, Offering, and Pool exchange

- **Target length:** 4 minutes 35 seconds to 4 minutes 58 seconds
- **Audience:** A first-time CLC App user
- **Format:** Screen-led walkthrough with presenter or voiceover
- **Outcome:** The viewer understands how to create a voucher, publish an Offering, find it on the Market map, create a Pool, approve two vouchers, provide inventory, make a swap, and withdraw available Pool liquidity.

## Demonstration story

Use two prepared accounts and one continuous story:

- **Amina's Carpentry** creates the **Carpentry Voucher** and publishes a **Furniture repair** Offering.
- **Kofi's Orchard** has already created the **Apple Voucher** and publishes an **Apples** Offering.
- Amina creates the **Neighborhood Exchange Pool**. As its Pool Steward and owner, she approves both vouchers and publishes their Pool rates and credit limits.
- Amina deposits Carpentry Vouchers into the Pool.
- Kofi swaps Apple Vouchers for some of the available Carpentry Vouchers.
- The Apple Vouchers enter the Pool. Amina uses **Withdraw liquidity** to move an available amount to her Wallet.

The spoken story addresses the viewer as the carpenter. The account names keep the screen recording easy to follow and can be localized later.

### Suggested demonstration values

| Item | Demonstration value |
| --- | --- |
| Carpenter account | Amina's Carpentry |
| Carpenter voucher | Carpentry Voucher (`CARP`), 100 initial vouchers |
| Carpenter stated value | 1 `CARP` represents 1 KES toward eligible carpentry services under the published terms |
| Carpenter Offering | Furniture repair, service, 500 KES per hour |
| Friend account | Kofi's Orchard |
| Friend voucher | Apple Voucher (`APPLE`), with enough balance for the demonstration |
| Friend Offering | Apples, good, 120 KES per kilogram |
| Pool | Neighborhood Exchange Pool, unit of account KES, relative pricing |
| Pool rates | 1 `CARP` = 1 KES; 1 `APPLE` = 1 KES |
| Credit limits | At least 100 KES for each demonstration voucher |
| Opening Pool inventory | Deposit at least 50 `CARP` |
| Demonstration swap | Kofi sends 10 `APPLE` and receives the displayed amount of `CARP` after fees |
| Demonstration withdrawal | Amina withdraws an available amount of `APPLE` liquidity to her Wallet |

These are illustrative production values, not recommended prices or default Pool settings. The Offering prices show the real services and goods; the voucher stated values explain how the vouchers count toward those Offerings. Make all spoken figures match the final filming data.

## Before filming

- Use a filming build based on, or checked against, CLC App `origin/develop` commit `eb0fbb744388d8bc35dbdf246940b4bdf3900bf3`.
- Reconfirm the product-owner statement that the first voucher is free to create. The App shows a voucher creation allowance but does not itself label that allowance “free.”
- Prepare two accounts with safe demonstration wallets. Never show passkeys, private keys, recovery material, or real personal contact information.
- Give Amina an unused first-voucher allowance and enough permission to create the Pool. Preload Kofi's completed voucher, Offering, and voucher balance.
- Use written voucher terms explaining that each `CARP` counts as 1 KES toward the eligible carpentry Offerings, that fractional use is allowed, and how someone contacts Amina and receives the service.
- Confirm that catalog indexing is working before filming the map scene. A voucher is the map pin; its Offering appears when the viewer opens the voucher.
- Approve `CARP` and `APPLE` in the Pool, set valid rates and credit limits, and deposit enough `CARP` before recording Kofi's swap.
- Keep any Pool fee small and let the App display the exact Pool fee, protocol fee, total fees, and quoted output. Do not promise a one-for-one result after fees.
- Have clean takes available for confirmation waits. The edit may compress waiting but must not make publication or a swap look instantaneous.

## Script

### Scene 1 — Start with what you offer

**Time:** 0:00–0:20

**Visuals:** Amina measures timber, repairs a chair, and installs a door. Cut to Kofi picking apples. Preview the final App journey: voucher, Market pin, Pool, and swap receipt.

**Voiceover:**

> Imagine exchanging what you offer for the things you need. That's the idea behind Cosmo-Local Credit. Let's say you're a carpenter. We will create a voucher, publish a Furniture repair Offering, find it on the map, and connect it through a Pool to your neighbor's Apple Voucher.

**On-screen text:** `Voucher → Offering → Market map → Pool → Exchange`

### Scene 2 — Create the Carpentry Voucher

**Time:** 0:20–1:16

**Visuals:** Sign in and open **Wallet**. In **My Vouchers**, show the unused allowance and tap **Create voucher**. On the **Create voucher** screen, enter **Carpentry Voucher**, set **Create vouchers** to `100`, and add the description. Open **Advanced**, show the suggested symbol `CARP`, set **Price** to `1`, and keep **Priced in** as `KES`. Tap **Next**. On **Where and what for**, choose the location and **Map pin**, add tags and contact details, and use **Write my own** under **Terms**. Tap **Next**, accept **Terms and Conditions**, and tap **Confirm & Publish**. Compress the confirmation wait, then tap **View voucher**.

**Voiceover:**

> Open Wallet and tap Create voucher. Your first voucher is free to create. Name it Carpentry Voucher and create one hundred. Explain that each represents one shilling toward the eligible services in your terms.
>
> Balances can be fractional: ten vouchers can represent ten shillings toward the work, while half can represent fifty cents. This is your stated value, not a promise of cash from CLC.
>
> Under Advanced, check the symbol, set the price to one, and keep KES as the unit. Choose your location, map pin, tags, contact details, and voucher terms. Review, accept the App's Terms and Conditions, and tap Confirm and Publish. When the first supply is live, tap View voucher.

**On-screen callouts:**

- `Wallet`
- `My Vouchers`
- `Create voucher`
- `Voucher Name`
- `Create vouchers`
- `Advanced`
- `Price`
- `Priced in`
- `Where and what for`
- `Map pin`
- `Terms` / `Write my own`
- `Confirm & Publish`
- `View voucher`

### Scene 3 — Publish the Furniture repair Offering

**Time:** 1:16–1:55

**Visuals:** On the Carpentry Voucher page, scroll to **Offerings** and tap **Add offering**. Enter **Furniture repair**, choose **A service**, add a concise description, set the unit to **Hour**, enter `500` under **Price per unit in KES**, and add a photo. Tap **Publish offering** and show it on the voucher page.

**Voiceover:**

> The voucher is the reusable commitment. An Offering describes a specific service. Under Offerings, tap Add offering. Enter Furniture repair, choose A service, describe one hour of work, set the unit and price, and add a photo. Tap Publish offering.
>
> You can add other eligible Offerings later without creating another voucher. Keep every description, price, condition, and availability detail accurate.

**On-screen callouts:** `Offerings` · `Add offering` · `A service` · `Price per unit in KES` · `Photo` · `Publish offering`

### Scene 4 — Find the voucher and Offering on the map

**Time:** 1:55–2:17

**Visuals:** Return to **Market**. Move to Amina's selected location, tap the Carpentry Voucher pin, and open its details. Show the issuer, contact information, terms, and Furniture repair Offering.

**Voiceover:**

> Once the catalog updates, Carpentry Voucher can appear as a pin on the Market map. A customer can open it, identify the issuer, read the terms and Furniture repair Offering, and contact you. The map supports discovery; it is not a CLC guarantee.

**On-screen text:** `Market` · `Tap the voucher pin` · `Read the Offering and terms`

### Scene 5 — Create your Commitment Pool

**Time:** 2:17–3:05

**Visuals:** Return to **Wallet**. Under **My Pools**, tap **Create pool**. Enter **Neighborhood Exchange Pool**, choose `KES` under **Unit of Account**, and describe its purpose. Open **Advanced**, choose **Relative pricing**, review **Swap Fee (%)** and **Fee recipient**, then tap **Next**. On **Where and what for**, choose the Pool location and **Pool Tags**, add contact details, and publish Pool terms. Continue to **Confirm & publish**, accept the App terms, tap **Confirm & Publish**, wait for confirmation, and tap **View pool**.

**Voiceover:**

> Now you want apples, and Kofi has an Apple Voucher. From Wallet, tap Create pool. A Commitment Pool is a small, curated marketplace for exchanging selected vouchers.
>
> Name it Neighborhood Exchange Pool, choose KES, and explain its purpose. Under Advanced, select Relative pricing and review the swap fee and fee recipient. Add the location, tags, contact details, and Pool terms. Review, accept the App terms, tap Confirm and Publish, and wait until it is live.

**On-screen callouts:** `My Pools` · `Create pool` · `Pool Name` · `Unit of Account` · `Relative pricing` · `Swap Fee (%)` · `Fee recipient` · `Pool Tags` · `Terms` · `View pool`

### Scene 6 — Approve the vouchers and provide inventory

**Time:** 3:05–3:43

**Visuals:** On the Pool page, open **Vouchers** and tap **Approve voucher**. Search for Carpentry Voucher, set **Exchange rate** to `1` and **Credit limit** to at least `100`, then tap **Approve voucher**. Repeat for Apple Voucher. Return to the Pool actions, tap **Deposit**, choose Carpentry Voucher, send `50 CARP` to the Pool, and show the successful receipt.

**Voiceover:**

> A Pool cannot exchange a voucher until its Steward approves it. Open Vouchers, tap Approve voucher, and add Carpentry Voucher with its exchange rate and credit limit. Repeat for Apple Voucher. Credit limit is how much value in that voucher the Pool can accept—not a personal loan.
>
> Approval creates no inventory. Tap Deposit and send Carpentry Vouchers to the Pool so someone can receive them.

**On-screen callouts:** `Vouchers` · `Approve voucher` · `Exchange rate` · `Credit limit` · `Deposit`

### Scene 7 — Kofi exchanges Apple Vouchers

**Time:** 3:43–4:24

**Visuals:** Switch clearly to Kofi's account. Open Neighborhood Exchange Pool and tap **Swap**. Select Apple Voucher under the send field and Carpentry Voucher under the receive field. Enter `10 APPLE`. Pause on **Rate**, **Pool fee**, **Protocol fee**, and **Total fees**. Tap **Swap**, review **You receive**, **You send**, and the Pool, then tap **Confirm swap**. Show the successful receipt and Carpentry Voucher in Kofi's Wallet.

**Voiceover:**

> On Kofi's account, open the Pool and tap Swap. Choose Apple Vouchers to send and Carpentry Vouchers to receive. Enter the amount. The App shows the rate, Pool fee, protocol fee, total fees, and quoted output.
>
> Review the confirmation, then tap Confirm swap. Apple Vouchers enter the Pool, and the quoted Carpentry Vouchers reach Kofi's Wallet. He can use them with you under your published terms.

**On-screen callouts:** `Swap` · `Rate` · `Pool fee` · `Protocol fee` · `Total fees` · `You receive` · `You send` · `Confirm swap`

### Scene 8 — Withdraw the apples and let the network grow

**Time:** 4:24–4:58

**Visuals:** Return clearly to Amina's Pool-owner account. Open the Pool controls and tap **Withdraw liquidity**. Select Apple Voucher, enter an available amount, and tap **Withdraw**. Show Apple Voucher in Amina's Wallet, then cut to Amina receiving apples and Kofi arranging carpentry work. Add a baker, tailor, and bicycle repairer before ending on the CLC logo and URL.

**Voiceover:**

> Back on the Pool owner's account, Apple Vouchers are Pool inventory. Tap Withdraw liquidity, choose Apple Voucher, enter an available amount, and tap Withdraw. This reduces what remains for later swaps, so follow the Pool rules.
>
> You can use Apple Vouchers with Kofi, and Kofi can use Carpentry Vouchers with you. Add a baker, tailor, or bicycle repairer, and more exchanges become possible. What do you offer? Visit cosmolocal dot credit. Offer what you have; get what you need.

**On-screen text:**

- `Withdraw liquidity`
- `Use vouchers with their issuers`
- `Offer what you have. Get what you need.`
- `cosmolocal.credit`

## Full voiceover

> Imagine exchanging what you offer for the things you need. That's the idea behind Cosmo-Local Credit. Let's say you're a carpenter. We will create a voucher, publish a Furniture repair Offering, find it on the map, and connect it through a Pool to your neighbor's Apple Voucher.
>
> Open Wallet and tap Create voucher. Your first voucher is free to create. Name it Carpentry Voucher and create one hundred. Explain that each represents one shilling toward the eligible services in your terms.
>
> Balances can be fractional: ten vouchers can represent ten shillings toward the work, while half can represent fifty cents. This is your stated value, not a promise of cash from CLC.
>
> Under Advanced, check the symbol, set the price to one, and keep KES as the unit. Choose your location, map pin, tags, contact details, and voucher terms. Review, accept the App's Terms and Conditions, and tap Confirm and Publish. When the first supply is live, tap View voucher.
>
> The voucher is the reusable commitment. An Offering describes a specific service. Under Offerings, tap Add offering. Enter Furniture repair, choose A service, describe one hour of work, set the unit and price, and add a photo. Tap Publish offering.
>
> You can add other eligible Offerings later without creating another voucher. Keep every description, price, condition, and availability detail accurate.
>
> Once the catalog updates, Carpentry Voucher can appear as a pin on the Market map. A customer can open it, identify the issuer, read the terms and Furniture repair Offering, and contact you. The map supports discovery; it is not a CLC guarantee.
>
> Now you want apples, and Kofi has an Apple Voucher. From Wallet, tap Create pool. A Commitment Pool is a small, curated marketplace for exchanging selected vouchers.
>
> Name it Neighborhood Exchange Pool, choose KES, and explain its purpose. Under Advanced, select Relative pricing and review the swap fee and fee recipient. Add the location, tags, contact details, and Pool terms. Review, accept the App terms, tap Confirm and Publish, and wait until it is live.
>
> A Pool cannot exchange a voucher until its Steward approves it. Open Vouchers, tap Approve voucher, and add Carpentry Voucher with its exchange rate and credit limit. Repeat for Apple Voucher. Credit limit is how much value in that voucher the Pool can accept—not a personal loan.
>
> Approval creates no inventory. Tap Deposit and send Carpentry Vouchers to the Pool so someone can receive them.
>
> On Kofi's account, open the Pool and tap Swap. Choose Apple Vouchers to send and Carpentry Vouchers to receive. Enter the amount. The App shows the rate, Pool fee, protocol fee, total fees, and quoted output.
>
> Review the confirmation, then tap Confirm swap. Apple Vouchers enter the Pool, and the quoted Carpentry Vouchers reach Kofi's Wallet. He can use them with you under your published terms.
>
> Back on the Pool owner's account, Apple Vouchers are Pool inventory. Tap Withdraw liquidity, choose Apple Voucher, enter an available amount, and tap Withdraw. This reduces what remains for later swaps, so follow the Pool rules.
>
> You can use Apple Vouchers with Kofi, and Kofi can use Carpentry Vouchers with you. Add a baker, tailor, or bicycle repairer, and more exchanges become possible. What do you offer? Visit cosmolocal dot credit. Offer what you have; get what you need.

## Accuracy and editing notes

- The first-voucher-free statement comes from the supplied product script. Reconfirm this current pricing policy immediately before publication.
- `CARP` is a voucher with an issuer-published stated value and terms. It is not cash, legal tender, a bank deposit, or a CLC-guaranteed one-shilling claim.
- Fractional voucher balances are technically supported. The issuer's published terms must explain how fractions apply to the Offering.
- Creating the voucher publishes its catalog record and map location. **Add offering** and **Publish offering** are separate actions required to describe the specific carpentry service. The map pin represents the voucher; viewers open it to see its Offerings.
- The Market is a discovery catalog. CLC and Grassroots Economics Foundation do not automatically become the seller, voucher issuer, redeemer, or guarantor.
- The Pool Steward approves vouchers and publishes Pool rules. Approval does not prove issuer capacity, cash value, or guaranteed inventory.
- In this flow, Amina deposits `CARP`. Kofi's swap sends `APPLE` into the Pool and receives available `CARP`. Do not show both voucher balances appearing in the Pool merely because they were approved.
- Only an authorized Pool owner sees **Withdraw liquidity**. It sends available Pool inventory to the owner's Wallet and reduces inventory available for later swaps. Fees held separately remain for fee collection.
- A Pool deposit does not automatically grant repayment, ownership-share, reward, or governance rights.
- Show the exact quote and fees from the filming build. A Pool fee and protocol fee may change the output, even when both voucher rates use the same unit of account.
- A swap changes voucher balances. It does not prove that apples or carpentry work were delivered; each issuer remains responsible for the Offering promised in their terms.
- UI labels and availability can depend on the account allowance, role, Pool configuration, and deployment. Recheck the shot list immediately before recording.
