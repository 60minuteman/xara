import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: {
    src: string;
    alt: string;
  };
  className?: string;
}

const Button = ({
  href,
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center gap-2 rounded-full font-medium transition-colors shadow-[inset_0_-6px_14px_rgba(255,255,255,0.3)] shadow-[0_13px_14px_-9px_rgba(4,94,215,0.44)]';
  
  const variants = {
    primary: 'bg-[#0066FF] text-white hover:bg-blue-600',
    secondary: 'bg-white text-[#0066FF] hover:bg-gray-50',
  };

  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-xl',
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon && (
        <Image
          src={icon.src}
          alt={icon.alt}
          width={24}
          height={24}
        />
      )}
      {children}
    </Link>
  );
};

export default Button;