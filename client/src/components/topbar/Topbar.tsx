import React from "react";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { PiNotePencilBold } from "react-icons/pi";

interface TopbarProps {
  handleNewChatButtonClick: <T>(event: React.MouseEvent<T>) => void;
}

export const Topbar: React.FC<TopbarProps> = ({
  handleNewChatButtonClick,
}: TopbarProps) => {
  return (
    <div className="min-h-24 border-b border-gray-500 flex justify-center items-center py-3 relative px-3">
      <RiLightbulbFlashLine className="text-4xl text-gray-100 mr-2" />
      <h1 className="text-4xl text-gray-300 font-semibold">Haiku GPT</h1>
      <PiNotePencilBold
        onClick={handleNewChatButtonClick}
        className="text-3xl text-white absolute right-4 lg:right-0 cursor-pointer"
      />
    </div>
  );
};
