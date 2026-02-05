"use client";

import { ReactNode } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    left: ReactNode;
    right: ReactNode;
}

export function ProjectAcordionItem({ project }: { project: Project }) {
    return (
        <AccordionItem
            key={project.id}
            value={project.id}
            className="rounded-xl bg-card border border-border overflow-hidden data-[state=open]:border-primary/50 transition-colors"
        >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary data-[state=open]:bg-secondary">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full pr-4">
                    <div className="flex flex-col gap-1 text-left">
                        <span className="text-xl font-bold group-hover:text-primary transition-colors">
                            {project.title}
                        </span>
                        <span className="text-muted-foreground text-sm">
                            {project.description}
                        </span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {project.technologies.map((tech) => (
                            <Badge
                                key={tech}
                                variant="outline"
                                className="font-mono text-xs"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-2 border-t border-border">
                <div className="grid md:grid-cols-2 gap-8 mt-4">
                    <div className="flex flex-col gap-6">{project.left}</div>
                    <div className="flex flex-col justify-center">
                        {project.right}
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}
