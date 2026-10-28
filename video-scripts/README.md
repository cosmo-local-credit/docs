# Cosmo-Local Credit video scripts

This folder contains production scripts that are kept in the repository but are not published on the documentation website.

## Structure

- `en/` — English source scripts and their editable Word exports.
- Future translations should use matching locale folders, such as `fr/`, `es/`, or `sw/`, and retain the English filenames.

The Markdown files are the source of record. The DOCX files are generated from them for review with video-production collaborators.

## Current scripts

- `en/clc-social-video-script.md` — short general-interest doctor-and-farmer story, designed to run under two minutes.
- `en/clc-first-voucher-explainer-script.md` — two-account Wants, Voucher, Offering, Pool, swap, and use walkthrough, designed to run under five minutes.

## Product baseline

The English scripts were last checked against the CLC App `origin/develop` commit `8f49f61120c383e73223b4c4c68945aa57863609` on 26 October 2026. This baseline includes searchable Wants, related creator Vouchers and creditable Pools, public Want contact choices, and selectable Market-map resource types. Recheck labels, screen order, account allowances, Pool configuration, and fees against the filming build before recording.

## Filming convention

The explainer uses two narrow browser panes side by side on a desktop recording:

- **DOCTOR — Dr. Amina** on the left.
- **FARMER — Kofi** on the right.

Keep each pane near the App's mobile viewport width. Highlight the active pane and dim the other one. Do not ask viewers to follow two actions at once, and do not refer to “left” or “right” in the voiceover so the script remains easy to translate and adapt.

## Updating the Word files

From the repository root:

```sh
pandoc video-scripts/en/clc-social-video-script.md \
  --from=gfm --to=docx \
  --output=video-scripts/en/clc-social-video-script.docx

pandoc video-scripts/en/clc-first-voucher-explainer-script.md \
  --from=gfm --to=docx \
  --output=video-scripts/en/clc-first-voucher-explainer-script.docx
```

Regenerate the corresponding DOCX whenever its Markdown source changes.
