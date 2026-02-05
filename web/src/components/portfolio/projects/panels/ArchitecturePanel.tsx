"use client";

import { Button } from "@/components/ui/button";
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Box, Layers, Zap } from "lucide-react";

export function ArchitecturePanel() {
    return (
        <div className="flex flex-col justify-center h-full gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CardHeader className="p-0">
                <CardTitle className="text-3xl bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Arquitectura Event-Driven
                </CardTitle>
                <CardDescription className="text-base leading-relaxed mt-4">
                    Microservicios desacoplados que se comunican asíncronamente
                    para garantizar escalabilidad y tolerancia a fallos.
                    Diseñado para soportar picos de tráfico en eventos de alta
                    demanda.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <Zap className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">
                            Comunicación asíncrona (RabbitMQ / Kafka)
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <Layers className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">
                            Consistencia Eventual & Saga Pattern
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <Box className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">
                            Infraestructura como Código (Terraform)
                        </span>
                    </div>
                </div>
                <Separator className="my-2" />
                <div className="flex gap-3">
                    <Button
                        size="lg"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                        Explorar Diagrama
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </CardContent>
        </div>
    );
}
