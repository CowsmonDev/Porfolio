import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experiences } from "./shared";
import { Highlights } from "./Highlights";
import { TimelineEntry } from "./TimelineEntry";
import { TimelineMilestone } from "./TimelineMilestone";

export function Journey() {
    return (
        <section
            id="experience"
            className="py-20 bg-secondary dark:bg-[#151515] border-t border-border"
        >
            <div className="mx-auto max-w-360 w-full px-4 lg:px-12">
                <div className="flex flex-col gap-12">
                    {/* Section header */}
                    <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end sm:gap-12">
                        <div className="flex flex-col gap-4">
                            <span className="inline-flex items-center gap-2 font-mono text-sm font-bold tracking-widest text-primary uppercase">
                                <span className="block h-2 w-2 rounded-full bg-primary" />
                                Mi Recorrido
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black leading-tight">
                                Trayectoria
                            </h2>
                        </div>
                        <Button
                            variant="outline"
                            className="h-11 shrink-0 px-5"
                            asChild
                        >
                            <a
                                href="/CV_Agustin_Crespo.pdf"
                                download="CV_Agustin_Crespo.pdf"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Descargar CV
                            </a>
                        </Button>
                    </div>

                    <div className="flex flex-col">
                        {experiences.map((exp) => (
                            <TimelineEntry key={exp.id} experience={exp} />
                        ))}

                        <TimelineMilestone year="2020">
                            Arranque autodidacta con{" "}
                            <strong className="font-semibold">Java</strong> y{" "}
                            <strong className="font-semibold">
                                Java Swing
                            </strong>
                            : mis primeras interfaces de escritorio.
                        </TimelineMilestone>
                        <TimelineMilestone year="2016" isLast>
                            Primeras líneas de código, 4° año de secundaria.
                        </TimelineMilestone>

                        <Highlights />
                    </div>
                </div>
            </div>
        </section>
    );
}
