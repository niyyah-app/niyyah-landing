/**
 * Isto pravilo u sitemapu kao na stranicama (app/utils/xDefault.ts):
 * x-default pokazuje na englesku verziju, kad je ima. Sitemap modul ga
 * inače postavlja na zadani jezik (bs), pa bi sitemap i stranice tvrdili
 * različito, a Google tada ne vjeruje nijednom.
 */
export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('sitemap:resolved', (ctx) => {
    for (const url of ctx.urls) {
      const alternatives = url.alternatives
      if (!alternatives?.length) continue
      const en = alternatives.find((a) => a.hreflang === 'en')
      const xDefault = alternatives.find((a) => a.hreflang === 'x-default')
      if (en && xDefault) xDefault.href = en.href
    }
  })
})
