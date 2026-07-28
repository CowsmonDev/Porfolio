import { Lock } from "lucide-react";
import type { ReactNode } from "react";

interface BrowserWindowChromeProps {
    url: string;
    children: ReactNode;
}

export function BrowserWindowChrome({ url, children }: BrowserWindowChromeProps) {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
            <div className="flex items-center gap-3 border-b border-border bg-section-dark px-3 py-2">
                <div className="flex gap-1.5">
                    <span className="block h-2.5 w-2.5 rounded-full bg-zinc-600" />
                    <span className="block h-2.5 w-2.5 rounded-full bg-zinc-600" />
                    <span className="block h-2.5 w-2.5 rounded-full bg-zinc-600" />
                </div>
                <div className="flex flex-1 justify-center">
                    <div className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1 font-mono text-[10.5px] text-muted-foreground">
                        <Lock className="h-2.5 w-2.5" />
                        {url}
                    </div>
                </div>
                <div className="w-11" />
            </div>
            <div className="flex flex-1 flex-col overflow-hidden">{children}</div>
        </div>
    );
}
