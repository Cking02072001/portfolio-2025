export interface Project {
    id: string;
    tags: string[];
    title: string;
    link: string;
    shortDescription: string;
    longDescription: string;
    mainImage: string;
    images: string[];
    hoverImage?: string;
}

export interface ProjectsData {
    categories: string[];
    projects: Project[];
}

export const categories = ["Alle", "Webdesign", "Social Media", "Brand & Logo"];

export const projects: Project[] = [
        { 
            id: "lumina-identity", 
            tags: ["Brand & Logo", "Branding"], 
            title: "Lumina Identity", 
            link: "/project?id=lumina-identity",
            shortDescription: "A complete brand refresh focusing on light and clarity.", 
            longDescription: "Lumina Identity represents a paradigm shift in how we perceive brand clarity. By stripping away the non-essential, we revealed the core luminosity of the brand's purpose. The project involved a complete overhaul of visual assets, including a dynamic logo system that adapts to light conditions, a monochromatic color palette with high-contrast accents, and a typographic approach that balances modernity with readability.",
            mainImage: "https://placehold.co/600x400/923C56/FFFFFF",
            images: [
                "https://placehold.co/600x400/923C56/FFFFFF?text=Detail+1",
                "https://placehold.co/400x600/272727/FFFFFF?text=Detail+2",
                "https://placehold.co/400x400/D3546D/FFFFFF?text=Detail+3",
                "https://placehold.co/600x300/4a4a4a/FFFFFF?text=Detail+4",
                "https://placehold.co/300x300/e2e2e2/272727?text=Detail+5",
                "https://placehold.co/600x600/923C56/FFFFFF?text=Detail+6",
                "https://placehold.co/600x400/272727/FFFFFF?text=Detail+7"
            ],
        },
        { 
            id: "apex-interface", 
            tags: ["Webdesign", "Digital"], 
            title: "Apex Interface", 
            link: "/project?id=apex-interface",
            shortDescription: "UI/UX design for a high-frequency trading platform.", 
            longDescription: "Apex Interface demanded a rigorous approach to user experience design, prioritizing speed and information density without sacrificing clarity. We conducted extensive user research with traders to understand their workflows, resulting in a dashboard that reduces cognitive load while providing real-time analytics. The dark mode interface was carefully calibrated to reduce eye strain during long trading sessions.",
            mainImage: "https://placehold.co/600x400/272727/FFFFFF",
            images: [
                "https://placehold.co/600x400?text=Apex+1",
                "https://placehold.co/400x600?text=Apex+2",
                "https://placehold.co/400x400?text=Apex+3",
                "https://placehold.co/600x300?text=Apex+4",
                "https://placehold.co/300x300?text=Apex+5",
                "https://placehold.co/600x600?text=Apex+6",
                "https://placehold.co/600x400?text=Apex+7"
            ]
        },
        { 
            id: "vogue-spread", 
            tags: ["Social Media", "Editorial"], 
            title: "Vogue Spread", 
            link: "/project?id=vogue-spread",
            shortDescription: "Art direction and layout for the September issue.", 
            longDescription: "For the September issue, we aimed to capture the ephemeral nature of autumn light. The art direction focused on organic textures and a warm, earthy color palette. The layout breaks the grid to create a sense of movement and spontaneity, mirroring the changing seasons. This digital adaptation for social media ensured the editorial content remained engaging and accessible across all platforms.",
            mainImage: "https://placehold.co/600x400/D3546D/FFFFFF",
            images: [
                "https://placehold.co/600x400?text=Vogue+1",
                "https://placehold.co/400x600?text=Vogue+2",
                "https://placehold.co/400x400?text=Vogue+3",
                "https://placehold.co/600x300?text=Vogue+4",
                "https://placehold.co/300x300?text=Vogue+5",
                "https://placehold.co/600x600?text=Vogue+6",
                "https://placehold.co/600x400?text=Vogue+7"
            ]
        },
        { 
            id: "nordic-coffee", 
            tags: ["Brand & Logo", "Packaging"], 
            title: "Nordic Coffee", 
            link: "/project?id=nordic-coffee",
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
            ]
        }
    ];

export const wipProjects: Project[] = [
    { 
        id: "concept-alpha",
        tags: ["WIP", "Concept"],
        title: "Concept Alpha",
        link: "#",
        shortDescription: "Early stage conceptual exploration.",
        longDescription: "Initial sketches and conceptual development for project Alpha.",
        mainImage: "https://placehold.co/400x500/923C56/FFFFFF", 
        hoverImage: "https://placehold.co/400x500/FFFFFF/923C56",
        images: []
    },
    { 
        id: "wireframes-beta",
        tags: ["WIP", "UX"],
        title: "Wireframes Beta",
        link: "#",
        shortDescription: "Structural layout and flow design.",
        longDescription: "Wireframing phase focusing on user journey and information architecture.",
        mainImage: "https://placehold.co/400x500/272727/FFFFFF", 
        hoverImage: "https://placehold.co/400x500/FFFFFF/272727",
        images: []
    },
    { 
        id: "prototype-gamma",
        tags: ["WIP", "Prototyping"],
        title: "Prototype Gamma",
        link: "#",
        shortDescription: "High-fidelity interactive prototype.",
        longDescription: "Interactive mockups testing animation and transitions.",
        mainImage: "https://placehold.co/400x500/D3546D/FFFFFF", 
        hoverImage: "https://placehold.co/400x500/FFFFFF/D3546D",
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
        hoverImage: "https://placehold.co/400x500/272727/e2e2e2",
        images: []
    }
];