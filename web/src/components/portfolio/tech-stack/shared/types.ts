export interface TechItem {
    label: string;
    abbr: string;
    color: string;
}

export interface TechTier {
    id: string;
    title: string;
    note: string;
    opacity: number;
    items: TechItem[];
}
