import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock, Smartphone, Heart, Lightbulb, Target } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Easy to Understand",
    description: "Simple explanations and step-by-step tutorials for beginners",
    color: "text-blue-500",
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "No rush - take your time to understand each concept",
    color: "text-green-500",
  },
  {
    icon: Smartphone,
    title: "Learn Anywhere",
    description: "Study on your phone, tablet, or computer - wherever you are",
    color: "text-purple-500",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Smart Education?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, friendly, and designed for beginners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="text-center p-6 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;