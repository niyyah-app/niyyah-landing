import type { LegalLocale } from './content'

// Podrška: javna stranica koju App Store Connect (Support URL) i Google Play
// (kontakt) traže uz aplikaciju.
//
// Ručno pisano, kao `deletion.ts`. Nazivi u aplikaciji („Profil", „Pomoć i
// podrška") su tačno oni iz ARB-ova tog jezika (help_and_support), a rok od
// 24 sata za prijave je isti kao u uslovima korištenja („Kako očekujemo da se
// ljudi ponašaju").

export type SupportCopy = {
  /** Kratak naziv za podnožje. */
  footer: string
  title: string
  description: string
  intro: string
  appTitle: string
  appSteps: string[]
  emailTitle: string
  /** `{email}` postaje link na adresu podrške. */
  emailBody: string
  emailSubject: string
  safetyTitle: string
  safety: string[]
  moreTitle: string
  /** Tekst linka na stranicu za brisanje naloga. */
  deleteLink: string
  /** Ko pruža uslugu (prodavac i rukovalac podataka); i na stranici brisanja naloga. */
  operator: string
}

/**
 * Prodavac i rukovalac podataka, iz estonskog poslovnog registra. Isto kao
 * `kControllerName` i susjedne konstante u aplikaciji
 * (frontend/lib/features/about/legal_content.dart). Naziv, adresa i brojevi
 * se ne prevode; država se piše na jeziku teksta.
 */
export const company = {
  name: 'Puzzles IT OÜ',
  address: 'Sepapaja tn 6, 15551 Tallinn',
  registryCode: '16552842',
  vat: 'EE102585232',
} as const

const { name: N, address: A, registryCode: R, vat: V } = company

export const support: Record<LegalLocale, SupportCopy> = {
  bs: {
    footer: 'Podrška',
    title: 'Pomoć i podrška',
    description: 'Kako kontaktirati Niyyah podršku: u aplikaciji ili e-mailom, i kako prijaviti člana ili sadržaj.',
    intro: 'Pitanje o nalogu, problem u aplikaciji ili prijava drugog člana — tu smo. Na svaku poruku odgovara čovjek.',
    appTitle: 'U aplikaciji',
    appSteps: [
      'U donjoj traci dodirni „Profil“.',
      'Otvori „Pomoć i podrška“.',
      'Pogledaj česta pitanja ili otvori tiket. Odgovor stiže u aplikaciju, uz obavijest.',
    ],
    emailTitle: 'E-mailom',
    emailBody: 'Piši na {email}. Odgovaramo obično u roku od dva radna dana. Ako se tiče tvog naloga, piši s adrese koja je za njega vezana.',
    emailSubject: 'Niyyah podrška',
    safetyTitle: 'Prijava člana ili sadržaja',
    safety: [
      'Na profilu i u razgovoru postoje „Prijavi“ i „Blokiraj“. Na priči, objavi i komentaru postoji „Prijavi“.',
      'Blokirana osoba te više ne vidi i ne može ti pisati.',
      'Moderatori pregledaju svaku prijavu u roku od 24 sata. Za neprimjeren sadržaj i zlostavljanje nema tolerancije: sadržaj se uklanja, a nalog zatvara.',
      'Ako si u opasnosti, odmah se javi policiji.',
    ],
    moreTitle: 'Još',
    deleteLink: 'Kako obrisati nalog',
    operator: `Niyyah pruža ${N}, ${A}, Estonija (registarski broj ${R}, PDV broj ${V}).`,
  },
  en: {
    footer: 'Support',
    title: 'Help & support',
    description: 'How to contact Niyyah support in the app or by email, and how to report a member or content.',
    intro: 'A question about your account, a problem in the app, or a report about another member — we are here. Every message is answered by a person.',
    appTitle: 'In the app',
    appSteps: [
      'Tap “Profile” in the bottom bar.',
      'Open “Help & support”.',
      'Read the frequently asked questions or open a ticket. The answer arrives in the app, with a notification.',
    ],
    emailTitle: 'By email',
    emailBody: 'Write to {email}. We usually answer within two working days. If it is about your account, write from the address linked to it.',
    emailSubject: 'Niyyah support',
    safetyTitle: 'Reporting a member or content',
    safety: [
      'Every profile and conversation has “Report” and “Block”. Every story, post and comment has “Report”.',
      'A blocked person no longer sees you and cannot write to you.',
      'Moderators review every report within 24 hours. We have zero tolerance for objectionable content and abuse: the content is removed and the account closed.',
      'If you are in danger, contact the police straight away.',
    ],
    moreTitle: 'More',
    deleteLink: 'How to delete your account',
    operator: `Niyyah is provided by ${N}, ${A}, Estonia (registry code ${R}, VAT number ${V}).`,
  },
  de: {
    footer: 'Support',
    title: 'Hilfe & Support',
    description: 'So erreichst du den Niyyah-Support in der App oder per E-Mail und meldest ein Mitglied oder Inhalte.',
    intro: 'Eine Frage zu deinem Konto, ein Problem in der App oder eine Meldung über ein anderes Mitglied — wir sind da. Jede Nachricht beantwortet ein Mensch.',
    appTitle: 'In der App',
    appSteps: [
      'Tippe unten in der Leiste auf „Profil“.',
      'Öffne „Hilfe & Support“.',
      'Lies die häufigen Fragen oder eröffne ein Ticket. Die Antwort kommt in der App, mit einer Benachrichtigung.',
    ],
    emailTitle: 'Per E-Mail',
    emailBody: 'Schreib an {email}. Wir antworten meist innerhalb von zwei Werktagen. Geht es um dein Konto, schreib von der Adresse, die damit verknüpft ist.',
    emailSubject: 'Niyyah-Support',
    safetyTitle: 'Ein Mitglied oder Inhalte melden',
    safety: [
      'Jedes Profil und jeder Chat hat „Melden“ und „Blockieren“. Jede Story, jeder Beitrag und jeder Kommentar hat „Melden“.',
      'Eine blockierte Person sieht dich nicht mehr und kann dir nicht schreiben.',
      'Moderatoren prüfen jede Meldung innerhalb von 24 Stunden. Für anstößige Inhalte und Missbrauch gilt null Toleranz: Der Inhalt wird entfernt und das Konto geschlossen.',
      'Wenn du in Gefahr bist, wende dich sofort an die Polizei.',
    ],
    moreTitle: 'Mehr',
    deleteLink: 'So löschst du dein Konto',
    operator: `Niyyah wird bereitgestellt von der ${N}, ${A}, Estland (Registernummer ${R}, USt-IdNr. ${V}).`,
  },
  tr: {
    footer: 'Destek',
    title: 'Yardım ve destek',
    description: 'Niyyah desteğine uygulamada veya e-postayla nasıl ulaşılır, bir üye veya içerik nasıl şikâyet edilir.',
    intro: 'Hesabınla ilgili bir soru, uygulamada bir sorun ya da başka bir üye hakkında şikâyet — buradayız. Her mesaja bir insan cevap verir.',
    appTitle: 'Uygulamada',
    appSteps: [
      'Alttaki çubukta “Profil”e dokun.',
      '“Yardım ve destek”i aç.',
      'Sık sorulan soruları oku veya bir talep oluştur. Cevap, bildirimle birlikte uygulamaya gelir.',
    ],
    emailTitle: 'E-postayla',
    emailBody: '{email} adresine yaz. Genellikle iki iş günü içinde cevap veririz. Hesabınla ilgiliyse, hesaba bağlı adresten yaz.',
    emailSubject: 'Niyyah destek',
    safetyTitle: 'Bir üyeyi veya içeriği şikâyet etmek',
    safety: [
      'Her profilde ve sohbette “Şikâyet et” ve “Engelle” vardır. Her hikâyede, gönderide ve yorumda “Şikâyet et” vardır.',
      'Engellenen kişi seni artık görmez ve sana yazamaz.',
      'Moderatörler her şikâyeti 24 saat içinde inceler. Uygunsuz içeriğe ve tacize sıfır tolerans: içerik kaldırılır, hesap kapatılır.',
      'Tehlikedeysen hemen polise başvur.',
    ],
    moreTitle: 'Daha fazlası',
    deleteLink: 'Hesap nasıl silinir',
    operator: `Niyyah, ${N} tarafından sunulur: ${A}, Estonya (sicil numarası ${R}, KDV numarası ${V}).`,
  },
  fr: {
    footer: 'Assistance',
    title: 'Aide et assistance',
    description: 'Comment contacter l’assistance Niyyah dans l’app ou par e-mail, et comment signaler un membre ou un contenu.',
    intro: 'Une question sur ton compte, un problème dans l’app ou un signalement concernant un autre membre — nous sommes là. Chaque message reçoit la réponse d’une personne.',
    appTitle: 'Dans l’app',
    appSteps: [
      'Dans la barre du bas, touche « Profil ».',
      'Ouvre « Aide et assistance ».',
      'Lis les questions fréquentes ou ouvre un ticket. La réponse arrive dans l’app, avec une notification.',
    ],
    emailTitle: 'Par e-mail',
    emailBody: 'Écris à {email}. Nous répondons en général sous deux jours ouvrables. Si cela concerne ton compte, écris depuis l’adresse qui y est liée.',
    emailSubject: 'Assistance Niyyah',
    safetyTitle: 'Signaler un membre ou un contenu',
    safety: [
      'Chaque profil et chaque conversation proposent « Signaler » et « Bloquer ». Chaque story, publication et commentaire propose « Signaler ».',
      'Une personne bloquée ne te voit plus et ne peut plus t’écrire.',
      'Les modérateurs examinent chaque signalement sous 24 heures. Tolérance zéro envers les contenus inappropriés et les abus : le contenu est supprimé et le compte fermé.',
      'Si tu es en danger, contacte immédiatement la police.',
    ],
    moreTitle: 'Plus',
    deleteLink: 'Comment supprimer ton compte',
    operator: `Niyyah est fourni par ${N}, ${A}, Estonie (code registre ${R}, n° TVA ${V}).`,
  },
  id: {
    footer: 'Dukungan',
    title: 'Bantuan & dukungan',
    description: 'Cara menghubungi dukungan Niyyah di aplikasi atau lewat email, dan cara melaporkan anggota atau konten.',
    intro: 'Pertanyaan tentang akunmu, masalah di aplikasi, atau laporan tentang anggota lain — kami di sini. Setiap pesan dijawab oleh manusia.',
    appTitle: 'Di aplikasi',
    appSteps: [
      'Ketuk “Profil” di bilah bawah.',
      'Buka “Bantuan & dukungan”.',
      'Baca pertanyaan umum atau buka tiket. Jawaban datang di aplikasi, dengan notifikasi.',
    ],
    emailTitle: 'Lewat email',
    emailBody: 'Tulis ke {email}. Biasanya kami menjawab dalam dua hari kerja. Jika terkait akunmu, tulis dari alamat yang terhubung dengannya.',
    emailSubject: 'Dukungan Niyyah',
    safetyTitle: 'Melaporkan anggota atau konten',
    safety: [
      'Setiap profil dan percakapan memiliki “Laporkan” dan “Blokir”. Setiap cerita, postingan, dan komentar memiliki “Laporkan”.',
      'Orang yang diblokir tidak lagi melihatmu dan tidak bisa mengirim pesan kepadamu.',
      'Moderator meninjau setiap laporan dalam 24 jam. Tidak ada toleransi untuk konten tidak pantas dan pelecehan: konten dihapus dan akun ditutup.',
      'Jika kamu dalam bahaya, segera hubungi polisi.',
    ],
    moreTitle: 'Lainnya',
    deleteLink: 'Cara menghapus akun',
    operator: `Niyyah disediakan oleh ${N}, ${A}, Estonia (nomor registrasi ${R}, nomor PPN ${V}).`,
  },
  ms: {
    footer: 'Sokongan',
    title: 'Bantuan & sokongan',
    description: 'Cara menghubungi sokongan Niyyah dalam aplikasi atau melalui e-mel, dan cara melaporkan ahli atau kandungan.',
    intro: 'Soalan tentang akaun awak, masalah dalam aplikasi, atau laporan tentang ahli lain — kami ada. Setiap mesej dijawab oleh manusia.',
    appTitle: 'Dalam aplikasi',
    appSteps: [
      'Ketik “Profil” di bar bawah.',
      'Buka “Bantuan & sokongan”.',
      'Baca soalan lazim atau buka tiket. Jawapan sampai dalam aplikasi, bersama pemberitahuan.',
    ],
    emailTitle: 'Melalui e-mel',
    emailBody: 'Tulis kepada {email}. Kami biasanya menjawab dalam dua hari bekerja. Jika berkaitan akaun awak, tulis daripada alamat yang dipautkan kepadanya.',
    emailSubject: 'Sokongan Niyyah',
    safetyTitle: 'Melaporkan ahli atau kandungan',
    safety: [
      'Setiap profil dan perbualan mempunyai “Laporkan” dan “Sekat”. Setiap cerita, siaran dan komen mempunyai “Laporkan”.',
      'Orang yang disekat tidak lagi melihat awak dan tidak boleh menulis kepada awak.',
      'Moderator menyemak setiap laporan dalam masa 24 jam. Tiada toleransi untuk kandungan tidak wajar dan penganiayaan: kandungan dikeluarkan dan akaun ditutup.',
      'Jika awak dalam bahaya, hubungi polis dengan segera.',
    ],
    moreTitle: 'Lagi',
    deleteLink: 'Cara memadam akaun',
    operator: `Niyyah disediakan oleh ${N}, ${A}, Estonia (nombor pendaftaran ${R}, nombor VAT ${V}).`,
  },
  ar: {
    footer: 'الدعم',
    title: 'المساعدة والدعم',
    description: 'كيف تتواصل مع دعم Niyyah داخل التطبيق أو عبر البريد الإلكتروني، وكيف تبلّغ عن عضو أو محتوى.',
    intro: 'سؤال عن حسابك، أو مشكلة في التطبيق، أو بلاغ عن عضو آخر — نحن هنا. يردّ على كل رسالة إنسان.',
    appTitle: 'داخل التطبيق',
    appSteps: [
      'اضغط على «الملف الشخصي» في الشريط السفلي.',
      'افتح «المساعدة والدعم».',
      'اقرأ الأسئلة الشائعة أو افتح تذكرة. يصل الرد داخل التطبيق مع إشعار.',
    ],
    emailTitle: 'عبر البريد الإلكتروني',
    emailBody: 'راسلنا على {email}. نردّ عادةً خلال يومَي عمل. إذا كان الأمر يخص حسابك، فراسلنا من العنوان المرتبط به.',
    emailSubject: 'دعم Niyyah',
    safetyTitle: 'الإبلاغ عن عضو أو محتوى',
    safety: [
      'في كل ملف شخصي ومحادثة يوجد «إبلاغ» و«حظر». وفي كل قصة ومنشور وتعليق يوجد «إبلاغ».',
      'الشخص المحظور لا يراك بعد ذلك ولا يستطيع مراسلتك.',
      'يراجع المشرفون كل بلاغ خلال 24 ساعة. لا تسامح مطلقًا مع المحتوى المسيء والإساءة: يُزال المحتوى ويُغلق الحساب.',
      'إذا كنت في خطر، فاتصل بالشرطة فورًا.',
    ],
    moreTitle: 'المزيد',
    deleteLink: 'كيف تحذف حسابك',
    operator: `تقدّم Niyyah شركة ${N}، ${A}، إستونيا (رقم التسجيل: ${R}، رقم ضريبة القيمة المضافة: ${V}).`,
  },
  ur: {
    footer: 'معاونت',
    title: 'مدد اور معاونت',
    description: 'ایپ میں یا ای میل کے ذریعے Niyyah سپورٹ سے کیسے رابطہ کریں، اور کسی رکن یا مواد کی رپورٹ کیسے کریں۔',
    intro: 'آپ کے اکاؤنٹ کے بارے میں سوال، ایپ میں کوئی مسئلہ، یا کسی دوسرے رکن کی رپورٹ — ہم حاضر ہیں۔ ہر پیغام کا جواب ایک انسان دیتا ہے۔',
    appTitle: 'ایپ میں',
    appSteps: [
      'نیچے والی پٹی میں ”پروفائل“ پر ٹیپ کریں۔',
      '”مدد اور معاونت“ کھولیں۔',
      'عام سوالات پڑھیں یا ٹکٹ کھولیں۔ جواب اطلاع کے ساتھ ایپ میں آتا ہے۔',
    ],
    emailTitle: 'ای میل کے ذریعے',
    emailBody: '{email} پر لکھیں۔ ہم عموماً دو کاروباری دنوں میں جواب دیتے ہیں۔ اگر بات آپ کے اکاؤنٹ کی ہے تو اس سے منسلک پتے سے لکھیں۔',
    emailSubject: 'Niyyah سپورٹ',
    safetyTitle: 'کسی رکن یا مواد کی رپورٹ',
    safety: [
      'ہر پروفائل اور گفتگو میں ”رپورٹ“ اور ”بلاک“ موجود ہیں۔ ہر اسٹوری، پوسٹ اور تبصرے میں ”رپورٹ“ موجود ہے۔',
      'بلاک کیا گیا شخص آپ کو مزید نہیں دیکھتا اور آپ کو لکھ نہیں سکتا۔',
      'ماڈریٹرز ہر رپورٹ کا 24 گھنٹوں کے اندر جائزہ لیتے ہیں۔ قابلِ اعتراض مواد اور بدسلوکی کے لیے برداشت صفر ہے: مواد ہٹا دیا جاتا ہے اور اکاؤنٹ بند کر دیا جاتا ہے۔',
      'اگر آپ خطرے میں ہیں تو فوراً پولیس سے رابطہ کریں۔',
    ],
    moreTitle: 'مزید',
    deleteLink: 'اکاؤنٹ کیسے حذف کریں',
    operator: `Niyyah کو ${N} فراہم کرتی ہے، ${A}، اسٹونیا (رجسٹری نمبر ${R}، VAT نمبر ${V})۔`,
  },
}
