import React from "react";

const Button = ({
  className, // used to add additon classes for styling purposes.
  children,
  isDisabled = false,
  handleClick,
  submitType = "button",
}) => {
  return (
      <button
        disabled={isDisabled}
        onClick={handleClick}
  className={`bg-green rounded-md text-white text-base font-medium capitalize px-5 py-[10px] ${className}`}
        type={submitType}
      >
        {children}
      </button>
  );
};

export default Button;