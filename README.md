# Niyyah — landing stranica

Marketinška stranica za [niyyahmarriage.com](https://niyyahmarriage.com).
Nuxt 4, statički generisana, bosanski (`/`) i engleski (`/en`).

Sadržaj i tvrdnje: `CLAUDE.md` (izvor istine). Slike: `SLIKE.md`.

## Pokretanje

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # statički build u .output/public
```

## Gdje je šta

- `app/content/bs.ts`, `app/content/en.ts` — sav tekst stranice (en mora imati iste ključeve kao bs)
- `app/components/` — sekcije stranice, redom kako ih slaže `app/pages/index.vue`
- `app/components/mock/` — HTML makete ekrana dok nema screenshotova
- `app/assets/images/` — screenshotovi (prepoznaju se po imenu, vidi `SLIKE.md`)
- `app/assets/css/main.css` — boje, fontovi, razmaci
- `nuxt.config.ts` — SEO, jezici, sitemap, fontovi

## Linkovi na trgovine

Stranica je u načinu „aplikacija je objavljena": svi CTA vode na App Store i
Google Play. Linkovi se upisuju na vrhu `nuxt.config.ts` (`appStoreUrl`,
`googlePlayUrl`). Dok su prazni, build namjerno pada, da stranica ne ode online
s mrtvim dugmadima. Iz App Store linka se automatski pravi i Smart App Banner
za Safari na iPhoneu.

Za povratak na listu čekanja postavi `appLaunched: false` u `nuxt.config.ts`
(forma tada šalje `POST { email, locale }` na `waitlistEndpoint`).

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) na svaki push na `main` generiše
stranicu i objavljuje je na GitHub Pages. U postavkama repozitorija:
**Settings → Pages → Source: GitHub Actions**. `CNAME` je u `public/`.
