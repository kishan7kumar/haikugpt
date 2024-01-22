import React from "react";

interface TextBoxProps {
  value: string;
  handleTextBoxInputChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export const TextBox: React.FC<TextBoxProps> = ({
  value,
  handleTextBoxInputChange,
}: TextBoxProps) => {
  return (
    <textarea
      rows={1}
      className="w-full rounded-xl resize-none bg-transparent border text-gray-50 border-gray-500 focus:outline-gray-600 focus:ring-gray-600 px-4 py-2 h-[52px] max-h-[200px] overflow-hidden"
      placeholder="Type your haiku to get feedback..."
      onChange={handleTextBoxInputChange}
      value={value}
    ></textarea>
  );
};
