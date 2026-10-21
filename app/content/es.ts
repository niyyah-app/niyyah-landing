import type { Copy } from './bs'

export const es: Copy = {
  meta: {
    title: 'Niyyah — La app halal para encontrar cónyuge',
    description:
      'Niyyah es una app para musulmanes que buscan el matrimonio. Los mensajes se abren solo con interés mutuo, un mahram puede estar en la conversación y la comunidad está moderada. Gratis, en nueve idiomas.',
    ogAlt: 'Niyyah: el matrimonio, buscado con intención.',
  },

  nav: {
    skip: 'Ir al contenido',
    label: 'Navegación principal',
    home: 'Niyyah, inicio',
    links: [
      { href: '#mahrem', label: 'Mahram' },
      { href: '#kako', label: 'Cómo funciona' },
      { href: '#sigurnost', label: 'Seguridad' },
      { href: '#preporuke', label: 'Testimonios' },
      { href: '#pitanja', label: 'Preguntas' },
    ],
    language: 'Idioma',
    menu: 'Menú',
    close: 'Cerrar el menú',
  },

  cta: {
    download: 'Consigue Niyyah',
    waitlist: 'Avísame cuando Niyyah empiece',
    waitlistShort: 'Avísame',
    emailLabel: 'Tu correo electrónico',
    emailPlaceholder: 'nombre@ejemplo.com',
    sending: 'Enviando',
    success: 'Gracias. Te escribiremos en cuanto Niyyah empiece, in shā Allāh.',
    invalid: 'Escribe un correo válido, por ejemplo nombre@ejemplo.com.',
    error: 'No ha funcionado. Revisa tu conexión e inténtalo de nuevo.',
    tooMany: 'Demasiados intentos. Inténtalo de nuevo en unos minutos.',
    notConnected: 'La lista de espera todavía no está abierta. Vuelve pronto.',
    privacy: 'Usamos tu dirección solo para avisarte cuando Niyyah empiece y para que te espere un regalo de bienvenida. No la vendemos ni se la damos a nadie para publicidad.',
    soon: 'Pronto en App Store y Google Play',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    getOn: 'Consíguela en',
    availableOn: 'Disponible en',
    eyebrow: 'APP HALAL PARA EL MATRIMONIO',
    waiting: '{count} personas ya están esperando Niyyah',
  },

  hero: {
    countdown: 'Niyyah llega en',
    countdownUnits: ['días', 'horas', 'minutos', 'segundos'],
    title: 'El matrimonio, buscado con intención.',
    lead:
      'Niyyah es una app para musulmanes que buscan cónyuge en serio. Los mensajes se abren solo con interés mutuo, un mahram puede estar en la conversación y los límites los sostiene la app, no tú.',
    secondary: 'Cómo funciona el mahram',
    micro: 'Gratis. La app está en nueve idiomas.',
    imageAlt: 'Una ficha de perfil en Niyyah: oración, madhhab, planes de matrimonio y porcentaje de afinidad.',
  },

  mockProfile: {
    name: 'Amina, 27',
    place: 'Sarajevo · 4 km',
    verified: 'Verificada',
    match: 'de afinidad',
    rows: [
      { k: 'Fe', v: 'Practicante' },
      { k: 'Oración', v: 'Con regularidad' },
      { k: 'Madhhab', v: 'Hanafí' },
      { k: 'Matrimonio', v: 'En un año' },
    ],
    prompt: 'La fe en el matrimonio significa…',
    promptAnswer: 'recordarnos lo que importa, incluso cuando cuesta.',
    pass: 'Siguiente',
    like: 'Me gusta',
  },

  problem: {
    title: 'Las apps de citas no se hicieron para el matrimonio.',
    body: [
      'Se hicieron para que sigas deslizando. Fichas sin fin, gente sin intención clara, conversaciones que nunca podrías mostrar a tus padres.',
      'Y conocerse por medio de la familia es lento, el círculo es estrecho y la presión pesa. Entre esos dos mundos no había nada para nosotros.',
    ],
    pains: [
      'No sabes quién va en serio y quién está solo mirando.',
      'Las hermanas temen el acoso, los perfiles falsos y enfrentarlo todo solas.',
      'Las apps traducidas no entienden nuestra lengua, nuestro madhhab, nuestras costumbres ni la diáspora.',
    ],
    eyebrow: 'CÓMO FUNCIONA',
    painsLabel: '¿Te suena?',
    painIcons: ['eye', 'people', 'doc'],
    quote:
      'Otras apps miden el éxito por el tiempo que pasas en ellas. Nosotros lo medimos por el nikah tras el cual ya no nos necesitas.',
  },

  pillars: {
    title: 'Construida para el matrimonio, desde la primera pantalla.',
    items: [
      {
        word: 'Intención',
        title: 'Primero la intención',
        body: 'Cada perfil dice qué busca la persona y cuándo. Plazo para casarse, hijos, mudanza: lo sabes antes del primer mensaje.',
      },
      {
        word: 'Familia',
        title: 'Con la familia, no sola',
        body: 'Una hermana puede invitar a su padre, hermano o tutor a estar en sus conversaciones. No se esconde nada de quienes su opinión importa.',
      },
      {
        word: 'Límites',
        title: 'Halal por diseño',
        body: 'Solo el sexo opuesto. Mensajes solo con interés mutuo. Una comunidad que revisan moderadores. Los límites los sostiene la app; no tienes que cuidarlos tú.',
      },
    ],
  },

  mahrem: {
    kicker: 'Portal del mahram',
    title: 'Nada escondido de quienes su opinión importa.',
    body:
      'Activa «Exigir mahram» e invita hasta tres personas de confianza: tu padre, tu hermano, tu tío o tu tutor. Ellos ven tus conversaciones en el portal del mahram, pero no pueden escribir ni conocer a nadie. Simplemente están, como lo estarían en persona.',
    steps: [
      { title: 'Activa «Exigir mahram»', body: 'Un solo interruptor en los ajustes.' },
      { title: 'Invita hasta tres mahram', body: 'La invitación llega por correo y el mahram la acepta en la app.' },
      {
        title: 'Ellos leen, tú hablas',
        body: 'El mahram ve las conversaciones y las coincidencias. No puede escribir desde el portal ni usa funciones para conocer a nadie.',
      },
    ],
    who: [
      { label: 'Para ella', body: 'No estás sola. La familia está, sin vigilarte por encima del hombro.' },
      { label: 'Para la familia', body: 'Saben con quién habla y cómo. Sin secretos.' },
      { label: 'Para él', body: 'Una señal clara de que ella va en serio y la familia está implicada.' },
    ],
    parentsTitle: 'Padres, esto es para ustedes.',
    parentsBody:
      'Sabemos que «app de citas» no suena a algo para su hija o su hermana. En Niyyah pueden estar en sus conversaciones y ver con quién escribe y cómo, sin escribir nada ustedes. Una conversación no puede ni abrirse hasta que ambas partes muestren interés, y todo esto es gratis.',
    share: 'Envíale esta página',
    shareDone: 'Enlace copiado',
    shareText: 'Niyyah: la app de matrimonio donde la familia puede estar en la conversación.',
    imageAlt: 'El portal del mahram: un padre lee la conversación de su hija, sin poder escribir.',
  },

  mockPortal: {
    title: 'Portal del mahram',
    readOnly: 'Solo lectura',
    watching: 'Acompañas a: Amina',
    with: 'Conversación con: Emir, 30',
    messages: [
      { from: 'him', text: 'Assalamu alaikum. Gracias por abrir la conversación.' },
      { from: 'her', text: 'Wa alaikum assalam. Escribiste que te gustaría que las familias se conozcan pronto.' },
      { from: 'him', text: 'Sí. A mis padres les gustaría conocer a los tuyos antes de nada serio.' },
    ],
    locked: 'Desde el portal no se puede escribir',
  },

  how: {
    kicker: 'Cómo funciona',
    title: 'Del perfil a la conversación, en cuatro pasos.',
    steps: [
      { title: 'Haz un perfil con intención', body: 'Fe, oración, planes de matrimonio y tus propias palabras.' },
      {
        title: 'Descubrir',
        body: 'Personas que comparten tus valores, con porcentaje de afinidad. Fichas o mapa, con filtros de edad, ciudad y fe.',
      },
      {
        title: 'El interés mutuo abre la conversación',
        body: 'Mientras no os gustéis los dos, la conversación queda cerrada. Con tus preguntas antes del primer mensaje.',
      },
      { title: 'La familia está contigo', body: 'Un mahram en la conversación, cuando quieras.' },
    ],
  },

  questions: {
    kicker: 'Preguntas antes de hablar',
    title: 'Pregunta lo que importa, antes del primer mensaje.',
    body:
      'Plantea hasta tres preguntas. Tras la coincidencia, la otra persona responde primero, y tú lees y decides si la conversación se abre. Sin tres semanas de mensajes para descubrir que no coincidís en lo esencial.',
    flow: ['Tú pones las preguntas', 'La otra persona responde', 'Tú decides'],
    topics: ['Oración', 'Hiyab', 'Mudanza', 'Hijos'],
    topicsLabel: 'Lo que más se pregunta',
    imageAlt: 'Preguntas antes de hablar: tres respuestas y la decisión de abrir la conversación.',
  },

  mockQuestions: {
    title: 'Emir ha respondido a tus preguntas',
    qa: [
      { q: '¿Rezas con regularidad?', a: 'Sí, las cinco. El fayr es lo más duro para mí, pero me esfuerzo.' },
      { q: '¿Dónde te ves después del nikah?', a: 'En Sarajevo, aunque estoy abierto a hablar de mudarnos.' },
      { q: '¿Cuánto pesa la familia en tus decisiones?', a: 'Mucho. Me gustaría que las familias se conozcan pronto.' },
    ],
    no: 'No me gusta',
    yes: 'Me gusta',
  },

  profile: {
    kicker: 'Perfil',
    title: 'Conoce cómo piensa, no solo cómo se ve.',
    lead:
      'Además de las fotos y la descripción, el perfil lleva aquello de lo que se habla antes del nikah. Menos suposiciones, menos tiempo perdido, antes a un «sí» o un «no».',
    fields: [
      { k: 'Relación con la fe', v: ['Practicante', 'Me esfuerzo', 'Ahora no practico'] },
      { k: 'Oración', v: ['Con regularidad', 'A veces', 'Rara vez'] },
      { k: 'Madhhab', v: ['Hanafí', 'Shafi’í', 'Malikí', 'Hanbalí', 'No importa'] },
      { k: 'Hiyab', v: ['Lo llevo', 'No lo llevo', 'Tengo intención'] },
      { k: 'Plazo para casarse', v: ['Enseguida', 'En un año', '1–2 años', 'Sin prisa'] },
      { k: 'Mudanza', v: ['Dispuesto/a', 'No puedo', 'Abierto/a a hablarlo'] },
      { k: 'Hijos', v: ['Quiero', 'No quiero', 'Ya tengo', 'No estoy seguro/a'] },
    ],
    more: 'Y además: tabaco, estudios, profesión, lengua materna, altura e intereses.',
    promptsTitle: 'Con tus palabras',
    prompts: ['La fe en el matrimonio significa…', '¿Qué buscas en un cónyuge?', '¿Cómo pasas el fin de semana?'],
    situationsTitle: 'Situaciones',
    situationsBody:
      'Responde a escenarios reales en siete ámbitos. Los demás ven cómo piensas, no solo cómo te ves.',
    situations: ['Matrimonio', 'Comunicación', 'Resolver conflictos', 'Familia', 'Fe', 'Dinero', 'Crianza'],
    matchTitle: 'Porcentaje de afinidad',
    matchBody: 'En cada ficha: intereses comunes, relación con la fe e intención.',
    imageAlt: 'Detalles del perfil en Niyyah: fe, planes de matrimonio y respuestas a situaciones.',
  },

  mockDetails: {
    title: 'Sobre Emir',
    rows: [
      { k: 'Matrimonio', v: 'En un año' },
      { k: 'Mudanza', v: 'Abierto a hablarlo' },
      { k: 'Hijos', v: 'Quiero' },
      { k: 'Profesión', v: 'Ingeniero' },
    ],
    situation: 'Situación · Resolver conflictos',
    question: 'Discutisteis por la familia. ¿Qué haces primero?',
    answer: 'Espero a que los dos nos calmemos y luego le pregunto cómo lo ve ella. Solo después digo lo mío.',
  },

  safety: {
    kicker: 'Seguridad y privacidad',
    title: 'Tu privacidad no es el producto.',
    lead: 'Nunca vendemos tus datos. La seguridad está construida dentro de la app, no añadida como opción.',
    items: [
      {
        icon: 'pin',
        title: 'Nunca tu ubicación exacta',
        body: 'El mapa muestra solo una zona aproximada, y solo mientras lo tengas activado. Lo desactivas y desapareces del mapa.',
      },
      {
        icon: 'photo',
        title: 'Revisión de fotos',
        body: 'Las fotos borrosas o demasiado pequeñas no se aceptan, y el sistema elimina los datos ocultos de la imagen, como la ubicación GPS. Una persona de nuestro equipo compara tu selfie de verificación con tus fotos.',
      },
      {
        icon: 'badge',
        title: 'Distintivo Verificado',
        body: 'Una comprobación breve de que eres la persona de las fotos. El teléfono o el correo los confirmas antes de entrar en Descubrir.',
      },
      {
        icon: 'people',
        title: 'Moderadores de verdad',
        body: 'Las denuncias las lee un equipo de moderación propio que puede suspender y vetar perfiles.',
      },
      {
        icon: 'block',
        title: 'El bloqueo va en los dos sentidos',
        body: 'Si bloqueas a alguien, desaparecéis el uno para el otro en la app.',
      },
      {
        icon: 'pause',
        title: 'Pausar Descubrir',
        body: 'Oculta tu perfil sin borrarlo. Las coincidencias y las conversaciones se mantienen.',
      },
      {
        icon: 'finger',
        title: 'Desbloqueo con huella o rostro',
        body: 'Tu huella nunca sale de tu dispositivo.',
      },
    ],
    ayahRef: 'Al-Qiyama 75:4',
    ayahNote:
      'En la pantalla de desbloqueo hay una aleya de la sura Al-Qiyama (75:3–4), sobre Allah, capaz de recomponer incluso las yemas de los dedos.',
  },

  community: {
    kicker: 'Comunidad',
    title: 'Un lugar para aprender del matrimonio antes del matrimonio.',
    lead:
      'Preguntas, lees experiencias, aprendes de otros. Cada publicación pasa por un moderador antes de aparecer, y no hay comentarios bajo los que nadie querría firmar.',
    items: [
      { title: 'Pregunta a los hermanos, Pregunta a las hermanas', body: 'Espacios separados que ve solo un sexo.' },
      {
        title: 'Anónimo, cuando hace falta',
        body: 'Algunas preguntas cuestan con tu nombre. Publica como «Hermana anónima» o «Hermano anónimo».',
      },
      { title: 'Pregunta del día', body: 'Cada día una pregunta sobre el matrimonio y los valores, en la pantalla de inicio.' },
      {
        title: 'Relatos sin comentarios públicos',
        body: '24 horas o una sola visualización. Para toda la comunidad o solo para tus coincidencias.',
      },
    ],
    reactionsLabel: 'Reacciones que premian la utilidad, no el ego',
    reactions: ['Útil', 'Tiene sentido', 'Inspirador', 'Bien pensado'],
    imageAlt: 'La comunidad de Niyyah: una pregunta anónima en el espacio Pregunta a las hermanas.',
  },

  mockPost: {
    space: 'Pregunta a las hermanas',
    author: 'Hermana anónima',
    category: 'Matrimonio',
    text: '¿Cómo les dijisteis a vuestros padres que buscabais cónyuge por una app? ¿Cómo reaccionaron?',
    reviewed: 'Revisado por un moderador',
  },

  languages: {
    title: 'La página en tu idioma, la app en nueve idiomas.',
    lead:
      'Esta página la lees en español. La app en sí, los correos y los avisos están en nueve idiomas: bosnio, inglés, alemán, turco, árabe, indonesio, urdu, malayo y francés. El árabe y el urdu se leen de derecha a izquierda. Estés en Madrid, Barcelona, Sarajevo o Estambul.',
  },


  pricing: {
    kicker: 'Gratis y monedas',
    title: 'Lo que te protege es gratis.',
    lead: 'El mahram, las preguntas antes de hablar, el chat cerrado y la moderación están para todos. No cobramos por la seguridad. Las monedas solo aceleran — y no hay suscripción.',
    freeTitle: 'Gratis, para cualquiera',
    free: [
      'Un perfil y 30 perfiles al día en Descubrir',
      '20 «me gusta» al día',
      'Ve quién te ha dado «me gusta»: 1 persona al día',
      'Leer todos los mensajes que te envíen',
      'Coincidencias y conversación sin límite con ellas',
      'Un mahram en la conversación',
      'Preguntas antes de hablar',
      'Comunidad, relatos y Pregunta del día',
      'Monedas gratis cada día',
    ],
    premiumTitle: 'Monedas, cuando quieras más',
    premium: [
      'Ve a todos los que te han dado «me gusta»',
      'Super «me gusta»: tu «me gusta» arriba del todo, con tu nombre y foto',
      'Mensajes directos (un «me gusta» con mensaje)',
      'Más «me gusta» y perfiles para hoy',
      'Recupera un perfil que pasaste',
      'Responder a los relatos de la comunidad',
      'Boost: tu perfil primero en Descubrir',
    ],
    extra:
      'Las monedas también las ganas gratis: cada día, por siete días seguidos, por completar tu perfil y por invitar a amigos. Las compras solo si quieres, una sola vez, en el App Store o Google Play — sin suscripción ni renovación automática.',
  },


  about: {
    kicker: 'Sobre nosotros',
    quote:
      'Niyyah existe para quien busca cónyuge, no entretenimiento. Todo aquí está construido en torno a ese único propósito: perfiles que dicen algo real, conversaciones donde la familia puede estar presente y límites que se sostienen sin que nadie tenga que vigilarlos.',
    small:
      'Somos un equipo pequeño que construye para su propia comunidad, y preferimos una app silenciosa y fiable a una ruidosa y concurrida.',
    made: 'Hecha con cuidado en Bosnia y Herzegovina.',
  },

  faq: {
    title: 'Preguntas que nos hacen a menudo',
    items: [
      {
        q: '¿En qué se diferencia Niyyah de otras apps de citas?',
        a: 'Niyyah está construida para el matrimonio, no para deslizar. Descubrir muestra solo el sexo opuesto, los mensajes se abren solo cuando os habéis gustado los dos, y una hermana puede incorporar un mahram a sus conversaciones. El perfil lleva lo que importa antes del nikah: la oración, el madhhab, los planes de matrimonio, los hijos y la mudanza.',
      },
      {
        q: '¿Qué es un mahram y cómo lo añado?',
        a: 'Un mahram es un familiar varón con quien el matrimonio está prohibido para siempre, por ejemplo el padre, el hermano o el tío. También puedes invitar a un tutor. En los ajustes activas «Exigir mahram» e invitas hasta tres personas. La invitación llega por correo y el mahram la acepta en la app. En el portal del mahram ve entonces tus conversaciones y coincidencias, pero no puede escribir. La función está disponible en perfiles de mujeres.',
      },
      {
        q: '¿Es halal Niyyah?',
        a: 'No emitimos fatuas ni afirmamos tener la aprobación de ninguna institución. Lo que podemos mostrar son los límites construidos en la app: ves solo el sexo opuesto, una conversación se abre solo con interés mutuo, un mahram puede leer las conversaciones y los moderadores revisan la comunidad. Con qué intención la uses queda en ti. Si tienes dudas, pregunta a un imam en quien confíes.',
      },
      {
        q: '¿Qué son las preguntas antes de hablar?',
        a: 'Una opción en la que planteas hasta tres preguntas tuyas. Tras la coincidencia, la otra persona las responde primero. Tú lees las respuestas y decides: «Me gusta» abre la conversación, «No me gusta» no la abre.',
      },
      {
        q: '¿Quién puede ver mi ubicación?',
        a: 'Nadie ve tu ubicación exacta. En el mapa de Descubrir apareces solo como una zona aproximada, y solo si lo activas. Lo desactivas y desapareces del mapa. Los datos ocultos en las fotos, como la ubicación GPS, se eliminan al subirlas.',
      },
      {
        q: '¿Cómo protegéis de los perfiles falsos?',
        a: 'El distintivo Verificado significa que la persona ha pasado una comprobación facial: se comparó una foto suya en directo con las imágenes de su perfil. Las denuncias las leen moderadores de verdad, que pueden suspender o vetar un perfil, y el bloqueo va en los dos sentidos. Una cuenta vetada no puede volver sin más con un correo nuevo.',
      },
      {
        q: '¿Qué es gratis y qué cuesta monedas?',
        a: 'Todo lo que te protege es gratis: el mahram, las preguntas antes de hablar, el chat cerrado y la moderación, además de 30 perfiles y 20 «me gusta» al día, una persona al día de quienes te han dado «me gusta», leer todos los mensajes que te envíen y conversación sin límite con tus coincidencias. Con monedas puedes ver a todos los que te han dado «me gusta», enviar un super «me gusta» (tu «me gusta» arriba del todo, destacado, con tu nombre y foto) o un mensaje directo (un «me gusta» con mensaje, que la otra persona lee gratis), conseguir más perfiles y «me gusta» para ese día y responder a los relatos. La conversación solo se abre cuando los dos se dan «me gusta». Ganas monedas gratis cada día, y también puedes comprarlas una sola vez. No hay suscripción, así que no hay nada que cancelar.',
      },
      {
        q: '¿Puedo ocultar mi perfil un tiempo?',
        a: 'Sí. Pausa Descubrir y tu perfil desaparece de Descubrir sin borrarse. Las coincidencias y las conversaciones se mantienen, y recuperas el perfil cuando quieras.',
      },
      {
        q: '¿En qué idiomas está la app?',
        a: 'En nueve: bosnio, inglés, alemán, turco, árabe, indonesio, urdu, malayo y francés. Los dispositivos en croata y serbio reciben bosnio automáticamente.',
      },
    ],
  },

  final: {
    title: 'Empieza con intención.',
    leadLaunched: 'Haz tu perfil y conoce a gente que de verdad quiere construir algo real.',
    leadWaitlist:
      'Deja tu correo y te avisaremos en cuanto Niyyah empiece. Luego haz tu perfil y conoce a gente que de verdad quiere construir algo real.',
  },

  consent: {
    title: 'Medición de anuncios',
    more: 'Qué significa esto',
    details:
      'Un píxel de Facebook cuenta cuánta gente trae aquí nuestro anuncio y quién se apunta. Nunca le enviamos tu correo. Si rechazas, no se carga nada de Facebook.',
    close: 'Cerrar',
    body:
      'Medimos cuánta gente traen aquí nuestros anuncios. Nada más, y tu correo nunca va más allá.',
    accept: 'Acepto',
    decline: 'No, gracias',
    label: 'Medición de anuncios',
    change: 'Elección sobre la medición',
  },

  footer: {
    tagline: 'El matrimonio, buscado con intención.',
    made: 'Hecha con cuidado en Bosnia y Herzegovina.',
    rights: 'Niyyah',
    language: 'Idioma',
  },
}
