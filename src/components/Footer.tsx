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

  const techDomains = [
    { label: "Research Papers", href: "#" },
    { label: "Hackathons", href: "#" },
    { label: "Cloud Computing", href: "#" },
    { label: "AI/ML Projects", href: "#" },
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
                  QDC SRMIST
                </h3>
                <p className="text-sm text-muted-foreground">Qwiklabs Developer Club</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Join the elite developer community at SRMIST dedicated to innovation and research. 
              Master cutting-edge technologies and forge your destiny as a tech leader.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>SRMIST Kattankulathur, Chennai</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91-XXX-XXXX-XXX (Club Contact)</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>qdc@srmist.edu.in</span>
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
            <h4 className="text-lg font-bold text-foreground mb-6">Tech Domains</h4>
            <ul className="space-y-3">
              {techDomains.map((domain, index) => (
                <li key={index}>
                  <a
                    href={domain.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm relative group"
                  >
                    {domain.label}
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
              Receive the latest news about tech events, recruitment updates, and innovative project opportunities.
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
            © {currentYear} QDC SRMIST. All rights reserved. | 
            <span className="ml-1">Built with innovation and cutting-edge technologies.</span>
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
            "The power of a developer's code is not in its complexity, but rather it's the passion of the developer that creates magic."
          </blockquote>
          <div className="w-16 h-1 bg-flame-gradient mx-auto mt-4 rounded-full animate-breathing"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;