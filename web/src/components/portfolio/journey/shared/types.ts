export interface Experience {
    id: string;
    period: string;
    title: string;
    organization: string;
    description: string;
    isCurrent?: boolean;
}

export interface CareerHighlight {
    icon: string;
    title: string;
    description: string;
}
