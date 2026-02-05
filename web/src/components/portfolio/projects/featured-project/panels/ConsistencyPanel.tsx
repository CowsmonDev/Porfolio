"use client";

import { Button } from "@/components/ui/button";
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, GitMerge, RefreshCw, Shield } from "lucide-react";

export function ConsistencyPanel() {
    return (
        <div className="flex flex-col justify-center h-full gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CardHeader className="p-0">
                <CardTitle className="text-3xl text-foreground">
                    Patrones de Consistencia de Datos
                </CardTitle>
                <CardDescription className="text-base leading-relaxed mt-4">
                    Sincronización entre el registro de pagos (PostgreSQL) y las
                    reservas (MongoDB) mediante comunicación REST. Manejo de
                    estados intermedios y rollback ante fallos.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <RefreshCw className="w-4 h-4 text-cyan-500" />
                        <span className="text-sm">
                            Sincronización REST entre ms-payments y ms-rentals
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <GitMerge className="w-4 h-4 text-cyan-500" />
                        <span className="text-sm">
                            Estados transitorios: PENDING → CONFIRMED / FAILED
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <Shield className="w-4 h-4 text-cyan-500" />
                        <span className="text-sm">
                            Validación cruzada de disponibilidad antes del pago
                        </span>
                    </div>
                </div>
                <Separator className="my-2" />
                <div className="flex gap-3">
                    <Button size="lg" className="w-full sm:w-auto">
                        Ver Implementación
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </CardContent>
        </div>
    );
}
