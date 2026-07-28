import { Home, Users, Workflow } from "lucide-react";
import { Experience, CareerHighlight } from "./types";

export const experiences: Experience[] = [
    {
        id: "agente-ia",
        years: "2025",
        months: "Marzo — Agosto",
        title: "Desarrollador Full Stack & Scrum Master",
        organization: "Proyecto Agente IA para RRHH – UNICEN",
        description:
            "Participación en un tren de soluciones de 40 integrantes Aplicando la Metodologia SAFe. Lideré la agilidad como Scrum Master y posteriormente colabore en el desarrollo del agente inteligente (FastAPI + LangChain) y la visualización de métricas mediante grafos dinámicos (G6) en el frontend.",
        tags: ["SAFe", "FastAPI", "LangChain", "React", "G6"],
        isCurrent: true,
    },
    {
        id: "propiedades",
        years: "2023 — 2024",
        months: "Noviembre — Marzo",
        title: "Administrador de Propiedades",
        organization: "Negocio Familiar (Propiedades Crespo - Cedrón)",
        description:
            "Administré íntegramente el ciclo de alquileres temporales, coordinando logística de mantenimiento y personal de limpieza. Ante la complejidad operativa, diseñé una infraestructura en Notion con bases de datos relacionales para automatizar el control de cobros, flujos de caja y calendarios de disponibilidad.",
        tags: ["Operaciones", "Notion", "Bases relacionales"],
    },
    {
        id: "briquetas",
        years: "2023",
        months: "Marzo — Noviembre",
        title: "Desarrollador de Aplicación Móvil",
        organization: "Proyecto Briquetas Ecológicas – UNICEN",
        description:
            "Desarrollo de una herramienta para la sostenibilidad comunitaria. Responsable del frontend en React Native y lógica de servidor en Node.js/Express con persistencia en MySQL.",
        tags: ["React Native", "Node.js", "Express", "MySQL"],
    },
];

export const highlights: CareerHighlight[] = [
    {
        icon: Users,
        title: "Liderazgo ágil (SAFe)",
        description:
            "Scrum Master en un tren de soluciones de 40 integrantes, coordinando equipos multidisciplinarios.",
    },
    {
        icon: Home,
        title: "Gestión inmobiliaria",
        description:
            "Administración integral de alquileres temporales: logística, mantenimiento, cobros y disponibilidad.",
    },
    {
        icon: Workflow,
        title: "Sistemas de información",
        description:
            "Infraestructuras en Notion con bases relacionales para automatizar procesos operativos complejos.",
    },
];
