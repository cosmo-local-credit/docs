# Cosmo-Local Credit video scripts

This folder contains production scripts that are kept in the repository but are not published on the documentation website.

## Structure

- `en/` — English source scripts and their editable Word exports.
- Future translations should use matching locale folders, such as `fr/`, `es/`, or `sw/`, and retain the English filenames.

The Markdown files are the source of record. The DOCX files are generated from them for review with video-production collaborators.

## Current scripts

- `en/clc-social-video-script.md` — short general-interest video, designed to run under two minutes.
- `en/clc-first-voucher-explainer-script.md` — guided App walkthrough, designed to run under five minutes.

## Product baseline

The English scripts were last checked against the CLC App `origin/develop` commit `eb0fbb744388d8bc35dbdf246940b4bdf3900bf3` on 23 October 2026. Recheck labels, screen order, account allowances, and the first-voucher pricing claim against the filming build before recording.

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
