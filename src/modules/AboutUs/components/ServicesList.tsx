import Icon from '@/shared/components/Icon/Icon';
import React from 'react';
import Card from './Card';

const iconsMap = ['nail', 'icon-lakier', 'icon-lakier'];

interface ServiceItem {
  name: string;
  description: string;
}

interface ServicesListProps {
  careList: ServiceItem[];
}

const ServicesList: React.FC<ServicesListProps> = ({ careList }) => {
  return (
    <div>
      <ul className="flex flex-col sm:flex-row gap-10 sm:gap-20">
        {careList.map((item, index) => {
          const iconName = iconsMap[index];
          return (
            <li key={index} className="mb-4 flex flex-col items-center gap-3">
              {iconName && (
                <Icon
                  iconName={iconName}
                  className="fill-skin_accent w-36 h-32 flex-shrink-0"
                />
              )}
              {/* <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-center  text-skin_accent">
                  {item.name}
                </h3>
                <p className="base-font-normal text-center h-[68px] overflow-hidden text-ellipsis line-clamp-3">
                  {item.description}
                </p>
              </div> */}
              <Card item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServicesList;
