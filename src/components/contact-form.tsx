'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type ContactFormState } from '@/app/contact/actions';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
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
    <Card className="p-0 border-none shadow-none">
      <CardContent className="p-0">
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
              className="bg-secondary"
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
              className="bg-secondary"
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
              className="bg-secondary"
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
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
