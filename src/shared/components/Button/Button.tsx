import clsx from 'clsx';
import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  border?: boolean;
  fontSize?: 'sm' | 'base' | 'lg';
};

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'small',
  border = false,
  fontSize,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-[#1D1D1E] text-white hover-main ',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-gray-400 text-gray-800 hover:bg-gray-100',
  };

  const sizeClasses = {
    small: 'px-7 py-3.5',
    medium: 'px-4 py-2',
    large: 'px-6 py-3',
  };

  const fontSizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  };

  return (
    <button
      type={type}
      className={clsx(
        'transition-custom font-sans ',
        variant && variantClasses[variant],
        size && sizeClasses[size],
        fontSize && fontSizeClasses[fontSize],
        border && 'border-2 border-black',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
