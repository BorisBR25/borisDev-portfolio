import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github } from "lucide-react";

export const socialNetworks = [
    
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://linkedin.com/in/boris-barrios-b19b10275",
    },
    
    {
        id: 2,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/BorisBR25",
    },
   
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "About me",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Projects",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 4,
        title: "Contact",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Freelancer",
        subtitle: "E-commerce Microservices",
        description: "Diseñé y desarrollé una plataforma de e-commerce basada en una arquitectura de microservicios. El proyecto incluyó módulos independientes para la gestión de productos, usuarios, órdenes y pagos, integrando Stripe para el procesamiento de transacciones. Utilicé TypeScript y NestJS para la lógica del backend, NATS como sistema de mensajería, PostgreSQL y MongoDB para las bases de datos, y desplegué los servicios en un entorno escalable con Docker y Kubernetes, utilizando Google Cloud para la infraestructura.",
        date: "Oct 2024",
    },
    {
        id: 2,
        title: "Freelancer",
        subtitle: "Next Level Labs",
        description: "Desarrollé landing page para laboratorio norteamericano con React-Vite y Tailwind CSS. Apliqué buenas practicas de desarrollo web. Implementé SEO y optimización de contenido. Utilicé firebase para hosting y godaddy para dominio.",
        date: "Feb 2024",
    },
    {
        id: 3,
        title: "Prácticas Grado",
        subtitle: "Oportuna.red",
        description: "Desarrollé API RESTful con TypeScript y Node.js. Construí e implementé contenedores Docker. Aproveché los servicios de AWS (por ejemplo, EC2,S3) para alojar y automatizar aplicaciones basadas en la nube. Diseñé e implementé interfaces de usuario conReact. Colaboré en equipos ágiles para integrar e implementar continuamente nuevas funciones.",
        date: "Jun 2023",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 2,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 3,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
  
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web thenextlevellabs",
        image: "/imageWeb.png",
        urlGithub: "https://github.com/BorisBR25/Next_Level_labs",
        urlDemo: "https://thenextlevellabs.com/",
    },
    {
        id: 2,
        title: "E-commerce API Microservices",
        image: "/imageSwagger.png",
        urlGithub: "https://github.com/orgs/Nest-Microservices-devBoris/repositories",
        urlDemo: "#!",
    },
    
];

