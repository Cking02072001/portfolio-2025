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
        shortDescription: "Eine komplette Brandidentity für Sascha Lorenz.", 
        longDescription: "Hier kommt noch was",
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
        hoverImage: "/Photos/Sascha/Hovercard.png" 
    },
    {
        id: "Mandarfner Hof",
        tags: ["Webdesign", "Social Media & Marketing","Grafik & Print"],
        title: "Mandarfner Hof",
        link: "https://www.mandarfnerhof.at/",
        shortDescription: "Webdesign (c)Werbezimmer Christian Larcher & Celina Kammerhofer, Social Media Auftritt, Content Creation, SEO Verbesserungen, Newsletter programmiert, In House Print Projekte, etc.", 
        longDescription: "Apex Interface demanded a rigorous approach to user experience design, prioritizing speed and information density without sacrificing clarity. We conducted extensive user research with traders to understand their workflows, resulting in a dashboard that reduces cognitive load while providing real-time analytics. The dark mode interface was carefully calibrated to reduce eye strain during long trading sessions.",
        mainImage: "/Photos/Mandarfnerhof/Main.png",
        images: [
            "/Photos/Mandarfnerhof/Card.png",
            "/Photos/Mandarfnerhof/Social.png",
            "/Photos/Mandarfnerhof/Web.png",
            "/Photos/Mandarfnerhof/Newsletter.png",
            "/Photos/Mandarfnerhof/Mobil.png"
        ],
        defaultImage: "/Photos/Mandarfnerhof/Idle.png",
        hoverImage: "/Photos/Mandarfnerhof/Hovercard.png"
    },
    { 
        id: "vox-and-arc", 
        tags: ["Webdesign", "Branding & Logo", "Grafik & Print"], 
        title: "VOX & ARC", 
        shortDescription: "Art direction und Konzeptentwicklung für ein 30er Radio und 50er TV inspiriertes Unternehmen", 
        longDescription: "For the September issue, we aimed to capture the ephemeral nature of autumn light. The art direction focused on organic textures and a warm, earthy color palette. The layout breaks the grid to create a sense of movement and spontaneity, mirroring the changing seasons. This digital adaptation for social media ensured the editorial content remained engaging and accessible across all platforms.",
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
        projectButtonLabel: "View PDF",
        projectButtonLink: "www.example.com"
    },
    {
        id: "nordic-coffee",
        tags: ["Brand & Logo", "Grafik & Print"],
        title: "Nordic Coffee",
        link: "/projects?id=nordic-coffee",
        shortDescription: "Packaging design inspired by minimal Scandinavian aesthetics.", 
        longDescription: "Nordic Coffee's packaging reflects the purity and simplicity of its origin. We utilized sustainable materials and a minimalist design language to communicate the brand's commitment to quality and the environment. The typography is clean and understated, allowing the product's quality to speak for itself. Each roast is distinguished by a subtle color accent, creating a cohesive yet distinct product line.",
        mainImage: "https://placehold.co/600x400/4a4a4a/FFFFFF",
        images: [
            "https://placehold.co/600x400?text=Nordic+1",
            "https://placehold.co/400x600?text=Nordic+2",
            "https://placehold.co/400x400?text=Nordic+3",
            "https://placehold.co/600x300?text=Nordic+4",
            "https://placehold.co/300x300?text=Nordic+5",
            "https://placehold.co/600x600?text=Nordic+6",
            "https://placehold.co/600x400?text=Nordic+7"
        ],
        defaultImage: "https://placehold.co/600x400/4a4a4a/FFFFFF",
        hoverImage: "https://placehold.co/600x400/FFFFFF/4a4a4a?text=Nordic+Hover"
    }
];

export const wipProjects: Project[] = [
    { 
        id: "Martina",
        tags: ["WIP",],
        title: "Martina Nußbaum",
        link: "#",
        shortDescription: "Early stage conceptual exploration.",
        longDescription: "Initial sketches and conceptual development for project Alpha.",
        // Path adjusted: static/Photos/... -> /Photos/...
        mainImage: "/Photos/Martina/Mainimage.png", 
        defaultImage: "/Photos/Martina/Idle.png", 
        hoverImage: "/Photos/Martina/Hovercard.png",
        images: []
    },
    { 
        id: "WestAmber",
        tags: ["WIP"],
        title: "West Amber Whisky",
        link: "#",
        shortDescription: "High-fidelity interactive prototype.",
        longDescription: "Interactive mockups testing animation and transitions.",
        mainImage: "/Photos/West Amber/Websitebar.png", 
        defaultImage: "/Photos/West Amber/Idle.png",
        hoverImage: "/Photos/West Amber/Hovercard.png",
        images: [
            "/Photos/West Amber/Flasche.png",
            "/Photos/West Amber/Glas.png",
            "/Photos/West Amber/Websitelayout.png",
            "/Photos/West Amber/Mac.png",
            "/Photos/West Amber/Glas-Flasche.png"]
    },
    { 
        id: "wireframes-beta",
        tags: ["WIP", "UX"],
        title: "Wireframes Beta",
        link: "#",
        shortDescription: "Structural layout and flow design.",
        longDescription: "Wireframing phase focusing on user journey and information architecture.",
        mainImage: "https://placehold.co/400x500/272727/FFFFFF", 
        defaultImage: "https://placehold.co/400x500/272727/FFFFFF",
        hoverImage: "https://placehold.co/400x500/FFFFFF/272727",
        images: []
    },
    { 
        id: "sketch-delta",
        tags: ["WIP", "Illustration"],
        title: "Sketch Delta",
        link: "#",
        shortDescription: "Hand-drawn assets and illustrations.",
        longDescription: "Developing a custom illustration style for the Delta campaign.",
        mainImage: "https://placehold.co/400x500/4a4a4a/FFFFFF", 
        defaultImage: "https://placehold.co/400x500/4a4a4a/FFFFFF",
        hoverImage: "https://placehold.co/400x500/FFFFFF/4a4a4a",
        images: []
    },
    { 
        id: "render-epsilon",
        tags: ["WIP", "3D"],
        title: "Render Epsilon",
        link: "#",
        shortDescription: "3D visualisations and texture testing.",
        longDescription: "Rendering tests for the Epsilon product launch.",
        mainImage: "https://placehold.co/400x500/e2e2e2/272727", 
        defaultImage: "https://placehold.co/400x500/e2e2e2/272727",
        hoverImage: "https://placehold.co/400x500/272727/e2e2e2",
        images: []
    }
];