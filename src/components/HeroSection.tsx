import { Button } from "@/components/ui/button";
import { ChevronDown, Swords, Users, Target } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          
          {/* Main heading with breathing effect */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block bg-flame-gradient bg-clip-text text-transparent animate-breathing">
                Join the Elite
              </span>
              <span className="block text-foreground">
                Demon Slayer Corps
              </span>
            </h1>
            <div className="w-24 h-1 bg-flame-gradient mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Protect humanity from the darkness. Master the art of breathing techniques. 
            Become a legendary demon slayer and forge your destiny.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto py-8">
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-flame-gradient rounded-full flex items-center justify-center mb-4 group-hover:animate-breathing">
                <Swords className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-muted-foreground">Active Slayers</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-water-gradient rounded-full flex items-center justify-center mb-4 group-hover:animate-breathing">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-accent">1000+</div>
              <div className="text-muted-foreground">Lives Protected</div>
            </div>
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-thunder-gradient rounded-full flex items-center justify-center mb-4 group-hover:animate-breathing">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary">99%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-flame-gradient hover:shadow-flame transition-all duration-300 font-semibold text-lg px-8 py-4 group"
              onClick={() => scrollToSection("contact")}
            >
              Apply Now
              <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-semibold text-lg px-8 py-4"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </Button>
          </div>

          {/* Breathing technique hint */}
          <div className="pt-12">
            <p className="text-sm text-muted-foreground mb-4">
              "Breathing is the foundation of all techniques"
            </p>
            <div className="animate-breathing inline-block p-3 rounded-full bg-muted/20 backdrop-blur-sm">
              <ChevronDown className="w-6 h-6 text-secondary animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative sword slashes */}
      <div className="absolute top-1/4 left-10 w-32 h-1 bg-flame-gradient opacity-30 rotate-45 animate-slash"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-1 bg-water-gradient opacity-30 -rotate-45 animate-slash"></div>
    </section>
  );
};

export default HeroSection;