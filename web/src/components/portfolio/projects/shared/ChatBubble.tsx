import type { ReactNode } from "react";

interface ChatBubbleProps {
    from: "user" | "bot";
    children: ReactNode;
    avatarBg?: string;
    avatarColor?: string;
    icon?: ReactNode;
    timestamp?: string;
}

export function ChatBubble({
    from,
    children,
    avatarBg = "#e8eef5",
    avatarColor = "#3f6f85",
    icon,
    timestamp,
}: ChatBubbleProps) {
    const isUser = from === "user";

    const avatar = icon ? (
        <span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
            style={{ background: avatarBg, color: avatarColor }}
        >
            {icon}
        </span>
    ) : null;

    return (
        <div className={`flex flex-col gap-0.5 ${isUser ? "items-end" : "items-start"}`}>
            <div
                className={`flex max-w-[92%] items-start gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}
            >
                {avatar}
                <div
                    className={`text-[11.5px] leading-relaxed ${
                        isUser
                            ? "rounded-[16px_16px_4px_16px] bg-[#0d2b45] px-3.5 py-2 text-white"
                            : "rounded-[16px_16px_16px_4px] border border-[#e8ecf1] bg-white px-3.5 py-2.5 text-[#31465c] shadow-[0_1px_2px_rgba(15,43,70,0.06)]"
                    }`}
                >
                    {children}
                </div>
            </div>
            {timestamp && (
                <span
                    className={`font-mono text-[9.5px] text-[#9aa7b5] ${isUser ? "pr-8" : "pl-8"}`}
                >
                    {timestamp}
                </span>
            )}
        </div>
    );
}
