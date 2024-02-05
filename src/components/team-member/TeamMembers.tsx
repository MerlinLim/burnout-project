import React from "react";
import { MdGroups, MdModeEdit } from "react-icons/md";
import Link from "next/link";
import { memberData } from "@/data/member-data";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import MemberInfoCard from "./MemberInfoCard";

const TeamMembers = () => {
  return (
    <div className="mt-10">
      <SectionHeader title="Team Members" Icon={MdGroups} />
      <div className="mt-2 grid grid-cols-2 gap-1 sm:grid-cols-4 sm:gap-4">
        {memberData.map((member) => {
          return (
            <div key={member.id}>
              <MemberInfoCard member={member}>
                <div className="flex flex-col items-center mx-auto">
                  <div>
                    <div className="text-[16px] text-nowrap">{member.name}</div>
                    <div className="hidden lg:block text-[13px]">
                      {member.description}
                    </div>
                  </div>
                  <Link href={"/appreciation/" + member.id} passHref>
                    <div className="w-fit border-2 p-1 border-blue-500 rounded-xl justify-center">
                      <MdModeEdit size={"1rem"} color={"white"} />
                    </div>
                  </Link>
                </div>
              </MemberInfoCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamMembers;
