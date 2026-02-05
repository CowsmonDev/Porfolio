"use client";

import { Button } from "@/components/ui/button";
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Building2, Database, Server, Users } from "lucide-react";

export function ArchitecturePanel() {
    return (
        <div className="flex flex-col justify-center h-full gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CardHeader className="p-0">
                <CardTitle className="text-3xl text-foreground">
                    Ecosistema de Servicios Desacoplados
                </CardTitle>
                <CardDescription className="text-base leading-relaxed mt-4">
                    División estratégica en microservicios especializados, cada
                    uno con su propia base de datos optimizada para su dominio.
                    Comunicación sincrónica vía REST entre servicios.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <Users className="w-4 h-4 text-purple-500" />
                        <span className="text-sm">
                            <strong>ms-users:</strong> Gestión de usuarios,
                            roles y generación de JWT (MongoDB)
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <Building2 className="w-4 h-4 text-amber-500" />
                        <span className="text-sm">
                            <strong>ms-properties:</strong> Catálogo + CASL/RBAC
                            para autorización de acceso (MongoDB)
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <Server className="w-4 h-4 text-green-500" />
                        <span className="text-sm">
                            <strong>ms-rentals:</strong> Disponibilidad y
                            reservas flexibles (MongoDB)
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <Database className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">
                            <strong>ms-payments:</strong> Integridad
                            transaccional ACID (PostgreSQL)
                        </span>
                    </div>
                </div>
                <Separator className="my-2" />
                <div className="flex gap-3">
                    <Button size="lg" className="w-full sm:w-auto">
                        Explorar Diagrama
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </CardContent>
        </div>
    );
}
