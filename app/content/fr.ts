import type { Copy } from './bs'

export const fr: Copy = {
  meta: {
    title: 'Niyyah — L’application halal pour trouver un conjoint',
    description:
      'Niyyah est une application pour les musulmans qui cherchent le mariage. Les messages ne s’ouvrent qu’en cas d’intérêt mutuel, un mahram peut suivre la conversation, et la communauté est modérée. Gratuite, en neuf langues.',
    ogAlt: 'Niyyah : le mariage, cherché avec intention.',
  },

  nav: {
    skip: 'Aller au contenu',
    label: 'Navigation principale',
    home: 'Niyyah, accueil',
    links: [
      { href: '#mahrem', label: 'Mahram' },
      { href: '#kako', label: 'Comment ça marche' },
      { href: '#sigurnost', label: 'Sécurité' },
      { href: '#preporuke', label: 'Témoignages' },
      { href: '#pitanja', label: 'Questions' },
    ],
    language: 'Langue',
    menu: 'Menu',
    close: 'Fermer le menu',
  },

  cta: {
    download: 'Télécharger Niyyah',
    waitlist: 'Préviens-moi quand Niyyah sortira',
    waitlistShort: 'Préviens-moi',
    emailLabel: 'Ton adresse e-mail',
    emailPlaceholder: 'nom@exemple.com',
    sending: 'Envoi',
    success: 'Merci. Nous t’écrirons dès que Niyyah sortira, in shā Allāh.',
    invalid: 'Saisis une adresse e-mail valide, par exemple nom@exemple.com.',
    error: 'Ça n’est pas passé. Vérifie ta connexion et réessaie.',
    tooMany: 'Trop de tentatives. Réessaie dans quelques minutes.',
    notConnected: 'La liste d’attente n’est pas encore ouverte. Reviens bientôt.',
    privacy: 'Nous utilisons ton adresse uniquement pour te prévenir quand Niyyah sortira et pour qu’un cadeau de bienvenue t’attende. Nous ne la vendons pas et ne la donnons à personne pour de la publicité.',
    soon: 'Bientôt sur l’App Store et Google Play',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Télécharger dans l’',
    availableOn: 'Disponible sur',
    eyebrow: 'APPLICATION HALAL POUR LE MARIAGE',
    waiting: '{count} personnes attendent déjà Niyyah',
  },

  hero: {
    countdown: 'Niyyah arrive dans',
    countdownUnits: ['jours', 'heures', 'minutes', 'secondes'],
    title: 'Le mariage, cherché avec intention.',
    lead:
      'Niyyah est une application pour les musulmans qui cherchent sérieusement un conjoint. Les messages ne s’ouvrent qu’en cas d’intérêt mutuel, un mahram peut suivre la conversation, et ce sont les limites de l’application qui tiennent, pas les tiennes.',
    secondary: 'Comment fonctionne le mahram',
    micro: 'Gratuite. L’application existe en neuf langues.',
    imageAlt: 'Une fiche de profil dans Niyyah : prière, madhhab, projets de mariage et taux de compatibilité.',
  },

  mockProfile: {
    name: 'Amina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Verified',
    match: 'de compatibilité',
    rows: [
      { k: 'Foi', v: 'Pratiquante' },
      { k: 'Prière', v: 'Régulièrement' },
      { k: 'Madhhab', v: 'Hanafite' },
      { k: 'Mariage', v: 'Dans l’année' },
    ],
    prompt: 'La foi dans un mariage, c’est…',
    promptAnswer: 'se rappeler l’un à l’autre ce qui compte, même quand c’est difficile.',
    pass: 'Passer',
    like: 'Ça me plaît',
  },

  problem: {
    title: 'Les applications de rencontre n’ont pas été faites pour le mariage.',
    body: [
      'Elles ont été faites pour que tu fasses défiler. Des fiches sans fin, des gens sans intention claire, des conversations que tu ne pourrais jamais montrer à tes parents.',
      'Et se rencontrer par la famille est lent, le cercle est étroit, la pression est lourde. Entre ces deux mondes, il n’y avait rien pour nous.',
    ],
    pains: [
      'Tu ne sais pas qui est sérieux et qui est seulement là pour regarder.',
      'Les sœurs craignent le harcèlement, les faux profils et de devoir affronter tout cela seules.',
      'Les applications traduites ne comprennent ni notre langue, ni notre madhhab, ni nos usages, ni la diaspora.',
    ],
    eyebrow: 'COMMENT ÇA MARCHE',
    painsLabel: 'Ça te parle ?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Les autres applications mesurent leur succès au temps que tu y passes. Nous le mesurons au nikah après lequel tu n’as plus besoin de nous.',
  },

  pillars: {
    title: 'Construite pour le mariage, dès le premier écran.',
    items: [
      {
        word: 'Intention',
        title: 'L’intention d’abord',
        body: 'Chaque profil dit ce que la personne cherche et quand. Délai pour le mariage, enfants, déménagement : tu le sais avant le premier message.',
      },
      {
        word: 'Famille',
        title: 'En famille, pas seule',
        body: 'Une sœur peut inviter son père, son frère ou son tuteur à suivre ses conversations. Rien n’est caché à ceux dont l’avis compte.',
      },
      {
        word: 'Limites',
        title: 'Halal par conception',
        body: 'Uniquement le sexe opposé. Des messages seulement en cas d’intérêt mutuel. Une communauté relue par des modérateurs. Les limites, c’est l’application qui les tient : tu n’as pas à les garder.',
      },
    ],
  },

  mahrem: {
    kicker: 'Portail mahram',
    title: 'Rien de caché à ceux dont l’avis compte.',
    body:
      'Active « Exiger un mahram » et invite jusqu’à trois personnes de confiance : ton père, ton frère, ton oncle ou ton tuteur. Ils voient tes conversations dans le portail mahram, mais ne peuvent ni écrire ni faire de rencontres. Ils sont simplement là, comme ils le seraient en personne.',
    steps: [
      { title: 'Active « Exiger un mahram »', body: 'Un seul interrupteur dans les réglages.' },
      { title: 'Invite jusqu’à trois mahrams', body: 'L’invitation arrive par e-mail, et le mahram l’accepte dans l’application.' },
      {
        title: 'Ils lisent, tu parles',
        body: 'Le mahram voit les conversations et les correspondances. Il ne peut pas écrire depuis le portail et n’utilise aucune fonction de rencontre.',
      },
    ],
    who: [
      { label: 'Pour elle', body: 'Tu n’es pas seule. La famille est là, sans être derrière ton épaule.' },
      { label: 'Pour la famille', body: 'Vous savez avec qui elle parle et comment. Sans secrets.' },
      { label: 'Pour lui', body: 'Un signe clair qu’elle est sérieuse et que la famille est impliquée.' },
    ],
    parentsTitle: 'Parents, ceci est pour vous.',
    parentsBody:
      'Nous savons qu’« application de rencontre » ne sonne pas comme quelque chose pour votre fille ou votre sœur. Dans Niyyah, vous pouvez suivre ses conversations et voir avec qui elle écrit et comment, sans rien écrire vous-même. Une conversation ne peut même pas s’ouvrir avant que les deux côtés aient montré de l’intérêt, et tout cela est gratuit.',
    share: 'Envoie-lui cette page',
    shareDone: 'Lien copié',
    shareText: 'Niyyah : une application pour le mariage où la famille peut suivre la conversation.',
    imageAlt: 'Le portail mahram : un père lit la conversation de sa fille, sans pouvoir écrire.',
  },

  mockPortal: {
    title: 'Portail mahram',
    readOnly: 'Lecture seule',
    watching: 'Tu accompagnes : Amina',
    with: 'Conversation avec : Emir, 30',
    messages: [
      { from: 'him', text: 'Assalamu alaykum. Merci d’avoir ouvert la conversation.' },
      { from: 'her', text: 'Wa alaykum assalam. Tu as écrit que tu aimerais que les familles se rencontrent tôt ?' },
      { from: 'him', text: 'Oui. Mes parents aimeraient rencontrer les tiens avant quoi que ce soit de sérieux.' },
    ],
    locked: 'On ne peut pas écrire depuis le portail',
  },

  how: {
    kicker: 'Comment ça marche',
    title: 'Du profil à la conversation, en quatre étapes.',
    steps: [
      { title: 'Crée un profil avec une intention', body: 'La foi, la prière, les projets de mariage et tes propres mots.' },
      {
        title: 'Découvrir',
        body: 'Des personnes qui partagent tes valeurs, avec un taux de compatibilité. Des fiches ou une carte, avec des filtres par âge, ville et foi.',
      },
      {
        title: 'L’intérêt mutuel ouvre la conversation',
        body: 'Tant que vous ne vous êtes pas plu tous les deux, la conversation reste verrouillée. Avec tes questions avant le premier message.',
      },
      { title: 'La famille est avec toi', body: 'Un mahram dans la conversation, quand tu le veux.' },
    ],
  },

  questions: {
    kicker: 'Questions avant la conversation',
    title: 'Demande l’essentiel, avant le premier message.',
    body:
      'Pose jusqu’à trois questions. Après la correspondance, l’autre personne y répond d’abord, puis tu lis et tu décides si la conversation s’ouvre. Pas trois semaines d’échanges pour découvrir que vous n’êtes pas d’accord sur l’essentiel.',
    flow: ['Tu poses les questions', 'L’autre personne répond', 'Tu décides'],
    topics: ['Prière', 'Hijab', 'Déménagement', 'Enfants'],
    topicsLabel: 'On demande le plus souvent',
    imageAlt: 'Questions avant la conversation : trois réponses et le choix d’ouvrir ou non la conversation.',
  },

  mockQuestions: {
    title: 'Emir a répondu à tes questions',
    qa: [
      { q: 'Pries-tu régulièrement ?', a: 'Oui, les cinq. Le fajr est le plus dur pour moi, mais je m’efforce.' },
      { q: 'Où te vois-tu après le nikah ?', a: 'À Sarajevo, mais je suis ouvert à parler d’un déménagement.' },
      { q: 'Quelle place a la famille dans tes décisions ?', a: 'Une grande. J’aimerais que les familles se rencontrent tôt.' },
    ],
    no: 'Ça ne me plaît pas',
    yes: 'Ça me plaît',
  },

  profile: {
    kicker: 'Profil',
    title: 'Découvre comment la personne pense, pas seulement à quoi elle ressemble.',
    lead:
      'À côté des photos et de la description, le profil porte ce dont on parle avant le nikah. Moins de suppositions, moins de temps perdu, plus vite un « oui » ou un « non ».',
    fields: [
      { k: 'Rapport à la foi', v: ['Pratiquant(e)', 'Je m’efforce', 'Je ne pratique pas en ce moment'] },
      { k: 'Prière', v: ['Régulièrement', 'Parfois', 'Rarement'] },
      { k: 'Madhhab', v: ['Hanafite', 'Chaféite', 'Malikite', 'Hanbalite', 'Peu importe'] },
      { k: 'Hijab', v: ['Je le porte', 'Je ne le porte pas', 'J’ai l’intention'] },
      { k: 'Délai pour le mariage', v: ['Tout de suite', 'Dans l’année', '1–2 ans', 'Rien ne presse'] },
      { k: 'Déménagement', v: ['Prêt(e)', 'Impossible', 'Ouvert(e) à en parler'] },
      { k: 'Enfants', v: ['J’en veux', 'Je n’en veux pas', 'J’en ai déjà', 'Je ne sais pas'] },
    ],
    more: 'Et aussi : tabac, études, métier, langue maternelle, taille et centres d’intérêt.',
    promptsTitle: 'Avec tes mots',
    prompts: ['La foi dans un mariage, c’est…', 'Que cherches-tu chez un conjoint ?', 'Comment passes-tu ton week-end ?'],
    situationsTitle: 'Situations',
    situationsBody:
      'Réponds à des scénarios réels dans sept domaines. Les autres voient comment tu penses, pas seulement à quoi tu ressembles.',
    situations: ['Mariage', 'Communication', 'Résolution des conflits', 'Famille', 'Foi', 'Argent', 'Parentalité'],
    matchTitle: 'Taux de compatibilité',
    matchBody: 'Sur chaque fiche : centres d’intérêt communs, rapport à la foi et intention.',
    imageAlt: 'Détails d’un profil Niyyah : foi, projets de mariage et réponses aux situations.',
  },

  mockDetails: {
    title: 'À propos d’Emir',
    rows: [
      { k: 'Mariage', v: 'Dans l’année' },
      { k: 'Déménagement', v: 'Ouvert à en parler' },
      { k: 'Enfants', v: 'J’en veux' },
      { k: 'Métier', v: 'Ingénieur' },
    ],
    situation: 'Situation · Résolution des conflits',
    question: 'Vous vous êtes disputés à cause de la famille. Que fais-tu d’abord ?',
    answer: 'J’attends que nous soyons calmés tous les deux, puis je demande comment elle voit les choses. Ce n’est qu’après que je dis la mienne.',
  },

  safety: {
    kicker: 'Sécurité et vie privée',
    title: 'Ta vie privée n’est pas le produit.',
    lead: 'Nous ne vendons jamais tes données. La sécurité est intégrée à l’application, pas ajoutée en option.',
    items: [
      {
        icon: 'pin',
        title: 'Jamais ta position exacte',
        body: 'La carte ne montre qu’une zone approximative, et seulement tant que tu l’actives. Désactive-la et tu disparais de la carte.',
      },
      {
        icon: 'photo',
        title: 'Vérification des photos',
        body: 'Les photos floues ou trop petites sont refusées, et les données cachées dans l’image, comme la position GPS, sont supprimées par le système. Une personne de notre équipe compare ton selfie de vérification avec tes photos.',
      },
      {
        icon: 'badge',
        title: 'Badge Verified',
        body: 'Une courte vérification que tu es bien la personne des photos. Tu confirmes ton numéro ou ton e-mail avant d’entrer dans Découvrir.',
      },
      {
        icon: 'people',
        title: 'De vrais modérateurs',
        body: 'Les signalements sont lus par une équipe de modération dédiée, qui peut suspendre et bannir des profils.',
      },
      {
        icon: 'block',
        title: 'Le blocage va dans les deux sens',
        body: 'Si tu bloques quelqu’un, vous disparaissez l’un de l’autre dans l’application.',
      },
      {
        icon: 'pause',
        title: 'Mettre Découvrir en pause',
        body: 'Cache ton profil sans le supprimer. Les correspondances et les conversations restent.',
      },
      {
        icon: 'finger',
        title: 'Déverrouillage par empreinte ou visage',
        body: 'Ton empreinte ne quitte jamais ton appareil.',
      },
    ],
    ayahRef: 'Al-Qiyâma 75:4',
    ayahNote:
      'L’écran de déverrouillage porte un verset de la sourate Al-Qiyâma (75:3–4), au sujet d’Allah, capable de reconstituer jusqu’au bout de nos doigts.',
  },

  community: {
    kicker: 'Communauté',
    title: 'Un lieu pour apprendre le mariage avant le mariage.',
    lead:
      'Tu demandes, tu lis des expériences, tu apprends des autres. Chaque publication passe par un modérateur avant d’apparaître, et il n’y a pas de commentaires sous lesquels on refuserait de signer.',
    items: [
      { title: 'Demande aux frères, Demande aux sœurs', body: 'Des espaces séparés que seul un sexe peut voir.' },
      {
        title: 'Anonyme, quand il faut',
        body: 'Certaines questions se posent mal sous son nom. Publie en tant que « Sœur anonyme » ou « Frère anonyme ».',
      },
      { title: 'Question du jour', body: 'Chaque jour une question sur le mariage et les valeurs, sur l’écran d’accueil.' },
      {
        title: 'Des récits sans commentaires publics',
        body: '24 heures ou une seule vue. Pour toute la communauté ou seulement pour tes correspondances.',
      },
    ],
    reactionsLabel: 'Des réactions qui récompensent l’utilité, pas l’ego',
    reactions: ['Utile', 'C’est juste', 'Inspirant', 'Réfléchi'],
    imageAlt: 'La communauté Niyyah : une question anonyme dans l’espace Demande aux sœurs.',
  },

  mockPost: {
    space: 'Demande aux sœurs',
    author: 'Sœur anonyme',
    category: 'Mariage',
    text: 'Comment avez-vous dit à vos parents que vous cherchiez un conjoint par une application ? Comment ont-ils réagi ?',
    reviewed: 'Relu par un modérateur',
  },

  languages: {
    title: 'Dans ta langue, où que tu sois.',
    lead:
      'L’application, les e-mails et les notifications en neuf langues. L’arabe et l’ourdou se lisent de droite à gauche, et les appareils en croate et en serbe reçoivent le bosnien automatiquement. Que tu sois à Sarajevo, à Vienne, à Malmö ou à Istanbul.',
  },

  pricing: {
    kicker: 'Gratuit et pièces',
    title: 'Ce qui te protège est gratuit.',
    lead: 'Le mahram, les questions avant la conversation, le chat verrouillé et la modération sont accessibles à tous. Nous ne facturons pas la sécurité. Les pièces ne font qu’accélérer — et il n’y a pas d’abonnement.',
    freeTitle: 'Gratuit, pour tous',
    free: [
      'Un profil et 30 profils par jour dans Découvrir',
      '20 likes par jour',
      'Vois qui t’a liké : 1 personne par jour',
      'Lire tous les messages qu’on t’envoie',
      'Correspondances et conversation illimitée avec elles',
      'Un mahram dans la conversation',
      'Questions avant la conversation',
      'Communauté, récits et Question du jour',
      'Des pièces gratuites chaque jour',
    ],
    premiumTitle: 'Des pièces, quand tu veux plus',
    premium: [
      'Vois tous ceux qui t’ont liké',
      'Super like : ton like en tête, avec ton nom et ta photo',
      'Messages directs (un like avec un message)',
      'Plus de likes et de profils pour aujourd’hui',
      'Retrouve un profil que tu as passé',
      'Répondre aux récits de la communauté',
      'Boost : ton profil en premier dans Découvrir',
    ],
    extra:
      'Tu gagnes aussi des pièces gratuitement : chaque jour, pour sept jours d’affilée, pour un profil complet et pour les amis invités. Tu ne les achètes que si tu le veux, en une fois, sur l’App Store ou Google Play — sans abonnement ni renouvellement automatique.',
  },


  about: {
    kicker: 'À propos',
    quote:
      'Niyyah existe pour les gens qui cherchent un conjoint, pas un passe-temps. Tout ici est construit autour de ce seul but : des profils qui disent quelque chose de vrai, des conversations où la famille peut être présente, et des limites qui tiennent sans que personne ait à les garder.',
    small:
      'Nous sommes une petite équipe qui construit pour sa propre communauté, et nous préférons une application discrète et fiable à une application bruyante et fréquentée.',
    made: 'Fait avec soin en Bosnie-Herzégovine.',
  },

  faq: {
    title: 'Les questions qu’on nous pose souvent',
    items: [
      {
        q: 'En quoi Niyyah diffère-t-elle des autres applications de rencontre ?',
        a: 'Niyyah est construite pour le mariage, pas pour le défilement. Découvrir ne montre que le sexe opposé, les messages ne s’ouvrent que lorsque vous vous êtes likés tous les deux, et une sœur peut associer un mahram à ses conversations. Le profil porte ce qui compte avant le nikah : la prière, le madhhab, les projets de mariage, les enfants et le déménagement.',
      },
      {
        q: 'Qu’est-ce qu’un mahram et comment l’ajouter ?',
        a: 'Un mahram est un membre masculin de la famille avec qui le mariage est définitivement interdit, par exemple le père, le frère ou l’oncle. Tu peux aussi inviter un tuteur. Dans les réglages, active « Exiger un mahram » et invite jusqu’à trois personnes. L’invitation arrive par e-mail et le mahram l’accepte dans l’application. Dans le portail mahram, il voit ensuite tes conversations et tes correspondances, mais ne peut pas écrire. La fonction est disponible sur les profils féminins.',
      },
      {
        q: 'Niyyah est-elle halal ?',
        a: 'Nous n’émettons pas de fatwas et ne prétendons pas être approuvés par une institution. Ce que nous pouvons montrer, ce sont les limites intégrées à l’application : tu ne vois que le sexe opposé, une conversation ne s’ouvre qu’en cas d’intérêt mutuel, un mahram peut lire les conversations, et des modérateurs relisent la communauté. L’intention avec laquelle tu l’utilises reste la tienne. En cas de doute, demande à un imam en qui tu as confiance.',
      },
      {
        q: 'Que sont les questions avant la conversation ?',
        a: 'Une option qui te permet de poser jusqu’à trois questions à toi. Après la correspondance, l’autre personne y répond d’abord. Tu lis les réponses et tu décides : « Ça me plaît » ouvre la conversation, « Ça ne me plaît pas » ne l’ouvre pas.',
      },
      {
        q: 'Qui peut voir ma position ?',
        a: 'Personne ne voit ta position exacte. Sur la carte de Découvrir, tu n’apparais que comme une zone approximative, et seulement si tu l’actives. Désactive-la et tu disparais de la carte. Les données cachées dans les photos, comme la position GPS, sont supprimées à l’envoi.',
      },
      {
        q: 'Comment vous protégez-vous des faux profils ?',
        a: 'Le badge Verified signifie que la personne a passé une vérification du visage : une photo prise en direct a été comparée aux images de son profil. Les signalements sont lus par de vrais modérateurs, qui peuvent suspendre ou bannir un profil, et le blocage va dans les deux sens. Un compte banni ne peut pas simplement revenir avec une nouvelle adresse e-mail.',
      },
      {
        q: 'Qu’est-ce qui est gratuit, et qu’est-ce qui coûte des pièces ?',
        a: 'Tout ce qui te protège est gratuit : le mahram, les questions avant la conversation, le chat verrouillé et la modération, avec 30 profils et 20 likes par jour, une personne par jour parmi celles qui t’ont liké, la lecture de tous les messages qu’on t’envoie, et une conversation illimitée avec tes correspondances. Avec des pièces, tu peux voir tous ceux qui t’ont liké, envoyer un super like (ton like en tête, mis en avant, avec ton nom et ta photo) ou un message direct (un like avec un message, que l’autre lit gratuitement), obtenir plus de profils et de likes pour la journée, et répondre aux récits. Une conversation ne s’ouvre que lorsque vous vous likez tous les deux. Tu gagnes des pièces gratuitement chaque jour, et tu peux aussi les acheter en une fois. Il n’y a pas d’abonnement, donc rien à résilier.',
      },
      {
        q: 'Puis-je masquer mon profil temporairement ?',
        a: 'Oui. Mets Découvrir en pause et ton profil disparaît de Découvrir sans être supprimé. Les correspondances et les conversations restent, et tu rétablis ton profil quand tu veux.',
      },
      {
        q: 'Dans quelles langues l’application existe-t-elle ?',
        a: 'En neuf : bosnien, anglais, allemand, turc, arabe, indonésien, ourdou, malais et français. Les appareils en croate et en serbe reçoivent le bosnien automatiquement.',
      },
    ],
  },

  final: {
    title: 'Commence avec une intention.',
    leadLaunched: 'Crée ton profil et rencontre des gens qui veulent sérieusement construire quelque chose de vrai.',
    leadWaitlist:
      'Laisse ton e-mail et nous te préviendrons dès que Niyyah sortira. Ensuite, crée ton profil et rencontre des gens qui veulent sérieusement construire quelque chose de vrai.',
  },

  consent: {
    title: 'Mesure des publicités',
    more: 'Ce que cela signifie',
    details:
      'Un pixel de Facebook compte combien de personnes notre publicité amène ici et qui s’inscrit. Nous ne lui envoyons jamais ton adresse e-mail. Si tu refuses, rien de Facebook n’est chargé.',
    close: 'Fermer',
    body:
      'Nous mesurons combien de personnes nos publicités amènent ici. Rien d’autre, et ton adresse e-mail ne va jamais plus loin.',
    accept: 'J’accepte',
    decline: 'Non merci',
    label: 'Mesure des publicités',
    change: 'Choix de mesure',
  },

  footer: {
    tagline: 'Le mariage, cherché avec intention.',
    made: 'Fait avec soin en Bosnie-Herzégovine.',
    language: 'Langue',
  },
}
