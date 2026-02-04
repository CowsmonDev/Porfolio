"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
            <div className="mx-auto max-w-360 px-4 lg:px-12">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-primary font-mono text-sm font-bold text-white">
                            &lt;/&gt;
                        </div>
                        <h2 className="text-lg font-bold tracking-tight">AG</h2>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
                        <div className="flex items-center gap-9">
                            <Link
                                href="#about-tech"
                                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                            >
                                Philosophy & Tech
                            </Link>
                            <Link
                                href="#projects"
                                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                            >
                                Engineering
                            </Link>
                            <Link
                                href="#experience"
                                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                            >
                                Journey
                            </Link>
                        </div>
                        <Button className="shadow-[0_0_15px_rgba(161,18,59,0.5)]">
                            <Download className="w-4 h-4" />
                            Resume
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
