import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen bg-background overflow-hidden flex flex-col relative">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 54, 93, 0.3) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(26, 54, 93, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Radial gradient accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-navy/5 to-transparent rounded-full blur-3xl" />
      </div>

      <Header />
      
      <main className="flex-1 flex items-center justify-center pt-20 px-6 md:px-12 relative z-10">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Divider line */}
            <div 
              className="w-16 h-[2px] bg-gradient-to-r from-navy to-navy/30 mb-6 mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
            />

            {/* Headline */}
            <h1 
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-semibold text-foreground leading-tight mb-4 animate-fade-up"
              style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
            >
              Transforming Vision Into{" "}
              <span className="text-metallic">Infinite Possibilities</span>
            </h1>

            {/* Subheadline */}
            <p 
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up"
              style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
            >
              Strategic consulting solutions that drive growth and unlock your organization's full potential.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
            >
              <Link to="/contact">
                <Button variant="navy" size="lg" className="group w-full sm:w-auto">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Video */}
          <div 
            className="order-1 lg:order-2 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 bg-gradient-to-br from-navy/20 via-transparent to-accent/20 rounded-2xl blur-sm" />
              <div className="absolute -inset-[1px] bg-gradient-to-br from-navy/30 to-navy/10 rounded-xl" />
              
              {/* Video container */}
              <div className="relative aspect-[4/3] md:aspect-video rounded-xl overflow-hidden shadow-elevated bg-navy/5">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Subtle overlay for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-navy/40 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-navy/40 rounded-br-lg" />
            </div>
          </div>

        </div>
      </main>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-navy/20 to-transparent" />
    </div>
  );
};

export default Index;
