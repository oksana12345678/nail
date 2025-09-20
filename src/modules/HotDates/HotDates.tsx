import Container from '@/shared/components/Container/Container';
import React from 'react';
import data from './data.json';
import Icon from '@/shared/components/Icon/Icon';
import Link from 'next/link';

const HotDates: React.FC = () => {
  return (
    <Container className="flex items-center ">
      <ul className="flex flex-wrap">
        {data.data.map((date, index) => (
          <li
            key={index}
            className="grid-cols-2 items-center justify-center gap-4 grid m-4 p-4 border border-skin_accent rounded-[16px] "
          >
            <h4 className="flex items-center gap-2">
              <Icon
                iconName="person"
                className="fill-secondary_accent w-4 h-4"
              />
              {date.name}
            </h4>
            <p className="flex items-center gap-2">
              <Icon
                iconName="icon-lakier"
                className="fill-secondary_accent w-4 h-4"
              />
              {date.description}
            </p>
            <p className="flex items-center gap-2">
              <Icon
                iconName="calendar"
                className="fill-secondary_accent w-4 h-4"
              />
              {date.date}
            </p>
            <p className="flex items-center gap-2">
              <Icon
                iconName="clock"
                className="fill-secondary_accent w-4 h-4"
              />
              {date.time}
            </p>
          </li>
        ))}
      </ul>
      <Link
        href="#"
        className="base-button base-font-normal flex items-center  uppercase transition-custom h-14  gap-2 animate-pulse"
      >
        {data.button}
      </Link>
    </Container>
  );
};

export default HotDates;
