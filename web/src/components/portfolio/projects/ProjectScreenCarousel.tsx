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

export function ProjectScreenCarousel() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="flex-1 bg-[#111] p-8 lg:p-12 flex flex-col items-center justify-center relative overflow-hidden min-h-100">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

            <Carousel
                setApi={setApi}
                className="w-full max-w-2xl relative z-10"
            >
                <CarouselContent>
                    {/* Slide 1: Code Display */}
                    <CarouselItem>
                        {/* We remove the wrapper styling from CodeDisplay and let CarouselItem handle it, 
                             but CodeDisplay has its own wrapper. Let's adjust CodeDisplay later or just use it here.
                             For now, I'll assume CodeDisplay is self-contained but I might need to strip its outer padding/bg if I want the carousel to control that.
                             Wait, CodeDisplay has `bg-[#111] p-8` etc. 
                             To make it clean, I should probably REFACTOR CodeDisplay to be just the "Box" and let the parent handle the background.
                             For this step, I will just render it and see.
                         */}
                        <div className="flex items-center justify-center py-4">
                            {/* Override CodeDisplay to fit nicely if needed */}
                            <div className="w-full">
                                <CodeDisplay embedded={true} />
                            </div>
                        </div>
                    </CarouselItem>

                    {/* Slide 2: Placeholder */}
                    <CarouselItem>
                        <div className="flex items-center justify-center py-4 h-full">
                            <div className="w-full h-75 rounded-lg bg-[#0d0d0d] border border-border flex items-center justify-center text-muted-foreground font-mono text-sm shadow-2xl">
                                [Próximamente: Diagrama de Arquitectura]
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>

                {/* Navigation Buttons */}
                <CarouselPrevious className="-left-5 bg-background/50 hover:bg-primary hover:text-primary-foreground border-border backdrop-blur-sm" />
                <CarouselNext className="-right-5 bg-background/50 hover:bg-primary hover:text-primary-foreground border-border backdrop-blur-sm" />
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
