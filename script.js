const translations = {
  hr: {
    "menu-about": "O nama",
    "menu-cakes": "Naši kolači",
    "menu-contact": "Kontakt",
    "hero-title": "Sweetosaurus",
    "hero-slogan": "A party without cake is just a meeting",
    "about-title": "O nama",
    "about-text": "Sweetosaurus je nastao iz ljubavi prema domaćim i dekorativnim kolačima. Naša priča započela je u maloj kuhinji, gdje se svaka kreacija radila s osmijehom i pažnjom. Danas želimo unijeti taj osjećaj sreće i topline u vaše proslave.",
    "cakes-title": "Naši kolači",
    "contact-title": "Kontakt",
    "contact-text": "Želite naručiti kolače ili imate pitanja?",
    "footer-text": "© 2023 Sweetosaurus",
    "back-link": "← Povratak na glavnu stranicu",

    // podstranice
    "muffins-title": "Muffini",
    "muffins-text": "Naši muffini su savršeni za svaku prigodu.",
    "bakini-title": "Bakini kolači",
    "bakini-text": "Tradicionalni recepti koji vraćaju uspomene.",
    "rodj-title": "Rođendanske torte",
    "rodj-text": "Savršene torte za vaše posebne dane.",
    "svat-title": "Svatovske torte",
    "svat-text": "Elegantne torte za vaše vjenčanje.",
    "razni-title": "Razni kolači",
    "razni-text": "Razni kolači za sve ukuse."
  },
  en: {
    "menu-about": "About Us",
    "menu-cakes": "Our Cakes",
    "menu-contact": "Contact",
    "hero-title": "Sweetosaurus",
    "hero-slogan": "A party without cake is just a meeting",
    "about-title": "About Us",
    "about-text": "Sweetosaurus was born out of a love for homemade and decorative cakes. Our story began in a small kitchen, where every creation was made with a smile and care. Today we want to bring that feeling of happiness and warmth to your celebrations.",
    "cakes-title": "Our Cakes",
    "contact-title": "Contact",
    "contact-text": "Do you want to order cakes or have questions?",
    "footer-text": "© 2023 Sweetosaurus",
    "back-link": "← Back to main page",

    // subpages
    "muffins-title": "Muffins",
    "muffins-text": "Our muffins are perfect for every occasion.",
    "bakini-title": "Grandma's Cakes",
    "bakini-text": "Traditional recipes that bring back memories.",
    "rodj-title": "Birthday Cakes",
    "rodj-text": "Perfect cakes for your special days.",
    "svat-title": "Wedding Cakes",
    "svat-text": "Elegant cakes for your wedding.",
    "razni-title": "Various Cakes",
    "razni-text": "Different cakes for every taste."
  },
  de: {
    "menu-about": "Über uns",
    "menu-cakes": "Unsere Kuchen",
    "menu-contact": "Kontakt",
    "hero-title": "Sweetosaurus",
    "hero-slogan": "Eine Party ohne Kuchen ist nur ein Treffen",
    "about-title": "Über uns",
    "about-text": "Sweetosaurus entstand aus der Liebe zu hausgemachten und dekorativen Kuchen. Unsere Geschichte begann in einer kleinen Küche, in der jede Kreation mit einem Lächeln und Sorgfalt gemacht wurde. Heute möchten wir dieses Gefühl von Glück und Wärme in Ihre Feiern bringen.",
    "cakes-title": "Unsere Kuchen",
    "contact-title": "Kontakt",
    "contact-text": "Möchten Sie Kuchen bestellen oder haben Sie Fragen?",
    "footer-text": "© 2023 Sweetosaurus",
    "back-link": "← Zur Hauptseite zurück",

    // Unterseiten
    "muffins-title": "Muffins",
    "muffins-text": "Unsere Muffins sind perfekt für jeden Anlass.",
    "bakini-title": "Omas Kuchen",
    "bakini-text": "Traditionelle Rezepte, die Erinnerungen wecken.",
    "rodj-title": "Geburtstagstorten",
    "rodj-text": "Perfekte Torten für Ihre besonderen Tage.",
    "svat-title": "Hochzeitstorten",
    "svat-text": "Elegante Torten für Ihre Hochzeit.",
    "razni-title": "Verschiedene Kuchen",
    "razni-text": "Verschiedene Kuchen für jeden Geschmack."
  }
};

// Funkcija za promjenu jezika
document.querySelectorAll(".lang-switcher button").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    document.querySelectorAll("[data-key]").forEach(el => {
      el.textContent = translations[lang][el.dataset.key];
    });
  });
});
