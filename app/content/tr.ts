import type { Copy } from './bs'

export const tr: Copy = {
  meta: {
    title: 'Niyyah — Eş bulmak için helal uygulama',
    description:
      'Niyyah, evlilik arayan Müslümanlar için bir uygulama. Mesajlar ancak karşılıklı ilgiyle açılır, sohbette mahrem bulunabilir ve topluluk denetlenir. Ücretsiz, dokuz dilde.',
    ogAlt: 'Niyyah: Niyetle aranan evlilik.',
  },

  nav: {
    skip: 'İçeriğe geç',
    label: 'Ana gezinme',
    home: 'Niyyah, ana sayfa',
    links: [
      { href: '#mahrem', label: 'Mahrem' },
      { href: '#kako', label: 'Nasıl çalışır' },
      { href: '#sigurnost', label: 'Güvenlik' },
      { href: '#preporuke', label: 'Görüşler' },
      { href: '#pitanja', label: 'Sorular' },
    ],
    language: 'Dil',
    menu: 'Menü',
    close: 'Menüyü kapat',
  },

  cta: {
    download: 'Niyyah’ı indir',
    waitlist: 'Niyyah açıldığında haber ver',
    waitlistShort: 'Haber ver',
    emailLabel: 'E-posta adresin',
    emailPlaceholder: 'isim@ornek.com',
    sending: 'Gönderiliyor',
    success: 'Teşekkürler. Niyyah açılır açılmaz sana yazacağız, in şâ Allâh.',
    invalid: 'Geçerli bir e-posta adresi yaz, örneğin isim@ornek.com.',
    error: 'Olmadı. Bağlantını kontrol et ve tekrar dene.',
    notConnected: 'Bekleme listesi henüz açılmadı. Yakında yine uğra.',
    privacy: 'Adresini yalnızca bu bildirim için kullanırız. Asla paylaşmayız.',
    soon: 'Yakında App Store ve Google Play’de',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'İndir',
    availableOn: 'Edin',
    eyebrow: 'EVLİLİK İÇİN HELAL UYGULAMA',
    waiting: '{count} kişi Niyyah’ı şimdiden bekliyor',
  },

  hero: {
    title: 'Niyetle aranan evlilik.',
    lead:
      'Niyyah, ciddi olarak eş arayan Müslümanlar için bir uygulama. Mesajlar ancak karşılıklı ilgiyle açılır, sohbette mahrem bulunabilir, sınırları da sen değil uygulama korur.',
    secondary: 'Mahrem nasıl çalışır',
    micro: 'Ücretsiz. Uygulama dokuz dilde.',
    imageAlt: 'Niyyah’ta bir profil kartı: namaz, mezhep, evlilik planları ve uyum oranı.',
  },

  mockProfile: {
    name: 'Amina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Verified',
    match: 'uyum',
    rows: [
      { k: 'Din', v: 'Yaşıyorum' },
      { k: 'Namaz', v: 'Düzenli' },
      { k: 'Mezhep', v: 'Hanefî' },
      { k: 'Evlilik', v: 'Bir yıl içinde' },
    ],
    prompt: 'Evlilikte iman şu demek…',
    promptAnswer: 'zor olduğunda bile birbirimize önemli olanı hatırlatmak.',
    pass: 'Geç',
    like: 'Beğendim',
  },

  problem: {
    title: 'Tanışma uygulamaları evlilik için yapılmadı.',
    body: [
      'Kaydırman için yapıldılar. Bitmeyen kartlar, niyeti belli olmayan insanlar, anne babana gösteremeyeceğin sohbetler.',
      'Akraba üzerinden tanışmak ise yavaştır, çevre dardır, baskı büyüktür. Bu iki dünyanın arasında bize dair hiçbir şey yoktu.',
    ],
    pains: [
      'Kimin ciddi, kimin sadece bakmaya geldiğini bilemiyorsun.',
      'Kız kardeşler tacizden, sahte profillerden ve bunu tek başına göğüslemekten korkuyor.',
      'Çevrilmiş uygulamalar bizim dilimizi, mezhebimizi, âdetlerimizi ve diasporayı anlamıyor.',
    ],
    eyebrow: 'NASIL ÇALIŞIR',
    painsLabel: 'Tanıdık geldi mi?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Diğer uygulamalar başarıyı içinde geçirdiğin zamanla ölçer. Biz, ardından bize ihtiyacın kalmayan nikâhla ölçüyoruz.',
  },

  pillars: {
    title: 'İlk ekrandan itibaren evlilik için kuruldu.',
    items: [
      {
        word: 'Niyet',
        title: 'Önce niyet',
        body: 'Her profil kişinin ne aradığını ve ne zaman aradığını söyler. Evlilik için zaman, çocuk, taşınma: ilk mesajdan önce biliyorsun.',
      },
      {
        word: 'Aile',
        title: 'Aile var, yalnız değilsin',
        body: 'Bir kız kardeş babasını, kardeşini ya da velisini sohbetlerine davet edebilir. Görüşü önemli olanlardan hiçbir şey saklanmaz.',
      },
      {
        word: 'Sınırlar',
        title: 'Tasarımı gereği helal',
        body: 'Yalnızca karşı cins. Mesajlar ancak karşılıklı ilgiyle. Moderatörlerin denetlediği bir topluluk. Sınırları uygulama korur, senin korumana gerek yok.',
      },
    ],
  },

  mahrem: {
    kicker: 'Mahrem portalı',
    title: 'Görüşü önemli olanlardan hiçbir şey saklı değil.',
    body:
      '„Mahrem iste“yi aç ve güvendiğin en çok üç kişiyi davet et: baban, kardeşin, amcan veya dayın, velin. Sohbetlerini Mahrem portalında görürler ama yazamaz, tanışma özelliklerini kullanamazlar. Sadece oradadırlar; yüz yüze olsalardı nasıl olurdu, öyle.',
    steps: [
      { title: '„Mahrem iste“yi aç', body: 'Ayarlarda tek bir düğme.' },
      { title: 'En çok üç mahrem davet et', body: 'Davet e-postayla gelir, mahrem onu uygulamada kabul eder.' },
      {
        title: 'Onlar okur, sen konuşursun',
        body: 'Mahrem sohbetleri ve eşleşmeleri görür. Portaldan yazamaz ve tanışma özelliklerini kullanmaz.',
      },
    ],
    who: [
      { label: 'Onun için', body: 'Yalnız değilsin. Aile orada ama tepende dikilmiyor.' },
      { label: 'Ailesi için', body: 'Kiminle, nasıl konuştuğunu biliyorsunuz. Sır yok.' },
      { label: 'Onun için', body: 'Ciddi olduğunun ve ailenin işin içinde olduğunun açık bir işareti.' },
    ],
    parentsTitle: 'Anne babalar, bu size.',
    parentsBody:
      '„Tanışma uygulaması“ kızınız ya da kız kardeşiniz için uygun bir şey gibi gelmiyor, biliyoruz. Niyyah’ta onun sohbetlerinde bulunabilir, kiminle ve nasıl yazıştığını görebilirsiniz; kendiniz bir şey yazmadan. İki taraf da ilgi göstermeden mesaj hiç ulaşamaz, ve bunların tümü ücretsizdir.',
    share: 'Bu sayfayı ona gönder',
    shareDone: 'Bağlantı kopyalandı',
    shareText: 'Niyyah: ailenin sohbette bulunabildiği evlilik uygulaması.',
    imageAlt: 'Mahrem portalı: bir baba kızının sohbetini okuyor, yazma kapalı.',
  },

  mockPortal: {
    title: 'Mahrem portalı',
    readOnly: 'Yalnızca okuma',
    watching: 'Takip ediyorsun: Amina',
    with: 'Sohbet: Emir, 30',
    messages: [
      { from: 'him', text: 'Esselâmü aleyküm. Sohbeti açtığın için teşekkür ederim.' },
      { from: 'her', text: 'Ve aleykümüsselâm. Ailelerin erken tanışmasını istediğini yazmışsın?' },
      { from: 'him', text: 'Evet. Ailem, ciddi bir şey olmadan önce seninkilerle tanışmak ister.' },
    ],
    locked: 'Portaldan yazılamaz',
  },

  how: {
    kicker: 'Nasıl çalışır',
    title: 'Profilden sohbete, dört adımda.',
    steps: [
      { title: 'Niyetli bir profil kur', body: 'Din, namaz, evlilik planları ve kendi sözlerin.' },
      {
        title: 'Keşfet',
        body: 'Değerlerini paylaşan insanlar, uyum oranıyla. Kartlar ya da harita; yaş, şehir ve dine göre süzgeçler.',
      },
      {
        title: 'Karşılıklı ilgi sohbeti açar',
        body: 'İkiniz de beğenmedikçe sohbet kilitli kalır. İlk mesajdan önce senin sorularınla.',
      },
      { title: 'Aile yanında', body: 'İstediğin zaman sohbette bir mahrem.' },
    ],
  },

  questions: {
    kicker: 'Sohbetten önce sorular',
    title: 'Önemli olanı ilk mesajdan önce sor.',
    body:
      'En çok üç soru koy. Eşleşmeden sonra karşı taraf önce cevaplar, sen okursun ve sohbetin açılıp açılmayacağına karar verirsin. Temel bir konuda anlaşmadığınızı öğrenmek için üç hafta yazışmak yok.',
    flow: ['Soruları sen koyarsın', 'Karşı taraf cevaplar', 'Sen karar verirsin'],
    topics: ['Namaz', 'Başörtüsü', 'Taşınma', 'Çocuk'],
    topicsLabel: 'En çok sorulanlar',
    imageAlt: 'Sohbetten önce sorular: üç cevap ve sohbetin açılıp açılmayacağı kararı.',
  },

  mockQuestions: {
    title: 'Emir sorularını cevapladı',
    qa: [
      { q: 'Düzenli namaz kılıyor musun?', a: 'Evet, beş vakit. Sabah bana en zor geliyor ama gayret ediyorum.' },
      { q: 'Nikâhtan sonra kendini nerede görüyorsun?', a: 'Sarajevo’da, ama taşınmayı konuşmaya açığım.' },
      { q: 'Kararlarında aile ne kadar önemli?', a: 'Çok. Ailelerin erken tanışmasını isterim.' },
    ],
    no: 'Beğenmedim',
    yes: 'Beğendim',
  },

  profile: {
    kicker: 'Profil',
    title: 'Nasıl göründüğünü değil, nasıl düşündüğünü tanı.',
    lead:
      'Fotoğraf ve açıklamanın yanında profil, nikâhtan önce konuşulanları taşır. Daha az tahmin, daha az boşa giden zaman, „evet“ ya da „hayır“a daha hızlı varış.',
    fields: [
      { k: 'Dinle ilişki', v: ['Yaşıyorum', 'Gayret ediyorum', 'Şu an yaşamıyorum'] },
      { k: 'Namaz', v: ['Düzenli', 'Bazen', 'Nadiren'] },
      { k: 'Mezhep', v: ['Hanefî', 'Şâfiî', 'Mâlikî', 'Hanbelî', 'Önemli değil'] },
      { k: 'Başörtüsü', v: ['Takıyorum', 'Takmıyorum', 'Niyetim var'] },
      { k: 'Evlilik için zaman', v: ['Hemen', 'Bir yıl içinde', '1–2 yıl', 'Acelesi yok'] },
      { k: 'Taşınma', v: ['Hazırım', 'Mümkün değil', 'Konuşmaya açığım'] },
      { k: 'Çocuk', v: ['İstiyorum', 'İstemiyorum', 'Zaten var', 'Emin değilim'] },
    ],
    more: 'Dahası: sigara, eğitim, meslek, ana dil, boy ve ilgi alanları.',
    promptsTitle: 'Kendi sözlerinle',
    prompts: ['Evlilikte iman şu demek…', 'Eşinde ne arıyorsun?', 'Hafta sonunu nasıl geçirirsin?'],
    situationsTitle: 'Durumlar',
    situationsBody:
      'Yedi alanda gerçek senaryoları cevapla. Başkaları nasıl göründüğünü değil, nasıl düşündüğünü görür.',
    situations: ['Evlilik', 'İletişim', 'Anlaşmazlık çözme', 'Aile', 'Din', 'Para', 'Ebeveynlik'],
    matchTitle: 'Uyum oranı',
    matchBody: 'Her kartta: ortak ilgi alanları, dinle ilişki ve niyet.',
    imageAlt: 'Niyyah’ta profil ayrıntıları: din, evlilik planları ve durumlara verilen cevaplar.',
  },

  mockDetails: {
    title: 'Emir hakkında',
    rows: [
      { k: 'Evlilik', v: 'Bir yıl içinde' },
      { k: 'Taşınma', v: 'Konuşmaya açık' },
      { k: 'Çocuk', v: 'İstiyorum' },
      { k: 'Meslek', v: 'Mühendis' },
    ],
    situation: 'Durum · Anlaşmazlık çözme',
    question: 'Aile yüzünden tartıştınız. İlk ne yaparsın?',
    answer: 'İkimiz de sakinleşene kadar beklerim, sonra onun nasıl gördüğünü sorarım. Kendi görüşümü ancak ondan sonra söylerim.',
  },

  safety: {
    kicker: 'Güvenlik ve gizlilik',
    title: 'Gizliliğin satılacak bir ürün değil.',
    lead: 'Verilerini asla satmayız. Güvenlik uygulamanın içine kurulmuştur, sonradan eklenen bir seçenek değildir.',
    items: [
      {
        icon: 'pin',
        title: 'Kesin konum asla',
        body: 'Harita yalnızca yaklaşık bir bölge gösterir, o da sen açık tuttuğun sürece. Kapattığında haritadan kaybolursun.',
      },
      {
        icon: 'photo',
        title: 'Fotoğraf denetimi',
        body: 'Net bir yüz, tek kişi, bulanık ve kapatılmış fotoğraf yok. Fotoğraftaki gizli veriler, örneğin GPS konumu, sistem tarafından silinir.',
      },
      {
        icon: 'badge',
        title: 'Verified işareti',
        body: 'Fotoğraflardaki kişi olduğuna dair kısa bir denetim. Keşfet’e girmeden önce telefon numaranı ya da e-postanı doğrularsın.',
      },
      {
        icon: 'people',
        title: 'Gerçek moderatörler',
        body: 'Bildirimleri, profilleri askıya alabilen ve yasaklayabilen ayrı bir moderatör ekibi okur.',
      },
      {
        icon: 'block',
        title: 'Engelleme iki yönlü',
        body: 'Birini engellersen uygulamada birbirinizden kaybolursunuz.',
      },
      {
        icon: 'pause',
        title: 'Keşfet’i duraklat',
        body: 'Profilini silmeden gizle. Eşleşmeler ve sohbetler kalır.',
      },
      {
        icon: 'finger',
        title: 'Parmak izi veya yüzle açma',
        body: 'Parmak izin cihazından asla çıkmaz.',
      },
    ],
    ayahRef: 'el-Kıyâme 75:4',
    ayahNote:
      'Kilit ekranında el-Kıyâme sûresinden bir âyet (75:3–4) yer alır: parmak uçlarını bile yeniden düzenleyebilen Allah hakkında.',
  },

  community: {
    kicker: 'Topluluk',
    title: 'Evlilikten önce evliliği öğrenecek bir yer.',
    lead:
      'Sorarsın, deneyimleri okursun, başkalarından öğrenirsin. Her paylaşım görünmeden önce moderatör denetiminden geçer, ve altına kimsenin imza atmayacağı yorumlar yoktur.',
    items: [
      { title: 'Kardeşlere sor, Hemşirelere sor', body: 'Yalnızca bir cinsin gördüğü ayrı alanlar.' },
      {
        title: 'Gerektiğinde isimsiz',
        body: 'Bazı soruları isminle sormak zordur. „İsimsiz hemşire“ ya da „İsimsiz kardeş“ olarak paylaş.',
      },
      { title: 'Günün sorusu', body: 'Her gün evlilik ve değerler üzerine bir soru, ana ekranda.' },
      {
        title: 'Herkese açık yorumsuz hikâyeler',
        body: '24 saat ya da tek görüntüleme. Tüm topluluk için ya da yalnızca eşleşmeler için.',
      },
    ],
    reactionsLabel: 'Egoyu değil faydayı ödüllendiren tepkiler',
    reactions: ['Faydalı', 'Mantıklı', 'İlham verici', 'Düşünceli'],
    imageAlt: 'Niyyah’ta topluluk: Hemşirelere sor alanında isimsiz bir soru.',
  },

  mockPost: {
    space: 'Hemşirelere sor',
    author: 'İsimsiz hemşire',
    category: 'Evlilik',
    text: 'Bir uygulama üzerinden eş aradığınızı ailenize nasıl söylediniz? Nasıl karşıladılar?',
    reviewed: 'Moderatör denetledi',
  },

  languages: {
    title: 'Nerede olursan ol, kendi dilinde.',
    lead:
      'Uygulama, e-postalar ve bildirimler dokuz dilde. Arapça ve Urduca sağdan sola akar, Hırvatça ve Sırpça cihazlar ise kendiliğinden Boşnakça alır. Sarajevo’da, Viyana’da, Malmö’de ya da İstanbul’da ol, fark etmez.',
  },

  pricing: {
    kicker: 'Ücretsiz ve coin',
    title: 'Seni koruyan şey ücretsiz.',
    lead: 'Mahrem, sohbetten önce sorular, kilitli sohbet ve denetim herkese açıktır. Güvenliğin parasını almayız. Coinler yalnızca hızlandırır — ve abonelik yok.',
    freeTitle: 'Ücretsiz, herkese',
    free: [
      'Profil ve Keşfet’te günde 30 profil',
      'Günde 20 beğeni',
      'Günde 1 tanışma mesajı',
      'Eşleşmeler ve onlarla sınırsız sohbet',
      'Sohbette mahrem',
      'Sohbetten önce sorular',
      'Topluluk, hikâyeler ve Günün sorusu',
      'Her gün ücretsiz coin',
    ],
    premiumTitle: 'Coin, daha fazlasını istediğinde',
    premium: [
      'Seni kimin beğendiğini gör',
      'Sohbeti hemen açan süper beğeni',
      'Ek tanışma mesajları',
      'Bugün için daha fazla beğeni ve profil',
      'Geçtiğin bir profili geri getir',
      'Toplulukta hikâyelere cevap',
      'Boost: profilin Keşfet’te en önde',
    ],
    extra:
      'Coinleri ücretsiz de kazanırsın: her gün, art arda yedi gün için, profilini tamamladığında ve arkadaşlarını davet ettiğinde. Yalnızca istersen satın alırsın, tek seferlik, App Store ya da Google Play’den — abonelik ve otomatik yenileme yok.',
  },


  about: {
    kicker: 'Hakkımızda',
    quote:
      'Niyyah, oyalanma değil eş arayan insanlar için var. Buradaki her şey o tek amaç üzerine kurulu: gerçek bir şey söyleyen profiller, ailenin bulunabildiği sohbetler, ve kimsenin korumasına gerek olmadan tutan sınırlar.',
    small:
      'Kendi topluluğu için üreten küçük bir ekibiz, ve uygulamanın gürültülü ve kalabalık olmasından çok sessiz ve güvenilir olmasını yeğleriz.',
    made: 'Bosna-Hersek’te özenle yapıldı.',
  },

  faq: {
    title: 'Bize sık sorulan sorular',
    items: [
      {
        q: 'Niyyah diğer tanışma uygulamalarından nasıl farklı?',
        a: 'Niyyah kaydırmak için değil, evlilik için kuruldu. Keşfet yalnızca karşı cinsi gösterir, mesajlar ancak ikiniz de beğendiğinizde açılır, ve bir kız kardeş sohbetlerine mahrem katabilir. Profil, nikâhtan önce önemli olanı taşır: namaz, mezhep, evlilik planları, çocuk ve taşınma.',
      },
      {
        q: 'Mahrem nedir ve nasıl eklerim?',
        a: 'Mahrem, kendisiyle evliliğin kalıcı olarak haram olduğu erkek aile üyesidir; örneğin baba, kardeş, amca ya da dayı. Veliyi de davet edebilirsin. Ayarlarda „Mahrem iste“yi açar ve en çok üç kişi davet edersin. Davet e-postayla gelir, mahrem onu uygulamada kabul eder. Mahrem portalında sohbetlerini ve eşleşmelerini görür ama yazamaz. Özellik kadın profillerinde bulunur.',
      },
      {
        q: 'Niyyah helal mi?',
        a: 'Fetva vermiyoruz ve herhangi bir kurumun onayladığını ileri sürmüyoruz. Gösterebildiğimiz şey, uygulamaya kurulu sınırlardır: yalnızca karşı cinsi görürsün, sohbet ancak karşılıklı ilgiyle açılır, mahrem sohbetleri okuyabilir, topluluğu moderatörler denetler. Hangi niyetle kullandığın sana kalır. Tereddüdün varsa güvendiğin bir imama sor.',
      },
      {
        q: 'Sohbetten önce sorular nedir?',
        a: 'Kendi sorularından en çok üçünü koyduğun bir seçenek. Eşleşmeden sonra karşı taraf önce onları cevaplar. Sen cevapları okur ve karar verirsin: „Beğendim“ sohbeti açar, „Beğenmedim“ açmaz.',
      },
      {
        q: 'Konumumu kim görebilir?',
        a: 'Kesin konumunu kimse görmez. Keşfet’teki haritada yalnızca yaklaşık bir bölge olarak, o da sen açarsan görünürsün. Kapattığında haritadan kaybolursun. Fotoğraflardaki gizli veriler, örneğin GPS konumu, yükleme sırasında silinir.',
      },
      {
        q: 'Sahte profillere karşı nasıl koruyorsunuz?',
        a: 'Verified işareti, kişinin yüz denetiminden geçtiği anlamına gelir: anlık çekilen bir fotoğrafı profilindeki resimlerle karşılaştırıldı. Bildirimleri, profilleri askıya alabilen ya da yasaklayabilen gerçek moderatörler okur, ve engelleme iki yönlü işler. Yasaklanan bir hesap yeni bir e-posta adresiyle öylece geri dönemez.',
      },
      {
        q: 'Ne ücretsiz, ne için coin gerekir?',
        a: 'Seni koruyan her şey ücretsiz: mahrem, sohbetten önce sorular, kilitli sohbet ve denetim; ayrıca günde 20 beğeni, bir tanışma mesajı ve eşleşmelerle sınırsız sohbet. Coinle seni kimin beğendiğini görebilir, süper beğeni ya da ek tanışma mesajı gönderebilir, o gün için daha fazla profil ve beğeni alabilir ve hikâyelere cevap verebilirsin. Coinleri her gün ücretsiz kazanırsın, istersen tek seferlik satın da alabilirsin. Abonelik yok, yani iptal edecek bir şey de yok.',
      },
      {
        q: 'Profilimi bir süre gizleyebilir miyim?',
        a: 'Evet. Keşfet’i duraklat, profil silinmeden Keşfet’ten kaybolur. Eşleşmeler ve sohbetler kalır, profili istediğinde geri getirirsin.',
      },
      {
        q: 'Uygulama hangi dillerde?',
        a: 'Dokuz dilde: Boşnakça, İngilizce, Almanca, Türkçe, Arapça, Endonezce, Urduca, Malayca ve Fransızca. Hırvatça ve Sırpça cihazlar kendiliğinden Boşnakça alır.',
      },
    ],
  },

  final: {
    title: 'Niyetle başla.',
    leadLaunched: 'Profilini kur ve gerçek bir şey kurmayı ciddiye alan insanlarla tanış.',
    leadWaitlist:
      'E-postanı bırak, Niyyah açılır açılmaz haber veririz. Sonra profilini kur ve gerçek bir şey kurmayı ciddiye alan insanlarla tanış.',
  },

  consent: {
    title: 'Reklam ölçümü',
    more: 'Bu ne demek',
    details:
      'Facebook’tan bir piksel, reklamımızın buraya kaç kişi getirdiğini ve kimin kaydolduğunu sayar. E-posta adresini ona asla göndermeyiz. Reddedersen Facebook’tan hiçbir şey yüklenmez.',
    close: 'Kapat',
    body:
      'Reklamlarımızın buraya kaç kişi getirdiğini ölçüyoruz. Başka bir şey değil, ve e-posta adresin asla daha ileri gitmez.',
    accept: 'Kabul ediyorum',
    decline: 'Hayır, teşekkürler',
    label: 'Reklam ölçümü',
    change: 'Ölçüm tercihi',
  },

  footer: {
    tagline: 'Niyetle aranan evlilik.',
    made: 'Bosna-Hersek’te özenle yapıldı.',
    rights: 'Niyyah',
    language: 'Dil',
  },
}
