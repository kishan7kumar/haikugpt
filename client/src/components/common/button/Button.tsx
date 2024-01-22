import React from "react";
import { IoArrowUp } from "react-icons/io5";

interface ButtonProps {
  handleButtonClick?: <T>(event: React.MouseEvent<T>) => void;
  isLoading: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  handleButtonClick,
  isLoading,
}: ButtonProps) => {
  return (
    <button
      disabled={isLoading}
      className="bg-white rounded-md shadow-lg p-1 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={handleButtonClick}
    >
      <IoArrowUp className="text-2xl" />
    </button>
  );
};
