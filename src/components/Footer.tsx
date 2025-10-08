import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { properties } from "@/data/properties";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/images/logo.png" alt="Bali & Eva Luxury Collection" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80 mb-4">
              Luxury & Comfortable Accommodation Where We Take Care Of You
            </p>
            
            <div className="max-w-xs">
              <h3 className="font-serif text-sm font-semibold mb-2">Newsletter</h3>
              <p className="text-xs text-primary-foreground/80 mb-3">
                Get updates and special offers
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm h-9"
                />
                <Button variant="secondary" size="sm" className="h-9">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Properties</h3>
            <ul className="space-y-2">
              {properties.map((property) => (
                <li key={property.slug}>
                  <Link 
                    to={`/properties/${property.slug}`} 
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth block"
                  >
                    {property.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  P.O. Box 2387, Saxonwold, 2132<br />
                  Johannesburg, Gauteng, South Africa
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+27836936631" className="text-sm hover:text-accent transition-smooth">
                  +27 (0)83 693 6631
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:reservations@baliandeva.co.za" className="text-sm hover:text-accent transition-smooth">
                  reservations@baliandeva.co.za
                </a>
              </div>
              <div className="flex gap-3 mb-6">
              <a 
                href="https://x.com/baliandeva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-smooth"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/baliandeva/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-smooth"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
              
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Bali & Eva. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
