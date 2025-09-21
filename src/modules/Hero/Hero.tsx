import React from 'react';
import data from './data.json';
import Button from '@/shared/components/Button/Button';
import Image from 'next/image';
import heroImage from '../../../public/nail_art.png';
import nail from '../../../public/nail.png';
import handNail from '../../../public/hand-nail.png';
import NailServices from './components/Services';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex w-screen  relative h-[800px]  bg-dots sm:bg-[left_30px_top_60px] bg-[length:460px] bg-no-repeat xl:max-w-[1140px] mb-10">
      <div className=" flex flex-col justify-end gap-6 w-full sm:w-1/2 items-center bg-circle bg-[left_-40px_top_100px] sm:bg-[left_-54px_top_42px] bg-[length:400px] bg-no-repeat">
        <div className="flex pl-4 sm:pl-6 flex-col justify-center lg:w-[400px] h-full gap-10">
          <h1 className="font-medium text-4xl lg:text-[48px] font-display ">
            {data.main_text}
          </h1>
          <Link
            href="#about"
            className="max-w-[138px] base-font-normal base-button_mb sm:base-button uppercase transition-custom"
          >
            {data.button}
          </Link>
        </div>
        <div className="bg-skin_accent  h-52 sm:h-40 w-screen sm:w-full ">
          <NailServices />
        </div>
      </div>
      <div className="sm:w-1/2 h-full hidden sm:block relative">
        <Image
          src={heroImage}
          alt="main image"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
      </div>
      <div className="flex absolute top-1/2 left-1/2 -translate-x-1/5 -translate-y-1/3 w-[120px] h-[160px] rounded-t-full overflow-hidden">
        <Image src={handNail} alt="" fill className="object-cover" />
      </div>

      <div className="hidden sm:flex absolute top-[54%] left-1/2 -translate-x-[40%] -translate-y-1/3 w-[280px] h-[400px] rounded-t-full overflow-hidden">
        <Image src={nail} alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
