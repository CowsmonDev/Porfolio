import { Button } from "@/components/ui/button";
import { Layers, Mail } from "lucide-react";

export function Hero() {
    return (
        <section id="hero" className="relative flex flex-col pt-20">
            {/* Grid Background */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none z-0" />

            <div className="relative z-10 mx-auto max-w-360 w-full px-4 lg:px-12 py-10">
                <div className="flex flex-col gap-12 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-24">
                    {/* Left Content */}
                    <div className="flex flex-col gap-8 flex-1 max-w-2xl text-left">
                        <div className="flex flex-col gap-4">
                            {/* Status Indicator */}
                            <div className="flex items-center gap-2 text-primary font-mono text-sm font-bold tracking-widest uppercase">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                System Online
                            </div>

                            {/* Title */}
                            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                                Architecting <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-200 to-gray-500">
                                    Digital Concrete
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <h2 className="text-muted-foreground text-lg md:text-xl font-normal leading-relaxed max-w-150">
                                Systems Engineer specializing in high-scale
                                Distributed Systems and Microservices. Expert in
                                Java Spring Boot, NestJS, and complex PostgreSQL
                                modeling.
                            </h2>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                className="h-12 px-6 shadow-[0_4px_14px_0_rgba(161,18,59,0.39)]"
                            >
                                <Layers className="w-4 h-4" />
                                View Architecture
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-12 px-6"
                            >
                                <Mail className="w-4 h-4" />
                                Contact Me
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-6 pt-4">
                            <div className="flex flex-col gap-1 border-l-2 border-primary pl-4">
                                <p className="text-3xl font-bold font-mono">
                                    6+
                                </p>
                                <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">
                                    Years Exp.
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 border-l-2 border-border pl-4">
                                <p className="text-3xl font-bold font-mono">
                                    25+
                                </p>
                                <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">
                                    Microservices
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 border-l-2 border-border pl-4">
                                <p className="text-3xl font-bold font-mono">
                                    2k+
                                </p>
                                <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">
                                    Obsidian Nodes
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Code Block */}
                    <div className="w-full lg:w-[600px] xl:w-[700px] flex justify-center lg:justify-end">
                        <div className="w-full rounded-lg overflow-hidden bg-[#0d0d0d] border border-border shadow-2xl font-mono text-sm group hover:border-primary/50 transition-colors duration-300">
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-muted-foreground text-xs">
                                    Engineer.ts
                                </div>
                                <div className="w-8" />
                            </div>

                            {/* Code Content */}
                            <div className="p-6 text-gray-300 overflow-x-auto">
                                <pre>
                                    <code>
                                        <span className="text-primary">
                                            class
                                        </span>{" "}
                                        <span className="text-yellow-400">
                                            Engineer
                                        </span>
                                        {" {\n"}
                                        {"  "}
                                        <span className="text-purple-400">
                                            public
                                        </span>{" "}
                                        name:{" "}
                                        <span className="text-blue-400">
                                            string
                                        </span>
                                        {";\n"}
                                        {"  "}
                                        <span className="text-purple-400">
                                            public
                                        </span>{" "}
                                        lastName:{" "}
                                        <span className="text-blue-400">
                                            string
                                        </span>
                                        {";\n"}
                                        {"  "}
                                        <span className="text-purple-400">
                                            public
                                        </span>{" "}
                                        focus:{" "}
                                        <span className="text-blue-400">
                                            string
                                        </span>
                                        []{";\n"}
                                        {"  "}
                                        <span className="text-purple-400">
                                            public
                                        </span>{" "}
                                        stack:{" "}
                                        <span className="text-blue-400">
                                            string
                                        </span>
                                        []{";\n"}
                                        {"  "}
                                        <span className="text-primary">
                                            constructor
                                        </span>
                                        (name:{" "}
                                        <span className="text-blue-400">
                                            string
                                        </span>
                                        , lastName:{" "}
                                        <span className="text-blue-400">
                                            string
                                        </span>
                                        {") {\n"}
                                        {"    "}
                                        <span className="text-blue-400">
                                            this
                                        </span>
                                        .name = name
                                        {";\n"}
                                        {"    "}
                                        <span className="text-blue-400">
                                            this
                                        </span>
                                        .lastName = lastName{";\n"}
                                        {"    "}
                                        <span className="text-blue-400">
                                            this
                                        </span>
                                        .focus = [{"\n"}
                                        {"        "}
                                        <span className="text-green-400">
                                            &apos;Distributed Systems&apos;
                                        </span>
                                        ,{"\n"}
                                        {"        "}
                                        <span className="text-green-400">
                                            &apos;Systems Architecture&apos;
                                        </span>
                                        {"\n    ];\n"}
                                        {"    "}
                                        <span className="text-blue-400">
                                            this
                                        </span>
                                        .stack = [{"\n"}
                                        {"        "}
                                        <span className="text-green-400">
                                            &apos;Java/Spring Boot&apos;
                                        </span>
                                        ,{"\n"}
                                        {"        "}
                                        <span className="text-green-400">
                                            &apos;NestJS&apos;
                                        </span>
                                        ,{"\n"}
                                        {"        "}
                                        <span className="text-green-400">
                                            &apos;PostgreSQL&apos;
                                        </span>
                                        {"\n    ];\n"}
                                        {"  }\n}\n"}
                                        <span className="text-purple-400">
                                            const
                                        </span>{" "}
                                        agustin ={" "}
                                        <span className="text-primary">
                                            new
                                        </span>{" "}
                                        <span className="text-yellow-400">
                                            Engineer
                                        </span>
                                        ({"\n"}
                                        {"  "}
                                        <span className="text-green-400">
                                            &apos;Agustín&apos;
                                        </span>
                                        ,{"\n"}
                                        {"  "}
                                        <span className="text-green-400">
                                            &apos;Systems&apos;
                                        </span>
                                        {"\n);"}
                                    </code>
                                </pre>
                            </div>

                            {/* Status Bar */}
                            <div className="border-t border-border p-2 bg-[#111] text-xs flex items-center gap-2">
                                <span className="text-green-500">✓</span>
                                <span className="text-green-500">
                                    Compiled Successfully (tsc)
                                </span>
                                <span className="text-muted-foreground ml-auto">
                                    0s
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
