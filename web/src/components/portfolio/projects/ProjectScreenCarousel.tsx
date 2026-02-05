"use client";

import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import {
    OverviewSlide,
    ArchitectureSlide,
    ConsistencySlide,
    ApprovalSlide,
} from "./panels/slides";
import { cn } from "@/lib/utils";

interface ProjectScreenCarouselProps {
    onSlideChange?: (index: number) => void;
}

export function ProjectScreenCarousel({
    onSlideChange,
}: ProjectScreenCarouselProps) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        // Notify parent of initial state (0-indexed)
        if (onSlideChange) {
            onSlideChange(api.selectedScrollSnap());
        }

        api.on("select", () => {
            const index = api.selectedScrollSnap();
            setCurrent(index + 1);
            if (onSlideChange) {
                onSlideChange(index);
            }
        });
    }, [api, onSlideChange]);

    return (
        <div className="absolute inset-0">
            <Carousel setApi={setApi} className="h-full w-full">
                <CarouselContent className="h-full ml-0">
                    {/* Slide 1: Overview - Conflict JSON */}
                    <CarouselItem className="h-full w-full pl-0">
                        <div className="flex items-center justify-center h-full w-full p-8">
                            <OverviewSlide />
                        </div>
                    </CarouselItem>

                    {/* Slide 2: Architecture Diagram */}
                    <CarouselItem className="h-full w-full pl-0">
                        <div className="flex items-center justify-center h-full w-full p-8">
                            <ArchitectureSlide />
                        </div>
                    </CarouselItem>

                    {/* Slide 3: Consistency - Saga Pattern */}
                    <CarouselItem className="h-full w-full pl-0">
                        <div className="flex items-center justify-center h-full w-full p-8">
                            <ConsistencySlide />
                        </div>
                    </CarouselItem>

                    {/* Slide 4: Approval - CASL Policy */}
                    <CarouselItem className="h-full w-full pl-0">
                        <div className="flex items-center justify-center h-full w-full p-8">
                            <ApprovalSlide />
                        </div>
                    </CarouselItem>
                </CarouselContent>

                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                current === index + 1
                                    ? "bg-primary w-6"
                                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                            )}
                            onClick={() => api?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </Carousel>
        </div>
    );
}
