export interface Project {
    id: string;
    tags: string[];
    title: string;
    link?: string;
    shortDescription: string;
    longDescription: string;
    mainImage: string;
    images: string[];
    defaultImage: string;
    hoverImage: string;
    projectButtonLink?: string;
    projectButtonLabel?: string;
    pdfLink?: string;
    pdfLabel?: string;
}

export interface ProjectsData {
    categories: string[];
    projects: Project[];
}

export const categories = ["Alle", "Webdesign", "Brand & Logo", "Social Media & Marketing", "Grafik & Print"];

export const projects: Project[] = [
    {
        id: "sascha-lorenz",
        tags: ["Webdesign", "Brand & Logo"],
        title: "Sascha Lorenz",
        shortDescription: "Personal Branding, Logo Entwicklung und Webdesign",
        longDescription: "Code ist unsichtbar, doch Kompetenz muss sichtbar gemacht werden. Für den Software Entwickler Sascha Lorenz galt es eine visuelle Identität zu schaffen, die Professionalität und technisches Know how ausstrahlt. Dafür entwickelte ich ein reduziertes Branding mit Fokus auf Klarheit. Das markante Maskottchen in Form einer Schlange greift visuell den Anfangsbuchstaben S auf. Sie steht symbolisch für stetige Erneuerung und Anpassung, ein perfektes Sinnbild für die dynamische Software Welt.",
        // Path adjusted: static/Photos/... -> /Photos/...
        mainImage: "/Photos/Sascha/Mockup Website.jpg",
        images: [
            "/Photos/Sascha/Pin.jpg",
            "/Photos/Sascha/Kaffee.jpg",
            "/Photos/Sascha/Websitelayout.jpg",
            "/Photos/Sascha/Maus.jpg",
            "/Photos/Sascha/Web-Mobillayout.jpg",
            "/Photos/Sascha/Wand.jpg",
            "/Photos/Sascha/Notitz.jpg"
        ],
        defaultImage: "/Photos/Sascha/Idle.jpg",
        hoverImage: "/Photos/Sascha/Hovercard.jpg",
        pdfLabel: "Brandlook",
        pdfLink: "/PDFs/Sascha/Brand-Look.pdf"
    },
    {
        id: "Mandarfner Hof",
        tags: ["Webdesign", "Social Media & Marketing", "Grafik & Print"],
        title: "Mandarfner Hof",
        link: "#",
        shortDescription: "Webdesign, In House Marketing und Print Editorial",
        longDescription: "Meine Aufgabe ist die nahtlose visuelle Kommunikation über alle Touchpoints hinweg, um Gäste vor, während und nach dem Aufenthalt zu begeistern. Das Spektrum reicht von der Content Creation für Social Media bis hin zur hochwertigen Print Ausstattung wie Broschüren, Menüs und Geschäftsausstattung. Zusätzlich konzipiere und programmiere ich interaktive Newsletter für eine direkte Kundenbindung. Umgesetzt im Zuge der Anstellung bei © Werbezimmer.",
        mainImage: "/Photos/Mandarfnerhof/Main.jpg",
        images: [
            "/Photos/Mandarfnerhof/Card.jpg",
            "/Photos/Mandarfnerhof/Social.jpg",
            "/Photos/Mandarfnerhof/Web.jpg",
            "/Photos/Mandarfnerhof/Newsletter.jpg",
            "/Photos/Mandarfnerhof/Mobil.jpg"
        ],
        defaultImage: "/Photos/Mandarfnerhof/Idle.jpg",
        hoverImage: "/Photos/Mandarfnerhof/Hovercard.jpg",
        projectButtonLabel: "Zur Website",
        projectButtonLink: "#"
    },
    {
        id: "vox-and-arc",
        tags: ["Webdesign", "Brand & Logo", "Grafik & Print"],
        title: "VOX & ARC",
        shortDescription: "Fiktives Branding und Webdesign, das die Nostalgie von Radio und TV mit moderner Technologie verbindet.",
        longDescription: "Vox & Arc verbindet den Charme von 30er Jahre Radio und 50er Jahre TV mit modernster Technologie. Ziel war die Übersetzung von Nostalgie in eine funktionale Markenwelt. Neben Logo und Auststattung entstand ein einzigartiges Blog Modul. Es präsentiert digitale Inhalte im Layout klassischer Zeitungsartikel und schlägt so die visuelle Brücke zwischen analoger Vergangenheit und digitaler Gegenwart.",
        // Path adjusted: static/Photos/... -> /Photos/...
        mainImage: "/Photos/Vox&Arc/V&A-06.jpg",
        images: [
            "/Photos/Vox&Arc/V&A-02.jpg",
            "/Photos/Vox&Arc/V&A-01.jpg",
            "/Photos/Vox&Arc/V&A-07.jpg",
            "/Photos/Vox&Arc/V&A-05.jpg",
            "/Photos/Vox&Arc/V&A-08.jpg",
            "/Photos/Vox&Arc/V&A-04.jpg",
            "/Photos/Vox&Arc/V&A-03.jpg"
        ],
        defaultImage: "/Photos/Vox&Arc/Vox&Arc Card.jpg",
        hoverImage: "/Photos/Vox&Arc/V&A-hover.jpg",
        pdfLabel: "Brandlook & Screendesign",
        pdfLink: "/PDFs/Vox&Arc/Brandlook-Screendesign.pdf",
    },
    {
        id: "WestAmber",
        tags: ["Grafik & Print", "Brand & Logo", "Webdesign"],
        title: "West Amber",
        link: "#",
        shortDescription: "Whisky Branding zwischen Tiroler Alpen und schottischen Highlands.",
        longDescription: "West Amber verbindet zwei Welten. Das Projekt ist eine Revision, die eine Brücke zwischen Tiroler Brennkunst und schottischer Tradition schlägt. Der visuelle Schlüssel der Marke ist ein West Highland Terrier. Er dient als charmantes Maskottchen und ist eine liebevolle Hommage an meinen Kindheitshund Maxi. Das ganzheitliche Design erstreckt sich vom Logo über das Webdesign bis hin zur haptischen Ausstattung wie Flaschenetiketten, Coasters und Gläsern.",
        mainImage: "/Photos/West Amber/Websitebar.jpg",
        defaultImage: "/Photos/West Amber/Idle.jpg",
        hoverImage: "/Photos/West Amber/Hovercard.jpg",
        images: [
            "/Photos/West Amber/Flasche.jpg",
            "/Photos/West Amber/Glas.jpg",
            "/Photos/West Amber/Websitelayout.jpg",
            "/Photos/West Amber/Mac.jpg",
            "/Photos/West Amber/Glas-Flasche.jpg"],
        pdfLabel: "Brandlook & Screendesign",
        pdfLink: "/PDFs/WestAmber/Brandlook_Screendesign.pdf"
    },
    {
        id: "Mikit",
        tags: ["Brand & Logo", "Social Media & Marketing"],
        title: "MIKIT",
        shortDescription: "Branding & Produktdesign für Schmuck mit Fokus auf mentale Gesundheit",
        longDescription: "MIKIT ist die professionelle Neuinterpretation eines frühen Studienprojekts und zeigt meine gestalterische Weiterentwicklung. Das fiktive Label fertigt Schmuckstücke aus Naturelementen, die weit mehr als Accessoires sind. Das Designkonzept wurde ganzheitlich entwickelt. Es reicht vom eigentlichen Produktdesign über ein haptisches Packaging Erlebnis bis hin zum strategischen Social Media Feed und feinen Logo Animationen für den digitalen Raum.",
        mainImage: "/Photos/Mikit/Hero.jpg",
        images: [
            "/Photos/Mikit/Ohrringe.jpg",
            "/Photos/Mikit/Kette.jpg",
            "/Photos/Mikit/Verpackung.jpg",
            "/Photos/Mikit/Social Media.jpg",
            "/Photos/Mikit/Ketteverpackt.jpg"
        ],
        defaultImage: "/Photos/Mikit/Idle.jpg",
        hoverImage: "/Photos/Mikit/Hovercard.jpg",
        pdfLabel: "Brandlook & Screendesign",
        pdfLink: "/PDFs/Mikit/Brand-Look.pdf"
    },
    {
        id: "Nudeiful",
        tags: ["Brand & Logo", "Social Media & Marketing", "Webdesign", "Grafik & Print"],
        title: "Nudeiful",
        shortDescription: "Nordischer Minimalismus für nachhaltige Kosmetik",
        longDescription: "Nudeiful ist die professionelle Revision eines Universitätsprojekts. Die fiktive Marke fokussiert sich auf naturbasierte, nachfüllbare Lidschatten. Das Design orientiert sich am Clean Chic des Nordens. Reduziert, puristisch und hochwertig. Das Konzept umfasst neben Branding und Webdesign inklusive Shop Interface auch ein detailliertes Storyboard für einen YouTube Werbespot.",
        mainImage: "/Photos/Nudeiful/Hero.jpg",
        images: [
            "/Photos/Nudeiful/Oben.jpg",
            "/Photos/Nudeiful/Obenrechts.jpg",
            "/Photos/Nudeiful/Mitte Links.jpg",
            "/Photos/Nudeiful/Mitte.jpg",
            "/Photos/Nudeiful/Mitte rechts.jpg",
            "/Photos/Nudeiful/Web.jpg",
            "/Photos/Nudeiful/Web-shop.jpg"
        ],
        defaultImage: "/Photos/Nudeiful/Idle.jpg",
        hoverImage: "/Photos/Nudeiful/Hovercard.jpg",
        pdfLabel: "Brandlook & Screendesign",
        pdfLink: "/PDFs/Nudeiful/Brandlook_Screendesign.pdf"
    },
    {
        id: "Herzstachel",
        tags: ["Social Media & Marketing", "Brand & Logo", "Webdesign"],
        title: "Herzstachel",
        shortDescription: "Fiktives Branding für die Zucht von Weißbauchigeln",
        longDescription: "Herzstachel ist ein fiktives Herzensprojekt, das sich auf die ethische Zucht von Afrikanischen Weißbauchigeln spezialisiert. Das Ziel war ein visuelles Erscheinungsbild, das Vertrauen, Fürsorge und die Niedlichkeit der Tiere transportiert, ohne dabei kindisch zu wirken. Neben dem Logo und der Website entstand ein Newsletter Konzept, das zukünftige Igel Eltern informiert und begleitet.",
        mainImage: "/Photos/Herz/Hero.jpg",
        images: [
            "/Photos/Herz/Obenl.jpg",
            "/Photos/Herz/Obenr.jpg",
            "/Photos/Herz/Mobil.jpg",
            "/Photos/Herz/Mitte.jpg",
            "/Photos/Herz/Websitelayout.jpg"
        ],
        defaultImage: "/Photos/Herz/Idle.jpg",
        hoverImage: "/Photos/Herz/Hovercard.jpg",
        pdfLabel: "Brandlook",
        pdfLink: "/PDFs/Herz/Brand-Look.pdf"
    },
    {
        id: "Shake'ins",
        tags: ["Grafik & Print", "Brand & Logo", "Webdesign"],
        title: "Shake'ins",
        shortDescription: "Grunge Identität für eine Newcomer Rockband",
        longDescription: "Ein Projekt voller Energie für die nächste Generation. Shake Ins ist eine Jugendband, die den rauen Sound des 90er und 2000er Grunge wiederaufleben lässt. Das Design fängt genau diesen Vibe ein. Jung, laut und unpoliert. Entstanden sind ein markantes Logo sowie eine passende Website und erstes Merchandise Design, das die Attitüde der Musik visuell tragbar macht.",
        mainImage: "/Photos/Shakeins/Hero.jpg",
        images: [
            "/Photos/Shakeins/obenl.jpg",
            "/Photos/Shakeins/obenr.jpg",
            "/Photos/Shakeins/Mobil.jpg",
            "/Photos/Shakeins/Mitte.jpg",
            "/Photos/Shakeins/Web.jpg"
        ],
        defaultImage: "/Photos/Shakeins/Idle.jpg",
        hoverImage: "/Photos/Shakeins/Hovercard.jpg",
        pdfLabel: "Brandlook & Screendesign",
        pdfLink: "/PDFs/Shakeins/Brandlook_Screendesign.pdf"
    },
    {
        id: "Martina",
        tags: ["Brand & Logo", "Webdesign", "Social Media & Marketing", "Grafik & Print"],
        title: "MeVitality",
        link: "https://www.mevitality.de/",
        shortDescription: "Personal Branding für psychosoziale Beratung und Coaching",
        longDescription: "Für den Neustart in der Pension entstand ein Auftritt, der Professionalität mit familiärer Wärme verbindet. MeVitality by Martina Nußbaum berät in sensiblen Bereichen. Das Design schafft Vertrauen und Barrierefreiheit. Neben Logo und Website liegt der Fokus auf SEO Optimierung sowie klassischer Printausstattung wie Flyern und Visitenkarten.",
        // Path adjusted: static/Photos/... -> /Photos/...
        mainImage: "/Photos/Martina/Mainimage.jpg",
        defaultImage: "/Photos/Martina/Idle.jpg",
        hoverImage: "/Photos/Martina/Hovercard.jpg",
        images: []
    },


];

export const wipProjects: Project[] = [
    {
        id: "Alpin Camping",
        tags: ["Projects", "Webdesign", "Social Media & Marketing"],
        title: "Alpin Camping Kaunertal",
        shortDescription: "Screendesign & Newsletter-System",
        longDescription: "Gestaltung des Screendesigns und des Newsletter-Systems für Alpin Camping Kaunertal. Der Fokus lag auf der visuellen Ausarbeitung der Website mit den vier Unterseiten Camping, Restaurant, Living und Guiding sowie auf einer klaren Gestaltung der komplexen Menüstruktur. Umgesetzt im Zuge der Anstellung bei © Werbezimmer.",
        mainImage: "/Photos/Alpin Camping/Hero.jpg",
        images: [],
        defaultImage: "/Photos/Alpin Camping/Card-Idle.jpg",
        hoverImage: "/Photos/Alpin Camping/Card-Hover.jpg"
    },
    {
        id: "Posh Beauty",
        tags: ["Projects", "Webdesign"],
        title: "Posh Beauty",
        link: "#",
        shortDescription: "Minimalistisches High End Interface für den Beauty Sektor",
        longDescription: "High End Screendesign für den Beauty Sektor. Eine digitale Ästhetik die Eleganz und Klarheit verbindet um die Exklusivität der Marke zu unterstreichen. Umgesetzt im Zuge der Anstellung bei © Werbezimmer.",
        mainImage: "/Photos/Posh/Hero.jpg",
        images: [
        ],
        defaultImage: "/Photos/Posh/Idle.jpg",
        hoverImage: "/Photos/Posh/Hovercard.jpg"
    },
    {
        id: "Skischule Luis",
        tags: ["Projects", "Webdesign"],
        title: "Skischule Luis",
        link: "#",
        shortDescription: "Screendesign und User Experience für den alpinen Wintersport.",
        longDescription: "Modernes Screendesign für den alpinen Wintersport. Fokus auf intuitive Nutzerführung und emotionale Bildsprache für ein optimales Buchungserlebnis. Umgesetzt im Zuge der Anstellung bei © Werbezimmer.",
        mainImage: "/Photos/SkiLuis/Hero.jpg",
        images: [
        ],
        defaultImage: "/Photos/SkiLuis/Idle.jpg",
        hoverImage: "/Photos/SkiLuis/Hovercard.jpg",
    },
    {
        id: "M...",
        tags: ["Projects", "Webdesign", "Brand & Logo"],
        title: "M...",
        shortDescription: "Sneak Peak für ein alpines Hotelkonzept",
        longDescription: "Ein erster Einblick in ein laufendes Projekt. Für ein exklusives alpines Hideaway entsteht derzeit ein komplettes Rebranding. Der Fokus liegt auf moderner Tradition und digitaler Sichtbarkeit. Mehr Details folgen...",
        mainImage: "/Photos/M/Web.jpg",
        images: [
        ],
        defaultImage: "/Photos/M/Idle.jpg",
        hoverImage: "/Photos/M/Hovercard.jpg",
    },
    {
        id: "KOS",
        tags: ["Projects", "Webdesign", "Brand & Logo"],
        title: "KOS",
        shortDescription: "Screendesign und Branding für ein fiktives Design Hotel",
        longDescription: "Für KOS, ein fiktives Designhotel mit nordischer Seele, habe ich das komplette Branding und Webdesign entwickelt. Die visuelle Identität lebt von einem bewussten, spannenden Kontrast: Das Herzstück bilden kraftvolle, tief in der Folklore verwurzelte Illustrationen von Waldtieren, die eine mystische Geschichte erzählen. Um diese visuelle Fülle auszubalancieren, bildet ein radikal klares Layout mit einer ruhigen, aber fetten und selbstbewussten Typografie den modernen Gegenpol. Diese Kombination schafft eine einzigartige Atmosphäre zwischen skandinavischem Minimalismus und lebendiger Tradition.",
        mainImage: "/Photos/KOS/Hero.jpg",
        images: [
        ],
        defaultImage: "/Photos/KOS/Idle.jpg",
        hoverImage: "/Photos/KOS/Hovercard.jpg",
    },
    {
        id: "S...",
        tags: ["Projects", "Webdesign", "Brand & Logo", "Grafik & Print"],
        title: "S...",
        shortDescription: "Visuelles Redesign für ein alpines Jahresevent",
        longDescription: "Es handelt sich um das komplette Rebranding eines jährlichen Events. Ziel ist die Modernisierung des visuellen Auftritts, um Tradition und Eventkultur neu zu verbinden. Das Spektrum reicht von der Logo Entwicklung über den digitalen Auftritt bis hin zur umfassenden Print Ausstattung vor Ort.",
        mainImage: "/Photos/S/Hero.jpg",
        images: [
        ],
        defaultImage: "/Photos/S/Idle.jpg",
        hoverImage: "/Photos/S/Hovercard.jpg",
    },
    {
        id: "Bäckelar Wirt",
        tags: ["Projects", "Webdesign", "Brandi & Logo"],
        title: "Bäckelar Wirt",
        shortDescription: "Konzeptuelle Neuinterpretation einer Hotelmarke",
        longDescription: "Meine persönliche Vision für das Jahr 2025. Ein konzeptionelles Redesign von Logo und Website für den Bäckelar Wirt.",
        mainImage: "/Photos/Backelar/Hero.jpg",
        images: [
        ],
        defaultImage: "/Photos/Backelar/Idle.jpg",
        hoverImage: "/Photos/Backelar/Hovercard.jpg",
        pdfLabel: "Brandlook & Screendesign",
        pdfLink: "/PDFs/Backelar/Brandlook_Screendesign.pdf"
    },
];