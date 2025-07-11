import React, { useState } from "react";
import "./App.css";

// Import all components
import Navigation from "./components/Navigation";
import SpecialOffer from "./components/SpecialOffer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stylists from "./components/Stylists";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className='min-h-screen'>
      {/* Special Offer Banner */}
      <SpecialOffer />

      {/* Navigation */}
      <Navigation onBookingClick={openBookingModal} />

      {/* Main Content */}
      <main>
        <section id='home'>
          <Hero onBookingClick={openBookingModal} />
        </section>
        <Services />
        <Stylists />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </div>
  );
}

export default App;
