import { CheckCircle } from "lucide-react";

const highlights = [
  "20+ Years of Industry Experience",
  "500+ Successful Client Engagements",
  "Global Network of Expert Consultants",
  "Proven Track Record of Results",
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-navy uppercase tracking-wider mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
              Building Success Through{" "}
              <span className="text-metallic">Strategic Excellence</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Infinitii Management Consulting, we believe every organization holds 
              infinite potential. Our mission is to unlock that potential through 
              strategic insight, operational excellence, and transformative leadership.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Founded on principles of integrity, innovation, and results-driven 
              methodology, we partner with businesses across industries to navigate 
              complexity and achieve sustainable growth.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-navy flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy/10 via-accent/20 to-navy/5 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-card rounded-3xl shadow-elevated border border-border/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl md:text-7xl font-display font-bold text-metallic mb-2">
                    ∞
                  </div>
                  <p className="text-lg font-display text-foreground font-medium">
                    Infinite Possibilities
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Unlocking Your Potential
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
