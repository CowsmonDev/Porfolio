import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#111] border-t border-border">
            <div className="mx-auto max-w-360 w-full px-4 lg:px-12 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <div className="relative h-8 w-8 overflow-hidden rounded-md">
                            <Image
                                src="/Logo2reducidoreducido.png"
                                alt="Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-lg font-bold tracking-tight">
                            CowsmonDev
                        </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                            <Link
                                href="https://github.com/CowsmonDev"
                                target="_blank"
                            >
                                <Github className="w-5 h-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link
                                href="https://linkedin.com/in/agustin-crespo-dev"
                                target="_blank"
                            >
                                <Linkedin className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="mailto:agustin.crespo22@gmail.com">
                                <Mail className="w-5 h-5" />
                                <span className="sr-only">Email</span>
                            </Link>
                        </Button>
                    </div>

                    {/* Copyright */}
                    <div className="text-muted-foreground/60 text-sm">
                        © {new Date().getFullYear()} Agustín. Todos los derechos
                        reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
}
