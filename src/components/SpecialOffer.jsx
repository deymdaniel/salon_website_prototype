import React from "react";
import { salonConfig } from "../config/salonConfig";

const SpecialOffer = () => {
  if (!salonConfig.specialOffer.active) return null;

  return (
    <div
      className={`${salonConfig.colors.buttonSecondary} text-white py-3 text-center relative overflow-hidden`}
    >
      <div className='relative z-10'>
        <span className='font-bold text-lg mr-2'>
          🎉 {salonConfig.specialOffer.title}
        </span>
        <span className='text-sm'>{salonConfig.specialOffer.description}</span>
      </div>

      {/* Animated background pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse'></div>
      </div>
    </div>
  );
};

export default SpecialOffer;
