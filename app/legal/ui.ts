/**
 * Pravne stranice — samo ono što treba svaka stranica: jezici, natpisi i
 * linkovi u podnožju (brzina, 4.11.2026).
 *
 * Podnožje je dotad uvozilo `content.ts`, `deletion.ts`, `support.ts` i
 * `childSafety.ts` zbog nekoliko riječi, pa je oko 330 KB pravnog teksta na
 * devet jezika išlo u glavni JavaScript svake stranice, i početne. Sad ga
 * učitavaju samo pravne stranice; natpisi iz podnožja stoje ovdje, i odavde ih
 * čitaju i same pravne stranice (`footer`), da se ne razilaze.
 */

/** Adresa podrške; pravne stranice je pominju, a ne trebaju cijeli tekst brisanja. */
export const supportEmail = 'support@niyyahmarriage.com'

/** Jezici na kojima pravni tekst postoji (isti kao u aplikaciji). */
export const legalLocales = ['bs', 'en', 'de', 'tr', 'fr', 'id', 'ms', 'ar', 'ur'] as const
export type LegalLocale = (typeof legalLocales)[number]
export const isLegalLocale = (l: string): l is LegalLocale => (legalLocales as readonly string[]).includes(l)

export const legalUi: Record<LegalLocale, { privacy: string; terms: string; updated: string; home: string }> = {
  bs: { privacy: 'Politika privatnosti', terms: 'Uslovi korištenja', updated: 'Ažurirano', home: 'Početna' },
  en: { privacy: 'Privacy Policy', terms: 'Terms of Service', updated: 'Last updated', home: 'Home' },
  de: { privacy: 'Datenschutzerklärung', terms: 'Nutzungsbedingungen', updated: 'Zuletzt aktualisiert', home: 'Startseite' },
  tr: { privacy: 'Gizlilik Politikası', terms: 'Kullanım Şartları', updated: 'Son güncelleme', home: 'Ana sayfa' },
  fr: { privacy: 'Politique de confidentialité', terms: 'Conditions d’utilisation', updated: 'Dernière mise à jour', home: 'Accueil' },
  id: { privacy: 'Kebijakan Privasi', terms: 'Syarat Layanan', updated: 'Terakhir diperbarui', home: 'Beranda' },
  ms: { privacy: 'Dasar Privasi', terms: 'Terma Perkhidmatan', updated: 'Kemas kini terakhir', home: 'Laman utama' },
  ar: { privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام', updated: 'آخر تحديث', home: 'الرئيسية' },
  ur: { privacy: 'پرائیویسی پالیسی', terms: 'شرائط استعمال', updated: 'آخری اپ ڈیٹ', home: 'ہوم' },
}

/** Natpisi linkova u podnožju (i `footer` u pravnim tekstovima). */
export const legalFooter: Record<LegalLocale, { deletion: string; support: string; childSafety: string }> = {
  bs: { deletion: 'Brisanje naloga', support: 'Podrška', childSafety: 'Sigurnost djece' },
  en: { deletion: 'Delete account', support: 'Support', childSafety: 'Child safety' },
  de: { deletion: 'Konto löschen', support: 'Support', childSafety: 'Kinderschutz' },
  tr: { deletion: 'Hesap silme', support: 'Destek', childSafety: 'Çocuk güvenliği' },
  fr: { deletion: 'Supprimer le compte', support: 'Assistance', childSafety: 'Protection des enfants' },
  id: { deletion: 'Hapus akun', support: 'Dukungan', childSafety: 'Keamanan anak' },
  ms: { deletion: 'Padam akaun', support: 'Sokongan', childSafety: 'Keselamatan kanak-kanak' },
  ar: { deletion: 'حذف الحساب', support: 'الدعم', childSafety: 'سلامة الأطفال' },
  ur: { deletion: 'اکاؤنٹ حذف کریں', support: 'معاونت', childSafety: 'بچوں کا تحفظ' },
}
