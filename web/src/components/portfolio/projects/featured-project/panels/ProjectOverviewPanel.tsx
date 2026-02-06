"use client";

import { Button } from "@/components/ui/button";
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, ExternalLink, Github } from "lucide-react";

export function ProjectOverviewPanel() {
    return (
        <div className="flex flex-col justify-center h-full gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CardHeader className="p-0">
                <CardTitle className="text-3xl text-foreground">
                    Gestion de Alquileres Distribuidos.
                </CardTitle>
                <CardDescription className="text-base leading-relaxed mt-4">
                    Plataforma para administración de propiedades con
                    microservicios diseñada con NestJS. Combina MongoDB para
                    flexibilidad y PostgreSQL para integridad financiera.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">
                            Bases de datos múltiples (MongoDB + PostgreSQL)
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">
                            Autenticación JWT y control de acceso
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">
                            Resolución de Conflictos Distribuida
                        </span>
                    </div>
                </div>
                <Separator className="my-2" />
                <div className="flex gap-3">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto"
                        onClick={() =>
                            window.open(
                                "https://github.com/CowsmonDev/ApiAlquileres/tree/DevOps",
                                "_blank",
                            )
                        }
                    >
                        <Github className="w-4 h-4 mr-2" />
                        Ver Repositorio
                    </Button>
                </div>
            </CardContent>
        </div>
    );
}
