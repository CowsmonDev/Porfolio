import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Experience } from "../shared";

interface ExperienceCardProps {
    experience: Experience;
    isSelected: boolean;
    onSelect: () => void;
}

export function ExperienceCard({
    experience,
    isSelected,
    onSelect,
}: ExperienceCardProps) {
    const { period, title, organization, isCurrent } = experience;

    return (
        <Card
            className={`border transition-all cursor-pointer hover:border-primary/50 ${
                isSelected
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card"
            }`}
            onClick={onSelect}
        >
            <CardContent className="py-3 px-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <Badge
                                variant={isCurrent ? "default" : "secondary"}
                                className="text-xs"
                            >
                                {period}
                            </Badge>
                            {isCurrent && (
                                <span className="text-xs text-primary font-medium">
                                    Ultimo
                                </span>
                            )}
                        </div>
                        <h3 className="text-base font-bold text-white mb-1">
                            {title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {organization}
                        </p>
                    </div>
                    <span className="shrink-0 text-sm text-muted-foreground flex items-center gap-1">
                        Ver más
                        <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
            </CardContent>
        </Card>
    );
}
