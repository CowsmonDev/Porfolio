import { User, Bot, Send } from "lucide-react";
import { BrowserWindowChrome } from "./BrowserWindowChrome";
import { ChatBubble } from "./ChatBubble";

export function AlquilaPointChat() {
    return (
        <BrowserWindowChrome url="app.alquilapoint.com/chat">
            <div className="flex min-h-0 flex-1 flex-col bg-[#f6f7f9]">
                <div className="flex items-center justify-between gap-2.5 border-b border-[#e4e8ed] bg-white px-3.5 py-2.5">
                    <span className="text-[13px] font-semibold text-[#0f2b46]">
                        Portfolio · junio
                    </span>
                    <div className="flex items-center gap-1.5">
                        <span className="inline-flex h-[26px] items-center rounded-full bg-[#eceff3] px-2.5 text-[11px] font-semibold text-[#0f2b46]">
                            Volver
                        </span>
                        <span className="inline-flex h-[26px] items-center rounded-full bg-[#c81e2d] px-2.5 text-[11px] font-semibold text-white">
                            Eliminar
                        </span>
                    </div>
                </div>

                <div className="flex flex-1 flex-col gap-3 overflow-hidden p-3.5">
                    <div className="text-center text-[9.5px] font-bold tracking-widest text-[#9aa7b5]">
                        HOY, 26 DE JULIO
                    </div>

                    <ChatBubble
                        from="user"
                        icon={<User className="h-3 w-3" />}
                        avatarBg="#0d2b45"
                        avatarColor="#fff"
                        timestamp="22:08"
                    >
                        ¿Cuánto facturé en junio en Rivadavia 1240?
                    </ChatBubble>

                    <ChatBubble
                        from="bot"
                        icon={<Bot className="h-3 w-3" />}
                        timestamp="22:08"
                    >
                        <span>
                            En junio el edificio generó{" "}
                            <strong className="text-[#0f2b46]">$4.820.000</strong> sobre 7
                            contratos activos. Quedan 2 pagos sin comprobante cargado.
                        </span>
                        <div className="mt-2 flex flex-col gap-1 border-t border-[#eef1f5] pt-2">
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-[11px] text-[#64748b]">Cobrado</span>
                                <span className="font-mono text-[11px] font-semibold text-[#0f2b46]">
                                    $4.210.000
                                </span>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-[11px] text-[#64748b]">Pendiente</span>
                                <span className="font-mono text-[11px] font-semibold text-[#c81e2d]">
                                    $610.000
                                </span>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-[11px] text-[#64748b]">Ocupación</span>
                                <span className="font-mono text-[11px] font-semibold text-[#0f2b46]">
                                    82%
                                </span>
                            </div>
                        </div>
                    </ChatBubble>

                    <ChatBubble
                        from="user"
                        icon={<User className="h-3 w-3" />}
                        avatarBg="#0d2b45"
                        avatarColor="#fff"
                        timestamp="22:09"
                    >
                        ¿Qué unidades quedan libres la primera semana de agosto?
                    </ChatBubble>

                    <div className="flex items-start gap-2">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8eef5] text-[#3f6f85]">
                            <Bot className="h-3 w-3" />
                        </span>
                        <div className="flex items-center gap-1 rounded-[16px_16px_16px_4px] border border-[#e8ecf1] bg-white px-3.5 py-3 shadow-[0_1px_2px_rgba(15,43,70,0.06)]">
                            <span className="block h-[5px] w-[5px] animate-pulse rounded-full bg-[#9aa7b5]" />
                            <span className="block h-[5px] w-[5px] animate-pulse rounded-full bg-[#9aa7b5] [animation-delay:0.2s]" />
                            <span className="block h-[5px] w-[5px] animate-pulse rounded-full bg-[#9aa7b5] [animation-delay:0.4s]" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 border-t border-[#e4e8ed] bg-white px-3.5 py-3">
                    <div className="flex items-center gap-2 rounded-full border border-[#dfe4ea] bg-white py-1.5 pr-1.5 pl-4 shadow-[0_1px_2px_rgba(15,43,70,0.05)]">
                        <span className="flex-1 text-[11.5px] text-[#9aa7b5]">
                            Escribe un mensaje...
                        </span>
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#94a3b1] text-white">
                            <Send className="h-3 w-3" />
                        </span>
                    </div>
                    <span className="text-[9.5px] text-[#9aa7b5]">
                        Presiona Enter para enviar, Shift + Enter para nueva línea.
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-between gap-2.5 border-t border-border bg-card px-3.5 py-2.5">
                <span className="font-mono text-[10.5px] text-muted-foreground">
                    ms-chat · LangChain.js + Gemini
                </span>
                <span className="text-[10.5px] text-muted-foreground">
                    Responde solo sobre el portfolio permitido (ABAC)
                </span>
            </div>
        </BrowserWindowChrome>
    );
}
