"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    vscDarkPlus,
    oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";

const sagaCode = `// Sincronización REST entre servicios
async confirmReservation(dto: ConfirmDto) {
  // 1. Verificar disponibilidad
  const availability = await this.rentalsClient
    .checkAvailability(dto.apartmentId, dto.dates);
  
  if (!availability.isAvailable) {
    throw new ConflictException('DATES_UNAVAILABLE');
  }

  // 2. Crear intención de pago
  const payment = await this.paymentsClient
    .createIntent({ amount: dto.amount });

  // 3. Confirmar reserva con rollback
  try {
    await this.rentalsClient.confirm(dto.intentId);
  } catch (error) {
    await this.paymentsClient.cancel(payment.id);
    throw error;
  }
}`;

export function ConsistencySlide() {
    const { resolvedTheme } = useTheme();
    const codeStyle = resolvedTheme === "dark" ? vscDarkPlus : oneLight;

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full max-w-2xl rounded-lg bg-code-bg border border-border font-mono text-sm shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
                    <span className="text-xs text-cyan-500 font-bold">
                        reservations.service.ts
                    </span>
                    <Badge
                        variant="outline"
                        className="text-xs bg-cyan-950/30 text-cyan-500 border-cyan-900/50"
                    >
                        Saga Pattern
                    </Badge>
                </div>
                <div className="p-4 overflow-x-auto">
                    <SyntaxHighlighter
                        language="typescript"
                        style={codeStyle}
                        customStyle={{
                            margin: 0,
                            padding: 0,
                            background: "none",
                            fontSize: "0.75rem",
                            lineHeight: "1.4",
                        }}
                        codeTagProps={{
                            style: {
                                background: "none",
                            },
                        }}
                        wrapLines={true}
                        wrapLongLines={true}
                    >
                        {sagaCode}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
}
