import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Experience } from "../shared";

interface DetailPanelProps {
    experience: Experience;
    onClose: () => void;
}

export function DetailPanel({ experience, onClose }: DetailPanelProps) {
    return (
        <Card className="border-border bg-card sticky top-24">
            <CardContent className="p-6">
                {/* Close button */}
                <div className="flex justify-between items-start mb-4">
                    <Badge variant="default">{experience.period}</Badge>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 -mr-2 -mt-2"
                        onClick={onClose}
                    >
                        <X className="w-4 h-4" />
                    </Button>
                </div>

                {/* Experience details */}
                <h3 className="text-lg font-bold text-white mb-1">
                    {experience.title}
                </h3>
                <p className="text-sm text-primary mb-4">
                    {experience.organization}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {experience.description}
                </p>
            </CardContent>
        </Card>
    );
}
