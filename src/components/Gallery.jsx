import React, { useState } from "react";
import { salonConfig } from "../config/salonConfig";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "all", name: "All" },
    { id: "color", name: "Color" },
    { id: "men", name: "Men's Cuts" },
    { id: "women", name: "Women's Cuts" },
    { id: "treatment", name: "Treatments" },
    { id: "styling", name: "Styling" },
    { id: "salon", name: "Salon" },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? salonConfig.gallery
      : salonConfig.gallery.filter(
          (image) => image.category === selectedCategory
        );

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id='gallery' className={`py-16 ${salonConfig.colors.surface}`}>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className={`text-4xl font-bold ${salonConfig.colors.text} mb-4`}>
            Our Work Gallery
          </h2>
          <p
            className={`text-lg ${salonConfig.colors.textLight} max-w-2xl mx-auto`}
          >
            Explore our portfolio showcasing the artistry and skill of our
            talented stylists.
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

        {/* Gallery Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className='relative aspect-square overflow-hidden rounded-lg cursor-pointer group'
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className='w-full h-full object-cover transition duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center'>
                <span className='text-white opacity-0 group-hover:opacity-100 transition duration-300 text-sm font-medium'>
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className='text-center py-12'>
            <p className={`${salonConfig.colors.textLight} text-lg`}>
              No images found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4'
          onClick={closeLightbox}
        >
          <div className='relative max-w-4xl max-h-full'>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className='max-w-full max-h-full object-contain'
            />
            <button
              onClick={closeLightbox}
              className='absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition duration-200'
            >
              ×
            </button>
            <div className='absolute bottom-4 left-4 right-4 text-white text-center'>
              <p className='text-lg font-medium'>{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
