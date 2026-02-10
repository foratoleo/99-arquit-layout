'use server';

/**
 * Server action for contact form submission
 *
 * Features:
 * - Honeypot validation to block spam bots
 * - Field-level validation
 * - Console logging (v1 - no email sending yet)
 */

interface FormState {
  success: boolean;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
  message?: string;
}

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Extract form data
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const website = formData.get('website') as string;

  // Honeypot validation - if bot filled the hidden field, return fake success
  if (website && website.trim() !== '') {
    console.log('[HONEYPOT] Spam blocked - bot filled hidden field:', {
      website,
      timestamp: new Date().toISOString(),
    });
    // Return fake success to not alert the spammer
    return { success: true };
  }

  // Validation errors object
  const errors: FormState['errors'] = {};

  // Name validation
  if (!name || name.trim().length < 2) {
    errors.name = 'Por favor, insira seu nome completo (mínimo 2 caracteres).';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Por favor, insira um email válido.';
  }

  // Message validation
  if (!message || message.trim().length < 10) {
    errors.message = 'Por favor, insira uma mensagem (mínimo 10 caracteres).';
  }

  // If there are validation errors, return them
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  // Log submission (v1 - console only, no email sending)
  console.log('[CONTACT FORM] New submission received:', {
    timestamp: new Date().toISOString(),
    name: name.trim(),
    email: email.trim(),
    messageLength: message.trim().length,
    messagePreview: message.trim().substring(0, 100) + (message.length > 100 ? '...' : ''),
  });

  // TODO v2: Integrate email service (Resend/SendGrid)
  // Example:
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({...});

  return { success: true };
}
