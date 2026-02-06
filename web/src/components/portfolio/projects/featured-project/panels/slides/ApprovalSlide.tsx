"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    vscDarkPlus,
    oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

const caslCode = `// ms-properties: CASL para acceso al catálogo
@Injectable()
export class PropertyAbilityFactory {
  createForUser(user: JwtPayload) {
    const { can, build } = new AbilityBuilder(createMongoAbility);
    const { role, userId } = user;

    if (role === 'OWNER') {
      can('manage', 'Property', { ownerId: userId });
      can('read', 'Apartment', { propertyId: { $in: user.propertyIds } });
    }
    if (role === 'ADMIN') can('manage', 'all');

    return build();
  }
}`;

export function ApprovalSlide() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const codeStyle =
        mounted && resolvedTheme === "light" ? oneLight : vscDarkPlus;

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full max-w-2xl rounded-lg bg-code-bg border border-border font-mono text-sm shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
                    <span className="text-xs text-amber-500 font-bold">
                        ms-properties/ability.factory.ts
                    </span>
                    <Badge
                        variant="outline"
                        className="text-xs bg-amber-950/30 text-amber-500 border-amber-900/50"
                    >
                        CASL Policy
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
                        {caslCode}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
}
