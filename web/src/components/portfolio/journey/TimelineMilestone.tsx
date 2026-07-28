import type { ReactNode } from "react";

interface TimelineMilestoneProps {
    year: string;
    children: ReactNode;
    /** El último hito corta la línea vertical del timeline. */
    isLast?: boolean;
}

export function TimelineMilestone({
    year,
    children,
    isLast,
}: TimelineMilestoneProps) {
    const spacing = isLast ? "" : "pb-8";

    return (
        <div className="grid grid-cols-[84px_28px_1fr] items-start md:grid-cols-[118px_34px_1fr]">
            <div className={`flex flex-col items-end text-right ${spacing}`}>
                <span className="font-mono text-[13px] font-bold text-muted-foreground">
                    {year}
                </span>
            </div>

            <div className="flex flex-col items-center self-stretch">
                <span className="mt-1 box-border block h-[9px] w-[9px] shrink-0 rounded-full border border-muted-foreground bg-secondary dark:bg-[#151515]" />
                {!isLast && <span className="block w-px flex-1 bg-border" />}
            </div>

            <div className={`pl-1 ${spacing}`}>
                <span className="text-sm text-foreground">{children}</span>
            </div>
        </div>
    );
}
