"use client";
import { Button } from "@/components/ui/button";
import { User, Mail } from "lucide-react";

export function HeroActions() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-wrap gap-4">
            <Button
                size="lg"
                className="h-12 px-6 shadow-[0_4px_14px_0_rgba(161,18,59,0.39)]"
                onClick={() => scrollToSection("about-tech")}
            >
                <User className="w-4 h-4 mr-2" />
                Sobre Mí
            </Button>
            <Button
                variant="outline"
                size="lg"
                className="h-12 px-6"
                onClick={() => scrollToSection("contact")}
            >
                <Mail className="w-4 h-4 mr-2" />
                Contactar
            </Button>
        </div>
    );
}
