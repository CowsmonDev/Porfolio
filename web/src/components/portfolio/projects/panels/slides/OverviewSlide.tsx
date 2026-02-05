"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Badge } from "@/components/ui/badge";

const jsonCode = `{
  "type": "INTENT",
  "status": "CONFLICT",
  "client": {
    "email": "tenant@example.com",
    "risk_profile": "LOW"
  },
  "conflicts": [
    {
      "admin_id": "mgr_77",
      "strategy": "MANUAL_RESOLUTION",
      "overlapping_dates": ["2026-02-14", "2026-02-15"]
    }
  ]
}`;

export function OverviewSlide() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full max-w-2xl rounded-lg bg-[#0d0d0d] border border-border font-mono text-sm shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
                    <span className="text-xs text-green-500 font-bold">
                        POST /rentals/intents/check-conflict
                    </span>
                    <Badge
                        variant="outline"
                        className="text-xs bg-red-950/30 text-red-500 border-red-900/50"
                    >
                        409 Conflict
                    </Badge>
                </div>
                <div className="p-4 overflow-x-auto">
                    <SyntaxHighlighter
                        language="json"
                        style={vscDarkPlus}
                        customStyle={{
                            margin: 0,
                            padding: 0,
                            background: "none",
                            fontSize: "0.875rem",
                            lineHeight: "1.5",
                        }}
                        codeTagProps={{
                            style: {
                                background: "none",
                            },
                        }}
                        wrapLines={true}
                        wrapLongLines={true}
                    >
                        {jsonCode}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
}
