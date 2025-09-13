import { Button } from "@/components/ui/button";
import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold">Smart Education</div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Empowering learners in the digital age with effective, efficient, 
              flexible, and comfortable learning experiences.
            </p>
            <Button variant="accent" className="bg-white/10 hover:bg-white/20 border-white/20">
              Start Learning Today
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instructors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Programming</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Database</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Software Engineering</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="h-5 w-5" />
                <span>hello@smarteducation.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="h-5 w-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Smart Education. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;