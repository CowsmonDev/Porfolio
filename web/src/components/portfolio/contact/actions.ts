"use server";

import { Resend } from "resend";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

/**
 * El cuerpo del mail se arma como HTML, así que lo que escribe el visitante
 * tiene que escaparse antes de interpolarse: si no, puede inyectar markup
 * (por ejemplo un link de phishing) en el mail que recibimos.
 */
function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export async function sendContactEmail(data: ContactFormData) {
    const { name, email, message } = data;

    if (!name || !email || !message) {
        return { success: false, error: "Todos los campos son requeridos" };
    }

    // El cliente se crea acá y no a nivel de módulo: si falta la key, falla el
    // envío y no la carga de la página entera.
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error("Falta RESEND_API_KEY: no se puede enviar el mensaje.");
        return { success: false, error: "Error al enviar el mensaje" };
    }

    try {
        const resend = new Resend(apiKey);

        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "agustin.crespo22@gmail.com",
            replyTo: email,
            subject: `Nuevo mensaje de ${name} - Portfolio`,
            html: `
                <h2>Nuevo mensaje desde tu Portfolio</h2>
                <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
            `,
        });

        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: "Error al enviar el mensaje" };
    }
}
