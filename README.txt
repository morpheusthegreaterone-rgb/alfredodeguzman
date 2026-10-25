# Editable Portfolio Website

## Included
- `index.html` — page content and navigation
- `style.css` — all styling and the five-color palette
- `script.js` — certificate data, search, category grouping, and multi-PDF modal
- `certificates/` — the six PDFs you uploaded in this chat

## How to run
1. Extract this ZIP file.
2. Keep `index.html`, `style.css`, `script.js`, and the `certificates` folder together.
3. Open `index.html` in a modern browser. For the most reliable PDF preview, run the folder using VS Code Live Server.

## Colors
- Oxford Blue: `#192338`
- Space Cadet: `#1E2E4F`
- YinMn Blue: `#31487A`
- Jordy Blue: `#8FB3E2`
- Lavender (web): `#D9E1F1`

## How to add another certificate
1. Copy its PDF into the `certificates` folder.
2. Open `script.js`.
3. Add an object to the `certificates` array. Example:

```js
{
  title: "Certificate title",
  organization: "Cisco Networking Academy",
  category: "Cisco",
  date: "Month Day, Year",
  file: "certificates/your-file-name.pdf",
  description: "Short description."
}
```

Use one of these exact category values for the existing filters: `TESDA`, `DICT`, `freeCodeCamp`, `Cisco`, `NC Seminar`.

## Current files
This starter includes the six certificate PDFs uploaded so far: four TESDA-labelled files and two DICT-labelled files. The other certificates can be added when you upload them. Update the category counts in `index.html` if needed.


## Grouped certificate modal
The Certificates section shows one card per organization/category. Clicking View Certificates opens one large modal with every PDF currently uploaded for that category. The expected totals are TESDA 5, DICT 4, freeCodeCamp 1, Cisco 2, and NC Seminar 4. Only the six PDFs uploaded so far are included; add the rest to the certificates folder and register them in script.js.

## Contact section
The navbar includes Contact. Edit the sample email and social profile links in index.html before publishing.
