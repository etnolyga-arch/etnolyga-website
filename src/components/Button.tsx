import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-block px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-colors border cursor-pointer';
  const variants: Record<string, string> = {
    primary: 'bg-green-dark text-white border-green-dark hover:bg-green-dark/80',
    outline: 'bg-transparent text-green-dark border-green-dark hover:bg-green-dark hover:text-white',
    white: 'bg-transparent text-white border-white hover:bg-white hover:text-green-dark',
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
