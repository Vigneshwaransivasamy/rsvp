import React from "react";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  error?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...restProps }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={restProps.name} className="py-2 text-xs font-semibold">
          {label}
        </label>
        <input
          ref={ref}
          id={restProps.name}
          className="h-12 text-black rounded-lg px-3"
          {...restProps}
        />
        {error && <span className="text-red-500 text-sm pt-1">{error}</span>}
      </div>
    );
  }
);
