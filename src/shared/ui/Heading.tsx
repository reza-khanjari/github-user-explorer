import { type JSX, type ReactNode } from "react";

interface HeadingProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: ReactNode;
}

function Heading({ as, className, children }: HeadingProps): JSX.Element {
  const baseClasses = "font-bold";
  const sizes: Record<HeadingProps["as"], string> = {
    h1: "text-3xl xs:text-4xl md:text-5xl",
    h2: "text-2xl xs:text-3xl md:text-4xl",
    h3: "text-3xl md:text-4xl",
    h4: "text-2xl md:text-3xl",
    h5: "text-xl md:text-2xl",
    h6: "text-lg md:text-xl",
  };
  const Tag = as;

  return (
    <Tag className={`${sizes[Tag]} ${baseClasses} ${className}`}>
      {children}
    </Tag>
  );
}

export default Heading;
