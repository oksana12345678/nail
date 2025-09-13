import clsx from 'clsx';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ iconName, className, ...props }) => {
  const iconClass = clsx('', className);

  return (
    <svg className={iconClass} {...props}>
      <use href={`/icons/sprite.svg#${iconName}`} />
    </svg>
  );
};

export default Icon;
