import { Rocket, Shield, Zap, Heart, Globe, Users } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: "Lightning Fast",
      description: "Built with the latest technologies for optimal performance and speed.",
      delay: "0.1s"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee.",
      delay: "0.2s"
    },
    {
      icon: Zap,
      title: "Powerful Features",
      description: "Advanced functionality that scales with your growing needs.",
      delay: "0.3s"
    },
    {
      icon: Heart,
      title: "User Friendly",
      description: "Intuitive design that makes complex tasks simple and enjoyable.",
      delay: "0.4s"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with users worldwide through our international platform.",
      delay: "0.5s"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time collaboration tools.",
      delay: "0.6s"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build amazing applications with modern tools and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;