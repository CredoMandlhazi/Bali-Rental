import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const properties = [
  { name: "Midlands, KwaZulu-Natal", slug: "midlands" },
  { name: "Rosebank, Johannesburg", slug: "rosebank" },
  { name: "Dunkeld West, Randburg", slug: "dunkeld" },
  { name: "Greenside, Johannesburg", slug: "greenside" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="Bali & Eva Luxury Collection" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-smooth hover:text-accent ${
                isActive("/") ? "text-accent" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-smooth hover:text-accent ${
                isActive("/about") ? "text-accent" : "text-foreground"
              }`}
            >
              About
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Properties
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {properties.map((property) => (
                        <li key={property.slug}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={`/properties/${property.slug}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-smooth hover:bg-accent/10"
                            >
                              <div className="text-sm font-medium leading-none">
                                {property.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-smooth hover:text-accent ${
                isActive("/contact") ? "text-accent" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                to="/"
                className="text-sm font-medium hover:text-accent transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium hover:text-accent transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="space-y-2">
                <div className="text-sm font-medium flex items-center gap-1">
                  Properties <ChevronDown className="h-4 w-4" />
                </div>
                <div className="pl-4 space-y-2">
                  {properties.map((property) => (
                    <Link
                      key={property.slug}
                      to={`/properties/${property.slug}`}
                      className="block text-sm text-muted-foreground hover:text-accent transition-smooth"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {property.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/contact"
                className="text-sm font-medium hover:text-accent transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
