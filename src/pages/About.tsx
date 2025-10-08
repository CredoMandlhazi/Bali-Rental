import { Award, Heart, Home, Shield } from "lucide-react";
import aboutHero from "@/assets/dining.jpg";

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Care & Hospitality",
      description: "We pride ourselves on creating a caring experience for all our guests, ensuring comfort and satisfaction."
    },
    {
      icon: Home,
      title: "Premium Locations",
      description: "Carefully selected properties in South Africa's most sought-after destinations."
    },
    {
      icon: Shield,
      title: "Quality & Security",
      description: "Award-winning construction and facilities with top-tier security measures."
    },
    {
      icon: Award,
      title: "Excellence Recognized",
      description: "2022 Master Builders Association Excellence in Construction Award winner."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-40 px-4">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="About Bali & Eva"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl text-center text-primary-foreground">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-accent">BALI & EVA</span>
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Creating Unforgettable Luxury Accommodation Experiences
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Our luxury accommodation collection has been chosen from South Africa's unique and sought-after destinations for a complete holiday and business traveller experience.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6">
              <strong>The villas in the Midlands of KwaZulu-Natal</strong> cater to guests seeking a tranquil countryside experience, surrounded by glorious green hillsides that give full expression to countryside living.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Our holiday and business accommodation collection in Johannesburg</strong> features apartments and homes in central, bustling areas with a suburban feel close to convenient amenities.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              <strong>Cape Town properties</strong> offer breathtaking Atlantic Ocean views from prestigious locations, combining luxury with the natural beauty of the coastal seaboard.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-6 my-8">
              <p className="text-lg font-medium italic">
                "We are excited to announce that the Midlands villas won the 2022 Master Builders Association Excellence in Construction award (Recreation, Leisure and Hotels) which is a welcome endorsement of the quality and integrity of our facilities."
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              The state of feeling luxurious and trigger the mood of opulence is found in the carefully selected designs that offer comfort, high-end common areas that everyone can enjoy together as an experience, whether sharing a drink, meal or working on a business proposal as well as the caring experience sought for our guests.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Services and facilities vary depending on the property. Each location has been thoughtfully designed to provide unique experiences while maintaining our commitment to excellence and guest care.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-accent">Bali & Eva</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We can't wait for you to Feel The Care!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27836936631" className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-smooth font-medium">
              Call Us: +27 (0)83 693 6631
            </a>
            <a href="mailto:reservations@baliandeva.co.za" className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth font-medium">
              Email Reservations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
