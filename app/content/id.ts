import type { Copy } from './bs'

export const id: Copy = {
  meta: {
    title: 'Niyyah — Aplikasi halal untuk mencari pasangan hidup',
    description:
      'Niyyah adalah aplikasi untuk Muslim yang mencari pernikahan. Pesan hanya terbuka bila kedua pihak tertarik, mahram bisa hadir dalam percakapan, dan komunitasnya dimoderasi. Gratis, dalam sembilan bahasa.',
    ogAlt: 'Niyyah: Pernikahan, dicari dengan niat.',
  },

  nav: {
    skip: 'Lompat ke konten',
    label: 'Navigasi utama',
    home: 'Niyyah, halaman utama',
    links: [
      { href: '#mahrem', label: 'Mahram' },
      { href: '#kako', label: 'Cara kerjanya' },
      { href: '#sigurnost', label: 'Keamanan' },
      { href: '#preporuke', label: 'Testimoni' },
      { href: '#pitanja', label: 'Pertanyaan' },
    ],
    language: 'Bahasa',
    menu: 'Menu',
    close: 'Tutup menu',
  },

  cta: {
    download: 'Dapatkan Niyyah',
    waitlist: 'Beri tahu saya saat Niyyah hadir',
    waitlistShort: 'Beri tahu saya',
    emailLabel: 'Alamat emailmu',
    emailPlaceholder: 'nama@contoh.com',
    sending: 'Mengirim',
    success: 'Terima kasih. Kami akan mengabari begitu Niyyah hadir, in syā Allāh.',
    invalid: 'Tulis alamat email yang benar, misalnya nama@contoh.com.',
    error: 'Tidak berhasil. Periksa koneksimu lalu coba lagi.',
    tooMany: 'Terlalu banyak percobaan. Coba lagi beberapa menit lagi.',
    notConnected: 'Daftar tunggu belum dibuka. Mampirlah lagi nanti.',
    privacy: 'Alamatmu hanya kami pakai untuk mengabarimu saat Niyyah hadir dan agar hadiah sambutan menantimu. Kami tidak menjualnya dan tidak memberikannya kepada siapa pun untuk iklan.',
    soon: 'Segera di App Store dan Google Play',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Unduh di',
    availableOn: 'Tersedia di',
    eyebrow: 'APLIKASI HALAL UNTUK PERNIKAHAN',
    waiting: '{count} orang sudah menunggu Niyyah',
  },

  hero: {
    countdown: 'Niyyah hadir dalam',
    countdownUnits: ['hari', 'jam', 'menit', 'detik'],
    title: 'Pernikahan, dicari dengan niat.',
    lead:
      'Niyyah adalah aplikasi untuk Muslim yang serius mencari pasangan hidup. Pesan hanya terbuka bila kedua pihak tertarik, mahram bisa hadir dalam percakapan, dan batas-batasnya dijaga oleh aplikasi, bukan olehmu.',
    secondary: 'Cara kerja mahram',
    micro: 'Gratis. Aplikasinya tersedia dalam sembilan bahasa.',
    imageAlt: 'Kartu profil di Niyyah: salat, mazhab, rencana pernikahan dan persentase kecocokan.',
  },

  mockProfile: {
    name: 'Amina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Terverifikasi',
    match: 'kecocokan',
    rows: [
      { k: 'Agama', v: 'Menjalankan' },
      { k: 'Salat', v: 'Teratur' },
      { k: 'Mazhab', v: 'Hanafi' },
      { k: 'Pernikahan', v: 'Dalam setahun' },
    ],
    prompt: 'Iman dalam pernikahan berarti…',
    promptAnswer: 'saling mengingatkan pada hal yang penting, bahkan ketika berat.',
    pass: 'Lewati',
    like: 'Saya suka',
  },

  problem: {
    title: 'Aplikasi pacaran tidak dibuat untuk pernikahan.',
    body: [
      'Semuanya dibuat agar kamu terus menggulir. Kartu tanpa akhir, orang tanpa niat yang jelas, percakapan yang tak mungkin kamu tunjukkan kepada orang tua.',
      'Sementara berkenalan lewat keluarga itu lambat, lingkarannya sempit, dan tekanannya besar. Di antara dua dunia itu tidak ada apa pun untuk kita.',
    ],
    pains: [
      'Kamu tidak tahu siapa yang serius dan siapa yang hanya melihat-lihat.',
      'Para akhwat khawatir akan pelecehan, profil palsu, dan menghadapi semuanya sendirian.',
      'Aplikasi hasil terjemahan tidak memahami bahasa, mazhab, adat, maupun diaspora kita.',
    ],
    eyebrow: 'CARA KERJANYA',
    painsLabel: 'Terasa familier?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Aplikasi lain mengukur keberhasilan dari waktu yang kamu habiskan di dalamnya. Kami mengukurnya dari nikah yang setelahnya kamu tak lagi membutuhkan kami.',
  },

  pillars: {
    title: 'Dibangun untuk pernikahan, sejak layar pertama.',
    items: [
      {
        word: 'Niat',
        title: 'Niat lebih dahulu',
        body: 'Setiap profil menyebut apa yang dicari dan kapan. Jangka waktu menikah, anak, pindah: kamu tahu sebelum pesan pertama.',
      },
      {
        word: 'Keluarga',
        title: 'Bersama keluarga, tidak sendiri',
        body: 'Seorang akhwat bisa mengundang ayah, saudara laki-laki atau walinya untuk hadir dalam percakapannya. Tidak ada yang disembunyikan dari orang yang pendapatnya berarti.',
      },
      {
        word: 'Batas',
        title: 'Halal sejak rancangan',
        body: 'Hanya lawan jenis. Pesan hanya bila kedua pihak tertarik. Komunitas yang ditinjau moderator. Batasnya dijaga aplikasi, kamu tak perlu menjaganya.',
      },
    ],
  },

  mahrem: {
    kicker: 'Portal mahram',
    title: 'Tak ada yang disembunyikan dari orang yang pendapatnya berarti.',
    body:
      'Nyalakan „Wajibkan mahram“ dan undang paling banyak tiga orang yang kamu percaya: ayah, saudara laki-laki, om, atau wali. Mereka melihat percakapanmu di portal mahram, tetapi tidak bisa menulis dan tidak bisa berkenalan dengan siapa pun. Mereka hanya hadir, seperti kalau bertemu langsung.',
    steps: [
      { title: 'Nyalakan „Wajibkan mahram“', body: 'Satu sakelar di pengaturan.' },
      { title: 'Undang paling banyak tiga mahram', body: 'Undangan datang lewat email, dan mahram menerimanya di aplikasi.' },
      {
        title: 'Mereka membaca, kamu berbicara',
        body: 'Mahram melihat percakapan dan kecocokan. Ia tidak bisa menulis dari portal dan tidak memakai fitur perkenalan.',
      },
    ],
    who: [
      { label: 'Untuk dia', body: 'Kamu tidak sendiri. Keluarga hadir tanpa berdiri di belakang punggungmu.' },
      { label: 'Untuk keluarga', body: 'Anda tahu dengan siapa dan bagaimana ia berbicara. Tanpa rahasia.' },
      { label: 'Untuk dia yang laki-laki', body: 'Tanda jelas bahwa ia serius dan keluarganya terlibat.' },
    ],
    parentsTitle: 'Orang tua, ini untuk Anda.',
    parentsBody:
      'Kami tahu „aplikasi pacaran“ tidak terdengar seperti sesuatu untuk anak atau saudara perempuan Anda. Di Niyyah, Anda bisa hadir dalam percakapannya dan melihat dengan siapa serta bagaimana ia menulis, tanpa Anda menulis apa pun. Percakapan bahkan tidak bisa terbuka sebelum kedua pihak menunjukkan ketertarikan, dan semua ini gratis.',
    share: 'Kirimkan halaman ini kepadanya',
    shareDone: 'Tautan disalin',
    shareText: 'Niyyah: aplikasi pernikahan yang keluarganya bisa hadir dalam percakapan.',
    imageAlt: 'Portal mahram: seorang ayah membaca percakapan putrinya, tanpa bisa menulis.',
  },

  mockPortal: {
    title: 'Portal mahram',
    readOnly: 'Hanya baca',
    watching: 'Kamu mendampingi: Amina',
    with: 'Percakapan dengan: Emir, 30',
    messages: [
      { from: 'him', text: 'Assalamualaikum. Terima kasih sudah membuka percakapan.' },
      { from: 'her', text: 'Waalaikumussalam. Kamu menulis ingin kedua keluarga bertemu lebih awal?' },
      { from: 'him', text: 'Betul. Orang tua saya ingin bertemu orang tuamu sebelum hal yang serius.' },
    ],
    locked: 'Tidak bisa menulis dari portal',
  },

  how: {
    kicker: 'Cara kerjanya',
    title: 'Dari profil ke percakapan, dalam empat langkah.',
    steps: [
      { title: 'Buat profil dengan niat', body: 'Agama, salat, rencana pernikahan dan kata-katamu sendiri.' },
      {
        title: 'Jelajahi',
        body: 'Orang-orang yang sejalan dengan nilaimu, lengkap dengan persentase kecocokan. Kartu atau peta, dengan saringan usia, kota dan agama.',
      },
      {
        title: 'Ketertarikan dua arah membuka percakapan',
        body: 'Sebelum kalian saling menyukai, percakapan tetap terkunci. Disertai pertanyaanmu sebelum pesan pertama.',
      },
      { title: 'Keluarga menyertaimu', body: 'Mahram dalam percakapan, kapan pun kamu mau.' },
    ],
  },

  questions: {
    kicker: 'Pertanyaan sebelum percakapan',
    title: 'Tanyakan yang penting, sebelum pesan pertama.',
    body:
      'Ajukan paling banyak tiga pertanyaan. Setelah cocok, pihak lain menjawab lebih dahulu, lalu kamu membaca dan memutuskan apakah percakapan terbuka. Tak perlu tiga minggu berbalas pesan hanya untuk tahu kalian berbeda soal hal yang paling dasar.',
    flow: ['Kamu menyusun pertanyaan', 'Pihak lain menjawab', 'Kamu memutuskan'],
    topics: ['Salat', 'Hijab', 'Pindah', 'Anak'],
    topicsLabel: 'Yang paling sering ditanyakan',
    imageAlt: 'Pertanyaan sebelum percakapan: tiga jawaban dan keputusan apakah percakapan terbuka.',
  },

  mockQuestions: {
    title: 'Emir menjawab pertanyaanmu',
    qa: [
      { q: 'Apakah kamu salat dengan teratur?', a: 'Ya, lima waktu. Subuh paling berat bagi saya, tapi saya berusaha.' },
      { q: 'Di mana kamu melihat dirimu setelah nikah?', a: 'Di Sarajevo, tapi saya terbuka membicarakan kepindahan.' },
      { q: 'Seberapa penting keluarga dalam keputusanmu?', a: 'Sangat. Saya ingin kedua keluarga bertemu lebih awal.' },
    ],
    no: 'Tidak cocok',
    yes: 'Saya suka',
  },

  profile: {
    kicker: 'Profil',
    title: 'Kenali cara berpikirnya, bukan hanya penampilannya.',
    lead:
      'Selain foto dan keterangan, profil memuat hal-hal yang dibicarakan sebelum nikah. Lebih sedikit menduga, lebih sedikit waktu terbuang, lebih cepat sampai pada „ya“ atau „tidak“.',
    fields: [
      { k: 'Hubungan dengan agama', v: ['Menjalankan', 'Sedang berusaha', 'Saat ini belum menjalankan'] },
      { k: 'Salat', v: ['Teratur', 'Kadang-kadang', 'Jarang'] },
      { k: 'Mazhab', v: ['Hanafi', 'Syafi’i', 'Maliki', 'Hanbali', 'Tidak masalah'] },
      { k: 'Hijab', v: ['Saya memakainya', 'Saya belum memakainya', 'Saya berniat'] },
      { k: 'Jangka waktu menikah', v: ['Segera', 'Dalam setahun', '1–2 tahun', 'Tidak tergesa'] },
      { k: 'Pindah', v: ['Siap', 'Tidak bisa', 'Terbuka untuk dibicarakan'] },
      { k: 'Anak', v: ['Ingin', 'Tidak ingin', 'Sudah punya', 'Belum yakin'] },
    ],
    more: 'Dan juga: merokok, pendidikan, pekerjaan, bahasa ibu, tinggi badan dan minat.',
    promptsTitle: 'Dengan kata-katamu',
    prompts: ['Iman dalam pernikahan berarti…', 'Apa yang kamu cari pada pasangan?', 'Bagaimana kamu mengisi akhir pekan?'],
    situationsTitle: 'Situasi',
    situationsBody:
      'Jawab skenario nyata dalam tujuh bidang. Orang lain melihat cara kamu berpikir, bukan hanya penampilanmu.',
    situations: ['Pernikahan', 'Komunikasi', 'Menyelesaikan konflik', 'Keluarga', 'Agama', 'Keuangan', 'Mengasuh anak'],
    matchTitle: 'Persentase kecocokan',
    matchBody: 'Di setiap kartu: minat yang sama, hubungan dengan agama, dan niat.',
    imageAlt: 'Rincian profil di Niyyah: agama, rencana pernikahan dan jawaban atas situasi.',
  },

  mockDetails: {
    title: 'Tentang Emir',
    rows: [
      { k: 'Pernikahan', v: 'Dalam setahun' },
      { k: 'Pindah', v: 'Terbuka untuk dibicarakan' },
      { k: 'Anak', v: 'Ingin' },
      { k: 'Pekerjaan', v: 'Insinyur' },
    ],
    situation: 'Situasi · Menyelesaikan konflik',
    question: 'Kalian berselisih soal keluarga. Apa yang kamu lakukan lebih dahulu?',
    answer: 'Saya menunggu sampai kami berdua tenang, lalu bertanya bagaimana ia melihatnya. Baru setelah itu saya sampaikan pendapat saya.',
  },

  safety: {
    kicker: 'Keamanan dan privasi',
    title: 'Privasimu bukan barang dagangan.',
    lead: 'Kami tidak pernah menjual datamu. Keamanan dibangun di dalam aplikasi, bukan ditambahkan sebagai pilihan.',
    items: [
      {
        icon: 'pin',
        title: 'Lokasi persis tidak pernah',
        body: 'Peta hanya menampilkan wilayah perkiraan, dan hanya selama kamu menyalakannya. Begitu dimatikan, kamu hilang dari peta.',
      },
      {
        icon: 'photo',
        title: 'Pemeriksaan foto',
        body: 'Wajah jelas, satu orang, tidak kabur dan tidak tertutup. Data tersembunyi dalam foto, seperti lokasi GPS, dihapus oleh sistem.',
      },
      {
        icon: 'badge',
        title: 'Tanda Terverifikasi',
        body: 'Pemeriksaan singkat bahwa kamu orang yang ada di foto. Nomor telepon atau email kamu konfirmasi sebelum masuk ke Jelajahi.',
      },
      {
        icon: 'people',
        title: 'Moderator sungguhan',
        body: 'Laporan dibaca tim moderator khusus yang dapat menangguhkan dan melarang profil.',
      },
      {
        icon: 'block',
        title: 'Blokir berlaku dua arah',
        body: 'Jika kamu memblokir seseorang, kalian saling hilang di dalam aplikasi.',
      },
      {
        icon: 'pause',
        title: 'Jeda Jelajahi',
        body: 'Sembunyikan profil tanpa menghapusnya. Kecocokan dan percakapan tetap ada.',
      },
      {
        icon: 'finger',
        title: 'Buka dengan sidik jari atau wajah',
        body: 'Sidik jarimu tidak pernah keluar dari perangkatmu.',
      },
    ],
    ayahRef: 'Al-Qiyamah 75:4',
    ayahNote:
      'Pada layar pembuka terdapat ayat dari surah Al-Qiyamah (75:3–4), tentang Allah yang mampu menyusun kembali bahkan ujung-ujung jari.',
  },

  community: {
    kicker: 'Komunitas',
    title: 'Tempat belajar tentang pernikahan sebelum pernikahan.',
    lead:
      'Kamu bertanya, membaca pengalaman orang, belajar dari yang lain. Setiap unggahan ditinjau moderator sebelum tampil, dan tidak ada kolom komentar yang orang enggan menaruh namanya di bawahnya.',
    items: [
      { title: 'Tanya para ikhwan, Tanya para akhwat', body: 'Ruang terpisah yang hanya dilihat satu jenis kelamin.' },
      {
        title: 'Anonim, bila perlu',
        body: 'Sebagian pertanyaan sulit diajukan dengan nama sendiri. Unggah sebagai „Akhwat anonim“ atau „Ikhwan anonim“.',
      },
      { title: 'Pertanyaan hari ini', body: 'Setiap hari satu pertanyaan tentang pernikahan dan nilai, di layar utama.' },
      {
        title: 'Cerita tanpa komentar umum',
        body: '24 jam atau satu kali tayang. Untuk seluruh komunitas atau hanya untuk kecocokan.',
      },
    ],
    reactionsLabel: 'Reaksi yang menghargai manfaat, bukan ego',
    reactions: ['Bermanfaat', 'Masuk akal', 'Menginspirasi', 'Bijak'],
    imageAlt: 'Komunitas Niyyah: pertanyaan anonim di ruang Tanya para akhwat.',
  },

  mockPost: {
    space: 'Tanya para akhwat',
    author: 'Akhwat anonim',
    category: 'Pernikahan',
    text: 'Bagaimana kalian memberi tahu orang tua bahwa kalian mencari pasangan lewat aplikasi? Bagaimana tanggapan mereka?',
    reviewed: 'Ditinjau moderator',
  },

  languages: {
    title: 'Dalam bahasamu, di mana pun kamu berada.',
    lead:
      'Aplikasi, email dan notifikasi dalam sembilan bahasa. Arab dan Urdu dibaca dari kanan ke kiri, sementara perangkat berbahasa Kroasia dan Serbia otomatis mendapat bahasa Bosnia. Entah kamu di Sarajevo, Wina, Malmö atau Istanbul.',
  },

  pricing: {
    kicker: 'Gratis dan koin',
    title: 'Yang menjagamu itu gratis.',
    lead: 'Mahram, pertanyaan sebelum percakapan, obrolan terkunci dan moderasi tersedia untuk semua. Kami tidak menarik bayaran atas keamanan. Koin hanya mempercepat — dan tidak ada langganan.',
    freeTitle: 'Gratis, untuk siapa saja',
    free: [
      'Profil dan 30 profil per hari di Jelajahi',
      '20 suka per hari',
      'Lihat siapa yang menyukaimu: 1 orang per hari',
      'Membaca semua pesan yang dikirim kepadamu',
      'Kecocokan dan percakapan tanpa batas dengan mereka',
      'Mahram dalam percakapan',
      'Pertanyaan sebelum percakapan',
      'Komunitas, cerita dan Pertanyaan hari ini',
      'Koin gratis setiap hari',
    ],
    premiumTitle: 'Koin, bila ingin lebih',
    premium: [
      'Lihat semua yang menyukaimu',
      'Super suka: suka-mu di urutan teratas, dengan nama dan fotomu',
      'Pesan langsung (suka disertai pesan)',
      'Lebih banyak suka dan profil untuk hari ini',
      'Kembalikan profil yang kamu lewati',
      'Menanggapi cerita di komunitas',
      'Boost: profilmu paling depan di Jelajahi',
    ],
    extra:
      'Koin juga kamu dapatkan gratis: setiap hari, untuk tujuh hari berturut-turut, untuk profil yang lengkap dan untuk teman yang kamu undang. Kamu membelinya hanya bila mau, sekali bayar, di App Store atau Google Play — tanpa langganan dan tanpa perpanjangan otomatis.',
  },


  about: {
    kicker: 'Tentang kami',
    quote:
      'Niyyah ada untuk orang yang mencari pasangan hidup, bukan hiburan. Segala sesuatu di sini dibangun di sekitar satu tujuan itu: profil yang mengatakan sesuatu yang sungguhan, percakapan yang bisa dihadiri keluarga, dan batas yang bertahan tanpa perlu dijaga siapa pun.',
    small:
      'Kami tim kecil yang membangun untuk komunitasnya sendiri, dan kami lebih suka aplikasi yang tenang dan dapat diandalkan daripada yang riuh dan padat.',
    made: 'Dibuat dengan cermat di Bosnia dan Herzegovina.',
  },

  faq: {
    title: 'Pertanyaan yang sering diajukan kepada kami',
    items: [
      {
        q: 'Apa yang membedakan Niyyah dari aplikasi pacaran lain?',
        a: 'Niyyah dibangun untuk pernikahan, bukan untuk menggulir. Jelajahi hanya menampilkan lawan jenis, pesan baru terbuka bila kalian saling menyukai, dan seorang akhwat bisa menyertakan mahram dalam percakapannya. Profil memuat hal yang penting sebelum nikah: salat, mazhab, rencana pernikahan, anak dan kepindahan.',
      },
      {
        q: 'Apa itu mahram dan bagaimana menambahkannya?',
        a: 'Mahram adalah kerabat laki-laki yang selamanya haram dinikahi, misalnya ayah, saudara laki-laki, atau om dari pihak ayah maupun ibu. Kamu juga bisa mengundang wali. Di pengaturan, nyalakan „Wajibkan mahram“ dan undang paling banyak tiga orang. Undangan datang lewat email dan mahram menerimanya di aplikasi. Di portal mahram ia kemudian melihat percakapan dan kecocokanmu, tetapi tidak bisa menulis. Fitur ini tersedia pada profil perempuan.',
      },
      {
        q: 'Apakah Niyyah halal?',
        a: 'Kami tidak mengeluarkan fatwa dan tidak mengaku disetujui lembaga mana pun. Yang bisa kami tunjukkan adalah batas-batas yang dibangun di dalam aplikasi: kamu hanya melihat lawan jenis, percakapan terbuka hanya bila kedua pihak tertarik, mahram bisa membaca percakapan, dan moderator meninjau komunitas. Dengan niat apa kamu memakainya, itu urusanmu. Bila ragu, tanyakan kepada imam yang kamu percayai.',
      },
      {
        q: 'Apa itu pertanyaan sebelum percakapan?',
        a: 'Pilihan untuk mengajukan paling banyak tiga pertanyaanmu sendiri. Setelah cocok, pihak lain menjawabnya lebih dahulu. Kamu membaca jawaban lalu memutuskan: „Saya suka“ membuka percakapan, „Tidak cocok“ tidak membukanya.',
      },
      {
        q: 'Siapa yang bisa melihat lokasiku?',
        a: 'Tidak ada yang melihat lokasi persismu. Di peta Jelajahi kamu muncul hanya sebagai wilayah perkiraan, dan hanya bila kamu menyalakannya. Begitu dimatikan, kamu hilang dari peta. Data tersembunyi dalam foto, seperti lokasi GPS, dihapus saat diunggah.',
      },
      {
        q: 'Bagaimana kalian melindungi dari profil palsu?',
        a: 'Tanda Terverifikasi berarti orang itu lulus pemeriksaan wajah: foto langsung dirinya dibandingkan dengan gambar di profilnya. Laporan dibaca moderator sungguhan yang dapat menangguhkan atau melarang profil, dan blokir berlaku dua arah. Akun yang dilarang tidak bisa begitu saja kembali dengan alamat email baru.',
      },
      {
        q: 'Apa yang gratis, dan apa yang memakai koin?',
        a: 'Semua yang menjagamu itu gratis: mahram, pertanyaan sebelum percakapan, obrolan terkunci dan moderasi, ditambah 30 profil dan 20 suka per hari, satu orang per hari dari mereka yang menyukaimu, membaca semua pesan yang dikirim kepadamu, serta percakapan tanpa batas dengan kecocokanmu. Dengan koin kamu bisa melihat semua yang menyukaimu, mengirim super suka (suka-mu tampil paling atas dan disorot, dengan nama dan fotomu) atau pesan langsung (suka disertai pesan yang dibaca gratis oleh penerimanya), mendapat lebih banyak profil dan suka untuk hari itu, dan menanggapi cerita. Percakapan baru terbuka bila kalian saling menyukai. Koin kamu dapatkan gratis setiap hari, dan kamu juga bisa membelinya sekali bayar. Tidak ada langganan, jadi tidak ada yang perlu dibatalkan.',
      },
      {
        q: 'Bisakah saya menyembunyikan profil untuk sementara?',
        a: 'Bisa. Jeda Jelajahi, dan profilmu hilang dari Jelajahi tanpa dihapus. Kecocokan dan percakapan tetap ada, dan kamu bisa menampilkan profil kembali kapan saja.',
      },
      {
        q: 'Aplikasinya tersedia dalam bahasa apa saja?',
        a: 'Sembilan: Bosnia, Inggris, Jerman, Turki, Arab, Indonesia, Urdu, Melayu dan Prancis. Perangkat berbahasa Kroasia dan Serbia otomatis mendapat bahasa Bosnia.',
      },
    ],
  },

  final: {
    title: 'Mulailah dengan niat.',
    leadLaunched: 'Buat profilmu dan temui orang-orang yang sungguh-sungguh ingin membangun sesuatu yang nyata.',
    leadWaitlist:
      'Tinggalkan emailmu dan kami akan mengabari begitu Niyyah hadir. Lalu buat profilmu dan temui orang-orang yang sungguh-sungguh ingin membangun sesuatu yang nyata.',
  },

  consent: {
    title: 'Pengukuran iklan',
    more: 'Apa artinya ini',
    details:
      'Piksel dari Facebook menghitung berapa orang yang dibawa iklan kami ke sini dan siapa yang mendaftar. Alamat emailmu tidak pernah kami kirimkan. Kalau menolak, tidak ada apa pun dari Facebook yang dimuat.',
    close: 'Tutup',
    body:
      'Kami mengukur berapa orang yang dibawa iklan kami ke sini. Tidak lebih, dan alamat emailmu tidak pernah diteruskan.',
    accept: 'Setuju',
    decline: 'Tidak, terima kasih',
    label: 'Pengukuran iklan',
    change: 'Pilihan pengukuran',
  },

  footer: {
    tagline: 'Pernikahan, dicari dengan niat.',
    made: 'Dibuat dengan cermat di Bosnia dan Herzegovina.',
    rights: 'Niyyah',
    language: 'Bahasa',
  },
}
