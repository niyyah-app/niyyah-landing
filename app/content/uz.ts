import type { Copy } from './bs'

export const uz: Copy = {
  meta: {
    title: 'Niyyah — Turmush o‘rtog‘i topish uchun halol ilova',
    description:
      'Niyyah nikohga intilgan musulmonlar uchun ilova. Xabarlar faqat ikki tomon qiziqsa ochiladi, suhbatda mahram bo‘lishi mumkin, jamoa esa nazorat ostida. Bepul, to‘qqiz tilda.',
    ogAlt: 'Niyyah: Niyat bilan izlangan nikoh.',
  },

  nav: {
    skip: 'Mazmunga o‘tish',
    label: 'Asosiy navigatsiya',
    home: 'Niyyah, bosh sahifa',
    links: [
      { href: '#mahrem', label: 'Mahram' },
      { href: '#kako', label: 'Qanday ishlaydi' },
      { href: '#sigurnost', label: 'Xavfsizlik' },
      { href: '#preporuke', label: 'Fikrlar' },
      { href: '#pitanja', label: 'Savollar' },
    ],
    language: 'Til',
    menu: 'Menyu',
    close: 'Menyuni yopish',
  },

  cta: {
    download: 'Niyyah’ni oling',
    waitlist: 'Niyyah ishga tushsa xabar bering',
    waitlistShort: 'Xabar bering',
    emailLabel: 'E-pochta manzilingiz',
    emailPlaceholder: 'ism@misol.com',
    sending: 'Yuborilmoqda',
    success: 'Rahmat. Niyyah ishga tushishi bilan sizga yozamiz, in shā Allāh.',
    invalid: 'To‘g‘ri e-pochta manzilini yozing, masalan ism@misol.com.',
    error: 'Bo‘lmadi. Aloqani tekshirib, yana urinib ko‘ring.',
    tooMany: 'Juda ko‘p urinish. Bir necha daqiqadan so‘ng qayta urinib ko‘ring.',
    notConnected: 'Navbat ro‘yxati hali ochilmadi. Tez kunda yana kiring.',
    privacy: 'Manzilingizni faqat Niyyah ishga tushganda sizga xabar berish va sizni xush kelibsiz sovg‘asi kutib turishi uchun ishlatamiz. Uni sotmaymiz va reklama uchun hech kimga bermaymiz.',
    soon: 'Tez kunda App Store va Google Play’da',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Yuklab oling',
    availableOn: 'Mavjud',
    eyebrow: 'NIKOH UCHUN HALOL ILOVA',
    waiting: '{count} kishi allaqachon Niyyah’ni kutmoqda',
  },

  hero: {
    countdown: 'Niyyah kelishiga',
    countdownUnits: ['kun', 'soat', 'daqiqa', 'soniya'],
    title: 'Niyat bilan izlangan nikoh.',
    lead:
      'Niyyah jiddiy ravishda turmush o‘rtog‘i izlayotgan musulmonlar uchun ilova. Xabarlar faqat ikki tomon qiziqsa ochiladi, suhbatda mahram bo‘lishi mumkin, chegaralarni esa siz emas, ilova saqlaydi.',
    secondary: 'Mahram qanday ishlaydi',
    micro: 'Bepul. Ilova to‘qqiz tilda.',
    imageAlt: 'Niyyah’dagi profil kartasi: namoz, mazhab, nikoh rejalari va moslik foizi.',
  },

  mockProfile: {
    name: 'Omina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Tasdiqlangan',
    match: 'moslik',
    rows: [
      { k: 'Din', v: 'Amal qilaman' },
      { k: 'Namoz', v: 'Muntazam' },
      { k: 'Mazhab', v: 'Hanafiy' },
      { k: 'Nikoh', v: 'Bir yil ichida' },
    ],
    prompt: 'Nikohda iymon degani…',
    promptAnswer: 'qiyin bo‘lganda ham bir-birimizga muhim narsani eslatib turish.',
    pass: 'Keyingisi',
    like: 'Yoqdi',
  },

  problem: {
    title: 'Tanishuv ilovalari nikoh uchun qurilmagan.',
    body: [
      'Ular siz surib ko‘rishingiz uchun qurilgan. Tugamaydigan kartalar, niyati noayon odamlar, ota-onangizga hech ko‘rsatib bo‘lmaydigan suhbatlar.',
      'Qarindoshlar orqali tanishish esa sekin, davra tor, bosim og‘ir. Bu ikki dunyo orasida biz uchun hech narsa yo‘q edi.',
    ],
    pains: [
      'Kim jiddiy, kim shunchaki tomosha qilishga kelganini bilmaysiz.',
      'Singillar haqoratdan, yolg‘on profillardan va bularning barchasini yolg‘iz yengishdan qo‘rqadi.',
      'Tarjima qilingan ilovalar tilimizni, mazhabimizni, urf-odatimizni va muhojirlarni tushunmaydi.',
    ],
    eyebrow: 'QANDAY ISHLAYDI',
    painsLabel: 'Tanish ko‘rinadimi?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Boshqa ilovalar muvaffaqiyatni ichida o‘tkazgan vaqtingiz bilan o‘lchaydi. Biz esa undan keyin bizga hojat qolmaydigan nikoh bilan o‘lchaymiz.',
  },

  pillars: {
    title: 'Birinchi ekrandan nikoh uchun qurilgan.',
    items: [
      {
        word: 'Niyat',
        title: 'Avvalo niyat',
        body: 'Har profil odam nimani va qachon izlayotganini aytadi. Nikoh muddati, farzandlar, ko‘chish: birinchi xabardan oldin bilasiz.',
      },
      {
        word: 'Oila',
        title: 'Oila bilan, yolg‘iz emas',
        body: 'Singil otasini, akasini yoki vasiysini suhbatlariga chaqirishi mumkin. Fikri qadrli bo‘lganlardan hech narsa yashirilmaydi.',
      },
      {
        word: 'Chegara',
        title: 'Tuzilishiga ko‘ra halol',
        body: 'Faqat qarama-qarshi jins. Xabarlar faqat ikki tomon qiziqsa. Moderatorlar ko‘rib chiqadigan jamoa. Chegarani ilova saqlaydi, sizga qo‘riqlash shart emas.',
      },
    ],
  },

  mahrem: {
    kicker: 'Mahram portali',
    title: 'Fikri qadrli bo‘lganlardan hech narsa yashirin emas.',
    body:
      '„Mahram talab qilish“ni yoqing va ishonchli uch kishigacha chaqiring: otangiz, akangiz, amakingiz yoki tog‘angiz, vasiyingiz. Ular suhbatlaringizni mahram portalida ko‘radi, ammo yoza olmaydi va hech kim bilan tanisha olmaydi. Faqat hozir bo‘ladi — yuzma-yuz bo‘lganidek.',
    steps: [
      { title: '„Mahram talab qilish“ni yoqing', body: 'Sozlamalarda bitta tugma.' },
      { title: 'Uch mahramgacha chaqiring', body: 'Taklif e-pochta bilan keladi, mahram esa uni ilovada qabul qiladi.' },
      {
        title: 'Ular o‘qiydi, siz suhbatlashasiz',
        body: 'Mahram suhbatlar va mosliklarni ko‘radi. Portaldan yoza olmaydi va tanishuv imkoniyatlaridan foydalanmaydi.',
      },
    ],
    who: [
      { label: 'U uchun', body: 'Yolg‘iz emassiz. Oila yoningizda, ammo yelkangiz ustida turmaydi.' },
      { label: 'Oila uchun', body: 'U kim bilan va qanday suhbatlashayotganini bilasiz. Sir yo‘q.' },
      { label: 'U uchun (yigit)', body: 'Uning jiddiyligi va oila ishtirok etayotganining aniq belgisi.' },
    ],
    parentsTitle: 'Ota-onalar, bu siz uchun.',
    parentsBody:
      'Bilamiz, „tanishuv ilovasi“ qizingiz yoki singlingizga mos narsa kabi eshitilmaydi. Niyyah’da uning suhbatlarida bo‘lishingiz va kim bilan, qanday yozayotganini ko‘rishingiz mumkin — o‘zingiz hech narsa yozmasdan. Ikki tomon qiziqish bildirmaguncha suhbat ochilmaydi ham, va bularning hammasi bepul.',
    share: 'Bu sahifani unga yuboring',
    shareDone: 'Havola ko‘chirildi',
    shareText: 'Niyyah: oila suhbatda bo‘la oladigan nikoh ilovasi.',
    imageAlt: 'Mahram portali: ota qizining suhbatini o‘qiydi, yozish imkoni yo‘q.',
  },

  mockPortal: {
    title: 'Mahram portali',
    readOnly: 'Faqat o‘qish',
    watching: 'Kuzatmoqdasiz: Omina',
    with: 'Suhbat: Emir, 30',
    messages: [
      { from: 'him', text: 'Assalomu alaykum. Suhbatni ochganingiz uchun rahmat.' },
      { from: 'her', text: 'Va alaykum assalom. Oilalar erta tanishishini istayotganingizni yozgandingiz?' },
      { from: 'him', text: 'Ha. Ota-onam jiddiy biror narsadan oldin siznikilar bilan ko‘rishishni xohlardi.' },
    ],
    locked: 'Portaldan yozib bo‘lmaydi',
  },

  how: {
    kicker: 'Qanday ishlaydi',
    title: 'Profildan suhbatga, to‘rt qadamda.',
    steps: [
      { title: 'Niyat bilan profil tuzing', body: 'Din, namoz, nikoh rejalari va o‘z so‘zlaringiz.' },
      {
        title: 'Kashf qiling',
        body: 'Qadriyatlaringizni baham ko‘radigan odamlar, moslik foizi bilan. Kartalar yoki xarita, yosh, shahar va dinga ko‘ra filtrlar.',
      },
      {
        title: 'O‘zaro qiziqish suhbatni ochadi',
        body: 'Ikkovingiz bir-biringizni yoqtirmaguningizcha suhbat yopiq qoladi. Birinchi xabardan oldin savollaringiz bilan.',
      },
      { title: 'Oila yoningizda', body: 'Xohlagan vaqtda suhbatda mahram.' },
    ],
  },

  questions: {
    kicker: 'Suhbatdan oldin savollar',
    title: 'Muhim narsani birinchi xabardan oldin so‘rang.',
    body:
      'Uchtagacha savol qo‘ying. Moslikdan keyin ikkinchi tomon avval javob beradi, siz esa o‘qib, suhbat ochilishini hal qilasiz. Asosiy masalada kelishmaganingizni bilish uchun uch hafta yozishish shart emas.',
    flow: ['Savollarni siz qo‘yasiz', 'Ikkinchi tomon javob beradi', 'Qarorni siz qabul qilasiz'],
    topics: ['Namoz', 'Hijob', 'Ko‘chish', 'Farzandlar'],
    topicsLabel: 'Eng ko‘p so‘raladigan',
    imageAlt: 'Suhbatdan oldin savollar: uch javob va suhbat ochilishi haqidagi qaror.',
  },

  mockQuestions: {
    title: 'Emir savollaringizga javob berdi',
    qa: [
      { q: 'Namozni muntazam o‘qiysizmi?', a: 'Ha, beshtasini. Bomdod menga eng qiyin, lekin harakat qilaman.' },
      { q: 'Nikohdan keyin o‘zingizni qayerda ko‘rasiz?', a: 'Sarayevoda, lekin ko‘chish haqida gaplashishga ochiqman.' },
      { q: 'Qarorlaringizda oila qanchalik muhim?', a: 'Juda. Oilalar erta tanishishini istardim.' },
    ],
    no: 'Yoqmadi',
    yes: 'Yoqdi',
  },

  profile: {
    kicker: 'Profil',
    title: 'Qanday ko‘rinishini emas, qanday fikrlashini biling.',
    lead:
      'Rasm va tavsifdan tashqari profil nikohdan oldin gaplashiladigan narsalarni olib yuradi. Kamroq taxmin, kamroq behuda vaqt, „ha“ yoki „yo‘q“ga tezroq yetish.',
    fields: [
      { k: 'Dinga munosabat', v: ['Amal qilaman', 'Harakat qilaman', 'Hozir amal qilmayman'] },
      { k: 'Namoz', v: ['Muntazam', 'Ba’zan', 'Kamdan-kam'] },
      { k: 'Mazhab', v: ['Hanafiy', 'Shofiy', 'Molikiy', 'Hanbaliy', 'Muhim emas'] },
      { k: 'Hijob', v: ['Kiyaman', 'Kiymayman', 'Niyatim bor'] },
      { k: 'Nikoh muddati', v: ['Darhol', 'Bir yil ichida', '1–2 yil', 'Shoshilmayman'] },
      { k: 'Ko‘chish', v: ['Tayyorman', 'Imkonsiz', 'Gaplashishga ochiqman'] },
      { k: 'Farzandlar', v: ['Xohlayman', 'Xohlamayman', 'Bor', 'Ishonchim yo‘q'] },
    ],
    more: 'Yana: chekish, ta’lim, kasb, ona tili, bo‘y va qiziqishlar.',
    promptsTitle: 'O‘z so‘zlaringiz bilan',
    prompts: ['Nikohda iymon degani…', 'Turmush o‘rtog‘ingizda nimani izlaysiz?', 'Dam olish kunini qanday o‘tkazasiz?'],
    situationsTitle: 'Holatlar',
    situationsBody:
      'Yetti sohada haqiqiy holatlarga javob bering. Boshqalar qanday ko‘rinishingizni emas, qanday fikrlashingizni ko‘radi.',
    situations: ['Nikoh', 'Muloqot', 'Nizoni hal qilish', 'Oila', 'Din', 'Pul', 'Farzand tarbiyasi'],
    matchTitle: 'Moslik foizi',
    matchBody: 'Har kartada: umumiy qiziqishlar, dinga munosabat va niyat.',
    imageAlt: 'Niyyah’da profil tafsilotlari: din, nikoh rejalari va holatlarga javoblar.',
  },

  mockDetails: {
    title: 'Emir haqida',
    rows: [
      { k: 'Nikoh', v: 'Bir yil ichida' },
      { k: 'Ko‘chish', v: 'Gaplashishga ochiq' },
      { k: 'Farzandlar', v: 'Xohlayman' },
      { k: 'Kasb', v: 'Injener' },
    ],
    situation: 'Holat · Nizoni hal qilish',
    question: 'Oila sababli janjallashdingiz. Avval nima qilasiz?',
    answer: 'Ikkovimiz tinchlangunimizcha kutaman, keyin u masalani qanday ko‘rayotganini so‘rayman. Faqat shundan keyin o‘z fikrimni aytaman.',
  },

  safety: {
    kicker: 'Xavfsizlik va maxfiylik',
    title: 'Maxfiyligingiz savdo mahsuloti emas.',
    lead: 'Ma’lumotlaringizni hech qachon sotmaymiz. Xavfsizlik ilovaning ichiga qurilgan, keyin qo‘shilgan tanlov emas.',
    items: [
      {
        icon: 'pin',
        title: 'Aniq joy hech qachon',
        body: 'Xarita faqat taxminiy hududni ko‘rsatadi, u ham siz yoqib qo‘ygan vaqtda. O‘chirsangiz, xaritadan yo‘qolasiz.',
      },
      {
        icon: 'photo',
        title: 'Rasmlar tekshiruvi',
        body: 'Xira va juda kichik suratlar qabul qilinmaydi, rasmdagi yashirin ma’lumotlarni, masalan GPS joylashuvini, tizim o‘chiradi. Jamoamizdan bir kishi tasdiqlash selfingizni suratlaringiz bilan solishtiradi.',
      },
      {
        icon: 'badge',
        title: 'Tasdiqlangan belgisi',
        body: 'Rasmdagi odam siz ekanligingizning qisqa tekshiruvi. Telefon raqami yoki e-pochtani Kashfga kirishdan oldin tasdiqlaysiz.',
      },
      {
        icon: 'people',
        title: 'Haqiqiy moderatorlar',
        body: 'Shikoyatlarni profillarni to‘xtatib va taqiqlab oladigan alohida moderator guruhi o‘qiydi.',
      },
      {
        icon: 'block',
        title: 'Bloklash ikki tomonga ishlaydi',
        body: 'Kimnidir bloklasangiz, ilovada bir-biringizdan yo‘qolasiz.',
      },
      {
        icon: 'pause',
        title: 'Kashfni to‘xtatib turing',
        body: 'Profilni o‘chirmasdan yashiring. Mosliklar va suhbatlar qoladi.',
      },
      {
        icon: 'finger',
        title: 'Barmoq yoki chehra bilan ochish',
        body: 'Barmoq izingiz hech qachon qurilmangizdan chiqmaydi.',
      },
    ],
    ayahRef: 'al-Qiyoma 75:4',
    ayahNote:
      'Ochish ekranida al-Qiyoma surasidan oyat (75:3–4) bor: barmoq uchlarini ham qaytadan tiklay oladigan Alloh haqida.',
  },

  community: {
    kicker: 'Jamoa',
    title: 'Nikohdan oldin nikoh haqida o‘rganish joyi.',
    lead:
      'So‘raysiz, tajribalarni o‘qiysiz, boshqalardan o‘rganasiz. Har yozuv ko‘rinishidan oldin moderator ko‘rigidan o‘tadi, va hech kim nomini ostiga qo‘yishni xohlamaydigan izohlar yo‘q.',
    items: [
      { title: 'Akalardan so‘ra, Singillardan so‘ra', body: 'Faqat bitta jins ko‘radigan ayrim maydonlar.' },
      {
        title: 'Zarur bo‘lsa, nomsiz',
        body: 'Ba’zi savollarni o‘z nomi bilan so‘rash qiyin. „Nomsiz singil“ yoki „Nomsiz aka“ sifatida yozing.',
      },
      { title: 'Kun savoli', body: 'Har kuni nikoh va qadriyatlar haqida bitta savol, bosh ekranda.' },
      {
        title: 'Ommaviy izohlarsiz hikoyalar',
        body: '24 soat yoki bir marta ko‘rish. Butun jamoa uchun yoki faqat mosliklar uchun.',
      },
    ],
    reactionsLabel: 'Manmanlikni emas, foydani qadrlaydigan munosabatlar',
    reactions: ['Foydali', 'Mantiqli', 'Ilhomlantiruvchi', 'O‘ylangan'],
    imageAlt: 'Niyyah jamoasi: Singillardan so‘ra maydonida nomsiz savol.',
  },

  mockPost: {
    space: 'Singillardan so‘ra',
    author: 'Nomsiz singil',
    category: 'Nikoh',
    text: 'Ilova orqali turmush o‘rtog‘i izlayotganingizni ota-onangizga qanday aytdingiz? Ular qanday qabul qildi?',
    reviewed: 'Moderator ko‘rdi',
  },

  languages: {
    title: 'Sahifa sizning tilingizda, ilova to‘qqiz tilda.',
    lead:
      'Bu sahifani o‘zbekcha o‘qiyapsiz. Ilovaning o‘zi, e-pochtalar va bildirishnomalar to‘qqiz tilda: bosniyacha, inglizcha, nemischa, turkcha, arabcha, indonezcha, urdu, malaycha va fransuzcha. Arab va urdu o‘ngdan chapga yoziladi. Toshkentda bo‘ling, Samarqandda, Sarayevoda yoki Istanbulda.',
  },


  pricing: {
    kicker: 'Bepul va tangalar',
    title: 'Sizni asraydigan narsa bepul.',
    lead: 'Mahram, suhbatdan oldin savollar, yopiq suhbat va nazorat hammaga ochiq. Xavfsizlik uchun pul olmaymiz. Tangalar faqat tezlashtiradi — va obuna yo‘q.',
    freeTitle: 'Bepul, hamma uchun',
    free: [
      'Profil va Kashfda kuniga 30 ta profil',
      'Kuniga 20 yoqtirish',
      'Kim sizni yoqtirganini ko‘ring: kuniga 1 kishi',
      'Sizga yuborilgan barcha xabarlarni o‘qish',
      'Mosliklar va ular bilan cheksiz suhbat',
      'Suhbatda mahram',
      'Suhbatdan oldin savollar',
      'Jamoa, hikoyalar va Kun savoli',
      'Har kuni bepul tangalar',
    ],
    premiumTitle: 'Tangalar, ko‘proq xohlaganingizda',
    premium: [
      'Sizni yoqtirganlarning hammasini ko‘ring',
      'Super yoqtirish: yoqtirishingiz eng tepada, ismingiz va rasmingiz bilan',
      'To‘g‘ridan-to‘g‘ri xabarlar (xabarli yoqtirish)',
      'Bugun uchun ko‘proq yoqtirish va profil',
      'O‘tkazib yuborgan profilingizni qaytaring',
      'Jamoadagi hikoyalarga javob',
      'Boost: profilingiz Kashfda birinchi',
    ],
    extra:
      'Tangalarni bepul ham olasiz: har kuni, ketma-ket yetti kun uchun, to‘ldirilgan profil uchun va taklif qilgan do‘stlaringiz uchun. Ularni faqat xohlasangiz, bir martalik to‘lov bilan App Store yoki Google Play’da sotib olasiz — obunasiz va avtomatik yangilanishsiz.',
  },


  about: {
    kicker: 'Biz haqimizda',
    quote:
      'Niyyah ko‘ngilxushlik emas, turmush o‘rtog‘i izlayotgan odamlar uchun bor. Bu yerdagi hamma narsa shu bitta maqsad atrofida qurilgan: haqiqiy narsa aytadigan profillar, oila hozir bo‘la oladigan suhbatlar, va hech kim qo‘riqlamasdan turadigan chegaralar.',
    small:
      'Biz o‘z jamoasi uchun quradigan kichik guruhmiz, va shovqinli, gavjum ilovadan ko‘ra tinch va ishonchli ilovani afzal ko‘ramiz.',
    made: 'Bosniya va Gertsegovinada ehtiyotkorlik bilan tayyorlangan.',
  },

  faq: {
    title: 'Bizga ko‘p beriladigan savollar',
    items: [
      {
        q: 'Niyyah boshqa tanishuv ilovalaridan nimasi bilan farq qiladi?',
        a: 'Niyyah surish uchun emas, nikoh uchun qurilgan. Kashf faqat qarama-qarshi jinsni ko‘rsatadi, xabarlar faqat ikkovingiz bir-biringizni yoqtirganda ochiladi, va singil suhbatlariga mahram qo‘shishi mumkin. Profil nikohdan oldin muhim bo‘lganini olib yuradi: namoz, mazhab, nikoh rejalari, farzandlar va ko‘chish.',
      },
      {
        q: 'Mahram nima va uni qanday qo‘shaman?',
        a: 'Mahram — nikoh abadiy harom bo‘lgan erkak qarindosh, masalan ota, aka, amaki yoki tog‘a. Vasiyni ham chaqirishingiz mumkin. Sozlamalarda „Mahram talab qilish“ni yoqing va uch kishigacha chaqiring. Taklif e-pochta bilan keladi, mahram esa uni ilovada qabul qiladi. Mahram portalida u keyin suhbatlaringiz va mosliklaringizni ko‘radi, ammo yoza olmaydi. Imkoniyat ayollar profilida mavjud.',
      },
      {
        q: 'Niyyah halolmi?',
        a: 'Fatvo chiqarmaymiz va biror muassasa tasdiqini da’vo qilmaymiz. Ko‘rsatishimiz mumkin bo‘lgani — ilovaga qurilgan chegaralar: faqat qarama-qarshi jinsni ko‘rasiz, suhbat faqat o‘zaro qiziqishda ochiladi, mahram suhbatlarni o‘qiy oladi, jamoani esa moderatorlar ko‘rib chiqadi. Qanday niyat bilan foydalanishingiz o‘zingizga havola. Shubhangiz bo‘lsa, ishongan imomdan so‘rang.',
      },
      {
        q: 'Suhbatdan oldin savollar nima?',
        a: 'O‘z savollaringizdan uchtagacha qo‘yadigan imkoniyat. Moslikdan keyin ikkinchi tomon avval ularga javob beradi. Siz javoblarni o‘qib qaror qilasiz: „Yoqdi“ suhbatni ochadi, „Yoqmadi“ ochmaydi.',
      },
      {
        q: 'Joyimni kim ko‘ra oladi?',
        a: 'Aniq joyingizni hech kim ko‘rmaydi. Kashf xaritasida faqat taxminiy hudud sifatida ko‘rinasiz, u ham yoqsangiz. O‘chirsangiz, xaritadan yo‘qolasiz. Rasmlardagi yashirin ma’lumotlar, masalan GPS joyi, yuklash vaqtida o‘chiriladi.',
      },
      {
        q: 'Yolg‘on profillardan qanday himoya qilasiz?',
        a: 'Tasdiqlangan belgisi odam yuz tekshiruvidan o‘tganini bildiradi: uning jonli olingan surati profildagi rasmlar bilan solishtirilgan. Shikoyatlarni profilni to‘xtatib qo‘yishi yoki taqiqlashi mumkin bo‘lgan haqiqiy moderatorlar o‘qiydi, bloklash esa ikki tomonga ishlaydi. Taqiqlangan hisob shunchaki yangi e-pochta manzili bilan qaytib kela olmaydi.',
      },
      {
        q: 'Nima bepul, nima uchun tanga kerak?',
        a: 'Sizni asraydigan hamma narsa bepul: mahram, suhbatdan oldin savollar, yopiq suhbat va nazorat, shuningdek kuniga 30 ta profil va 20 yoqtirish, sizni yoqtirganlardan kuniga bir kishi, sizga yuborilgan barcha xabarlarni o‘qish hamda mosliklar bilan cheksiz suhbat. Tangalar bilan sizni yoqtirganlarning hammasini ko‘rishingiz, super yoqtirish (yoqtirishingiz eng tepada, ajralib turadi, ismingiz va rasmingiz bilan) yoki to‘g‘ridan-to‘g‘ri xabar (qarshi tomon bepul o‘qiydigan xabarli yoqtirish) yuborishingiz, o‘sha kun uchun ko‘proq profil va yoqtirish olishingiz hamda hikoyalarga javob berishingiz mumkin. Suhbat faqat ikkalangiz bir-biringizni yoqtirganingizda ochiladi. Tangalarni har kuni bepul olasiz, ularni bir martalik to‘lov bilan sotib olsangiz ham bo‘ladi. Obuna yo‘q, shuning uchun bekor qiladigan narsa ham yo‘q.',
      },
      {
        q: 'Profilimni vaqtincha yashira olamanmi?',
        a: 'Ha. Kashfni to‘xtatib turing, profilingiz o‘chirilmasdan Kashfdan yo‘qoladi. Mosliklar va suhbatlar qoladi, profilni esa xohlagan vaqtda qaytarasiz.',
      },
      {
        q: 'Ilova qaysi tillarda?',
        a: 'To‘qqiz tilda: bosniyacha, inglizcha, nemischa, turkcha, arabcha, indonezcha, urdu, malaycha va fransuzcha. Xorvat va serb qurilmalari o‘zidan bosniyachani oladi.',
      },
    ],
  },

  final: {
    title: 'Niyat bilan boshlang.',
    leadLaunched: 'Profil tuzing va haqiqatan ham haqiqiy narsa qurmoqchi bo‘lgan odamlar bilan tanishing.',
    leadWaitlist:
      'E-pochtangizni qoldiring, Niyyah ishga tushishi bilan xabar beramiz. Keyin profil tuzing va haqiqatan ham haqiqiy narsa qurmoqchi bo‘lgan odamlar bilan tanishing.',
  },

  consent: {
    title: 'Reklama o‘lchovi',
    more: 'Bu nimani anglatadi',
    details:
      'Facebook pikseli reklamamiz bu yerga necha kishini olib kelishini va kim ro‘yxatdan o‘tishini sanaydi. E-pochtangizni unga hech qachon yubormaymiz. Rad etsangiz, Facebook’dan hech narsa yuklanmaydi.',
    close: 'Yopish',
    body:
      'Reklamalarimiz bu yerga necha kishini olib kelishini o‘lchaymiz. Boshqa hech narsa, va e-pochtangiz hech qachon uzoqqa ketmaydi.',
    accept: 'Roziman',
    decline: 'Yo‘q, rahmat',
    label: 'Reklama o‘lchovi',
    change: 'O‘lchov tanlovi',
  },

  footer: {
    tagline: 'Niyat bilan izlangan nikoh.',
    made: 'Bosniya va Gertsegovinada ehtiyotkorlik bilan tayyorlangan.',
    language: 'Til',
  },
}
