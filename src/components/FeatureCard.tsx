import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: string;
}

const FeatureCard = ({ icon: Icon, title, description, delay = "0s" }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border-primary/10 animate-fade-in" style={{ animationDelay: delay }}>
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-300">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-card-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;