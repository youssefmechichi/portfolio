import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { Textarea } from '../components/ui/textarea.jsx';
import { Label } from '../components/ui/label.jsx';
import { toast } from 'sonner';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const CONTACT_EMAIL = 'youssefmechichi@outlook.com';
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact';
const CONTACT_ACCESS_KEY = import.meta.env.VITE_CONTACT_ACCESS_KEY;

async function readContactResponse(response) {
  const contentType = response.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    return response.json();
  }

  return {
    error: 'Contact API is unavailable. If you are testing locally, run the app with Vercel so /api/contact is available.'
  };
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});
function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  });
  const onSubmit = async data => {
    setIsSubmitting(true);

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          access_key: CONTACT_ACCESS_KEY,
          subject: `Portfolio message from ${data.name}`
        })
      });

      if (!response.ok) {
        const result = await readContactResponse(response);
        throw new Error(result.error || 'Message delivery failed');
      }

      toast.success('Message sent successfully');
      reset();
    } catch (error) {
      toast.error(error.message || 'Could not send your message. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return <>
      <Helmet>
        <title>Contact - DevPortfolio</title>
        <meta name="description" content="Get in touch to discuss AWS cloud development projects, consulting opportunities, or technical collaboration." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{
                letterSpacing: '-0.02em'
              }}>
                  Get in touch
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Interested in working together or have questions about my projects? Send me a message and I'll get back to you within 24 hours.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Information */}
                <motion.div initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }} className="space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-6">Contact information</h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            {CONTACT_EMAIL}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-sm text-muted-foreground">
                            Paris, France
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <h3 className="font-medium mb-3">Response time</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      I typically respond to messages within 24 hours during business days. For urgent inquiries, please mention it in your message.
                    </p>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.6,
                delay: 0.3
              }} className="lg:col-span-2">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" type="text" placeholder="Your name" className="text-foreground placeholder:text-muted-foreground" {...register('name')} />
                      {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="text-foreground placeholder:text-muted-foreground" {...register('email')} />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell me about your project or inquiry..." rows={6} className="text-foreground placeholder:text-muted-foreground resize-none" {...register('message')} />
                      {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto transition-all duration-200 active:scale-[0.98]">
                      {isSubmitting ? <>Sending...</> : <>
                          <Send className="h-4 w-4 mr-2" />
                          Send message
                        </>}
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>;
}
export default ContactPage;
