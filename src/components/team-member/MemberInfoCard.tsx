import { IMemberData } from "@/data/types";
import Image from "next/image";
import React, { PropsWithChildren } from "react";

interface MemberInforCardType {
  member: IMemberData;
}

const MemberInfoCard = ({
  member,
  children,
}: PropsWithChildren<MemberInforCardType>) => {
  return (
    <div className="flex flex-col lg:flex-row h-[150px] lg:h-[100px] items-center align-middle border-gray-400 border-2 rounded-lg">
      <div className="relative min-w-[80px] h-[80px] md:min-w-[100px] md:h-[100px] m-2">
        {member.imgSrc && (
          <Image src={member.imgSrc} alt={"member icon"} fill sizes={"100vw"} />
        )}
      </div>
      {children}
    </div>
  );
};

export default MemberInfoCard;
