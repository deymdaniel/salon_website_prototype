import React, { useState } from "react";
import { salonConfig } from "../config/salonConfig";
import BookingModal from "./BookingModal";

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

  const duplicatedTestimonials = [
    ...salonConfig.testimonials,
    ...salonConfig.testimonials,
  ];

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

        <div className='relative w-full overflow-hidden testimonial-scroller'>
          <div className='flex w-max animate-scroll pause-on-hover'>
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className={`${salonConfig.colors.surface} rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 mx-3 w-[350px] flex-shrink-0`}
              >
                {/* Quote Icon */}
                <div
                  className={`text-4xl ${salonConfig.colors.buttonSecondary
                    .split(" ")[0]
                    .replace("bg-", "text-")} mb-4`}
                >
                  "
                </div>

                {/* Testimonial Text */}
                <p className={`${salonConfig.colors.text} mb-4 italic`}>
                  {testimonial.text}
                </p>

                {/* Rating */}
                <div className='flex mb-3'>
                  {renderStars(testimonial.rating)}
                </div>

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
        </div>

        {/* Call to Action */}
        <div className='text-center mt-12'>
          <p className={`text-lg ${salonConfig.colors.textLight} mb-6`}>
            Ready to experience exceptional service for yourself?
          </p>
          <button
            onClick={openModal}
            className={`${salonConfig.colors.buttonPrimary} text-white px-8 py-3 rounded-lg font-semibold transition duration-200 hover:transform hover:scale-105`}
          >
            Book Your Appointment
          </button>
        </div>
      </div>
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Testimonials;
