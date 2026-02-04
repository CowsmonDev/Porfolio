"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, ExternalLink, Github } from "lucide-react";
import { CodeDisplay } from "./CodeDisplay";

export function FeaturedProject() {
    return (
        <Card className="overflow-hidden shadow-2xl border-border">
            <div className="flex flex-col lg:flex-row">
                <div className="p-8 lg:p-12 flex flex-col justify-center flex-1 gap-6 border-b lg:border-b-0 lg:border-r border-border">
                    <CardHeader className="p-0">
                        <CardTitle className="text-3xl">
                            Ecosistema Distribuido de Alquileres
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                            Plataforma de microservicios diseñada con NestJS.
                            Implementa persistencia políglota (MongoDB +
                            PostgreSQL) para separar la identidad flexible de la
                            rigurosidad financiera.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 flex flex-col gap-4">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span className="text-sm">
                                    Persistencia Políglota (Mongo & Postgres)
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span className="text-sm">
                                    Esquemas Polimórficos Dinámicos
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span className="text-sm">
                                    Resolución de Conflictos Distribuida
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

                {/* JSON Code Block Component */}
                <CodeDisplay />
            </div>
        </Card>
    );
}
