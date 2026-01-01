import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <img
              src={logo}
              alt="Infinitii Management Consulting"
              className="h-32 md:h-44 mx-auto object-contain mix-blend-multiply"
            />
          </div>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-up tracking-wide"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            MANAGEMENT CONSULTING
          </p>

          {/* Main headline */}
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Transforming Vision Into{" "}
            <span className="text-metallic">Infinite Possibilities</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            Strategic consulting solutions that drive growth, optimize operations, 
            and unlock your organization's full potential in today's dynamic marketplace.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            <Button variant="navy" size="lg" className="group">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary/50 to-transparent" />
    </section>
  );
};

export default Hero;
