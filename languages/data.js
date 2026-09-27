// بيانات المفردات: كل كلمة لها معناها بالعربية وترجمتها في كل لغة
const LANGUAGES = {
  en: { name: "الإنجليزية", native: "English", flag: "🇬🇧", voice: "en-US" },
  fr: { name: "الفرنسية", native: "Français", flag: "🇫🇷", voice: "fr-FR" },
  es: { name: "الإسبانية", native: "Español", flag: "🇪🇸", voice: "es-ES" },
  tr: { name: "التركية", native: "Türkçe", flag: "🇹🇷", voice: "tr-TR" },
  de: { name: "الألمانية", native: "Deutsch", flag: "🇩🇪", voice: "de-DE" },
  it: { name: "الإيطالية", native: "Italiano", flag: "🇮🇹", voice: "it-IT" }
};

// المستويات حسب الإطار الأوروبي المرجعي المشترك للغات
const LEVELS = [
  { id: "A1", title: "مبتدئ", desc: "كلمات وعبارات أساسية" },
  { id: "B2", title: "متقدم", desc: "مفردات للنقاش والعمل والتعبير عن الرأي" }
];

const CATEGORIES = [
  {
    id: "greetings", title: "التحيات", icon: "👋", level: "A1",
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
    id: "numbers", title: "الأرقام", icon: "🔢", level: "A1",
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
    id: "colors", title: "الألوان", icon: "🎨", level: "A1",
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
    id: "family", title: "العائلة", icon: "👨‍👩‍👧", level: "A1",
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
    id: "food", title: "الطعام والشراب", icon: "🍎", level: "A1",
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
    id: "phrases", title: "عبارات يومية", icon: "💬", level: "A1",
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
  },
  {
    id: "connectors", title: "أدوات الربط", icon: "🔗", level: "B2",
    words: [
      { ar: "إلا أنّ", en: "However", fr: "Cependant", es: "Sin embargo", tr: "Ancak", de: "Jedoch", it: "Tuttavia" },
      { ar: "لذلك", en: "Therefore", fr: "Par conséquent", es: "Por lo tanto", tr: "Bu yüzden", de: "Deshalb", it: "Pertanto" },
      { ar: "على الرغم من أنّ", en: "Although", fr: "Bien que", es: "Aunque", tr: "Her ne kadar", de: "Obwohl", it: "Sebbene" },
      { ar: "بالإضافة إلى ذلك", en: "Furthermore", fr: "De plus", es: "Además", tr: "Ayrıca", de: "Außerdem", it: "Inoltre" },
      { ar: "من ناحية أخرى", en: "On the other hand", fr: "D'autre part", es: "Por otro lado", tr: "Öte yandan", de: "Andererseits", it: "D'altra parte" },
      { ar: "نتيجةً لذلك", en: "As a result", fr: "En conséquence", es: "Como resultado", tr: "Sonuç olarak", de: "Folglich", it: "Di conseguenza" },
      { ar: "في حين أنّ", en: "Whereas", fr: "Alors que", es: "Mientras que", tr: "Oysa", de: "Während", it: "Mentre" },
      { ar: "ومع ذلك", en: "Nevertheless", fr: "Néanmoins", es: "No obstante", tr: "Yine de", de: "Trotzdem", it: "Nondimeno" }
    ]
  },
  {
    id: "work", title: "العمل والمهنة", icon: "💼", level: "B2",
    words: [
      { ar: "مقابلة عمل", en: "Job interview", fr: "Entretien d'embauche", es: "Entrevista de trabajo", tr: "İş görüşmesi", de: "Vorstellungsgespräch", it: "Colloquio di lavoro" },
      { ar: "راتب", en: "Salary", fr: "Salaire", es: "Sueldo", tr: "Maaş", de: "Gehalt", it: "Stipendio" },
      { ar: "موعد نهائي", en: "Deadline", fr: "Date limite", es: "Fecha límite", tr: "Son teslim tarihi", de: "Frist", it: "Scadenza" },
      { ar: "خبرة", en: "Experience", fr: "Expérience", es: "Experiencia", tr: "Deneyim", de: "Erfahrung", it: "Esperienza" },
      { ar: "مهارة", en: "Skill", fr: "Compétence", es: "Habilidad", tr: "Beceri", de: "Fähigkeit", it: "Competenza" },
      { ar: "زميل عمل", en: "Colleague", fr: "Collègue", es: "Compañero de trabajo", tr: "İş arkadaşı", de: "Kollege", it: "Collega" },
      { ar: "ترقية", en: "Promotion", fr: "Promotion", es: "Ascenso", tr: "Terfi", de: "Beförderung", it: "Promozione" },
      { ar: "يستقيل", en: "To resign", fr: "Démissionner", es: "Dimitir", tr: "İstifa etmek", de: "Kündigen", it: "Dimettersi" }
    ]
  },
  {
    id: "society", title: "المجتمع والبيئة", icon: "🌱", level: "B2",
    words: [
      { ar: "الاستدامة", en: "Sustainability", fr: "Durabilité", es: "Sostenibilidad", tr: "Sürdürülebilirlik", de: "Nachhaltigkeit", it: "Sostenibilità" },
      { ar: "تغيّر المناخ", en: "Climate change", fr: "Changement climatique", es: "Cambio climático", tr: "İklim değişikliği", de: "Klimawandel", it: "Cambiamento climatico" },
      { ar: "التلوّث", en: "Pollution", fr: "Pollution", es: "Contaminación", tr: "Kirlilik", de: "Umweltverschmutzung", it: "Inquinamento" },
      { ar: "الطاقة المتجدّدة", en: "Renewable energy", fr: "Énergie renouvelable", es: "Energía renovable", tr: "Yenilenebilir enerji", de: "Erneuerbare Energie", it: "Energia rinnovabile" },
      { ar: "عدم المساواة", en: "Inequality", fr: "Inégalité", es: "Desigualdad", tr: "Eşitsizlik", de: "Ungleichheit", it: "Disuguaglianza" },
      { ar: "البطالة", en: "Unemployment", fr: "Chômage", es: "Desempleo", tr: "İşsizlik", de: "Arbeitslosigkeit", it: "Disoccupazione" },
      { ar: "الوعي", en: "Awareness", fr: "Sensibilisation", es: "Concienciación", tr: "Farkındalık", de: "Bewusstsein", it: "Consapevolezza" },
      { ar: "التنمية", en: "Development", fr: "Développement", es: "Desarrollo", tr: "Kalkınma", de: "Entwicklung", it: "Sviluppo" }
    ]
  },
  {
    id: "opinions", title: "التعبير عن الرأي", icon: "🗣️", level: "B2",
    words: [
      { ar: "في رأيي", en: "In my opinion", fr: "À mon avis", es: "En mi opinión", tr: "Bence", de: "Meiner Meinung nach", it: "Secondo me" },
      { ar: "أتّفق معك", en: "I agree with you", fr: "Je suis d'accord avec toi", es: "Estoy de acuerdo contigo", tr: "Sana katılıyorum", de: "Ich stimme dir zu", it: "Sono d'accordo con te" },
      { ar: "لا أتّفق مع ذلك", en: "I disagree with that", fr: "Je ne suis pas d'accord avec ça", es: "No estoy de acuerdo con eso", tr: "Buna katılmıyorum", de: "Da stimme ich nicht zu", it: "Non sono d'accordo" },
      { ar: "هذا يعتمد على الظروف", en: "It depends on the circumstances", fr: "Ça dépend des circonstances", es: "Depende de las circunstancias", tr: "Duruma bağlı", de: "Es kommt auf die Umstände an", it: "Dipende dalle circostanze" },
      { ar: "من وجهة نظري", en: "From my point of view", fr: "De mon point de vue", es: "Desde mi punto de vista", tr: "Benim bakış açıma göre", de: "Aus meiner Sicht", it: "Dal mio punto di vista" },
      { ar: "هذه نقطة جيدة", en: "That's a good point", fr: "C'est un bon point", es: "Es un buen punto", tr: "Bu iyi bir nokta", de: "Das ist ein guter Punkt", it: "È un buon punto" },
      { ar: "بصراحة", en: "To be honest", fr: "Pour être honnête", es: "Para ser sincero", tr: "Açıkçası", de: "Ehrlich gesagt", it: "Ad essere sincero" },
      { ar: "لست متأكدًا من ذلك", en: "I'm not sure about that", fr: "Je n'en suis pas sûr", es: "No estoy seguro de eso", tr: "Bundan emin değilim", de: "Da bin ich mir nicht sicher", it: "Non ne sono sicuro" }
    ]
  },
  {
    id: "verbs", title: "أفعال متقدمة", icon: "⚡", level: "B2",
    words: [
      { ar: "يحقّق", en: "To achieve", fr: "Atteindre", es: "Lograr", tr: "Başarmak", de: "Erreichen", it: "Raggiungere" },
      { ar: "يحسّن", en: "To improve", fr: "Améliorer", es: "Mejorar", tr: "Geliştirmek", de: "Verbessern", it: "Migliorare" },
      { ar: "يتجنّب", en: "To avoid", fr: "Éviter", es: "Evitar", tr: "Kaçınmak", de: "Vermeiden", it: "Evitare" },
      { ar: "يقترح", en: "To suggest", fr: "Suggérer", es: "Sugerir", tr: "Önermek", de: "Vorschlagen", it: "Suggerire" },
      { ar: "يتطلّب", en: "To require", fr: "Exiger", es: "Requerir", tr: "Gerektirmek", de: "Erfordern", it: "Richiedere" },
      { ar: "يأخذ بعين الاعتبار", en: "To take into account", fr: "Tenir compte de", es: "Tener en cuenta", tr: "Dikkate almak", de: "Berücksichtigen", it: "Tenere conto di" },
      { ar: "يقلّل", en: "To reduce", fr: "Réduire", es: "Reducir", tr: "Azaltmak", de: "Reduzieren", it: "Ridurre" },
      { ar: "يعتمد على", en: "To rely on", fr: "Compter sur", es: "Depender de", tr: "Güvenmek", de: "Sich verlassen auf", it: "Contare su" }
    ]
  }
];
