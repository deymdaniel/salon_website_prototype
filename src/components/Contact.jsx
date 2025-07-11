import React from "react";
import { salonConfig } from "../config/salonConfig";
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Contact = () => {
  const { address } = salonConfig.contact;
  const fullAddress = `${address.street}, ${address.barangay}, ${address.postal}`;
  const encodedAddress = encodeURIComponent(fullAddress);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  return (
    <section id='contact' className={`py-16 ${salonConfig.colors.surface}`}>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className={`text-4xl font-bold ${salonConfig.colors.text} mb-4`}>
            Get In Touch
          </h2>
          <p
            className={`text-lg ${salonConfig.colors.textLight} max-w-2xl mx-auto`}
          >
            Visit us at our convenient location or get in touch to schedule your
            appointment.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div className='space-y-8'>
            {/* Address */}
            <div
              className={`${salonConfig.colors.background} rounded-lg p-6 shadow-md`}
            >
              <h3
                className={`text-xl font-semibold ${salonConfig.colors.text} mb-3 flex items-center`}
              >
                <span className='mr-3 text-2xl'>📍</span>
                Visit Us
              </h3>
              <div className={`${salonConfig.colors.textLight} space-y-1`}>
                <p>{salonConfig.contact.address.street}</p>
                <p>{salonConfig.contact.address.barangay}</p>
                <p>{salonConfig.contact.address.postal}</p>
              </div>
            </div>

            {/* Contact Details */}
            <div
              className={`${salonConfig.colors.background} rounded-lg p-6 shadow-md`}
            >
              <h3
                className={`text-xl font-semibold ${salonConfig.colors.text} mb-3 flex items-center`}
              >
                <span className='mr-3 text-2xl'>📞</span>
                Contact Info
              </h3>
              <div className={`${salonConfig.colors.textLight} space-y-2`}>
                <p>
                  <span className='font-medium'>Phone:</span>{" "}
                  {salonConfig.contact.phone}
                </p>
                <p>
                  <span className='font-medium'>Email:</span>{" "}
                  {salonConfig.contact.email}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div
              className={`${salonConfig.colors.background} rounded-lg p-6 shadow-md`}
            >
              <h3
                className={`text-xl font-semibold ${salonConfig.colors.text} mb-3 flex items-center`}
              >
                <span className='mr-3 text-2xl'>🕒</span>
                Business Hours
              </h3>
              <div className={`${salonConfig.colors.textLight} space-y-1`}>
                <p>{salonConfig.contact.hours.weekdays}</p>
                <p>{salonConfig.contact.hours.weekend}</p>
              </div>
            </div>

            {/* Social Media */}
            <div
              className={`${salonConfig.colors.background} rounded-lg p-6 shadow-md`}
            >
              <h3
                className={`text-xl font-semibold ${salonConfig.colors.text} mb-3 flex items-center`}
              >
                <span className='mr-3 text-2xl'>📱</span>
                Follow Us
              </h3>
              <div className='flex space-x-4'>
                <a
                  href={salonConfig.contact.social.youtube}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='YouTube'
                  className='text-gray-500 hover:text-red-600 transition duration-200'
                >
                  <FaYoutube className='w-8 h-8' />
                </a>
                <a
                  href={salonConfig.contact.social.instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Instagram'
                  className='text-gray-500 hover:text-pink-600 transition duration-200'
                >
                  <FaInstagram className='w-8 h-8' />
                </a>
                <a
                  href={salonConfig.contact.social.facebook}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Facebook'
                  className='text-gray-500 hover:text-blue-600 transition duration-200'
                >
                  <FaFacebook className='w-8 h-8' />
                </a>
                <a
                  href={salonConfig.contact.social.tiktok}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='TikTok'
                  className='text-gray-500 hover:text-black transition duration-200'
                >
                  <FaTiktok className='w-8 h-8' />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div
            className={`${salonConfig.colors.background} rounded-lg overflow-hidden shadow-md flex flex-col`}
          >
            <div className='h-full min-h-[400px] w-full'>
              <iframe
                title='Salon Location'
                src={mapUrl}
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            <a
              href={directionsUrl}
              target='_blank'
              rel='noopener noreferrer'
              className={`block w-full text-center p-4 ${salonConfig.colors.buttonPrimary} text-white font-bold transition duration-200`}
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
