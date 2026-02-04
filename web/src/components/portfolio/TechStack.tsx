export function TechStack() {
    return (
        <section
            id="about-tech"
            className="py-24 border-t border-border relative overflow-hidden"
        >
            {/* Background Icon */}
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.02] pointer-events-none overflow-hidden flex items-center justify-end">
                <span className="text-[600px] text-white -mr-40 rotate-12">
                    ⬡
                </span>
            </div>

            <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column - Philosophy */}
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-6 text-left">
                            <div className="flex items-center gap-2 text-primary font-mono text-sm font-bold tracking-widest uppercase">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                The Engineering Mindset
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black leading-tight">
                                Structured Thinking. <br />
                                <span className="text-muted-foreground">
                                    Resilient Systems.
                                </span>
                            </h2>

                            <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
                                <p>
                                    My approach to systems engineering is
                                    grounded in{" "}
                                    <strong className="text-white">
                                        structure
                                    </strong>{" "}
                                    and{" "}
                                    <strong className="text-white">
                                        efficiency
                                    </strong>
                                    . I don&apos;t just write code; I architect
                                    high-availability solutions that stand the
                                    test of scale, focusing on decoupling
                                    complexity and ensuring fault tolerance.
                                </p>
                                <p>
                                    My workflow is powered by{" "}
                                    <strong className="text-white">
                                        Obsidian
                                    </strong>{" "}
                                    for interconnected knowledge management,
                                    ensuring that every architectural decision
                                    is documented and retrievable. Combined with
                                    the speed of{" "}
                                    <strong className="text-white">Vim</strong>,
                                    I maintain a development velocity that
                                    matches the demands of distributed systems.
                                </p>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="flex flex-col gap-6 border-l border-border pl-6 ml-2">
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                                    <span className="text-primary">⌘</span>
                                    Structured Knowledge
                                </h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Leveraging Obsidian to create a persistent
                                    graph of architectural decisions.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                                    <span className="text-primary">▶</span>
                                    Efficiency First
                                </h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Vim-based keyboard-centric workflow for
                                    rapid code navigation.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                                    <span className="text-primary">◆</span>
                                    High Availability
                                </h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Designing fault-tolerant distributed systems
                                    that never sleep.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Tech Cards */}
                    <div className="flex flex-col gap-6">
                        {/* Core Stack Card */}
                        <div className="relative p-6 lg:p-8 rounded-xl bg-card border border-border border-l-4 border-l-primary shadow-2xl overflow-hidden group hover:bg-secondary transition-colors">
                            <div className="flex flex-col gap-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <span className="text-primary text-3xl">
                                        ◇
                                    </span>
                                    <h3 className="text-2xl font-bold">
                                        Core Stack
                                    </h3>
                                </div>
                                <p className="text-muted-foreground text-sm max-w-md">
                                    Primary drivers for enterprise-grade
                                    applications.
                                </p>
                                <div className="h-px w-full bg-border my-2" />
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-3 py-1 bg-secondary text-white text-sm font-mono rounded border border-primary/30 shadow-[0_0_10px_rgba(161,18,59,0.1)]">
                                        Java 17+
                                    </span>
                                    <span className="px-3 py-1 bg-secondary text-white text-sm font-mono rounded border border-primary/30 shadow-[0_0_10px_rgba(161,18,59,0.1)]">
                                        Spring Boot
                                    </span>
                                    <span className="px-3 py-1 bg-secondary text-white text-sm font-mono rounded border border-primary/30 shadow-[0_0_10px_rgba(161,18,59,0.1)]">
                                        NestJS
                                    </span>
                                    <span className="px-3 py-1 bg-secondary text-muted-foreground text-sm font-mono rounded border border-border">
                                        TypeScript
                                    </span>
                                    <span className="px-3 py-1 bg-secondary text-muted-foreground text-sm font-mono rounded border border-border">
                                        Node.js
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Data & Tools Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl border border-border bg-card hover:border-muted-foreground transition-colors flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
                                        ⊡
                                    </div>
                                    <h3 className="font-bold text-lg">
                                        Data Engineering
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-[#151515] text-muted-foreground text-xs font-mono rounded border border-secondary">
                                        PostgreSQL
                                    </span>
                                    <span className="px-2 py-1 bg-[#151515] text-muted-foreground text-xs font-mono rounded border border-secondary">
                                        Hibernate/JPA
                                    </span>
                                    <span className="px-2 py-1 bg-[#151515] text-muted-foreground text-xs font-mono rounded border border-secondary">
                                        Redis
                                    </span>
                                    <span className="px-2 py-1 bg-[#151515] text-muted-foreground text-xs font-mono rounded border border-secondary">
                                        TPT Inheritance
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-border bg-card hover:border-muted-foreground transition-colors flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
                                        ⚙
                                    </div>
                                    <h3 className="font-bold text-lg">
                                        Tools & Ops
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-[#151515] text-muted-foreground text-xs font-mono rounded border border-secondary">
                                        Vim (Neovim)
                                    </span>
                                    <span className="px-2 py-1 bg-[#151515] text-muted-foreground text-xs font-mono rounded border border-secondary">
                                        Obsidian
                                    </span>
                                    <span className="px-2 py-1 bg-[#151515] text-muted-foreground text-xs font-mono rounded border border-secondary">
                                        Docker
                                    </span>
                                    <span className="px-2 py-1 bg-[#151515] text-muted-foreground text-xs font-mono rounded border border-secondary">
                                        Kubernetes
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
