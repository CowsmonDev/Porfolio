import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-zinc-200 dark:bg-[#111]">
            <div className="mx-auto max-w-360 w-full px-4 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start pb-20">
                    {/* Form Column */}
                    <ContactForm />

                    {/* Social Links Column */}
                    <SocialLinks />
                </div>
            </div>
        </section>
    );
}
