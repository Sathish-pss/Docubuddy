import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Defining the interface props for MaxWidthWrapper
interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

/**
 * Component that renders a className and children
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The children nodes to be rendered
 * @returns {React.ReactElement} - Component that returns a react element
 */

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className,
      )}>
      {children}
    </div>
  );
};
export default MaxWidthWrapper;
