import { AboutBio } from "./AboutBio";
import { StackShowcase } from "./StackShowcase";

export function TechStack() {
    return (
        <section
            id="about-tech"
            className="py-24 border-t border-border relative overflow-hidden"
        >
            {/* Background Icon */}
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.02] pointer-events-none overflow-hidden flex items-center justify-end">
                <span className="text-[600px] text-foreground -mr-40 rotate-12">
                    ⬡
                </span>
            </div>

            <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column - Sobre Mí */}
                    <AboutBio />

                    {/* Right Column - Tech Cards */}
                    <StackShowcase />
                </div>
            </div>
        </section>
    );
}
