import { ChildrenProps } from '@/shared/types';
import React from 'react';

const Section: React.FC<ChildrenProps> = ({ children }) => {
  return <section className="pt-20 lg:pt-32 w-screen">{children}</section>;
};

export default Section;
