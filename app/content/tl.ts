import type { Copy } from './bs'

export const tl: Copy = {
  meta: {
    title: 'Niyyah — Ang halal na app para makahanap ng mapapangasawa',
    description:
      'Ang Niyyah ay app para sa mga Muslim na naghahanap ng kasal. Bumubukas lang ang mensahe kapag parehong interesado, puwedeng nasa usapan ang mahram, at binabantayan ng mga moderator ang komunidad. Libre, sa siyam na wika.',
    ogAlt: 'Niyyah: Kasal, hinahanap nang may layunin.',
  },

  nav: {
    skip: 'Tumungo sa nilalaman',
    label: 'Pangunahing nabigasyon',
    home: 'Niyyah, unang pahina',
    links: [
      { href: '#mahrem', label: 'Mahram' },
      { href: '#kako', label: 'Paano ito gumagana' },
      { href: '#sigurnost', label: 'Kaligtasan' },
      { href: '#preporuke', label: 'Mga karanasan' },
      { href: '#pitanja', label: 'Mga tanong' },
    ],
    language: 'Wika',
    menu: 'Menu',
    close: 'Isara ang menu',
  },

  cta: {
    download: 'Kunin ang Niyyah',
    waitlist: 'Sabihin mo kapag nagsimula na ang Niyyah',
    waitlistShort: 'Abisuhan ako',
    emailLabel: 'Ang iyong email',
    emailPlaceholder: 'pangalan@halimbawa.com',
    sending: 'Ipinapadala',
    success: 'Salamat. Susulat kami sa iyo kapag nagsimula na ang Niyyah, in shā Allāh.',
    invalid: 'Magsulat ng tamang email, halimbawa pangalan@halimbawa.com.',
    error: 'Hindi natuloy. Tingnan ang koneksyon mo at subukan ulit.',
    tooMany: 'Masyadong maraming subok. Subukan ulit pagkalipas ng ilang minuto.',
    notConnected: 'Hindi pa bukas ang waitlist. Balikan mo mamaya.',
    privacy: 'Ginagamit lang namin ang email mo para sabihan ka kapag nagsimula na ang Niyyah at para may naghihintay sa iyong regalong pambungad. Hindi namin ito ibinebenta o ibinibigay kaninuman para sa ads.',
    soon: 'Malapit nang nasa App Store at Google Play',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Kunin sa',
    availableOn: 'Makukuha sa',
    eyebrow: 'HALAL NA APP PARA SA KASAL',
    waiting: '{count} katao ang naghihintay na sa Niyyah',
  },

  hero: {
    countdown: 'Darating ang Niyyah sa loob ng',
    countdownUnits: ['araw', 'oras', 'minuto', 'segundo'],
    title: 'Kasal, hinahanap nang may layunin.',
    lead:
      'Ang Niyyah ay app para sa mga Muslim na seryosong naghahanap ng mapapangasawa. Bumubukas lang ang mensahe kapag parehong interesado, puwedeng nasa usapan ang mahram, at ang app ang humahawak sa mga hangganan — hindi ikaw.',
    secondary: 'Paano gumagana ang mahram',
    micro: 'Libre. Nasa siyam na wika ang app.',
    imageAlt: 'Isang profile card sa Niyyah: pagdarasal, madhhab, mga plano sa kasal at porsiyento ng pagkakatugma.',
  },

  mockProfile: {
    name: 'Amina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Beripikado',
    match: 'pagkakatugma',
    rows: [
      { k: 'Pananampalataya', v: 'Isinasabuhay' },
      { k: 'Pagdarasal', v: 'Regular' },
      { k: 'Madhhab', v: 'Hanafi' },
      { k: 'Kasal', v: 'Sa loob ng isang taon' },
    ],
    prompt: 'Ang pananampalataya sa kasal ay nangangahulugang…',
    promptAnswer: 'na pinapaalalahanan namin ang isa’t isa sa mahalaga, kahit mahirap.',
    pass: 'Susunod',
    like: 'Gusto ko ito',
  },

  problem: {
    title: 'Hindi ginawa para sa kasal ang mga dating app.',
    body: [
      'Ginawa ang mga iyon para patuloy kang mag-scroll. Walang katapusang card, taong walang malinaw na layunin, usapang hindi mo kailanman maipapakita sa magulang mo.',
      'Samantala, mabagal ang pagkikilala sa pamamagitan ng kamag-anak, makitid ang bilog at mabigat ang presyur. Sa pagitan ng dalawang mundong iyon ay wala para sa atin.',
    ],
    pains: [
      'Hindi mo alam kung sino ang seryoso at kung sino ang dumaan lang para tumingin.',
      'Natatakot ang mga kapatid na babae sa panghaharas, pekeng profile, at sa pag-iisa sa lahat ng ito.',
      'Hindi naiintindihan ng mga isinalin na app ang wika natin, ang madhhab, ang kaugalian, o ang mga nasa ibang bansa.',
    ],
    eyebrow: 'PAANO ITO GUMAGANA',
    painsLabel: 'Pamilyar ba?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Sinusukat ng ibang app ang tagumpay sa oras na ginugugol mo sa kanila. Sinusukat namin ito sa nikah na pagkatapos nito ay hindi mo na kami kailangan.',
  },

  pillars: {
    title: 'Ginawa para sa kasal, mula sa unang screen.',
    items: [
      {
        word: 'Layunin',
        title: 'Una ang layunin',
        body: 'Sinasabi ng bawat profile kung ano ang hinahanap ng tao at kailan. Panahon para sa kasal, mga anak, paglipat: alam mo bago pa ang unang mensahe.',
      },
      {
        word: 'Pamilya',
        title: 'Kasama ang pamilya, hindi mag-isa',
        body: 'Puwedeng anyayahan ng isang kapatid na babae ang kanyang ama, kapatid na lalaki o tagapag-alaga na nasa kanyang mga usapan. Walang itinatago sa mga taong mahalaga ang opinyon.',
      },
      {
        word: 'Hangganan',
        title: 'Halal mismo sa disenyo',
        body: 'Kasalungat na kasarian lamang. Mensahe lang kapag parehong interesado. Komunidad na sinusuri ng mga moderator. Ang app ang humahawak sa hangganan, hindi mo na kailangang bantayan.',
      },
    ],
  },

  mahrem: {
    kicker: 'Mahram portal',
    title: 'Walang itinatago sa mga taong mahalaga ang opinyon.',
    body:
      'I-on ang „Humingi ng mahram” at mag-anyaya ng hanggang tatlong taong pinagkakatiwalaan mo: ama, kapatid na lalaki, tiyuhin, tagapag-alaga. Nakikita nila ang mga usapan mo sa mahram portal, pero hindi sila makakasulat at hindi sila makakakilala ng kahit sino. Naroon lang sila — tulad ng kung naroon sila nang harapan.',
    steps: [
      { title: 'I-on ang „Humingi ng mahram”', body: 'Isang switch lang sa mga setting.' },
      { title: 'Mag-anyaya ng hanggang tatlong mahram', body: 'Dumarating ang paanyaya sa email, at tinatanggap ito ng mahram sa app.' },
      {
        title: 'Sila ang bumabasa, ikaw ang nag-uusap',
        body: 'Nakikita ng mahram ang mga usapan at pagkakatugma. Hindi siya makakasulat mula sa portal at hindi niya ginagamit ang mga tampok para makakilala.',
      },
    ],
    who: [
      { label: 'Para sa kanya', body: 'Hindi ka nag-iisa. Naroon ang pamilya nang hindi nakatayo sa likod mo.' },
      { label: 'Para sa pamilya', body: 'Alam ninyo kung kanino at paano siya nakikipag-usap. Walang lihim.' },
      { label: 'Para sa kanya (lalaki)', body: 'Malinaw na tanda na seryoso siya at kasama ang pamilya.' },
    ],
    parentsTitle: 'Mga magulang, para sa inyo ito.',
    parentsBody:
      'Alam naming hindi tunog-angkop ang „dating app” para sa anak o kapatid ninyong babae. Sa Niyyah, puwede kayong nasa mga usapan niya at makita kung kanino at paano siya sumusulat, nang hindi kayo sumusulat ng kahit ano. Hindi man lang magbubukas ang usapan hangga’t hindi nagpapakita ng interes ang dalawang panig, at libre ang lahat ng ito.',
    share: 'Ipadala sa kanya ang pahinang ito',
    shareDone: 'Nakopya ang link',
    shareText: 'Niyyah: ang app para sa kasal kung saan puwedeng nasa usapan ang pamilya.',
    imageAlt: 'Ang mahram portal: binabasa ng ama ang usapan ng anak niya, nang hindi makakasulat.',
  },

  mockPortal: {
    title: 'Mahram portal',
    readOnly: 'Basahin lamang',
    watching: 'Sinasamahan mo: Amina',
    with: 'Usapan kasama si: Emir, 30',
    messages: [
      { from: 'him', text: 'Assalamu alaikum. Salamat sa pagbukas ng usapan.' },
      { from: 'her', text: 'Wa alaikum assalam. Isinulat mo na gusto mong magkakilala agad ang mga pamilya?' },
      { from: 'him', text: 'Oo. Gustong makilala ng mga magulang ko ang sa iyo bago ang anumang seryoso.' },
    ],
    locked: 'Hindi makakasulat mula sa portal',
  },

  how: {
    kicker: 'Paano ito gumagana',
    title: 'Mula profile hanggang usapan, sa apat na hakbang.',
    steps: [
      { title: 'Gumawa ng profile na may layunin', body: 'Pananampalataya, pagdarasal, mga plano sa kasal at sarili mong salita.' },
      {
        title: 'Tuklasin',
        body: 'Mga taong kapareho ng pinahahalagahan mo, may porsiyento ng pagkakatugma. Card o mapa, may salaan para sa edad, lungsod at pananampalataya.',
      },
      {
        title: 'Binubuksan ng dalawahang interes ang usapan',
        body: 'Hangga’t hindi pa kayo parehong nagkagusto, nakakandado ang usapan. Kasama ang mga tanong mo bago ang unang mensahe.',
      },
      { title: 'Kasama mo ang pamilya', body: 'Mahram sa usapan, kahit kailan mo gusto.' },
    ],
  },

  questions: {
    kicker: 'Mga tanong bago mag-usap',
    title: 'Itanong ang mahalaga, bago ang unang mensahe.',
    body:
      'Maglagay ng hanggang tatlong tanong. Pagkatapos ng pagkakatugma, sumasagot muna ang kabilang panig, saka mo babasahin at ikaw ang magpapasya kung bubukas ang usapan. Walang tatlong linggong pagpapalitan ng mensahe para lang malaman na hindi kayo magkasundo sa pinakapayak na bagay.',
    flow: ['Ikaw ang naglalagay ng tanong', 'Sumasagot ang kabilang panig', 'Ikaw ang magpapasya'],
    topics: ['Pagdarasal', 'Hijab', 'Paglipat', 'Mga anak'],
    topicsLabel: 'Pinakamadalas itanong',
    imageAlt: 'Mga tanong bago mag-usap: tatlong sagot at ang pasya kung bubukas ang usapan.',
  },

  mockQuestions: {
    title: 'Sinagot ni Emir ang mga tanong mo',
    qa: [
      { q: 'Regular ka bang nagdarasal?', a: 'Oo, lahat ng lima. Ang fajr ang pinakamahirap sa akin, pero sinisikap ko.' },
      { q: 'Saan mo nakikita ang sarili mo pagkatapos ng nikah?', a: 'Sa Sarajevo, pero bukas akong pag-usapan ang paglipat.' },
      { q: 'Gaano kahalaga ang pamilya sa mga pasya mo?', a: 'Napakahalaga. Gusto kong magkakilala agad ang mga pamilya.' },
    ],
    no: 'Hindi ko gusto',
    yes: 'Gusto ko ito',
  },

  profile: {
    kicker: 'Profile',
    title: 'Kilalanin kung paano siya mag-isip, hindi lang kung ano ang itsura.',
    lead:
      'Bukod sa litrato at paglalarawan, dala ng profile ang mga pinag-uusapan bago ang nikah. Mas kaunting hula, mas kaunting sayang na oras, mas mabilis sa „oo” o „hindi”.',
    fields: [
      { k: 'Ugnayan sa pananampalataya', v: ['Isinasabuhay', 'Sinisikap', 'Sa ngayon ay hindi'] },
      { k: 'Pagdarasal', v: ['Regular', 'Minsan', 'Bihira'] },
      { k: 'Madhhab', v: ['Hanafi', 'Shafi’i', 'Maliki', 'Hanbali', 'Walang pinipili'] },
      { k: 'Hijab', v: ['Nagsusuot', 'Hindi nagsusuot', 'Balak ko'] },
      { k: 'Panahon para sa kasal', v: ['Agad', 'Sa loob ng isang taon', '1–2 taon', 'Walang pagmamadali'] },
      { k: 'Paglipat', v: ['Handa', 'Hindi kaya', 'Bukas pag-usapan'] },
      { k: 'Mga anak', v: ['Gusto ko', 'Ayaw ko', 'Mayroon na', 'Hindi sigurado'] },
    ],
    more: 'At iba pa: paninigarilyo, pag-aaral, trabaho, katutubong wika, taas at mga interes.',
    promptsTitle: 'Sa sarili mong salita',
    prompts: ['Ang pananampalataya sa kasal ay nangangahulugang…', 'Ano ang hinahanap mo sa mapapangasawa?', 'Paano mo ginugugol ang katapusan ng linggo?'],
    situationsTitle: 'Mga sitwasyon',
    situationsBody:
      'Sumagot sa totoong sitwasyon sa pitong larangan. Nakikita ng iba kung paano ka mag-isip, hindi lang kung ano ang itsura mo.',
    situations: ['Kasal', 'Pakikipag-usap', 'Pag-aayos ng alitan', 'Pamilya', 'Pananampalataya', 'Pera', 'Pagpapalaki ng anak'],
    matchTitle: 'Porsiyento ng pagkakatugma',
    matchBody: 'Sa bawat card: magkatulad na interes, ugnayan sa pananampalataya at layunin.',
    imageAlt: 'Detalye ng profile sa Niyyah: pananampalataya, mga plano sa kasal at sagot sa mga sitwasyon.',
  },

  mockDetails: {
    title: 'Tungkol kay Emir',
    rows: [
      { k: 'Kasal', v: 'Sa loob ng isang taon' },
      { k: 'Paglipat', v: 'Bukas pag-usapan' },
      { k: 'Mga anak', v: 'Gusto ko' },
      { k: 'Trabaho', v: 'Inhinyero' },
    ],
    situation: 'Sitwasyon · Pag-aayos ng alitan',
    question: 'Nag-away kayo dahil sa pamilya. Ano ang una mong gagawin?',
    answer: 'Hihintayin kong kumalma kaming dalawa, saka ko itatanong kung paano niya ito nakikita. Doon lang ako magsasalita ng akin.',
  },

  safety: {
    kicker: 'Kaligtasan at pribadong buhay',
    title: 'Hindi produkto ang pribadong buhay mo.',
    lead: 'Hindi namin kailanman ibinebenta ang datos mo. Nakabuo ang kaligtasan sa loob mismo ng app, hindi idinagdag na opsyon.',
    items: [
      {
        icon: 'pin',
        title: 'Hindi kailanman ang eksaktong lokasyon',
        body: 'Tinatakda lang ng mapa ang tinatayang lugar, at iyon lang habang naka-on mo. Patayin mo at mawawala ka sa mapa.',
      },
      {
        icon: 'photo',
        title: 'Pagsusuri ng mga litrato',
        body: 'Malinaw na mukha, isang tao lang, walang malabo o natatakpan. Ang nakatagong datos sa litrato, gaya ng lokasyong GPS, ay inaalis ng sistema.',
      },
      {
        icon: 'badge',
        title: 'Tatak na Beripikado',
        body: 'Maikling pagsusuri na ikaw nga ang nasa litrato. Kinukumpirma mo ang numero ng telepono o email bago pumasok sa Tuklasin.',
      },
      {
        icon: 'people',
        title: 'Tunay na moderator',
        body: 'Binabasa ang mga reklamo ng sariling pangkat ng moderator na puwedeng magsuspinde at magbawal ng profile.',
      },
      {
        icon: 'block',
        title: 'Dalawang panig ang pag-block',
        body: 'Kapag na-block mo ang isang tao, nawawala kayo sa isa’t isa sa loob ng app.',
      },
      {
        icon: 'pause',
        title: 'I-pause ang Tuklasin',
        body: 'Itago ang profile nang hindi binubura. Nananatili ang mga pagkakatugma at usapan.',
      },
      {
        icon: 'finger',
        title: 'Pagbukas gamit ang daliri o mukha',
        body: 'Hindi kailanman umaalis ang fingerprint mo sa device mo.',
      },
    ],
    ayahRef: 'Al-Qiyamah 75:4',
    ayahNote:
      'Nasa pambukas na screen ang isang talata mula sa surah Al-Qiyamah (75:3–4), tungkol kay Allah na kayang muling buuin maging ang dulo ng mga daliri.',
  },

  community: {
    kicker: 'Komunidad',
    title: 'Lugar para matuto tungkol sa kasal bago ang kasal.',
    lead:
      'Nagtatanong ka, nagbabasa ng karanasan, natututo sa iba. Dumadaan sa moderator ang bawat post bago lumabas, at walang komentaryong ayaw lagyan ng sariling pangalan.',
    items: [
      { title: 'Tanungin ang mga kapatid na lalaki, Tanungin ang mga kapatid na babae', body: 'Magkahiwalay na espasyong isang kasarian lang ang nakakakita.' },
      {
        title: 'Walang pangalan, kapag kailangan',
        body: 'May mga tanong na mahirap itanong sa sariling pangalan. Mag-post bilang „Kapatid na babaeng walang pangalan” o „Kapatid na lalaking walang pangalan”.',
      },
      { title: 'Tanong ng araw', body: 'Araw-araw ay isang tanong tungkol sa kasal at pagpapahalaga, sa unang screen.' },
      {
        title: 'Mga kuwentong walang pampublikong komento',
        body: '24 oras o isang beses lang makikita. Para sa buong komunidad o para lang sa mga pagkakatugma.',
      },
    ],
    reactionsLabel: 'Mga reaksyong gumagantimpala sa pakinabang, hindi sa ego',
    reactions: ['Kapaki-pakinabang', 'May katuturan', 'Nakakasigla', 'Pinag-isipan'],
    imageAlt: 'Komunidad ng Niyyah: tanong na walang pangalan sa espasyong Tanungin ang mga kapatid na babae.',
  },

  mockPost: {
    space: 'Tanungin ang mga kapatid na babae',
    author: 'Kapatid na babaeng walang pangalan',
    category: 'Kasal',
    text: 'Paano ninyo sinabi sa mga magulang ninyo na naghahanap kayo ng mapapangasawa sa pamamagitan ng app? Ano ang naging reaksyon nila?',
    reviewed: 'Sinuri ng moderator',
  },

  languages: {
    title: 'Ang pahina sa wika mo, ang app sa siyam na wika.',
    lead:
      'Binabasa mo ang pahinang ito sa Filipino. Ang app mismo, ang mga email at abiso ay nasa siyam na wika: Bosnian, Ingles, Aleman, Turko, Arabe, Indonesian, Urdu, Malay at Pranses. Mula kanan pakaliwa ang Arabe at Urdu. Nasa Dubai ka man, Doha, Maynila o Sarajevo.',
  },

  pricing: {
    kicker: 'Libre at coins',
    title: 'Libre ang nagsasanggalang sa iyo.',
    lead: 'Bukas sa lahat ang mahram, ang mga tanong bago mag-usap, ang nakakandadong chat at ang moderasyon. Hindi kami naniningil para sa kaligtasan. Pinapabilis lang ng coins ang mga bagay — at walang subscription.',
    freeTitle: 'Libre, para sa lahat',
    free: [
      'Profile at 30 profile bawat araw sa Tuklasin',
      '20 like bawat araw',
      'Tingnan kung sino ang nag-like sa iyo: 1 tao bawat araw',
      'Pagbasa ng lahat ng mensaheng ipinadala sa iyo',
      'Mga pagkakatugma at walang hangganang usapan sa kanila',
      'Mahram sa usapan',
      'Mga tanong bago mag-usap',
      'Komunidad, kuwento at Tanong ng araw',
      'Libreng coins araw-araw',
    ],
    premiumTitle: 'Coins, kapag gusto mo ng higit',
    premium: [
      'Tingnan ang lahat ng nag-like sa iyo',
      'Super like: nasa itaas ang like mo, kasama ang pangalan at larawan mo',
      'Direktang mensahe (like na may kasamang mensahe)',
      'Mas maraming like at profile para ngayong araw',
      'Ibalik ang profile na nilaktawan mo',
      'Sumagot sa mga kuwento sa komunidad',
      'Boost: una ang profile mo sa Tuklasin',
    ],
    extra:
      'Nakakakuha ka rin ng coins nang libre: araw-araw, sa pitong sunod-sunod na araw, sa pagkumpleto ng profile mo at sa pag-imbita ng mga kaibigan. Bibili ka lang kung gusto mo, isang beses, sa App Store o Google Play — walang subscription at walang awtomatikong pag-renew.',
  },


  about: {
    kicker: 'Tungkol sa amin',
    quote:
      'Umiiral ang Niyyah para sa mga taong naghahanap ng mapapangasawa, hindi ng libangan. Lahat dito ay nakabuo sa paligid ng iisang layuning iyon: profile na may tunay na sinasabi, usapan kung saan puwedeng naroon ang pamilya, at hangganang tumatagal nang walang nagbabantay.',
    small:
      'Maliit kaming pangkat na nagtatayo para sa sariling komunidad, at mas gusto namin ang tahimik at maaasahang app kaysa maingay at masikip.',
    made: 'Ginawa nang may ingat sa Bosnia at Herzegovina.',
  },

  faq: {
    title: 'Mga tanong na madalas sa amin',
    items: [
      {
        q: 'Ano ang kaibhan ng Niyyah sa ibang dating app?',
        a: 'Ginawa ang Niyyah para sa kasal, hindi para sa pag-scroll. Ipinapakita lang ng Tuklasin ang kasalungat na kasarian, bumubukas lang ang mensahe kapag parehong nagkagusto, at puwedeng isama ng kapatid na babae ang mahram sa kanyang mga usapan. Dala ng profile ang mahalaga bago ang nikah: pagdarasal, madhhab, mga plano sa kasal, mga anak at paglipat.',
      },
      {
        q: 'Ano ang mahram at paano ko siya idadagdag?',
        a: 'Ang mahram ay lalaking kamag-anak na habambuhay na ipinagbabawal pakasalan, halimbawa ang ama, kapatid na lalaki o tiyuhin. Puwede ring anyayahan ang tagapag-alaga. Sa mga setting, i-on ang „Humingi ng mahram” at mag-anyaya ng hanggang tatlong tao. Dumarating ang paanyaya sa email at tinatanggap ito ng mahram sa app. Sa mahram portal ay nakikita niya ang mga usapan at pagkakatugma mo, pero hindi siya makakasulat. Nasa profile ng kababaihan ang tampok na ito.',
      },
      {
        q: 'Halal ba ang Niyyah?',
        a: 'Hindi kami naglalabas ng fatwa at hindi kami nag-aangking inaprubahan ng kahit anong institusyon. Ang maipapakita namin ay ang mga hangganang nakabuo sa app: kasalungat na kasarian lang ang nakikita mo, bumubukas lang ang usapan kapag parehong interesado, puwedeng basahin ng mahram ang mga usapan, at sinusuri ng mga moderator ang komunidad. Nasa iyo kung anong layunin ang dala mo. Kung nag-aalinlangan ka, magtanong sa imam na pinagkakatiwalaan mo.',
      },
      {
        q: 'Ano ang mga tanong bago mag-usap?',
        a: 'Isang opsyon kung saan naglalagay ka ng hanggang tatlong sarili mong tanong. Pagkatapos ng pagkakatugma, sinasagot muna ito ng kabilang panig. Babasahin mo ang sagot at ikaw ang magpapasya: binubuksan ng „Gusto ko ito” ang usapan, hindi ito binubuksan ng „Hindi ko gusto”.',
      },
      {
        q: 'Sino ang makakakita ng lokasyon ko?',
        a: 'Walang nakakakita ng eksakto mong lokasyon. Sa mapa ng Tuklasin ay lumalabas ka lang bilang tinatayang lugar, at iyon lang kung i-oon mo. Patayin mo at mawawala ka sa mapa. Inaalis ang nakatagong datos sa litrato, gaya ng lokasyong GPS, habang ina-upload.',
      },
      {
        q: 'Paano ninyo hinaharang ang pekeng profile?',
        a: 'Ang tatak na Beripikado ay nangangahulugang pumasa ang tao sa pagsusuri ng mukha: ikinumpara ang live niyang litrato sa mga larawan sa profile niya. Binabasa ang mga reklamo ng tunay na moderator na puwedeng magsuspinde o magbawal ng profile, at dalawang panig ang pag-block. Hindi basta makakabalik ang na-ban na account gamit ang bagong email address.',
      },
      {
        q: 'Ano ang libre, at ano ang binabayaran ng coins?',
        a: 'Libre ang lahat ng nagsasanggalang sa iyo: mahram, mga tanong bago mag-usap, nakakandadong chat at moderasyon, kasama ang 30 profile at 20 like bawat araw, isang tao bawat araw mula sa mga nag-like sa iyo, pagbasa ng lahat ng mensaheng ipinadala sa iyo, at walang hangganang usapan sa mga pagkakatugma mo. Gamit ang coins, makikita mo ang lahat ng nag-like sa iyo, makakapagpadala ka ng super like (nasa itaas ang like mo, naka-highlight, kasama ang pangalan at larawan mo) o direktang mensahe (like na may mensaheng libreng nababasa ng tumanggap), makakakuha ng mas maraming profile at like para sa araw na iyon, at makakasagot sa mga kuwento. Nagbubukas lang ang usapan kapag nag-like kayo sa isa’t isa. Nakakakuha ka ng coins nang libre araw-araw, at puwede mo rin itong bilhin nang isang beses. Walang subscription, kaya wala ring kakanselahin.',
      },
      {
        q: 'Puwede ko bang itago ang profile ko nang pansamantala?',
        a: 'Oo. I-pause ang Tuklasin at mawawala ang profile mo sa Tuklasin nang hindi binubura. Nananatili ang mga pagkakatugma at usapan, at maibabalik mo ang profile kahit kailan mo gusto.',
      },
      {
        q: 'Sa anong mga wika ang app?',
        a: 'Sa siyam: Bosnian, Ingles, Aleman, Turko, Arabe, Indonesian, Urdu, Malay at Pranses. Awtomatikong nakakakuha ng Bosnian ang mga device na Croatian at Serbian.',
      },
    ],
  },

  final: {
    title: 'Magsimula nang may layunin.',
    leadLaunched: 'Gumawa ng profile at makilala ang mga taong seryosong gustong magtayo ng isang bagay na totoo.',
    leadWaitlist:
      'Iwan ang email mo at ipapaalam namin kapag nagsimula na ang Niyyah. Saka gumawa ng profile at makilala ang mga taong seryosong gustong magtayo ng isang bagay na totoo.',
  },

  consent: {
    title: 'Pagsukat ng patalastas',
    more: 'Ano ang ibig sabihin nito',
    details:
      'May pixel mula sa Facebook na bumibilang kung ilan ang dinadala rito ng patalastas namin at sino ang nagpapalista. Hindi namin ipinapadala rito ang email mo. Kung tatanggi ka, walang anuman mula sa Facebook ang bubuksan.',
    close: 'Isara',
    body:
      'Sinusukat namin kung ilang tao ang dinadala rito ng mga patalastas namin. Wala nang iba, at hindi kailanman lumalayo ang email mo.',
    accept: 'Sang-ayon ako',
    decline: 'Hindi na, salamat',
    label: 'Pagsukat ng patalastas',
    change: 'Pagpili sa pagsukat',
  },

  footer: {
    tagline: 'Kasal, hinahanap nang may layunin.',
    made: 'Ginawa nang may ingat sa Bosnia at Herzegovina.',
    rights: 'Niyyah',
    language: 'Wika',
  },
}
