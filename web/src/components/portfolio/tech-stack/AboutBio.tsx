export function AboutBio() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6 text-left">
                <div className="flex items-center gap-2 text-primary font-mono text-sm font-bold tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Formación Continua.
                </div>

                <h2 className="text-4xl md:text-4xl font-black leading-tight">
                    Sobre Mi
                </h2>

                <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
                    <p>
                        Soy{" "}
                        <strong className="text-foreground">
                            desarrollador full-stack
                        </strong>
                        : diseño la arquitectura del backend, la llevo hasta la
                        interfaz y hoy sumo{" "}
                        <strong className="text-foreground">
                            agentes de IA
                        </strong>{" "}
                        como una pieza más del sistema — no como un
                        experimento aparte. En AlquilaPoint eso significó
                        cuatro microservicios, un frontend Next.js y un
                        asistente conversacional que responde sobre datos
                        reales respetando los permisos de cada usuario.
                    </p>
                    <p>
                        Empecé a programar en{" "}
                        <strong className="text-foreground">
                            4° año de secundaria (2016)
                        </strong>{" "}
                        y seguí con{" "}
                        <strong className="text-foreground">
                            Ingeniería en Sistemas
                        </strong>
                        , pero la mayor parte de lo que uso a diario lo
                        aprendí construyendo: patrones, arquitecturas que
                        escalan, LangChain y modelos, documentando cada
                        decisión en ADRs y RFCs para poder defenderla después.
                    </p>
                </div>
            </div>
        </div>
    );
}
