import { Button } from "@/components/ui/button";
import { Layers, Mail } from "lucide-react";

interface HeroActionsProps {
    onViewArchitecture?: () => void;
    onContact?: () => void;
}

export function HeroActions({
    onViewArchitecture,
    onContact,
}: HeroActionsProps) {
    return (
        <div className="flex flex-wrap gap-4">
            <Button
                size="lg"
                className="h-12 px-6 shadow-[0_4px_14px_0_rgba(161,18,59,0.39)]"
                onClick={onViewArchitecture}
            >
                <Layers className="w-4 h-4" />
                Ver Arquitectura
            </Button>
            <Button
                variant="outline"
                size="lg"
                className="h-12 px-6"
                onClick={onContact}
            >
                <Mail className="w-4 h-4" />
                Contactar
            </Button>
        </div>
    );
}
