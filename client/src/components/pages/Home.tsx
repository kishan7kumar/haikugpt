import React, { useState } from "react";
import { Topbar } from "../common/topbar/Topbar";
import { TextBox } from "../common/textbox/TextBox";
import { Button } from "../common/button/Button";
import { Card } from "../common/card/Card";
import { RiLightbulbFlashLine } from "react-icons/ri";
import request from "../../utils/request";

interface cardData {
  type: string;
  response: string;
}

export const Home: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [cardData, setCardData] = useState<cardData[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Handle the change in the text box
  const handleTextBoxInputChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const val = evt.target?.value;
    setValue(val);
  };

  // Handle the click of the review/generate button
  const handleReviewButtonClick = () => {
    setIsLoaded(true);
    setValue("");
    // If the user has not entered anything, generate a new haiku
    if (value.trim() === "") {
      // Append the user's query to the card data
      setCardData((previous: any) => {
        return [...previous, { type: "user", response: "Generate a Haiku" }];
      });
      getNewHaiku();
    } else {
      // Else, get feedback on the haiku
      if (value.trim().length > 1 && value.trim().length < 30) {
        alert("Please enter a haiku with atleast 30 characters");
        setIsLoaded(false);
        return;
      }
      if (value.trim().length > 1000) {
        alert("Please enter a haiku with less than 1000 characters");
        setIsLoaded(false);
        return;
      }
      // Append the user's query to the card data
      setCardData((previous: any) => [
        ...previous,
        {
          type: "user",
          response: "Give feedback on this Haiku\n\n " + value.trim(),
        },
      ]);
      getHaikuFeedback();
    }
  };

  // Get a new haiku from the API
  const getNewHaiku = async () => {
    try {
      const data = await request({
        method: "GET",
      });
      setCardData((previous: any) => [
        ...previous,
        { type: "bot", response: data.response },
      ]);
      setIsLoaded(false);
    } catch (e) {
      console.log(e);
    }
  };

  // Get feedback on the haiku from the API
  const getHaikuFeedback = async () => {
    try {
      const data = await request({
        method: "POST",
        body: JSON.stringify({ userquery: value.trim() }),
      });
      setCardData((previous: any) => [
        ...previous,
        { type: "bot", response: data.response },
      ]);
      setIsLoaded(false);
    } catch (e) {
      console.log(e);
    }
  };

  // Handle the click of the new chat button
  const handleNewChatButtonClick = () => {
    // clear the card data and the text box
    setCardData([]);
    setValue("");
  };

  return (
    <div className=" bg-gray-700 h-full w-full ">
      <div className="lg:max-w-[48rem] h-full mx-auto flex flex-col">
        <Topbar handleNewChatButtonClick={handleNewChatButtonClick} />
        <div className="flex-grow min-h-0 pb-4 pt-8 px-5 lg:px-0">
          <div className="h-full flex overflow-y-auto flex-col relative">
            {cardData.length > 0 ? (
              cardData.map((card: any, index: number) => {
                return (
                  <Card key={index} type={card.type} response={card.response} />
                );
              })
            ) : (
              <div className="empty m-auto flex flex-col items-center">
                <RiLightbulbFlashLine className="bg-white text-7xl rounded-full p-3" />
                <h2 className="text-2xl font-semibold text-gray-50 mt-4 text-center">
                  Generate a new Haiku or get feedback on your own
                </h2>
              </div>
            )}
          </div>
        </div>
        <div className="pt-4 pb-4 flex justify-center items-center relative px-5 lg:px-0">
          {isLoaded && (
            <div className="w-full flex justify-center items-center  absolute top-[-20px] left-0 text-gray-200 text-lg font-bold">
              Generating Response...
            </div>
          )}
          <TextBox
            handleTextBoxInputChange={handleTextBoxInputChange}
            value={value}
          />
          <div className="absolute bottom-6 lg:right-2 right-7">
            <Button
              handleButtonClick={handleReviewButtonClick}
              isLoading={isLoaded}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
