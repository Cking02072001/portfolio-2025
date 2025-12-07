interface Project {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
}
export interface ProjectsData {
    categories: string[];
    projects: Project[];
}

export const projectsData = {
    categories: ["Alle", "Webdesign", "Social Media", "Brand & Logo"],
    projects: [
        { 
            id: 1, 
            category: "Branding", 
            title: "Lumina Identity", 
            description: "A complete brand refresh focusing on light and clarity.", 
            image: "https://placehold.co/600x400/923C56/FFFFFF" 
        },
        { 
            id: 2, 
            category: "Digital", 
            title: "Apex Interface", 
            description: "UI/UX design for a high-frequency trading platform.", 
            image: "https://placehold.co/600x400/272727/FFFFFF" 
        },
        { 
            id: 3, 
            category: "Editorial", 
            title: "Vogue Spread", 
            description: "Art direction and layout for the September issue.", 
            image: "https://placehold.co/600x400/D3546D/FFFFFF" 
        },
        { 
            id: 4, 
            category: "Branding", 
            title: "Nordic Coffee", 
            description: "Packaging design inspired by minimal Scandinavian aesthetics.", 
            image: "https://placehold.co/600x400/4a4a4a/FFFFFF" 
        }
    ]
}