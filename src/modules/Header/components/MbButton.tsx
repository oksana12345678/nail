import clsx from 'clsx';
import React from 'react';

interface MbButtonProps {
  className?: string;
  open: () => void;
  isOpen: boolean;
}

const MbButton: React.FC<MbButtonProps> = ({ className, open, isOpen }) => {
  return (
    <button
      type="button"
      className={clsx('flex flex-col border-none lg:hidden gap-2', className)}
      onClick={open}
    >
      <div
        className={clsx(
          'burger-btn-el transition-custom',
          isOpen && 'rotate-45 -translate-y-[-10px]'
        )}
      ></div>

      <div
        className={clsx(
          'burger-btn-el transition-custom',
          isOpen && 'opacity-0'
        )}
      ></div>

      <div
        className={clsx(
          'burger-btn-el transition-custom',
          isOpen && '-rotate-45 translate-y-[-10px]'
        )}
      ></div>

      <span className="hidden">burger button</span>
    </button>
  );
};

export default MbButton;
