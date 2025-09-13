import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, Cpu, Globe, BookOpen } from "lucide-react";

const courses = [
  {
    icon: Code,
    title: "Learn HTML & CSS",
    description: "Start with the basics of web development. Create your first website!",
    level: "Beginner",
    duration: "4 weeks",
    color: "bg-blue-500",
  },
  {
    icon: Palette,
    title: "JavaScript Basics",
    description: "Learn programming fundamentals with JavaScript in a simple way.",
    level: "Beginner", 
    duration: "6 weeks",
    color: "bg-yellow-500",
  },
  {
    icon: Globe,
    title: "Build a Website",
    description: "Put it all together and create your own personal website.",
    level: "Beginner",
    duration: "3 weeks",
    color: "bg-green-500",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Start Your Learning Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a course and begin coding today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {courses.map((course, index) => (
            <Card 
              key={course.title}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${course.color} text-white`}>
                    <course.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {course.level}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg text-foreground">
                  {course.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4">
                  {course.description}
                </p>
                
                <div className="text-sm text-muted-foreground mb-4">
                  📚 {course.duration}
                </div>
                
                <Button className="w-full">
                  Start Course
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            See All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;