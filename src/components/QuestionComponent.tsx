import { Radio, RadioGroup } from "@mui/material";
import React from "react";
import { IQuestion } from "@/data/types";

interface RadioComponentType {
  question: IQuestion;
  response: number;
  onChange: (question: number, answer: number) => void;
}

const QuestionComponent = ({
  question,
  response,
  onChange,
}: RadioComponentType) => {
  const options = ["0", "1", "2", "3", "4", "5", "6"];

  return (
    <div className ="mx-auto max-w-[700px] px-[1rem] ">
      <div>
        {question.itemId}
        {". "}
        {question.questionText}
      </div>
      <RadioGroup
        row={true}
        className="grid grid-cols-4 md:grid-cols-7 md:grid-rows-1 pt-[1rem] "
        value={response}
        onChange={(e) => onChange(question.itemId, +e.currentTarget.value)}
      >
        {options.map((o) => {
          return (
            <div key={o} className="flex flex-col align-middle ">
              <Radio key={o} value={o} style={{ color: "#FFFFFF" }} />
              <div className="text-center">{o}</div>
            </div>
          );
        })}
      </RadioGroup>
      <div className="flex justify-between mt-2">
        <div>Never</div>
        <div>Everyday</div>
      </div>
    </div>
  );
};

export default QuestionComponent;
