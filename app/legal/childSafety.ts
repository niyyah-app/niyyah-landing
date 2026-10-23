import type { LegalLocale } from './content'

// Standardi zaštite djece (CSAE): javna stranica koju Google Play traži od
// aplikacija za upoznavanje i društvenih aplikacija (Play Console → Policy →
// App content → Child safety standards).
//
// Ručno pisano, kao `deletion.ts` i `support.ts`. Mora se držati u skladu s:
//   - internim postupkom (niyyah/docs/CSAM_PROCEDURE.md) — šta server i
//     moderator stvarno rade s prijavom `child_safety`;
//   - aplikacijom: nazivi razloga prijave su tačno oni iz ARB-ova tog jezika
//     (`report_child_safety`, `report_underage`);
//   - politikom privatnosti (provjera lica procjenjuje dob, priče novih
//     naloga čekaju moderatora, objave čita moderator prije objave).
//
// Jezici su isti kao za politiku i uslove (jezici aplikacije); ostali
// jezici stranice vode na engleski.

export type ChildSafetyCopy = {
  /** Kratak naziv za podnožje. */
  footer: string
  title: string
  description: string
  intro: string
  standardsTitle: string
  standards: string[]
  reportTitle: string
  reportSteps: string[]
  reportNote: string
  emailTitle: string
  /** `{email}` postaje link na adresu podrške. */
  emailBody: string
  emailSubject: string
  actionTitle: string
  actions: string[]
  /** `{link}` postaje link na inhope.org. */
  emergency: string
  contactTitle: string
  /** `{email}` postaje link na adresu podrške. */
  contactBody: string
}

export const childSafety: Record<LegalLocale, ChildSafetyCopy> = {
  bs: {
    footer: 'Sigurnost djece',
    title: 'Standardi zaštite djece',
    description: 'Standardi Niyyah protiv seksualnog zlostavljanja i iskorištavanja djece (CSAE), kako to prijaviti i kome se obratiti.',
    intro: 'Niyyah je aplikacija za brak, samo za punoljetne. Prema seksualnom zlostavljanju i iskorištavanju djece (CSAE) i materijalu koji prikazuje seksualno zlostavljanje djece (CSAM) imamo nultu toleranciju. Ovi standardi važe za sve u aplikaciji: profile, fotografije, poruke, glasovne poruke, objave u zajednici, komentare i priče.',
    standardsTitle: 'Naši standardi',
    standards: [
      'Samo za punoljetne. Niyyah je za osobe od 18 godina naviše. Datum rođenja je obavezan pri registraciji, a naš server odbija svakog mlađeg od 18. Nalog za koji utvrdimo da pripada osobi mlađoj od 18 zatvaramo.',
      'Zabranjeno bez izuzetka: svaka slika, video, snimak ili tekst koji seksualizira dijete; traženje takvog materijala; vrbovanje (grooming) i pokušaj da se stupi u kontakt ili sastane s maloljetnikom; seksualna iznuda; i svaki oblik trgovine ljudima. To zabranjuju naši uslovi korištenja i pravila ponašanja, koje svaki član prihvata prije korištenja aplikacije.',
      'Sprečavanje: objave u zajednici čita moderator prije nego što se pojave; priče novih i neprovjerenih naloga čekaju moderatora; provjera lica procjenjuje dob, pa svakog ko bi mogao biti mlađi od 18 pregleda čovjek.',
      'Poruke se otvaraju tek kad oboje pokažu interes.',
    ],
    reportTitle: 'Kako prijaviti u aplikaciji',
    reportSteps: [
      'Na profilu, u razgovoru, na objavi, komentaru ili priči otvori meni (⋯) i izaberi prijavu.',
      'Izaberi razlog „Seksualno iskorištavanje djeteta“. Ako misliš da je osoba mlađa od 18, izaberi „Maloljetna osoba“.',
      'Ako želiš, dodaj detalje i pošalji. Prijave su povjerljive: osoba nikad ne saznaje ko ju je prijavio.',
    ],
    reportNote: 'Prijava zbog sigurnosti djeteta ide na sam vrh reda moderatora. Takav sadržaj nemoj prosljeđivati, čuvati ni slikati ekran — prijava je dovoljna.',
    emailTitle: 'Bez aplikacije',
    emailBody: 'Možeš pisati i na {email}, i ako nisi član. Opiši šta si vidio/la i gdje (ime člana ili link). Sam materijal nemoj prilagati.',
    emailSubject: 'Sigurnost djece',
    actionTitle: 'Šta mi radimo',
    actions: [
      'Prijavljeni sadržaj se odmah sklanja svima, a profil izlazi iz Otkrij.',
      'Kopija se čuva kao dokaz, šifrovano i bez javnog pristupa, da bi se mogla predati nadležnima. Pristup imaju samo administratori, i samo u tu svrhu.',
      'Moderator pregleda prijavu u roku od nekoliko sati. Potvrđeno zlostavljanje znači trajnu zabranu, koja osobu prati i na svaki nov nalog s istom e-mail adresom ili istim Google ili Apple nalogom.',
      'Potvrđen materijal i iskorištavanje djece bez odgađanja prijavljujemo nadležnima — policiji i nacionalnoj liniji mreže INHOPE u odgovarajućoj zemlji — i sarađujemo s organima na njihov zahtjev.',
      'Ako nalog pripada maloljetnoj osobi, zatvaramo ga i pregledamo razgovore koje je vodio.',
    ],
    emergency: 'Ako je dijete u neposrednoj opasnosti, prvo pozovi policiju ili broj za hitne slučajeve. Materijal koji prikazuje seksualno zlostavljanje djece možeš prijaviti i direktno liniji svoje zemlje preko {link}.',
    contactTitle: 'Kontakt za sigurnost djece',
    contactBody: 'Naš određeni kontakt za sigurnost djece, za članove i za nadležne organe, je {email} (naslov „Sigurnost djece“). Niyyah pruža Puzzles IT OÜ iz Estonije, koji poštuje važeće zakone o zaštiti djece, uključujući pravo EU i zakone zemalja u kojima se aplikacija nudi.',
  },
  en: {
    footer: 'Child safety',
    title: 'Child safety standards',
    description: 'Niyyah’s standards against child sexual abuse and exploitation (CSAE), how to report it, and who to contact.',
    intro: 'Niyyah is a marriage app for adults only. We have zero tolerance for child sexual abuse and exploitation (CSAE) and for child sexual abuse material (CSAM). These standards apply to everything in the app: profiles, photos, messages, voice messages, community posts, comments and stories.',
    standardsTitle: 'Our standards',
    standards: [
      'Adults only. Niyyah is for people aged 18 and over. A date of birth is required at sign-up, and our server refuses anyone under 18. An account we find belongs to someone under 18 is closed.',
      'Forbidden without exception: any image, video, recording or text that sexualises a child; asking for such material; grooming, or trying to contact or meet a minor; sexual extortion; and any form of trafficking. Our terms of service and community guidelines forbid it, and every member accepts them before using the app.',
      'Prevention: community posts are read by a moderator before they appear; stories from new and unverified accounts wait for a moderator; and the face check estimates age, so anyone who may be under 18 is reviewed by a person.',
      'Messages only open once both people have shown interest.',
    ],
    reportTitle: 'How to report in the app',
    reportSteps: [
      'On the profile, conversation, post, comment or story, open the menu (⋯) and choose to report.',
      'Choose the reason “Child sexual exploitation”. If you think the person is under 18, choose “Underage person”.',
      'Add details if you like, and send. Reports are confidential: the person is never told who reported them.',
    ],
    reportNote: 'A child-safety report goes to the very top of the moderators’ queue. Do not forward, save or screenshot such content — the report is enough.',
    emailTitle: 'Without the app',
    emailBody: 'You can also write to {email}, even if you are not a member. Describe what you saw and where (the member’s name or a link). Do not attach the material itself.',
    emailSubject: 'Child safety',
    actionTitle: 'What we do',
    actions: [
      'The reported content is hidden from everyone immediately, and the profile is taken out of Discover.',
      'A copy is kept as evidence, encrypted and with no public access, so that it can be handed to the authorities. Only administrators can reach it, and only for that purpose.',
      'A moderator reviews the report within hours. Confirmed abuse means a permanent ban, which also follows the person to any new account with the same email address or Google or Apple account.',
      'We report confirmed child sexual abuse material and exploitation to the competent authorities — the police and the national hotline of the INHOPE network in the country concerned — without delay, and we cooperate with requests from law enforcement.',
      'If an account belongs to a minor, we close it and review the conversations it had.',
    ],
    emergency: 'If a child is in immediate danger, call the police or your local emergency number first. You can also report child sexual abuse material directly to your country’s hotline through {link}.',
    contactTitle: 'Child safety contact',
    contactBody: 'Our designated contact for child safety, for members and for authorities, is {email} (subject “Child safety”). Niyyah is provided by Puzzles IT OÜ, Estonia, which complies with applicable child-safety laws, including EU law and the laws of the countries in which the app is offered.',
  },
  de: {
    footer: 'Kinderschutz',
    title: 'Standards zum Schutz von Kindern',
    description: 'Die Standards von Niyyah gegen sexuellen Missbrauch und sexuelle Ausbeutung von Kindern (CSAE), wie man sie meldet und an wen man sich wendet.',
    intro: 'Niyyah ist eine Heirats-App nur für Erwachsene. Gegenüber sexuellem Missbrauch und sexueller Ausbeutung von Kindern (CSAE) und Darstellungen sexuellen Kindesmissbrauchs (CSAM) haben wir null Toleranz. Diese Standards gelten für alles in der App: Profile, Fotos, Nachrichten, Sprachnachrichten, Beiträge in der Community, Kommentare und Storys.',
    standardsTitle: 'Unsere Standards',
    standards: [
      'Nur für Erwachsene. Niyyah ist für Menschen ab 18 Jahren. Bei der Registrierung ist das Geburtsdatum Pflicht, und unser Server lehnt alle unter 18 ab. Ein Konto, das nachweislich einer Person unter 18 gehört, schließen wir.',
      'Ausnahmslos verboten: jedes Bild, Video, jede Aufnahme oder jeder Text, der ein Kind sexualisiert; das Verlangen nach solchem Material; Grooming und der Versuch, mit Minderjährigen Kontakt aufzunehmen oder sie zu treffen; sexuelle Erpressung; und jede Form von Menschenhandel. Das verbieten unsere Nutzungsbedingungen und Verhaltensregeln, die jedes Mitglied vor der Nutzung der App akzeptiert.',
      'Vorbeugung: Beiträge in der Community liest ein Moderator, bevor sie erscheinen; Storys neuer und nicht verifizierter Konten warten auf einen Moderator; und die Gesichtsprüfung schätzt das Alter, sodass jeder, der unter 18 sein könnte, von einem Menschen geprüft wird.',
      'Nachrichten öffnen sich erst, wenn beide Interesse gezeigt haben.',
    ],
    reportTitle: 'So meldest du in der App',
    reportSteps: [
      'Öffne im Profil, im Chat, bei einem Beitrag, Kommentar oder einer Story das Menü (⋯) und wähle „Melden“.',
      'Wähle den Grund „Sexuelle Ausbeutung eines Kindes“. Wenn du glaubst, dass die Person unter 18 ist, wähle „Minderjährige Person“.',
      'Füge auf Wunsch Details hinzu und sende ab. Meldungen sind vertraulich: Die Person erfährt nie, wer sie gemeldet hat.',
    ],
    reportNote: 'Eine Meldung zum Kinderschutz kommt ganz oben in die Warteschlange der Moderatoren. Leite solche Inhalte nicht weiter, speichere sie nicht und mache keine Screenshots — die Meldung genügt.',
    emailTitle: 'Ohne die App',
    emailBody: 'Du kannst auch an {email} schreiben, auch wenn du kein Mitglied bist. Beschreibe, was du gesehen hast und wo (Name des Mitglieds oder ein Link). Hänge das Material selbst nicht an.',
    emailSubject: 'Kinderschutz',
    actionTitle: 'Was wir tun',
    actions: [
      'Der gemeldete Inhalt wird sofort für alle ausgeblendet, und das Profil verschwindet aus „Entdecken“.',
      'Eine Kopie wird als Beweis verschlüsselt und ohne öffentlichen Zugang aufbewahrt, damit sie den Behörden übergeben werden kann. Zugriff haben nur Administratoren, und nur zu diesem Zweck.',
      'Ein Moderator prüft die Meldung innerhalb weniger Stunden. Bestätigter Missbrauch bedeutet eine dauerhafte Sperre, die der Person auch auf jedes neue Konto mit derselben E-Mail-Adresse oder demselben Google- oder Apple-Konto folgt.',
      'Bestätigtes Missbrauchsmaterial und bestätigte Ausbeutung von Kindern melden wir unverzüglich den zuständigen Behörden — der Polizei und der nationalen Meldestelle des INHOPE-Netzwerks im betreffenden Land — und wir arbeiten auf Anfrage mit den Strafverfolgungsbehörden zusammen.',
      'Gehört ein Konto einer minderjährigen Person, schließen wir es und prüfen die Gespräche, die es geführt hat.',
    ],
    emergency: 'Ist ein Kind in unmittelbarer Gefahr, ruf zuerst die Polizei oder den Notruf an. Darstellungen sexuellen Kindesmissbrauchs kannst du auch direkt bei der Meldestelle deines Landes über {link} melden.',
    contactTitle: 'Kontakt für Kinderschutz',
    contactBody: 'Unser benannter Kontakt für Kinderschutz, für Mitglieder und für Behörden, ist {email} (Betreff „Kinderschutz“). Niyyah wird von Puzzles IT OÜ, Estland, angeboten, das die geltenden Gesetze zum Schutz von Kindern einhält, einschließlich des EU-Rechts und der Gesetze der Länder, in denen die App angeboten wird.',
  },
  tr: {
    footer: 'Çocuk güvenliği',
    title: 'Çocuk koruma standartları',
    description: 'Niyyah’ın çocukların cinsel istismarına ve sömürüsüne (CSAE) karşı standartları, nasıl bildirileceği ve kime başvurulacağı.',
    intro: 'Niyyah yalnızca yetişkinlere yönelik bir evlilik uygulamasıdır. Çocukların cinsel istismarına ve sömürüsüne (CSAE) ve çocuk cinsel istismarı içeren materyale (CSAM) karşı sıfır toleransımız var. Bu standartlar uygulamadaki her şey için geçerlidir: profiller, fotoğraflar, mesajlar, sesli mesajlar, topluluk gönderileri, yorumlar ve hikâyeler.',
    standardsTitle: 'Standartlarımız',
    standards: [
      'Yalnızca yetişkinler. Niyyah 18 yaş ve üzeri kişiler içindir. Kayıtta doğum tarihi zorunludur ve sunucumuz 18 yaşından küçük herkesi reddeder. 18 yaşından küçük birine ait olduğunu tespit ettiğimiz hesabı kapatırız.',
      'İstisnasız yasak: bir çocuğu cinselleştiren her türlü görüntü, video, kayıt veya metin; böyle bir materyal istemek; çocuğu kandırarak yaklaşma (grooming) ve bir reşit olmayanla iletişime geçmeye veya buluşmaya çalışmak; cinsel şantaj; ve her türlü insan ticareti. Bunu, her üyenin uygulamayı kullanmadan önce kabul ettiği kullanım şartlarımız ve davranış kurallarımız yasaklar.',
      'Önleme: topluluk gönderilerini yayınlanmadan önce bir moderatör okur; yeni ve doğrulanmamış hesapların hikâyeleri moderatörü bekler; yüz doğrulaması yaşı tahmin eder, böylece 18 yaşından küçük olabilecek herkesi bir insan inceler.',
      'Mesajlaşma ancak iki taraf da ilgi gösterdikten sonra açılır.',
    ],
    reportTitle: 'Uygulamada nasıl bildirilir',
    reportSteps: [
      'Profilde, sohbette, gönderide, yorumda veya hikâyede menüyü (⋯) aç ve şikâyet etmeyi seç.',
      '“Çocuğun cinsel istismarı” nedenini seç. Kişinin 18 yaşından küçük olduğunu düşünüyorsan “Reşit olmayan kişi”yi seç.',
      'İstersen ayrıntı ekle ve gönder. Şikâyetler gizlidir: kişiye kimin şikâyet ettiği asla söylenmez.',
    ],
    reportNote: 'Çocuk güvenliğiyle ilgili bir şikâyet moderatörlerin sırasının en başına gider. Böyle bir içeriği iletme, kaydetme veya ekran görüntüsünü alma — şikâyet yeterlidir.',
    emailTitle: 'Uygulama olmadan',
    emailBody: 'Üye olmasan bile {email} adresine yazabilirsin. Ne gördüğünü ve nerede gördüğünü (üyenin adı veya bir bağlantı) anlat. Materyalin kendisini ekleme.',
    emailSubject: 'Çocuk güvenliği',
    actionTitle: 'Ne yapıyoruz',
    actions: [
      'Şikâyet edilen içerik hemen herkesten gizlenir ve profil Keşfet’ten çıkarılır.',
      'Yetkililere teslim edilebilmesi için bir kopyası şifreli ve herkese kapalı biçimde kanıt olarak saklanır. Ona yalnızca yöneticiler ve yalnızca bu amaçla erişebilir.',
      'Bir moderatör şikâyeti birkaç saat içinde inceler. Doğrulanan istismar kalıcı yasak demektir; yasak, aynı e-posta adresi ya da aynı Google veya Apple hesabıyla açılan her yeni hesaba da geçer.',
      'Doğrulanan çocuk istismarı materyalini ve sömürüyü gecikmeden yetkili makamlara — polise ve ilgili ülkedeki INHOPE ağının ulusal ihbar hattına — bildiririz ve kolluk kuvvetlerinin talepleriyle iş birliği yaparız.',
      'Bir hesap reşit olmayan birine aitse kapatır ve yaptığı sohbetleri inceleriz.',
    ],
    emergency: 'Bir çocuk acil tehlikedeyse önce polisi veya acil durum numarasını ara. Çocuk cinsel istismarı materyalini {link} üzerinden doğrudan ülkendeki ihbar hattına da bildirebilirsin.',
    contactTitle: 'Çocuk güvenliği iletişimi',
    contactBody: 'Üyeler ve yetkili makamlar için belirlenmiş çocuk güvenliği iletişim adresimiz {email} (konu: “Çocuk güvenliği”). Niyyah, Estonya’daki Puzzles IT OÜ tarafından sunulur; şirket, AB hukuku ve uygulamanın sunulduğu ülkelerin yasaları dahil olmak üzere çocukların korunmasına ilişkin yürürlükteki yasalara uyar.',
  },
  fr: {
    footer: 'Protection des enfants',
    title: 'Normes de protection des enfants',
    description: 'Les normes de Niyyah contre les abus et l’exploitation sexuels des enfants (CSAE), comment les signaler et qui contacter.',
    intro: 'Niyyah est une application de mariage réservée aux adultes. Nous appliquons une tolérance zéro envers les abus et l’exploitation sexuels des enfants (CSAE) et les contenus d’abus sexuels sur enfants (CSAM). Ces normes s’appliquent à tout dans l’application : profils, photos, messages, messages vocaux, publications de la communauté, commentaires et stories.',
    standardsTitle: 'Nos normes',
    standards: [
      'Réservé aux adultes. Niyyah s’adresse aux personnes de 18 ans et plus. La date de naissance est obligatoire à l’inscription, et notre serveur refuse toute personne de moins de 18 ans. Un compte dont nous constatons qu’il appartient à une personne de moins de 18 ans est fermé.',
      'Interdit sans exception : toute image, vidéo, tout enregistrement ou texte qui sexualise un enfant ; le fait de demander un tel contenu ; la manipulation d’un mineur (grooming) et toute tentative de contacter ou de rencontrer un mineur ; l’extorsion sexuelle ; et toute forme de traite. Nos conditions d’utilisation et nos règles de conduite l’interdisent, et chaque membre les accepte avant d’utiliser l’application.',
      'Prévention : les publications de la communauté sont lues par un modérateur avant de paraître ; les stories des comptes nouveaux ou non vérifiés attendent un modérateur ; et la vérification du visage estime l’âge, de sorte que toute personne qui pourrait avoir moins de 18 ans est examinée par un humain.',
      'Les messages ne s’ouvrent qu’une fois que les deux personnes ont montré de l’intérêt.',
    ],
    reportTitle: 'Comment signaler dans l’application',
    reportSteps: [
      'Sur le profil, la conversation, la publication, le commentaire ou la story, ouvre le menu (⋯) et choisis de signaler.',
      'Choisis le motif « Exploitation sexuelle d’un enfant ». Si tu penses que la personne a moins de 18 ans, choisis « Personne mineure ».',
      'Ajoute des détails si tu veux, puis envoie. Les signalements sont confidentiels : la personne ne sait jamais qui l’a signalée.',
    ],
    reportNote: 'Un signalement lié à la sécurité d’un enfant passe tout en haut de la file des modérateurs. Ne transfère pas, n’enregistre pas et ne fais pas de capture d’écran d’un tel contenu — le signalement suffit.',
    emailTitle: 'Sans l’application',
    emailBody: 'Tu peux aussi écrire à {email}, même si tu n’es pas membre. Décris ce que tu as vu et où (le nom du membre ou un lien). Ne joins pas le contenu lui-même.',
    emailSubject: 'Protection des enfants',
    actionTitle: 'Ce que nous faisons',
    actions: [
      'Le contenu signalé est immédiatement masqué pour tous, et le profil est retiré de Découvrir.',
      'Une copie est conservée comme preuve, chiffrée et sans accès public, afin de pouvoir être remise aux autorités. Seuls les administrateurs y ont accès, et uniquement dans ce but.',
      'Un modérateur examine le signalement en quelques heures. Un abus confirmé entraîne un bannissement définitif, qui suit aussi la personne sur tout nouveau compte avec la même adresse e-mail ou le même compte Google ou Apple.',
      'Nous signalons sans délai les contenus et l’exploitation confirmés aux autorités compétentes — la police et la ligne nationale du réseau INHOPE dans le pays concerné — et nous coopérons avec les demandes des forces de l’ordre.',
      'Si un compte appartient à une personne mineure, nous le fermons et examinons les conversations qu’il a eues.',
    ],
    emergency: 'Si un enfant est en danger immédiat, appelle d’abord la police ou le numéro d’urgence. Tu peux aussi signaler un contenu d’abus sexuel sur enfant directement à la ligne de ton pays via {link}.',
    contactTitle: 'Contact pour la protection des enfants',
    contactBody: 'Notre contact désigné pour la protection des enfants, pour les membres comme pour les autorités, est {email} (objet « Protection des enfants »). Niyyah est fourni par Puzzles IT OÜ, Estonie, qui respecte les lois applicables en matière de protection des enfants, y compris le droit de l’UE et les lois des pays où l’application est proposée.',
  },
  id: {
    footer: 'Keamanan anak',
    title: 'Standar perlindungan anak',
    description: 'Standar Niyyah terhadap pelecehan dan eksploitasi seksual anak (CSAE), cara melaporkannya, dan siapa yang dihubungi.',
    intro: 'Niyyah adalah aplikasi pernikahan khusus orang dewasa. Kami tidak menoleransi sama sekali pelecehan dan eksploitasi seksual anak (CSAE) maupun materi pelecehan seksual anak (CSAM). Standar ini berlaku untuk semua hal di aplikasi: profil, foto, pesan, pesan suara, postingan komunitas, komentar, dan story.',
    standardsTitle: 'Standar kami',
    standards: [
      'Khusus dewasa. Niyyah untuk orang berusia 18 tahun ke atas. Tanggal lahir wajib diisi saat mendaftar, dan server kami menolak siapa pun yang berusia di bawah 18 tahun. Akun yang kami ketahui milik orang di bawah 18 tahun akan kami tutup.',
      'Dilarang tanpa kecuali: gambar, video, rekaman, atau teks apa pun yang menyeksualisasi anak; meminta materi seperti itu; grooming dan upaya menghubungi atau menemui anak di bawah umur; pemerasan seksual; dan segala bentuk perdagangan orang. Hal ini dilarang oleh syarat layanan dan pedoman perilaku kami, yang diterima setiap anggota sebelum memakai aplikasi.',
      'Pencegahan: postingan komunitas dibaca moderator sebelum tampil; story dari akun baru dan yang belum terverifikasi menunggu moderator; dan verifikasi wajah memperkirakan usia, sehingga siapa pun yang mungkin di bawah 18 tahun diperiksa oleh manusia.',
      'Pesan baru terbuka setelah keduanya menunjukkan minat.',
    ],
    reportTitle: 'Cara melapor di aplikasi',
    reportSteps: [
      'Di profil, percakapan, postingan, komentar, atau story, buka menu (⋯) dan pilih untuk melaporkan.',
      'Pilih alasan “Eksploitasi seksual anak”. Jika menurutmu orang itu di bawah 18 tahun, pilih “Orang di bawah umur”.',
      'Tambahkan detail jika mau, lalu kirim. Laporan bersifat rahasia: orang itu tidak pernah diberi tahu siapa yang melaporkannya.',
    ],
    reportNote: 'Laporan terkait keamanan anak langsung masuk ke urutan teratas antrean moderator. Jangan meneruskan, menyimpan, atau mengambil tangkapan layar konten seperti itu — laporan saja sudah cukup.',
    emailTitle: 'Tanpa aplikasi',
    emailBody: 'Kamu juga bisa menulis ke {email}, meskipun bukan anggota. Jelaskan apa yang kamu lihat dan di mana (nama anggota atau tautan). Jangan lampirkan materinya.',
    emailSubject: 'Keamanan anak',
    actionTitle: 'Apa yang kami lakukan',
    actions: [
      'Konten yang dilaporkan langsung disembunyikan dari semua orang, dan profilnya dikeluarkan dari Jelajahi.',
      'Salinannya disimpan sebagai bukti, terenkripsi dan tanpa akses publik, agar dapat diserahkan kepada pihak berwenang. Hanya administrator yang dapat mengaksesnya, dan hanya untuk tujuan itu.',
      'Moderator memeriksa laporan dalam beberapa jam. Pelecehan yang terbukti berarti larangan permanen, yang juga mengikuti orang itu ke setiap akun baru dengan alamat email yang sama atau akun Google atau Apple yang sama.',
      'Materi dan eksploitasi seksual anak yang terbukti kami laporkan tanpa penundaan kepada pihak berwenang — polisi dan hotline nasional jaringan INHOPE di negara terkait — dan kami bekerja sama dengan permintaan aparat penegak hukum.',
      'Jika sebuah akun milik anak di bawah umur, kami menutupnya dan memeriksa percakapan yang pernah dilakukannya.',
    ],
    emergency: 'Jika seorang anak dalam bahaya langsung, hubungi polisi atau nomor darurat terlebih dahulu. Kamu juga dapat melaporkan materi pelecehan seksual anak langsung ke hotline negaramu melalui {link}.',
    contactTitle: 'Kontak keamanan anak',
    contactBody: 'Kontak resmi kami untuk keamanan anak, bagi anggota maupun pihak berwenang, adalah {email} (subjek “Keamanan anak”). Niyyah disediakan oleh Puzzles IT OÜ, Estonia, yang mematuhi hukum perlindungan anak yang berlaku, termasuk hukum Uni Eropa dan hukum negara-negara tempat aplikasi ini ditawarkan.',
  },
  ms: {
    footer: 'Keselamatan kanak-kanak',
    title: 'Standard perlindungan kanak-kanak',
    description: 'Standard Niyyah terhadap penderaan dan eksploitasi seksual kanak-kanak (CSAE), cara melaporkannya dan siapa yang perlu dihubungi.',
    intro: 'Niyyah ialah aplikasi perkahwinan untuk orang dewasa sahaja. Kami tidak bertolak ansur langsung dengan penderaan dan eksploitasi seksual kanak-kanak (CSAE) dan bahan penderaan seksual kanak-kanak (CSAM). Standard ini terpakai kepada semua perkara dalam aplikasi: profil, foto, mesej, mesej suara, hantaran komuniti, komen dan cerita.',
    standardsTitle: 'Standard kami',
    standards: [
      'Dewasa sahaja. Niyyah untuk mereka yang berumur 18 tahun ke atas. Tarikh lahir wajib semasa pendaftaran, dan pelayan kami menolak sesiapa yang berumur bawah 18 tahun. Akaun yang kami dapati milik seseorang di bawah 18 tahun akan ditutup.',
      'Dilarang tanpa kecuali: sebarang imej, video, rakaman atau teks yang menyeksualkan kanak-kanak; meminta bahan sedemikian; grooming dan cubaan menghubungi atau berjumpa dengan kanak-kanak bawah umur; peras ugut seksual; dan apa jua bentuk pemerdagangan. Terma perkhidmatan dan garis panduan tingkah laku kami melarangnya, dan setiap ahli menerimanya sebelum menggunakan aplikasi.',
      'Pencegahan: hantaran komuniti dibaca oleh moderator sebelum dipaparkan; cerita daripada akaun baharu dan yang belum disahkan menunggu moderator; dan semakan wajah menganggarkan umur, supaya sesiapa yang mungkin berumur bawah 18 tahun disemak oleh manusia.',
      'Mesej hanya dibuka selepas kedua-duanya menunjukkan minat.',
    ],
    reportTitle: 'Cara melaporkan dalam aplikasi',
    reportSteps: [
      'Pada profil, perbualan, hantaran, komen atau cerita, buka menu (⋯) dan pilih untuk melaporkan.',
      'Pilih sebab “Eksploitasi seksual kanak-kanak”. Jika anda fikir orang itu berumur bawah 18 tahun, pilih “Orang bawah umur”.',
      'Tambah butiran jika mahu, kemudian hantar. Laporan adalah sulit: orang itu tidak pernah diberitahu siapa yang melaporkannya.',
    ],
    reportNote: 'Laporan berkaitan keselamatan kanak-kanak terus ke bahagian paling atas giliran moderator. Jangan majukan, simpan atau ambil tangkapan skrin kandungan sedemikian — laporan sudah memadai.',
    emailTitle: 'Tanpa aplikasi',
    emailBody: 'Anda juga boleh menulis ke {email}, walaupun anda bukan ahli. Terangkan apa yang anda lihat dan di mana (nama ahli atau pautan). Jangan lampirkan bahan itu sendiri.',
    emailSubject: 'Keselamatan kanak-kanak',
    actionTitle: 'Apa yang kami lakukan',
    actions: [
      'Kandungan yang dilaporkan terus disembunyikan daripada semua orang, dan profil dikeluarkan daripada Teroka.',
      'Satu salinan disimpan sebagai bukti, disulitkan dan tanpa akses awam, supaya boleh diserahkan kepada pihak berkuasa. Hanya pentadbir boleh mengaksesnya, dan hanya untuk tujuan itu.',
      'Moderator menyemak laporan dalam masa beberapa jam. Penderaan yang disahkan bermakna larangan kekal, yang turut mengikut orang itu ke setiap akaun baharu dengan alamat e-mel yang sama atau akaun Google atau Apple yang sama.',
      'Bahan dan eksploitasi seksual kanak-kanak yang disahkan kami laporkan tanpa berlengah kepada pihak berkuasa yang berwibawa — polis dan talian kebangsaan rangkaian INHOPE di negara berkenaan — dan kami bekerjasama dengan permintaan penguat kuasa undang-undang.',
      'Jika sesuatu akaun milik kanak-kanak bawah umur, kami menutupnya dan menyemak perbualan yang pernah dibuatnya.',
    ],
    emergency: 'Jika seorang kanak-kanak berada dalam bahaya segera, hubungi polis atau nombor kecemasan terlebih dahulu. Anda juga boleh melaporkan bahan penderaan seksual kanak-kanak terus kepada talian negara anda melalui {link}.',
    contactTitle: 'Hubungan keselamatan kanak-kanak',
    contactBody: 'Hubungan khas kami untuk keselamatan kanak-kanak, bagi ahli dan pihak berkuasa, ialah {email} (subjek “Keselamatan kanak-kanak”). Niyyah disediakan oleh Puzzles IT OÜ, Estonia, yang mematuhi undang-undang perlindungan kanak-kanak yang terpakai, termasuk undang-undang EU dan undang-undang negara tempat aplikasi ini ditawarkan.',
  },
  ar: {
    footer: 'سلامة الأطفال',
    title: 'معايير حماية الأطفال',
    description: 'معايير Niyyah ضد الاعتداء الجنسي على الأطفال واستغلالهم (CSAE)، وكيفية الإبلاغ، وبمن تتصل.',
    intro: 'Niyyah تطبيق للزواج مخصص للبالغين فقط. لا نتسامح مطلقًا مع الاعتداء الجنسي على الأطفال واستغلالهم (CSAE) ومع مواد الاعتداء الجنسي على الأطفال (CSAM). تنطبق هذه المعايير على كل ما في التطبيق: الملفات الشخصية والصور والرسائل والرسائل الصوتية ومنشورات المجتمع والتعليقات والقصص.',
    standardsTitle: 'معاييرنا',
    standards: [
      'للبالغين فقط. Niyyah لمن بلغوا 18 عامًا فأكثر. تاريخ الميلاد إلزامي عند التسجيل، ويرفض خادمنا كل من هو دون 18 عامًا. ونغلق أي حساب يتبين لنا أنه يعود لشخص دون 18 عامًا.',
      'محظور دون استثناء: أي صورة أو فيديو أو تسجيل أو نص يُضفي طابعًا جنسيًا على طفل؛ وطلب مثل هذه المواد؛ واستدراج القاصرين (grooming) ومحاولة التواصل مع قاصر أو لقائه؛ والابتزاز الجنسي؛ وأي شكل من أشكال الاتجار بالبشر. تحظر ذلك شروط الاستخدام وإرشادات السلوك لدينا، ويقبلها كل عضو قبل استخدام التطبيق.',
      'الوقاية: يقرأ مشرفٌ منشورات المجتمع قبل ظهورها؛ وتنتظر قصص الحسابات الجديدة وغير الموثقة مراجعة مشرف؛ ويقدّر التحقق من الوجه العمر، فيراجع إنسانٌ كل من قد يكون دون 18 عامًا.',
      'لا تُفتح الرسائل إلا بعد أن يُبدي الطرفان اهتمامًا.',
    ],
    reportTitle: 'كيف تُبلغ داخل التطبيق',
    reportSteps: [
      'في الملف الشخصي أو المحادثة أو المنشور أو التعليق أو القصة، افتح القائمة (⋯) واختر الإبلاغ.',
      'اختر السبب «استغلال جنسي لطفل». وإذا كنت تظن أن الشخص دون 18 عامًا، فاختر «شخص قاصر».',
      'أضف تفاصيل إن شئت ثم أرسل. البلاغات سرية: لا يُخبَر الشخص أبدًا بمن أبلغ عنه.',
    ],
    reportNote: 'يذهب البلاغ المتعلق بسلامة طفل إلى أعلى قائمة انتظار المشرفين مباشرة. لا تُعِد توجيه هذا المحتوى ولا تحفظه ولا تلتقط صورة للشاشة — البلاغ يكفي.',
    emailTitle: 'من دون التطبيق',
    emailBody: 'يمكنك أيضًا الكتابة إلى {email}، حتى لو لم تكن عضوًا. صف ما رأيته وأين (اسم العضو أو رابط). لا ترفق المادة نفسها.',
    emailSubject: 'سلامة الأطفال',
    actionTitle: 'ماذا نفعل',
    actions: [
      'يُخفى المحتوى المُبلَّغ عنه عن الجميع فورًا، ويُزال الملف الشخصي من «استكشف».',
      'تُحفظ نسخة كدليل، مشفّرة ودون أي وصول عام، لتسليمها إلى السلطات. لا يصل إليها إلا المسؤولون، ولهذا الغرض فقط.',
      'يراجع مشرفٌ البلاغ في غضون ساعات. الاعتداء المؤكَّد يعني حظرًا دائمًا يلاحق الشخص أيضًا إلى أي حساب جديد بالبريد الإلكتروني نفسه أو بحساب Google أو Apple نفسه.',
      'نُبلغ دون تأخير عن مواد الاعتداء الجنسي على الأطفال واستغلالهم المؤكَّدة إلى السلطات المختصة — الشرطة والخط الوطني لشبكة INHOPE في البلد المعني — ونتعاون مع طلبات جهات إنفاذ القانون.',
      'إذا كان الحساب يعود لقاصر، نغلقه ونراجع المحادثات التي أجراها.',
    ],
    emergency: 'إذا كان طفل في خطر داهم، فاتصل أولًا بالشرطة أو برقم الطوارئ. ويمكنك أيضًا الإبلاغ عن مواد الاعتداء الجنسي على الأطفال مباشرة إلى الخط الوطني في بلدك عبر {link}.',
    contactTitle: 'جهة الاتصال لسلامة الأطفال',
    contactBody: 'جهة الاتصال المخصصة لدينا لسلامة الأطفال، للأعضاء وللسلطات، هي {email} (الموضوع: «سلامة الأطفال»). تقدّم Niyyah شركة Puzzles IT OÜ في إستونيا، وهي تلتزم بالقوانين السارية لحماية الأطفال، بما فيها قانون الاتحاد الأوروبي وقوانين البلدان التي يُتاح فيها التطبيق.',
  },
  ur: {
    footer: 'بچوں کا تحفظ',
    title: 'بچوں کے تحفظ کے معیارات',
    description: 'بچوں کے جنسی استحصال اور زیادتی (CSAE) کے خلاف Niyyah کے معیارات، اس کی شکایت کیسے کریں اور کس سے رابطہ کریں۔',
    intro: 'Niyyah شادی کی ایپ ہے جو صرف بالغوں کے لیے ہے۔ بچوں کے ساتھ جنسی زیادتی اور استحصال (CSAE) اور بچوں سے جنسی زیادتی کے مواد (CSAM) کے لیے ہماری برداشت صفر ہے۔ یہ معیارات ایپ کی ہر چیز پر لاگو ہوتے ہیں: پروفائل، تصاویر، پیغامات، صوتی پیغامات، کمیونٹی پوسٹس، تبصرے اور اسٹوریز۔',
    standardsTitle: 'ہمارے معیارات',
    standards: [
      'صرف بالغوں کے لیے۔ Niyyah 18 سال اور اس سے زیادہ عمر کے لوگوں کے لیے ہے۔ رجسٹریشن پر تاریخِ پیدائش لازمی ہے، اور ہمارا سرور 18 سال سے کم عمر ہر شخص کو مسترد کر دیتا ہے۔ جو اکاؤنٹ ہمیں 18 سال سے کم عمر کسی فرد کا معلوم ہو، اسے ہم بند کر دیتے ہیں۔',
      'بغیر کسی استثنا کے ممنوع: کوئی بھی تصویر، ویڈیو، ریکارڈنگ یا تحریر جو کسی بچے کو جنسی رنگ دے؛ ایسا مواد مانگنا؛ گرومنگ اور کسی نابالغ سے رابطہ کرنے یا ملنے کی کوشش؛ جنسی بلیک میلنگ؛ اور انسانی اسمگلنگ کی ہر شکل۔ ہماری شرائطِ استعمال اور رویے کے اصول اس سے منع کرتے ہیں، اور ہر رکن ایپ استعمال کرنے سے پہلے انہیں قبول کرتا ہے۔',
      'روک تھام: کمیونٹی پوسٹس شائع ہونے سے پہلے ایک ماڈریٹر پڑھتا ہے؛ نئے اور غیر تصدیق شدہ اکاؤنٹس کی اسٹوریز ماڈریٹر کا انتظار کرتی ہیں؛ اور چہرے کی تصدیق عمر کا اندازہ لگاتی ہے، اس لیے جو بھی 18 سال سے کم ہو سکتا ہے اسے ایک انسان دیکھتا ہے۔',
      'پیغامات تبھی کھلتے ہیں جب دونوں دلچسپی ظاہر کریں۔',
    ],
    reportTitle: 'ایپ میں شکایت کیسے کریں',
    reportSteps: [
      'پروفائل، گفتگو، پوسٹ، تبصرے یا اسٹوری پر مینو (⋯) کھولیں اور شکایت کا انتخاب کریں۔',
      'وجہ «بچے کا جنسی استحصال» منتخب کریں۔ اگر آپ کو لگتا ہے کہ فرد 18 سال سے کم ہے تو «نابالغ فرد» منتخب کریں۔',
      'چاہیں تو تفصیل شامل کریں اور بھیج دیں۔ شکایات خفیہ ہوتی ہیں: فرد کو کبھی نہیں بتایا جاتا کہ شکایت کس نے کی۔',
    ],
    reportNote: 'بچے کی حفاظت سے متعلق شکایت ماڈریٹرز کی قطار میں سب سے اوپر جاتی ہے۔ ایسا مواد آگے نہ بھیجیں، محفوظ نہ کریں اور اس کا اسکرین شاٹ نہ لیں — شکایت کافی ہے۔',
    emailTitle: 'ایپ کے بغیر',
    emailBody: 'آپ {email} پر بھی لکھ سکتے ہیں، چاہے آپ رکن نہ ہوں۔ بتائیں کہ آپ نے کیا اور کہاں دیکھا (رکن کا نام یا لنک)۔ مواد خود منسلک نہ کریں۔',
    emailSubject: 'بچوں کا تحفظ',
    actionTitle: 'ہم کیا کرتے ہیں',
    actions: [
      'شکایت شدہ مواد فوراً سب سے چھپا دیا جاتا ہے، اور پروفائل «دریافت کریں» سے ہٹا دیا جاتا ہے۔',
      'ایک نقل ثبوت کے طور پر، خفیہ کاری کے ساتھ اور بغیر کسی عوامی رسائی کے، رکھی جاتی ہے تاکہ حکام کے حوالے کی جا سکے۔ اس تک صرف ایڈمنسٹریٹرز کی رسائی ہوتی ہے، اور صرف اسی مقصد کے لیے۔',
      'ایک ماڈریٹر چند گھنٹوں میں شکایت کا جائزہ لیتا ہے۔ تصدیق شدہ زیادتی کا مطلب مستقل پابندی ہے، جو اسی ای میل ایڈریس یا اسی Google یا Apple اکاؤنٹ سے بنے ہر نئے اکاؤنٹ پر بھی لاگو ہوتی ہے۔',
      'بچوں سے جنسی زیادتی کے تصدیق شدہ مواد اور استحصال کی اطلاع ہم بلا تاخیر متعلقہ حکام کو دیتے ہیں — پولیس اور متعلقہ ملک میں INHOPE نیٹ ورک کی قومی ہاٹ لائن — اور قانون نافذ کرنے والے اداروں کی درخواستوں پر تعاون کرتے ہیں۔',
      'اگر کوئی اکاؤنٹ کسی نابالغ کا ہو تو ہم اسے بند کر دیتے ہیں اور اس کی گفتگوؤں کا جائزہ لیتے ہیں۔',
    ],
    emergency: 'اگر کوئی بچہ فوری خطرے میں ہو تو پہلے پولیس یا ایمرجنسی نمبر پر کال کریں۔ آپ بچوں سے جنسی زیادتی کے مواد کی اطلاع {link} کے ذریعے براہِ راست اپنے ملک کی ہاٹ لائن کو بھی دے سکتے ہیں۔',
    contactTitle: 'بچوں کے تحفظ کے لیے رابطہ',
    contactBody: 'بچوں کے تحفظ کے لیے ہمارا مقررہ رابطہ، اراکین اور حکام دونوں کے لیے، {email} ہے (موضوع: «بچوں کا تحفظ»)۔ Niyyah کو ایسٹونیا کی Puzzles IT OÜ فراہم کرتی ہے، جو بچوں کے تحفظ کے نافذ قوانین کی پابندی کرتی ہے، بشمول یورپی یونین کے قانون اور ان ممالک کے قوانین جہاں ایپ پیش کی جاتی ہے۔',
  },
}
