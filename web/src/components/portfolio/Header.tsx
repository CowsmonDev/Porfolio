"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Download, Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
    { href: "#about-tech", label: "Sobre Mi" },
    { href: "#projects", label: "Proyectos" },
    { href: "#experience", label: "Trayectoria" },
    { href: "#contact", label: "Conectemos" },
];

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
            <div className="mx-auto max-w-360 px-4 lg:px-12">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <Image
                            src="/Logo2reducidoreducido.png"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8 rounded-md object-cover"
                        />
                        <h2 className="text-lg font-bold tracking-tight">
                            CowsmonDev
                        </h2>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
                        <div className="flex items-center gap-9">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <Button
                            className="shadow-[0_0_15px_rgba(161,18,59,0.5)]"
                            asChild
                        >
                            <a
                                href="/CV_Agustin_Crespo.pdf"
                                download="CV_Agustin_Crespo.pdf"
                            >
                                <Download className="w-4 h-4" />
                                Curriculum
                            </a>
                        </Button>
                        <ModeToggle />
                    </nav>

                    {/* Mobile Navigation */}
                    <div className="flex md:hidden items-center gap-1">
                        <ModeToggle />
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Abrir menú</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-72">
                                <SheetHeader>
                                    <SheetTitle className="text-left">
                                        CowsmonDev
                                    </SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col gap-1 px-4">
                                    {navLinks.map((link) => (
                                        <SheetClose asChild key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="rounded-md px-2 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                                            >
                                                {link.label}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>
                                <div className="mt-2 px-4">
                                    <SheetClose asChild>
                                        <Button className="w-full" asChild>
                                            <a
                                                href="/CV_Agustin_Crespo.pdf"
                                                download="CV_Agustin_Crespo.pdf"
                                            >
                                                <Download className="w-4 h-4" />
                                                Curriculum
                                            </a>
                                        </Button>
                                    </SheetClose>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
