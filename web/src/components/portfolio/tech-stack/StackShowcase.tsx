export function StackShowcase() {
    return (
        <div className="flex flex-col gap-6">
            {/* Core Stack Card */}
            <div className="relative p-6 lg:p-8 rounded-xl bg-card border border-border border-l-4 border-l-primary shadow-2xl overflow-hidden group hover:bg-secondary transition-colors">
                <div className="flex flex-col gap-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <span className="text-primary text-3xl">◇</span>
                        <h3 className="text-2xl font-bold">Stack Principal</h3>
                    </div>
                    <p className="text-muted-foreground text-sm max-w-md">
                        Mis Herramientas Esenciales en la creacion de soluciones
                    </p>
                    <div className="h-px w-full bg-border my-2" />
                    <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-mono rounded border border-primary/30 shadow-[0_0_10px_rgba(161,18,59,0.1)]">
                            Java 17+
                        </span>
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-mono rounded border border-primary/30 shadow-[0_0_10px_rgba(161,18,59,0.1)]">
                            Spring Boot
                        </span>
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-mono rounded border border-primary/30 shadow-[0_0_10px_rgba(161,18,59,0.1)]">
                            NestJS
                        </span>
                        <span className="px-3 py-1 bg-secondary text-muted-foreground text-sm font-mono rounded border border-border">
                            TypeScript
                        </span>
                        <span className="px-3 py-1 bg-secondary text-muted-foreground text-sm font-mono rounded border border-border">
                            Nextjs
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
                        <h3 className="font-bold text-lg">Data Engineering</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-secondary text-muted-foreground text-xs font-mono rounded border border-secondary">
                            PostgreSQL
                        </span>
                        <span className="px-2 py-1 bg-secondary text-muted-foreground text-xs font-mono rounded border border-secondary">
                            Hibernate/JPA
                        </span>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-border bg-card hover:border-muted-foreground transition-colors flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
                            ⚙
                        </div>
                        <h3 className="font-bold text-lg">Tools & Ops</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-secondary text-muted-foreground text-xs font-mono rounded border border-secondary">
                            Vim (Neovim)
                        </span>
                        <span className="px-2 py-1 bg-secondary text-muted-foreground text-xs font-mono rounded border border-secondary">
                            Obsidian
                        </span>
                        <span className="px-2 py-1 bg-secondary text-muted-foreground text-xs font-mono rounded border border-secondary">
                            Docker
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
