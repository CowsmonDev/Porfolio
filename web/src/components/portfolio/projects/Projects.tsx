"use client";

import { FeaturedProject } from "./FeaturedProject";
import { Project, ProjectAcordionItem } from "./ProjectAcordionItem";
import { AuthLeft, AuthRight } from "./project-auth";
import { Accordion } from "../../ui/accordion";

const projects: Project[] = [];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="mx-auto max-w-360 w-full px-4 lg:px-12">
                <div className="flex flex-col gap-8">
                    {/* Section Header */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 text-primary font-mono text-sm font-bold tracking-widest uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            En Producción
                        </div>
                        <h2 className="text-4xl md:text-4xl font-black leading-tight">
                            Proyectos
                        </h2>
                    </div>

                    {/* Featured Project Card */}
                    <FeaturedProject />

                    {/* Project Accordions */}
                    <Accordion
                        type="single"
                        collapsible
                        className="flex flex-col gap-4"
                    >
                        {projects.map((project) => (
                            <ProjectAcordionItem
                                key={project.id}
                                project={project}
                            />
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
