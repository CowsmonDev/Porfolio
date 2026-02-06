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
                        Mi camino en la programación comenzó en{" "}
                        <strong className="text-foreground">
                            4° año de secundaria (2016)
                        </strong>
                        , donde descubrí la lógica computacional y empecé a
                        resolver problemas con código. Esa curiosidad me llevó a
                        estudiar{" "}
                        <strong className="text-foreground">
                            Ingeniería en Sistemas
                        </strong>{" "}
                        en la universidad, donde profundicé en fundamentos
                        teóricos, estructuras de datos y arquitectura de
                        software.
                    </p>
                    <p>
                        Pero el aprendizaje no terminó en las aulas. De forma{" "}
                        <strong className="text-foreground">autodidacta</strong>
                        , mis conocimientos previos me permitieron profundizar
                        en tecnologías modernas: patrones de diseño,
                        arquitecturas escalables, y las mejores prácticas de la
                        industria. Esta combinación de{" "}
                        <strong className="text-foreground">
                            educación formal y exploración independiente
                        </strong>{" "}
                        me permite abordar proyectos con una visión integral y
                        actualizada.
                    </p>
                </div>
            </div>
        </div>
    );
}
