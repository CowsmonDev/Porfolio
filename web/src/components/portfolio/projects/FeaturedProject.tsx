"use client";

import { Card } from "@/components/ui/card";
import { ProjectScreenCarousel } from "./ProjectScreenCarousel";
import { ProjectOverviewPanel } from "./panels/ProjectOverviewPanel";
import { ArchitecturePanel } from "./panels/ArchitecturePanel";
import { useState } from "react";

export function FeaturedProject() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const panels = [
        <ProjectOverviewPanel key="overview" />,
        <ArchitecturePanel key="architecture" />,
    ];

    return (
        <Card className="overflow-hidden shadow-2xl border-border">
            <div className="flex flex-col lg:flex-row min-h-125">
                {/* Left Panel - Dynamic Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center flex-1 border-b lg:border-b-0 lg:border-r border-border relative">
                    {panels[currentIndex] || panels[0]}
                </div>

                {/* Right Panel - Carousel */}
                <ProjectScreenCarousel onSlideChange={setCurrentIndex} />
            </div>
        </Card>
    );
}
