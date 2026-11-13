# Suryansh Solar landing page

Vue 3 + Vite + Bootstrap 5 ([bootstrap-vue-next](https://bootstrap-vue-next.github.io/bootstrap-vue-next/)).

## Run

```bash
npm install
npm run dev      # local development with hot reload
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

Needs Node 20.19+ or 22.12+.

## Where things live

```
src/
  App.vue                  page assembly: reorder or remove sections here
  main.js                  app start-up, Bootstrap, light/dark theme
  assets/theme.css         brand colours, Bootstrap overrides, shared styles
  data/
    site.js                company name, phone, WhatsApp, email, menu, offer strip
    content.js             text for facts, steps, subsidy rates, stories, support
  utils/solarEstimate.js   every rupee calculation and its assumptions
  services/leads.js        where the contact form gets connected to a backend
  components/
    layout/                TopBar, SiteHeader, OfferStrip, SiteFooter, MobileCallBar
    sections/              one file per page section (Hero, Finance, Subsidy, ...)
    ui/                    reusable pieces (SectionHeading, LedgerList, StoryCard, ...)
```

## Common changes

| To change | Edit |
|---|---|
| Phone, WhatsApp link, email, hours | `src/data/site.js` |
| Menu links or the yellow offer strip | `src/data/site.js` |
| A customer story, process step or subsidy rate | `src/data/content.js` |
| Tariff, cost per kW, interest rate, loan length | `src/utils/solarEstimate.js` |
| Colours or fonts | `src/assets/theme.css` (fonts are loaded in `index.html`) |
| Section order | `src/App.vue` |
| A section's heading or Hindi tagline | that section's file in `src/components/sections/` |

The story breakdown tables and the calculator both use `estimate()` from `solarEstimate.js`, so they
always agree. The rupee figures written inside the story paragraphs in `content.js` are plain text and
need updating by hand if the assumptions change.

## Before going live

- Replace the placeholder phone number, WhatsApp link and email in `src/data/site.js`.
- Confirm pricing, loan terms and subsidy figures in `src/utils/solarEstimate.js` and `src/data/content.js`.
- The customer stories are illustrative, with invented names.
- Connect the contact form in `src/services/leads.js`. Until then it tells the visitor nothing was sent.

## Deploy (GitHub Pages)

```bash
npm run deploy
```

This builds the site and pushes the `dist/` folder to the `gh-pages` branch, which GitHub Pages serves at
https://sonalchinioti.github.io/suryansh-solar/. The `main` branch holds the source code only.
