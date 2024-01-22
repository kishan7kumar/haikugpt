import React from "react";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";

interface CardProps {
  type: "bot" | "user";
  response: string;
}

export const Card: React.FC<CardProps> = ({ type, response }: CardProps) => {
  return (
    <div className="flex pb-10">
      <div>
        {type === "bot" ? (
          <RiLightbulbFlashLine className="bg-green-600 text-white text-2xl rounded-full p-1" />
        ) : (
          <AiOutlineUser className="bg-teal-600 text-white text-2xl rounded-full p-1" />
        )}
      </div>
      <div className="flex flex-col pl-2">
        <h3 className="text-white font-bold">
          {type === "bot" ? "Haiku GPT" : "You"}
        </h3>
        <div className="text-gray-50 mt-1">
          <pre className="text-wrap font-sans">{response}</pre>
        </div>
      </div>
    </div>
  );
};
