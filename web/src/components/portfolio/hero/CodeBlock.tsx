interface CodeBlockProps {
    filename?: string;
    statusMessage?: string;
}

export function CodeBlock({
    filename = "Engineer.ts",
    statusMessage = "Compilado Exitosamente (tsc)",
}: CodeBlockProps) {
    return (
        <div className="w-full lg:w-150 xl:w-175 flex justify-center lg:justify-end">
            <div className="w-full rounded-lg overflow-hidden bg-[#0d0d0d] border border-border shadow-2xl font-mono text-sm group hover:border-primary/50 transition-colors duration-300">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-muted-foreground text-xs">
                        {filename}
                    </div>
                    <div className="w-8" />
                </div>

                {/* Code Content */}
                <div className="p-6 text-gray-300 overflow-x-auto">
                    <pre>
                        <code>
                            <span className="text-primary">class</span>{" "}
                            <span className="text-yellow-400">Engineer</span>
                            {" {\n"}
                            {"  "}
                            <span className="text-purple-400">public</span>{" "}
                            name: <span className="text-blue-400">string</span>
                            {";\n"}
                            {"  "}
                            <span className="text-purple-400">public</span>{" "}
                            lastName:{" "}
                            <span className="text-blue-400">string</span>
                            {";\n"}
                            {"  "}
                            <span className="text-purple-400">public</span>{" "}
                            focus: <span className="text-blue-400">string</span>
                            []{";\n"}
                            {"  "}
                            <span className="text-purple-400">public</span>{" "}
                            stack: <span className="text-blue-400">string</span>
                            []{";\n"}
                            {"  "}
                            <span className="text-primary">constructor</span>
                            (name: <span className="text-blue-400">string</span>
                            , lastName:{" "}
                            <span className="text-blue-400">string</span>
                            {") {\n"}
                            {"    "}
                            <span className="text-blue-400">this</span>.name =
                            name
                            {";\n"}
                            {"    "}
                            <span className="text-blue-400">this</span>.lastName
                            = lastName{";\n"}
                            {"    "}
                            <span className="text-blue-400">this</span>.focus =
                            [{"\n"}
                            {"        "}
                            <span className="text-green-400">
                                &apos;Distributed Systems&apos;
                            </span>
                            ,{"\n"}
                            {"        "}
                            <span className="text-green-400">
                                &apos;Systems Architecture&apos;
                            </span>
                            {"\n    ];\n"}
                            {"    "}
                            <span className="text-blue-400">this</span>.stack =
                            [{"\n"}
                            {"        "}
                            <span className="text-green-400">
                                &apos;Java/Spring Boot&apos;
                            </span>
                            ,{"\n"}
                            {"        "}
                            <span className="text-green-400">
                                &apos;NestJS&apos;
                            </span>
                            ,{"\n"}
                            {"        "}
                            <span className="text-green-400">
                                &apos;PostgreSQL&apos;
                            </span>
                            {"\n    ];\n"}
                            {"  }\n}\n"}
                            <span className="text-purple-400">const</span>{" "}
                            agustin = <span className="text-primary">new</span>{" "}
                            <span className="text-yellow-400">Engineer</span>(
                            {"\n"}
                            {"  "}
                            <span className="text-green-400">
                                &apos;Agustín&apos;
                            </span>
                            ,{"\n"}
                            {"  "}
                            <span className="text-green-400">
                                &apos;Systems&apos;
                            </span>
                            {"\n);"}
                        </code>
                    </pre>
                </div>

                {/* Status Bar */}
                <div className="border-t border-border p-2 bg-[#111] text-xs flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-green-500">{statusMessage}</span>
                    <span className="text-muted-foreground ml-auto">0s</span>
                </div>
            </div>
        </div>
    );
}
