"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const socialLinks = [
    {
        name: "GitHub",
        description: "Mira mis repositorios y contribuciones.",
        icon: Github,
        href: "https://github.com/your-username",
    },
    {
        name: "LinkedIn",
        description: "Conectemos y hablemos de oportunidades.",
        icon: Linkedin,
        href: "https://linkedin.com/in/your-username",
    },
    {
        name: "Email",
        description: "Contacto directo para consultas.",
        icon: Mail,
        href: "mailto:your-email@example.com",
    },
];

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-[#111]">
            <div className="mx-auto max-w-360 w-full px-4 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start pb-20">
                    {/* Form Column */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-4">
                                Conectemos
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                ¿Interesado en arquitectura escalable? Completa
                                el formulario o conecta por redes.
                            </p>
                        </div>
                        <form
                            className="flex flex-col gap-6"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Nombre</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Juan Pérez"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="juan@ejemplo.com"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="message">Mensaje</Label>
                                <Textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Hablemos de sistemas distribuidos..."
                                />
                            </div>
                            <Button type="submit" size="lg" className="mt-2">
                                Enviar Mensaje
                            </Button>
                        </form>
                    </div>

                    {/* Social Links Column */}
                    <div className="flex flex-col gap-6 lg:pt-24">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-6 p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-secondary transition-all"
                            >
                                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center text-white group-hover:text-primary transition-colors">
                                    <social.icon className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <span className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                        {social.name}
                                    </span>
                                    <span className="text-muted-foreground text-sm">
                                        {social.description}
                                    </span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
