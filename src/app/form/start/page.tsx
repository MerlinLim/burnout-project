"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const FormStart = () => {
  const router = useRouter();
  const handleNextClick = () => {
    router.push("/form");
  };
  const handlePreviousClick = () => {
    router.push("/");
  };
  return (
    <div className="flex ">
      <div className=" w-[40rem]">
        <div className="text-[32px] font-lightbold text-orange-500 my-4">
          Post Retro Mental Check-in
        </div>
        <div className="mb-4">
          Answer this short questionnaire based on how you feel after completing
          the tasks during your recent sprint.
        </div>
        <div className="bg-blend-saturation bg-blue-950 p-2 rounded-lg">
          <div>
            Based on the scoring below, indicate within the questionnaire how
            you felt during the sprint.{" "}
          </div>
          <div>
            he details of this questionnaire would be kept strictly between you
            and your supervisor.
          </div>
          <ul style={{ marginLeft: "1rem", padding: "1rem" }}>
            <li>0 - Never</li>
            <li>1 - At least once</li>
            <li>2 - Two to three times</li>
            <li>3 - Four to five times</li>
            <li>4 - Six to seven times</li>
            <li>5 - Frequently within a week</li>
            <li>6 - Every day</li>
          </ul>
          <div>
            * This questionnaire does not replace nor is it intended to replace
            a diagnosis by mental health professionals.
          </div>
        </div>
        <div className="mt-2 flex backdrop-blur-[2px] px-[2rem]">
          <div className="mr-auto">
            <Button text={"cancel"} handleClick={handlePreviousClick} />
          </div>
          <div className="ml-auto">
            <Button text={"start"} handleClick={handleNextClick} />
          </div>
        </div>
      </div>
      <div className="hidden md:block relative w-3/4 ml-5">
        <Image
          src={"/img/survey-img.png"}
          alt="Play@Govtech"
          fill
          style={{objectFit: "contain"}}
        />
      </div>
    </div>
  );
};

export default FormStart;
