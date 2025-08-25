import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sword } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Timeline", id: "timeline" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-breathing" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="p-2 bg-flame-gradient rounded-lg shadow-flame group-hover:animate-breathing">
              <Sword className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-flame-gradient bg-clip-text text-transparent">
                Demon Slayer Corps
              </h1>
              <p className="text-xs text-muted-foreground">Recruitment Division</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-secondary transition-colors duration-300 relative group"
              >
                {item.label}
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-flame-gradient group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-flame-gradient hover:shadow-flame transition-all duration-300 font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              Join the Corps
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-foreground hover:text-secondary transition-colors duration-300 py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="default" 
                className="w-full bg-flame-gradient hover:shadow-flame transition-all duration-300 font-semibold mt-4"
                onClick={() => scrollToSection("contact")}
              >
                Join the Corps
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;