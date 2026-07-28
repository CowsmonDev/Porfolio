import { Bot, Send, User } from "lucide-react";
import { BrowserWindowChrome } from "../shared/BrowserWindowChrome";
import { ChatBubble } from "../shared/ChatBubble";

export function Chat() {
    return (
        <BrowserWindowChrome url="nexorh.app/asistente">
            <div className="flex flex-col bg-[#f7f8fa]">
                <div className="flex items-center justify-between gap-2.5 border-b border-[#e4e8ed] bg-white px-3.5 py-2.5">
                    <div className="flex items-center gap-2">
                        <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#e6f0ee] text-[#0f766e]">
                            <Bot className="h-3 w-3" />
                        </span>
                        <div className="flex flex-col">
                            <span className="text-[12.5px] leading-tight font-bold text-[#111c2e]">
                                Asistente de RRHH
                            </span>
                            <span className="text-[10px] text-[#64748b]">
                                Conversación privada
                            </span>
                        </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#e6f0ee] px-2.5 py-0.5 text-[10px] font-semibold text-[#0f766e]">
                        Confidencial
                    </span>
                </div>

                <div className="flex flex-col gap-2.5 p-3.5">
                    <ChatBubble
                        from="user"
                        icon={<User className="h-2.5 w-2.5" />}
                        avatarBg="#2f3e56"
                        avatarColor="#fff"
                    >
                        No me siento cómodo con cómo me habla Ramiro en las dailies. Me
                        interrumpe y me deja mal delante del equipo.
                    </ChatBubble>

                    <ChatBubble from="bot" icon={<Bot className="h-2.5 w-2.5" />}>
                        Lamento que estés pasando por eso — que te interrumpan delante
                        del equipo no es algo menor. ¿Venís notándolo hace tiempo o fue
                        puntual?
                    </ChatBubble>

                    <ChatBubble
                        from="user"
                        icon={<User className="h-2.5 w-2.5" />}
                        avatarBg="#2f3e56"
                        avatarColor="#fff"
                    >
                        Ya van cuatro o cinco veces este mes.
                    </ChatBubble>

                    <ChatBubble from="bot" icon={<Bot className="h-2.5 w-2.5" />}>
                        <span>
                            Gracias por contármelo. Lo dejo registrado como situación
                            recurrente; nadie de tu equipo lo ve sin tu permiso.
                        </span>
                        <div className="mt-2 flex flex-wrap gap-1 border-t border-[#eef1f5] pt-2">
                            <span className="w-full font-mono text-[9.5px] text-[#64748b]">
                                contexto extraído
                            </span>
                            <span className="rounded bg-[#eef2f7] px-1.5 py-0.5 font-mono text-[9.5px] text-[#111c2e]">
                                persona: R. Ávila
                            </span>
                            <span className="rounded bg-[#eef2f7] px-1.5 py-0.5 font-mono text-[9.5px] text-[#111c2e]">
                                tipo: interpersonal
                            </span>
                            <span className="rounded bg-[#eef2f7] px-1.5 py-0.5 font-mono text-[9.5px] text-[#111c2e]">
                                equipo: Plataforma
                            </span>
                            <span className="rounded bg-[#e6f0ee] px-1.5 py-0.5 font-mono text-[9.5px] text-[#0f766e]">
                                recurrencia: alta
                            </span>
                        </div>
                    </ChatBubble>
                </div>

                <div className="flex items-center gap-2 border-t border-[#e4e8ed] bg-white px-3.5 py-3">
                    <div className="flex flex-1 items-center gap-2 rounded-full border border-[#dfe4ea] py-1.5 pr-1.5 pl-3.5">
                        <span className="flex-1 text-[11px] text-[#9aa7b5]">
                            Escribí lo que quieras contar…
                        </span>
                        <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#0f766e] text-white">
                            <Send className="h-3 w-3" />
                        </span>
                    </div>
                </div>
            </div>
        </BrowserWindowChrome>
    );
}
