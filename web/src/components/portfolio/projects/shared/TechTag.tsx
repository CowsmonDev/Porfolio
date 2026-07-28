interface TechTagProps {
    label: string;
    abbr: string;
    color: string;
}

export function TechTag({ label, abbr, color }: TechTagProps) {
    return (
        <span
            className="inline-flex items-center gap-1.5 rounded-md border py-1 pr-2.5 pl-1"
            style={{ backgroundColor: `${color}14`, borderColor: `${color}44` }}
        >
            <span
                className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded font-mono text-[9px] font-extrabold"
                style={{
                    backgroundColor: `${color}26`,
                    color: `color-mix(in oklab, ${color} 55%, var(--foreground))`,
                }}
            >
                {abbr}
            </span>
            <span className="font-mono text-[11.5px] text-foreground">{label}</span>
        </span>
    );
}
