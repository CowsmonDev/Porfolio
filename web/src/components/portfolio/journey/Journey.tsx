"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Experience, experiences } from "./shared";
import { ExperienceCard, DetailPanel, Highlights } from "./components";

export function Journey() {
    const [selectedExperience, setSelectedExperience] =
        useState<Experience | null>(null);

    return (
        <section
            id="experience"
            className="py-20 bg-secondary dark:bg-[#151515] border-t border-border"
        >
            <div className="mx-auto max-w-360 w-full px-4 lg:px-12">
                {/* Section header */}
                <div className="mb-10">
                    <Badge variant="outline" className="mb-4">
                        Mi Recorrido
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black">
                        Trayectoria
                    </h2>
                </div>

                {/* 60/40 split grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Experience Cards - Left */}
                    <div className="lg:col-span-3 space-y-4">
                        {experiences.map((exp) => (
                            <ExperienceCard
                                key={exp.id}
                                experience={exp}
                                isSelected={selectedExperience?.id === exp.id}
                                onSelect={() => setSelectedExperience(exp)}
                            />
                        ))}
                    </div>

                    {/* Detail Panel - Right */}
                    <div className="lg:col-span-2">
                        {selectedExperience ? (
                            <DetailPanel
                                experience={selectedExperience}
                                onClose={() => setSelectedExperience(null)}
                            />
                        ) : (
                            <Highlights />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
