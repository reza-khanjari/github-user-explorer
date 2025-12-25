import React, { forwardRef } from "react";

const SearchInput = forwardRef<
  HTMLInputElement,
  {
    onFocus?: React.FocusEventHandler;
    onBlur?: () => void;
    onChange?: React.ChangeEventHandler;
    value?: string;
  }
>(function SearchInput({ onFocus, onBlur, onChange, value }, ref) {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={ref}
        className="w-full rounded-lg bg-[#3C376F]/90 px-3 py-1.5 font-bold text-white outline-0"
        type="text"
        placeholder="Search username..."
      />
    </>
  );
});

export default SearchInput;
