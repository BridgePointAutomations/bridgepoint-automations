import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { clientSecurity } from "@/lib/security";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email is too long"),
  phone: z.string()
    .trim()
    .max(20, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  message: z.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
  honeypot: z.string().optional()
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      honeypot: ""
    }
  });
  
  const messageLength = watch("message")?.length || 0;

  const onSubmit = async (data: ContactFormData) => {
    // Security checks
    if (!clientSecurity.validateHoneypot(data.honeypot || "")) return;
    if (!clientSecurity.checkRateLimit("quick_contact", 3)) {
      toast({
        title: "Too Many Requests",
        description: "Please wait a moment before submitting again.",
        variant: "destructive",
      });
      return;
    }
    if (!clientSecurity.validateEmail(data.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize inputs
      const sanitizedData = {
        name: clientSecurity.sanitizeInput(data.name),
        email: clientSecurity.sanitizeInput(data.email),
        phone: clientSecurity.sanitizeInput(data.phone || ""),
        message: clientSecurity.sanitizeInput(data.message),
        form_type: "contact",
        timestamp: new Date().toISOString(),
        source: window.location.href
      };

      // TODO: Set up proper email delivery
      // Option 1: Create a Zapier webhook at https://zapier.com/app/zaps
      // Option 2: Set up Resend edge function (see project docs)
      // For now, showing success message - NO EMAILS WILL BE SENT
      const webhookUrl = "YOUR_ZAPIER_WEBHOOK_URL_HERE";
      
      if (webhookUrl === "YOUR_ZAPIER_WEBHOOK_URL_HERE") {
        console.warn("Contact form webhook not configured. Form data:", sanitizedData);
        // Still show success to user, but log warning
      } else {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify(sanitizedData),
        });
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll respond within 24 hours.",
      });

      reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Submission Error",
        description: "There was an issue sending your message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Heading & Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Let's <span className="text-gradient">talk!</span>
              </h2>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <a 
                    href="mailto:support@bridgepointautomations.com" 
                    className="text-lg text-primary hover:text-primary/80 transition-colors"
                  >
                    support@bridgepointautomations.com
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Phone</div>
                  <a 
                    href="tel:+14125552743" 
                    className="text-lg text-primary hover:text-primary/80 transition-colors"
                  >
                    (412) 555-BRIDGE
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Simple Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                
                {/* Name Field */}
                <div>
                  <Label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="bg-white border-input focus:ring-2 focus:ring-ring focus:border-transparent"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="bg-white border-input focus:ring-2 focus:ring-ring focus:border-transparent"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <Label htmlFor="phone" className="text-sm text-muted-foreground mb-2 block">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="bg-white border-input focus:ring-2 focus:ring-ring focus:border-transparent"
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <Label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    className="bg-white border-input focus:ring-2 focus:ring-ring focus:border-transparent min-h-[150px] resize-none"
                    disabled={isSubmitting}
                  />
                  <div className="flex justify-between items-center mt-1">
                    <div>
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message.message}</p>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {messageLength} / 1000
                    </p>
                  </div>
                </div>

                {/* Honeypot Field (Hidden) */}
                <input
                  type="text"
                  {...register("honeypot")}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 h-auto text-base font-medium transition-colors duration-200"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                  {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;