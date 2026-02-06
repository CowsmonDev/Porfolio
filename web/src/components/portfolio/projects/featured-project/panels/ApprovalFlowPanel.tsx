"use client";

import { Button } from "@/components/ui/button";
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Building2, Key, ShieldCheck } from "lucide-react";

export function ApprovalFlowPanel() {
    return (
        <div className="flex flex-col justify-center h-full gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CardHeader className="p-0">
                <CardTitle className="text-3xl text-foreground">
                    Motores de Aprobación y Reglas
                </CardTitle>
                <CardDescription className="text-base leading-relaxed mt-4">
                    Flujo de autorización distribuido: ms-users almacena roles y
                    genera el JWT. ms-properties implementa CASL/RBAC para
                    determinar qué owner puede acceder a qué propiedad según el
                    catálogo.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <Key className="w-4 h-4 text-purple-500" />
                        <span className="text-sm">
                            ms-users: Almacena roles y genera JWT con claims
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <Building2 className="w-4 h-4 text-amber-500" />
                        <span className="text-sm">
                            ms-properties: CASL/RBAC central para acceso al
                            catálogo
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <ShieldCheck className="w-4 h-4 text-rose-500" />
                        <span className="text-sm">
                            Workflow de vinculación owner → propiedad
                        </span>
                    </div>
                </div>
            </CardContent>
        </div>
    );
}
