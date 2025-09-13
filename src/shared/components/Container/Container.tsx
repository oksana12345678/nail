import { ReactNode, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <div className="px-4 mx-auto max-w-screen-xl" {...props}>
      {children}
    </div>
  );
};

export default Container;
