import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PropertyCardProps {
  name: string;
  location: string;
  description: string;
  image: string;
  slug: string;
}

export default function PropertyCard({
  name,
  location,
  description,
  image,
  slug,
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-luxury transition-smooth">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
        />
        <div className="absolute inset-0 hero-gradient opacity-0 group-hover:opacity-100 transition-smooth" />
      </div>
      <div className="p-6">
        <div className="flex items-start gap-2 mb-2">
          <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
          <span className="text-sm text-muted-foreground">{location}</span>
        </div>
        <h3 className="font-serif text-2xl font-semibold mb-3">{name}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <Link to={`/properties/${slug}`}>
          <Button variant="outline" className="w-full group/btn">
            Discover More
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-smooth" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
