import Container from '@/shared/components/Container/Container';
import React from 'react';
import data from './data.json';
import Icon from '@/shared/components/Icon/Icon';
import Link from 'next/link';
import Section from '@/shared/components/Section/Section';

const HotDates: React.FC = () => {
  return (
    <Section>
      <Container className="flex gap-5 lg:gap-10 justify-center  items-center flex-col sm:flex-row ">
        <ul className="flex flex-wrap w-full sm:w-[76%] gap-6 justify-center sm:justify-start lg:justify-center lg:w-max lg:gap-4">
          {data.data.map((date, index) => (
            <li
              key={index}
              className="grid-cols-2 items-center justify-center gap-4 grid max-w-[270px]  p-4 border border-skin_accent rounded-[16px] list-hover transition-custom sm:max-w-[252px] sm:p-3 sm:gap-3"
            >
              <h4 className="flex items-center gap-1">
                <Icon
                  iconName="person"
                  className="fill-secondary_accent w-4 h-4"
                />
                {date.name}
              </h4>
              <p className="flex items-center gap-1">
                <Icon
                  iconName="icon-lakier"
                  className="fill-secondary_accent w-4 h-4"
                />
                {date.description}
              </p>
              <p className="flex items-center gap-1">
                <Icon
                  iconName="calendar"
                  className="fill-secondary_accent w-4 h-4"
                />
                {date.date}
              </p>
              <p className="flex items-center gap-1">
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
    </Section>
  );
};

export default HotDates;
