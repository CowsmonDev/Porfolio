export function Journey() {
    return (
        <section
            id="experience"
            className="py-20 bg-[#151515] border-t border-border"
        >
            <div className="mx-auto max-w-[1440px] w-full px-4 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Timeline */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-8">
                            Professional Journey
                        </h2>
                        <div className="bg-[#0d0d0d] border border-border rounded-lg p-6 font-mono text-sm h-full min-h-[400px]">
                            <div className="text-muted-foreground mb-4 border-b border-border pb-2">
                                tail -f career_log.txt
                            </div>
                            <div className="flex flex-col gap-6 relative">
                                <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-border" />

                                {/* Current Role */}
                                <div className="flex gap-4 relative">
                                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-[#0d0d0d] z-10 shrink-0" />
                                    <div>
                                        <div className="text-primary font-bold">
                                            2023 - Present
                                        </div>
                                        <div className="font-bold text-lg">
                                            Senior Systems Engineer
                                        </div>
                                        <div className="text-muted-foreground">
                                            TechFlow Systems
                                        </div>
                                        <div className="text-muted-foreground/60 mt-1">
                                            &gt; Lead architect for distributed
                                            payment engine.
                                        </div>
                                    </div>
                                </div>

                                {/* Previous Role 1 */}
                                <div className="flex gap-4 relative">
                                    <div className="w-4 h-4 rounded-full bg-muted-foreground border-4 border-[#0d0d0d] z-10 shrink-0" />
                                    <div>
                                        <div className="text-muted-foreground font-bold">
                                            2020 - 2023
                                        </div>
                                        <div className="text-gray-300 font-bold text-lg">
                                            Backend Developer
                                        </div>
                                        <div className="text-muted-foreground/80">
                                            DataSphere Inc.
                                        </div>
                                        <div className="text-muted-foreground/60 mt-1">
                                            &gt; Scaled Java microservices to 5k
                                            RPS.
                                        </div>
                                    </div>
                                </div>

                                {/* Previous Role 2 */}
                                <div className="flex gap-4 relative">
                                    <div className="w-4 h-4 rounded-full bg-muted-foreground border-4 border-[#0d0d0d] z-10 shrink-0" />
                                    <div>
                                        <div className="text-muted-foreground font-bold">
                                            2018 - 2020
                                        </div>
                                        <div className="text-gray-300 font-bold text-lg">
                                            Junior Software Engineer
                                        </div>
                                        <div className="text-muted-foreground/80">
                                            CloudStartups LLC
                                        </div>
                                        <div className="text-muted-foreground/60 mt-1">
                                            &gt; Migrated legacy monolith to
                                            Spring Boot.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex-1 flex flex-col justify-center gap-8">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold">
                                Career Highlights
                            </h3>

                            <div className="flex gap-4 items-start">
                                <div className="bg-secondary p-3 rounded text-primary shrink-0">
                                    ↗
                                </div>
                                <div>
                                    <h4 className="font-bold">
                                        Scalability Expert
                                    </h4>
                                    <p className="text-muted-foreground text-sm mt-1">
                                        Successfully scaled systems to handle
                                        10x traffic spikes using horizontal pod
                                        autoscaling and DB read replicas.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="bg-secondary p-3 rounded text-primary shrink-0">
                                    ⊕
                                </div>
                                <div>
                                    <h4 className="font-bold">
                                        Team Leadership
                                    </h4>
                                    <p className="text-muted-foreground text-sm mt-1">
                                        Mentored 5 junior developers in Java
                                        best practices and Domain Driven Design.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="bg-secondary p-3 rounded text-primary shrink-0">
                                    ☰
                                </div>
                                <div>
                                    <h4 className="font-bold">
                                        Knowledge Management
                                    </h4>
                                    <p className="text-muted-foreground text-sm mt-1">
                                        Maintains a rigorous Obsidian-driven
                                        knowledge base to structure
                                        architectural decision records (ADRs).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full md:w-fit mt-4 flex items-center justify-center rounded-lg h-12 px-6 bg-secondary hover:bg-muted border border-border text-white text-base font-bold transition-colors">
                            <span className="mr-2">📄</span>
                            Download Full Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
