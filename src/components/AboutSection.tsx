import { Card } from "@/components/ui/card";
import { Shield, Heart, Zap, Mountain, Sword, Users } from "lucide-react";

const AboutSection = () => {
  const breathingStyles = [
    {
      icon: Zap,
      name: "Thunder Breathing",
      description: "Lightning-fast strikes that cut through the darkness",
      color: "thunder-gradient"
    },
    {
      icon: Heart,
      name: "Flame Breathing",
      description: "Passionate techniques that burn away evil",
      color: "flame-gradient"
    },
    {
      icon: Mountain,
      name: "Water Breathing",
      description: "Fluid movements that adapt to any situation",
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
            About the <span className="bg-flame-gradient bg-clip-text text-transparent">Demon Slayer Corps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For centuries, we have stood as humanity's guardian against the supernatural threats that lurk in the shadows. 
            Join an elite organization dedicated to protecting the innocent and maintaining the balance between worlds.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:shadow-breathing transition-all duration-500">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                "To eliminate demons and protect humanity through the mastery of breathing techniques, 
                unwavering courage, and the bonds of brotherhood. We are the blade that cuts through darkness, 
                the light that guides the lost, and the shield that guards the innocent."
              </p>
            </div>
          </Card>
        </div>

        {/* Breathing Styles */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Master the <span className="bg-water-gradient bg-clip-text text-transparent">Breathing Techniques</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {breathingStyles.map((style, index) => {
              const Icon = style.icon;
              return (
                <Card key={index} className="p-6 group hover:shadow-breathing transition-all duration-500 bg-card/30 backdrop-blur-sm border-border hover:border-primary/30">
                  <div className="text-center">
                    <div className={`mx-auto w-16 h-16 bg-${style.color} rounded-full flex items-center justify-center mb-6 group-hover:animate-breathing`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-foreground">{style.name}</h4>
                    <p className="text-muted-foreground leading-relaxed">{style.description}</p>
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
              "Those who master their breathing can overcome any obstacle"
            </p>
            <div className="w-12 h-1 bg-flame-gradient mx-auto rounded-full animate-breathing"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;