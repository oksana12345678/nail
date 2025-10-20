import React from 'react';
import GalleryList from '../GalleryList/GalleryList';
import AccentWindow from './components/AccentWindow';

const FollowUs: React.FC = () => {
  return (
    <div className="relative ">
      <GalleryList
        className="gap-0 w-full"
        listItemClass="lg:w-1/4 lg:h-[320px] min-w-[160px] w-1/2 h-[213px] sm:w-1/4"
      />
      <AccentWindow />
    </div>
  );
};

export default FollowUs;
