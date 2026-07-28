import type { TechTier } from "./shared/types";
import { TechBadge } from "./TechBadge";

interface StackTierProps {
    tier: TechTier;
    size?: "lg" | "sm";
}

export function StackTier({ tier, size = "sm" }: StackTierProps) {
    return (
        <div className="flex flex-col gap-3.5" style={{ opacity: tier.opacity }}>
            <div className="flex items-baseline gap-3">
                <span className="whitespace-nowrap font-mono text-xs font-bold tracking-widest text-foreground uppercase">
                    {tier.title}
                </span>
                <span className="h-px flex-1 bg-border" />
                <span className="whitespace-nowrap text-[11.5px] text-muted-foreground">
                    {tier.note}
                </span>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
                {tier.items.map((item) => (
                    <TechBadge key={item.label} item={item} size={size} />
                ))}
            </div>
        </div>
    );
}
