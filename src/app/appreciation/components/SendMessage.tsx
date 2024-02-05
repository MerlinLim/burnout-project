import React, { useState } from "react";
import styled from "styled-components";
import { IMemberData } from "@/data/types";
import Link from "next/link";
import Modal from "@mui/material/Modal";
import Confirmation from "./Confirmation";
import MemberInfoCard from "@/components/team-member/MemberInfoCard";

interface myProps {
  memberData: IMemberData;
  handleComplete: (s: string) => void;
}

const SendMessage = ({ memberData: member, handleComplete }: myProps) => {
  const [input, setInput] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = () => {
    // Check if input is filled in
    if (!input) {
      return;
    }
    setOpenModal(true);
  };

  return (
    <div className="md:w-3/4 mx-auto">
      <h1 className="text-[16px] md:text-[2rem] text-center">
        Leave a comment for your teammate! ✌
      </h1>
      <div className="flex flex-col md:flex-row items-center p-5">
        <div className="w-[250px]">
          <MemberInfoCard member={member}>
            <div className="flex flex-col items-center mx-auto">
              <div>
                <div className="text-[16px] text-nowrap">{member.name}</div>
                <div className="hidden lg:block text-[13px]">
                  {member.description}
                </div>
              </div>
            </div>
          </MemberInfoCard>
        </div>

        <div className="md:px-10 md:py-5">
          Take a few moments to provide feedback to{" "}
          <span style={{ color: "#FF6624", fontWeight: "bold" }}>
            {member.name}
          </span>
          {" "}on areas such as communication, teamwork, and job performance —
          try to be constructive in your comments, focusing on specific
          behaviors or actions rather than personal opinions!
        </div>
      </div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)}
      className = "min-w-full h-[18rem] bg-[#112161] border-[1px] border-[#57a9ff] p-5"/>
      
      <div className = "flex justify-between"
      >
        <Link href={"/"} passHref>
          <BackButton>Back</BackButton>
        </Link>
        <Button onClick={onSubmit}>Submit</Button>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Confirmation
          memberData={member}
          handleCancel={() => setOpenModal(false)}
          handleOk={() => handleComplete(input)}
        />
      </Modal>
    </div>
  );
};

const BackButton = styled.button`
  background: #57a9ff;
  border: 1px solid #57a9ff;
  width: 150px;
  height: 50px;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #112161;
    box-shadow: 1px 1px;
  }

`;

const Button = styled.button`
  background-color: #ff6624;
  width: 150px;
  height: 50px;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  z-index: 100; // For particles

  &:hover {
    background-color: #cd3e00;
    box-shadow: 1px 1px;
  }
`;
export default SendMessage;
