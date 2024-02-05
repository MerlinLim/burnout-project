'use client'
import React from "react";
import SectionHeader from "./SectionHeader";
import { MdOutlineEventNote } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { sessionSummaryData } from "@/data/questionnaire";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

interface ProgressButtonType {
  done: boolean;
}

const ProgressButton = ({ done }: ProgressButtonType) => {
    const router = useRouter()
    if(done){
        return <Button variant="contained" style={{backgroundColor: "#ffffff1f", color: "#ffffff4d"}} disabled>
          Done
        </Button>
     } else {
        return <Button variant="contained" style={{backgroundColor: "#ff6624", color: "black"}} onClick={() => router.push(`form/start`)}>
          Start
        </Button>
      }
}

const Sessions = () => {
  const headerNames = ["Title", "Date", "Progress", "Score"];

  return (
    <div className="mt-10 text-[12px] md:text-base">
      <SectionHeader title="Sessions" Icon={MdOutlineEventNote} />
      <div>
        <div className="grid grid-cols-4 items-center align-middle text-center border-b-2 border-gray-500 py-5">
          {headerNames.map((header, i) => {
            return <div key = {i}>{header}</div>;
          })}
        </div>
        {sessionSummaryData.map((session, i) => {
          return (
            <div key = {i} className="grid grid-cols-4 items-center align-middle text-center border-b-2 border-gray-500 py-2">
              <div>{session.title}</div>
              <div>{session.date}</div>
              <div className="m-auto">
                <ProgressButton done={session.done} />
              </div>
              <div className="m-auto">
                {session.score == 1 ? (
                  <BsCircleFill color={"green"} />
                ) : session.score == 2 ? (
                  <BsCircleFill color={"yellow"} />
                ) : session.score == 3 ? (
                  <BsCircleFill color={"red"} />
                ) : (
                  <BsCircleFill color={"grey"} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sessions;
