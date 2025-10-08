import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import contactHero from "@/assets/lounge-2.jpg";

const contacts = [
  {
    title: "To make a booking",
    phone: "+27 (0)83 693 6631",
    email: "reservations@baliandeva.co.za",
    description: "Book your stay with our reservations team",
    name: ""
  },
  {
    title: "Manager: Customer Experience & Bookings",
    name: "Maphemba Tshili",
    phone: "+27 (0)71 480 5512",
    email: "maphemba@baliandeva.co.za",
    description: ""
  },
  {
    title: "Manager: Operations",
    name: "Lindiwe Tshili",
    phone: "+27 (0)76 691 5054",
    email: "lindiwe@baliandeva.co.za",
    description: ""
  },
  {
    title: "Manager: Marketing & Strategy",
    name: "Nzuzo Tshili",
    phone: "+27 (0)76 410 9749 / +44 75 0750 9739",
    email: "nzuzo@baliandeva.co.za",
    description: ""
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-40 px-4">
        <div className="absolute inset-0">
          <img
            src={contactHero}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl text-center text-primary-foreground">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-xl text-primary-foreground/90">
            We're here to help you plan your perfect stay
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contacts.map((contact, index) => (
              <Card key={index} className="p-8 hover:shadow-luxury transition-smooth">
                <h3 className="font-serif text-xl font-semibold mb-2">{contact.title}</h3>
                {contact.name && <p className="text-lg font-medium mb-4">{contact.name}</p>}
                {contact.description && <p className="text-sm text-muted-foreground mb-6">{contact.description}</p>}
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium mb-1">Phone</p>
                      <a 
                        href={`tel:${contact.phone.split('/')[0].replace(/\s/g, '')}`}
                        className="text-muted-foreground hover:text-accent transition-smooth"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium mb-1">Email</p>
                      <a 
                        href={`mailto:${contact.email}`}
                        className="text-muted-foreground hover:text-accent transition-smooth break-all"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Address Section */}
          <Card className="p-8 shadow-card">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Postal Address</h3>
                <p className="text-muted-foreground">
                  P.O. Box 2387, Saxonwold, 2132<br />
                  Johannesburg, Gauteng<br />
                  South Africa
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Feel The Care
          </h2>
          <p className="text-lg text-muted-foreground">
            Our team is dedicated to providing you with exceptional service and responding to all inquiries promptly. We look forward to welcoming you to our luxury collection.
          </p>
        </div>
      </section>
    </div>
  );
}
