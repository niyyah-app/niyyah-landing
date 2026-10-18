import type { Copy } from './bs'

export const sw: Copy = {
  meta: {
    title: 'Niyyah — Programu halali ya kutafuta mwenzi wa ndoa',
    description:
      'Niyyah ni programu kwa Waislamu wanaotafuta ndoa. Ujumbe hufunguka tu pande zote mbili zikipendezwa, mahramu anaweza kuwa ndani ya mazungumzo, na jumuiya inasimamiwa. Bila malipo, kwa lugha tisa.',
    ogAlt: 'Niyyah: Ndoa, inayotafutwa kwa nia.',
  },

  nav: {
    skip: 'Nenda kwenye maudhui',
    label: 'Urambazaji mkuu',
    home: 'Niyyah, ukurasa wa kwanza',
    links: [
      { href: '#mahrem', label: 'Mahramu' },
      { href: '#kako', label: 'Jinsi inavyofanya kazi' },
      { href: '#sigurnost', label: 'Usalama' },
      { href: '#preporuke', label: 'Shuhuda' },
      { href: '#pitanja', label: 'Maswali' },
    ],
    language: 'Lugha',
    menu: 'Menyu',
    close: 'Funga menyu',
  },

  cta: {
    download: 'Pata Niyyah',
    waitlist: 'Niambie Niyyah ikianza',
    waitlistShort: 'Niambie',
    emailLabel: 'Barua pepe yako',
    emailPlaceholder: 'jina@mfano.com',
    sending: 'Inatumwa',
    success: 'Asante. Tutakuandikia mara Niyyah itakapoanza, in shā Allāh.',
    invalid: 'Andika barua pepe sahihi, kwa mfano jina@mfano.com.',
    error: 'Hakufanikiwa. Angalia muunganisho wako na ujaribu tena.',
    tooMany: 'Majaribio mengi mno. Jaribu tena baada ya dakika chache.',
    notConnected: 'Orodha ya kusubiri haijafunguliwa bado. Pitia hivi karibuni.',
    privacy: 'Barua pepe yako tunaitumia tu kukujulisha Niyyah ikianza na ili zawadi ya kukukaribisha ikusubiri. Hatuiuzi wala hatumpi mtu yeyote kwa ajili ya matangazo.',
    soon: 'Karibuni kwenye App Store na Google Play',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Ipate kwenye',
    availableOn: 'Inapatikana kwenye',
    eyebrow: 'PROGRAMU HALALI YA NDOA',
    waiting: 'Watu {count} tayari wanaisubiri Niyyah',
  },

  hero: {
    title: 'Ndoa, inayotafutwa kwa nia.',
    lead:
      'Niyyah ni programu kwa Waislamu wanaotafuta mwenzi wa ndoa kwa dhati. Ujumbe hufunguka tu pande zote mbili zikipendezwa, mahramu anaweza kuwa ndani ya mazungumzo, na mipaka inashikiliwa na programu, sio na wewe.',
    secondary: 'Jinsi mahramu hufanya kazi',
    micro: 'Bila malipo. Programu ipo kwa lugha tisa.',
    imageAlt: 'Kadi ya wasifu katika Niyyah: swala, madhehebu, mipango ya ndoa na asilimia ya kufanana.',
  },

  mockProfile: {
    name: 'Amina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Imethibitishwa',
    match: 'kufanana',
    rows: [
      { k: 'Dini', v: 'Nafuata' },
      { k: 'Swala', v: 'Kwa ukawaida' },
      { k: 'Madhehebu', v: 'Hanafi' },
      { k: 'Ndoa', v: 'Ndani ya mwaka mmoja' },
    ],
    prompt: 'Imani katika ndoa inamaanisha…',
    promptAnswer: 'kukumbushana lile lenye maana, hata nyakati ngumu.',
    pass: 'Inayofuata',
    like: 'Nimependa',
  },

  problem: {
    title: 'Programu za uchumba hazikuundwa kwa ajili ya ndoa.',
    body: [
      'Ziliundwa ili uendelee kusogeza. Kadi zisizoisha, watu wasio na nia iliyo wazi, na mazungumzo usiyoweza kuwaonyesha wazazi wako.',
      'Kwa upande mwingine, kufahamiana kupitia ndugu ni polepole, mzunguko ni mdogo na msongo ni mkubwa. Katikati ya dunia hizi mbili hakukuwa na kitu kwa ajili yetu.',
    ],
    pains: [
      'Hujui nani ana dhamira na nani amekuja kutazama tu.',
      'Wadada wanahofia udhalilishaji, wasifu wa kughushi, na kukabiliana na yote hayo pekee.',
      'Programu zilizotafsiriwa hazielewi lugha yetu, madhehebu yetu, desturi zetu wala wanaoishi ughaibuni.',
    ],
    eyebrow: 'JINSI INAVYOFANYA KAZI',
    painsLabel: 'Inasikika ukiijua?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Programu nyingine zinapima mafanikio kwa muda unaotumia ndani yake. Sisi tunapima kwa nikaa ambayo baada yake hutuhitaji tena.',
  },

  pillars: {
    title: 'Imeundwa kwa ndoa, kuanzia skrini ya kwanza.',
    items: [
      {
        word: 'Nia',
        title: 'Nia kwanza',
        body: 'Kila wasifu unasema mtu anatafuta nini na lini. Muda wa kuoa au kuolewa, watoto, kuhamia: unajua kabla ya ujumbe wa kwanza.',
      },
      {
        word: 'Familia',
        title: 'Na familia, sio peke yako',
        body: 'Dada anaweza kumwalika baba yake, kaka yake au mlezi wake kuwa katika mazungumzo yake. Hakuna kinachofichwa kwa wale wenye maoni ya maana.',
      },
      {
        word: 'Mipaka',
        title: 'Halali kwa muundo wenyewe',
        body: 'Jinsia tofauti tu. Ujumbe tu pande zote mbili zikipendezwa. Jumuiya inayokaguliwa na wasimamizi. Mipaka inashikiliwa na programu, hulazimiki kuilinda.',
      },
    ],
  },

  mahrem: {
    kicker: 'Lango la mahramu',
    title: 'Hakuna kinachofichwa kwa wale wenye maoni ya maana.',
    body:
      'Washa „Dai mahramu“ na mwalike hadi watu watatu unaowaamini: baba, kaka, mjomba au ami, mlezi. Wanaona mazungumzo yako katika lango la mahramu, lakini hawawezi kuandika na hawawezi kufahamiana na mtu. Wako tu, kama wangekuwapo ana kwa ana.',
    steps: [
      { title: 'Washa „Dai mahramu“', body: 'Kitufe kimoja katika mipangilio.' },
      { title: 'Mwalike hadi mahramu watatu', body: 'Mwaliko huja kwa barua pepe, na mahramu anaukubali ndani ya programu.' },
      {
        title: 'Wanasoma, wewe unazungumza',
        body: 'Mahramu anaona mazungumzo na mafanano. Hawezi kuandika kutoka langoni na hatumii vipengele vya kufahamiana.',
      },
    ],
    who: [
      { label: 'Kwake (dada)', body: 'Hauko peke yako. Familia ipo, lakini haikusimamia begani.' },
      { label: 'Kwa familia', body: 'Mnajua anazungumza na nani na vipi. Bila siri.' },
      { label: 'Kwake (kaka)', body: 'Alama ya wazi kwamba ana dhamira na familia imeshirikishwa.' },
    ],
    parentsTitle: 'Wazazi, hii ni kwa ajili yenu.',
    parentsBody:
      'Tunajua „programu ya uchumba“ haisikiki kama kitu kwa binti au dada yenu. Katika Niyyah mnaweza kuwa ndani ya mazungumzo yake na kuona anaandika na nani na vipi, bila nyinyi kuandika kitu. Ujumbe hauwezi hata kufika kabla pande zote mbili kuonyesha kupendezwa, na yote haya ni bila malipo.',
    share: 'Mtumie ukurasa huu',
    shareDone: 'Kiungo kimenakiliwa',
    shareText: 'Niyyah: programu ya ndoa ambapo familia inaweza kuwa ndani ya mazungumzo.',
    imageAlt: 'Lango la mahramu: baba anasoma mazungumzo ya binti yake, bila uwezo wa kuandika.',
  },

  mockPortal: {
    title: 'Lango la mahramu',
    readOnly: 'Kusoma pekee',
    watching: 'Unamsimamia: Amina',
    with: 'Mazungumzo na: Emir, 30',
    messages: [
      { from: 'him', text: 'Assalamu alaykum. Asante kwa kufungua mazungumzo.' },
      { from: 'her', text: 'Wa alaykumu salaam. Uliandika kwamba ungependa familia zifahamiane mapema?' },
      { from: 'him', text: 'Ndiyo. Wazazi wangu wangependa kuwakutana wako kabla ya jambo lolote la dhati.' },
    ],
    locked: 'Haiwezekani kuandika kutoka langoni',
  },

  how: {
    kicker: 'Jinsi inavyofanya kazi',
    title: 'Kutoka wasifu hadi mazungumzo, kwa hatua nne.',
    steps: [
      { title: 'Tengeneza wasifu wenye nia', body: 'Dini, swala, mipango ya ndoa na maneno yako mwenyewe.' },
      {
        title: 'Gundua',
        body: 'Watu wanaoshiriki maadili yako, pamoja na asilimia ya kufanana. Kadi au ramani, na vichujio vya umri, mji na dini.',
      },
      {
        title: 'Kupendezwa kwa pande zote mbili hufungua mazungumzo',
        body: 'Hadi mnapendana wote wawili, mazungumzo yanabaki yamefungwa. Pamoja na maswali yako kabla ya ujumbe wa kwanza.',
      },
      { title: 'Familia iko nawe', body: 'Mahramu ndani ya mazungumzo, wakati wowote unapotaka.' },
    ],
  },

  questions: {
    kicker: 'Maswali kabla ya mazungumzo',
    title: 'Uliza lenye maana, kabla ya ujumbe wa kwanza.',
    body:
      'Weka hadi maswali matatu. Baada ya kufanana, upande mwingine hujibu kwanza, kisha wewe unasoma na kuamua kama mazungumzo yafunguke. Hakuna wiki tatu za kutumiana ujumbe ili kugundua hamwelewani kwa mambo ya msingi.',
    flow: ['Maswali unayaweka wewe', 'Upande mwingine hujibu', 'Unaamua wewe'],
    topics: ['Swala', 'Hijabu', 'Kuhamia', 'Watoto'],
    topicsLabel: 'Linaulizwa zaidi kuhusu',
    imageAlt: 'Maswali kabla ya mazungumzo: majibu matatu na uamuzi kama mazungumzo yafunguke.',
  },

  mockQuestions: {
    title: 'Emir amejibu maswali yako',
    qa: [
      { q: 'Unaswali kwa ukawaida?', a: 'Ndiyo, zote tano. Alfajiri ndiyo ngumu kwangu, lakini najitahidi.' },
      { q: 'Unajiona wapi baada ya nikaa?', a: 'Sarajevo, lakini niko tayari kuzungumzia kuhamia.' },
      { q: 'Familia ina uzito gani katika maamuzi yako?', a: 'Mkubwa. Ningependa familia zifahamiane mapema.' },
    ],
    no: 'Sijapenda',
    yes: 'Nimependa',
  },

  profile: {
    kicker: 'Wasifu',
    title: 'Jua anafikiri vipi, sio tu anaonekana vipi.',
    lead:
      'Zaidi ya picha na maelezo, wasifu unabeba yale yanayozungumzwa kabla ya nikaa. Kubahatisha kidogo, muda mdogo kupotea, kufika haraka kwenye „ndiyo“ au „hapana“.',
    fields: [
      { k: 'Uhusiano na dini', v: ['Nafuata', 'Najitahidi', 'Kwa sasa sifuati'] },
      { k: 'Swala', v: ['Kwa ukawaida', 'Mara nyingine', 'Mara chache'] },
      { k: 'Madhehebu', v: ['Hanafi', 'Shafi’i', 'Maliki', 'Hanbali', 'Haijalishi'] },
      { k: 'Hijabu', v: ['Navaa', 'Sivai', 'Nina nia'] },
      { k: 'Muda wa ndoa', v: ['Mara moja', 'Ndani ya mwaka mmoja', 'Miaka 1–2', 'Hakuna haraka'] },
      { k: 'Kuhamia', v: ['Niko tayari', 'Haiwezekani', 'Niko tayari kuzungumza'] },
      { k: 'Watoto', v: ['Nataka', 'Sitaki', 'Ninao', 'Sina uhakika'] },
    ],
    more: 'Na zaidi: sigara, elimu, kazi, lugha ya mama, urefu na mapenzi ya moyoni.',
    promptsTitle: 'Kwa maneno yako',
    prompts: ['Imani katika ndoa inamaanisha…', 'Unatafuta nini kwa mwenzi?', 'Unatumia wikendi vipi?'],
    situationsTitle: 'Hali',
    situationsBody:
      'Jibu hali za kweli katika maeneo saba. Wengine wanaona unafikiri vipi, sio tu unaonekana vipi.',
    situations: ['Ndoa', 'Mawasiliano', 'Kumaliza mzozo', 'Familia', 'Dini', 'Fedha', 'Uzazi'],
    matchTitle: 'Asilimia ya kufanana',
    matchBody: 'Kwa kila kadi: mapenzi ya moyoni yanayofanana, uhusiano na dini na nia.',
    imageAlt: 'Maelezo ya wasifu katika Niyyah: dini, mipango ya ndoa na majibu ya hali.',
  },

  mockDetails: {
    title: 'Kuhusu Emir',
    rows: [
      { k: 'Ndoa', v: 'Ndani ya mwaka mmoja' },
      { k: 'Kuhamia', v: 'Tayari kuzungumza' },
      { k: 'Watoto', v: 'Nataka' },
      { k: 'Kazi', v: 'Mhandisi' },
    ],
    situation: 'Hali · Kumaliza mzozo',
    question: 'Mligombana kwa sababu ya familia. Unafanya nini kwanza?',
    answer: 'Nasubiri hadi sote wawili tutulie, kisha namuuliza anaona vipi jambo hilo. Baada ya hapo tu nasema langu.',
  },

  safety: {
    kicker: 'Usalama na faragha',
    title: 'Faragha yako si bidhaa.',
    lead: 'Hatuuzi data yako kamwe. Usalama umejengwa ndani ya programu, haukuongezwa kama chaguo.',
    items: [
      {
        icon: 'pin',
        title: 'Mahali sahihi kamwe',
        body: 'Ramani inaonyesha eneo la kukaribia tu, na hilo tu wakati unaiwasha. Unaizima, na unapotea kwenye ramani.',
      },
      {
        icon: 'photo',
        title: 'Ukaguzi wa picha',
        body: 'Uso ulio wazi, mtu mmoja, bila picha zenye ukungu au zilizofunikwa. Data iliyofichika kwenye picha, kama mahali pa GPS, mfumo unaiondoa.',
      },
      {
        icon: 'badge',
        title: 'Alama ya Imethibitishwa',
        body: 'Ukaguzi mfupi kwamba wewe ni mtu wa kwenye picha. Namba ya simu au barua pepe unaithibitisha kabla ya kuingia Gundua.',
      },
      {
        icon: 'people',
        title: 'Wasimamizi wa kweli',
        body: 'Malalamiko yanasomwa na timu maalumu ya wasimamizi inayoweza kusimamisha na kuzuia wasifu.',
      },
      {
        icon: 'block',
        title: 'Kuzuia hufanya kazi pande zote mbili',
        body: 'Ukimzuia mtu, mnapotea kwa kila mmoja ndani ya programu.',
      },
      {
        icon: 'pause',
        title: 'Simamisha Gundua',
        body: 'Ficha wasifu bila kuufuta. Mafanano na mazungumzo yanabaki.',
      },
      {
        icon: 'finger',
        title: 'Kufungua kwa kidole au uso',
        body: 'Alama ya kidole chako haitoki kamwe kwenye kifaa chako.',
      },
    ],
    ayahRef: 'Al-Qiyamah 75:4',
    ayahNote:
      'Kwenye skrini ya kufungua kuna aya kutoka sura ya Al-Qiyamah (75:3–4), kuhusu Allah anayeweza kuunda upya hata ncha za vidole.',
  },

  community: {
    kicker: 'Jumuiya',
    title: 'Mahali pa kujifunza kuhusu ndoa kabla ya ndoa.',
    lead:
      'Unauliza, unasoma mambo waliyopitia wengine, unajifunza. Kila chapisho hupitiwa na msimamizi kabla ya kuonekana, na hakuna maoni ambayo mtu hangekubali jina lake liwe chini yake.',
    items: [
      { title: 'Uliza kaka, Uliza dada', body: 'Nafasi tofauti zinazoonwa na jinsia moja tu.' },
      {
        title: 'Bila jina, inapohitajika',
        body: 'Maswali mengine ni magumu kuulizwa kwa jina lako. Chapisha kama „Dada bila jina“ au „Kaka bila jina“.',
      },
      { title: 'Swali la siku', body: 'Kila siku swali moja kuhusu ndoa na maadili, kwenye skrini ya kwanza.' },
      {
        title: 'Hadithi bila maoni ya hadharani',
        body: 'Saa 24 au kuonwa mara moja. Kwa jumuiya yote au kwa mafanano pekee.',
      },
    ],
    reactionsLabel: 'Majibu yanayothamini manufaa, sio kujivuna',
    reactions: ['Yenye manufaa', 'Ina maana', 'Inatia moyo', 'Imefikiriwa'],
    imageAlt: 'Jumuiya ya Niyyah: swali bila jina katika nafasi ya Uliza dada.',
  },

  mockPost: {
    space: 'Uliza dada',
    author: 'Dada bila jina',
    category: 'Ndoa',
    text: 'Mliwaambia vipi wazazi kwamba mnatafuta mwenzi kupitia programu? Walisemaje?',
    reviewed: 'Imepitiwa na msimamizi',
  },

  languages: {
    title: 'Ukurasa kwa lugha yako, programu kwa lugha tisa.',
    lead:
      'Ukurasa huu unausoma kwa Kiswahili. Programu yenyewe, barua pepe na taarifa zipo kwa lugha tisa: Kibosnia, Kiingereza, Kijerumani, Kituruki, Kiarabu, Kiindonesia, Kiurdu, Kimalay na Kifaransa. Kiarabu na Kiurdu vinasomwa kutoka kulia kwenda kushoto. Uwe Dar es Salaam, Mombasa, Sarajevo au London.',
  },


  pricing: {
    kicker: 'Bila malipo na sarafu',
    title: 'Kinachokulinda ni bila malipo.',
    lead: 'Mahramu, maswali kabla ya mazungumzo, gumzo lililofungwa na usimamizi yanapatikana kwa wote. Hatutozi kwa usalama. Sarafu zinaongeza kasi tu — na hakuna usajili wa malipo.',
    freeTitle: 'Bila malipo, kwa kila mtu',
    free: [
      'Wasifu na wasifu 30 kwa siku kwenye Gundua',
      'Mapenzi 20 kwa siku',
      'Ujumbe 1 wa utambulisho kwa siku',
      'Mafanano na mazungumzo bila kikomo nao',
      'Mahramu ndani ya mazungumzo',
      'Maswali kabla ya mazungumzo',
      'Jumuiya, hadithi na Swali la siku',
      'Sarafu bila malipo kila siku',
    ],
    premiumTitle: 'Sarafu, unapotaka zaidi',
    premium: [
      'Ona ni nani aliyekupenda',
      'Super like inayofungua mazungumzo papo hapo',
      'Ujumbe wa ziada wa utambulisho',
      'Mapenzi na wasifu zaidi kwa leo',
      'Rudisha wasifu uliouruka',
      'Jibu hadithi za jumuiya',
      'Boost: wasifu wako wa kwanza kwenye Gundua',
    ],
    extra:
      'Sarafu unazipata pia bila malipo: kila siku, kwa siku saba mfululizo, kwa kukamilisha wasifu wako na kwa kuwaalika marafiki. Unazinunua tu ukitaka, kwa malipo ya mara moja kwenye App Store au Google Play — bila usajili wa malipo na bila kujisasisha kiotomatiki.',
  },


  about: {
    kicker: 'Kutuhusu',
    quote:
      'Niyyah ipo kwa watu wanaotafuta mwenzi wa ndoa, sio kupitisha wakati. Kila kitu hapa kimejengwa kuzunguka lengo hilo moja: wasifu unaosema kitu cha kweli, mazungumzo ambapo familia inaweza kuwapo, na mipaka inayoshikilia bila mtu kulazimika kuilinda.',
    small:
      'Sisi ni timu ndogo inayojenga kwa jumuiya yake mwenyewe, na tunapendelea programu tulivu na ya kuaminika kuliko yenye kelele na msongamano.',
    made: 'Imetengenezwa kwa uangalifu katika Bosnia na Herzegovina.',
  },

  faq: {
    title: 'Maswali tunayoulizwa mara nyingi',
    items: [
      {
        q: 'Niyyah inatofautiana vipi na programu nyingine za uchumba?',
        a: 'Niyyah imeundwa kwa ndoa, sio kwa kusogeza. Gundua inaonyesha jinsia tofauti pekee, ujumbe hufunguka tu mnapopendana wote wawili, na dada anaweza kumwingiza mahramu katika mazungumzo yake. Wasifu unabeba yenye maana kabla ya nikaa: swala, madhehebu, mipango ya ndoa, watoto na kuhamia.',
      },
      {
        q: 'Mahramu ni nini na nimuongeze vipi?',
        a: 'Mahramu ni mwanafamilia wa kiume ambaye ndoa naye imeharamishwa kwa kudumu, kwa mfano baba, kaka, ami au mjomba. Unaweza pia kumwalika mlezi. Kwenye mipangilio washa „Dai mahramu“ na mwalike hadi watu watatu. Mwaliko huja kwa barua pepe na mahramu anaukubali ndani ya programu. Katika lango la mahramu kisha anaona mazungumzo na mafanano yako, lakini hawezi kuandika. Kipengele hiki kinapatikana kwenye wasifu wa wanawake.',
      },
      {
        q: 'Niyyah ni halali?',
        a: 'Hatutoi fatwa na hatudai kuidhinishwa na taasisi yoyote. Tunachoweza kuonyesha ni mipaka iliyojengwa ndani ya programu: unaona jinsia tofauti pekee, mazungumzo hufunguka tu pande zote mbili zikipendezwa, mahramu anaweza kusoma mazungumzo, na wasimamizi wanakagua jumuiya. Kwa nia gani unaitumia, hiyo ni juu yako. Ukiwa na shaka, muulize imamu unayemuamini.',
      },
      {
        q: 'Maswali kabla ya mazungumzo ni nini?',
        a: 'Chaguo ambapo unaweka hadi maswali matatu yako. Baada ya kufanana, upande mwingine hujibu kwanza. Unasoma majibu na kuamua: „Nimependa“ hufungua mazungumzo, „Sijapenda“ hayafunguki.',
      },
      {
        q: 'Nani anaweza kuona mahali nilipo?',
        a: 'Hakuna anayeona mahali sahihi ulipo. Kwenye ramani ya Gundua unaonekana kama eneo la kukaribia tu, na hilo tu ukiiwasha. Unaizima, na unapotea kwenye ramani. Data iliyofichika kwenye picha, kama mahali pa GPS, inaondolewa wakati wa kupakia.',
      },
      {
        q: 'Mnajikinga vipi na wasifu wa kughushi?',
        a: 'Alama ya Imethibitishwa ina maana mtu alipita ukaguzi wa uso: picha yake ya papo hapo ililinganishwa na picha za kwenye wasifu wake. Malalamiko yanasomwa na wasimamizi wa kweli wanaoweza kusimamisha au kuzuia wasifu, na kuzuia hufanya kazi pande zote mbili. Akaunti iliyozuiwa haiwezi kurudi kirahisi kwa barua pepe mpya.',
      },
      {
        q: 'Nini ni bila malipo, na nini kinalipiwa kwa sarafu?',
        a: 'Kila kinachokulinda ni bila malipo: mahramu, maswali kabla ya mazungumzo, gumzo lililofungwa na usimamizi, pamoja na mapenzi 20 na ujumbe mmoja wa utambulisho kwa siku na mazungumzo bila kikomo na mafanano yako. Kwa sarafu unaweza kuona ni nani aliyekupenda, kutuma Super like au ujumbe wa ziada wa utambulisho, kupata wasifu na mapenzi zaidi kwa siku hiyo, na kujibu hadithi. Sarafu unazipata bila malipo kila siku, na unaweza pia kuzinunua kwa malipo ya mara moja. Hakuna usajili wa malipo, kwa hiyo hakuna cha kughairi.',
      },
      {
        q: 'Naweza kuficha wasifu kwa muda?',
        a: 'Ndiyo. Simamisha Gundua, na wasifu wako unapotea kwenye Gundua bila kufutwa. Mafanano na mazungumzo yanabaki, na unaurejesha wasifu wakati wowote unapotaka.',
      },
      {
        q: 'Programu ipo kwa lugha zipi?',
        a: 'Kwa tisa: Kibosnia, Kiingereza, Kijerumani, Kituruki, Kiarabu, Kiindonesia, Kiurdu, Kimalay na Kifaransa. Vifaa vya Kikroeshia na Kiserbia vinapata Kibosnia moja kwa moja.',
      },
    ],
  },

  final: {
    title: 'Anza kwa nia.',
    leadLaunched: 'Tengeneza wasifu na kutana na watu wanaotaka kwa dhati kujenga kitu cha kweli.',
    leadWaitlist:
      'Acha barua pepe yako na tutakuambia mara Niyyah itakapoanza. Kisha tengeneza wasifu na kutana na watu wanaotaka kwa dhati kujenga kitu cha kweli.',
  },

  consent: {
    title: 'Upimaji wa matangazo',
    more: 'Hii ina maana gani',
    details:
      'Pikseli kutoka Facebook huhesabu watu wangapi tangazo letu linawaleta hapa na nani anajiandikisha. Barua pepe yako hatuipeleki kamwe. Ukikataa, hakuna chochote kutoka Facebook kinachopakiwa.',
    close: 'Funga',
    body:
      'Tunapima watu wangapi matangazo yetu huwaleta hapa. Si zaidi ya hapo, na barua pepe yako haiendi mbali zaidi kamwe.',
    accept: 'Nakubali',
    decline: 'Hapana, asante',
    label: 'Upimaji wa matangazo',
    change: 'Chaguo la upimaji',
  },

  footer: {
    tagline: 'Ndoa, inayotafutwa kwa nia.',
    made: 'Imetengenezwa kwa uangalifu katika Bosnia na Herzegovina.',
    rights: 'Niyyah',
    language: 'Lugha',
  },
}
