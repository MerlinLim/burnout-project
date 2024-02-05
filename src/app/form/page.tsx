"use client";
import Button from "@/components/Button";
import { formData } from "@/data/questionnaire";
import { useEffect, useState } from "react";
import { ISection } from "@/data/types";
import QuestionComponent from "@/components/QuestionComponent";
import { BurnoutInv } from "@/backend/burnoutinv";
import { BsCircleFill } from "react-icons/bs";
import IndividualScoreDisplay from "@/components/IndividualScoreDisplay";

export default function Form() {
  // Create a useState
  const [formState, setFormState] = useState<string>("progress");
  const [sectionNum, setSectionNum] = useState<number>(0);
  // const [hasSubmit, setHasSubmit] = useState<boolean>(true);
  const [toggleNext, setToggleNext] = useState<boolean>(false);
  const [responseArray, setResponseArray] = useState<number[]>(
    formData.sections.flatMap((s) => {
      return s.questions.map((q, i) => {
        return -1;
      });
    })
  );

  const [burnoutInv, setBurnoutInv] = useState<BurnoutInv>();
  function handleNextClick() {
    if (sectionNum == formData.sections.length - 1) {
      // at last page
      setFormState("complete");
      setBurnoutInv(new BurnoutInv(responseArray));
      return;
    }

    setSectionNum(sectionNum + 1);
  }

  function handlePreviousClick() {
    if (sectionNum == 0) {
      // Greyout
      return;
    }

    setSectionNum(sectionNum - 1);
  }

  function handleRadioOnChange(questionNum: number, answer: number) {
    const newResponseArray = [...responseArray];
    newResponseArray[questionNum - 1] = answer;
    setResponseArray(newResponseArray);
  }

  useEffect(() => {
    // Unlock next section
    var allSelect = true;

    formData.sections[sectionNum].questions.forEach((question) => {
      if (responseArray[question.itemId - 1] == -1) {
        // toggle off
        allSelect = false;
      }
    });

    setToggleNext(allSelect);
  }, [responseArray, sectionNum, formState]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sectionNum, formState]);

  var section: ISection = formData.sections[sectionNum];

  const overallLabel =
    burnoutInv?.overall == 2
      ? "High"
      : burnoutInv?.overall == 1
      ? "Medium"
      : burnoutInv?.overall == 0
      ? "Low"
      : "NIL";
  const overallColor =
    burnoutInv?.overall == 2
      ? "red"
      : burnoutInv?.overall == 1
      ? "yellow"
      : burnoutInv?.overall == 0
      ? "green"
      : "black";

  return (
    <main className="w-full">
      {formState == "complete" && burnoutInv? (
        <div className="relative w-4/5 mx-auto ">
          <div className="flex justify-center bg-blue-950 text-[1rem] md:text-[2rem] px-2">
            <div className = "flex items-center">Total Burnout Level: </div>
            <div className="flex ml-[0.5rem] items-center">
              <div>{overallLabel}</div>
              <BsCircleFill
                color={overallColor}
                style={{ margin: "10px 0px 10px 10px" }}
              />
            </div>
          </div>
          <IndividualScoreDisplay
            title="Exhausation"
            score={burnoutInv.exhaustion}
            stage={burnoutInv.burnoutStage}
            max={42}
          />
          <IndividualScoreDisplay
            title="Depersonalisation"
            score={burnoutInv.depersonalisation}
            stage={burnoutInv.depersStage}
            max={42}
          />
          <IndividualScoreDisplay
            title="Unfulfilment"
            score={burnoutInv.unfulfilled}
            stage={burnoutInv.personalStage}
            max={48}
          />
          <div className="z-10 sticky bottom-0 flex backdrop-blur-[2px] px-[2rem]">
            <div className="ml-auto">
                <Button text={"done"} handleClick={() => window.location.href='/'} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-4/5 mx-auto h-full">
            {
              <div key={sectionNum} className="pt-[2rem]">
                <div>
                  <div className="text-2xl pb-[1rem]">{section.title}</div>
                  <div className="text-sm md:text-xl pb-[1rem]">
                    {section.description}
                  </div>
                </div>
                <div className="mx-auto">
                  {section.questions.map((q, i) => (
                    <div
                      key={i}
                      className="mb-[1rem] bg-blue-950 rounded-2xl p-2"
                    >
                      <QuestionComponent
                        question={q}
                        response={responseArray[q.itemId - 1]}
                        onChange={handleRadioOnChange}
                      />
                    </div>
                  ))}
                </div>
              </div>
            }
          </div>
          <div className="z-10 sticky bottom-0 flex backdrop-blur-[2px] px-[2rem]">
            {sectionNum != 0 && (
              <div className="mr-auto">
                <Button text={"previous"} handleClick={handlePreviousClick} />
              </div>
            )}
            <div className="ml-auto">
              <Button
                text={
                  sectionNum != formData.sections.length - 1 ? "next" : "submit"
                }
                handleClick={handleNextClick}
                isLocked={!toggleNext}
              />
            </div>
          </div>
        </>
      )}
    </main>
  );
}
