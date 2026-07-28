import { Github, Linkedin, Mail, ArrowRight, LucideIcon } from "lucide-react";

interface SocialLink {
    name: string;
    description: string;
    icon: LucideIcon;
    href: string;
}

const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        description: "Mira mis repositorios y contribuciones.",
        icon: Github,
        href: "https://github.com/CowsmonDev",
    },
    {
        name: "LinkedIn",
        description: "Conectemos y hablemos de oportunidades.",
        icon: Linkedin,
        href: "https://linkedin.com/in/agustin-crespo-dev",
    },
    {
        name: "Email",
        description: "Contacto directo para consultas.",
        icon: Mail,
        href: "mailto:agustin.crespo22@gmail.com",
    },
];

export function SocialLinks() {
    return (
        <div className="flex flex-col gap-6 lg:pt-24">
            {socialLinks.map((social) => {
                // El mailto abre el cliente de correo: en pestaña nueva deja una en blanco.
                const opensInNewTab = !social.href.startsWith("mailto:");

                return (
                    <a
                        key={social.name}
                        href={social.href}
                        target={opensInNewTab ? "_blank" : undefined}
                        rel={opensInNewTab ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-6 p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-secondary transition-all"
                    >
                        <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center text-foreground group-hover:text-primary transition-colors">
                            <social.icon className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {social.name}
                            </span>
                            <span className="text-muted-foreground text-sm">
                                {social.description}
                            </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </a>
                );
            })}
        </div>
    );
}
