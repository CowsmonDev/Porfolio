import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, LucideIcon } from "lucide-react";

interface FooterLink {
    label: string;
    href: string;
    icon: LucideIcon;
}

const footerLinks: FooterLink[] = [
    { label: "GitHub", href: "https://github.com/CowsmonDev", icon: Github },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/agustin-crespo-dev",
        icon: Linkedin,
    },
    { label: "Email", href: "mailto:agustin.crespo22@gmail.com", icon: Mail },
];

export function Footer() {
    return (
        <footer className="bg-secondary dark:bg-[#111] border-t border-border">
            <div className="mx-auto max-w-360 w-full px-4 lg:px-12 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <Image
                            src="/Logo2reducidoreducido.png"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8 rounded-md object-cover"
                        />
                        <span className="text-lg font-bold tracking-tight">
                            CowsmonDev
                        </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2">
                        {footerLinks.map(({ label, href, icon: Icon }) => {
                            // El mailto abre el cliente de correo, no una pestaña.
                            const opensInNewTab = !href.startsWith("mailto:");

                            return (
                                <Button
                                    key={label}
                                    variant="ghost"
                                    size="icon"
                                    asChild
                                >
                                    <a
                                        href={href}
                                        target={
                                            opensInNewTab ? "_blank" : undefined
                                        }
                                        rel={
                                            opensInNewTab
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span className="sr-only">{label}</span>
                                    </a>
                                </Button>
                            );
                        })}
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
