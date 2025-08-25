import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Sword, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    breathingStyle: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Application Submitted!",
        description: "Your journey to becoming a Demon Slayer begins now. We'll contact you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", breathingStyle: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      info: "Mount Sagiri Training Grounds\nJapan"
    },
    {
      icon: Phone,
      title: "Emergency Line",
      info: "+81-XXX-DEMON\n24/7 Demon Hotline"
    },
    {
      icon: Mail,
      title: "Recruitment Office",
      info: "recruit@demonslayer.corps\ninfo@demonslayer.corps"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="bg-flame-gradient bg-clip-text text-transparent">Ranks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to embark on your journey as a Demon Slayer? Submit your application and take the first step 
            towards protecting humanity from the forces of darkness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:shadow-breathing transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 flex items-center">
                <Sword className="w-6 h-6 mr-2 text-primary" />
                Application Form
              </h3>
              <p className="text-muted-foreground">
                "Talent without effort is nothing" - Fill out your details below
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="bg-muted/20 border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-muted/20 border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="bg-muted/20 border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Preferred Breathing Style
                  </label>
                  <Input
                    name="breathingStyle"
                    value={formData.breathingStyle}
                    onChange={handleInputChange}
                    placeholder="Water, Flame, Thunder, etc."
                    className="bg-muted/20 border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Why do you want to join the Demon Slayer Corps? *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your motivation, experience, and what drives you to protect humanity..."
                  rows={5}
                  required
                  className="bg-muted/20 border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-flame-gradient hover:shadow-flame transition-all duration-300 font-semibold"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting Application...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Submit Application
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <div className="flex items-start space-x-2">
                <Heart className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-accent">Note:</strong> All applications are reviewed carefully. 
                  We value determination and pure intentions over raw strength. Your journey begins here.
                </p>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card key={index} className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/30 hover:shadow-breathing transition-all duration-500">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-flame-gradient rounded-lg shadow-flame">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{contact.title}</h4>
                      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {contact.info}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* Motivational Quote */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-flame-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-breathing">
                  <Sword className="w-8 h-8 text-white" />
                </div>
                <blockquote className="text-lg font-medium text-foreground mb-4">
                  "No matter how many people you may lose, you have no choice but to go on living."
                </blockquote>
                <cite className="text-muted-foreground">— Tanjiro Kamado, Demon Slayer</cite>
                <div className="w-12 h-1 bg-flame-gradient mx-auto mt-4 rounded-full"></div>
              </div>
            </Card>

            {/* Emergency Notice */}
            <Card className="p-6 bg-destructive/10 border-destructive/20">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-destructive/20 rounded-lg">
                  <Phone className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-destructive mb-2">Emergency Demon Sightings</h4>
                  <p className="text-muted-foreground text-sm">
                    If you encounter a demon, do not engage. Contact our emergency line immediately. 
                    Trained Hashira will be dispatched to your location.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;