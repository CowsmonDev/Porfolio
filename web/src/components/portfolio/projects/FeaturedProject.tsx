"use client";

import { Card } from "@/components/ui/card";
import { ProjectScreenCarousel } from "./ProjectScreenCarousel";
import { ProjectOverviewPanel } from "./panels/ProjectOverviewPanel";
import { ArchitecturePanel } from "./panels/ArchitecturePanel";
import { ConsistencyPanel } from "./panels/ConsistencyPanel";
import { ApprovalFlowPanel } from "./panels/ApprovalFlowPanel";
import { useState } from "react";

export function FeaturedProject() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const panels = [
        <ProjectOverviewPanel key="overview" />,
        <ArchitecturePanel key="architecture" />,
        <ConsistencyPanel key="consistency" />,
        <ApprovalFlowPanel key="approval" />,
    ];

    return (
        <Card className="overflow-hidden shadow-2xl border-border p-0">
            <div className="flex flex-col lg:flex-row min-h-125">
                {/* Left Panel - Dynamic Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center lg:w-1/2 border-b lg:border-b-0 lg:border-r border-border relative">
                    {panels[currentIndex] || panels[0]}
                </div>

                {/* Right Panel - Carousel Container */}
                <div className="lg:w-1/2 min-h-full bg-[#111] relative">
                    <ProjectScreenCarousel onSlideChange={setCurrentIndex} />
                </div>
            </div>
        </Card>
    );
}
