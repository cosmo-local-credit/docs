# Cosmo-Local Credit video scripts

This folder contains production scripts that are versioned with the repository but are not published on the documentation website.

## Structure

- `en/` contains the English source scripts and their editable Word exports.
- Future translations should use matching locale folders, such as `fr/`, `es/`, or `sw/`, and retain the English filenames.

The Markdown files are authoritative. The matching DOCX files are generated for collaborators who review or produce the videos.

## Current scripts

| Markdown source | Purpose | Target runtime |
| --- | --- | --- |
| `en/clc-social-video-script.md` | Original short doctor/farmer introduction | Under 2 minutes |
| `en/clc-first-voucher-explainer-script.md` | Original doctor/farmer walkthrough using Wants, Offerings, and Health Care Pool | Under 5 minutes |
| `en/clc-unboxing-three-person-social-script.md` | Short edit of the dentist–farmer–mechanic Unboxing | Under 2 minutes |
| `en/clc-unboxing-three-person-exchange-script.md` | Full dentist–farmer–mechanic Health Market Unboxing | Under 5 minutes |
| `en/clc-unboxing-community-pool-script.md` | Follow-up transferring Health Market to a two-of-three community multisig | About 4 minutes |

Every script includes a runtime, voiceover, screen directions, visible App labels, reusable description copy, and product-accuracy notes. The community Pool script distinguishes contract-level multisig approvals from individual deposits and separately authorized catalog-management permissions.

## Product baseline

The scripts were last reconciled with CLC App `origin/develop` commit `704480cf2173dd9d95f3feadda3748999df2b072` on 11 November 2026. The current desktop interface retains the scripted action labels. Recheck permissions, account allowances, Pool configuration, balances, rates, fees, and the exact filming build before final editing.

## Filming convention

Use fictional Wallets and personal data. Never record private keys, passkeys, sign-in-card secrets, recovery information, real health information, or a participant's private location.

## Generate the DOCX files

From the repository root:

```bash
for source in video-scripts/en/*.md; do
  pandoc "$source" -o "${source%.md}.docx"
done
```

Regenerate the corresponding DOCX whenever its Markdown source changes.
