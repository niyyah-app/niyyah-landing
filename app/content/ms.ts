import type { Copy } from './bs'

export const ms: Copy = {
  meta: {
    title: 'Niyyah — Aplikasi halal untuk mencari pasangan hidup',
    description:
      'Niyyah ialah aplikasi untuk Muslim yang mencari perkahwinan. Mesej hanya terbuka apabila kedua-dua pihak berminat, mahram boleh berada dalam perbualan, dan komunitinya diselia. Percuma, dalam sembilan bahasa.',
    ogAlt: 'Niyyah: Perkahwinan, dicari dengan niat.',
  },

  nav: {
    skip: 'Lompat ke kandungan',
    label: 'Navigasi utama',
    home: 'Niyyah, laman utama',
    links: [
      { href: '#mahrem', label: 'Mahram' },
      { href: '#kako', label: 'Cara ia berfungsi' },
      { href: '#sigurnost', label: 'Keselamatan' },
      { href: '#preporuke', label: 'Testimoni' },
      { href: '#pitanja', label: 'Soalan' },
    ],
    language: 'Bahasa',
    menu: 'Menu',
    close: 'Tutup menu',
  },

  cta: {
    download: 'Dapatkan Niyyah',
    waitlist: 'Beritahu saya apabila Niyyah dibuka',
    waitlistShort: 'Beritahu saya',
    emailLabel: 'Alamat e-mel anda',
    emailPlaceholder: 'nama@contoh.com',
    sending: 'Menghantar',
    success: 'Terima kasih. Kami akan menulis kepada anda sebaik Niyyah dibuka, in syā Allāh.',
    invalid: 'Tulis alamat e-mel yang betul, contohnya nama@contoh.com.',
    error: 'Tidak berjaya. Periksa sambungan anda dan cuba lagi.',
    tooMany: 'Terlalu banyak cubaan. Cuba lagi dalam beberapa minit.',
    notConnected: 'Senarai menunggu belum dibuka. Datang lagi nanti.',
    privacy: 'Alamat anda kami gunakan hanya untuk memberitahu anda apabila Niyyah dibuka dan supaya hadiah alu-aluan menanti anda. Kami tidak menjualnya dan tidak memberikannya kepada sesiapa untuk iklan.',
    soon: 'Tidak lama lagi di App Store dan Google Play',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Muat turun di',
    availableOn: 'Boleh didapati di',
    eyebrow: 'APLIKASI HALAL UNTUK PERKAHWINAN',
    waiting: '{count} orang sudah menunggu Niyyah',
  },

  hero: {
    countdown: 'Niyyah tiba dalam',
    countdownUnits: ['hari', 'jam', 'minit', 'saat'],
    title: 'Perkahwinan, dicari dengan niat.',
    lead:
      'Niyyah ialah aplikasi untuk Muslim yang serius mencari pasangan hidup. Mesej hanya terbuka apabila kedua-dua pihak berminat, mahram boleh berada dalam perbualan, dan batasnya dijaga oleh aplikasi, bukan oleh anda.',
    secondary: 'Cara mahram berfungsi',
    micro: 'Percuma. Aplikasinya dalam sembilan bahasa.',
    imageAlt: 'Kad profil dalam Niyyah: solat, mazhab, rancangan perkahwinan dan peratus keserasian.',
  },

  mockProfile: {
    name: 'Amina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Disahkan',
    match: 'keserasian',
    rows: [
      { k: 'Agama', v: 'Mengamalkan' },
      { k: 'Solat', v: 'Tetap' },
      { k: 'Mazhab', v: 'Hanafi' },
      { k: 'Perkahwinan', v: 'Dalam setahun' },
    ],
    prompt: 'Iman dalam perkahwinan bermaksud…',
    promptAnswer: 'kami saling mengingatkan tentang yang penting, walaupun ketika susah.',
    pass: 'Langkau',
    like: 'Saya suka',
  },

  problem: {
    title: 'Aplikasi pertemuan tidak dibina untuk perkahwinan.',
    body: [
      'Ia dibina supaya anda terus menatal. Kad tanpa penghujung, orang tanpa niat yang jelas, perbualan yang tidak mungkin anda tunjukkan kepada ibu bapa.',
      'Sementara berkenalan melalui keluarga itu lambat, lingkarannya sempit dan tekanannya berat. Antara dua dunia itu tiada apa-apa untuk kita.',
    ],
    pains: [
      'Anda tidak tahu siapa yang serius dan siapa yang datang sekadar melihat.',
      'Para muslimah bimbang akan gangguan, profil palsu, dan menghadapi semuanya seorang diri.',
      'Aplikasi terjemahan tidak memahami bahasa, mazhab, adat mahupun diaspora kita.',
    ],
    eyebrow: 'CARA IA BERFUNGSI',
    painsLabel: 'Kedengaran biasa?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Aplikasi lain mengukur kejayaan dengan masa yang anda habiskan di dalamnya. Kami mengukurnya dengan nikah yang selepasnya anda tidak lagi memerlukan kami.',
  },

  pillars: {
    title: 'Dibina untuk perkahwinan, dari skrin pertama.',
    items: [
      {
        word: 'Niat',
        title: 'Niat didahulukan',
        body: 'Setiap profil menyebut apa yang dicari dan bila. Tempoh untuk berkahwin, anak, berpindah: anda tahu sebelum mesej pertama.',
      },
      {
        word: 'Keluarga',
        title: 'Bersama keluarga, bukan seorang diri',
        body: 'Seorang muslimah boleh menjemput bapa, adik-beradik lelaki atau walinya untuk berada dalam perbualannya. Tiada apa-apa disembunyikan daripada mereka yang pendapatnya bermakna.',
      },
      {
        word: 'Batas',
        title: 'Halal pada reka bentuknya',
        body: 'Hanya jantina berlainan. Mesej hanya apabila kedua-dua pihak berminat. Komuniti yang disemak moderator. Batasnya dijaga aplikasi, anda tidak perlu menjaganya.',
      },
    ],
  },

  mahrem: {
    kicker: 'Portal mahram',
    title: 'Tiada apa-apa disembunyikan daripada mereka yang pendapatnya bermakna.',
    body:
      'Hidupkan „Wajibkan mahram“ dan jemput paling banyak tiga orang yang anda percaya: bapa, adik-beradik lelaki, bapa saudara atau wali. Mereka melihat perbualan anda dalam portal mahram, tetapi tidak boleh menulis dan tidak boleh berkenalan dengan sesiapa. Mereka hanya hadir, seperti mereka hadir jika bersemuka.',
    steps: [
      { title: 'Hidupkan „Wajibkan mahram“', body: 'Satu suis dalam tetapan.' },
      { title: 'Jemput paling banyak tiga mahram', body: 'Jemputan tiba melalui e-mel, dan mahram menerimanya dalam aplikasi.' },
      {
        title: 'Mereka membaca, anda berbicara',
        body: 'Mahram melihat perbualan dan padanan. Dia tidak boleh menulis dari portal dan tidak menggunakan ciri perkenalan.',
      },
    ],
    who: [
      { label: 'Untuk dia', body: 'Anda tidak seorang diri. Keluarga ada tanpa berdiri di belakang anda.' },
      { label: 'Untuk keluarga', body: 'Anda tahu dengan siapa dan bagaimana dia berbicara. Tanpa rahsia.' },
      { label: 'Untuk pihak lelaki', body: 'Tanda jelas bahawa dia serius dan keluarganya terlibat.' },
    ],
    parentsTitle: 'Ibu bapa, ini untuk anda.',
    parentsBody:
      'Kami tahu „aplikasi pertemuan“ tidak kedengaran seperti sesuatu untuk anak atau saudara perempuan anda. Dalam Niyyah, anda boleh berada dalam perbualannya dan melihat dengan siapa serta bagaimana dia menulis, tanpa anda menulis apa-apa. Perbualan pun tidak boleh dibuka sebelum kedua-dua pihak menunjukkan minat, dan semua ini percuma.',
    share: 'Hantarkan halaman ini kepadanya',
    shareDone: 'Pautan disalin',
    shareText: 'Niyyah: aplikasi perkahwinan yang keluarganya boleh berada dalam perbualan.',
    imageAlt: 'Portal mahram: seorang bapa membaca perbualan anaknya, tanpa boleh menulis.',
  },

  mockPortal: {
    title: 'Portal mahram',
    readOnly: 'Baca sahaja',
    watching: 'Anda menemani: Amina',
    with: 'Perbualan dengan: Emir, 30',
    messages: [
      { from: 'him', text: 'Assalamualaikum. Terima kasih kerana membuka perbualan.' },
      { from: 'her', text: 'Waalaikumussalam. Awak menulis bahawa awak ingin keluarga berkenalan lebih awal?' },
      { from: 'him', text: 'Betul. Ibu bapa saya ingin bertemu ibu bapa awak sebelum apa-apa yang serius.' },
    ],
    locked: 'Tidak boleh menulis dari portal',
  },

  how: {
    kicker: 'Cara ia berfungsi',
    title: 'Dari profil ke perbualan, dalam empat langkah.',
    steps: [
      { title: 'Bina profil dengan niat', body: 'Agama, solat, rancangan perkahwinan dan kata-kata anda sendiri.' },
      {
        title: 'Terokai',
        body: 'Orang yang sehaluan dengan nilai anda, berserta peratus keserasian. Kad atau peta, dengan penapis umur, bandar dan agama.',
      },
      {
        title: 'Minat dua hala membuka perbualan',
        body: 'Sebelum kedua-dua pihak saling menyukai, perbualan tetap berkunci. Berserta soalan anda sebelum mesej pertama.',
      },
      { title: 'Keluarga bersama anda', body: 'Mahram dalam perbualan, bila-bila anda mahu.' },
    ],
  },

  questions: {
    kicker: 'Soalan sebelum perbualan',
    title: 'Tanyakan yang penting, sebelum mesej pertama.',
    body:
      'Ajukan paling banyak tiga soalan. Selepas padanan, pihak lain menjawab dahulu, kemudian anda membaca dan memutuskan sama ada perbualan terbuka. Tidak perlu tiga minggu bertukar mesej hanya untuk tahu anda tidak sehaluan dalam hal paling asas.',
    flow: ['Anda menyusun soalan', 'Pihak lain menjawab', 'Anda memutuskan'],
    topics: ['Solat', 'Hijab', 'Berpindah', 'Anak'],
    topicsLabel: 'Yang paling kerap ditanya',
    imageAlt: 'Soalan sebelum perbualan: tiga jawapan dan keputusan sama ada perbualan terbuka.',
  },

  mockQuestions: {
    title: 'Emir telah menjawab soalan anda',
    qa: [
      { q: 'Adakah awak solat dengan tetap?', a: 'Ya, lima waktu. Subuh paling berat bagi saya, tetapi saya berusaha.' },
      { q: 'Di mana awak melihat diri awak selepas nikah?', a: 'Di Sarajevo, tetapi saya terbuka untuk bercakap tentang berpindah.' },
      { q: 'Sejauh mana keluarga penting dalam keputusan awak?', a: 'Sangat. Saya ingin keluarga berkenalan lebih awal.' },
    ],
    no: 'Tidak sesuai',
    yes: 'Saya suka',
  },

  profile: {
    kicker: 'Profil',
    title: 'Kenali cara dia berfikir, bukan hanya rupanya.',
    lead:
      'Selain gambar dan keterangan, profil membawa perkara yang dibincangkan sebelum nikah. Kurang mengagak, kurang masa terbuang, lebih cepat sampai kepada „ya“ atau „tidak“.',
    fields: [
      { k: 'Hubungan dengan agama', v: ['Mengamalkan', 'Sedang berusaha', 'Belum mengamalkan buat masa ini'] },
      { k: 'Solat', v: ['Tetap', 'Kadang-kadang', 'Jarang'] },
      { k: 'Mazhab', v: ['Hanafi', 'Syafi’i', 'Maliki', 'Hanbali', 'Tidak penting'] },
      { k: 'Hijab', v: ['Saya memakainya', 'Saya tidak memakainya', 'Saya berniat'] },
      { k: 'Tempoh untuk berkahwin', v: ['Segera', 'Dalam setahun', '1–2 tahun', 'Tidak tergesa-gesa'] },
      { k: 'Berpindah', v: ['Bersedia', 'Tidak boleh', 'Terbuka untuk dibincangkan'] },
      { k: 'Anak', v: ['Mahu', 'Tidak mahu', 'Sudah ada', 'Belum pasti'] },
    ],
    more: 'Dan lagi: merokok, pendidikan, pekerjaan, bahasa ibunda, ketinggian dan minat.',
    promptsTitle: 'Dengan kata-kata anda',
    prompts: ['Iman dalam perkahwinan bermaksud…', 'Apa yang anda cari pada pasangan?', 'Bagaimana anda mengisi hujung minggu?'],
    situationsTitle: 'Situasi',
    situationsBody:
      'Jawab senario sebenar dalam tujuh bidang. Orang lain melihat cara anda berfikir, bukan hanya rupa anda.',
    situations: ['Perkahwinan', 'Komunikasi', 'Menyelesaikan perselisihan', 'Keluarga', 'Agama', 'Kewangan', 'Keibubapaan'],
    matchTitle: 'Peratus keserasian',
    matchBody: 'Pada setiap kad: minat yang sama, hubungan dengan agama dan niat.',
    imageAlt: 'Perincian profil dalam Niyyah: agama, rancangan perkahwinan dan jawapan kepada situasi.',
  },

  mockDetails: {
    title: 'Tentang Emir',
    rows: [
      { k: 'Perkahwinan', v: 'Dalam setahun' },
      { k: 'Berpindah', v: 'Terbuka untuk dibincangkan' },
      { k: 'Anak', v: 'Mahu' },
      { k: 'Pekerjaan', v: 'Jurutera' },
    ],
    situation: 'Situasi · Menyelesaikan perselisihan',
    question: 'Anda berselisih kerana keluarga. Apa yang anda buat dahulu?',
    answer: 'Saya tunggu sampai kami berdua tenang, kemudian saya tanya bagaimana dia melihatnya. Barulah selepas itu saya katakan pendapat saya.',
  },

  safety: {
    kicker: 'Keselamatan dan privasi',
    title: 'Privasi anda bukan barang jualan.',
    lead: 'Kami tidak pernah menjual data anda. Keselamatan dibina di dalam aplikasi, bukan ditambah sebagai pilihan.',
    items: [
      {
        icon: 'pin',
        title: 'Lokasi tepat tidak sekali-kali',
        body: 'Peta hanya menunjukkan kawasan anggaran, dan hanya selagi anda menghidupkannya. Apabila dimatikan, anda hilang daripada peta.',
      },
      {
        icon: 'photo',
        title: 'Pemeriksaan gambar',
        body: 'Muka yang jelas, seorang sahaja, tiada gambar kabur atau tertutup. Data tersembunyi dalam gambar, seperti lokasi GPS, dibuang oleh sistem.',
      },
      {
        icon: 'badge',
        title: 'Tanda Disahkan',
        body: 'Pemeriksaan singkat bahawa anda orang dalam gambar. Nombor telefon atau e-mel anda sahkan sebelum masuk ke Terokai.',
      },
      {
        icon: 'people',
        title: 'Moderator sebenar',
        body: 'Laporan dibaca oleh pasukan moderator khas yang boleh menggantung dan melarang profil.',
      },
      {
        icon: 'block',
        title: 'Sekatan berfungsi dua hala',
        body: 'Jika anda menyekat seseorang, anda hilang antara satu sama lain dalam aplikasi.',
      },
      {
        icon: 'pause',
        title: 'Jedakan Terokai',
        body: 'Sembunyikan profil tanpa memadamnya. Padanan dan perbualan tetap kekal.',
      },
      {
        icon: 'finger',
        title: 'Buka dengan cap jari atau muka',
        body: 'Cap jari anda tidak pernah keluar daripada peranti anda.',
      },
    ],
    ayahRef: 'Al-Qiyamah 75:4',
    ayahNote:
      'Pada skrin buka terdapat ayat dari surah Al-Qiyamah (75:3–4), tentang Allah yang mampu menyusun semula hujung jari sekalipun.',
  },

  community: {
    kicker: 'Komuniti',
    title: 'Tempat belajar tentang perkahwinan sebelum berkahwin.',
    lead:
      'Anda bertanya, membaca pengalaman orang, belajar daripada yang lain. Setiap kiriman disemak moderator sebelum muncul, dan tiada ruang komen yang orang segan meletakkan namanya di bawahnya.',
    items: [
      { title: 'Tanya para lelaki, Tanya para muslimah', body: 'Ruang berasingan yang hanya dilihat oleh satu jantina.' },
      {
        title: 'Tanpa nama, bila perlu',
        body: 'Ada soalan yang susah diajukan dengan nama sendiri. Kirim sebagai „Muslimah tanpa nama“ atau „Saudara tanpa nama“.',
      },
      { title: 'Soalan hari ini', body: 'Setiap hari satu soalan tentang perkahwinan dan nilai, di skrin utama.' },
      {
        title: 'Cerita tanpa komen umum',
        body: '24 jam atau satu tontonan. Untuk seluruh komuniti atau hanya untuk padanan.',
      },
    ],
    reactionsLabel: 'Reaksi yang menghargai manfaat, bukan ego',
    reactions: ['Berguna', 'Ada benarnya', 'Memberi inspirasi', 'Bijak'],
    imageAlt: 'Komuniti Niyyah: soalan tanpa nama dalam ruang Tanya para muslimah.',
  },

  mockPost: {
    space: 'Tanya para muslimah',
    author: 'Muslimah tanpa nama',
    category: 'Perkahwinan',
    text: 'Bagaimana anda memberitahu ibu bapa bahawa anda mencari pasangan melalui aplikasi? Bagaimana reaksi mereka?',
    reviewed: 'Disemak moderator',
  },

  languages: {
    title: 'Dalam bahasa anda, di mana pun anda berada.',
    lead:
      'Aplikasi, e-mel dan pemberitahuan dalam sembilan bahasa. Bahasa Arab dan Urdu dibaca dari kanan ke kiri, sementara peranti berbahasa Croatia dan Serbia mendapat bahasa Bosnia secara automatik. Sama ada anda di Sarajevo, Vienna, Malmö atau Istanbul.',
  },

  pricing: {
    kicker: 'Percuma dan coin',
    title: 'Yang menjaga anda itu percuma.',
    lead: 'Mahram, soalan sebelum perbualan, bual berkunci dan penyeliaan terbuka kepada semua. Kami tidak mengenakan bayaran untuk keselamatan. Coin hanya mempercepatkan — dan tiada langganan.',
    freeTitle: 'Percuma, untuk sesiapa',
    free: [
      'Profil dan 30 profil sehari dalam Terokai',
      '20 suka sehari',
      'Lihat siapa yang menyukai anda: 1 orang sehari',
      'Membaca semua mesej yang dihantar kepada anda',
      'Padanan dan perbualan tanpa had dengan mereka',
      'Mahram dalam perbualan',
      'Soalan sebelum perbualan',
      'Komuniti, cerita dan Soalan hari ini',
      'Coin percuma setiap hari',
    ],
    premiumTitle: 'Coin, apabila anda mahu lebih',
    premium: [
      'Lihat semua yang menyukai anda',
      'Super suka: suka anda di bahagian teratas, dengan nama dan foto anda',
      'Mesej terus (suka bersama mesej)',
      'Lebih banyak suka dan profil untuk hari ini',
      'Kembalikan profil yang anda langkau',
      'Membalas cerita dalam komuniti',
      'Boost: profil anda paling hadapan dalam Terokai',
    ],
    extra:
      'Anda juga mendapat coin secara percuma: setiap hari, untuk tujuh hari berturut-turut, untuk profil yang lengkap dan untuk rakan yang anda jemput. Anda membelinya hanya jika mahu, sekali bayar, di App Store atau Google Play — tanpa langganan dan tanpa pembaharuan automatik.',
  },


  about: {
    kicker: 'Tentang kami',
    quote:
      'Niyyah ada untuk orang yang mencari pasangan hidup, bukan hiburan. Segala-galanya di sini dibina di sekitar satu tujuan itu: profil yang mengatakan sesuatu yang benar, perbualan yang keluarganya boleh hadir, dan batas yang bertahan tanpa perlu dijaga sesiapa.',
    small:
      'Kami pasukan kecil yang membina untuk komunitinya sendiri, dan kami lebih suka aplikasi yang tenang dan boleh dipercayai daripada yang bingar dan sibuk.',
    made: 'Dibuat dengan teliti di Bosnia dan Herzegovina.',
  },

  faq: {
    title: 'Soalan yang kerap ditanya kepada kami',
    items: [
      {
        q: 'Apa yang membezakan Niyyah daripada aplikasi pertemuan lain?',
        a: 'Niyyah dibina untuk perkahwinan, bukan untuk menatal. Terokai hanya menunjukkan jantina berlainan, mesej hanya terbuka apabila kedua-dua pihak saling menyukai, dan seorang muslimah boleh membawa mahram ke dalam perbualannya. Profil membawa perkara yang penting sebelum nikah: solat, mazhab, rancangan perkahwinan, anak dan berpindah.',
      },
      {
        q: 'Apa itu mahram dan bagaimana saya menambahnya?',
        a: 'Mahram ialah ahli keluarga lelaki yang haram dinikahi selama-lamanya, contohnya bapa, adik-beradik lelaki, atau bapa saudara dari pihak bapa mahupun ibu. Anda juga boleh menjemput wali. Dalam tetapan, hidupkan „Wajibkan mahram“ dan jemput paling banyak tiga orang. Jemputan tiba melalui e-mel dan mahram menerimanya dalam aplikasi. Dalam portal mahram dia kemudian melihat perbualan dan padanan anda, tetapi tidak boleh menulis. Ciri ini tersedia pada profil wanita.',
      },
      {
        q: 'Adakah Niyyah halal?',
        a: 'Kami tidak mengeluarkan fatwa dan tidak mendakwa diluluskan oleh mana-mana institusi. Yang boleh kami tunjukkan ialah batas yang dibina di dalam aplikasi: anda hanya melihat jantina berlainan, perbualan terbuka hanya apabila kedua-dua pihak berminat, mahram boleh membaca perbualan, dan moderator menyemak komuniti. Dengan niat apa anda menggunakannya, itu terserah kepada anda. Jika ragu, tanyakan kepada imam yang anda percayai.',
      },
      {
        q: 'Apa itu soalan sebelum perbualan?',
        a: 'Pilihan untuk mengajukan paling banyak tiga soalan anda sendiri. Selepas padanan, pihak lain menjawabnya dahulu. Anda membaca jawapan lalu memutuskan: „Saya suka“ membuka perbualan, „Tidak sesuai“ tidak membukanya.',
      },
      {
        q: 'Siapa boleh melihat lokasi saya?',
        a: 'Tiada siapa melihat lokasi tepat anda. Pada peta dalam Terokai anda muncul hanya sebagai kawasan anggaran, dan hanya jika anda menghidupkannya. Apabila dimatikan, anda hilang daripada peta. Data tersembunyi dalam gambar, seperti lokasi GPS, dibuang semasa dimuat naik.',
      },
      {
        q: 'Bagaimana anda melindungi daripada profil palsu?',
        a: 'Tanda Disahkan bermaksud orang itu lulus pemeriksaan wajah: gambar langsungnya dibandingkan dengan gambar dalam profilnya. Laporan dibaca oleh moderator sebenar yang boleh menggantung atau melarang profil, dan sekatan berfungsi dua hala. Akaun yang dilarang tidak boleh kembali begitu sahaja dengan alamat e-mel baharu.',
      },
      {
        q: 'Apa yang percuma, dan apa yang memerlukan coin?',
        a: 'Semua yang menjaga anda itu percuma: mahram, soalan sebelum perbualan, bual berkunci dan penyeliaan, ditambah 30 profil dan 20 suka sehari, seorang sehari daripada mereka yang menyukai anda, membaca semua mesej yang dihantar kepada anda, serta perbualan tanpa had dengan padanan anda. Dengan coin anda boleh melihat semua yang menyukai anda, menghantar super suka (suka anda di bahagian teratas, diserlahkan, dengan nama dan foto anda) atau mesej terus (suka bersama mesej yang dibaca percuma oleh penerima), mendapat lebih banyak profil dan suka untuk hari itu, dan membalas cerita. Perbualan hanya terbuka apabila anda berdua saling menyukai. Anda mendapat coin percuma setiap hari, dan anda juga boleh membelinya sekali bayar. Tiada langganan, jadi tiada apa yang perlu dibatalkan.',
      },
      {
        q: 'Bolehkah saya menyembunyikan profil untuk sementara?',
        a: 'Boleh. Jedakan Terokai, dan profil anda hilang daripada Terokai tanpa dipadam. Padanan dan perbualan tetap kekal, dan anda boleh memaparkan profil semula bila-bila masa.',
      },
      {
        q: 'Aplikasi ini dalam bahasa apa?',
        a: 'Sembilan: Bosnia, Inggeris, Jerman, Turki, Arab, Indonesia, Urdu, Melayu dan Perancis. Peranti berbahasa Croatia dan Serbia mendapat bahasa Bosnia secara automatik.',
      },
    ],
  },

  final: {
    title: 'Mulakan dengan niat.',
    leadLaunched: 'Bina profil anda dan bertemu orang yang benar-benar mahu membina sesuatu yang bermakna.',
    leadWaitlist:
      'Tinggalkan e-mel anda dan kami akan memberitahu sebaik Niyyah dibuka. Kemudian bina profil anda dan bertemu orang yang benar-benar mahu membina sesuatu yang bermakna.',
  },

  consent: {
    title: 'Pengukuran iklan',
    more: 'Apa maksudnya ini',
    details:
      'Piksel dari Facebook mengira berapa ramai orang yang dibawa iklan kami ke sini dan siapa yang mendaftar. Alamat e-mel anda tidak pernah kami hantar. Jika anda menolak, tiada apa-apa dari Facebook dimuatkan.',
    close: 'Tutup',
    body:
      'Kami mengukur berapa ramai orang yang dibawa iklan kami ke sini. Tiada yang lain, dan alamat e-mel anda tidak pernah dihantar lebih jauh.',
    accept: 'Setuju',
    decline: 'Tidak, terima kasih',
    label: 'Pengukuran iklan',
    change: 'Pilihan pengukuran',
  },

  footer: {
    tagline: 'Perkahwinan, dicari dengan niat.',
    made: 'Dibuat dengan teliti di Bosnia dan Herzegovina.',
    rights: 'Niyyah',
    language: 'Bahasa',
  },
}
