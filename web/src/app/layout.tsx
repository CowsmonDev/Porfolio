import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Agustín - Systems Engineering Portfolio",
    description:
        "Systems Engineer specializing in high-scale Distributed Systems and Microservices. Expert in Java Spring Boot, NestJS, and complex PostgreSQL modeling.",
    icons: {
        icon: "/Logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
            >
                {children}
            </body>
        </html>
    );
}
