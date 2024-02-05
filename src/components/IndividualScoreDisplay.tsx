import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { BsCircleFill } from "react-icons/bs";

interface IndividualScoreDisplayType {
  title: string;
  score: number;
  stage: number;
  max: number;
}

const IndividualScoreDisplay = ({
  title,
  score,
  stage,
  max,
}: IndividualScoreDisplayType) => {
  const ratio = Math.round((score / max) * 100);

  const ProgressIndicator = () => {
    switch (stage) {
      case 2:
        var color = "red";
        var label = "High";
        break;
      case 1:
        color = "yellow";
        label = "Medium";
        break;
      case 0:
        color = "green";
        label = "Low";
        break;
      default:
        color = "black";
        label = "NIL";
        break;
    }

    return (
      <div className="flex md:ml-[5px] items-center">
        <div>{label}</div>
        <BsCircleFill color={color} style={{ margin: "10px 0px 10px 10px" }} />
      </div>
    );
  };

  return (
    <div className="flex mt-2 mb-10 border-2 rounded-lg">
      <div className="w-3/4 bg-blue-950 border-white border-r-2 p-2 pb-4 rounded-lg rounded-r-none">
        <div className="flex flex-col md:flex-row mb-2 text-[16px] md:text-[20px] md:justify-between items-start md:items-center">
          <div>{title}:</div>
          <ProgressIndicator />
        </div>
        <div
          className="relative w-full h-14 border-2 
                    bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
        >
          <div className="relative mr-2 h-full">
            <div
              className={clsx(
                `absolute inset-y-0 my-auto border-2 border-gray rounded-lg h-20 w-[10px]`
              )}
              style={{ marginLeft: `${ratio}%` }}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center mx-auto text-center text-[1rem] md:text-[2rem]">
        Score:
        <br />
        {score}
      </div>
    </div>
  );
};

export default IndividualScoreDisplay;
