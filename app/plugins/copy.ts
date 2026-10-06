// Tekst jezika mora stići prije renderovanja, inače bi se stranica na /de
// prvo nacrtala na bosanskom (i hidratacija ne bi odgovarala HTML-u). Vidi
// useCopy.ts.
export default defineNuxtPlugin({
  name: 'niyyah:copy',
  dependsOn: ['i18n:plugin:route-locale-detect'],
  async setup(nuxtApp) {
    await loadCopy((nuxtApp.$i18n as { locale: Ref<string> }).locale.value)

    // Hook se čeka prije nego što se jezik promijeni, pa novi tekst stiže
    // zajedno s novim jezikom, bez bljeska bosanskog između.
    nuxtApp.hook('i18n:beforeLocaleSwitch', ({ newLocale }) => loadCopy(newLocale))
  },
})
