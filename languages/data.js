// بيانات المفردات: كل كلمة لها معناها بالعربية وترجمتها في كل لغة
const LANGUAGES = {
  en: { name: "الإنجليزية", native: "English", flag: "🇬🇧", voice: "en-US" },
  fr: { name: "الفرنسية", native: "Français", flag: "🇫🇷", voice: "fr-FR" },
  es: { name: "الإسبانية", native: "Español", flag: "🇪🇸", voice: "es-ES" },
  tr: { name: "التركية", native: "Türkçe", flag: "🇹🇷", voice: "tr-TR" },
  de: { name: "الألمانية", native: "Deutsch", flag: "🇩🇪", voice: "de-DE" },
  it: { name: "الإيطالية", native: "Italiano", flag: "🇮🇹", voice: "it-IT" }
};

const CATEGORIES = [
  {
    id: "greetings", title: "التحيات", icon: "👋",
    words: [
      { ar: "مرحبًا", en: "Hello", fr: "Bonjour", es: "Hola", tr: "Merhaba", de: "Hallo", it: "Ciao" },
      { ar: "مع السلامة", en: "Goodbye", fr: "Au revoir", es: "Adiós", tr: "Hoşça kal", de: "Auf Wiedersehen", it: "Arrivederci" },
      { ar: "صباح الخير", en: "Good morning", fr: "Bonjour", es: "Buenos días", tr: "Günaydın", de: "Guten Morgen", it: "Buongiorno" },
      { ar: "مساء الخير", en: "Good evening", fr: "Bonsoir", es: "Buenas tardes", tr: "İyi akşamlar", de: "Guten Abend", it: "Buonasera" },
      { ar: "شكرًا", en: "Thank you", fr: "Merci", es: "Gracias", tr: "Teşekkür ederim", de: "Danke", it: "Grazie" },
      { ar: "من فضلك", en: "Please", fr: "S'il vous plaît", es: "Por favor", tr: "Lütfen", de: "Bitte", it: "Per favore" },
      { ar: "نعم", en: "Yes", fr: "Oui", es: "Sí", tr: "Evet", de: "Ja", it: "Sì" },
      { ar: "لا", en: "No", fr: "Non", es: "No", tr: "Hayır", de: "Nein", it: "No" }
    ]
  },
  {
    id: "numbers", title: "الأرقام", icon: "🔢",
    words: [
      { ar: "واحد", en: "One", fr: "Un", es: "Uno", tr: "Bir", de: "Eins", it: "Uno" },
      { ar: "اثنان", en: "Two", fr: "Deux", es: "Dos", tr: "İki", de: "Zwei", it: "Due" },
      { ar: "ثلاثة", en: "Three", fr: "Trois", es: "Tres", tr: "Üç", de: "Drei", it: "Tre" },
      { ar: "أربعة", en: "Four", fr: "Quatre", es: "Cuatro", tr: "Dört", de: "Vier", it: "Quattro" },
      { ar: "خمسة", en: "Five", fr: "Cinq", es: "Cinco", tr: "Beş", de: "Fünf", it: "Cinque" },
      { ar: "ستة", en: "Six", fr: "Six", es: "Seis", tr: "Altı", de: "Sechs", it: "Sei" },
      { ar: "سبعة", en: "Seven", fr: "Sept", es: "Siete", tr: "Yedi", de: "Sieben", it: "Sette" },
      { ar: "ثمانية", en: "Eight", fr: "Huit", es: "Ocho", tr: "Sekiz", de: "Acht", it: "Otto" },
      { ar: "تسعة", en: "Nine", fr: "Neuf", es: "Nueve", tr: "Dokuz", de: "Neun", it: "Nove" },
      { ar: "عشرة", en: "Ten", fr: "Dix", es: "Diez", tr: "On", de: "Zehn", it: "Dieci" }
    ]
  },
  {
    id: "colors", title: "الألوان", icon: "🎨",
    words: [
      { ar: "أحمر", en: "Red", fr: "Rouge", es: "Rojo", tr: "Kırmızı", de: "Rot", it: "Rosso" },
      { ar: "أزرق", en: "Blue", fr: "Bleu", es: "Azul", tr: "Mavi", de: "Blau", it: "Blu" },
      { ar: "أخضر", en: "Green", fr: "Vert", es: "Verde", tr: "Yeşil", de: "Grün", it: "Verde" },
      { ar: "أصفر", en: "Yellow", fr: "Jaune", es: "Amarillo", tr: "Sarı", de: "Gelb", it: "Giallo" },
      { ar: "أسود", en: "Black", fr: "Noir", es: "Negro", tr: "Siyah", de: "Schwarz", it: "Nero" },
      { ar: "أبيض", en: "White", fr: "Blanc", es: "Blanco", tr: "Beyaz", de: "Weiß", it: "Bianco" },
      { ar: "بنفسجي", en: "Purple", fr: "Violet", es: "Morado", tr: "Mor", de: "Lila", it: "Viola" },
      { ar: "وردي", en: "Pink", fr: "Rose", es: "Rosa", tr: "Pembe", de: "Rosa", it: "Rosa" }
    ]
  },
  {
    id: "family", title: "العائلة", icon: "👨‍👩‍👧",
    words: [
      { ar: "أم", en: "Mother", fr: "Mère", es: "Madre", tr: "Anne", de: "Mutter", it: "Madre" },
      { ar: "أب", en: "Father", fr: "Père", es: "Padre", tr: "Baba", de: "Vater", it: "Padre" },
      { ar: "أخ", en: "Brother", fr: "Frère", es: "Hermano", tr: "Erkek kardeş", de: "Bruder", it: "Fratello" },
      { ar: "أخت", en: "Sister", fr: "Sœur", es: "Hermana", tr: "Kız kardeş", de: "Schwester", it: "Sorella" },
      { ar: "ابن", en: "Son", fr: "Fils", es: "Hijo", tr: "Oğul", de: "Sohn", it: "Figlio" },
      { ar: "ابنة", en: "Daughter", fr: "Fille", es: "Hija", tr: "Kız", de: "Tochter", it: "Figlia" },
      { ar: "جد", en: "Grandfather", fr: "Grand-père", es: "Abuelo", tr: "Büyükbaba", de: "Großvater", it: "Nonno" },
      { ar: "جدة", en: "Grandmother", fr: "Grand-mère", es: "Abuela", tr: "Büyükanne", de: "Großmutter", it: "Nonna" }
    ]
  },
  {
    id: "food", title: "الطعام والشراب", icon: "🍎",
    words: [
      { ar: "ماء", en: "Water", fr: "Eau", es: "Agua", tr: "Su", de: "Wasser", it: "Acqua" },
      { ar: "خبز", en: "Bread", fr: "Pain", es: "Pan", tr: "Ekmek", de: "Brot", it: "Pane" },
      { ar: "حليب", en: "Milk", fr: "Lait", es: "Leche", tr: "Süt", de: "Milch", it: "Latte" },
      { ar: "قهوة", en: "Coffee", fr: "Café", es: "Café", tr: "Kahve", de: "Kaffee", it: "Caffè" },
      { ar: "شاي", en: "Tea", fr: "Thé", es: "Té", tr: "Çay", de: "Tee", it: "Tè" },
      { ar: "تفاحة", en: "Apple", fr: "Pomme", es: "Manzana", tr: "Elma", de: "Apfel", it: "Mela" },
      { ar: "أرز", en: "Rice", fr: "Riz", es: "Arroz", tr: "Pirinç", de: "Reis", it: "Riso" },
      { ar: "دجاج", en: "Chicken", fr: "Poulet", es: "Pollo", tr: "Tavuk", de: "Hähnchen", it: "Pollo" }
    ]
  },
  {
    id: "phrases", title: "عبارات يومية", icon: "💬",
    words: [
      { ar: "كيف حالك؟", en: "How are you?", fr: "Comment ça va ?", es: "¿Cómo estás?", tr: "Nasılsın?", de: "Wie geht es dir?", it: "Come stai?" },
      { ar: "أنا بخير", en: "I am fine", fr: "Je vais bien", es: "Estoy bien", tr: "İyiyim", de: "Mir geht es gut", it: "Sto bene" },
      { ar: "ما اسمك؟", en: "What is your name?", fr: "Comment tu t'appelles ?", es: "¿Cómo te llamas?", tr: "Adın ne?", de: "Wie heißt du?", it: "Come ti chiami?" },
      { ar: "اسمي ...", en: "My name is ...", fr: "Je m'appelle ...", es: "Me llamo ...", tr: "Benim adım ...", de: "Ich heiße ...", it: "Mi chiamo ..." },
      { ar: "لا أفهم", en: "I don't understand", fr: "Je ne comprends pas", es: "No entiendo", tr: "Anlamıyorum", de: "Ich verstehe nicht", it: "Non capisco" },
      { ar: "أين الحمّام؟", en: "Where is the bathroom?", fr: "Où sont les toilettes ?", es: "¿Dónde está el baño?", tr: "Tuvalet nerede?", de: "Wo ist die Toilette?", it: "Dov'è il bagno?" },
      { ar: "كم السعر؟", en: "How much is it?", fr: "Combien ça coûte ?", es: "¿Cuánto cuesta?", tr: "Ne kadar?", de: "Wie viel kostet das?", it: "Quanto costa?" },
      { ar: "آسف", en: "Sorry", fr: "Désolé", es: "Lo siento", tr: "Özür dilerim", de: "Entschuldigung", it: "Mi dispiace" }
    ]
  }
];
