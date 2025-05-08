import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <a
            href="/"
            className="font-serif text-2xl font-bold text-magazine-dark tracking-tight"
          >
            Maga<span className="text-magazine-gold">Zine</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-sm font-medium text-gray-700 hover:text-magazine-gold transition-colors"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-gray-700 hover:text-magazine-gold transition-colors"
          >
            About
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-gray-700 hover:text-magazine-gold transition-colors"
          >
            Subscribe
          </a>
          <Button
            variant="outline"
            size="sm"
            className="border-magazine-gold text-magazine-gold hover:bg-magazine-gold/10"
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-magazine-dark text-white hover:bg-magazine-dark/90"
          >
            Get Access
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-sm font-medium text-gray-700 py-2 hover:text-magazine-gold transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-gray-700 py-2 hover:text-magazine-gold transition-colors"
            >
              About
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-gray-700 py-2 hover:text-magazine-gold transition-colors"
            >
              Subscribe
            </a>
            <div className="flex flex-col space-y-3 pt-3">
              <Button
                variant="outline"
                className="border-magazine-gold text-magazine-gold hover:bg-magazine-gold/10 w-full"
              >
                Sign In
              </Button>
              <Button className="bg-magazine-dark text-white hover:bg-magazine-dark/90 w-full">
                Get Access
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
