import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#111] border-t border-border">
            <div className="mx-auto max-w-360 w-full px-4 lg:px-12 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 flex items-center justify-center bg-primary rounded text-white font-bold font-mono text-xs">
                            &lt;/&gt;
                        </div>
                        <span className="text-muted-foreground font-bold">
                            Agustín
                        </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                            <Link
                                href="https://github.com/your-username"
                                target="_blank"
                            >
                                <Github className="w-5 h-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link
                                href="https://linkedin.com/in/your-username"
                                target="_blank"
                            >
                                <Linkedin className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link
                                href="https://twitter.com/your-username"
                                target="_blank"
                            >
                                <Twitter className="w-5 h-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </Button>
                    </div>

                    {/* Copyright */}
                    <div className="text-muted-foreground/60 text-sm">
                        © {new Date().getFullYear()} Agustín. All rights
                        reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
