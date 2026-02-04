"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, ExternalLink, CheckCircle } from "lucide-react";

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    architecturalDecisions: string;
    databaseModel: string;
    systemChallenges: string;
}

const projects: Project[] = [
    {
        id: "cache",
        title: "Servicio de Caché Distribuido",
        description:
            "Caché distribuido de alto rendimiento con garantías de consistencia fuerte.",
        technologies: ["Java", "Spring Boot", "Hazelcast"],
        architecturalDecisions:
            "Implementación de patrón Near-Cache para reducir saltos de red en claves frecuentes, combinado con política de escritura asíncrona (write-behind).",
        databaseModel:
            "Enfoque híbrido utilizando Redis para sesiones volátiles y tablas PostgreSQL persistentes para estrategias de calentamiento de caché.",
        systemChallenges:
            "Manejo de estampidas de caché durante ciclos de reinicio del servicio.",
    },
    {
        id: "auth",
        title: "Servicio de Autenticación Centralizado",
        description:
            "Proveedor OIDC con soporte para flujos de autenticación multifactor.",
        technologies: ["NestJS", "OAuth2", "TypeORM"],
        architecturalDecisions:
            "Microservicio diseñado con Arquitectura Hexagonal para desacoplar la lógica core de los adaptadores OIDC y drivers de base de datos.",
        databaseModel:
            "Tablas de Rol/Permiso auto-referenciales con consultas recursivas para resolución granular de ACL.",
        systemChallenges:
            "Propagación de revocación de tokens a través de servicios distribuidos.",
    },
    {
        id: "monitor",
        title: "Monitor de Salud de Infraestructura",
        description:
            "Detección de anomalías en tiempo real para flota de microservicios.",
        technologies: ["Java", "Kafka", "TimescaleDB"],
        architecturalDecisions:
            "Arquitectura orientada a eventos buferizando métricas en Kafka antes de inserción por lotes en TimescaleDB para manejar presión de escritura.",
        databaseModel:
            "Diseño de hipertabla con particionado temporal para optimizar velocidad de consulta en métricas recientes.",
        systemChallenges:
            "Ingesta de 1M+ puntos de métrica por segundo sin contrapresión.",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="mx-auto max-w-360 w-full px-4 lg:px-12">
                <div className="flex flex-col gap-8">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#a1123b]" />
                        <p className="text-primary text-sm font-bold tracking-widest uppercase">
                            En Producción
                        </p>
                    </div>

                    {/* Featured Project Card */}
                    <Card className="overflow-hidden shadow-2xl border-border">
                        <div className="flex flex-col lg:flex-row">
                            <div className="p-8 lg:p-12 flex flex-col justify-center flex-1 gap-6 border-b lg:border-b-0 lg:border-r border-border">
                                <CardHeader className="p-0">
                                    <CardTitle className="text-3xl">
                                        Arquitectura de Alquiler Empresarial
                                    </CardTitle>
                                    <CardDescription className="text-base leading-relaxed">
                                        Arquitectura completa de migración de
                                        Monolito a Microservicios. Incluye
                                        modelado JPA complejo con herencia TPT,
                                        reservas orientadas a eventos y
                                        procesamiento de pagos de alta
                                        concurrencia.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-0 flex flex-col gap-4">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-3 text-muted-foreground">
                                            <CheckCircle className="w-4 h-4 text-primary" />
                                            <span className="text-sm">
                                                Herencia TPT para Modelos de
                                                Propiedad
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 text-muted-foreground">
                                            <CheckCircle className="w-4 h-4 text-primary" />
                                            <span className="text-sm">
                                                Relaciones JPA Multi-Tenant
                                                Complejas
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 text-muted-foreground">
                                            <CheckCircle className="w-4 h-4 text-primary" />
                                            <span className="text-sm">
                                                Integración con Spring Cloud
                                                Gateway
                                            </span>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="flex gap-3">
                                        <Button size="lg">
                                            <ExternalLink className="w-4 h-4" />
                                            Ver Arquitectura
                                        </Button>
                                        <Button variant="secondary" size="lg">
                                            <Github className="w-4 h-4" />
                                            Código Fuente
                                        </Button>
                                    </div>
                                </CardContent>
                            </div>

                            {/* JSON Code Block */}
                            <div className="flex-1 bg-[#111] p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 grid-bg opacity-10" />
                                <div className="w-full max-w-md rounded-lg bg-[#0d0d0d] border border-border font-mono text-sm shadow-2xl z-10">
                                    <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
                                        <span className="text-xs text-green-500 font-bold">
                                            POST /api/v1/orchestration/rentals
                                        </span>
                                        <Badge
                                            variant="outline"
                                            className="text-xs"
                                        >
                                            201 Created
                                        </Badge>
                                    </div>
                                    <div className="p-6 text-gray-300">
                                        <pre>
                                            <code>{`{
  "transaction_id": "tx_9981_saga_alpha",
  "orchestration": {
    "service": "rental-core",
    "strategy": "SAGA_PATTERN",
    "latency_ms": 14
  },
  "entity_graph": {
    "property": {
        "id": "prop_lux_01",
        "polymorphism": "TABLE_PER_CLASS"
    },
    "billing": {
        "status": "CAPTURED",
        "ledger": "double_entry_v9"
    }
  }
}`}</code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Project Accordions */}
                    <Accordion
                        type="single"
                        collapsible
                        className="flex flex-col gap-4"
                    >
                        {projects.map((project) => (
                            <AccordionItem
                                key={project.id}
                                value={project.id}
                                className="rounded-xl bg-card border border-border overflow-hidden data-[state=open]:border-primary/50 transition-colors"
                            >
                                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary data-[state=open]:bg-secondary">
                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full pr-4">
                                        <div className="flex flex-col gap-1 text-left">
                                            <span className="text-xl font-bold group-hover:text-primary transition-colors">
                                                {project.title}
                                            </span>
                                            <span className="text-muted-foreground text-sm">
                                                {project.description}
                                            </span>
                                        </div>
                                        <div className="flex gap-2 flex-wrap">
                                            {project.technologies.map(
                                                (tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="outline"
                                                        className="font-mono text-xs"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-6 pt-2 border-t border-border">
                                    <div className="grid md:grid-cols-3 gap-8 mt-4">
                                        <div>
                                            <h5 className="text-xs font-bold mb-2 uppercase tracking-wide text-muted-foreground">
                                                Decisiones Arquitectónicas
                                            </h5>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {project.architecturalDecisions}
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="text-xs font-bold mb-2 uppercase tracking-wide text-muted-foreground">
                                                Modelo de Base de Datos
                                            </h5>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {project.databaseModel}
                                            </p>
                                        </div>
                                        <div className="flex items-start flex-col">
                                            <h5 className="text-xs font-bold mb-2 uppercase tracking-wide text-muted-foreground">
                                                Desafíos del Sistema
                                            </h5>
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                                {project.systemChallenges}
                                            </p>
                                            <Button
                                                variant="secondary"
                                                className="w-full"
                                            >
                                                <Github className="w-4 h-4" />
                                                Ver Repositorio
                                            </Button>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
