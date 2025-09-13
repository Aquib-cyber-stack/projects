import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Smart Education
            </h1>
            
            <p className="text-lg lg:text-xl text-white/90 mb-8">
              Learn programming and web development in a simple, beginner-friendly way. 
              Start your coding journey today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="lg">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Browse Courses
              </Button>
            </div>

            {/* Simple stats */}
            <div className="flex justify-center lg:justify-start gap-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5K+</div>
                <div className="text-sm">Students</div>
              </div>
            </div>
          </div>

          {/* Simple Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={heroImage} 
                alt="Smart Education - Learn Programming" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;