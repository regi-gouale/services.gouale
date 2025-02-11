import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-poppins mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Contactez-Nous
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}