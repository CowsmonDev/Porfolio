"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactEmail } from "./actions";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };

        const result = await sendContactEmail(data);

        if (result.success) {
            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } else {
            setStatus("error");
            setErrorMessage(result.error || "Error desconocido");
        }
    }

    // Al retomar la escritura, el resultado del envío anterior ya no aplica.
    function clearPreviousResult() {
        if (status === "success" || status === "error") {
            setStatus("idle");
            setErrorMessage("");
        }
    }

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="text-3xl md:text-5xl font-black mb-4">
                    Conectemos
                </h2>
                <p className="text-muted-foreground text-lg">
                    ¿Interesado en arquitectura escalable? Completa el
                    formulario o conecta por redes.
                </p>
            </div>
            <form
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
                onChange={clearPreviousResult}
            >
                <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Juan Pérez"
                        required
                        disabled={status === "loading"}
                        className="bg-white dark:bg-background"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="juan@ejemplo.com"
                        required
                        disabled={status === "loading"}
                        className="bg-white dark:bg-background"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Hablemos de sistemas distribuidos..."
                        required
                        disabled={status === "loading"}
                        className="bg-white dark:bg-background"
                    />
                </div>

                {status === "success" && (
                    <div className="flex items-center gap-2 text-green-500 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        ¡Mensaje enviado! Te responderé pronto.
                    </div>
                )}

                {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errorMessage}
                    </div>
                )}

                <Button
                    type="submit"
                    size="lg"
                    className="mt-2"
                    disabled={status === "loading"}
                >
                    {status === "loading" ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        "Enviar Mensaje"
                    )}
                </Button>
            </form>
        </div>
    );
}
