import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
  desc?: string;
}

export interface IconComponent extends React.FC<IconProps> {
  category: string;
  tags?: string[];
}

export function createIcon(
  path: React.ReactNode,
  options: { 
    viewBox?: string;
    category: string;
    tags?: string[];
  }
): IconComponent {
  const Icon: IconComponent = ({ 
    title,
    desc,
    width = 24,
    height = 24,
    className,
    ...props 
  }: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={options.viewBox || "0 0 24 24"}
        className={className}
        aria-hidden={!title && !desc}
        {...props}
      >
        {title && <title>{title}</title>}
        {desc && <desc>{desc}</desc>}
        {path}
      </svg>
    );
  };

  Icon.category = options.category;
  Icon.tags = options.tags;

  return Icon;
}