import { Bird } from './types';

export const BIRDS: Bird[] = [
  {
    id: 'rotkehlchen',
    germanName: 'Rotkehlchen',
    names: {
      en: 'European Robin',
      fr: 'Rouge-gorge familier',
      it: 'Pettirosso',
      es: 'Petirrojo',
      pt: 'Pisco-de-peito-ruivo',
      nl: 'Roodborst',
      sv: 'Rödhake',
      da: 'Rødhals',
      pl: 'Rudzik',
      cs: 'Červenka obecná',
      hu: 'Vörösbegy'
    },
    description: 'Ein kleiner insektenfressender Sperlingsvogel mit einer orangeroten Brust.',
    imageUrls: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrtTtn0ye0ssHJVhfRAdVe5w1lVE0z8YUwB0Eai3d74grGdw7Dq26ONPchX46QGz6V7P83_JLARpetJOoASluS9zEG0_vE9E6DBXuV7o&s=10',
      'https://www.lbv.de/files/user_upload/Bilder/Arten/Tiere/Vogel%20von%20A-Z/Singvogel/Schwarzkehlchen/Schwarz-Braun-Rot-Blaukehlchen_Zieger_Derer_Schmidt_Masur.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/a/af/%D0%97%D0%B0%D1%80%D1%8F%D0%BD%D0%BA%D0%B0_-_%D0%BC%D0%B0%D0%BB%D0%B8%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0_%28Erithacus_rubecula%29%2C_%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0.jpg'
    ],
  },
  {
    id: 'amsel',
    germanName: 'Amsel',
    names: {
      en: 'Common Blackbird',
      fr: 'Merle noir',
      it: 'Merlo',
      es: 'Mirlo común',
      pt: 'Melro-preto',
      nl: 'Merel',
      sv: 'Koltrast',
      da: 'Solsort',
      pl: 'Kos',
      cs: 'Kos černý',
      hu: 'Fekete rigó'
    },
    description: 'Schwarzes Gefieder und gelber Schnabel. Bekannt für seinen schönen Gesang.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'blaumeise',
    germanName: 'Blaumeise',
    names: {
      en: 'Eurasian Blue Tit',
      fr: 'Mésange bleue',
      it: 'Cinciarella',
      es: 'Herrerillo común',
      pt: 'Chapim-azul',
      nl: 'Pimpelmees',
      sv: 'Blåmes',
      da: 'Blåmejse',
      pl: 'Modraszka',
      cs: 'Sýkora modřinka',
      hu: 'Kék cinege'
    },
    description: 'Erkennbar an seinem blau-gelben Gefieder und seiner geringen Größe.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'kohlmeise',
    germanName: 'Kohlmeise',
    names: {
      en: 'Great Tit',
      fr: 'Mésange charbonnière',
      it: 'Cinciallegra',
      es: 'Carbonero común',
      pt: 'Chapim-real',
      nl: 'Koolmees',
      sv: 'Talgoxe',
      da: 'Musvit',
      pl: 'Bogatka',
      cs: 'Sýkora koňadra',
      hu: 'Széncinege'
    },
    description: 'Größer als die Blaumeise, mit einem markanten schwarzen Streifen auf der gelben Brust.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'haussperling',
    germanName: 'Haussperling',
    names: {
      en: 'House Sparrow',
      fr: 'Moineau domestique',
      it: 'Passera europea',
      es: 'Gorrión común',
      pt: 'Pardal-comum',
      nl: 'Huismus',
      sv: 'Gråsparv',
      da: 'Gråspurv',
      pl: 'Wróbel',
      cs: 'Vrabec domácí',
      hu: 'Házi veréb'
    },
    description: 'Einer der bekanntesten Vögel, der oft in bewohnten Gebieten zu finden ist.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'feldsperling',
    germanName: 'Feldsperling',
    names: {
      en: 'Eurasian Tree Sparrow',
      fr: 'Moineau friquet',
      it: 'Passera mattugia',
      es: 'Gorrión molinero',
      pt: 'Pardal-montês',
      nl: 'Ringmus',
      sv: 'Pilfink',
      da: 'Skovspurv',
      pl: 'Mazurek',
      cs: 'Vrabec polní',
      hu: 'Mezei veréb'
    },
    description: 'Unterscheidet sich vom Haussperling durch seine kastanienbraune Kappe und den schwarzen Wangenfleck.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'buchfink',
    germanName: 'Buchfink',
    names: {
      en: 'Common Chaffinch',
      fr: 'Pinson des arbres',
      it: 'Fringuello',
      es: 'Pinzón vulgar',
      pt: 'Tentilhão-comum',
      nl: 'Vink',
      sv: 'Bofink',
      da: 'Bogfinke',
      pl: 'Zięba',
      cs: 'Pěnkava obecná',
      hu: 'Erdei pinty'
    },
    description: 'Sehr verbreiteter Waldvogel mit einem lautstarken, melodischen Gesang.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'bergfink',
    germanName: 'Bergfink',
    names: {
      en: 'Brambling',
      fr: 'Pinson du Nord',
      it: 'Peppola',
      es: 'Pinzón real',
      pt: 'Tentilhão-montês',
      nl: 'Keep',
      sv: 'Bergfink',
      da: 'Kvækerfinke',
      pl: 'Jer',
      cs: 'Pěnkava jikavec',
      hu: 'Fenyőpinty'
    },
    description: 'Ein Wintergast, bekannt für seine orangefarbenen Schulterflecken.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'stieglitz',
    germanName: 'Stieglitz (Distelfink)',
    names: {
      en: 'European Goldfinch',
      fr: 'Chardonneret élégant',
      it: 'Cardellino',
      es: 'Jilguero',
      pt: 'Pintassilgo',
      nl: 'Putter',
      sv: 'Steglits',
      da: 'Stillits',
      pl: 'Szczygieł',
      cs: 'Stehlík obecný',
      hu: 'Tengelic'
    },
    description: 'Ein hübscher Vogel mit rotem Gesicht und gelben Flügelabzeichen.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'dompfaff',
    germanName: 'Gimpel (Dompfaff)',
    names: {
      en: 'Eurasian Bullfinch',
      fr: 'Bouvreuil pivoine',
      it: 'Ciuffolotto',
      es: 'Camachuelo común',
      pt: 'Dom-fafe',
      nl: 'Goudvink',
      sv: 'Domherre',
      da: 'Dompap',
      pl: 'Gil',
      cs: 'Hýl obecný',
      hu: 'Süvöltő'
    },
    description: 'Auffälliger Vogel mit einer leuchtend rosa-roten Brust (Männchen) und einer schwarzen Kappe.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'raubwuerger',
    germanName: 'Raubwürger',
    names: {
      en: 'Great Grey Shrike',
      fr: 'Pie-grièche grise',
      it: 'Averla maggiore',
      es: 'Alcaudón real',
      pt: 'Picanço-real',
      nl: 'Klapekster',
      sv: 'Varfågel',
      da: 'Stor tornskade',
      pl: 'Srokosz',
      cs: 'Ťuhýk šedý',
      hu: 'Nagy őrgébics'
    },
    description: 'Ein räuberischer Singvogel, der seine Beute auf Dornen aufspießt.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'neuntoeter',
    germanName: 'Neuntöter',
    names: {
      en: 'Red-backed Shrike',
      fr: 'Pie-grièche écorcheur',
      it: 'Averla piccola',
      es: 'Alcaudón dorsirrojo',
      pt: 'Picanço-de-dorso-ruivo',
      nl: 'Grauwe klauwier',
      sv: 'Tornskata',
      da: 'Rødrygget tornskade',
      pl: 'Gąsiorek',
      cs: 'Ťuhýk obecný',
      hu: 'Tövisszúró gébics'
    },
    description: 'Benannt nach seiner Gewohnheit, Beute als Vorrat auf Dornen aufzuspießen.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'kernbeisser',
    germanName: 'Kernbeisser',
    names: {
      en: 'Hawfinch',
      fr: 'Grosbec casse-noyaux',
      it: 'Frosone',
      es: 'Picogordo',
      pt: 'Bico-grossudo',
      nl: 'Appelvink',
      sv: 'Stenknäck',
      da: 'Kernebider',
      pl: 'Grubodziób',
      cs: 'Dlask tlustozobý',
      hu: 'Meggyvágó'
    },
    description: 'Größter Fink Europas mit einem massiven Schnabel, der Kirschkerne knacken kann.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'goldhaehnchen',
    germanName: 'Goldhähnchen',
    names: {
      en: 'Goldcrest',
      fr: 'Roitelet huppé',
      it: 'Regolo',
      es: 'Reyezuelo sencillo',
      pt: 'Estrelinha-de-cabeça-listada',
      nl: 'Goudhaan',
      sv: 'Kungsfågel',
      da: 'Fuglekonge',
      pl: 'Mysikrólik',
      cs: 'Králíček obecný',
      hu: 'Sárgafejű királyka'
    },
    description: 'Der kleinste Vogel Europas, erkennbar an seinem leuchtend gelben oder orangen Scheitelstreifen.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'star',
    germanName: 'Star',
    names: {
      en: 'Common Starling',
      fr: 'Étourneau sansonnet',
      it: 'Storno comune',
      es: 'Estornino pinto',
      pt: 'Estorninho-comum',
      nl: 'Spreeuw',
      sv: 'Stare',
      da: 'Stær',
      pl: 'Szpak',
      cs: 'Špaček obecný',
      hu: 'Seregély'
    },
    description: 'Bekannt für sein schillerndes Gefieder und seine erstaunliche Fähigkeit, Laute nachzuahmen.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'hausrotschwanz',
    germanName: 'Hausrotschwanz',
    names: {
      en: 'Black Redstart',
      fr: 'Rougequeue noir',
      it: 'Codirosso spazzacamino',
      es: 'Colirrojo tizón',
      pt: 'Carvoeiro',
      nl: 'Zwarte roodstaart',
      sv: 'Svart rödstjärt',
      da: 'Husrødstjert',
      pl: 'Kopciuszek',
      cs: 'Rehek domácí',
      hu: 'Házi rozsdafarkú'
    },
    description: 'Gut an städtische Umgebungen angepasst, erkennbar an seinem zitternden orangeroten Schwanz.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'gartenrotschwanz',
    germanName: 'Gartenrotschwanz',
    names: {
      en: 'Common Redstart',
      fr: 'Rougequeue à front blanc',
      it: 'Codirosso comune',
      es: 'Colirrojo real',
      pt: 'Rabirruivo-de-testa-branca',
      nl: 'Gekraagde roodstaart',
      sv: 'Rödstjärt',
      da: 'Rødstjert',
      pl: 'Pleszka',
      cs: 'Rehek zahradní',
      hu: 'Kerti rozsdafarkú'
    },
    description: 'Oft in Parks und alten Obstgärten zu finden; das Männchen hat eine auffällige orangefarbene Brust und eine weiße Stirn.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'zilpzalp',
    germanName: 'Zilpzalp',
    names: {
      en: 'Common Chiffchaff',
      fr: 'Pouillot véloce',
      it: 'Lui piccolo',
      es: 'Mosquitero común',
      pt: 'Common Chiffchaff',
      nl: 'Tjiftjaf',
      sv: 'Gransångare',
      da: 'Gransanger',
      pl: 'Pierwiosnek',
      cs: 'Budníček menší',
      hu: 'Csilpcsalpfüzike'
    },
    description: 'Ein kleiner Laubsänger, benannt nach seinem charakteristischen „Zilp-Zalp“-Gesang.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'goldammer',
    germanName: 'Goldammer',
    names: {
      en: 'Yellowhammer',
      fr: 'Bruant jaune',
      it: 'Zigolo giallo',
      es: 'Escribano cerillo',
      pt: 'Escrevedeira-amarela',
      nl: 'Geelgors',
      sv: 'Gulsparv',
      da: 'Gulspurv',
      pl: 'Trznadel',
      cs: 'Strnad obecný',
      hu: 'Citromsármány'
    },
    description: 'Eine farbenfrohe Ammer der offenen Landschaft; die Männchen sind zur Brutzeit leuchtend gelb.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'buntspecht',
    germanName: 'Buntspecht',
    names: {
      en: 'Great Spotted Woodpecker',
      fr: 'Pic épeiche',
      it: 'Picchio rosso maggiore',
      es: 'Pico picapinos',
      pt: 'Pica-pau-malhado-grande',
      nl: 'Grote bonte specht',
      sv: 'Större hackspett',
      da: 'Stor flagspætte',
      pl: 'Dzięcioł duży',
      cs: 'Strakapoud velký',
      hu: 'Nagy fakopáncs'
    },
    description: 'Markante schwarz-weiße Federn mit rotem Unterschwanz; Männchen haben einen roten Nackenfleck.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'gruenspecht',
    germanName: 'Grünspecht',
    names: {
      en: 'European Green Woodpecker',
      fr: 'Pic vert',
      it: 'Picchio verde',
      es: 'Pito real',
      pt: 'Pica-pau-verde',
      nl: 'Groene specht',
      sv: 'Gröngöling',
      da: 'Grønspætte',
      pl: 'Dzięcioł zielony',
      cs: 'Žluna zelená',
      hu: 'Zöld küllő'
    },
    description: 'Bekannt für seinen lachenden Ruf und seine Vorliebe, Ameisen am Boden zu fressen.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'bachstelze',
    germanName: 'Bachstelze',
    names: {
      en: 'White Wagtail',
      fr: 'Bergeronnette grise',
      it: 'Ballerina bianca',
      es: 'Lavandera blanca',
      pt: 'Alvéola-branca',
      nl: 'Witte kwikstaart',
      sv: 'Sädesärla',
      da: 'Hvid vipstjert',
      pl: 'Pliszka siwa',
      cs: 'Konipas bílý',
      hu: 'Barázdabillegető'
    },
    description: 'Ein schlanker, schwarz-weißer Vogel, bekannt für sein ständiges Schwanzwippen.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'tuerkentaube',
    germanName: 'Türkentaube',
    names: {
      en: 'Eurasian Collared Dove',
      fr: 'Tourterelle turque',
      it: 'Tortora dal collare orientale',
      es: 'Tórtola turca',
      pt: 'Rola-turca',
      nl: 'Turkse tortel',
      sv: 'Turkduva',
      da: 'Tyrkerdue',
      pl: 'Sierpówka',
      cs: 'Hrdlička zahradní',
      hu: 'Balkáni gerle'
    },
    description: 'Erkennbar an dem schwarzen Halbring am Nacken und seinem rhythmischen „Gurr“-Ruf.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'kleiber',
    germanName: 'Kleiber',
    names: {
      en: 'Eurasian Nuthatch',
      fr: 'Sittelle torchepot',
      it: 'Picchio muratore',
      es: 'Trepador azul',
      pt: 'Trepadeira-azul',
      nl: 'Boomklever',
      sv: 'Nötväcka',
      da: 'Spætmejse',
      pl: 'Kowalik',
      cs: 'Brhlík lesní',
      hu: 'Csuszka'
    },
    description: 'Der einzige europäische Vogel, der Baumstämme kopfüber hinunterklettern kann.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'elster',
    germanName: 'Elster',
    names: {
      en: 'Magpie',
      fr: 'Pie bavarde',
      it: 'Gazza',
      es: 'Urraca común',
      pt: 'Pega-rabuda',
      nl: 'Ekster',
      sv: 'Skata',
      da: 'Husskade',
      pl: 'Sroka',
      cs: 'Straka obecná',
      hu: 'Szarka'
    },
    description: 'Auffälliger schwarz-weißer Vogel mit langem Schwanz und schillernden Federn.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'eichelhaeher',
    germanName: 'Eichelhäher',
    names: {
      en: 'Eurasian Jay',
      fr: 'Geai des chênes',
      it: 'Ghiandaia',
      es: 'Arrendajo',
      pt: 'Gaio-comum',
      nl: 'Gaai',
      sv: 'Nötskrika',
      da: 'Skovskade',
      pl: 'Sójka',
      cs: 'Sojka obecná',
      hu: 'Szajkó'
    },
    description: 'Farbenfroher Waldvogel, bekannt für das Vergraben von Eicheln.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'maeusebussard',
    germanName: 'Mäusebussard',
    names: {
      en: 'Common Buzzard',
      fr: 'Buse pattue',
      it: 'Poiana comune',
      es: 'Busardo ratonero',
      pt: 'Águia-de-asa-redonda',
      nl: 'Buizerd',
      sv: 'Ormvråk',
      da: 'Musvåge',
      pl: 'Myszołów',
      cs: 'Káně lesní',
      hu: 'Egerészölyv'
    },
    description: 'Der häufigste Greifvogel Mitteleuropas, oft kreisend oder auf Zaunpfählen sitzend zu sehen.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'roter-milan',
    germanName: 'Roter Milan',
    names: {
      en: 'Red Kite',
      fr: 'Milan royal',
      it: 'Nibbio reale',
      es: 'Milano real',
      pt: 'Milhafre-real',
      nl: 'Rode wouw',
      sv: 'Röd glada',
      da: 'Rød glente',
      pl: 'Kania ruda',
      cs: 'Luňák červený',
      hu: 'Vörös kánya'
    },
    description: 'Beeindruckender Greifvogel mit tief gegabeltem Schwanz und rostrot schimmerndem Gefieder.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'schleiereule',
    germanName: 'Schleiereule',
    names: {
      en: 'Barn Owl',
      fr: 'Effraie des clochers',
      it: 'Barbagianni',
      es: 'Lechuza común',
      pt: 'Coruja-das-torres',
      nl: 'Kerkuil',
      sv: 'Tornuggla',
      da: 'Slørugle',
      pl: 'Płomykówka',
      cs: 'Sova pálená',
      hu: 'Gyöngybagoly'
    },
    description: 'Geisterhaft helle Eule mit einem markanten herzförmigen Gesicht.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'graureiher',
    germanName: 'Graureiher',
    names: {
      en: 'Grey Heron',
      fr: 'Héron cendré',
      it: 'Airone cenerino',
      es: 'Garza real',
      pt: 'Garça-real',
      nl: 'Blauwe reiger',
      sv: 'Gråhäger',
      da: 'Fiskehejre',
      pl: 'Czapla siwa',
      cs: 'Volavka popelavá',
      hu: 'Szürke gém'
    },
    description: 'Ein großer, langbeiniger Watvogel, der oft bewegungslos am Wasser steht.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'weissstorch',
    germanName: 'Weissstorch',
    names: {
      en: 'White Stork',
      fr: 'Cigogne blanche',
      it: 'Cicogna bianca',
      es: 'Cigüeña blanca',
      pt: 'Cegonha-branca',
      nl: 'Ooievaar',
      sv: 'Vit stork',
      da: 'Hvid stork',
      pl: 'Bocian biały',
      cs: 'Čáp bílý',
      hu: 'Fehér gólya'
    },
    description: 'Symbolträchtiger Vogel mit weißem Gefieder und schwarzen Schwungfedern, der oft auf Schornsteinen nistet.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'hoeckerschwan',
    germanName: 'Höckerschwan',
    names: {
      en: 'Mute Swan',
      fr: 'Cygne tuberculé',
      it: 'Cigno reale',
      es: 'Cisne vulgar',
      pt: 'Cisne-vulgar',
      nl: 'Knobbelzwaan',
      sv: 'Knölsvan',
      da: 'Knopsvane',
      pl: 'Łabędź niemy',
      cs: 'Labuť velká',
      hu: 'Bütykös hattyú'
    },
    description: 'Ein großer, eleganter Wasservogel mit orangem Schnabel und schwarzem Höcker.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'stockente',
    germanName: 'Stockente',
    names: {
      en: 'Mallard',
      fr: 'Canard colvert',
      it: 'Germano reale',
      es: 'Anade azulón',
      pt: 'Pato-real',
      nl: 'Wilde eend',
      sv: 'Gräsand',
      da: 'Gråand',
      pl: 'Krzyżówka',
      cs: 'Kachna divoká',
      hu: 'Tőkés réce'
    },
    description: 'Die häufigste Entenart; das Männchen hat einen markanten glänzend grünen Kopf.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'eisvogel',
    germanName: 'Eisvogel',
    names: {
      en: 'Common Kingfisher',
      fr: 'Martin-pêcheur d\'Europe',
      it: 'Martin pescatore comune',
      es: 'Martín pescador común',
      pt: 'Guarda-rios-comum',
      nl: 'IJsvogel',
      sv: 'Kungsfiskare',
      da: 'Isfugl',
      pl: 'Zimorodek',
      cs: 'Ledňáček říční',
      hu: 'Jégmadár'
    },
    description: 'Ein kleiner, prachtvoll gefärbter Vogel, der von einer Sitzwarte aus nach Fischen taucht.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'rauchschwalbe',
    germanName: 'Rauchschwalbe',
    names: {
      en: 'Barn Swallow',
      fr: 'Hirondelle rustique',
      it: 'Rondine comune',
      es: 'Golondrina común',
      pt: 'Andorinha-das-chaminés',
      nl: 'Boerenzwaluw',
      sv: 'Ladusvala',
      da: 'Landsvale',
      pl: 'Dymówka',
      cs: 'Vlaštovka obecná',
      hu: 'Füsti fecske'
    },
    description: 'Erkennbar an seinem tief gegabelten Schwanz und seinem flinken, wendigen Flug.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
  {
    id: 'mehlschwalbe',
    germanName: 'Mehlschwalbe',
    names: {
      en: 'Common House Martin',
      fr: 'Hirondelle de fenêtre',
      it: 'Balestruccio',
      es: 'Avión común',
      pt: 'Andorinha-dos-beirais',
      nl: 'Huiszwaluw',
      sv: 'Hussvala',
      da: 'Bysvale',
      pl: 'Oknówka',
      cs: 'Jiřička obecná',
      hu: 'Molnárfecske'
    },
    description: 'Ein Sommergast mit weißem Bürzel, der oft unter Dachvorsprüngen nistet.',
    imageUrls: [
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Missing_icon_the_noun_project.svg'
    ],
  },
];
