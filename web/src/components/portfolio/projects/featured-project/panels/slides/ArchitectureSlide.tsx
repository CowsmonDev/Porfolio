"use client";

import { Building2, Database, Server, Users } from "lucide-react";

export function ArchitectureSlide() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full max-w-2xl rounded-lg bg-code-bg border border-border shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
                    <span className="text-xs text-blue-500 font-bold font-mono">
                        Arquitectura de Microservicios
                    </span>
                </div>
                <div className="p-6 flex flex-col gap-4">
                    {/* Services grid */}
                    <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card/50 border border-border">
                            <Users className="w-6 h-6 text-purple-500" />
                            <span className="text-xs font-mono text-muted-foreground">
                                ms-users
                            </span>
                            <span className="text-[10px] text-muted-foreground/70">
                                Roles + JWT
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-amber-950/20 border border-amber-900/30">
                            <Building2 className="w-6 h-6 text-amber-500" />
                            <span className="text-xs font-mono text-amber-500/90">
                                ms-properties
                            </span>
                            <span className="text-[10px] text-amber-500/70">
                                CASL/RBAC
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card/50 border border-border">
                            <Server className="w-6 h-6 text-green-500" />
                            <span className="text-xs font-mono text-muted-foreground">
                                ms-rentals
                            </span>
                            <span className="text-[10px] text-muted-foreground/70">
                                Disponibilidad
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card/50 border border-border">
                            <Database className="w-6 h-6 text-blue-500" />
                            <span className="text-xs font-mono text-muted-foreground">
                                ms-payments
                            </span>
                            <span className="text-[10px] text-muted-foreground/70">
                                PostgreSQL ACID
                            </span>
                        </div>
                    </div>
                    {/* Communication */}
                    <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-emerald-950/20 border border-emerald-900/30">
                        <span className="text-xs font-mono text-emerald-500/80">
                            REST API Communication
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
