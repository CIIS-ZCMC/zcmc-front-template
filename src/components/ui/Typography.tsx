import type {ReactNode, JSX} from "react";

type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TypographyProps = {
    children: ReactNode;
    variant?: TypographyVariants;
    className?: string;
}

const variantStyles: Record<TypographyVariants, string> = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-medium',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
    p: 'text-base',
    span: 'text-sm',
  };

const Typography = ({
    children,
    variant = 'p',
    className,
    ...props
}: TypographyProps) => {
    const Tag = variant as keyof JSX.IntrinsicElements;

    return (
        <Tag className={`${variantStyles[variant]} ${className}`} {...props}>{children}</Tag>
    )
}

export default Typography