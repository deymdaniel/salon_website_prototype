import React from "react";
import { salonConfig } from "../config/salonConfig";

const Stylists = () => {
  return (
    <section id='stylists' className={`py-16 ${salonConfig.colors.background}`}>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className={`text-4xl font-bold ${salonConfig.colors.text} mb-4`}>
            Meet Our Expert Stylists
          </h2>
          <p
            className={`text-lg ${salonConfig.colors.textLight} max-w-2xl mx-auto`}
          >
            Our talented team of professionals is dedicated to bringing your
            vision to life with skill, creativity, and attention to detail.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {salonConfig.stylists.map((stylist) => (
            <div
              key={stylist.id}
              className={`${salonConfig.colors.surface} rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1`}
            >
              {/* Stylist Image */}
              <div className='aspect-square overflow-hidden'>
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className='w-full h-full object-cover transition duration-300 hover:scale-105'
                />
              </div>

              {/* Stylist Info */}
              <div className='p-6'>
                <h3
                  className={`text-xl font-bold ${salonConfig.colors.text} mb-1`}
                >
                  {stylist.name}
                </h3>
                <p
                  className={`${salonConfig.colors.buttonSecondary.replace(
                    "bg-",
                    "text-"
                  )} font-medium mb-3`}
                >
                  {stylist.title}
                </p>
                <p className={`${salonConfig.colors.textLight} text-sm mb-4`}>
                  {stylist.bio}
                </p>

                {/* Specialties */}
                <div className='flex flex-wrap gap-2'>
                  {stylist.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className={`${salonConfig.colors.background} ${salonConfig.colors.text} px-2 py-1 rounded text-xs font-medium border ${salonConfig.colors.border}`}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stylists;
