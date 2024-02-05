import Initiatives from "@/components/Initiatives";
import Sessions from "@/components/Sessions";
import TeamMembers from "@/components/team-member/TeamMembers";

export default function Home() {
  return (
    <div>
      <TeamMembers/>
      <Sessions/>
      <Initiatives />
    </div>
  );
}
