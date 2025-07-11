import React from "react";
import { salonConfig } from "../config/salonConfig";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${salonConfig.colors.primary} text-white py-12`}>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Business Info */}
          <div>
            <h3 className='text-xl font-bold mb-4'>
              {salonConfig.businessName}
            </h3>
            <p className='text-gray-300 mb-4'>{salonConfig.tagline}</p>
            <p className='text-gray-400 text-sm'>
              {salonConfig.description.substring(0, 120)}...
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-gray-300'>
              <li>
                <a
                  href='#services'
                  className='hover:text-white transition duration-200'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#stylists'
                  className='hover:text-white transition duration-200'
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href='#gallery'
                  className='hover:text-white transition duration-200'
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href='#testimonials'
                  className='hover:text-white transition duration-200'
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='hover:text-white transition duration-200'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact Info</h4>
            <div className='space-y-2 text-gray-300 text-sm'>
              <p>{salonConfig.contact.address.street}</p>
              <p>{salonConfig.contact.address.barangay}</p>
              <p>{salonConfig.contact.address.postal}</p>
              <p className='mt-3'>📞 {salonConfig.contact.phone}</p>
              <p>📧 {salonConfig.contact.email}</p>
            </div>

            {/* Social Media */}
            <div className='mt-6'>
              <h5 className='font-semibold mb-2'>Follow Us</h5>
              <div className='flex space-x-3'>
                <a
                  href={`https://instagram.com/${salonConfig.contact.social.instagram.replace(
                    "@",
                    ""
                  )}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-white transition duration-200'
                >
                  📷 Instagram
                </a>
                <a
                  href={`https://${salonConfig.contact.social.facebook}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-white transition duration-200'
                >
                  📘 Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm'>
          <p>
            &copy; {currentYear} {salonConfig.businessName}. All rights
            reserved.
          </p>
          <p className='mt-1'>
            Crafted with ❤️ for beautiful hair transformations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
