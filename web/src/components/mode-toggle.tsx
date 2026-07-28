"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    // Los dos iconos se renderizan siempre y se alternan por CSS segun la clase
    // que next-themes pone en <html>. Asi el arbol es igual en servidor y
    // cliente: si cambiara de forma al montar, correria el contador de useId y
    // rompería la hidratacion de los componentes de Radix que vengan despues.
    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="relative"
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Cambiar tema</span>
        </Button>
    );
}
