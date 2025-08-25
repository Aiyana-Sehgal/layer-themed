import { Sword, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" },
  ];

  const breathingStyles = [
    { label: "Water Breathing", href: "#" },
    { label: "Flame Breathing", href: "#" },
    { label: "Thunder Breathing", href: "#" },
    { label: "Wind Breathing", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="p-3 bg-flame-gradient rounded-lg shadow-flame group-hover:animate-breathing">
                <Sword className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-flame-gradient bg-clip-text text-transparent">
                  Demon Slayer Corps
                </h3>
                <p className="text-sm text-muted-foreground">Recruitment Division</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Join the elite organization dedicated to protecting humanity from supernatural threats. 
              Master breathing techniques and forge your destiny as a legendary demon slayer.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Mount Sagiri Training Grounds, Japan</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+81-XXX-DEMON (24/7 Emergency)</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>recruit@demonslayer.corps</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-300 text-sm relative group"
                  >
                    {link.label}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-flame-gradient group-hover:w-full transition-all duration-300"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Breathing Styles */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Breathing Styles</h4>
            <ul className="space-y-3">
              {breathingStyles.map((style, index) => (
                <li key={index}>
                  <a
                    href={style.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm relative group"
                  >
                    {style.label}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-water-gradient group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border">
          <div className="text-center">
            <h4 className="text-xl font-bold text-foreground mb-4">Stay Updated</h4>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Receive the latest news about demon activities, recruitment updates, and breathing technique training tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-muted/20 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
              />
              <Button className="bg-water-gradient hover:shadow-breathing transition-all duration-300 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Demon Slayer Corps. All rights reserved. | 
            <span className="ml-1">Built with determination and breathing techniques.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-muted/20 rounded-lg text-muted-foreground hover:text-foreground hover:bg-flame-gradient hover:text-white transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:animate-breathing" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="py-6 border-t border-border text-center">
          <blockquote className="text-primary font-medium italic">
            "The blade of the demon slayer's sword is not crimson red, but rather it's the heart of the demon slayer that is."
          </blockquote>
          <div className="w-16 h-1 bg-flame-gradient mx-auto mt-4 rounded-full animate-breathing"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;