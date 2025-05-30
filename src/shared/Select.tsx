import React, { SelectHTMLAttributes } from "react";
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  sizeClass?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", sizeClass = "h-11", children, ...args }, ref) => {
    return (
      <select
        ref={ref} // este ref también estaba faltando aquí
        className={`nc-Select ${sizeClass} ${className} block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900`}
        {...args}
      >
        {children}
      </select>
    );
  }
);


export default Select;
