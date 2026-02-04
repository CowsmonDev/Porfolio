import { StatusIndicator } from "./StatusIndicator";
import { HeroTitle } from "./HeroTitle";
import { HeroActions } from "./HeroActions";
import { HeroStats } from "./HeroStats";
import { CodeBlock } from "./CodeBlock";

const heroStats = [
    { value: "6+", label: "Años Exp.", highlight: true },
    { value: "25+", label: "Microservicios" },
    { value: "2k+", label: "Nodos Obsidian" },
];

export function Hero() {
    return (
        <section id="hero" className="relative flex flex-col pt-20">
            {/* Grid Background */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none z-0" />

            <div className="relative z-10 mx-auto max-w-360 w-full px-4 lg:px-12 py-10">
                <div className="flex flex-col gap-12 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-24">
                    {/* Left Content */}
                    <div className="flex flex-col gap-8 flex-1 max-w-2xl text-left">
                        <StatusIndicator />

                        <HeroTitle
                            title="Hola, soy"
                            highlight="Agustín Crespo"
                            subtitle="Ingeniero de Software especializado en construir Sistemas Distribuidos escalables y Arquitecturas Backend de alto rendimiento."
                        />

                        <HeroActions />

                        <HeroStats stats={heroStats} />
                    </div>

                    {/* Code Block */}
                    <CodeBlock />
                </div>
            </div>
        </section>
    );
}
