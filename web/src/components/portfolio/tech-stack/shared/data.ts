import type { TechTier } from "./types";

export const tiers: TechTier[] = [
    {
        id: "core",
        title: "Lo que más sé",
        note: "Lo elijo para construir de cero",
        opacity: 1,
        items: [
            { label: "Java 17+", abbr: "J", color: "#f89820" },
            { label: "Spring Boot", abbr: "SB", color: "#6db33f" },
            { label: "PostgreSQL", abbr: "PG", color: "#5b9bd5" },
            { label: "Next.js", abbr: "▲", color: "#a1a1aa" },
            { label: "NestJS", abbr: "N", color: "#e0234e" },
            { label: "TypeScript", abbr: "TS", color: "#3178c6" },
        ],
    },
    {
        id: "applied",
        title: "Lo que trabajé",
        note: "En proyectos reales, con la doc al lado",
        opacity: 0.92,
        items: [
            { label: "LangChain", abbr: "LC", color: "#10b981" },
            { label: "Django", abbr: "Dj", color: "#2f9e78" },
            { label: "Python", abbr: "Py", color: "#ffd43b" },
            { label: "MongoDB", abbr: "M", color: "#47a248" },
            { label: "C++", abbr: "C+", color: "#6295cb" },
            { label: "Docker", abbr: "D", color: "#2496ed" },
        ],
    },
    {
        id: "explored",
        title: "Lo que toqué",
        note: "Un par de veces; sé por dónde empezar",
        opacity: 0.72,
        items: [
            { label: "React Native", abbr: "RN", color: "#61dafb" },
            { label: "Firebase", abbr: "FB", color: "#ffca28" },
            { label: "C#", abbr: "C#", color: "#9b4f96" },
        ],
    },
];
