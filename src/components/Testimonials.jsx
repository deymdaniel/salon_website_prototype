import React from "react";
import { salonConfig } from "../config/salonConfig";

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  return (
    <section
      id='testimonials'
      className={`py-16 ${salonConfig.colors.background}`}
    >
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className={`text-4xl font-bold ${salonConfig.colors.text} mb-4`}>
            What Our Clients Say
          </h2>
          <p
            className={`text-lg ${salonConfig.colors.textLight} max-w-2xl mx-auto`}
          >
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience at {salonConfig.businessName}.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {salonConfig.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${salonConfig.colors.surface} rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300`}
            >
              {/* Quote Icon */}
              <div
                className={`text-4xl ${salonConfig.colors.buttonSecondary.replace(
                  "bg-",
                  "text-"
                )} mb-4`}
              >
                "
              </div>

              {/* Testimonial Text */}
              <p className={`${salonConfig.colors.text} mb-4 italic`}>
                {testimonial.text}
              </p>

              {/* Rating */}
              <div className='flex mb-3'>{renderStars(testimonial.rating)}</div>

              {/* Client Info */}
              <div className='flex items-center justify-between'>
                <div>
                  <h4 className={`font-semibold ${salonConfig.colors.text}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${salonConfig.colors.textLight}`}>
                    {testimonial.location}
                  </p>
                </div>
                <div
                  className={`text-xs ${salonConfig.colors.buttonSecondary.replace(
                    "bg-",
                    "text-"
                  )} font-medium`}
                >
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-12'>
          <p className={`text-lg ${salonConfig.colors.textLight} mb-6`}>
            Ready to experience exceptional service for yourself?
          </p>
          <button
            className={`${salonConfig.colors.buttonPrimary} text-white px-8 py-3 rounded-lg font-semibold transition duration-200 hover:transform hover:scale-105`}
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
