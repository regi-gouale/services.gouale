import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24"
      aria-labelledby="contact-title"
    >
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <h2
            id="contact-title"
            className="font-poppins mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Contactez-Nous
          </h2>
          <div className="rounded-xl border bg-card p-6 shadow-lg transition-shadow hover:shadow-xl sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
