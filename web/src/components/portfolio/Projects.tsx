"use client";

import { FeaturedProject } from "./projects/FeaturedProject";
import { ProjectList } from "./projects/ProjectList";

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="mx-auto max-w-360 w-full px-4 lg:px-12">
                <div className="flex flex-col gap-8">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#a1123b]" />
                        <p className="text-primary text-sm font-bold tracking-widest uppercase">
                            En Producción
                        </p>
                    </div>

                    {/* Featured Project Card */}
                    <FeaturedProject />

                    {/* Project Accordions */}
                    <ProjectList />
                </div>
            </div>
        </section>
    );
}
