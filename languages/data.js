// بيانات المفردات: كل كلمة لها معناها بالعربية وترجمتها في كل لغة
const LANGUAGES = {
  en: { name: "الإنجليزية", native: "English", flag: "🇬🇧", voice: "en-US" },
  fr: { name: "الفرنسية", native: "Français", flag: "🇫🇷", voice: "fr-FR" },
  es: { name: "الإسبانية", native: "Español", flag: "🇪🇸", voice: "es-ES" },
  tr: { name: "التركية", native: "Türkçe", flag: "🇹🇷", voice: "tr-TR" }
};

const CATEGORIES = [
  {
    id: "greetings", title: "التحيات", icon: "👋",
    words: [
      { ar: "مرحبًا", en: "Hello", fr: "Bonjour", es: "Hola", tr: "Merhaba" },
      { ar: "مع السلامة", en: "Goodbye", fr: "Au revoir", es: "Adiós", tr: "Hoşça kal" },
      { ar: "صباح الخير", en: "Good morning", fr: "Bonjour", es: "Buenos días", tr: "Günaydın" },
      { ar: "مساء الخير", en: "Good evening", fr: "Bonsoir", es: "Buenas tardes", tr: "İyi akşamlar" },
      { ar: "شكرًا", en: "Thank you", fr: "Merci", es: "Gracias", tr: "Teşekkür ederim" },
      { ar: "من فضلك", en: "Please", fr: "S'il vous plaît", es: "Por favor", tr: "Lütfen" },
      { ar: "نعم", en: "Yes", fr: "Oui", es: "Sí", tr: "Evet" },
      { ar: "لا", en: "No", fr: "Non", es: "No", tr: "Hayır" }
    ]
  },
  {
    id: "numbers", title: "الأرقام", icon: "🔢",
    words: [
      { ar: "واحد", en: "One", fr: "Un", es: "Uno", tr: "Bir" },
      { ar: "اثنان", en: "Two", fr: "Deux", es: "Dos", tr: "İki" },
      { ar: "ثلاثة", en: "Three", fr: "Trois", es: "Tres", tr: "Üç" },
      { ar: "أربعة", en: "Four", fr: "Quatre", es: "Cuatro", tr: "Dört" },
      { ar: "خمسة", en: "Five", fr: "Cinq", es: "Cinco", tr: "Beş" },
      { ar: "ستة", en: "Six", fr: "Six", es: "Seis", tr: "Altı" },
      { ar: "سبعة", en: "Seven", fr: "Sept", es: "Siete", tr: "Yedi" },
      { ar: "ثمانية", en: "Eight", fr: "Huit", es: "Ocho", tr: "Sekiz" },
      { ar: "تسعة", en: "Nine", fr: "Neuf", es: "Nueve", tr: "Dokuz" },
      { ar: "عشرة", en: "Ten", fr: "Dix", es: "Diez", tr: "On" }
    ]
  },
  {
    id: "colors", title: "الألوان", icon: "🎨",
    words: [
      { ar: "أحمر", en: "Red", fr: "Rouge", es: "Rojo", tr: "Kırmızı" },
      { ar: "أزرق", en: "Blue", fr: "Bleu", es: "Azul", tr: "Mavi" },
      { ar: "أخضر", en: "Green", fr: "Vert", es: "Verde", tr: "Yeşil" },
      { ar: "أصفر", en: "Yellow", fr: "Jaune", es: "Amarillo", tr: "Sarı" },
      { ar: "أسود", en: "Black", fr: "Noir", es: "Negro", tr: "Siyah" },
      { ar: "أبيض", en: "White", fr: "Blanc", es: "Blanco", tr: "Beyaz" },
      { ar: "بنفسجي", en: "Purple", fr: "Violet", es: "Morado", tr: "Mor" },
      { ar: "وردي", en: "Pink", fr: "Rose", es: "Rosa", tr: "Pembe" }
    ]
  },
  {
    id: "family", title: "العائلة", icon: "👨‍👩‍👧",
    words: [
      { ar: "أم", en: "Mother", fr: "Mère", es: "Madre", tr: "Anne" },
      { ar: "أب", en: "Father", fr: "Père", es: "Padre", tr: "Baba" },
      { ar: "أخ", en: "Brother", fr: "Frère", es: "Hermano", tr: "Erkek kardeş" },
      { ar: "أخت", en: "Sister", fr: "Sœur", es: "Hermana", tr: "Kız kardeş" },
      { ar: "ابن", en: "Son", fr: "Fils", es: "Hijo", tr: "Oğul" },
      { ar: "ابنة", en: "Daughter", fr: "Fille", es: "Hija", tr: "Kız" },
      { ar: "جد", en: "Grandfather", fr: "Grand-père", es: "Abuelo", tr: "Büyükbaba" },
      { ar: "جدة", en: "Grandmother", fr: "Grand-mère", es: "Abuela", tr: "Büyükanne" }
    ]
  },
  {
    id: "food", title: "الطعام والشراب", icon: "🍎",
    words: [
      { ar: "ماء", en: "Water", fr: "Eau", es: "Agua", tr: "Su" },
      { ar: "خبز", en: "Bread", fr: "Pain", es: "Pan", tr: "Ekmek" },
      { ar: "حليب", en: "Milk", fr: "Lait", es: "Leche", tr: "Süt" },
      { ar: "قهوة", en: "Coffee", fr: "Café", es: "Café", tr: "Kahve" },
      { ar: "شاي", en: "Tea", fr: "Thé", es: "Té", tr: "Çay" },
      { ar: "تفاحة", en: "Apple", fr: "Pomme", es: "Manzana", tr: "Elma" },
      { ar: "أرز", en: "Rice", fr: "Riz", es: "Arroz", tr: "Pirinç" },
      { ar: "دجاج", en: "Chicken", fr: "Poulet", es: "Pollo", tr: "Tavuk" }
    ]
  },
  {
    id: "phrases", title: "عبارات يومية", icon: "💬",
    words: [
      { ar: "كيف حالك؟", en: "How are you?", fr: "Comment ça va ?", es: "¿Cómo estás?", tr: "Nasılsın?" },
      { ar: "أنا بخير", en: "I am fine", fr: "Je vais bien", es: "Estoy bien", tr: "İyiyim" },
      { ar: "ما اسمك؟", en: "What is your name?", fr: "Comment tu t'appelles ?", es: "¿Cómo te llamas?", tr: "Adın ne?" },
      { ar: "اسمي ...", en: "My name is ...", fr: "Je m'appelle ...", es: "Me llamo ...", tr: "Benim adım ..." },
      { ar: "لا أفهم", en: "I don't understand", fr: "Je ne comprends pas", es: "No entiendo", tr: "Anlamıyorum" },
      { ar: "أين الحمّام؟", en: "Where is the bathroom?", fr: "Où sont les toilettes ?", es: "¿Dónde está el baño?", tr: "Tuvalet nerede?" },
      { ar: "كم السعر؟", en: "How much is it?", fr: "Combien ça coûte ?", es: "¿Cuánto cuesta?", tr: "Ne kadar?" },
      { ar: "آسف", en: "Sorry", fr: "Désolé", es: "Lo siento", tr: "Özür dilerim" }
    ]
  }
];
