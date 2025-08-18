import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import project_img1 from '../../assets/project_img_1.jpg';
import project_img2 from '../../assets/project_img_2.jpg';
import project_img3 from '../../assets/project_img_3.jpg';
import project_img4 from '../../assets/project_img_4.jpg';
import project_img5 from '../../assets/project_img_5.jpg';
import project_img6 from '../../assets/project_img_6.jpg';

const Project = () => {
  const projects = [
    { id: 1, title: 'Luxury Villa in California', location: 'California, USA', image: project_img1 },
    { id: 2, title: 'Modern Apartment in New York', location: 'New York, USA', image: project_img2 },
    { id: 3, title: 'Beachfront House in Miami', location: 'Miami, USA', image: project_img3 },
    { id: 4, title: 'Penthouse in Los Angeles', location: 'Los Angeles, USA', image: project_img4 },
    { id: 5, title: 'Countryside Villa in Texas', location: 'Texas, USA', image: project_img5 },
    { id: 6, title: 'City Apartment in Chicago', location: 'Chicago, USA', image: project_img6 },
  ];

  return (
    <section id="projects" className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Projects</h2>
        <p className="text-gray-600 mb-10">Explore some of our recent real estate projects.</p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 4000 }}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative !pb-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Final Tagline */}
        <div className="mt-16 px-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
            And in our last project —
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 mt-2 italic">
            Crafting Space, Building Legacies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
