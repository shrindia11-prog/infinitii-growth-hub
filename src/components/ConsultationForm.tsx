import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  location: z.string().min(2, "Location is required"),
  service: z.string().min(10, "Please provide some more details about the service"),
});

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      location: "",
      service: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbzpviuJrRHB0gfkSgjzD5XYAOTMifKh9y9mlx2KhGk5b6s-pFmwJzccfetopLwgnNQNtw/exec";

      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      console.log("Form submitted:", values);
      
      // Play a subtle success sound
      const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3");
      audio.volume = 0.3;
      audio.play().catch(() => {}); // Catch and ignore if browser blocks autoplay

      toast({
        title: "Success! 🎉",
        description: "Your consultation request has been received. One of our experts will contact you within 24 hours.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-left p-6 bg-secondary/20 rounded-xl border border-border/50">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="John Doe" 
                  className="bg-background border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="john@example.com" 
                  className="bg-background border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Company</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Company name" 
                  className="bg-background border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Location</FormLabel>
              <FormControl>
                <Input 
                  placeholder="City, Country" 
                  className="bg-background border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground font-medium">Service Required</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="What service are you looking for?" 
                  className="min-h-[100px] bg-background border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="navy" className="w-full shadow-elevated hover-elevate active-elevate-2 transition-all duration-300" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Book Free Consultation"
          )}
        </Button>
      </form>
    </Form>
  );
}
