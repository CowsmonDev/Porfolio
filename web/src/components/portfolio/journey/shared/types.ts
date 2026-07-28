import type { LucideIcon } from "lucide-react";

export interface Experience {
    id: string;
    years: string;
    months: string;
    title: string;
    organization: string;
    description: string;
    tags: string[];
    isCurrent?: boolean;
}

export interface CareerHighlight {
    icon: LucideIcon;
    title: string;
    description: string;
}
