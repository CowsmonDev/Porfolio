import {
    Header,
    Hero,
    TechStack,
    Projects,
    Journey,
    Contact,
    Footer,
} from "@/components/portfolio";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <Hero />
            <TechStack />
            <Projects />
            <Journey />
            <Contact />
            <Footer />
        </main>
    );
}
