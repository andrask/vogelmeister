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
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/rotkehlchen/',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/4240_1.jpg',
      'https://www.birdingtours.de/fileadmin/_processed_/b/6/csm_amsel-maennchen-pexels_33ad837100.jpg',
      'https://www.gartenzauber.com/cdn/shop/articles/13899972_m.jpg?v=1738036944&width=1200'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/amsel',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3800_1.jpg',
      'https://images.ctfassets.net/2oszne1tuxgg/3B8dIQ54LPFFKJ5RzXYUo5/bca86c7384a7f42ec5b4c600cd3c5db4/Vorlage_Gr__e_Website_Blaumeise_Thomas_Hochebner.jpg?fit=fill&h=2560&fm=webp&q=75&w=3840',
      'https://www.nordischer-shop.at/wp-content/uploads/2024/11/blaumeise.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/blaumeise',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3790_1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Parus_major_Luc_Viatour.jpg/1280px-Parus_major_Luc_Viatour.jpg',
      'https://images.ctfassets.net/2oszne1tuxgg/2ASDQFLAJQFr1zcxMfy4dj/587aba5b379628d653c84bb3fa1cb2d9/Vorlage_Gr__e_Website_Kohlmeise_Thomas_Hochebner.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/kohlmeise',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/5250_1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/9/9b/House_sparrow_male_in_Prospect_Park_%2853532%29.jpg',
      'https://indianaaudubon.org/wp-content/uploads/2016/04/House_Sparrow_Central_Park_December_13_2014_1610_1.jpg',
      'https://singaporebirds.com/wp-content/uploads/2016/01/house-sparrow-con-foley-cmf_9363.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/haussperling',
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
      'https://www.vogelwarte.ch/wp-content/uploads/2024/10/5280_1.jpg',
      'https://www.lfu.bayern.de/natur/sap/arteninformationen/bild/zeige/230839',
      'https://www.lbv.de/files/user_upload/Bilder/Arten/Tiere/Vogel%20von%20A-Z/Singvogel/Feldsperling/Feldsperling_Z.-Tunka_LBV_Portr%C3%A4t.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/feldsperling',
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
      'https://www.krautundrueben.de/sites/krautundrueben.de/files/styles/5_2_heroteaser_xs_2x/public/2025-04/buchfink-maennchen01-48424347.jpg?h=03ce49fc&itok=F4U15saF',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Fringilla_coelebs_%28chaffinch%29%2C_male.jpg',
      'https://www.vogelundnatur.de/wp-content/uploads/2024/12/iStock-479898592-1-960x517.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/buchfink',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnd06j8n1SrkSjTTgmobzqMi-dx5yAvc__KYF0PD29PUa2zjcVn7q-oqSX7t-vI1TBrq7L4owJ9PRBINAl6jn6S6KKOCIGVw1eZb5mWs&s=10',
      'https://www.vogelwarte.ch/wp-content/uploads/2024/10/5560_1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/9/94/Bergfink_%28Fringilla_montifringilla%29.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/bergfink',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/5350_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/5350_2.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/stieglitz',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/5480_1.jpg',
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/gimpel',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/5120_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/5120_2.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/raubwuerger',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/5160_1.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/neuntoeter',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/5320_1.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/kernbeisser',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/4790_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/4830_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/4820_1.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/goldhaehnchen',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/5180_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/5180_2.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/5180_5.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/5180_6.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/star',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/4060_1.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/hausrotschwanz',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/4070_1.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/gartenrotschwanz',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/4730_1.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/zilpzalp',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/5580_1.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/goldammer',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3410_1.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/buntspecht',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3380_1.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/gruenspecht',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/5030_1.jpg',
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/bachstelze',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3020_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3020_2.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/tuerkentaube',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3910_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3910_2.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/kleiber',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3720_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3720_2.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/elster',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3750_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3750_2.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/eichelhaeher',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/1150_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/1150_2.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/1150_3.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/maeusebussard',
  },
  {
    id: 'rot-milan',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/1090_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/1090_2.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/1090_3.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/rot-milan',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3070_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3070_2.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/schleiereule',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/390_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/390_3.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/graureiher',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/500_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/500_3.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/weissstorch',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/570_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/570_3.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/570_4.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/hoeckerschwan',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/720_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/720_4.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/stockente',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3320_1.jpg',
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/eisvogel',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3610_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3610_2.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3610_3.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/rauchschwalbe',
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
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3640_1.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3640_2.jpg',
      'https://www.vogelwarte.ch/wp-content/assets/images/bird/species/3640_3.jpg'
    ],
    vogelwarteUrl: 'https://www.vogelwarte.ch/de/voegel-der-schweiz/mehlschwalbe',
  },
];
