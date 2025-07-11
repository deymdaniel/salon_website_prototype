import React, { useState } from "react";
import { salonConfig } from "../config/salonConfig";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services" },
    { id: "women", name: "Women" },
    { id: "men", name: "Men" },
    { id: "color", name: "Color" },
    { id: "treatment", name: "Treatments" },
    { id: "styling", name: "Styling" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? salonConfig.services
      : salonConfig.services.filter(
          (service) => service.category === selectedCategory
        );

  return (
    <section id='services' className={`py-16 ${salonConfig.colors.surface}`}>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className={`text-4xl font-bold ${salonConfig.colors.text} mb-4`}>
            Our Services
          </h2>
          <p
            className={`text-lg ${salonConfig.colors.textLight} max-w-2xl mx-auto`}
          >
            From precision cuts to creative coloring, we offer comprehensive
            hair services for every style and occasion.
          </p>
        </div>

        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-2 mb-8'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                selectedCategory === category.id
                  ? `${salonConfig.colors.buttonPrimary} text-white`
                  : `${salonConfig.colors.background} ${salonConfig.colors.text} hover:${salonConfig.colors.surface}`
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className='flex flex-wrap justify-center gap-6'>
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`${salonConfig.colors.background} rounded-lg p-6 shadow-md hover:shadow-lg transition duration-200 w-full md:w-[48%] lg:w-[31%]`}
            >
              <div className='flex justify-between items-start mb-3'>
                <h3
                  className={`text-xl font-semibold ${salonConfig.colors.text}`}
                >
                  {service.name}
                </h3>
                <span
                  className={`${salonConfig.colors.buttonSecondary} text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap`}
                >
                  {service.price}
                </span>
              </div>
              <p className={`${salonConfig.colors.textLight} text-sm`}>
                {service.description}
              </p>
              <div className='mt-4'>
                <span
                  className={`inline-block ${salonConfig.colors.surface} ${salonConfig.colors.text} px-2 py-1 rounded text-xs font-medium capitalize`}
                >
                  {service.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className='text-center py-12'>
            <p className={`${salonConfig.colors.textLight} text-lg`}>
              No services found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
