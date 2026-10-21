Baraka Al-Quran: website folder
===============================

Upload the CONTENTS of this folder (not the folder itself) to a static host
such as Cloudflare Pages, Netlify or GitHub Pages. index.html must end up at
the top level of your site.

Before publishing
1. Open privacy.html and replace [YOUR NAME] / [YOUR EMAIL] and the Arabic
   [اسمك] / [بريدك الإلكتروني] with your details. Both app stores require a
   working privacy policy link.
2. Each time you publish a new version of the app, change CACHE='baraka-v1'
   in sw.js (for example to 'baraka-v2'). Without that, phones keep the old
   version until their cache is cleared.

What is in the folder
- index.html          the app
- privacy.html        privacy policy (English and Arabic); linked from Settings
- manifest.webmanifest, icons/    install on the home screen (PWA) and store packaging
- sw.js               makes the app work offline
- fonts/, Sortable.min.js   included locally, so the app makes no requests to Google or other sites


Check before the stores
- Licences: confirm the Quran text (Tanzil) and the KFGQPC Hafs font terms allow
  your use, and keep the credit line in Settings.

--- Madinah print font (fonts/qcf1) ---
fonts/qcf1 holds 604 files, one per mushaf page (QCF V1, King Fahd Glorious Quran Printing Complex).
The font files state "All rights reserved". Check the Complex's terms before publishing the site.
The reader shows this font by default and falls back to the standard font if a page file is missing.
Switching tajweed colours on shows the standard font, because the print font cannot colour single letters.
Keep the whole fonts/qcf1 folder next to index.html when you upload.
