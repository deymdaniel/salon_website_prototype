import React, { useState } from "react";
import { salonConfig } from "../config/salonConfig";

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Booking submitted:", formData);
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      onClose();
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        notes: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  if (showThankYou) {
    return (
      <div
        className='fixed inset-0 flex items-center justify-center z-50 p-4'
        style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      >
        <div
          className={`${salonConfig.colors.background} rounded-lg p-8 max-w-md w-full text-center`}
        >
          <div className='text-green-500 text-6xl mb-4'>✓</div>
          <h3 className={`text-2xl font-bold ${salonConfig.colors.text} mb-2`}>
            Thank You!
          </h3>
          <p className={salonConfig.colors.textLight}>
            Your booking request has been submitted. We'll contact you soon to
            confirm your appointment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className='fixed inset-0 flex items-center justify-center z-50 p-4'
      style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
    >
      <div
        className={`${salonConfig.colors.background} rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto`}
      >
        <div className='flex justify-between items-center mb-4'>
          <h3 className={`text-xl font-bold ${salonConfig.colors.text}`}>
            Book Your Appointment
          </h3>
          <button
            onClick={onClose}
            className={`${salonConfig.colors.textLight} hover:${salonConfig.colors.text} text-2xl`}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label
              className={`block text-sm font-medium ${salonConfig.colors.text} mb-1`}
            >
              Name *
            </label>
            <input
              type='text'
              name='name'
              required
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 border ${salonConfig.colors.border} rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent`}
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${salonConfig.colors.text} mb-1`}
            >
              Email *
            </label>
            <input
              type='email'
              name='email'
              required
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border ${salonConfig.colors.border} rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent`}
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${salonConfig.colors.text} mb-1`}
            >
              Phone
            </label>
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-2 border ${salonConfig.colors.border} rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent`}
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${salonConfig.colors.text} mb-1`}
            >
              Service *
            </label>
            <select
              name='service'
              required
              value={formData.service}
              onChange={handleChange}
              className={`w-full p-2 border ${salonConfig.colors.border} rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent`}
            >
              <option value=''>Select a service</option>
              {salonConfig.services.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name} - {service.price}
                </option>
              ))}
            </select>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label
                className={`block text-sm font-medium ${salonConfig.colors.text} mb-1`}
              >
                Preferred Date *
              </label>
              <input
                type='date'
                name='date'
                required
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className={`w-full p-2 border ${salonConfig.colors.border} rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent`}
              />
            </div>

            <div>
              <label
                className={`block text-sm font-medium ${salonConfig.colors.text} mb-1`}
              >
                Preferred Time *
              </label>
              <select
                name='time'
                required
                value={formData.time}
                onChange={handleChange}
                className={`w-full p-2 border ${salonConfig.colors.border} rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent`}
              >
                <option value=''>Select time</option>
                <option value='10:00'>10:00 AM</option>
                <option value='11:00'>11:00 AM</option>
                <option value='12:00'>12:00 PM</option>
                <option value='13:00'>1:00 PM</option>
                <option value='14:00'>2:00 PM</option>
                <option value='15:00'>3:00 PM</option>
                <option value='16:00'>4:00 PM</option>
                <option value='17:00'>5:00 PM</option>
                <option value='18:00'>6:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label
              className={`block text-sm font-medium ${salonConfig.colors.text} mb-1`}
            >
              Additional Notes
            </label>
            <textarea
              name='notes'
              value={formData.notes}
              onChange={handleChange}
              rows='3'
              className={`w-full p-2 border ${salonConfig.colors.border} rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent`}
              placeholder='Any special requests or questions?'
            />
          </div>

          <button
            type='submit'
            className={`w-full ${salonConfig.colors.buttonPrimary} text-white py-2 px-4 rounded-md transition duration-200`}
          >
            Submit Booking Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
