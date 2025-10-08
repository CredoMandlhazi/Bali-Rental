import { useParams, Link } from "react-router-dom";
import { MapPin, ChevronLeft, ExternalLink, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { properties } from "@/data/properties";

export default function Property() {
  const { slug } = useParams();
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Property Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-accent transition-smooth">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Properties
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-4 pb-8">
        <div className="container mx-auto">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <MapPin className="h-4 w-4" />
              <span>{property.location}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-3">
              {property.name}
            </h1>
            <p className="text-2xl text-accent font-medium">{property.tagline}</p>
          </div>

          {/* Carousel */}
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {property.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[500px] rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${property.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="font-serif text-3xl font-bold mb-4">About This Property</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {property.longDescription}
                </p>

                <h3 className="font-serif text-2xl font-bold mb-4 mt-8">Features & Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="font-serif text-xl font-bold mb-4">Book Your Stay</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us to reserve this beautiful property
                </p>
                
                <div className="space-y-3 mb-6">
                  <a href="tel:+27714805512" className="block">
                    <Button variant="outline" className="w-full">
                      Call: +27 (0)71 480 5512
                    </Button>
                  </a>
                  <a href="mailto:reservations@baliandeva.co.za" className="block">
                    <Button variant="outline" className="w-full">
                      Email Reservations
                    </Button>
                  </a>
                  {property.bookingUrl && (
                    <a href={property.bookingUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full">
                        Book Online
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>

                {/* Booking Platforms */}
                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Also Available On</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {property.bookingLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border rounded-md p-3 hover:border-accent transition-smooth hover:shadow-md flex items-center justify-center"
                        title={`Book on ${link.name}`}
                      >
                        <img
                          src={link.logo}
                          alt={`${link.name} logo`}
                          className="h-10 w-full object-contain"
                        />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <h4 className="font-semibold mb-2">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-bold mb-6 text-center">Location</h2>
          <Card className="overflow-hidden">
            <iframe
              src={property.mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${property.name} Location`}
            ></iframe>
          </Card>
          <p className="text-center text-muted-foreground mt-4">
            {property.location}
          </p>
        </div>
      </section>
    </div>
  );
}
