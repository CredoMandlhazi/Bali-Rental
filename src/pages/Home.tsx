import { Button } from "@/components/ui/button";
import { ChevronDown, Award, Star } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import heroImage from "@/assets/lounge-1.jpg";
import { properties as importedProperties } from "@/data/properties";

const testimonials = [
  { name: "Joy", date: "September 2022", text: "A gracious host! She is prompt when it comes to communication and responding. Clean stay, great location and she really takes care of her guests." },
  { name: "Sara", date: "August 2022", text: "This is one of the most spectacular places I've ever stayed at. The host is phenomenal, the consistency in services is exceptional..." },
  { name: "Arnold", date: "September 2022", text: "This is one of the best stays I've ever had. Everything about this host is exceptional." },
];

export default function Home() {
  const scrollToProperties = () => {
    const propertiesSection = document.getElementById('properties-section');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury Accommodation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Luxury & Comfortable Accommodation
            <br />
            <span className="text-accent">Where We Take Care Of You</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Relax, Conduct Business & Enjoy Your Experiences
          </p>
          <Button size="lg" variant="default" className="shadow-luxury" onClick={scrollToProperties}>
            Explore Our Collection
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              BALI & EVA <span className="text-accent">Luxury Collection</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our luxury accommodation collection has been chosen from South Africa's unique and sought-after destinations for a complete holiday and business traveller experience.
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="h-6 w-6 text-accent" />
              <p className="text-sm font-medium">
                2022 Master Builders Association Excellence in Construction Award Winner
              </p>
            </div>
            <p className="text-muted-foreground italic">
              "We can't wait for you to Feel The Care!"
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section id="properties-section" className="py-20 px-4 luxury-gradient">
        <div className="container mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12">
            Our <span className="text-accent">Luxury Properties</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {importedProperties.map((property) => (
              <PropertyCard 
                key={property.slug} 
                name={property.name}
                location={property.location}
                description={property.description}
                image={property.images[0]}
                slug={property.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12">
            What People Are <span className="text-accent">Saying About Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
