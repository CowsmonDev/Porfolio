"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    vscDarkPlus,
    oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";

// Código TypeScript como string simple - fácil de leer y modificar
const codigoFuente = `// Perfil profesional
class FullStackDev {
    public nombre: string;
    public capas: string[];
    public stack: string[];

    constructor() {
        this.nombre = 'Agustín Crespo';
        this.capas = [
            'Backend & arquitectura',
            'Frontend & producto',
            'Agentes de IA'
        ];
        this.stack = [
            'Java/Spring Boot',
            'NestJS',
            'Next.js',
            'PostgreSQL',
            'LangChain'
        ];
    }

    construir(idea: string): Producto {
        return new Producto(idea, this.stack);
    }
}`;

interface CodeBlockProps {
    filename?: string;
    statusMessage?: string;
}

export function CodeBlock({
    filename = "FullStack.ts",
    statusMessage = "Compilado Exitosamente (tsc)",
}: CodeBlockProps) {
    const { resolvedTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const codeStyle =
        mounted && resolvedTheme === "light" ? oneLight : vscDarkPlus;

    return (
        <div className="w-full lg:w-150 xl:w-175 flex justify-center lg:justify-end">
            <div className="w-full rounded-lg overflow-hidden bg-code-bg border border-border shadow-2xl font-mono text-sm animate-neon-pulse">
                {/* Barra de Ventana */}
                <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-muted-foreground text-xs">
                        {filename}
                    </div>
                    <div className="w-8" />
                </div>

                {/* Contenido del Código */}
                <div className="overflow-x-auto p-6">
                    <SyntaxHighlighter
                        language="typescript"
                        style={codeStyle}
                        customStyle={{
                            margin: 0,
                            padding: 0,
                            background: "none",
                            fontSize: "0.875rem",
                            lineHeight: "1.6",
                        }}
                        codeTagProps={{
                            style: {
                                background: "none",
                            },
                        }}
                        showLineNumbers={false}
                    >
                        {codigoFuente}
                    </SyntaxHighlighter>
                </div>

                {/* Barra de Estado */}
                <div className="border-t border-border p-2 bg-section-dark text-xs flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-green-500">{statusMessage}</span>
                    <span className="text-muted-foreground ml-auto">0s</span>
                </div>
            </div>
        </div>
    );
}
