"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez saisir une adresse e-mail valide"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(500, "Le message ne doit pas dépasser 500 caractères"),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(_values: z.infer<typeof formSchema>) {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(
        "Message envoyé avec succès ! Nous vous répondrons bientôt."
      );
      form.reset();
    } catch {
      toast.error("Une erreur s'est produite. Veuillez réessayer plus tard.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        aria-label="Formulaire de contact"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input
                  placeholder="Jean Dupont"
                  {...field}
                  aria-describedby={
                    form.formState.errors.name ? "name-error" : undefined
                  }
                />
              </FormControl>
              <FormMessage id="name-error" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="jean@exemple.fr"
                  {...field}
                  aria-describedby={
                    form.formState.errors.email ? "email-error" : undefined
                  }
                />
              </FormControl>
              <FormMessage id="email-error" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Parlez-nous de votre événement..."
                  className="min-h-[120px] resize-y"
                  maxLength={500}
                  {...field}
                  aria-describedby={
                    form.formState.errors.message ? "message-error" : undefined
                  }
                />
              </FormControl>
              <FormMessage id="message-error" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full transition-transform hover:scale-105"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? "Envoi en cours..."
            : "Envoyer le Message"}
        </Button>
      </form>
    </Form>
  );
}
