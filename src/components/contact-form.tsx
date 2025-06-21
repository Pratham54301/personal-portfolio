'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type ContactFormState } from '@/app/contact/actions';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-gradient-to-r from-accent to-primary text-accent-foreground transition-opacity hover:opacity-90 rounded-xl"
      size="lg"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = {
    message: '',
    success: false,
    fields: {},
    issues: [],
  };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
          defaultValue={state.fields?.name}
          className="bg-secondary rounded-xl"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
          defaultValue={state.fields?.email}
          className="bg-secondary rounded-xl"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          rows={6}
          required
          defaultValue={state.fields?.message}
          className="bg-secondary rounded-xl"
        />
      </div>
      {state.issues && state.issues.length > 0 && (
        <div className="text-destructive text-sm">
          <ul>
            {state.issues.map((issue) => (
              <li key={issue}>- {issue}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <SubmitButton />
        <Button asChild size="lg" className="w-full rounded-xl">
          <Link href="https://forms.gle/7axq8mV9Y5T9YhmL8" target="_blank" rel="noopener noreferrer">
            Inquiry Now
          </Link>
        </Button>
      </div>
    </form>
  );
}
