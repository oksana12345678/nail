import clsx from 'clsx';
import { ReactNode, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={clsx(
        'px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl ',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
