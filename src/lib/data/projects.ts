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
        shortDescription: "Personal Branding, Logo und Webdesign für einen Software-Entwickler",
        longDescription: "Kompetenz braucht ein Gesicht. Sascha schreibt Code, den niemand sieht. Meine Aufgabe war es, das unsichtbar Gute sichtbar zu machen. Ein reduziertes Branding, das für sich spricht. Die Schlange als Maskottchen war meine Idee. Ich finde sie nach wie vor sehr gut.",
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
        shortDescription: "Webdesign, In House Marketing und Print für ein alpines Hotel",
        longDescription: "Der Mandarfner Hof ist kein Projekt, das ich von außen betrachte. Als Teil des Teams gestalte ich alles, was Gäste sehen bevor sie ankommen und nachdem sie weg sind. Social Media, Broschüren, Newsletter, Website. Das Webdesign entstand in Zusammenarbeit mit © Werbezimmer. Der rote Faden zieht sich durch jeden Touchpoint.",
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
        shortDescription: "Branding und Webdesign für eine fiktive Radiostation mit Nostalgie-Faktor",
        longDescription: "30er Jahre Radio trifft 50er Jahre TV trifft heute. Vox & Arc war ein Experiment in visueller Zeitreise. Das Blog-Modul im Zeitungslayout war das Herzstück. Weil manche Ideen zu gut für die Gegenwart sind.",
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
        shortDescription: "Whisky Branding zwischen Tirol und den schottischen Highlands",
        longDescription: "Zwei Welten, die eigentlich nichts miteinander zu tun haben. Und genau deshalb hat es funktioniert. Tiroler Destillerie trifft schottisches Erbe. Maxi, unser West Highland Terrier aus Kindheitstagen, wurde zum Maskottchen. Das war keine Designentscheidung. Das war einfach klar.",
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
        shortDescription: "Schmuck-Branding mit Fokus auf Natur und mentale Gesundheit",
        longDescription: "MIKIT hat als Studienprojekt angefangen. Es ist zu etwas anderem geworden. Schmuckstücke aus Naturelementen, die mehr sein wollen als Accessoires. Das Konzept geht vom Produkt über das Packaging bis zum Social Media Feed. Jedes Detail denkt mit.",
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
        longDescription: "Weniger ist hier kein Kompromiss. Nudeiful steht für Lidschatten, die man nachfüllt statt wegwirft. Das Design denkt das konsequent zu Ende. Reduziert, klar, hochwertig. Inklusive Storyboard für einen YouTube-Spot, weil ein gutes Konzept mehr als eine Oberfläche braucht.",
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
        shortDescription: "Branding für eine fiktive Igelzucht mit Herz",
        longDescription: "Igel sind kein Kinderkram. Das war mein Ausgangspunkt. Herzstachel züchtet Afrikanische Weißbauchigel ethisch und mit Sorgfalt. Das Branding sollte genau das ausstrahlen. Niedlich ohne niedlich zu sein. Mit Logo, Website und einem Newsletter, der werdende Igeleltern begleitet.",
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
        shortDescription: "Grunge-Identität für eine Newcomer Rockband",
        longDescription: "Jung, laut, unpoliert. Shake'ins lebt von genau dieser Energie und das Design auch. 90er und 2000er Grunge als visuelle Basis. Entstanden sind Logo, Website und erstes Merchandise. Für eine Band, die gerade anfängt aber schon genau weiß wie sie klingt.",
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
        longDescription: "Martina Nußbaum berät Menschen in sensiblen Lebensphasen. Das Design durfte nicht laut sein. Es sollte Vertrauen schaffen, bevor das erste Gespräch stattfindet. Professionell und warm. Mit Logo, Website, SEO und Printausstattung, die das alles trägt.",
        // Path adjusted: static/Photos/... -> /Photos/...
        mainImage: "/Photos/Martina/Mainimage.jpg",
        defaultImage: "/Photos/Martina/Idle.jpg",
        hoverImage: "/Photos/Martina/Hovercard.jpg",
        images: []
    },


];

export const wipProjects: Project[] = [
    {
        id: "Anger Alm",
        tags: ["Projects", "Webdesign", "Brand & Logo"],
        title: "Anger Alm",
        shortDescription: "Komplettes Branddesign mit Identity, CD, Website und Animationen",
        longDescription: "Manche Orte verdienen mehr als ein Logo. Die Anger Alm bekommt ein vollständiges Erscheinungsbild. Von der Markenidentität über das Corporate Design bis zur Website und animierten Elementen, die das Ganze zum Leben bringen. Alles aus einem Guss. Mehr folgt.",
        mainImage: "/Photos/Anger Alm/Hero.jpg",
        images: [],
        defaultImage: "/Photos/Anger Alm/Card-Idle.jpg",
        hoverImage: "/Photos/Anger Alm/Card-Hover.jpg"
    },
    {
        id: "Alpin Camping",
        tags: ["Projects", "Webdesign", "Social Media & Marketing"],
        title: "Alpin Camping Kaunertal",
        shortDescription: "Screendesign und Newsletter für ein alpines Camping-Areal",
        longDescription: "Vier Unterseiten, eine klare Struktur und ein Newsletter-System, das mitdenkt. Für das Alpin Camping Kaunertal habe ich Screendesign und Menüarchitektur gestaltet. Entstanden 2026 bei © Werbezimmer.",
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
        shortDescription: "High End Interface für den Beauty-Sektor",
        longDescription: "Schönheit auf dem Bildschirm braucht Präzision. Für Posh Beauty entstand ein Interface, das Exklusivität nicht behauptet sondern zeigt. Klar, elegant, ohne Kompromiss. Entstanden 2025 bei © Werbezimmer.",
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
        shortDescription: "Screendesign und UX für alpinen Wintersport",
        longDescription: "Wer in Tirol aufwächst, kennt das Gefühl. Skifahren soll leicht sein und das Buchen auch. Für die Skischule Luis habe ich ein Interface gestaltet, das genau das ermöglicht. Intuitive Nutzerführung, starke Bildsprache. Entstanden 2024 bei © Werbezimmer.",
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
        longDescription: "Mehr verrate ich noch nicht. Ein exklusives alpines Hideaway bekommt ein komplett neues Erscheinungsbild. Moderne Tradition trifft digitale Sichtbarkeit. Details folgen.",
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
        shortDescription: "Branding und Webdesign für ein fiktives Designhotel",
        longDescription: "KOS hat eine nordische Seele und Waldtiere im Herzen. Folklore-Illustrationen als Herzstück, radikal klares Layout als Gegenpol. Die Spannung zwischen beiden macht die Marke aus. Skandinavischer Minimalismus trifft lebendige Tradition.",
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
        longDescription: "Ein Event mit Geschichte bekommt ein neues Gesicht. Vom Logo über den digitalen Auftritt bis zur Print-Ausstattung vor Ort. Tradition und Eventkultur neu gedacht. Mehr kommt.",
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
        shortDescription: "Konzeptionelles Redesign für ein Tiroler Hotel",
        longDescription: "Das ist meine persönliche Vision für den Bäckelar Wirt. Ein Rebranding von Logo und Website, das zeigt wie ich mir die Marke vorstelle. Nicht beauftragt. Einfach gemacht, weil ich es wollte.",
        mainImage: "/Photos/Backelar/Hero.jpg",
        images: [
        ],
        defaultImage: "/Photos/Backelar/Idle.jpg",
        hoverImage: "/Photos/Backelar/Hovercard.jpg",
        pdfLabel: "Brandlook & Screendesign",
        pdfLink: "/PDFs/Backelar/Brandlook_Screendesign.pdf"
    },
];