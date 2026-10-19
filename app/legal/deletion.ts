import type { LegalLocale } from './content'

// Brisanje naloga: javna stranica koju Google Play traži uz aplikaciju.
//
// Ručno pisano, ne izvozi se iz aplikacije kao `content.ts`, pa se ovdje
// mora držati u skladu s dvije stvari:
//   - putanjom u aplikaciji (frontend/lib/features/profile/
//     profile_account_screen.dart i account_delete_sheet.dart) — nazivi
//     dugmadi su tačno oni iz ARB-ova tog jezika;
//   - politikom privatnosti („Koliko dugo čuvamo", „Tvoja prava") — ovdje
//     nema roka koji tamo ne piše. Rok od 30 dana za zahtjev e-mailom je
//     rok odgovora iz „Tvoja prava".
//
// Jezici su isti kao za politiku i uslove (jezici aplikacije); ostali
// jezici stranice vode na engleski.

export type DeletionCopy = {
  /** Kratak naziv za podnožje. */
  footer: string
  title: string
  description: string
  intro: string
  appTitle: string
  appSteps: string[]
  appNote: string
  emailTitle: string
  /** `{email}` postaje link na adresu podrške. */
  emailBody: string
  emailSubject: string
  deletedTitle: string
  deleted: string[]
  keptTitle: string
  kept: string[]
  /** `{link}` postaje link na politiku privatnosti, s tekstom `moreLink`. */
  more: string
  moreLink: string
  /** Link s politike privatnosti i uslova na ovu stranicu. */
  link: string
}

export const supportEmail = 'support@niyyahmarriage.com'

export const deletion: Record<LegalLocale, DeletionCopy> = {
  bs: {
    footer: 'Brisanje naloga',
    title: 'Brisanje naloga',
    description: 'Kako obrisati Niyyah nalog u aplikaciji ili e-mailom, šta se briše, a šta ostaje i koliko dugo.',
    intro: 'Svoj Niyyah nalog možeš obrisati u aplikaciji, u bilo kojem trenutku. Ako aplikaciji više nemaš pristup, piši nam pa ćemo ga obrisati mi.',
    appTitle: 'U aplikaciji',
    appSteps: [
      'Otvori Niyyah i prijavi se u nalog koji želiš obrisati.',
      'U donjoj traci dodirni „Profil“.',
      'Otvori „Račun“.',
      'Na dnu ekrana, u crvenom okviru, dodirni „Obriši račun“.',
      'Aplikacija pokaže šta se briše i ponudi „Radije pauziraj“. Ako ipak brišeš, dodirni ponovo „Obriši račun“.',
      'Potvrdi da si to ti, onako kako se prijavljuješ: lozinkom, kodom koji ti pošaljemo na e-mail, dugmetom „Potvrdi Googleom“ ili „Potvrdi Appleom“, ili upisivanjem riječi OBRIŠI. Na tom koraku možeš prvo zatražiti kopiju svojih podataka na e-mail.',
      'Dodirni „Trajno obriši nalog“. Nalog se briše odmah, a ti se odjavljuješ.',
    ],
    appNote: 'Ako ti treba samo predah, ništa ne moraš brisati: profil možeš pauzirati ili nalog privremeno deaktivirati, pa se kasnije vratiti.',
    emailTitle: 'Bez aplikacije, e-mailom',
    emailBody: 'Piši na {email} s e-mail adrese koja je vezana za tvoj nalog (ako se prijavljuješ Googleom ili Appleom, to je adresa tog naloga) i napiši da želiš obrisati nalog. Ako pišeš s druge adrese, prvo ćemo provjeriti da je nalog tvoj. Nalog brišemo i to ti potvrđujemo e-mailom najkasnije 30 dana od zahtjeva.',
    emailSubject: 'Brisanje naloga',
    deletedTitle: 'Šta se briše',
    deleted: [
      'Profil, odgovori na profilu i sve fotografije, uključujući fotografiju za provjeru lica.',
      'Podudaranja, lajkovi, razgovori i glasovne poruke. Razgovor s tobom nestaje i kod druge osobe.',
      'Objave, komentari i priče u zajednici.',
      'Veze s mahremima: tvoje, i one u kojima si nekome mahrem.',
      'Coinsi koji su ostali na računu. Ne vraćaju se i ne prenose se na novi nalog.',
      'Prijava: ako se kasnije ponovo prijaviš istim e-mailom, Googleom ili Appleom, otvara se novi, prazan nalog.',
    ],
    keptTitle: 'Šta ostaje i koliko dugo',
    kept: [
      'Podaci o plaćanjima i coinsima, bez tvog imena, radi računovodstva.',
      'Šifrovani otisak tvog e-maila ili Google ili Apple prijave, kako se zabrana, blokada ili neplaćeni coinsi ne bi mogli izbjeći novim nalogom.',
      'Prijave koje se tiču tvog naloga ostaju, da brisanje ne bi bilo način da se ukloni dokaz. Njihov sadržaj se briše 90 dana nakon odbacivanja prijave, odnosno dvije godine nakon odluke.',
      'Rezervne kopije servera: obrisani podaci iz njih nestaju najkasnije za 30 dana.',
    ],
    more: 'Sve o tome koje podatke prikupljamo i koliko ih čuvamo piše u {link}.',
    moreLink: 'politici privatnosti',
    link: 'Kako obrisati nalog, korak po korak',
  },
  en: {
    footer: 'Delete account',
    title: 'Deleting your account',
    description: 'How to delete your Niyyah account in the app or by email, what is deleted, and what is kept and for how long.',
    intro: 'You can delete your Niyyah account yourself in the app at any time. If you can no longer get into the app, write to us and we will delete it for you.',
    appTitle: 'In the app',
    appSteps: [
      'Open Niyyah and sign in to the account you want to delete.',
      'Tap “Profile” in the bottom bar.',
      'Open “Account”.',
      'At the bottom of the screen, in the red box, tap “Delete account”.',
      'The app shows what will be deleted and offers “Pause instead”. If you still want to delete, tap “Delete account” again.',
      'Confirm it is you, the same way you sign in: with your password, a code we send to your email, the “Confirm with Google” or “Confirm with Apple” button, or by typing the word DELETE. At this step you can first ask for a copy of your data by email.',
      'Tap “Delete account permanently”. The account is deleted straight away and you are signed out.',
    ],
    appNote: 'If you only need a break, you do not have to delete anything: you can pause your profile or deactivate your account for now, and come back later.',
    emailTitle: 'Without the app, by email',
    emailBody: 'Write to {email} from the email address linked to your account (if you sign in with Google or Apple, that is the address of that account) and say that you want your account deleted. If you write from another address, we will first check that the account is yours. We delete the account and confirm it to you by email within 30 days of your request.',
    emailSubject: 'Account deletion',
    deletedTitle: 'What is deleted',
    deleted: [
      'Your profile, your profile answers and all your photos, including the face-check photo.',
      'Matches, likes, conversations and voice messages. The conversation with you disappears for the other person too.',
      'Your community posts, comments and stories.',
      'Mahrem connections: your own, and those in which you are someone’s mahrem.',
      'Coins left in your balance. They are not refunded and do not carry over to a new account.',
      'Your sign-in: if you later sign in again with the same email, Google or Apple account, a new, empty account is created.',
    ],
    keptTitle: 'What is kept, and for how long',
    kept: [
      'Payment and coin records, without your name, for accounting.',
      'An encrypted fingerprint of your email or your Google or Apple sign-in, so that a ban, a block or unpaid coins cannot be escaped by opening a new account.',
      'Reports involving your account remain, so that deleting an account is not a way to remove evidence. Their content is cleared 90 days after a report is dismissed, or two years after a decision.',
      'Server backups: deleted data disappears from them within 30 days at the latest.',
    ],
    more: 'Everything about what we collect and how long we keep it is in the {link}.',
    moreLink: 'Privacy Policy',
    link: 'How to delete your account, step by step',
  },
  de: {
    footer: 'Konto löschen',
    title: 'Konto löschen',
    description: 'So löschst du dein Niyyah-Konto in der App oder per E-Mail – was gelöscht wird und was wie lange bleibt.',
    intro: 'Du kannst dein Niyyah-Konto jederzeit selbst in der App löschen. Wenn du keinen Zugang mehr zur App hast, schreib uns, dann löschen wir es für dich.',
    appTitle: 'In der App',
    appSteps: [
      'Öffne Niyyah und melde dich mit dem Konto an, das du löschen möchtest.',
      'Tippe unten in der Leiste auf „Profil“.',
      'Öffne „Konto“.',
      'Tippe ganz unten auf dem Bildschirm, im roten Feld, auf „Konto löschen“.',
      'Die App zeigt, was gelöscht wird, und bietet „Lieber pausieren“ an. Wenn du trotzdem löschen willst, tippe noch einmal auf „Konto löschen“.',
      'Bestätige, dass du es bist – so, wie du dich anmeldest: mit deinem Passwort, mit einem Code, den wir dir per E-Mail schicken, mit „Mit Google bestätigen“ oder „Mit Apple bestätigen“ oder indem du das Wort LÖSCHEN eingibst. In diesem Schritt kannst du dir vorher eine Kopie deiner Daten per E-Mail schicken lassen.',
      'Tippe auf „Konto endgültig löschen“. Das Konto wird sofort gelöscht und du wirst abgemeldet.',
    ],
    appNote: 'Wenn du nur eine Pause brauchst, musst du nichts löschen: Du kannst dein Profil pausieren oder dein Konto vorübergehend deaktivieren und später zurückkommen.',
    emailTitle: 'Ohne die App, per E-Mail',
    emailBody: 'Schreib an {email} von der E-Mail-Adresse, die mit deinem Konto verknüpft ist (wenn du dich mit Google oder Apple anmeldest, ist es die Adresse dieses Kontos), und teile uns mit, dass du dein Konto löschen möchtest. Schreibst du von einer anderen Adresse, prüfen wir zuerst, ob das Konto dir gehört. Wir löschen das Konto und bestätigen es dir per E-Mail innerhalb von 30 Tagen nach deiner Anfrage.',
    emailSubject: 'Konto löschen',
    deletedTitle: 'Was gelöscht wird',
    deleted: [
      'Dein Profil, deine Profilangaben und alle deine Fotos, auch das Foto für die Gesichtsprüfung.',
      'Matches, Likes, Unterhaltungen und Sprachnachrichten. Die Unterhaltung mit dir verschwindet auch bei der anderen Person.',
      'Deine Beiträge, Kommentare und Stories in der Community.',
      'Mahrem-Verbindungen: deine eigenen und die, in denen du für jemanden Mahrem bist.',
      'Coins, die noch auf deinem Konto sind. Sie werden nicht erstattet und nicht auf ein neues Konto übertragen.',
      'Deine Anmeldung: Meldest du dich später mit derselben E-Mail oder demselben Google- oder Apple-Konto wieder an, entsteht ein neues, leeres Konto.',
    ],
    keptTitle: 'Was bleibt und wie lange',
    kept: [
      'Zahlungs- und Coin-Belege, ohne deinen Namen, für die Buchhaltung.',
      'Ein verschlüsselter Fingerabdruck deiner E-Mail oder deiner Google- oder Apple-Anmeldung, damit eine Sperre, eine Blockierung oder unbezahlte Coins nicht mit einem neuen Konto umgangen werden können.',
      'Meldungen, die dein Konto betreffen, bleiben bestehen, damit das Löschen kein Weg ist, Beweise zu beseitigen. Ihr Inhalt wird 90 Tage nach Abweisung einer Meldung oder zwei Jahre nach einer Entscheidung gelöscht.',
      'Server-Backups: Gelöschte Daten verschwinden daraus spätestens nach 30 Tagen.',
    ],
    more: 'Alles darüber, welche Daten wir erheben und wie lange wir sie speichern, steht in der {link}.',
    moreLink: 'Datenschutzerklärung',
    link: 'So löschst du dein Konto, Schritt für Schritt',
  },
  tr: {
    footer: 'Hesap silme',
    title: 'Hesap silme',
    description: 'Niyyah hesabını uygulamada veya e-postayla nasıl silebileceğin, nelerin silindiği, nelerin kaldığı ve ne kadar süre saklandığı.',
    intro: 'Niyyah hesabını istediğin zaman uygulamadan kendin silebilirsin. Uygulamaya artık erişemiyorsan bize yaz, hesabını biz silelim.',
    appTitle: 'Uygulamada',
    appSteps: [
      'Niyyah’ı aç ve silmek istediğin hesapla giriş yap.',
      'Alttaki çubukta “Profil”e dokun.',
      '“Hesap” bölümünü aç.',
      'Ekranın en altında, kırmızı kutudaki “Hesabı sil”e dokun.',
      'Uygulama nelerin silineceğini gösterir ve “Bunun yerine duraklat” seçeneğini sunar. Yine de silmek istiyorsan tekrar “Hesabı sil”e dokun.',
      'Giriş yaptığın şekilde kendin olduğunu onayla: şifrenle, e-postana gönderdiğimiz kodla, “Google ile onayla” veya “Apple ile onayla” düğmesiyle ya da SİL kelimesini yazarak. Bu adımda önce verilerinin bir kopyasını e-postayla isteyebilirsin.',
      '“Hesabı kalıcı olarak sil”e dokun. Hesap hemen silinir ve oturumun kapanır.',
    ],
    appNote: 'Sadece mola istiyorsan hiçbir şeyi silmen gerekmez: profilini duraklatabilir veya hesabını geçici olarak devre dışı bırakıp daha sonra geri dönebilirsin.',
    emailTitle: 'Uygulama olmadan, e-postayla',
    emailBody: 'Hesabına bağlı e-posta adresinden {email} adresine yaz (Google veya Apple ile giriş yapıyorsan bu, o hesabın adresidir) ve hesabının silinmesini istediğini belirt. Başka bir adresten yazarsan önce hesabın sana ait olduğunu doğrularız. Talebinden itibaren en geç 30 gün içinde hesabı siler ve bunu sana e-postayla onaylarız.',
    emailSubject: 'Hesap silme',
    deletedTitle: 'Neler silinir',
    deleted: [
      'Profilin, profil cevapların ve yüz doğrulama fotoğrafı dahil tüm fotoğrafların.',
      'Eşleşmeler, beğeniler, sohbetler ve sesli mesajlar. Seninle olan sohbet karşı taraftan da kaybolur.',
      'Topluluktaki gönderilerin, yorumların ve hikâyelerin.',
      'Mahrem bağlantıları: hem kendi bağlantıların hem de birinin mahremi olduğun bağlantılar.',
      'Bakiyende kalan coinler. İade edilmez ve yeni bir hesaba aktarılmaz.',
      'Girişin: daha sonra aynı e-posta, Google veya Apple hesabıyla tekrar giriş yaparsan yeni ve boş bir hesap açılır.',
    ],
    keptTitle: 'Neler kalır ve ne kadar süre',
    kept: [
      'Muhasebe için, adın olmadan ödeme ve coin kayıtları.',
      'Bir yasağın, engellemenin veya ödenmemiş coinlerin yeni bir hesap açarak atlatılamaması için e-postanın ya da Google veya Apple girişinin şifrelenmiş bir parmak izi.',
      'Hesabını ilgilendiren şikâyetler, hesap silmek delil ortadan kaldırmanın bir yolu olmasın diye kalır. İçerikleri, şikâyet reddedildikten 90 gün sonra veya bir karardan iki yıl sonra silinir.',
      'Sunucu yedekleri: silinen veriler en geç 30 gün içinde yedeklerden de kaybolur.',
    ],
    more: 'Hangi verileri topladığımız ve ne kadar sakladığımızla ilgili her şey {link} içinde yer alıyor.',
    moreLink: 'Gizlilik Politikası',
    link: 'Hesabını adım adım nasıl silersin',
  },
  fr: {
    footer: 'Supprimer le compte',
    title: 'Supprimer ton compte',
    description: 'Comment supprimer ton compte Niyyah dans l’app ou par e-mail, ce qui est supprimé, et ce qui est conservé et combien de temps.',
    intro: 'Tu peux supprimer toi-même ton compte Niyyah dans l’app, à tout moment. Si tu n’as plus accès à l’app, écris-nous et nous le supprimerons pour toi.',
    appTitle: 'Dans l’application',
    appSteps: [
      'Ouvre Niyyah et connecte-toi au compte que tu veux supprimer.',
      'Dans la barre du bas, touche « Profil ».',
      'Ouvre « Compte ».',
      'Tout en bas de l’écran, dans le cadre rouge, touche « Supprimer le compte ».',
      'L’app montre ce qui sera supprimé et propose « Plutôt mettre en pause ». Si tu veux quand même supprimer, touche à nouveau « Supprimer le compte ».',
      'Confirme que c’est bien toi, de la même façon que tu te connectes : avec ton mot de passe, avec un code que nous envoyons à ton adresse e-mail, avec le bouton « Confirmer avec Google » ou « Confirmer avec Apple », ou en tapant le mot SUPPRIMER. À cette étape, tu peux d’abord demander une copie de tes données par e-mail.',
      'Touche « Supprimer définitivement le compte ». Le compte est supprimé immédiatement et ta session se ferme.',
    ],
    appNote: 'Si tu as seulement besoin d’une pause, tu n’as rien à supprimer : tu peux mettre ton profil en pause ou désactiver ton compte pour le moment, et revenir plus tard.',
    emailTitle: 'Sans l’application, par e-mail',
    emailBody: 'Écris à {email} depuis l’adresse e-mail liée à ton compte (si tu te connectes avec Google ou Apple, c’est l’adresse de ce compte) en indiquant que tu veux supprimer ton compte. Si tu écris depuis une autre adresse, nous vérifierons d’abord que le compte est bien le tien. Nous supprimons le compte et te le confirmons par e-mail dans les 30 jours suivant ta demande.',
    emailSubject: 'Suppression de compte',
    deletedTitle: 'Ce qui est supprimé',
    deleted: [
      'Ton profil, tes réponses de profil et toutes tes photos, y compris la photo de vérification du visage.',
      'Les matchs, les likes, les conversations et les messages vocaux. La conversation avec toi disparaît aussi chez l’autre personne.',
      'Tes publications, commentaires et stories dans la communauté.',
      'Les liens avec les mahrams : les tiens, et ceux où tu es le mahram de quelqu’un.',
      'Les coins restant sur ton solde. Ils ne sont pas remboursés et ne passent pas sur un nouveau compte.',
      'Ta connexion : si tu te reconnectes plus tard avec la même adresse e-mail ou le même compte Google ou Apple, un nouveau compte vide est créé.',
    ],
    keptTitle: 'Ce qui est conservé, et combien de temps',
    kept: [
      'Les traces des paiements et des coins, sans ton nom, pour la comptabilité.',
      'Une empreinte chiffrée de ton adresse e-mail ou de ta connexion Google ou Apple, pour qu’un bannissement, un blocage ou des coins impayés ne puissent pas être contournés en ouvrant un nouveau compte.',
      'Les signalements qui concernent ton compte sont conservés, pour que supprimer un compte ne soit pas un moyen d’effacer des preuves. Leur contenu est effacé 90 jours après le rejet d’un signalement, ou deux ans après une décision.',
      'Sauvegardes du serveur : les données supprimées en disparaissent au plus tard sous 30 jours.',
    ],
    more: 'Tout sur les données que nous collectons et la durée de leur conservation se trouve dans la {link}.',
    moreLink: 'politique de confidentialité',
    link: 'Comment supprimer ton compte, étape par étape',
  },
  id: {
    footer: 'Hapus akun',
    title: 'Menghapus akun',
    description: 'Cara menghapus akun Niyyah di aplikasi atau lewat email, apa yang dihapus, dan apa yang tetap disimpan serta berapa lama.',
    intro: 'Kamu bisa menghapus akun Niyyah sendiri di aplikasi kapan saja. Jika kamu tidak bisa lagi masuk ke aplikasi, kirimi kami email dan kami yang akan menghapusnya.',
    appTitle: 'Di aplikasi',
    appSteps: [
      'Buka Niyyah dan masuk ke akun yang ingin kamu hapus.',
      'Ketuk “Profil” di bilah bawah.',
      'Buka “Akun”.',
      'Di bagian paling bawah layar, di kotak merah, ketuk “Hapus akun”.',
      'Aplikasi menunjukkan apa yang akan dihapus dan menawarkan “Jeda saja”. Jika tetap ingin menghapus, ketuk “Hapus akun” sekali lagi.',
      'Konfirmasi bahwa itu memang kamu, dengan cara yang sama seperti kamu masuk: dengan kata sandi, dengan kode yang kami kirim ke email-mu, dengan tombol “Konfirmasi dengan Google” atau “Konfirmasi dengan Apple”, atau dengan mengetik kata HAPUS. Di langkah ini kamu bisa lebih dulu meminta salinan datamu lewat email.',
      'Ketuk “Hapus akun permanen”. Akun langsung dihapus dan kamu keluar dari aplikasi.',
    ],
    appNote: 'Jika kamu hanya butuh istirahat, tidak perlu menghapus apa pun: kamu bisa menjeda profil atau menonaktifkan akun untuk sementara, lalu kembali nanti.',
    emailTitle: 'Tanpa aplikasi, lewat email',
    emailBody: 'Kirim email ke {email} dari alamat email yang terhubung dengan akunmu (jika kamu masuk dengan Google atau Apple, itu alamat akun tersebut) dan sampaikan bahwa kamu ingin akunmu dihapus. Jika kamu menulis dari alamat lain, kami akan memastikan dulu bahwa akun itu milikmu. Kami menghapus akun dan mengonfirmasinya kepadamu lewat email paling lambat 30 hari sejak permintaanmu.',
    emailSubject: 'Penghapusan akun',
    deletedTitle: 'Apa yang dihapus',
    deleted: [
      'Profil, jawaban profil, dan semua fotomu, termasuk foto verifikasi wajah.',
      'Match, suka, percakapan, dan pesan suara. Percakapan denganmu juga hilang dari pihak lain.',
      'Postingan, komentar, dan ceritamu di komunitas.',
      'Hubungan mahram: milikmu sendiri, dan yang menjadikanmu mahram bagi seseorang.',
      'Koin yang tersisa di saldomu. Koin tidak dikembalikan dan tidak dipindahkan ke akun baru.',
      'Login-mu: jika nanti kamu masuk lagi dengan email, akun Google, atau akun Apple yang sama, akun baru yang kosong akan dibuat.',
    ],
    keptTitle: 'Apa yang tetap disimpan dan berapa lama',
    kept: [
      'Catatan pembayaran dan koin, tanpa namamu, untuk keperluan akuntansi.',
      'Sidik jari terenkripsi dari email atau login Google atau Apple-mu, agar larangan, blokir, atau koin yang belum dibayar tidak bisa dihindari dengan membuat akun baru.',
      'Laporan yang melibatkan akunmu tetap disimpan, agar menghapus akun tidak menjadi cara untuk menghilangkan bukti. Isinya dihapus 90 hari setelah laporan ditolak, atau dua tahun setelah ada keputusan.',
      'Cadangan server: data yang dihapus hilang dari cadangan paling lambat dalam 30 hari.',
    ],
    more: 'Semua tentang data yang kami kumpulkan dan berapa lama kami menyimpannya ada di {link}.',
    moreLink: 'Kebijakan Privasi',
    link: 'Cara menghapus akunmu, langkah demi langkah',
  },
  ms: {
    footer: 'Padam akaun',
    title: 'Memadam akaun',
    description: 'Cara memadam akaun Niyyah dalam aplikasi atau melalui e-mel, apa yang dipadam, dan apa yang disimpan serta berapa lama.',
    intro: 'Anda boleh memadam akaun Niyyah sendiri dalam aplikasi pada bila-bila masa. Jika anda tidak lagi dapat masuk ke aplikasi, tulis kepada kami dan kami akan memadamnya untuk anda.',
    appTitle: 'Dalam aplikasi',
    appSteps: [
      'Buka Niyyah dan log masuk ke akaun yang ingin anda padam.',
      'Ketik “Profil” di bar bawah.',
      'Buka “Akaun”.',
      'Di bahagian paling bawah skrin, dalam kotak merah, ketik “Padam akaun”.',
      'Aplikasi menunjukkan apa yang akan dipadam dan menawarkan “Jeda sahaja”. Jika anda tetap mahu memadam, ketik “Padam akaun” sekali lagi.',
      'Sahkan bahawa itu memang anda, dengan cara yang sama anda log masuk: dengan kata laluan, dengan kod yang kami hantar ke e-mel anda, dengan butang “Sahkan dengan Google” atau “Sahkan dengan Apple”, atau dengan menaip perkataan PADAM. Pada langkah ini anda boleh terlebih dahulu meminta salinan data anda melalui e-mel.',
      'Ketik “Padam akaun secara kekal”. Akaun dipadam serta-merta dan anda dilog keluar.',
    ],
    appNote: 'Jika anda hanya perlukan rehat, anda tidak perlu memadam apa-apa: anda boleh menjeda profil atau menyahaktifkan akaun buat sementara, dan kembali kemudian.',
    emailTitle: 'Tanpa aplikasi, melalui e-mel',
    emailBody: 'Tulis kepada {email} daripada alamat e-mel yang dipautkan dengan akaun anda (jika anda log masuk dengan Google atau Apple, itulah alamat akaun tersebut) dan nyatakan bahawa anda mahu akaun anda dipadam. Jika anda menulis daripada alamat lain, kami akan terlebih dahulu memastikan akaun itu milik anda. Kami memadam akaun dan mengesahkannya kepada anda melalui e-mel dalam tempoh 30 hari dari permintaan anda.',
    emailSubject: 'Pemadaman akaun',
    deletedTitle: 'Apa yang dipadam',
    deleted: [
      'Profil, jawapan profil dan semua foto anda, termasuk foto pengesahan wajah.',
      'Padanan, suka, perbualan dan mesej suara. Perbualan dengan anda turut hilang daripada pihak yang satu lagi.',
      'Hantaran, komen dan cerita anda dalam komuniti.',
      'Hubungan mahram: milik anda sendiri, dan yang menjadikan anda mahram kepada seseorang.',
      'Coin yang masih ada dalam baki anda. Ia tidak dikembalikan dan tidak dipindahkan ke akaun baharu.',
      'Log masuk anda: jika kemudian anda log masuk semula dengan e-mel, akaun Google atau akaun Apple yang sama, akaun baharu yang kosong akan dibuat.',
    ],
    keptTitle: 'Apa yang disimpan dan berapa lama',
    kept: [
      'Rekod pembayaran dan coin, tanpa nama anda, untuk perakaunan.',
      'Cap jari yang disulitkan bagi e-mel atau log masuk Google atau Apple anda, supaya larangan, sekatan atau coin yang belum dibayar tidak dapat dielakkan dengan membuka akaun baharu.',
      'Laporan yang melibatkan akaun anda kekal disimpan, supaya memadam akaun bukan cara untuk menghapuskan bukti. Kandungannya dipadam 90 hari selepas laporan ditolak, atau dua tahun selepas keputusan dibuat.',
      'Sandaran pelayan: data yang dipadam hilang daripadanya selewat-lewatnya dalam 30 hari.',
    ],
    more: 'Semua tentang data yang kami kumpul dan berapa lama kami menyimpannya ada dalam {link}.',
    moreLink: 'Dasar Privasi',
    link: 'Cara memadam akaun anda, langkah demi langkah',
  },
  ar: {
    footer: 'حذف الحساب',
    title: 'حذف الحساب',
    description: 'كيف تحذف حسابك في Niyyah من التطبيق أو عبر البريد الإلكتروني، وما الذي يُحذف، وما الذي يُحتفظ به ولأي مدة.',
    intro: 'يمكنك حذف حسابك في Niyyah بنفسك من التطبيق في أي وقت. وإن لم تعد تستطيع الدخول إلى التطبيق، فراسلنا وسنحذفه نحن.',
    appTitle: 'من داخل التطبيق',
    appSteps: [
      'افتح Niyyah وسجّل الدخول إلى الحساب الذي تريد حذفه.',
      'اضغط على «الملف الشخصي» في الشريط السفلي.',
      'افتح «الحساب».',
      'في أسفل الشاشة، داخل الإطار الأحمر، اضغط على «حذف الحساب».',
      'يعرض التطبيق ما سيُحذف ويقترح «الإيقاف المؤقت بدلًا من ذلك». وإن أردت الحذف رغم ذلك، فاضغط على «حذف الحساب» مرة أخرى.',
      'أكّد أنك صاحب الحساب بالطريقة التي تسجّل بها الدخول: بكلمة المرور، أو برمز نرسله إلى بريدك الإلكتروني، أو بزر «التأكيد عبر Google» أو «التأكيد عبر Apple»، أو بكتابة كلمة «حذف». وفي هذه الخطوة يمكنك أولًا طلب نسخة من بياناتك عبر البريد.',
      'اضغط على «حذف الحساب نهائيًا». يُحذف الحساب فورًا ويُسجَّل خروجك.',
    ],
    appNote: 'إن كنت تحتاج إلى استراحة فقط، فلا داعي لحذف أي شيء: يمكنك إيقاف ملفك الشخصي مؤقتًا أو إيقاف حسابك مؤقتًا، ثم العودة لاحقًا.',
    emailTitle: 'من دون التطبيق، عبر البريد الإلكتروني',
    emailBody: 'راسلنا على {email} من عنوان البريد الإلكتروني المرتبط بحسابك (إن كنت تسجّل الدخول عبر Google أو Apple فهو عنوان ذلك الحساب) واذكر أنك تريد حذف حسابك. وإن راسلتنا من عنوان آخر، فسنتحقق أولًا من أن الحساب لك. نحذف الحساب ونؤكد لك ذلك بالبريد الإلكتروني خلال 30 يومًا من طلبك.',
    emailSubject: 'حذف الحساب',
    deletedTitle: 'ما الذي يُحذف',
    deleted: [
      'ملفك الشخصي وإجاباتك فيه وجميع صورك، بما فيها صورة التحقق من الوجه.',
      'التوافقات والإعجابات والمحادثات والرسائل الصوتية. وتختفي المحادثة معك لدى الطرف الآخر أيضًا.',
      'منشوراتك وتعليقاتك وقصصك في المجتمع.',
      'روابط المحرم: روابطك أنت، والروابط التي تكون فيها محرمًا لشخص ما.',
      'العملات المتبقية في رصيدك. لا تُسترد ولا تُنقل إلى حساب جديد.',
      'تسجيل دخولك: إن سجّلت الدخول لاحقًا بالبريد نفسه أو بحساب Google أو Apple نفسه، يُنشأ حساب جديد فارغ.',
    ],
    keptTitle: 'ما الذي يبقى ولأي مدة',
    kept: [
      'سجلات المدفوعات والعملات، من دون اسمك، لأغراض المحاسبة.',
      'بصمة مشفّرة لبريدك الإلكتروني أو لتسجيل دخولك عبر Google أو Apple، حتى لا يمكن التهرّب من حظر أو حجب أو عملات غير مدفوعة بفتح حساب جديد.',
      'تبقى البلاغات المتعلقة بحسابك، حتى لا يكون حذف الحساب وسيلة لإزالة الأدلة. ويُمسح محتواها بعد 90 يومًا من رفض البلاغ، أو بعد سنتين من صدور قرار بشأنه.',
      'النسخ الاحتياطية للخادم: تختفي منها البيانات المحذوفة خلال 30 يومًا على الأكثر.',
    ],
    more: 'كل ما يتعلق بالبيانات التي نجمعها ومدة الاحتفاظ بها موجود في {link}.',
    moreLink: 'سياسة الخصوصية',
    link: 'كيف تحذف حسابك خطوة بخطوة',
  },
  ur: {
    footer: 'اکاؤنٹ حذف کریں',
    title: 'اکاؤنٹ حذف کرنا',
    description: 'Niyyah اکاؤنٹ ایپ میں یا ای میل کے ذریعے کیسے حذف کریں، کیا حذف ہوتا ہے، اور کیا رکھا جاتا ہے اور کتنی دیر کے لیے۔',
    intro: 'آپ اپنا Niyyah اکاؤنٹ کسی بھی وقت خود ایپ میں حذف کر سکتے ہیں۔ اگر اب آپ ایپ تک نہیں پہنچ سکتے تو ہمیں لکھیں، ہم اسے آپ کے لیے حذف کر دیں گے۔',
    appTitle: 'ایپ میں',
    appSteps: [
      'Niyyah کھولیں اور اس اکاؤنٹ میں سائن اِن کریں جسے آپ حذف کرنا چاہتے ہیں۔',
      'نیچے والی پٹی میں ”پروفائل“ پر ٹیپ کریں۔',
      '”اکاؤنٹ“ کھولیں۔',
      'اسکرین کے بالکل نیچے، سرخ خانے میں ”اکاؤنٹ حذف کریں“ پر ٹیپ کریں۔',
      'ایپ بتاتی ہے کہ کیا حذف ہوگا اور ”اس کے بجائے روکیں“ کا اختیار دیتی ہے۔ اگر پھر بھی حذف کرنا ہے تو دوبارہ ”اکاؤنٹ حذف کریں“ پر ٹیپ کریں۔',
      'تصدیق کریں کہ یہ آپ ہی ہیں، اسی طرح جیسے آپ سائن اِن کرتے ہیں: اپنے پاس ورڈ سے، اس کوڈ سے جو ہم آپ کی ای میل پر بھیجتے ہیں، ”Google کے ذریعے تصدیق کریں“ یا ”Apple کے ذریعے تصدیق کریں“ کے بٹن سے، یا لفظ ”حذف“ لکھ کر۔ اس مرحلے پر آپ پہلے اپنے ڈیٹا کی کاپی ای میل پر منگوا سکتے ہیں۔',
      '”اکاؤنٹ مستقل طور پر حذف کریں“ پر ٹیپ کریں۔ اکاؤنٹ فوراً حذف ہو جاتا ہے اور آپ سائن آؤٹ ہو جاتے ہیں۔',
    ],
    appNote: 'اگر آپ کو صرف وقفہ چاہیے تو کچھ حذف کرنے کی ضرورت نہیں: آپ اپنا پروفائل روک سکتے ہیں یا اکاؤنٹ عارضی طور پر غیر فعال کر سکتے ہیں، اور بعد میں واپس آ سکتے ہیں۔',
    emailTitle: 'ایپ کے بغیر، ای میل کے ذریعے',
    emailBody: 'اپنے اکاؤنٹ سے منسلک ای میل ایڈریس سے {email} پر لکھیں (اگر آپ Google یا Apple سے سائن اِن کرتے ہیں تو یہ اسی اکاؤنٹ کا ایڈریس ہے) اور بتائیں کہ آپ اپنا اکاؤنٹ حذف کروانا چاہتے ہیں۔ اگر آپ کسی دوسرے ایڈریس سے لکھیں تو ہم پہلے تصدیق کریں گے کہ اکاؤنٹ آپ ہی کا ہے۔ ہم آپ کی درخواست کے 30 دن کے اندر اکاؤنٹ حذف کر کے آپ کو ای میل پر اس کی تصدیق بھیجتے ہیں۔',
    emailSubject: 'اکاؤنٹ حذف کرنا',
    deletedTitle: 'کیا حذف ہوتا ہے',
    deleted: [
      'آپ کا پروفائل، پروفائل کے جوابات اور تمام تصاویر، بشمول چہرے کی تصدیق والی تصویر۔',
      'میچز، لائکس، گفتگو اور صوتی پیغامات۔ آپ کے ساتھ گفتگو دوسرے شخص کے پاس سے بھی غائب ہو جاتی ہے۔',
      'کمیونٹی میں آپ کی پوسٹس، تبصرے اور اسٹوریز۔',
      'محرم کے روابط: آپ کے اپنے، اور وہ جن میں آپ کسی کے محرم ہیں۔',
      'آپ کے بیلنس میں باقی کوائنز۔ یہ واپس نہیں ہوتے اور نئے اکاؤنٹ میں منتقل نہیں ہوتے۔',
      'آپ کا سائن اِن: اگر بعد میں آپ اسی ای میل، Google یا Apple اکاؤنٹ سے دوبارہ سائن اِن کریں تو ایک نیا، خالی اکاؤنٹ بنتا ہے۔',
    ],
    keptTitle: 'کیا باقی رہتا ہے اور کتنی دیر',
    kept: [
      'ادائیگیوں اور کوائنز کا ریکارڈ، آپ کے نام کے بغیر، حساب کتاب کے لیے۔',
      'آپ کی ای میل یا Google یا Apple سائن اِن کا ایک انکرپٹ شدہ فنگر پرنٹ، تاکہ نیا اکاؤنٹ بنا کر پابندی، بلاک یا غیر ادا شدہ کوائنز سے بچا نہ جا سکے۔',
      'آپ کے اکاؤنٹ سے متعلق رپورٹس باقی رہتی ہیں، تاکہ اکاؤنٹ حذف کرنا ثبوت مٹانے کا ذریعہ نہ بنے۔ ان کا مواد رپورٹ مسترد ہونے کے 90 دن بعد، یا فیصلے کے دو سال بعد مٹا دیا جاتا ہے۔',
      'سرور بیک اپ: حذف شدہ ڈیٹا ان سے زیادہ سے زیادہ 30 دن میں ختم ہو جاتا ہے۔',
    ],
    more: 'ہم کون سا ڈیٹا جمع کرتے ہیں اور اسے کتنی دیر رکھتے ہیں، اس کی پوری تفصیل {link} میں ہے۔',
    moreLink: 'پرائیویسی پالیسی',
    link: 'اپنا اکاؤنٹ قدم بہ قدم کیسے حذف کریں',
  },
}
