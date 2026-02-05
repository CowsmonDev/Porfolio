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
import { CodeDisplay } from "./CodeDisplay";
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
        <div className="flex-1 bg-[#111] flex flex-col relative overflow-hidden min-h-125">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

            <Carousel
                setApi={setApi}
                className="w-full h-full flex-1 relative z-10 flex flex-col"
            >
                <CarouselContent className="h-full">
                    {/* Slide 1: Code Display */}
                    <CarouselItem className="h-full">
                        <div className="flex items-center justify-center h-full w-full p-8 lg:p-12">
                            <div className="w-full">
                                <CodeDisplay embedded={true} />
                            </div>
                        </div>
                    </CarouselItem>

                    {/* Slide 2: Placeholder */}
                    <CarouselItem className="h-full">
                        <div className="flex items-center justify-center h-full w-full p-8 lg:p-12">
                            <div className="w-full h-75 rounded-lg bg-[#0d0d0d] border border-border flex items-center justify-center text-muted-foreground font-mono text-sm shadow-2xl">
                                [Próximamente: Diagrama de Arquitectura]
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>

                {/* Navigation Buttons */}
                <CarouselPrevious className="left-4 bg-background/50 hover:bg-primary hover:text-primary-foreground border-border backdrop-blur-sm absolute top-1/2 -translate-y-1/2" />
                <CarouselNext className="right-4 bg-background/50 hover:bg-primary hover:text-primary-foreground border-border backdrop-blur-sm absolute top-1/2 -translate-y-1/2" />
            </Carousel>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            current === index + 1
                                ? "bg-primary w-6" // Active dot is wider
                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                        )}
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
