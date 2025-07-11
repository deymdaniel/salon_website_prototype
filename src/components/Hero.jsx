import React from "react";
import { salonConfig } from "../config/salonConfig";

const Hero = ({ onBookingClick }) => {
  return (
    <section className='relative h-screen flex items-center justify-center text-white overflow-hidden'>
      {/* Combined Background Image and Overlay */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${salonConfig.hero.backgroundImage})`,
        }}
      />

      {/* Content */}
      <div className='relative z-10 text-center max-w-4xl mx-auto px-4'>
        <h1 className='text-5xl md:text-6xl font-bold mb-4 leading-tight'>
          {salonConfig.hero.title}
        </h1>
        <p className='text-xl md:text-2xl mb-8 text-gray-200'>
          {salonConfig.hero.subtitle}
        </p>
        <p className='text-lg mb-8 max-w-2xl mx-auto text-gray-300'>
          {salonConfig.description}
        </p>
        <button
          onClick={onBookingClick}
          className={`${salonConfig.colors.buttonSecondary} text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-200 transform hover:scale-105 cursor-pointer`}
        >
          {salonConfig.hero.ctaText}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none'>
        <div className='w-6 h-10 border-2 border-white rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-white rounded-full mt-2'></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
