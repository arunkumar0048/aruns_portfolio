import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "ARUN KUMAR",
    },
    social: {
        github: "arunkumar0048",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "Machine Learning & Deep Learning using TensorFlow and Aws Sagemaker",
            description: "Built and trained models using TensorFlow and PyTorch for computer vision, NLP, and multimodal tasks, leveraging CNNs, RNNs, LSTMs, and Transformers architectures.",
            image: "/projects/project-1.webp",
            technologies: ["Python", "TensorFlow", "Pytorch", "AWS Sagemaker", "Hugging Face"],
            github: "#",
        },
        {
            id: 2,
            title: "AI Model Creation, Fine-Tuning & Optimization",
            description: "Fine-tuned large language models (LLMs) using Unsloth for efficient adaptation on domain-specific datasets, reducing training time by up to 40% compared to standard Hugging Face pipelines..",
            image: "/projects/project-2.webp",
            technologies: ["Python", "TensorFlow", "Pytorch", "AWS Sagemaker", "Hugging Face", "Unsloth", "Dify"],
            github: "#",
        },
        {
            id: 3,
            title: "Build a E-commerce Website for Supply Chain Management",
            description: "Build a robust e-commerce platform tailored for supply chain management to streamline procurement, inventory, and order fulfillment across all partners.",
            image: "/projects/project-3.webp",
            technologies: ["Django", "Odoo", "Typescript", "PostgreSQL", "AWS", "Docker"],
            github: "#",
        },
        {
            id: 4,
            title: "Payment Gateway Integration with Odoo",
            description: "Seamlessly integrate secure and reliable payment gateways with Odoo to automate online transactions and improve customer checkout experiences.",
            image: "/projects/project-4.webp",
            technologies: ["Odoo", "Typescript", "PostgreSQL", "Odoo Sh", "Docker"],
            github: "#",
        },
        {
            id: 5,
            title: "Developed Backend ERP software for Hotel Booking system",
            description: "• Developed database schemas, data models, and API endpoints to support the hotel booking functionalities and implemented backend functionalities using Python, Odoo.",
            image: "/projects/project-5.webp",
            technologies: ["Python", "Odoo", "Typescript", "PostgreSQL", "Docker"],
            github: "#",
            demo: "https://www.blueoceanholidayhomes.com/"
        }
 
    ],
    skills: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "React", level: "Advanced"},
                { name: "Ant Design Pro", level: "Expert"},
                { name: "Umi JS", level: "Advanced"},
                { name: "HTML", level: "Expert" },
                { name: "JavaScript", level: "Advanced" },
                { name: "CSS", level: "Advanced" }
            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Python", level: "Advanced", hot: true },
                { name: "FastAPI", level: "Advanced" , hot: true},
                { name: "Postgresql", level: "Advanced" },
            ]
        },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "Docker",  level: "Expert", hot: true },
                { name: "Postman", level: "Advanced" },
                { name: "Service Now", level: "Advanced" },
                { name: "Git", level: "Advanced" }
            ]
        }
    ],
    experiences: [
        {
            position: "Senior AI Engineer",
            company: "AGOOGROUP PTE LTD",
            period: "AUG 2025 - Present",
            location: "Singapore",
            description: "Developing AI Models, Fine-Tuning Pre Trained Models & Optimization.",
            responsibilities: [
                "Built and trained models using TensorFlow and PyTorch for computer vision.",
                "Customized Hugging Face Transformers models (e.g., Llama, Falcon, Mistral) for NLP tasks.",
                "Deployed fine-tuned models via FastAPI and Dockerized microservices, integrating with Hugging Face",
                "Automated training pipelines using Python, Bash scripts, and Docker Compose, enabling scalable multi-GPU fine-tuning"
            ],
            technologies: ["Pytorch", "TensorFlow", "AWS Sagemaker", "Hugging Face", "Unsloth", "Dify", "TypeScript"]
        },
        {
            position: "Full Stack Developer/Systems Engineer",
            company: "Tata Consultancy Pvt Ltd",
            period: "2023 - 2025",
            location: "India",
            description: "Development and Automation of Supply Chain Management software for Sainsbury’s.",
            responsibilities: [
                "Designed and developed AI-powered agents and chatbots to automated web-based solution for data validation.",
                "Built an OCR tool using Pytesseract (Python) to extract invoice details from scanned bills and store them directly into structured database.",
                "Trained TensorFlow-based embedding models for efficient text vectorization.",
                "Developed custom Python pipelines for data ingestion, preprocessing, and embedding generation."
            ],
            technologies: ["Django", "TypeScript", "Postgresql", "LLM", "FastAPI", "Docker", "Unix"]
        },
        {
            position: "Senior Odoo Developer",
            company: "Biztech Computers(Odoo Silver Partner in Bahrain)",
            period: "2023 - 2025",
            location: "Freelancer",
            description: "Development of E-commerce Website using Odoo.",
            responsibilities: [
                "Custom website design with Odoo Website Builder or a theme.",
                "Real-time inventory tracking with automatic stock updates",
                "Product catalog management: categories, variants, attributes, pricing rules, and images.",
                "SEO optimization: meta tags, URLs, schema markup, image optimization, and sitema."
            ],
            technologies: ["Odoo", "TypeScript", "Postgresql", "Odoo SH", "Docker", "Linux", "Linux"]
        },
        {
            position: "Python/Odoo Developer",
            company: "Akira Software Solutions Pvt Ltd",
            period: "2021 - 2023",
            location: "India",
            description: "Development of Odoo Project for Education Domain.",
            responsibilities: [
                "Designed and developed apps (new module development and customisation).",
                "Microsoft Azure AD integration with Odoo using Python",
                "Conduct thorough testing of authentication and authorization flows under different scenarios.",
                "Integrated third-party APIs for payment gateways."
            ],
            technologies: ["Odoo", "TypeScript", "Postgresql", "RESTAPI", "Docker", "Linux", "Github"]
        }
    ],
    contactInfo: [
     
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@arunkumar",
            link: `https://github.com/arunkumar0048`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "arunkumarp0033@gmail.com",
            link: "mailto:arunkumarp0033@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Singapore",
            link: null
        }
    ]
}