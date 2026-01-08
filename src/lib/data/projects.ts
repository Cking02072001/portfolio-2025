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

export const categories = ["Alle", "Webdesign", "Brand & Logo","Social Media & Marketing", "Grafik & Print"];

export const projects: Project[] = [
    { 
        id: "sascha-lorenz", 
        tags: ["Webdesign","Brand & Logo"], 
        title: "Sascha Lorenz", 
        shortDescription: "Personal Branding, Logo Entwicklung und Webdesign", 
        longDescription: "Code ist unsichtbar, doch Kompetenz muss sichtbar gemacht werden. Für den Software Entwickler Sascha Lorenz galt es eine visuelle Identität zu schaffen, die Professionalität und technisches Know how ausstrahlt. Dafür entwickelte ich ein reduziertes Branding mit Fokus auf Klarheit. Das markante Maskottchen in Form einer Schlange greift visuell den Anfangsbuchstaben S auf. Sie steht symbolisch für stetige Erneuerung und Anpassung, ein perfektes Sinnbild für die dynamische Software Welt.",
        // Path adjusted: static/Photos/... -> /Photos/...
        mainImage: "/Photos/Sascha/Mockup Website.png",
        images: [
            "/Photos/Sascha/Pin.png",
            "/Photos/Sascha/Kaffee.png",
            "/Photos/Sascha/Websitelayout.png",
            "/Photos/Sascha/Maus.png",
            "/Photos/Sascha/Web-Mobillayout.png",
            "/Photos/Sascha/Wand.png",
            "/Photos/Sascha/Notitz.png"
        ],
        defaultImage: "/Photos/Sascha/Idle.png", 
        hoverImage: "/Photos/Sascha/Hovercard.png",
        pdfLabel: "Brandlook",
        pdfLink:"/PDFs/Sascha/Brand-Look.pdf"
    },
    {
        id: "Mandarfner Hof",
        tags: ["Webdesign", "Social Media & Marketing","Grafik & Print"],
        title: "Mandarfner Hof",
        link: "https://www.mandarfnerhof.at/",
        shortDescription: "Webdesign, In House Marketing und Print Editorial", 
        longDescription: "Meine Aufgabe ist die nahtlose visuelle Kommunikation über alle Touchpoints hinweg, um Gäste vor, während und nach dem Aufenthalt zu begeistern. Das Spektrum reicht von der Content Creation für Social Media bis hin zur hochwertigen Print Ausstattung wie Broschüren, Menüs und Geschäftsausstattung. Zusätzlich konzipiere und programmiere ich interaktive Newsletter für eine direkte Kundenbindung. Das UI/UX Design der aktuellen Hotel Website entstand im Rahmen meiner Anstellung bei der Agentur Werbezimmer. Copyright Werbezimmer 2025.",
        mainImage: "/Photos/Mandarfnerhof/Main.png",
        images: [
            "/Photos/Mandarfnerhof/Card.png",
            "/Photos/Mandarfnerhof/Social.png",
            "/Photos/Mandarfnerhof/Web.png",
            "/Photos/Mandarfnerhof/Newsletter.png",
            "/Photos/Mandarfnerhof/Mobil.png"
        ],
        defaultImage: "/Photos/Mandarfnerhof/Idle.png",
        hoverImage: "/Photos/Mandarfnerhof/Hovercard.png",
        projectButtonLabel: "Zur Website",
        projectButtonLink: "https://www.mandarfnerhof.at/"
    },
    { 
        id: "vox-and-arc", 
        tags: ["Webdesign", "Brand & Logo", "Grafik & Print"], 
        title: "VOX & ARC", 
        shortDescription: "Fiktives Branding und Webdesign, das die Nostalgie von Radio und TV mit moderner Technologie verbindet.", 
        longDescription: "Vox & Arc verbindet den Charme von 30er Jahre Radio und 50er Jahre TV mit modernster Technologie. Ziel war die Übersetzung von Nostalgie in eine funktionale Markenwelt. Neben Logo und Auststattung entstand ein einzigartiges Blog Modul. Es präsentiert digitale Inhalte im Layout klassischer Zeitungsartikel und schlägt so die visuelle Brücke zwischen analoger Vergangenheit und digitaler Gegenwart.",
        // Path adjusted: static/Photos/... -> /Photos/...
        mainImage: "/Photos/Vox&Arc/V&A-06.png",
        images: [
            "/Photos/Vox&Arc/V&A-02.png",
            "/Photos/Vox&Arc/V&A-01.png",
            "/Photos/Vox&Arc/V&A-07.png",
            "/Photos/Vox&Arc/V&A-05.png",
            "/Photos/Vox&Arc/V&A-08.png",
            "/Photos/Vox&Arc/V&A-04.png",
            "/Photos/Vox&Arc/V&A-03.png"
        ],
        defaultImage: "/Photos/Vox&Arc/Vox&Arc Card.png", 
        hoverImage: "/Photos/Vox&Arc/V&A-hover.png",
           pdfLabel: "Brandlook & Screendesign",
        pdfLink:"/PDFs/Vox&Arc/Brandlook-Screendesign.pdf",
    },
    { 
        id: "WestAmber",
        tags: [ "Grafik & Print","Brand & Logo", "Webdesign" ],
        title: "West Amber",
        link: "#",
        shortDescription: "Whisky Branding zwischen Tiroler Alpen und schottischen Highlands.",
        longDescription: "West Amber verbindet zwei Welten. Das Projekt ist eine Revision, die eine Brücke zwischen Tiroler Brennkunst und schottischer Tradition schlägt. Der visuelle Schlüssel der Marke ist ein West Highland Terrier. Er dient als charmantes Maskottchen und ist eine liebevolle Hommage an meinen Kindheitshund Maxi. Das ganzheitliche Design erstreckt sich vom Logo über das Webdesign bis hin zur haptischen Ausstattung wie Flaschenetiketten, Coasters und Gläsern.",
        mainImage: "/Photos/West Amber/Websitebar.png", 
        defaultImage: "/Photos/West Amber/Idle.png",
        hoverImage: "/Photos/West Amber/Hovercard.png",
        images: [
            "/Photos/West Amber/Flasche.png",
            "/Photos/West Amber/Glas.png",
            "/Photos/West Amber/Websitelayout.png",
            "/Photos/West Amber/Mac.png",
            "/Photos/West Amber/Glas-Flasche.png"],
              pdfLabel: "Brandlook & Screendesign",
        pdfLink:"/PDFs/WestAmber/Brandlook-Screendesign.pdf"
    },
    {
        id: "Mikit",
        tags: ["Brand & Logo", "Social Media & Marketing"],
        title: "MIKIT",
        shortDescription: "Branding & Produktdesign für Schmuck mit Fokus auf mentale Gesundheit", 
        longDescription: "MIKIT ist die professionelle Neuinterpretation eines frühen Studienprojekts und zeigt meine gestalterische Weiterentwicklung. Das fiktive Label fertigt Schmuckstücke aus Naturelementen, die weit mehr als Accessoires sind. Das Designkonzept wurde ganzheitlich entwickelt. Es reicht vom eigentlichen Produktdesign über ein haptisches Packaging Erlebnis bis hin zum strategischen Social Media Feed und feinen Logo Animationen für den digitalen Raum.",
        mainImage: "/Photos/Mikit/Hero.png",
        images: [
            "/Photos/Mikit/Ohrringe.png",
            "/Photos/Mikit/Kette.png",
            "/Photos/Mikit/Verpackung.png",
            "/Photos/Mikit/Social Media.png",
            "/Photos/Mikit/Ketteverpackt.png"
        ],
        defaultImage: "/Photos/Mikit/Idle.png",
        hoverImage: "/Photos/Mikit/Hovercard.png",
         pdfLabel: "Brandlook & Screendesign",
        pdfLink:"/PDFs/Mikit/Brand-Look.pdf"
    },
    {
        id: "Nudeiful",
        tags: ["Brand & Logo", "Social Media & Marketing", "Webdesign", "Grafik & Print"],
        title: "Nudeiful",
        shortDescription: "Nordischer Minimalismus für nachhaltige Kosmetik", 
        longDescription: "Nudeiful ist die professionelle Revision eines Universitätsprojekts. Die fiktive Marke fokussiert sich auf naturbasierte, nachfüllbare Lidschatten. Das Design orientiert sich am Clean Chic des Nordens. Reduziert, puristisch und hochwertig. Das Konzept umfasst neben Branding und Webdesign inklusive Shop Interface auch ein detailliertes Storyboard für einen YouTube Werbespot.",
        mainImage: "/Photos/Nudeiful/Hero.png",
        images: [
            "/Photos/Nudeiful/Oben.png",
            "/Photos/Nudeiful/Obenrechts.png",
            "/Photos/Nudeiful/Mitte Links.png",
            "/Photos/Nudeiful/Mitte.png",
            "/Photos/Nudeiful/Mitte rechts.png",
            "/Photos/Nudeiful/Web.png",
            "/Photos/Nudeiful/Web-shop.png"
        ],
        defaultImage: "/Photos/Nudeiful/Idle.png",
        hoverImage: "/Photos/Nudeiful/Hovercard.png",
        pdfLabel: "Brandlook & Screendesign",
        pdfLink:"/PDFs/Nudeiful/Brandlook_Screendesign.pdf"
    },
    {
        id: "Herzstachel",
        tags: ["Social Media & Marketing","Brand & Logo", "Webdesign"],
        title: "Herzstachel",
        shortDescription: "Fiktives Branding für die Zucht von Weißbauchigeln", 
        longDescription: "Herzstachel ist ein fiktives Herzensprojekt, das sich auf die ethische Zucht von Afrikanischen Weißbauchigeln spezialisiert. Das Ziel war ein visuelles Erscheinungsbild, das Vertrauen, Fürsorge und die Niedlichkeit der Tiere transportiert, ohne dabei kindisch zu wirken. Neben dem Logo und der Website entstand ein Newsletter Konzept, das zukünftige Igel Eltern informiert und begleitet.",
        mainImage: "/Photos/Herz/Hero.png",
        images: [
            "/Photos/Herz/Obenl.png",
            "/Photos/Herz/Obenr.png",
            "/Photos/Herz/Mobil.png",
            "/Photos/Herz/Mitte.png",
            "/Photos/Herz/Websitelayout.png"
        ],
        defaultImage: "/Photos/Herz/Idle.png",
        hoverImage: "/Photos/Herz/Hovercard.png",
                pdfLabel: "Brandlook",
        pdfLink:"/PDFs/Herz/Brand-Look.pdf"
    },
    {
        id: "Shake'ins",
        tags: ["Grafik & Print", "Brand & Logo", "Webdesign"],
        title: "Shake'ins",
        shortDescription: "Grunge Identität für eine Newcomer Rockband", 
        longDescription: "Ein Projekt voller Energie für die nächste Generation. Shake Ins ist eine Jugendband, die den rauen Sound des 90er und 2000er Grunge wiederaufleben lässt. Das Design fängt genau diesen Vibe ein. Jung, laut und unpoliert. Entstanden sind ein markantes Logo sowie eine passende Website und erstes Merchandise Design, das die Attitüde der Musik visuell tragbar macht.",
        mainImage: "/Photos/Shakeins/Hero.png",
        images: [
            "/Photos/Shakeins/obenl.png",
            "/Photos/Shakeins/obenr.png",
            "/Photos/Shakeins/Mobil.png",
            "/Photos/Shakeins/Mitte.png",
            "/Photos/Shakeins/Web.png"
        ],
        defaultImage: "/Photos/Shakeins/Idle.png",
        hoverImage: "/Photos/Shakeins/Hovercard.png",
           pdfLabel: "Brandlook & Screendesign",
        pdfLink:"/PDFs/Shakeins/Brandlook:Screendesign.pdf"
    },


];

export const wipProjects: Project[] = [
    { 
        id: "Martina",
        tags: ["WIP","Brand & Logo", "Webdesign", "Social Media & Marketing", "Grafik & Print" ],
        title: "Martina Nußbaum",
        link: "#",
        shortDescription: "Personal Branding für psychosoziale Beratung und Coaching",
        longDescription: "Für den Neustart in der Pension entstand ein Auftritt, der Professionalität mit familiärer Wärme verbindet. Martina Nußbaum berät in sensiblen Bereichen wie Eltern Kind Beziehungen und Krisenbewältigung. Das Design schafft Vertrauen und Barrierefreiheit. Neben Logo und Website liegt der Fokus auf SEO Optimierung sowie klassischer Printausstattung wie Flyern und Visitenkarten.",
        // Path adjusted: static/Photos/... -> /Photos/...
        mainImage: "/Photos/Martina/Mainimage.png", 
        defaultImage: "/Photos/Martina/Idle.png", 
        hoverImage: "/Photos/Martina/Hovercard.png",
        images: []
    },
    {
        id: "M...",
        tags: ["WIP","Webdesign", "Brand & Logo"],
        title: "M...",
        shortDescription: "Sneak Peak für ein alpines Hotelkonzept", 
        longDescription: "Ein erster Einblick in ein laufendes Projekt. Für ein exklusives alpines Hideaway entsteht derzeit ein komplettes Rebranding. Der Fokus liegt auf moderner Tradition und digitaler Sichtbarkeit. Mehr Details folgen...",
        mainImage: "/Photos/M/Web.png",
        images: [
        ],
        defaultImage: "/Photos/M/Idle.png",
        hoverImage: "/Photos/M/Hovercard.png",
    },
    {
        id: "KOS",
        tags: ["WIP","Webdesign", "Brand & Logo"],
        title: "KOS",
        shortDescription: "Screendesign und Branding für ein fiktives Design Hotel", 
        longDescription: "Für KOS, ein fiktives Designhotel mit nordischer Seele, habe ich das komplette Branding und Webdesign entwickelt. Die visuelle Identität lebt von einem bewussten, spannenden Kontrast: Das Herzstück bilden kraftvolle, tief in der Folklore verwurzelte Illustrationen von Waldtieren, die eine mystische Geschichte erzählen. Um diese visuelle Fülle auszubalancieren, bildet ein radikal klares Layout mit einer ruhigen, aber fetten und selbstbewussten Typografie den modernen Gegenpol. Diese Kombination schafft eine einzigartige Atmosphäre zwischen skandinavischem Minimalismus und lebendiger Tradition.",
        mainImage: "/Photos/KOS/Hero.png",
        images: [
        ],
        defaultImage: "/Photos/KOS/Idle.png",
        hoverImage: "/Photos/KOS/Hovercard.png",
    },
    {
        id: "Skischule Luis",
        tags: ["Short","Webdesign"],
        title: "Skischule Luis",
        link: "https://www.skischule-luis.at/",
        shortDescription: "Screendesign und User Experience für den alpinen Wintersport.", 
        longDescription: "Modernes Screendesign für den alpinen Wintersport. Fokus auf intuitive Nutzerführung und emotionale Bildsprache für ein optimales Buchungserlebnis. Umgesetzt im Rahmen meiner Anstellung bei der Agentur Werbezimmer.",
        mainImage: "/Photos/SkiLuis/Hero.png",
        images: [
        ],
        defaultImage: "/Photos/SkiLuis/Idle.png",
        hoverImage: "/Photos/SkiLuis/Hovercard.png",
         projectButtonLabel: "Zur Website",
        projectButtonLink: "https://www.skischule-luis.at/"
    },

    {
        id: "Posh Beauty",
        tags: ["Short","Webdesign"],
        title: "Posh Beauty",
        link: "https://www.posh-beauty.at/",
        shortDescription: "Minimalistisches High End Interface für den Beauty Sektor", 
        longDescription: "High End Screendesign für den Beauty Sektor. Eine digitale Ästhetik die Eleganz und Klarheit verbindet um die Exklusivität der Marke zu unterstreichen. Umgesetzt im Rahmen meiner Anstellung bei der Agentur Werbezimmer.",
        mainImage: "/Photos/Posh/Hero.png",
        images: [
        ],
        defaultImage: "/Photos/Posh/Idle.png",
        hoverImage: "/Photos/Posh/Hovercard.png",
          projectButtonLabel: "Zur Website",
        projectButtonLink: "https://www.posh-beauty.at/"
    },

    {
        id: "S...",
        tags: ["WIP","Webdesign","Brand & Logo","Grafik & Print"],
        title: "S...",
        shortDescription: "Visuelles Redesign für ein alpines Jahresevent", 
        longDescription: "Es handelt sich um das komplette Rebranding eines jährlichen Events. Ziel ist die Modernisierung des visuellen Auftritts, um Tradition und Eventkultur neu zu verbinden. Das Spektrum reicht von der Logo Entwicklung über den digitalen Auftritt bis hin zur umfassenden Print Ausstattung vor Ort.",
        mainImage: "/Photos/S/Hero.png",
        images: [
        ],
        defaultImage: "/Photos/S/Idle.png",
        hoverImage: "/Photos/S/Hovercard.png",
    },
    {
        id: "Bäckelar Wirt",
        tags: ["Short","Webdesign", "Brandi & Logo"],
        title: "Bäckelar Wirt",
        shortDescription: "Konzeptuelle Neuinterpretation einer Hotelmarke", 
        longDescription: "Meine persönliche Vision für das Jahr 2025. Ein konzeptionelles Redesign von Logo und Website für den Bäckelar Wirt.",
        mainImage: "/Photos/Backelar/Hero.png",
        images: [
        ],
        defaultImage: "/Photos/Backelar/Idle.png",
        hoverImage: "/Photos/Backelar/Hovercard.png",
        pdfLabel: "Brandlook & Screendesign",
        pdfLink:"/PDFs/Backelar/Brandlook_Screendesign.pdf"
    }
    
];