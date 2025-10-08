// Import all property images
import midlands1 from "@/assets/midlands/634b3a7bee46115f98b91031_Unit 4 dining area.jpg";
import midlands2 from "@/assets/midlands/634b3a7c6088707b96263a37_Unit 4 accessibility needs bedroom bathroom.jpg";
import midlands3 from "@/assets/midlands/634b3a86bca0d26e5d893863_Unit 1 bedroom 2 full view.jpg";
import midlands4 from "@/assets/midlands/634b3aa436d9ffc2c7d8cd1f_Unit 2 patio~1.jpg";
import midlands5 from "@/assets/midlands/634b3aa53e23ccdc6ac6933b_Unit 3 patio~1.jpg";
import midlands6 from "@/assets/midlands/634b3aa5453d98011aa56520_Hall interior side~1.jpg";
import midlands7 from "@/assets/midlands/634b3aa5a422021fe3d65f26_Hall entrance front~1.jpg";
import midlands8 from "@/assets/midlands/634e9d3d04a34554018ecb0f_Unit 2 lounge kitchen fireplace~1.jpg";
import midlands9 from "@/assets/midlands/634e9d3dca4b364f1bc7ab60_Patio~1.jpg";
import midlands10 from "@/assets/midlands/634e9d3ecb4b9c37db413a17_Unit 3 dining area~1.jpg";

import rosebank1 from "@/assets/rosebank/634c364a5cb8ac7433fc15d1_LuxRoom - Cosy airconditioned bedroom for a business or leisure traveller.jpg";
import rosebank2 from "@/assets/rosebank/634c36df6668ddb8a78ba035_LuxRoom - Bathroom shower.jpg";
import rosebank3 from "@/assets/rosebank/634c36e14241cc95a8efff30_Nearby gallerries~1.jpg";
import rosebank4 from "@/assets/rosebank/634c36e54241cc971cefff3e_LuxRoom - Free and secure parking for 1 car.jpg";
import rosebank5 from "@/assets/rosebank/634c375e29d4e1381364e199_LuxSuite - Kitchen with wash & dryer combo and a dishwasher.jpg";
import rosebank6 from "@/assets/rosebank/634c37613b32697240f40220_LuxSuite - Patio and braai-BBQ high on the 3rd floor.jpg";
import rosebank7 from "@/assets/rosebank/634c376290db01cae95fb2f4_LuxSuite - Airconditioned lounge leading to a cosy & private patio (2).jpg";
import rosebank8 from "@/assets/rosebank/634c42306668dd180f8c35f2_House -Lounge area~1.jpg";

import dunkeld1 from "@/assets/dunkeld/634bfd74f1330a0ec1d162ff_Upper floor main ensuite bedroom~1.jpg";
import dunkeld2 from "@/assets/dunkeld/634bfd7537a6538ae68a8543_Patio~1.jpg";
import dunkeld3 from "@/assets/dunkeld/634bfd7574f29821b0fa3900_Ground Floor modern cement tiles, gas heater plus  air-conditioner~1.jpg";
import dunkeld4 from "@/assets/dunkeld/634bfd75ee461157d7bfcabf_Ground floor lounge detail~1.jpg";
import dunkeld5 from "@/assets/dunkeld/634bfd76a7ad04cf65753feb_Ground Floor modern stylish lounge~1.jpg";
import dunkeld6 from "@/assets/dunkeld/634bfd7836d9ffcf99df6f4e_Upper floor second bedroom with seater and plenty storage cupboards~1.jpg";
import dunkeld7 from "@/assets/dunkeld/634bfd78428502197f58c5eb_Ground floor lounge with charcoal stylish cement tiles~1.jpg";
import dunkeld8 from "@/assets/dunkeld/634bfd7874f2988321fa392f_Ground Floor Generous kitchen with wash & dryer combo and a dishwasher~1.jpg";
import dunkeld9 from "@/assets/dunkeld/634bfd793e23cc32d2ccd681_Ground Floor Kitchen view~1.jpg";
import dunkeld10 from "@/assets/dunkeld/634bfd794241cc0580ed2403_Upper floor second bedroom with own bathroom just outside the bedroom entrance~1.jpg";
import dunkeld11 from "@/assets/dunkeld/634bfd798246d8fb1829d7ab_Ground Floor Dining lounge leading to the patio, all integrated with the kitchen~1.jpg";
import dunkeld12 from "@/assets/dunkeld/634bfd7a453d980bb5ac36a0_2 parking bays in a 247 secure complex~1.jpg";

import greenside1 from "@/assets/greenside/634c412537a653079a8d989c_Cottage - Studio - another view~1.jpg";
import greenside2 from "@/assets/greenside/634c412805fc10a0168ee1a6_Cottage - Kitchen with stove top and oven , microwave and small appliances~1.jpg";
import greenside3 from "@/assets/greenside/634c412aee46116833c2bd0d_Cottage - Studio - a view from inside and covered verandah parking for 1 car.jpg";
import greenside4 from "@/assets/greenside/634c422636d9ff307de2e039_House -Lounge area chat corner~1.jpg";
import greenside5 from "@/assets/greenside/634c4226453d986048afc169_House -Inviting swimming pool~1.jpg";
import greenside6 from "@/assets/greenside/634c422c9f22e42e83f40639_House -Bedroom 3 with ensuite bathroom and a working desk~1.jpg";
import greenside7 from "@/assets/greenside/634c422fa626bc42dfad8180_House -Kitchen~1.jpg";
import greenside8 from "@/assets/greenside/634c4231c54c303d37e6abdc_House -Lounge with quick access to the kitchen and dining areas~1.jpg";
import greenside9 from "@/assets/greenside/634c42384241cce91ef0a23c_House -Bedroom 1 generous cupboard space.jpg";
import greenside10 from "@/assets/greenside/634c4238a2d14072cbe8cda5_House - Bedroom 1 bathroom.jpg";

// Import booking logos
import lekkeslaapLogo from "@/assets/logos/bookings/lekkeslaap.png";
import airbnbLogo from "@/assets/logos/bookings/airbnb.png";
import bookingLogo from "@/assets/logos/bookings/booking.png";
import vacationCottageLogo from "@/assets/logos/bookings/vacationcottage.png";
import expediaLogo from "@/assets/logos/bookings/expedia.png";
import agodaLogo from "@/assets/logos/bookings/agoda.png";

export interface BookingLink {
  name: string;
  logo: string;
  url: string;
}

export interface Property {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  description: string;
  longDescription: string;
  images: string[];
  features: string[];
  mapUrl: string;
  bookingUrl?: string;
  bookingLinks: BookingLink[];
}

export const properties: Property[] = [
  
  {
    slug: "midlands",
    name: "Bali & Eva Midlands",
    tagline: "Secure Country Living",
    location: "Balgowan, Nottingham Road, Midlands, KwaZulu-Natal, South Africa",
    description: "Elegant countryside living with sweeping landscapes and contemporary style.",
    longDescription: "The Midlands, with its glorious green hillsides, gives full expression to countryside living. At BALI & EVA MIDLANDS elegant and uniquely designed rooms, carefully selected and rich textures, local artwork, and sweeping landscapes, are all knitted together to create a depth of experience and classic yet contemporary style. Winner of the 2022 Master Builders Association Excellence in Construction Award.",
    images: [
      midlands1, midlands2, midlands3, midlands4, midlands5,
      midlands6, midlands7, midlands8, midlands9, midlands10
    ],
    features: [
      "Award-winning construction",
      "Tranquil countryside setting",
      "Elegant contemporary design",
      "Local artwork collection",
      "Secure estate living",
      "Sweeping landscape views"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.5!2d29.7651!3d-29.3012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDE4JzA0LjMiUyAyOcKwNDUnNTQuNCJF!5e0!3m2!1sen!2sza!4v1234567890",
    bookingUrl: "https://live.ipms247.com/booking/book-rooms-544707",
    bookingLinks: [
      { name: "LekkeSlaap", logo: lekkeslaapLogo, url: "https://www.lekkeslaap.co.za" },
      { name: "Airbnb", logo: airbnbLogo, url: "https://www.airbnb.com" },
      { name: "Booking.com", logo: bookingLogo, url: "https://www.booking.com" },
      { name: "VacationCottage", logo: vacationCottageLogo, url: "https://www.vacationcottage.com" },
      { name: "Expedia", logo: expediaLogo, url: "https://www.expedia.com" },
      { name: "Agoda", logo: agodaLogo, url: "https://www.agoda.com" },
    ]
  },
  {
    slug: "rosebank",
    name: "Bali & Eva GoldCity Rosebank",
    tagline: "Well Located Luxury Apartment",
    location: "Rosebank, Johannesburg, South Africa",
    description: "Perfect haven for central living with suburban feel, close to Keyes Art Mile.",
    longDescription: "BALI & EVA GOLDCITY, Rosebank is a self-catering apartment, offering the perfect haven for those who enjoy central living with a suburban feel. With the Keyes Art Mile right on your doorstep and the bustling streets of Rosebank only a short distance away, guests can enjoy a serene lifestyle while still being close to one of Johannesburg's main business and lifestyle hubs.",
    images: [
      rosebank1, rosebank2, rosebank3, rosebank4,
      rosebank5, rosebank6, rosebank7, rosebank8
    ],
    features: [
      "Central Rosebank location",
      "Near Keyes Art Mile",
      "Self-catering facilities",
      "Modern apartment living",
      "Close to business district",
      "Shopping & dining nearby"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.5!2d28.0432!3d-26.1450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA4JzQyLjAiUyAyOMKwMDInMzUuNSJF!5e0!3m2!1sen!2sza!4v1234567890",
    bookingUrl: "https://live.ipms247.com/booking/book-rooms-balievacityofgold",
    bookingLinks: [
      { name: "LekkeSlaap", logo: lekkeslaapLogo, url: "https://www.lekkeslaap.co.za" },
      { name: "Airbnb", logo: airbnbLogo, url: "https://www.airbnb.com" },
      { name: "Booking.com", logo: bookingLogo, url: "https://www.booking.com" },
      { name: "VacationCottage", logo: vacationCottageLogo, url: "https://www.vacationcottage.com" },
      { name: "Expedia", logo: expediaLogo, url: "https://www.expedia.com" },
      { name: "Agoda", logo: agodaLogo, url: "https://www.agoda.com" },
    ]
  },
  {
    slug: "dunkeld",
    name: "Bali & Eva GoldCity Dunkeld",
    tagline: "Tranquil & Well Located",
    location: "Dunkeld West, Randburg, Gauteng, South Africa",
    description: "Spacious duplex with backup power, centrally located near Hyde Park Corner.",
    longDescription: "Spacious 2 bedroom self-catering duplex on Bompas with strong Wi-Fi and a backup inverter that provides up to 8hrs of power. Tranquil & central place in Dunkeld West just off Jan Smuts and very close to Hyde Park corner. Perfect for extended stays with all the comforts of home in a secure and convenient location.",
    images: [
      dunkeld1, dunkeld2, dunkeld3, dunkeld4, dunkeld5, dunkeld6,
      dunkeld7, dunkeld8, dunkeld9, dunkeld10, dunkeld11, dunkeld12
    ],
    features: [
      "2 bedroom duplex",
      "Backup power (8 hours)",
      "Strong Wi-Fi connection",
      "Near Hyde Park Corner",
      "Self-catering kitchen",
      "Secure location"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.2!2d28.0398!3d-26.1390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA4JzIwLjQiUyAyOMKwMDInMjMuMyJF!5e0!3m2!1sen!2sza!4v1234567890",
    bookingUrl: "https://live.ipms247.com/booking/book-rooms-balievacityofgold",
    bookingLinks: [
      { name: "LekkeSlaap", logo: lekkeslaapLogo, url: "https://www.lekkeslaap.co.za" },
      { name: "Airbnb", logo: airbnbLogo, url: "https://www.airbnb.com" },
      { name: "Booking.com", logo: bookingLogo, url: "https://www.booking.com" },
      { name: "VacationCottage", logo: vacationCottageLogo, url: "https://www.vacationcottage.com" },
      { name: "Expedia", logo: expediaLogo, url: "https://www.expedia.com" },
      { name: "Agoda", logo: agodaLogo, url: "https://www.agoda.com" },
    ]
  },
  {
    slug: "greenside",
    name: "Bali & Eva GoldCity Greenside",
    tagline: "Bring Your Entire Family",
    location: "Greenside, Johannesburg, South Africa",
    description: "Central self-catering home perfect for families with local attractions nearby.",
    longDescription: "Explore the City of Gold at this central and relaxing self-catering home with many exciting local places of beauty within reach. There's something for everyone to explore. Bring the whole family to this great place and create fun memories that will last a lifetime. Spacious accommodation with comfortable living areas and all amenities needed for a memorable family stay.",
    images: [
      greenside1, greenside2, greenside3, greenside4, greenside5,
      greenside6, greenside7, greenside8, greenside9, greenside10
    ],
    features: [
      "Family-friendly space",
      "Multiple bedrooms",
      "Full self-catering kitchen",
      "Central Greenside location",
      "Near local attractions",
      "Comfortable living areas"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.8!2d28.0234!3d-26.1521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA5JzA3LjYiUyAyOMKwMDEnMjQuMiJF!5e0!3m2!1sen!2sza!4v1234567890",
    bookingUrl: "https://live.ipms247.com/booking/book-rooms-balievacityofgold",
    bookingLinks: [
      { name: "LekkeSlaap", logo: lekkeslaapLogo, url: "https://www.lekkeslaap.co.za" },
      { name: "Airbnb", logo: airbnbLogo, url: "https://www.airbnb.com" },
      { name: "Booking.com", logo: bookingLogo, url: "https://www.booking.com" },
      { name: "VacationCottage", logo: vacationCottageLogo, url: "https://www.vacationcottage.com" },
      { name: "Expedia", logo: expediaLogo, url: "https://www.expedia.com" },
      { name: "Agoda", logo: agodaLogo, url: "https://www.agoda.com" },
    ]
  }
];
