import type { Copy } from './bs'

export const en: Copy = {
  meta: {
    title: 'Niyyah — The halal app for finding a spouse',
    description:
      'Niyyah is an app for Muslims who are looking for marriage. Messages open only on mutual interest, a mahram can be in the conversation, and the community is moderated. Free, in English and 8 more languages.',
    ogAlt: 'Niyyah: Marriage, sought with intention.',
  },

  nav: {
    skip: 'Skip to content',
    label: 'Main navigation',
    home: 'Niyyah, home',
    links: [
      { href: '#mahrem', label: 'Mahram' },
      { href: '#kako', label: 'How it works' },
      { href: '#sigurnost', label: 'Safety' },
      { href: '#preporuke', label: 'Testimonials' },
      { href: '#pitanja', label: 'FAQ' },
    ],
    language: 'Language',
    menu: 'Menu',
    close: 'Close menu',
  },

  cta: {
    download: 'Get Niyyah',
    waitlist: 'Tell me when Niyyah launches',
    waitlistShort: 'Notify me',
    emailLabel: 'Your email address',
    emailPlaceholder: 'name@example.com',
    sending: 'Sending',
    success: 'Thank you. We will write to you as soon as Niyyah launches, in shā Allāh.',
    invalid: 'Enter a valid email address, for example name@example.com.',
    error: 'That did not go through. Check your connection and try again.',
    tooMany: 'Too many attempts. Try again in a few minutes.',
    notConnected: 'The waitlist is not open yet. Please check back soon.',
    privacy: 'We use your address only to tell you when Niyyah launches and to have a welcome gift waiting for you. We don’t sell it or give it to anyone for ads.',
    soon: 'Coming soon to the App Store and Google Play',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Get it on',
    availableOn: 'Get it on',
    eyebrow: 'HALAL MARRIAGE APP',
    waiting: '{count} people are already waiting for Niyyah',
  },

  hero: {
    countdown: 'Niyyah arrives in',
    countdownUnits: ['days', 'hours', 'minutes', 'seconds'],
    title: 'Marriage, sought with intention.',
    lead:
      'Niyyah is an app for Muslims who are seriously looking for a spouse. Messages open only on mutual interest, a mahram can be in the conversation, and the app keeps the boundaries, so you do not have to.',
    secondary: 'How the mahram feature works',
    micro: 'Free. In English, Bosnian and 7 more languages.',
    imageAlt: 'A Niyyah profile card: prayer, madhhab, marriage plans and compatibility score.',
  },

  mockProfile: {
    name: 'Amina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Verified',
    match: 'compatible',
    rows: [
      { k: 'Faith', v: 'Practising' },
      { k: 'Prayer', v: 'Regularly' },
      { k: 'Madhhab', v: 'Hanafi' },
      { k: 'Marriage', v: 'Within a year' },
    ],
    prompt: 'Faith in a marriage means…',
    promptAnswer: 'reminding each other of what matters, especially when it is hard.',
    pass: 'Pass',
    like: 'I like this',
  },

  problem: {
    title: 'Dating apps were not built for marriage.',
    body: [
      'They were built to keep you scrolling. Endless cards, people with no clear intention, conversations you could never show your parents.',
      'Meeting through relatives is slow, the circle is small and the pressure is heavy. Between those two worlds there was nothing for us.',
    ],
    pains: [
      'You cannot tell who is serious and who is only looking around.',
      'Sisters worry about harassment, fake profiles and facing it all alone.',
      'Translated apps do not understand our language, madhhab, customs or diaspora.',
    ],
    eyebrow: 'HOW IT WORKS',
    painIcons: ['eye', 'people', 'doc'],
    painsLabel: 'Sound familiar?',
    quote:
      'Other apps measure success by the time you spend in them. We measure it by the nikah after which you no longer need us.',
  },

  pillars: {
    title: 'Built for marriage, from the first screen.',
    items: [
      {
        word: 'Intention',
        title: 'Intention comes first',
        body: 'Every profile says what the person is looking for and when. Marriage timeline, children, relocation: you know before the first message.',
      },
      {
        word: 'Family',
        title: 'Family, not alone',
        body: 'A sister can invite her father, brother or guardian to be in her conversations. Nothing is hidden from the people whose opinion matters.',
      },
      {
        word: 'Boundaries',
        title: 'Halal by design',
        body: 'Opposite gender only. Messages only on mutual interest. A community reviewed by moderators. The app keeps the boundaries, you do not have to.',
      },
    ],
  },

  mahrem: {
    kicker: 'Mahram portal',
    title: 'Nothing hidden from the people whose opinion matters.',
    body:
      'Turn on “Require a mahram” and invite up to three people you trust: your father, brother, paternal or maternal uncle, or guardian. They see your conversations in the Mahram portal, but they cannot write or use the app to meet anyone. They are simply there, as they would be in person.',
    steps: [
      { title: 'Turn on “Require a mahram”', body: 'One switch in settings.' },
      { title: 'Invite up to three mahrams', body: 'The invitation arrives by email, and your mahram accepts it in the app.' },
      {
        title: 'They read, you talk',
        body: 'Your mahram sees your conversations and matches. He cannot write from the portal or use any matchmaking features.',
      },
    ],
    who: [
      { label: 'For her', body: 'You are not alone. Your family is there without standing over your shoulder.' },
      { label: 'For her family', body: 'You know who she is talking to and how. No secrets.' },
      { label: 'For him', body: 'A clear sign that she is serious and that her family is involved.' },
    ],
    parentsTitle: 'Parents, this is for you.',
    parentsBody:
      'We know a “dating app” does not sound like something for your daughter or sister. In Niyyah you can be in her conversations and see who she is writing to and how, without writing anything yourself. A conversation cannot even open until both sides show interest, and all of this is free.',
    share: 'Send her this page',
    shareDone: 'Link copied',
    shareText: 'Niyyah: a marriage app where family can be part of the conversation.',
    imageAlt: 'The Mahram portal: a father reading his daughter’s conversation, with writing disabled.',
  },

  mockPortal: {
    title: 'Mahram portal',
    readOnly: 'Read only',
    watching: 'Looking after: Amina',
    with: 'Conversation with: Emir, 30',
    messages: [
      { from: 'him', text: 'Assalamu alaikum. Thank you for opening the conversation.' },
      { from: 'her', text: 'Wa alaikum assalam. You wrote that you would like our families to meet early?' },
      { from: 'him', text: 'Yes. My parents would love to meet yours before anything serious.' },
    ],
    locked: 'Writing is disabled in the portal',
  },

  how: {
    kicker: 'How it works',
    title: 'From profile to conversation, in four steps.',
    steps: [
      { title: 'Create a profile with intention', body: 'Faith, prayer, marriage plans and your own words.' },
      {
        title: 'Discover',
        body: 'People who share your values, with a compatibility score. Cards or a map, with filters for age, city and faith.',
      },
      {
        title: 'Mutual interest opens the chat',
        body: 'Until you both like each other, the conversation stays locked. With your questions before the first message.',
      },
      { title: 'Your family is with you', body: 'A mahram in the conversation, whenever you want.' },
    ],
  },

  questions: {
    kicker: 'Questions before chatting',
    title: 'Ask what matters, before the first message.',
    body:
      'Set up to three questions. After you match, the other person answers them first, and you read the answers and decide whether the conversation opens. No three weeks of messaging only to find out you disagree on the basics.',
    flow: ['You set the questions', 'They answer', 'You decide'],
    topics: ['Prayer', 'Hijab', 'Relocation', 'Children'],
    topicsLabel: 'People often ask about',
    imageAlt: 'Questions before chatting: three answers and the choice to open the conversation.',
  },

  mockQuestions: {
    title: 'Emir answered your questions',
    qa: [
      { q: 'Do you pray regularly?', a: 'Yes, all five. Fajr is the hardest for me, but I try.' },
      { q: 'Where do you see yourself after the nikah?', a: 'In Sarajevo, but I am open to talking about moving.' },
      { q: 'How much does family matter in your decisions?', a: 'A lot. I would like our families to meet early.' },
    ],
    no: 'Not for me',
    yes: 'I like this',
  },

  profile: {
    kicker: 'Profile',
    title: 'See how they think, not only how they look.',
    lead:
      'Beyond photos and a bio, a profile carries what people talk about before the nikah. Less guessing, less wasted time, a faster “yes” or “no”.',
    fields: [
      { k: 'Relationship with faith', v: ['Practising', 'Trying', 'Not practising right now'] },
      { k: 'Prayer', v: ['Regularly', 'Sometimes', 'Rarely'] },
      { k: 'Madhhab', v: ['Hanafi', 'Shafi‘i', 'Maliki', 'Hanbali', 'Does not matter'] },
      { k: 'Hijab', v: ['I wear it', 'I do not', 'I plan to'] },
      { k: 'Marriage timeline', v: ['Right away', 'Within a year', '1–2 years', 'No rush'] },
      { k: 'Relocation', v: ['Willing', 'Not possible', 'Open to talking'] },
      { k: 'Children', v: ['Want them', 'Do not want them', 'Already have', 'Not sure'] },
    ],
    more: 'Plus: smoking, education, occupation, native language, height and interests.',
    promptsTitle: 'In your own words',
    prompts: ['Faith in a marriage means…', 'What are you looking for in a partner?', 'How do you spend your weekend?'],
    situationsTitle: 'Situations',
    situationsBody:
      'Answer real-life scenarios in seven areas. Others see how you think, not only how you look.',
    situations: ['Marriage', 'Communication', 'Resolving conflict', 'Family', 'Faith', 'Finances', 'Parenting'],
    matchTitle: 'Compatibility score',
    matchBody: 'On every card: shared interests, relationship with faith and intention.',
    imageAlt: 'Niyyah profile details: faith, marriage plans and answers to situations.',
  },

  mockDetails: {
    title: 'About Emir',
    rows: [
      { k: 'Marriage', v: 'Within a year' },
      { k: 'Relocation', v: 'Open to talking' },
      { k: 'Children', v: 'Want them' },
      { k: 'Occupation', v: 'Engineer' },
    ],
    situation: 'Situation · Resolving conflict',
    question: 'You argued about family. What do you do first?',
    answer: 'Wait until we have both calmed down, then ask how she sees it. Only then do I share my side.',
  },

  safety: {
    kicker: 'Safety and privacy',
    title: 'Your privacy is not the product.',
    lead: 'We never sell your data. Safety is built into the app, not added as an option.',
    items: [
      {
        icon: 'pin',
        title: 'Never your exact location',
        body: 'The map shows only an approximate area, and only while you keep it on. Turn it off and you disappear from the map.',
      },
      {
        icon: 'photo',
        title: 'Photo checks',
        body: 'A clear face, one person, nothing blurred or covered. Hidden data in the image, such as GPS location, is removed.',
      },
      {
        icon: 'badge',
        title: 'Verified badge',
        body: 'A short check that you are the person in the photos. You confirm your phone number or email before entering Discover.',
      },
      {
        icon: 'people',
        title: 'Real moderators',
        body: 'Reports are read by a dedicated moderation team that can suspend and ban profiles.',
      },
      {
        icon: 'block',
        title: 'Blocking works both ways',
        body: 'Block someone and you disappear from each other in the app.',
      },
      {
        icon: 'pause',
        title: 'Pause Discover',
        body: 'Hide your profile without deleting it. Your matches and conversations stay.',
      },
      {
        icon: 'finger',
        title: 'Unlock with fingerprint or face',
        body: 'Your fingerprint never leaves your device.',
      },
    ],
    ayahRef: 'Al-Qiyamah 75:4',
    ayahNote:
      'The unlock screen carries a verse from Surah Al-Qiyamah (75:3–4), about Allah, who is able to restore even the tips of our fingers.',
  },

  community: {
    kicker: 'Community',
    title: 'A place to learn about marriage before marriage.',
    lead:
      'Ask, read other people’s experiences, learn from each other. Every post is reviewed by a moderator before it appears, and there are no comment threads you would not want your name under.',
    items: [
      { title: 'Ask the brothers, Ask the sisters', body: 'Separate spaces that only one gender can see.' },
      {
        title: 'Anonymous, when you need it',
        body: 'Some questions are hard to ask under your name. Post as “Anonymous sister” or “Anonymous brother”.',
      },
      { title: 'Question of the day', body: 'One question about marriage and values every day, on your home screen.' },
      {
        title: 'Stories without public comments',
        body: '24 hours or a single view. For the whole community or only your matches.',
      },
    ],
    reactionsLabel: 'Reactions that reward usefulness, not ego',
    reactions: ['Helpful', 'Makes sense', 'Inspiring', 'Thoughtful'],
    imageAlt: 'The Niyyah community: an anonymous question in the Ask the sisters space.',
  },

  mockPost: {
    space: 'Ask the sisters',
    author: 'Anonymous sister',
    category: 'Marriage',
    text: 'How did you tell your parents you were looking for a spouse through an app? How did they react?',
    reviewed: 'Reviewed by a moderator',
  },

  languages: {
    title: 'In your language, wherever you are.',
    lead:
      'The app, emails and notifications in nine languages. Arabic and Urdu read right to left, and Croatian and Serbian devices get Bosnian automatically. Whether you are in Sarajevo, Vienna, Malmö or Istanbul.',
  },

  pricing: {
    kicker: 'Free and coins',
    title: 'What keeps you safe is free.',
    lead: 'Mahram, questions before chat, locked conversations and moderation are for everyone. We do not charge for safety. Coins only speed things up — and there is no subscription.',
    freeTitle: 'Free, for everyone',
    free: [
      'A profile and 30 profiles a day in Discover',
      '20 likes a day',
      'See who liked you: 1 person a day',
      'Reading every message sent to you',
      'Matches, and unlimited conversation with them',
      'A mahram in the conversation',
      'Questions before chat',
      'Community, stories and the Question of the day',
      'Free coins every day',
    ],
    premiumTitle: 'Coins, when you want more',
    premium: [
      'See everyone who liked you',
      'Super like: your like on top, with your name and photo',
      'Direct messages (a like with a message)',
      'More likes and profiles for today',
      'Bring back a profile you skipped',
      'Reply to stories in the community',
      'Boost: your profile first in Discover',
    ],
    extra:
      'You also earn coins for free: every day, for seven days in a row, for completing your profile and for inviting friends. You buy them only if you want to, once, in the App Store or Google Play — no subscription and no automatic renewal.',
  },


  about: {
    kicker: 'About us',
    quote:
      'Niyyah exists for people who are looking for a spouse, not a pastime. Everything here is built around that one purpose: profiles that say something real, conversations where family can be present, and boundaries that hold without anyone having to guard them.',
    small:
      'We are a small team building for our own community, and we would rather the app be quiet and reliable than loud and busy.',
    made: 'Made with care in Bosnia and Herzegovina.',
  },

  faq: {
    title: 'Questions people often ask us',
    items: [
      {
        q: 'How is Niyyah different from other dating apps?',
        a: 'Niyyah is built for marriage, not for scrolling. Discover shows only the opposite gender, messages open only when you both like each other, and a sister can bring a mahram into her conversations. A profile carries what matters before the nikah: prayer, madhhab, marriage plans, children and relocation.',
      },
      {
        q: 'What is a mahram and how do I add one?',
        a: 'A mahram is a male family member whom a woman can never marry, such as her father, brother, or paternal or maternal uncle. You can also invite a guardian. In settings, turn on “Require a mahram” and invite up to three people. The invitation arrives by email and your mahram accepts it in the app. In the Mahram portal he then sees your conversations and matches, but cannot write. The feature is available on women’s profiles.',
      },
      {
        q: 'Is Niyyah halal?',
        a: 'We do not issue fatwas and we do not claim approval from any institution. What we can show you are the boundaries built into the app: you see only the opposite gender, a conversation opens only on mutual interest, a mahram can read conversations, and moderators review the community. The intention you bring to it is yours. If you are unsure, ask an imam you trust.',
      },
      {
        q: 'What are questions before chatting?',
        a: 'An option that lets you set up to three questions of your own. After you match, the other person answers them first. You read the answers and decide: “I like this” opens the conversation, “Not for me” does not.',
      },
      {
        q: 'Who can see my location?',
        a: 'Nobody sees your exact location. On the Discover map you appear only as an approximate area, and only if you turn it on. Turn it off and you disappear from the map. Hidden data in photos, such as GPS location, is removed on upload.',
      },
      {
        q: 'How do you protect against fake profiles?',
        a: 'The verified badge means the person passed a face check: a live photo of them was compared with the pictures on their profile. Reports are read by real moderators who can suspend or ban a profile, and blocking works both ways. A banned account cannot simply come back with a new email address.',
      },
      {
        q: 'What is free, and what costs coins?',
        a: 'Everything that keeps you safe is free: mahram, questions before chat, locked conversations and moderation, plus 30 profiles and 20 likes a day, one person a day from those who liked you, reading every message sent to you, and unlimited conversation with your matches. With coins you can see everyone who liked you, send a super like (your like shown at the top, highlighted, with your name and photo) or a direct message (a like with a message, which they read for free), get more profiles and likes for the day, and reply to stories. A conversation opens only when you both like each other. You earn coins for free every day, and you can also buy them once-off. There is no subscription, so there is nothing to cancel.',
      },
      {
        q: 'Can I hide my profile for a while?',
        a: 'Yes. Pause Discover and your profile disappears from Discover without being deleted. Your matches and conversations stay, and you can bring your profile back whenever you like.',
      },
      {
        q: 'Which languages is the app in?',
        a: 'Nine: Bosnian, English, German, Turkish, Arabic, Indonesian, Urdu, Malay and French. Croatian and Serbian devices get Bosnian automatically.',
      },
    ],
  },

  final: {
    title: 'Begin with intention.',
    leadLaunched: 'Create your profile and meet people who seriously want to build something real.',
    leadWaitlist:
      'Leave your email and we will let you know as soon as Niyyah launches. Then create your profile and meet people who seriously want to build something real.',
  },

  consent: {
    title: 'Ad measurement',
    more: 'What this means',
    details:
      'A pixel from Facebook counts how many people our ad brings here and who signs up. We never send it your email address. If you decline, nothing from Facebook is loaded at all.',
    close: 'Close',
    body:
      'We measure how many people our ads bring here. Nothing else, and your email address never goes further.',
    accept: 'Accept',
    decline: 'No thanks',
    label: 'Ad measurement',
    change: 'Measurement choice',
  },

  footer: {
    tagline: 'Marriage, sought with intention.',
    made: 'Made with care in Bosnia and Herzegovina.',
    rights: 'Niyyah',
    language: 'Language',
  },
}
