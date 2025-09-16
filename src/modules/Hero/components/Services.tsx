'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import data from '../data.json';
import { Pagination, Autoplay, EffectCube } from 'swiper/modules';

const NailServices = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectCube]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 9000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      effect="cube"
      speed={1000}
      className="h-full"
      cubeEffect={{
        shadow: false,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      {data.services_list.map((service, index) => (
        <SwiperSlide key={index}>
          <p className="text-lg font-semibold text-center text-white pt-6 h-full flex flex-col">
            {service.name.toUpperCase()}
            <span className="text-base font-normal text-secondary_white_text">
              {service.coast}
            </span>
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NailServices;
