import { StackTier } from "./StackTier";
import { tiers } from "./shared";

export function StackShowcase() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-primary font-mono text-sm font-bold tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Mi Stack.
                </div>
                <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                    más arriba, más lo uso
                </span>
            </div>

            <h2 className="text-4xl md:text-4xl font-black leading-tight">
                Tecnologías
            </h2>

            <div className="relative flex flex-col gap-8 pl-5">
                <div
                    className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full"
                    style={{
                        background:
                            "linear-gradient(to bottom, var(--primary), color-mix(in oklab, var(--primary) 25%, transparent) 65%, transparent)",
                    }}
                />
                {tiers.map((tier, index) => (
                    <StackTier
                        key={tier.id}
                        tier={tier}
                        size={index === 0 ? "lg" : "sm"}
                    />
                ))}
            </div>
        </div>
    );
}
