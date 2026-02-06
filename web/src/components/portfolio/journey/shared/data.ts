import { Experience, CareerHighlight } from "./types";

export const experiences: Experience[] = [
    {
        id: "agente-ia",
        period: "Marzo 2025 – Agosto 2025",
        title: "Desarrollador Full Stack & Scrum Master",
        organization: "Proyecto Agente IA para RRHH – UNICEN",
        description:
            "Participación en un tren de soluciones de 40 integrantes. Lideré la agilidad como Scrum Master y posteriormente desarrollé el agente inteligente (FastAPI + LangChain) y la visualización de métricas mediante grafos dinámicos (G6) en el frontend.",
        isCurrent: true,
    },
    {
        id: "propiedades",
        period: "Noviembre 2023 – Marzo 2024",
        title: "Administrador de Propiedades",
        organization: "Negocio Familiar (Propiedades Crespo - Cedrón)",
        description:
            "Administré íntegramente el ciclo de alquileres temporales, coordinando logística de mantenimiento y personal de limpieza. Ante la complejidad operativa, diseñé una infraestructura en Notion con bases de datos relacionales para automatizar el control de cobros, flujos de caja y calendarios de disponibilidad.",
    },
    {
        id: "briquetas",
        period: "Marzo 2023 – Noviembre 2023",
        title: "Desarrollador de Aplicación Móvil",
        organization: "Proyecto Briquetas Ecológicas – UNICEN",
        description:
            "Desarrollo de una herramienta para la sostenibilidad comunitaria. Responsable del frontend en React Native y lógica de servidor en Node.js/Express con persistencia en MySQL.",
    },
];

export const highlights: CareerHighlight[] = [
    {
        icon: "⊕",
        title: "Liderazgo Ágil (SAFe)",
        description:
            "Experiencia como Scrum Master en tren de soluciones de 40 integrantes, coordinando equipos multidisciplinarios en entornos SAFe.",
    },
    {
        icon: "🏠",
        title: "Gestión Inmobiliaria",
        description:
            "Administración integral de alquileres temporales, desde logística y mantenimiento hasta control financiero y disponibilidad.",
    },
    {
        icon: "🔗",
        title: "Sistemas de Información",
        description:
            "Diseño de infraestructuras en Notion con bases de datos relacionales para automatizar procesos operativos complejos.",
    },
];
