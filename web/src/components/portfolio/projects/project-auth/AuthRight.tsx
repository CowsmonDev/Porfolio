import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function AuthRight() {
    return (
        <div className="flex flex-col h-full">
            <h5 className="text-xs font-bold mb-2 uppercase tracking-wide text-muted-foreground">
                Desafíos del Sistema
            </h5>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Propagación de revocación de tokens a través de servicios
                distribuidos.
            </p>
            <Button variant="secondary" className="w-full mt-auto">
                <Github className="w-4 h-4" />
                Ver Repositorio
            </Button>
        </div>
    );
}
