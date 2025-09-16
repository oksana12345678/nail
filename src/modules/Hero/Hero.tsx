import React from 'react';
import data from './data.json';
import Button from '@/shared/components/Button/Button';
import Image from 'next/image';
import heroImage from '../../../public/Mask.png';
import nail from '../../../public/nail.png';
import NailServices from './components/Services';
const Hero = () => {
  return (
    <div className="flex   relative h-[800px]  bg-dots bg-[left_30px_top_-30px] bg-[length:460px] bg-no-repeat">
      <div className=" flex flex-col justify-end gap-6 w-1/2 items-center bg-circle bg-[left_-54px_top_42px] bg-[length:400px] bg-no-repeat">
        <div className="flex flex-col justify-center lg:w-[400px] h-full lg:gap-10">
          <h1 className="lg:font-medium lg:text-[48px] font-display ">
            {data.main_text}
          </h1>
          <Button className="max-w-[138px]">{data.button}</Button>
        </div>
        <div className="bg-skin_accent w-full h-52">
          <NailServices />
        </div>
      </div>
      <div className="w-1/2 h-full ">
        <Image
          src={heroImage}
          alt="main image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[280px] h-[400px] rounded-t-full overflow-hidden">
        <Image src={nail} alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
