import { Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { highlights } from "../shared";

export function Highlights() {
    return (
        <Card className="border-border bg-card sticky top-24">
            <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-6">Destacados</h3>
                <div className="space-y-5">
                    {highlights.map((h) => (
                        <div key={h.title} className="flex gap-3 items-start">
                            <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-primary shrink-0 text-sm">
                                {h.icon}
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground text-sm">
                                    {h.title}
                                </h4>
                                <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                                    {h.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <Button
                    className="w-full mt-6 shadow-[0_0_15px_rgba(161,18,59,0.5)]"
                    asChild
                >
                    <a
                        href="/CV_Agustin_Crespo.pdf"
                        download="CV_Agustin_Crespo.pdf"
                    >
                        <Download className="w-4 h-4" />
                        Curriculum
                    </a>
                </Button>
            </CardContent>
        </Card>
    );
}
