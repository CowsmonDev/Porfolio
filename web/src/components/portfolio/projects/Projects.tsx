import { FeaturedProject } from "./FeaturedProject";
import { SecondaryProject } from "./SecondaryProject";

export function Projects() {
    return (
        <section
            id="projects"
            className="py-24 bg-background border-t border-border"
        >
            <div className="mx-auto max-w-360 w-full px-4 lg:px-12">
                <div className="flex flex-col gap-8">
                    {/* Section Header */}
                    <div className="flex flex-col items-center gap-5 text-center">
                        <div className="flex items-center gap-2 text-primary font-mono text-sm font-bold tracking-widest uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            En Producción
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                            Proyectos
                        </h2>
                    </div>

                    <FeaturedProject />
                    <SecondaryProject />
                </div>
            </div>
        </section>
    );
}
