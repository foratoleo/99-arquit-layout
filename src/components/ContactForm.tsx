'use client';

import { useActionState, useEffect } from 'react';
import { submitContactForm } from '@/app/contact/actions';

interface FormState {
  success: boolean;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
  message?: string;
}

const initialState: FormState = {
  success: false,
  errors: {},
};

/**
 * ContactForm - Minimal 3-field contact form with honeypot anti-spam
 *
 * Provides a secondary conversion path for users who prefer email over WhatsApp.
 * Uses honeypot technique to block spam without disrupting the luxury feel with CAPTCHA.
 */
export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.success) {
      // Reset form after 5 seconds
      const timer = setTimeout(() => {
        window.location.reload();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.success]);

  if (state.success) {
    return (
      <div className="py-8 px-6 text-center">
        <p className="text-lg text-black-400">
          Obrigado. Entraremos em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6 py-8 px-6">
      {/* Honeypot field - hidden from users but visible to bots */}
      <div className="absolute -left-[9999px] w-px h-px overflow-hidden opacity-0">
        <label htmlFor="website" className="sr-only">
          Website (leave empty)
        </label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="border-0"
        />
      </div>

      {/* Name field */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm text-greige-700 font-normal"
        >
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength={2}
          aria-invalid={!!state.errors?.name}
          aria-describedby={state.errors?.name ? 'name-error' : undefined}
          className="w-full px-4 py-3 bg-white border border-greige-300 text-black-400 placeholder:text-greige-400 focus:outline-none focus:border-black-400 transition-colors"
          placeholder="Seu nome"
        />
        {state.errors?.name && (
          <p id="name-error" className="text-xs text-red-500" role="alert">
            {state.errors.name}
          </p>
        )}
      </div>

      {/* Email field */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm text-greige-700 font-normal"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-invalid={!!state.errors?.email}
          aria-describedby={state.errors?.email ? 'email-error' : undefined}
          className="w-full px-4 py-3 bg-white border border-greige-300 text-black-400 placeholder:text-greige-400 focus:outline-none focus:border-black-400 transition-colors"
          placeholder="seu@email.com"
        />
        {state.errors?.email && (
          <p id="email-error" className="text-xs text-red-500" role="alert">
            {state.errors.email}
          </p>
        )}
      </div>

      {/* Message field */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm text-greige-700 font-normal"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={4}
          aria-invalid={!!state.errors?.message}
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
          className="w-full px-4 py-3 bg-white border border-greige-300 text-black-400 placeholder:text-greige-400 focus:outline-none focus:border-black-400 transition-colors resize-none"
          placeholder="Conte-nos sobre seu projeto..."
        />
        {state.errors?.message && (
          <p id="message-error" className="text-xs text-red-500" role="alert">
            {state.errors.message}
          </p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full px-6 py-3 bg-black-500 text-white text-sm font-normal hover:bg-black-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isPending ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Enviando...
          </span>
        ) : (
          'Enviar'
        )}
      </button>

      {state.message && !state.success && (
        <p className="text-sm text-red-500 text-center" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}
