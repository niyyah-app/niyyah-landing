import type { Copy } from './bs'

export const az: Copy = {
  meta: {
    title: 'Niyyah — Həyat yoldaşı tapmaq üçün halal tətbiq',
    description:
      'Niyyah evlənmək istəyən müsəlmanlar üçün tətbiqdir. Mesajlar yalnız qarşılıqlı maraqla açılır, söhbətdə məhrəm ola bilər, icma isə nəzarət altındadır. Pulsuz, doqquz dildə.',
    ogAlt: 'Niyyah: Niyyətlə axtarılan evlilik.',
  },

  nav: {
    skip: 'Məzmuna keç',
    label: 'Əsas naviqasiya',
    home: 'Niyyah, ana səhifə',
    links: [
      { href: '#mahrem', label: 'Məhrəm' },
      { href: '#kako', label: 'Necə işləyir' },
      { href: '#sigurnost', label: 'Təhlükəsizlik' },
      { href: '#preporuke', label: 'Rəylər' },
      { href: '#pitanja', label: 'Suallar' },
    ],
    language: 'Dil',
    menu: 'Menyu',
    close: 'Menyunu bağla',
  },

  cta: {
    download: 'Niyyah-ı yüklə',
    waitlist: 'Niyyah başlayanda mənə bildir',
    waitlistShort: 'Mənə bildir',
    emailLabel: 'E-poçt ünvanınız',
    emailPlaceholder: 'ad@numune.com',
    sending: 'Göndərilir',
    success: 'Təşəkkür edirik. Niyyah başlayan kimi sizə yazacağıq, in şā Allāh.',
    invalid: 'Düzgün e-poçt ünvanı yazın, məsələn ad@numune.com.',
    error: 'Alınmadı. Bağlantınızı yoxlayıb yenidən cəhd edin.',
    tooMany: 'Çox sayda cəhd. Bir neçə dəqiqədən sonra yenidən cəhd edin.',
    notConnected: 'Gözləmə siyahısı hələ açılmayıb. Tezliklə yenə baxın.',
    privacy: 'Ünvanınızı yalnız Niyyah başlayanda sizə xəbər vermək və sizi xoş gəldin hədiyyəsi gözləsin deyə işlədirik. Onu satmırıq və reklam üçün heç kimə vermirik.',
    soon: 'Tezliklə App Store və Google Play-də',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Yüklə',
    availableOn: 'Mövcuddur',
    eyebrow: 'EVLİLİK ÜÇÜN HALAL TƏTBİQ',
    waiting: '{count} nəfər artıq Niyyah-ı gözləyir',
  },

  hero: {
    title: 'Niyyətlə axtarılan evlilik.',
    lead:
      'Niyyah ciddi şəkildə həyat yoldaşı axtaran müsəlmanlar üçün tətbiqdir. Mesajlar yalnız qarşılıqlı maraqla açılır, söhbətdə məhrəm ola bilər, hüdudları isə siz deyil, tətbiq saxlayır.',
    secondary: 'Məhrəm necə işləyir',
    micro: 'Pulsuz. Tətbiq doqquz dildədir.',
    imageAlt: 'Niyyah-da profil kartı: namaz, məzhəb, evlilik planları və uyğunluq faizi.',
  },

  mockProfile: {
    name: 'Aminə, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Təsdiqlənmiş',
    match: 'uyğunluq',
    rows: [
      { k: 'Din', v: 'Əməl edirəm' },
      { k: 'Namaz', v: 'Müntəzəm' },
      { k: 'Məzhəb', v: 'Hənəfi' },
      { k: 'Evlilik', v: 'Bir il içində' },
    ],
    prompt: 'Evlilikdə iman deməkdir ki…',
    promptAnswer: 'çətin olanda da bir-birimizə vacib olanı xatırladaq.',
    pass: 'Növbəti',
    like: 'Xoşuma gəldi',
  },

  problem: {
    title: 'Tanışlıq tətbiqləri evlilik üçün qurulmayıb.',
    body: [
      'Onlar sürüşdürməyiniz üçün qurulub. Sonu olmayan kartlar, niyyəti bəlli olmayan insanlar, valideynlərə heç vaxt göstərə bilməyəcəyiniz söhbətlər.',
      'Qohumlar vasitəsilə tanışlıq isə yavaşdır, dairə dardır, təzyiq ağırdır. Bu iki dünyanın arasında bizim üçün heç nə yox idi.',
    ],
    pains: [
      'Kimin ciddi olduğunu, kimin sadəcə baxmağa gəldiyini bilmirsiniz.',
      'Bacılar təhqirdən, saxta profillərdən və bütün bunları tək yaşamaqdan qorxurlar.',
      'Tərcümə edilmiş tətbiqlər dilimizi, məzhəbimizi, adətlərimizi və qürbətdəkiləri anlamır.',
    ],
    eyebrow: 'NECƏ İŞLƏYİR',
    painsLabel: 'Tanış gəlir?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Digər tətbiqlər müvəffəqiyyəti içində keçirdiyiniz vaxtla ölçür. Biz isə ondan sonra bizə ehtiyacınız qalmayan nikahla ölçürük.',
  },

  pillars: {
    title: 'İlk ekrandan etibarən evlilik üçün qurulub.',
    items: [
      {
        word: 'Niyyət',
        title: 'Əvvəl niyyət',
        body: 'Hər profil insanın nə axtardığını və nə vaxt axtardığını deyir. Evlilik vaxtı, uşaqlar, köçmək: ilk mesajdan əvvəl bilirsiniz.',
      },
      {
        word: 'Ailə',
        title: 'Ailə ilə, tək deyil',
        body: 'Bacı atasını, qardaşını və ya qəyyumunu söhbətlərinə dəvət edə bilər. Rəyi dəyərli olanlardan heç nə gizlədilmir.',
      },
      {
        word: 'Hüdudlar',
        title: 'Quruluşu etibarilə halal',
        body: 'Yalnız əks cins. Mesajlar yalnız qarşılıqlı maraqla. Moderatorların baxdığı icma. Hüdudları tətbiq saxlayır, sizin qorumanıza ehtiyac yoxdur.',
      },
    ],
  },

  mahrem: {
    kicker: 'Məhrəm portalı',
    title: 'Rəyi dəyərli olanlardan heç nə gizli deyil.',
    body:
      '„Məhrəm tələb et“ düyməsini yandırın və etibar etdiyiniz ən çox üç nəfəri dəvət edin: atanızı, qardaşınızı, əminizi ya dayınızı, qəyyumunuzu. Onlar söhbətlərinizi məhrəm portalında görür, lakin yaza bilmir və heç kimlə tanış ola bilmir. Sadəcə oradadırlar — üzbəüz olduqları kimi.',
    steps: [
      { title: '„Məhrəm tələb et“ düyməsini yandırın', body: 'Tənzimlərdə tək bir açar.' },
      { title: 'Ən çox üç məhrəm dəvət edin', body: 'Dəvət e-poçtla gəlir, məhrəm isə onu tətbiqdə qəbul edir.' },
      {
        title: 'Onlar oxuyur, siz danışırsınız',
        body: 'Məhrəm söhbətləri və uyğunluqları görür. Portaldan yaza bilmir və tanışlıq imkanlarından istifadə etmir.',
      },
    ],
    who: [
      { label: 'Onun üçün', body: 'Tək deyilsiniz. Ailə yanınızdadır, amma çiyninizin üstündə durmur.' },
      { label: 'Ailə üçün', body: 'Kimlə və necə danışdığını bilirsiniz. Sirr yoxdur.' },
      { label: 'Onun üçün (oğlanın)', body: 'Onun ciddi olduğunun və ailənin iştirak etdiyinin açıq nişanəsi.' },
    ],
    parentsTitle: 'Valideynlər, bu sizin üçündür.',
    parentsBody:
      'Bilirik ki, „tanışlıq tətbiqi“ qızınıza və ya bacınıza yaraşan bir şey kimi səslənmir. Niyyah-da onun söhbətlərində ola, kimlə və necə yazdığını görə bilərsiniz — özünüz heç nə yazmadan. İki tərəf maraq göstərməyincə mesaj heç çatmır da, və bütün bunlar pulsuzdur.',
    share: 'Bu səhifəni ona göndərin',
    shareDone: 'Keçid kopyalandı',
    shareText: 'Niyyah: ailənin söhbətdə ola bildiyi evlilik tətbiqi.',
    imageAlt: 'Məhrəm portalı: ata qızının söhbətini oxuyur, yazmaq imkanı yoxdur.',
  },

  mockPortal: {
    title: 'Məhrəm portalı',
    readOnly: 'Yalnız oxumaq',
    watching: 'İzləyirsiniz: Aminə',
    with: 'Söhbət: Emir, 30',
    messages: [
      { from: 'him', text: 'Əssalamu əleykum. Söhbəti açdığınız üçün təşəkkür edirəm.' },
      { from: 'her', text: 'Və əleykümüs-salam. Ailələrin tez tanış olmasını istədiyinizi yazmışdınız?' },
      { from: 'him', text: 'Bəli. Valideynlərim ciddi bir şeydən əvvəl sizinkilərlə görüşmək istəyərdi.' },
    ],
    locked: 'Portaldan yazmaq olmur',
  },

  how: {
    kicker: 'Necə işləyir',
    title: 'Profildən söhbətə, dörd addımda.',
    steps: [
      { title: 'Niyyətlə profil qurun', body: 'Din, namaz, evlilik planları və öz sözləriniz.' },
      {
        title: 'Kəşf edin',
        body: 'Dəyərlərinizi bölüşən insanlar, uyğunluq faizi ilə. Kartlar ya xəritə, yaş, şəhər və dinə görə süzgəclər.',
      },
      {
        title: 'Qarşılıqlı maraq söhbəti açır',
        body: 'İkiniz bir-birinizi bəyənməyincə söhbət qapalı qalır. İlk mesajdan əvvəl sizin suallarınızla.',
      },
      { title: 'Ailə yanınızdadır', body: 'İstədiyiniz vaxt söhbətdə bir məhrəm.' },
    ],
  },

  questions: {
    kicker: 'Söhbətdən əvvəl suallar',
    title: 'Vacib olanı ilk mesajdan əvvəl soruşun.',
    body:
      'Ən çox üç sual qoyun. Uyğunluqdan sonra qarşı tərəf əvvəl cavab verir, siz oxuyub söhbətin açılıb-açılmayacağını qərara alırsınız. Əsas məsələdə uyğun gəlmədiyinizi bilmək üçün üç həftə yazışmağa ehtiyac yoxdur.',
    flow: ['Sualları siz qoyursunuz', 'Qarşı tərəf cavab verir', 'Qərarı siz verirsiniz'],
    topics: ['Namaz', 'Hicab', 'Köçmək', 'Uşaqlar'],
    topicsLabel: 'Ən çox soruşulan',
    imageAlt: 'Söhbətdən əvvəl suallar: üç cavab və söhbətin açılması qərarı.',
  },

  mockQuestions: {
    title: 'Emir suallarınıza cavab verdi',
    qa: [
      { q: 'Namazı müntəzəm qılırsınız?', a: 'Bəli, beşini. Sübh mənə ən ağır gəlir, amma çalışıram.' },
      { q: 'Nikahdan sonra özünüzü harada görürsünüz?', a: 'Sarayevoda, lakin köçmək barədə danışmağa açıqam.' },
      { q: 'Qərarlarınızda ailənin yeri nədir?', a: 'Böyükdür. Ailələrin tez tanış olmasını istəyərdim.' },
    ],
    no: 'Xoşuma gəlmədi',
    yes: 'Xoşuma gəldi',
  },

  profile: {
    kicker: 'Profil',
    title: 'Necə göründüyünü deyil, necə düşündüyünü tanıyın.',
    lead:
      'Şəkillərlə və təsvirlə yanaşı profil nikahdan əvvəl danışılanları daşıyır. Daha az ehtimal, daha az itirilmiş vaxt, „hə“ ya „yox“a daha tez çatmaq.',
    fields: [
      { k: 'Dinlə münasibət', v: ['Əməl edirəm', 'Çalışıram', 'Hazırda əməl etmirəm'] },
      { k: 'Namaz', v: ['Müntəzəm', 'Bəzən', 'Nadir hallarda'] },
      { k: 'Məzhəb', v: ['Hənəfi', 'Şafii', 'Maliki', 'Hənbəli', 'Fərqi yoxdur'] },
      { k: 'Hicab', v: ['Örtürəm', 'Örtmürəm', 'Niyyətim var'] },
      { k: 'Evlilik vaxtı', v: ['Dərhal', 'Bir il içində', '1–2 il', 'Tələsmirəm'] },
      { k: 'Köçmək', v: ['Hazıram', 'Mümkün deyil', 'Danışmağa açıqam'] },
      { k: 'Uşaqlar', v: ['İstəyirəm', 'İstəmirəm', 'Var', 'Əmin deyiləm'] },
    ],
    more: 'Bir də: siqaret, təhsil, peşə, ana dili, boy və maraqlar.',
    promptsTitle: 'Öz sözlərinizlə',
    prompts: ['Evlilikdə iman deməkdir ki…', 'Həyat yoldaşında nə axtarırsınız?', 'Həftəsonunu necə keçirirsiniz?'],
    situationsTitle: 'Vəziyyətlər',
    situationsBody:
      'Yeddi sahədə real vəziyyətlərə cavab verin. Başqaları necə göründüyünüzü deyil, necə düşündüyünüzü görür.',
    situations: ['Evlilik', 'Ünsiyyət', 'Mübahisəni həll etmək', 'Ailə', 'Din', 'Pul', 'Valideynlik'],
    matchTitle: 'Uyğunluq faizi',
    matchBody: 'Hər kartda: ortaq maraqlar, dinlə münasibət və niyyət.',
    imageAlt: 'Niyyah-da profil təfərrüatları: din, evlilik planları və vəziyyətlərə cavablar.',
  },

  mockDetails: {
    title: 'Emir barədə',
    rows: [
      { k: 'Evlilik', v: 'Bir il içində' },
      { k: 'Köçmək', v: 'Danışmağa açıq' },
      { k: 'Uşaqlar', v: 'İstəyirəm' },
      { k: 'Peşə', v: 'Mühəndis' },
    ],
    situation: 'Vəziyyət · Mübahisəni həll etmək',
    question: 'Ailə üstündə mübahisə etdiniz. Əvvəl nə edirsiniz?',
    answer: 'İkimiz sakitləşənə qədər gözləyirəm, sonra onun məsələyə baxışını soruşuram. Ancaq ondan sonra öz sözümü deyirəm.',
  },

  safety: {
    kicker: 'Təhlükəsizlik və məxfilik',
    title: 'Məxfiliyiniz satılan mal deyil.',
    lead: 'Məlumatlarınızı heç vaxt satmırıq. Təhlükəsizlik tətbiqin içində qurulub, sonradan əlavə edilən seçim deyil.',
    items: [
      {
        icon: 'pin',
        title: 'Dəqiq yer heç vaxt',
        body: 'Xəritə yalnız təxmini sahəni göstərir, o da siz açıq saxladığınız müddətdə. Söndürdünüz — xəritədən yox olursunuz.',
      },
      {
        icon: 'photo',
        title: 'Şəkillərin yoxlanması',
        body: 'Aydın üz, bir nəfər, bulanıq və örtülü şəkil yox. Şəkildəki gizli məlumatları, məsələn GPS yerini, sistem silir.',
      },
      {
        icon: 'badge',
        title: 'Təsdiqlənmiş nişanı',
        body: 'Şəkillərdəki şəxs olduğunuzun qısa yoxlanması. Telefon nömrəsini ya e-poçtu Kəşfə girməzdən əvvəl təsdiqləyirsiniz.',
      },
      {
        icon: 'people',
        title: 'Əsl moderatorlar',
        body: 'Şikayətləri profilləri dayandıra və qadağan edə bilən ayrı moderator qrupu oxuyur.',
      },
      {
        icon: 'block',
        title: 'Bloklama iki tərəfə işləyir',
        body: 'Kimisə bloklasanız, tətbiqdə bir-birinizdən yox olursunuz.',
      },
      {
        icon: 'pause',
        title: 'Kəşfi fasiləyə verin',
        body: 'Profili silmədən gizlədin. Uyğunluqlar və söhbətlər qalır.',
      },
      {
        icon: 'finger',
        title: 'Barmaq ya üzlə açmaq',
        body: 'Barmaq iziniz heç vaxt cihazınızdan çıxmır.',
      },
    ],
    ayahRef: 'əl-Qiyamə 75:4',
    ayahNote:
      'Açılış ekranında əl-Qiyamə surəsindən bir ayə (75:3–4) var: barmaq uclarını da yenidən düzəldə bilən Allah barədə.',
  },

  community: {
    kicker: 'İcma',
    title: 'Evlilikdən əvvəl evliliyi öyrənmək üçün yer.',
    lead:
      'Soruşursunuz, təcrübələri oxuyursunuz, başqalarından öyrənirsiniz. Hər yazı görünməzdən əvvəl moderatordan keçir, və heç kimin adını altına qoymaq istəmədiyi şərhlər yoxdur.',
    items: [
      { title: 'Qardaşlardan soruş, Bacılardan soruş', body: 'Yalnız bir cinsin gördüyü ayrı sahələr.' },
      {
        title: 'Lazım olanda adsız',
        body: 'Bəzi sualları öz adınla soruşmaq çətindir. „Adsız bacı“ ya „Adsız qardaş“ kimi paylaşın.',
      },
      { title: 'Günün sualı', body: 'Hər gün evlilik və dəyərlər barədə bir sual, ana ekranda.' },
      {
        title: 'Açıq şərhsiz hekayələr',
        body: '24 saat ya bir dəfə baxış. Bütün icma üçün ya yalnız uyğunluqlar üçün.',
      },
    ],
    reactionsLabel: 'Eqonu deyil, faydanı mükafatlandıran reaksiyalar',
    reactions: ['Faydalı', 'Məntiqlidir', 'İlhamverici', 'Düşünülmüş'],
    imageAlt: 'Niyyah icması: Bacılardan soruş sahəsində adsız bir sual.',
  },

  mockPost: {
    space: 'Bacılardan soruş',
    author: 'Adsız bacı',
    category: 'Evlilik',
    text: 'Tətbiq vasitəsilə həyat yoldaşı axtardığınızı valideynlərinizə necə dediniz? Necə qarşıladılar?',
    reviewed: 'Moderator baxdı',
  },

  languages: {
    title: 'Səhifə sizin dilinizdə, tətbiq doqquz dildə.',
    lead:
      'Bu səhifəni azərbaycanca oxuyursunuz. Tətbiqin özü, e-poçtlar və bildirişlər doqquz dildədir: bosniya, ingilis, alman, türk, ərəb, indoneziya, urdu, malay və fransız. Ərəb və urdu sağdan sola yazılır. Bakıda olun, Gəncədə, Sarayevoda ya İstanbulda.',
  },


  pricing: {
    kicker: 'Pulsuz və sikkələr',
    title: 'Sizi qoruyan şey pulsuzdur.',
    lead: 'Məhrəm, söhbətdən əvvəl suallar, qapalı söhbət və nəzarət hamı üçündür. Təhlükəsizliyin pulunu almırıq. Sikkələr yalnız sürətləndirir — və abunə yoxdur.',
    freeTitle: 'Pulsuz, hamı üçün',
    free: [
      'Profil və Kəşfdə gündə 30 profil',
      'Gündə 20 bəyənmə',
      'Gündə 1 tanışlıq mesajı',
      'Uyğunluqlar və onlarla hüdudsuz söhbət',
      'Söhbətdə məhrəm',
      'Söhbətdən əvvəl suallar',
      'İcma, hekayələr və Günün sualı',
      'Hər gün pulsuz sikkələr',
    ],
    premiumTitle: 'Sikkələr, daha çoxunu istədikdə',
    premium: [
      'Kimin sizi bəyəndiyini görün',
      'Söhbəti dərhal açan super bəyənmə',
      'Əlavə tanışlıq mesajları',
      'Bu gün üçün daha çox bəyənmə və profil',
      'Keçdiyiniz profili geri qaytarın',
      'İcma hekayələrinə cavab',
      'Boost: profiliniz Kəşfdə birinci',
    ],
    extra:
      'Sikkələri pulsuz da qazanırsınız: hər gün, ardıcıl yeddi gün üçün, doldurulmuş profil üçün və dəvət etdiyiniz dostlar üçün. Onları yalnız istəsəniz, birdəfəlik ödənişlə App Store ya Google Play-də alırsınız — abunəsiz və avtomatik yenilənməsiz.',
  },


  about: {
    kicker: 'Haqqımızda',
    quote:
      'Niyyah əyləncə deyil, həyat yoldaşı axtaranlar üçündür. Buradakı hər şey o bir məqsədin ətrafında qurulub: həqiqi bir şey deyən profillər, ailənin iştirak edə bildiyi söhbətlər və kimsə qorumadan dayanan hüdudlar.',
    small:
      'Biz öz icması üçün quran kiçik bir komandayıq, və gurultulu, izdihamlı tətbiqdən çox sakit, etibarlı tətbiqi üstün tuturuq.',
    made: 'Bosniya və Herseqovinada diqqətlə hazırlanıb.',
  },

  faq: {
    title: 'Bizə çox verilən suallar',
    items: [
      {
        q: 'Niyyah digər tanışlıq tətbiqlərindən nə ilə fərqlənir?',
        a: 'Niyyah sürüşdürmək üçün deyil, evlilik üçün qurulub. Kəşf yalnız əks cinsi göstərir, mesajlar yalnız ikiniz bir-birinizi bəyəndikdə açılır, və bacı söhbətlərinə məhrəm qata bilər. Profil nikahdan əvvəl vacib olanı daşıyır: namazı, məzhəbi, evlilik planlarını, uşaqları və köçməyi.',
      },
      {
        q: 'Məhrəm nədir və onu necə əlavə edirəm?',
        a: 'Məhrəm evlənmək həmişəlik haram olan kişi qohumdur, məsələn ata, qardaş, əmi ya dayı. Qəyyumu da dəvət edə bilərsiniz. Tənzimlərdə „Məhrəm tələb et“ düyməsini yandırın və ən çox üç nəfər dəvət edin. Dəvət e-poçtla gəlir, məhrəm isə onu tətbiqdə qəbul edir. Məhrəm portalında o sonra söhbətlərinizi və uyğunluqlarınızı görür, lakin yaza bilmir. İmkan qadın profillərində mövcuddur.',
      },
      {
        q: 'Niyyah halaldır?',
        a: 'Fətva vermirik və heç bir qurumun təsdiqini iddia etmirik. Göstərə bildiyimiz tətbiqə qurulmuş hüdudlardır: yalnız əks cinsi görürsünüz, söhbət yalnız qarşılıqlı maraqla açılır, məhrəm söhbətləri oxuya bilir, icmaya isə moderatorlar baxır. Hansı niyyətlə işlətdiyiniz sizə qalır. Tərəddüd varsa, etibar etdiyiniz bir imamdan soruşun.',
      },
      {
        q: 'Söhbətdən əvvəl suallar nədir?',
        a: 'Öz suallarınızdan ən çox üçünü qoyduğunuz seçim. Uyğunluqdan sonra qarşı tərəf əvvəl onlara cavab verir. Siz cavabları oxuyub qərara alırsınız: „Xoşuma gəldi“ söhbəti açır, „Xoşuma gəlmədi“ açmır.',
      },
      {
        q: 'Yerimi kim görə bilər?',
        a: 'Dəqiq yerinizi heç kim görmür. Kəşf xəritəsində yalnız təxmini sahə kimi görünürsünüz, o da siz açsanız. Söndürdünüz — xəritədən yox olursunuz. Şəkillərdəki gizli məlumatlar, məsələn GPS yeri, yükləmə zamanı silinir.',
      },
      {
        q: 'Saxta profillərdən necə qoruyursunuz?',
        a: 'Təsdiqlənmiş nişanı şəxsin üz yoxlamasından keçdiyini bildirir: onun canlı çəkilmiş şəkli profildəki şəkillərlə müqayisə olunub. Şikayətləri profili dayandıra ya qadağan edə bilən əsl moderatorlar oxuyur, bloklama isə iki tərəfə işləyir. Qadağan olunmuş hesab sadəcə yeni e-poçt ünvanı ilə geri qayıda bilməz.',
      },
      {
        q: 'Nə pulsuzdur, nəyə isə sikkə lazımdır?',
        a: 'Sizi qoruyan hər şey pulsuzdur: məhrəm, söhbətdən əvvəl suallar, qapalı söhbət və nəzarət, üstəlik gündə 20 bəyənmə və bir tanışlıq mesajı və uyğunluqlarla hüdudsuz söhbət. Sikkələrlə kimin sizi bəyəndiyini görə, super bəyənmə ya əlavə tanışlıq mesajı göndərə, həmin gün üçün daha çox profil və bəyənmə ala və hekayələrə cavab verə bilərsiniz. Sikkələri hər gün pulsuz qazanırsınız, onları birdəfəlik ödənişlə ala da bilərsiniz. Abunə yoxdur, ona görə ləğv ediləsi heç nə də yoxdur.',
      },
      {
        q: 'Profilimi müvəqqəti gizlədə bilərəm?',
        a: 'Bəli. Kəşfi fasiləyə verin, profiliniz silinmədən Kəşfdən yox olur. Uyğunluqlar və söhbətlər qalır, profili isə istədiyiniz vaxt geri qaytarırsınız.',
      },
      {
        q: 'Tətbiq hansı dillərdədir?',
        a: 'Doqquz dildə: bosniya, ingilis, alman, türk, ərəb, indoneziya, urdu, malay və fransız. Xorvat və serb cihazları özbaşına bosniya dilini alır.',
      },
    ],
  },

  final: {
    title: 'Niyyətlə başlayın.',
    leadLaunched: 'Profil qurun və həqiqi bir şey qurmaq istəyən insanlarla tanış olun.',
    leadWaitlist:
      'E-poçtunuzu buraxın, Niyyah başlayan kimi xəbər verəcəyik. Sonra profil qurun və həqiqi bir şey qurmaq istəyən insanlarla tanış olun.',
  },

  consent: {
    title: 'Reklamın ölçülməsi',
    more: 'Bu nə deməkdir',
    details:
      'Facebook-dan bir piksel reklamımızın bura neçə nəfər gətirdiyini və kimin qeydiyyatdan keçdiyini sayır. E-poçt ünvanınızı ona heç vaxt göndərmirik. İmtina etsəniz, Facebook-dan heç nə yüklənmir.',
    close: 'Bağla',
    body:
      'Reklamlarımızın bura neçə nəfər gətirdiyini ölçürük. Başqa heç nə, və e-poçt ünvanınız heç vaxt daha irəli getmir.',
    accept: 'Qəbul edirəm',
    decline: 'Yox, sağ olun',
    label: 'Reklamın ölçülməsi',
    change: 'Ölçmə seçimi',
  },

  footer: {
    tagline: 'Niyyətlə axtarılan evlilik.',
    made: 'Bosniya və Herseqovinada diqqətlə hazırlanıb.',
    rights: 'Niyyah',
    language: 'Dil',
  },
}
