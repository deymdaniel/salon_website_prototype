// Salon Configuration - Customize everything here!
export const salonConfig = {
  // Basic Business Information
  businessName: "Style Fusion Studio",
  tagline: "Style Without Limits.",
  description:
    "Style Fusion Studio is a modern, inclusive salon offering premium hair services for everyone—men, women, and non-binary clients. With a team of expert stylists, we specialize in precision cuts, creative coloring, smoothing treatments, and styling services tailored to individual style and personality.",

  // Color Theme (Tailwind classes)
  colors: {
    primary: "bg-rose-900",
    secondary: "bg-rose-400",
    text: "text-gray-900",
    textLight: "text-gray-600",
    background: "bg-white",
    surface: "bg-rose-50",
    buttonPrimary: "bg-rose-900 hover:bg-rose-800",
    buttonSecondary: "bg-rose-400 hover:bg-rose-500",
    border: "border-rose-200",
  },

  // Navigation Text Colors
  navColors: {
    text: "text-gray-700",
    textHover: "text-rose-500", // This will be used for the hover effect
    textActive: "text-rose-400", // This matches the 'Book Now' button
  },

  // Contact Information
  contact: {
    address: {
      street: "Uptown Mall, 9th Avenue corner 36th Street",
      barangay: "Barangay Fort Bonifacio, Taguig City",
      postal: "1634 Metro Manila",
    },

    phone: "+63 2 8735 1234",
    email: "hello@stylefusion.ph",
    hours: {
      weekdays: "Mon–Sat: 10:00 AM – 8:00 PM",
      weekend: "Sun: 11:00 AM – 6:00 PM",
    },
    social: {
      youtube: "https://www.youtube.com",
      instagram: "https://www.instagram.com/stylefusion.studio",
      facebook: "https://www.facebook.com/stylefusionstudio",
      tiktok: "https://www.tiktok.com",
    },
  },

  // Services with pricing
  services: [
    {
      id: 1,
      name: "Women's Precision Cut",
      price: "₱600",
      description:
        "Professional cuts tailored to your face shape and style preferences",
      category: "women",
    },
    {
      id: 2,
      name: "Men's Fade / Cut",
      price: "₱400",
      description:
        "Classic and modern cuts including fades, undercuts, and traditional styles",
      category: "men",
    },
    {
      id: 3,
      name: "Single-Tone Color",
      price: "₱1,500",
      description: "Full hair coloring with premium quality products",
      category: "color",
    },
    {
      id: 4,
      name: "Balayage / Highlights",
      price: "₱2,800",
      description: "Hand-painted highlights for natural-looking dimension",
      category: "color",
    },
    {
      id: 5,
      name: "Keratin Smoothing",
      price: "₱3,200 - ₱5,200",
      description:
        "Smoothing treatment for frizz-free, manageable hair (pricing varies by length)",
      category: "treatment",
    },
    {
      id: 6,
      name: "Hair Treatment & Spa Package",
      price: "₱900",
      description: "Deep conditioning and scalp treatment for healthy hair",
      category: "treatment",
    },
    {
      id: 7,
      name: "Styling & Blow-Dry",
      price: "₱500",
      description:
        "Professional styling for special events or everyday glamour",
      category: "styling",
    },
  ],

  // Stylists team
  stylists: [
    {
      id: 1,
      name: "Alyssa Cruz",
      title: "Senior Stylist",
      bio: "Specialist in creative coloring and balayage. Passionate about bringing out each client's unique style.",
      image: "/api/placeholder/300/300", // You can replace with actual images
      specialties: ["Balayage", "Creative Coloring", "Women's Cuts"],
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      title: "Men's Grooming Expert",
      bio: "Focused on precision cuts, fades, and styling. Committed to quality and attention to detail.",
      image: "/api/placeholder/300/300",
      specialties: ["Men's Cuts", "Fades", "Beard Trimming"],
    },
    {
      id: 3,
      name: "Jordan Reyes",
      title: "Smoothing & Styling Specialist",
      bio: "Expert in smoothing treatments, blow-dries, and event styling. Making every client camera-ready.",
      image: "/api/placeholder/300/300",
      specialties: ["Keratin Treatments", "Event Styling", "Blow-Dry"],
    },
  ],

  // Customer testimonials
  testimonials: [
    {
      id: 1,
      name: "Ella",
      location: "QC",
      text: "Loved the balayage Alyssa did—natural blend and shine!",
      rating: 5,
      service: "Balayage",
    },
    {
      id: 2,
      name: "Miguel",
      location: "Makati",
      text: "Carlos gave me the best fade ever. Clean and stylish!",
      rating: 5,
      service: "Men's Cut",
    },
    {
      id: 3,
      name: "Lisa",
      location: "BGC",
      text: "Hair felt smooth and soft after Jordan's treatment—highly recommend.",
      rating: 5,
      service: "Keratin Treatment",
    },
  ],

  // Special offers
  specialOffer: {
    active: true,
    title: "Monday Special!",
    description: "10% Off Women's Cuts & Men's Fades Every Monday!",
    terms: "Valid every Monday. Cannot be combined with other offers.",
  },

  // Gallery images (you can replace with actual images)
  gallery: [
    {
      id: 1,
      src: "/api/placeholder/400/300",
      alt: "Before & After Balayage by Alyssa",
      category: "color",
    },
    {
      id: 2,
      src: "/api/placeholder/400/300",
      alt: "Carlos perfecting a classic fade",
      category: "men",
    },
    {
      id: 3,
      src: "/api/placeholder/400/300",
      alt: "Keratin Smoothing results by Jordan",
      category: "treatment",
    },
    {
      id: 4,
      src: "/api/placeholder/400/300",
      alt: "Women's precision cut",
      category: "women",
    },
    {
      id: 5,
      src: "/api/placeholder/400/300",
      alt: "Professional styling",
      category: "styling",
    },
    {
      id: 6,
      src: "/api/placeholder/400/300",
      alt: "Salon interior",
      category: "salon",
    },
  ],

  // Hero section
  hero: {
    backgroundImage: "/assets/hero.jpg",
    title: "Welcome to Style Fusion Studio",
    subtitle: "Style Without Limits.",
    ctaText: "Book Now",
  },
};
