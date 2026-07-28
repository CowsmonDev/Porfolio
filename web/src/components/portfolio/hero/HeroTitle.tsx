interface HeroTitleProps {
    title: string;
    highlight: string;
    subtitle: string;
}

export function HeroTitle({ title, highlight, subtitle }: HeroTitleProps) {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-foreground">
                {title}{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-rose-500">
                    {highlight}
                </span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-normal leading-relaxed max-w-150">
                {subtitle}
            </p>
        </div>
    );
}
