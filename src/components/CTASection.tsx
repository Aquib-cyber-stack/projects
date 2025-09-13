import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Access to 500+ premium courses",
  "Personalized learning paths",
  "24/7 community support",
  "Certificate of completion",
  "Mobile app access",
  "Progress tracking & analytics"
];

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Join thousands of learners who are already advancing their careers 
              with Smart Education. Start your journey today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Benefits List */}
            <div className="text-left animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold text-white mb-6">
                What you'll get:
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit} 
                    className="flex items-center space-x-3 animate-fade-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <div className="text-3xl font-bold text-white mb-2">
                    Start Free Trial
                  </div>
                  <div className="text-white/80">
                    No credit card required
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full bg-white text-primary hover:bg-white/90 group text-lg py-6"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    Schedule a Demo
                  </Button>
                </div>

                <div className="mt-6 text-center text-white/70 text-sm">
                  ⭐ Trusted by 50,000+ learners worldwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;