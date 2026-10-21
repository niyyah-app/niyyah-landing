import type { Copy } from './bs'

export const jv: Copy = {
  meta: {
    title: 'Niyyah — Aplikasi halal kanggo nggoleki garwa',
    description:
      'Niyyah iku aplikasi kanggo wong Islam sing nggoleki bebrayan. Pesen mung mbukak yen loro-lorone padha seneng, mahram bisa melu ing pirembugan, lan komunitase diawasi. Gratis, ing sanga basa.',
    ogAlt: 'Niyyah: Bebrayan, digoleki kanthi niyat.',
  },

  nav: {
    skip: 'Langsung menyang isi',
    label: 'Navigasi utama',
    home: 'Niyyah, kaca ngarep',
    links: [
      { href: '#mahrem', label: 'Mahram' },
      { href: '#kako', label: 'Carane mlaku' },
      { href: '#sigurnost', label: 'Keamanan' },
      { href: '#preporuke', label: 'Pengalaman' },
      { href: '#pitanja', label: 'Pitakonan' },
    ],
    language: 'Basa',
    menu: 'Menu',
    close: 'Tutup menu',
  },

  cta: {
    download: 'Jupuk Niyyah',
    waitlist: 'Kabari aku yen Niyyah wis mlaku',
    waitlistShort: 'Kabari aku',
    emailLabel: 'Alamat email sampeyan',
    emailPlaceholder: 'jeneng@tuladha.com',
    sending: 'Lagi dikirim',
    success: 'Matur nuwun. Sawise Niyyah mlaku, awake dhewe bakal nulis, in syā Allāh.',
    waiting: '{count} wong wis ngenteni Niyyah',
    invalid: 'Tulisen alamat email sing bener, tuladhane jeneng@tuladha.com.',
    error: 'Ora kasil. Priksa sambungane banjur coba maneh.',
    tooMany: 'Kakehan nyoba. Coba maneh sawetara menit engkas.',
    notConnected: 'Dhaptar ngenteni durung dibukak. Mampir maneh mengko.',
    privacy: 'Alamat sampeyan mung dienggo ngabari sampeyan yen Niyyah wis mlaku lan supaya ana hadiah sambutan sing nunggu sampeyan. Ora didol lan ora diwènèhaké marang sapa waé kanggo iklan.',
    soon: 'Ora suwe maneh ing App Store lan Google Play',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Jupuk ing',
    availableOn: 'Kasedhiya ing',
    eyebrow: 'APLIKASI HALAL KANGGO BEBRAYAN',
  },

  hero: {
    countdown: 'Niyyah teka ing',
    countdownUnits: ['dina', 'jam', 'menit', 'detik'],
    title: 'Bebrayan, digoleki kanthi niyat.',
    lead:
      'Niyyah iku aplikasi kanggo wong Islam sing temenan nggoleki garwa. Pesen mung mbukak yen loro-lorone padha seneng, mahram bisa melu ing pirembugan, lan wates-watese dijaga aplikasi — dudu sampeyan.',
    secondary: 'Carane mahram mlaku',
    micro: 'Gratis. Aplikasine ana ing sanga basa.',
    imageAlt: 'Kertu profil ing Niyyah: salat, madzhab, rencana bebrayan lan persen cocoke.',
  },

  mockProfile: {
    name: 'Amina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Wis diverifikasi',
    match: 'cocok',
    rows: [
      { k: 'Agama', v: 'Nglakoni' },
      { k: 'Salat', v: 'Ajeg' },
      { k: 'Madzhab', v: 'Hanafi' },
      { k: 'Bebrayan', v: 'Sajroning setaun' },
    ],
    prompt: 'Iman ing bebrayan tegese…',
    promptAnswer: 'padha ngelingake marang sing penting, senajan lagi abot.',
    pass: 'Sabanjure',
    like: 'Aku seneng',
  },

  problem: {
    title: 'Aplikasi pacaran ora digawe kanggo bebrayan.',
    body: [
      'Digawe supaya sampeyan terus nggeser. Kertu tanpa pungkasan, wong tanpa niyat sing cetha, pirembugan sing ora bakal bisa dituduhake marang wong tuwa.',
      'Kepethuk lantaran sedulur kuwi alon, bunderane ciut lan tekanane abot. Ing antarane rong donya kuwi ora ana apa-apa kanggo kita.',
    ],
    pains: [
      'Ora ngerti sapa sing temenan lan sapa sing mung teka ndeleng.',
      'Para mbakyu wedi diganggu, profil palsu, lan ngadhepi kabeh mau dhewekan.',
      'Aplikasi terjemahan ora mudheng basa kita, madzhab kita, adat kita, utawa wong-wong ing rantau.',
    ],
    eyebrow: 'CARANE MLAKU',
    painsLabel: 'Krasa wis tau?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Aplikasi liya ngukur kasil saka wektu sing sampeyan entekake ing kono. Awake dhewe ngukur saka nikah sing sawise iku sampeyan ora butuh awake dhewe maneh.',
  },

  pillars: {
    title: 'Dibangun kanggo bebrayan, wiwit layar kapisan.',
    items: [
      {
        word: 'Niyat',
        title: 'Niyat dhisik',
        body: 'Saben profil ngandhakake apa sing digoleki lan kapan. Wektu bebrayan, anak, pindhah: wis ngerti sadurunge pesen kapisan.',
      },
      {
        word: 'Kulawarga',
        title: 'Bareng kulawarga, ora dhewekan',
        body: 'Mbakyu bisa ngundang bapake, kangmase utawa waline melu ing pirembugane. Ora ana sing didhelikake saka wong sing panemune penting.',
      },
      {
        word: 'Wates',
        title: 'Halal wiwit rancangane',
        body: 'Mung lawan jinis. Pesen mung yen loro-lorone seneng. Komunitas sing dipriksa moderator. Watese dijaga aplikasi, sampeyan ora perlu njaga.',
      },
    ],
  },

  mahrem: {
    kicker: 'Portal mahram',
    title: 'Ora ana sing didhelikake saka wong sing panemune penting.',
    body:
      'Uripake „Njaluk mahram" banjur undang paling akeh telung wong sing sampeyan percaya: bapak, kangmas, pakdhe utawa paklik, wali. Dheweke ndeleng pirembugan sampeyan ing portal mahram, nanging ora bisa nulis lan ora bisa kenalan karo sapa wae. Mung ana — kaya nalika ketemu langsung.',
    steps: [
      { title: 'Uripake „Njaluk mahram"', body: 'Siji tombol ing setelan.' },
      { title: 'Undang paling akeh telung mahram', body: 'Undhangane teka lantaran email, lan mahram nampa ing aplikasi.' },
      {
        title: 'Dheweke maca, sampeyan omong',
        body: 'Mahram ndeleng pirembugan lan kecocokan. Ora bisa nulis saka portal lan ora nganggo fitur kanggo kenalan.',
      },
    ],
    who: [
      { label: 'Kanggo dheweke', body: 'Sampeyan ora dhewekan. Kulawarga ana, nanging ora ngadeg ing mburi pundhak.' },
      { label: 'Kanggo kulawarga', body: 'Panjenengan ngerti karo sapa lan kepriye dheweke omong-omongan. Tanpa wadi.' },
      { label: 'Kanggo dheweke (lanang)', body: 'Tandha cetha yen dheweke temenan lan kulawargane melu.' },
    ],
    parentsTitle: 'Bapak lan ibu, iki kanggo panjenengan.',
    parentsBody:
      'Awake dhewe ngerti yen „aplikasi pacaran" ora krungu kaya barang kanggo putri utawa adhine panjenengan. Ing Niyyah panjenengan bisa melu ing pirembugane lan ndeleng karo sapa lan kepriye dheweke nulis, tanpa panjenengan nulis apa-apa. Pirembugan ora bisa kabukak sadurunge loro pihak nuduhake seneng, lan kabeh iki gratis.',
    share: 'Kirimake kaca iki marang dheweke',
    shareDone: 'Tautan wis disalin',
    shareText: 'Niyyah: aplikasi bebrayan sing kulawargane bisa melu ing pirembugan.',
    imageAlt: 'Portal mahram: bapak maca pirembugan putrine, tanpa bisa nulis.',
  },

  mockPortal: {
    title: 'Portal mahram',
    readOnly: 'Maca thok',
    watching: 'Sampeyan ngancani: Amina',
    with: 'Pirembugan karo: Emir, 30',
    messages: [
      { from: 'him', text: 'Assalamualaikum. Matur nuwun wis mbukak pirembugan.' },
      { from: 'her', text: 'Waalaikumsalam. Sampeyan nulis kepengin kulawarga kenalan luwih dhisik?' },
      { from: 'him', text: 'Inggih. Wong tuwa kula kepengin ketemu wong tuwa sampeyan sadurunge perkara sing serius.' },
    ],
    locked: 'Saka portal ora bisa nulis',
  },

  how: {
    kicker: 'Carane mlaku',
    title: 'Saka profil tekan pirembugan, ing patang langkah.',
    steps: [
      { title: 'Gawe profil kanthi niyat', body: 'Agama, salat, rencana bebrayan lan tembung sampeyan dhewe.' },
      {
        title: 'Golek',
        body: 'Wong sing padha regane karo sampeyan, karo persen cocoke. Kertu utawa peta, karo saringan umur, kutha lan agama.',
      },
      {
        title: 'Seneng saka loro pihak mbukak pirembugan',
        body: 'Sadurunge loro-lorone padha seneng, pirembugane tetep kakunci. Karo pitakonan sampeyan sadurunge pesen kapisan.',
      },
      { title: 'Kulawarga ngancani', body: 'Mahram ing pirembugan, kapan wae sampeyan gelem.' },
    ],
  },

  questions: {
    kicker: 'Pitakonan sadurunge pirembugan',
    title: 'Takokna sing penting, sadurunge pesen kapisan.',
    body:
      'Pasang paling akeh telung pitakonan. Sawise cocok, pihak liya mangsuli dhisik, banjur sampeyan maca lan mutusake apa pirembugane mbukak. Ora perlu telung minggu kirim pesen mung kanggo ngerti yen ora cocog ing perkara dhasar.',
    flow: ['Pitakonan dipasang sampeyan', 'Pihak liya mangsuli', 'Sampeyan sing mutusake'],
    topics: ['Salat', 'Jilbab', 'Pindhah', 'Anak'],
    topicsLabel: 'Sing paling kerep ditakokake',
    imageAlt: 'Pitakonan sadurunge pirembugan: telung wangsulan lan putusan apa pirembugane mbukak.',
  },

  mockQuestions: {
    title: 'Emir wis mangsuli pitakonan sampeyan',
    qa: [
      { q: 'Sampeyan salat kanthi ajeg?', a: 'Inggih, kabeh lima. Subuh sing paling abot kanggo kula, nanging kula tetep ngudi.' },
      { q: 'Sawise nikah, sampeyan ndeleng awake dhewe ing ngendi?', a: 'Ing Sarajevo, nanging kula mbukak kanggo ngrembug pindhah.' },
      { q: 'Sepira pentinge kulawarga ing putusan sampeyan?', a: 'Banget. Kula kepengin kulawarga kenalan luwih dhisik.' },
    ],
    no: 'Aku ora seneng',
    yes: 'Aku seneng',
  },

  profile: {
    kicker: 'Profil',
    title: 'Ngertenana carane mikir, dudu mung rupane.',
    lead:
      'Saliyane foto lan katrangan, profil nggawa perkara sing dirembug sadurunge nikah. Kurang ngira-ira, kurang wektu kebuwang, luwih cepet tekan „iya" utawa „ora".',
    fields: [
      { k: 'Sesambungan karo agama', v: ['Nglakoni', 'Ngudi', 'Saiki durung nglakoni'] },
      { k: 'Salat', v: ['Ajeg', 'Kadhang', 'Arang'] },
      { k: 'Madzhab', v: ['Hanafi', 'Syafi’i', 'Maliki', 'Hanbali', 'Ora dadi masalah'] },
      { k: 'Jilbab', v: ['Nganggo', 'Ora nganggo', 'Duwe niyat'] },
      { k: 'Wektu bebrayan', v: ['Saiki uga', 'Sajroning setaun', '1–2 taun', 'Ora kesusu'] },
      { k: 'Pindhah', v: ['Siyap', 'Ora bisa', 'Mbukak kanggo dirembug'] },
      { k: 'Anak', v: ['Kepengin', 'Ora kepengin', 'Wis duwe', 'Durung mesthi'] },
    ],
    more: 'Lan maneh: ngrokok, pendhidhikan, pakaryan, basa ibu, dhuwur lan kasenengan.',
    promptsTitle: 'Nganggo tembung sampeyan',
    prompts: ['Iman ing bebrayan tegese…', 'Apa sing sampeyan goleki ing garwa?', 'Kepriye sampeyan ngenteni akhir pekan?'],
    situationsTitle: 'Kahanan',
    situationsBody:
      'Wangsulana kahanan nyata ing pitung bidang. Wong liya ndeleng carane sampeyan mikir, dudu mung rupane.',
    situations: ['Bebrayan', 'Komunikasi', 'Ngrampungake pasulayan', 'Kulawarga', 'Agama', 'Dhuwit', 'Ngopeni anak'],
    matchTitle: 'Persen cocoke',
    matchBody: 'Ing saben kertu: kasenengan sing padha, sesambungan karo agama lan niyat.',
    imageAlt: 'Rincian profil ing Niyyah: agama, rencana bebrayan lan wangsulan kahanan.',
  },

  mockDetails: {
    title: 'Bab Emir',
    rows: [
      { k: 'Bebrayan', v: 'Sajroning setaun' },
      { k: 'Pindhah', v: 'Mbukak kanggo dirembug' },
      { k: 'Anak', v: 'Kepengin' },
      { k: 'Pakaryan', v: 'Insinyur' },
    ],
    situation: 'Kahanan · Ngrampungake pasulayan',
    question: 'Sampeyan padu merga kulawarga. Apa sing sampeyan tindakake dhisik?',
    answer: 'Kula ngenteni nganti loro-lorone tentrem, banjur takon kepriye dheweke ndeleng perkarane. Sawise kuwi lagi kula kandha panemu kula.',
  },

  safety: {
    kicker: 'Keamanan lan kaprivasian',
    title: 'Kaprivasian sampeyan dudu barang dagangan.',
    lead: 'Awake dhewe ora tau ngedol data sampeyan. Keamanan dibangun ing njero aplikasi, dudu pilihan sing ditambahake.',
    items: [
      {
        icon: 'pin',
        title: 'Papan sing persis ora tau',
        body: 'Peta mung nuduhake wilayah kira-kira, lan kuwi mung sajrone sampeyan ngurip-urip. Yen dipateni, sampeyan ilang saka peta.',
      },
      {
        icon: 'photo',
        title: 'Priksa foto',
        body: 'Foto sing burem utawa cilik banget ora ditampa, lan data sing didhelikake ing gambar, kaya lokasi GPS, dibusak dening sistem. Wong saka tim kita mbandhingake selfie verifikasimu karo foto-fotomu.',
      },
      {
        icon: 'badge',
        title: 'Tandha Diverifikasi',
        body: 'Priksa cendhak yen sampeyan pancen wong ing foto. Nomer telpon utawa email dikonfirmasi sadurunge mlebu Golek.',
      },
      {
        icon: 'people',
        title: 'Moderator tenan',
        body: 'Laporan diwaca tim moderator dhewe sing bisa nyetop lan nglarang profil.',
      },
      {
        icon: 'block',
        title: 'Mblokir mlaku rong arah',
        body: 'Yen sampeyan mblokir wong, ing aplikasi sampeyan padha ilang siji lan sijine.',
      },
      {
        icon: 'pause',
        title: 'Lerenake Golek',
        body: 'Delikake profil tanpa mbusak. Kecocokan lan pirembugan tetep ana.',
      },
      {
        icon: 'finger',
        title: 'Mbukak nganggo driji utawa rai',
        body: 'Tapak driji sampeyan ora tau metu saka piranti sampeyan.',
      },
    ],
    ayahRef: 'Al-Qiyamah 75:4',
    ayahNote:
      'Ing layar mbukak ana ayat saka surat Al-Qiyamah (75:3–4), bab Allah sing kuwasa nata maneh nganti pucuk driji.',
  },

  community: {
    kicker: 'Komunitas',
    title: 'Papan sinau bab bebrayan sadurunge bebrayan.',
    lead:
      'Sampeyan takon, maca pengalaman wong, sinau saka liyane. Saben tulisan diwaca moderator sadurunge katon, lan ora ana komentar sing wong ora gelem mènèhi jenenge ing ngisore.',
    items: [
      { title: 'Takon marang para sedulur lanang, Takon marang para sedulur wadon', body: 'Papan kapisah sing mung siji jinis sing ndeleng.' },
      {
        title: 'Tanpa jeneng, yen perlu',
        body: 'Pitakonan tartamtu angel ditakokake nganggo jeneng dhewe. Kirim minangka „Mbakyu tanpa jeneng" utawa „Sedulur tanpa jeneng".',
      },
      { title: 'Pitakonan dina iki', body: 'Saben dina siji pitakonan bab bebrayan lan ajining urip, ing layar ngarep.' },
      {
        title: 'Crita tanpa komentar umum',
        body: '24 jam utawa sepisan ndeleng. Kanggo kabeh komunitas utawa mung kanggo kecocokan.',
      },
    ],
    reactionsLabel: 'Tanggapan sing ngajeni manfaat, dudu gumedhe',
    reactions: ['Migunani', 'Ana bener', 'Mbangun semangat', 'Dipikir mateng'],
    imageAlt: 'Komunitas Niyyah: pitakonan tanpa jeneng ing papan Takon marang para sedulur wadon.',
  },

  mockPost: {
    space: 'Takon marang para sedulur wadon',
    author: 'Mbakyu tanpa jeneng',
    category: 'Bebrayan',
    text: 'Kepriye anggonmu kandha marang wong tuwa yen lagi nggoleki garwa lantaran aplikasi? Kepriye tanggapane?',
    reviewed: 'Wis dipriksa moderator',
  },

  languages: {
    title: 'Kaca iki nganggo basa sampeyan, aplikasine ing sanga basa.',
    lead:
      'Kaca iki sampeyan waca nganggo basa Jawa. Aplikasine dhewe, email lan kabar ana ing sanga basa: Bosnia, Inggris, Jerman, Turki, Arab, Indonesia, Urdu, Melayu lan Prancis. Arab lan Urdu diwaca saka tengen ngiwa. Sampeyan ing Surabaya, Yogyakarta, Dubai utawa Sarajevo.',
  },

  pricing: {
    kicker: 'Gratis lan koin',
    title: 'Sing njaga sampeyan kuwi gratis.',
    lead: 'Mahram, pitakonan sadurunge pirembugan, obrolan kakunci lan pangawasan kabukak kanggo kabeh. Awake dhewe ora njaluk bayaran kanggo keamanan. Koin mung nggawe luwih cepet — lan ora ana langganan.',
    freeTitle: 'Gratis, kanggo sapa wae',
    free: [
      'Profil lan 30 profil saben dina ing Golek',
      '20 seneng saben dina',
      'Ndeleng sapa sing seneng sampeyan: 1 wong saben dina',
      'Maca kabeh pesen sing dikirim marang sampeyan',
      'Kecocokan lan pirembugan tanpa wates karo dheweke',
      'Mahram ing pirembugan',
      'Pitakonan sadurunge pirembugan',
      'Komunitas, crita lan Pitakonan dina iki',
      'Koin gratis saben dina',
    ],
    premiumTitle: 'Koin, yen kepengin luwih',
    premium: [
      'Ndeleng kabeh sing seneng sampeyan',
      'Super seneng: seneng sampeyan ing paling dhuwur, kanthi jeneng lan foto sampeyan',
      'Pesen langsung (seneng karo pesen)',
      'Luwih akeh seneng lan profil kanggo dina iki',
      'Mbalekake profil sing sampeyan liwati',
      'Mangsuli crita ing komunitas',
      'Boost: profil sampeyan paling ngarep ing Golek',
    ],
    extra:
      'Koin uga bisa sampeyan entuk gratis: saben dina, pitung dina terus-terusan, amarga ngganepi profil lan ngundang kanca. Sampeyan tuku mung yen kepengin, sepisan, ing App Store utawa Google Play — tanpa langganan lan tanpa perpanjangan otomatis.',
  },


  about: {
    kicker: 'Bab awake dhewe',
    quote:
      'Niyyah ana kanggo wong sing nggoleki garwa, dudu panglipur. Kabeh ing kene dibangun ngubengi siji tujuan kuwi: profil sing ngomong barang nyata, pirembugan sing kulawargane bisa melu, lan wates sing kuwat tanpa ana sing kudu njaga.',
    small:
      'Awake dhewe tim cilik sing mbangun kanggo komunitase dhewe, lan luwih seneng aplikasi sing tenang lan kena dipercaya tinimbang sing rame lan kebak.',
    made: 'Digawe kanthi ati-ati ing Bosnia lan Herzegovina.',
  },

  faq: {
    title: 'Pitakonan sing kerep ditakokake marang awake dhewe',
    items: [
      {
        q: 'Apa bedane Niyyah karo aplikasi pacaran liyane?',
        a: 'Niyyah dibangun kanggo bebrayan, dudu kanggo nggeser. Golek mung nuduhake lawan jinis, pesen mung mbukak yen loro-lorone wis padha seneng, lan mbakyu bisa nglebokake mahram ing pirembugane. Profil nggawa sing penting sadurunge nikah: salat, madzhab, rencana bebrayan, anak lan pindhah.',
      },
      {
        q: 'Mahram kuwi apa lan carane nambahake?',
        a: 'Mahram iku sedulur lanang sing nikah karo dheweke haram ing salawase, tuladhane bapak, kangmas, pakdhe utawa paklik. Wali uga bisa diundang. Ing setelan uripake „Njaluk mahram" banjur undang paling akeh telung wong. Undhangane teka lantaran email lan mahram nampa ing aplikasi. Ing portal mahram dheweke banjur ndeleng pirembugan lan kecocokan sampeyan, nanging ora bisa nulis. Fitur iki ana ing profil wanita.',
      },
      {
        q: 'Apa Niyyah kuwi halal?',
        a: 'Awake dhewe ora ngetokake fatwa lan ora ngaku disetujoni lembaga apa wae. Sing bisa dituduhake yaiku wates-wates sing dibangun ing aplikasi: sampeyan mung ndeleng lawan jinis, pirembugan mung mbukak yen loro pihak padha seneng, mahram bisa maca pirembugan, lan moderator mriksa komunitas. Nganggo niyat apa sampeyan nganggo, kuwi urusan sampeyan. Yen mangu-mangu, takokna marang imam sing sampeyan percaya.',
      },
      {
        q: 'Pitakonan sadurunge pirembugan kuwi apa?',
        a: 'Pilihan kanggo masang paling akeh telung pitakonan sampeyan dhewe. Sawise cocok, pihak liya mangsuli dhisik. Sampeyan maca wangsulane banjur mutusake: „Aku seneng" mbukak pirembugan, „Aku ora seneng" ora mbukak.',
      },
      {
        q: 'Sapa sing bisa ndeleng panggonanku?',
        a: 'Ora ana sing ndeleng panggonan sampeyan sing persis. Ing peta Golek sampeyan katon mung minangka wilayah kira-kira, lan kuwi mung yen sampeyan ngurip-urip. Yen dipateni, sampeyan ilang saka peta. Data sing ndhelik ing foto, kayata papan GPS, dibusak nalika diunggah.',
      },
      {
        q: 'Kepriye anggonmu njaga saka profil palsu?',
        a: 'Tandha Diverifikasi tegese wong kuwi lulus priksa rai: foto langsunge dibandhingake karo gambar-gambar ing profile. Laporan diwaca moderator tenan sing bisa nyetop utawa nglarang profil, lan mblokir mlaku rong arah. Akun sing dilarang ora bisa bali mung nganggo alamat email anyar.',
      },
      {
        q: 'Apa sing gratis, lan apa sing dibayar nganggo koin?',
        a: 'Kabeh sing njaga sampeyan kuwi gratis: mahram, pitakonan sadurunge pirembugan, obrolan kakunci lan pangawasan, ditambah 30 profil lan 20 seneng saben dina, siji wong saben dina saka sing seneng sampeyan, maca kabeh pesen sing dikirim marang sampeyan, sarta pirembugan tanpa wates karo kecocokan sampeyan. Nganggo koin sampeyan bisa ndeleng kabeh sing seneng sampeyan, ngirim super seneng (seneng sampeyan ing paling dhuwur, disorot, kanthi jeneng lan foto) utawa pesen langsung (seneng karo pesen sing diwaca gratis dening sing nampa), entuk profil lan seneng luwih akeh kanggo dina kuwi, lan mangsuli crita. Pirembugan mung kabukak yen sampeyan loro padha seneng. Koin sampeyan entuk gratis saben dina, lan uga bisa dituku sepisan. Ora ana langganan, dadi ora ana sing kudu dibatalake.',
      },
      {
        q: 'Apa aku bisa ndhelikake profil sawetara wektu?',
        a: 'Bisa. Lerenake Golek, profil sampeyan ilang saka Golek tanpa dibusak. Kecocokan lan pirembugan tetep ana, lan profil bisa dibalekake kapan wae sampeyan gelem.',
      },
      {
        q: 'Aplikasine ana ing basa apa wae?',
        a: 'Ing sanga: Bosnia, Inggris, Jerman, Turki, Arab, Indonesia, Urdu, Melayu lan Prancis. Piranti basa Kroasia lan Serbia otomatis entuk basa Bosnia.',
      },
    ],
  },

  final: {
    title: 'Wiwitana kanthi niyat.',
    leadLaunched: 'Gawe profil lan ketemu wong-wong sing temenan kepengin mbangun samubarang sing nyata.',
    leadWaitlist:
      'Tinggalna email sampeyan, awake dhewe bakal kabari sawise Niyyah mlaku. Banjur gawe profil lan ketemu wong-wong sing temenan kepengin mbangun samubarang sing nyata.',
  },

  consent: {
    title: 'Ngukur iklan',
    more: 'Tegese iki apa',
    details:
      'Piksel saka Facebook ngitung pira wong sing digawa iklan kita tekan kene lan sapa sing ndaftar. Alamat email sampeyan ora tau dikirim. Yen nolak, ora ana apa-apa saka Facebook sing dimuat.',
    close: 'Tutup',
    body:
      'Awake dhewe ngukur pira wong sing digawa iklan tekan kene. Ora liya, lan alamat email sampeyan ora tau diterusake.',
    accept: 'Setuju',
    decline: 'Ora, matur nuwun',
    label: 'Ngukur iklan',
    change: 'Pilihan pangukuran',
  },

  footer: {
    tagline: 'Bebrayan, digoleki kanthi niyat.',
    made: 'Digawe kanthi ati-ati ing Bosnia lan Herzegovina.',
    rights: 'Niyyah',
    language: 'Basa',
  },
}
