import { TrendingUp, Users, Target, BarChart3, Lightbulb, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: TrendingUp,
    title: "Strategic Planning",
    description:
      "Develop comprehensive roadmaps that align your organization's goals with actionable strategies for sustainable growth.",
  },
  {
    icon: Users,
    title: "Organizational Development",
    description:
      "Transform your workforce culture and structure to maximize efficiency, engagement, and long-term success.",
  },
  {
    icon: Target,
    title: "Performance Optimization",
    description:
      "Identify bottlenecks and implement solutions that enhance productivity across all operational levels.",
  },
  {
    icon: BarChart3,
    title: "Financial Advisory",
    description:
      "Expert guidance on financial restructuring, investment strategies, and risk management protocols.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description:
      "Foster a culture of innovation and digital transformation to stay ahead in competitive markets.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Comprehensive assessment and mitigation strategies to protect your business from potential threats.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-navy uppercase tracking-wider mb-3">
            Our Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Comprehensive Consulting <span className="text-metallic">Solutions</span>
          </h2>
          <p className="text-muted-foreground">
            Tailored strategies designed to address your unique challenges and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-navy/30 transition-all duration-500 hover:shadow-elevated animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-navy/10 flex items-center justify-center mb-6 group-hover:bg-navy/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
