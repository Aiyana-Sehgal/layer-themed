import { Card } from "@/components/ui/card";
import { Shield, Heart, Zap, Mountain, Sword, Users } from "lucide-react";

const AboutSection = () => {
  const techDomains = [
    {
      icon: Zap,
      name: "Research & Innovation",
      description: "Lightning-fast research that breaks through technological barriers",
      color: "thunder-gradient"
    },
    {
      icon: Heart,
      name: "Hackathons & Competitions",
      description: "Passionate coding sessions that ignite innovative solutions",
      color: "flame-gradient"
    },
    {
      icon: Mountain,
      name: "Cloud & DevOps",
      description: "Fluid deployment strategies that adapt to any infrastructure",
      color: "water-gradient"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Protection",
      description: "We stand as humanity's shield against the forces of darkness"
    },
    {
      icon: Sword,
      title: "Excellence",
      description: "Master your craft through rigorous training and dedication"
    },
    {
      icon: Users,
      title: "Brotherhood",
      description: "United we stand, supporting each other through every battle"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Main heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-flame-gradient bg-clip-text text-transparent">QDC SRMIST</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Qwiklabs Developer Club at SRMIST is an elite community of passionate developers and researchers. 
            Join us to participate in cutting-edge research, innovative hackathons, and exclusive tech events.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:shadow-breathing transition-all duration-500">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                "To foster innovation and excellence in technology through research, collaboration, and continuous learning. 
                We are the catalyst for breakthrough ideas, the bridge between theory and practice, 
                and the forge where future tech leaders are shaped."
              </p>
            </div>
          </Card>
        </div>

        {/* Breathing Styles */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Master the <span className="bg-water-gradient bg-clip-text text-transparent">Tech Domains</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techDomains.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <Card key={index} className="p-6 group hover:shadow-breathing transition-all duration-500 bg-card/30 backdrop-blur-sm border-border hover:border-primary/30">
                  <div className="text-center">
                    <div className={`mx-auto w-16 h-16 bg-${domain.color} rounded-full flex items-center justify-center mb-6 group-hover:animate-breathing`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-foreground">{domain.name}</h4>
                    <p className="text-muted-foreground leading-relaxed">{domain.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="bg-flame-gradient bg-clip-text text-transparent">Core Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="mx-auto w-20 h-20 bg-muted/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-flame-gradient group-hover:shadow-flame transition-all duration-500">
                    <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <h4 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h4>
            <p className="text-muted-foreground mb-6">
              "Those who master their code can overcome any challenge"
            </p>
            <div className="w-12 h-1 bg-flame-gradient mx-auto rounded-full animate-breathing"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;