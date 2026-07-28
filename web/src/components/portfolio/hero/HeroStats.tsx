interface Stat {
    value: string;
    label: string;
    highlight?: boolean;
}

interface HeroStatsProps {
    stats: Stat[];
}

export function HeroStats({ stats }: HeroStatsProps) {
    return (
        <div className="flex gap-6 pt-4">
            {stats.map((stat, index) => (
                <div
                    key={stat.label}
                    className={`flex flex-col gap-1 border-l-2 pl-4 ${
                        index === 0 || stat.highlight
                            ? "border-primary"
                            : "border-border"
                    }`}
                >
                    <p className="text-3xl font-bold font-mono">{stat.value}</p>
                    <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">
                        {stat.label}
                    </p>
                </div>
            ))}
        </div>
    );
}
