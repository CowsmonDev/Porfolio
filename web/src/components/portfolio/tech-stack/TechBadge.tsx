import type { TechItem } from "./shared/types";

interface TechBadgeProps {
    item: TechItem;
    size?: "lg" | "sm";
}

export function TechBadge({ item, size = "sm" }: TechBadgeProps) {
    const isLg = size === "lg";

    return (
        <span
            className={`inline-flex items-center rounded-lg border ${
                isLg ? "gap-[9px] py-2 pr-3.5 pl-2" : "gap-[9px] py-[7px] pr-3 pl-[7px]"
            }`}
            style={{
                backgroundColor: `${item.color}1A`,
                borderColor: `${item.color}55`,
            }}
        >
            <span
                className="flex shrink-0 items-center justify-center rounded-[5px] font-mono font-extrabold"
                style={{
                    width: isLg ? 24 : 21,
                    height: isLg ? 24 : 21,
                    fontSize: isLg ? 10 : 9.5,
                    backgroundColor: `${item.color}2B`,
                    color: `color-mix(in oklab, ${item.color} 55%, var(--foreground))`,
                }}
            >
                {item.abbr}
            </span>
            <span
                className={`whitespace-nowrap font-mono text-foreground ${
                    isLg ? "text-[13.5px]" : "text-xs"
                }`}
            >
                {item.label}
            </span>
        </span>
    );
}
