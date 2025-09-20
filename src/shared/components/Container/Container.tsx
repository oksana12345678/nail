import clsx from 'clsx';
import { ReactNode, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={clsx('px-4 mx-auto max-w-screen-xl py-10', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
