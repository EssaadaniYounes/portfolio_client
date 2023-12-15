export const revalidate = 1;
import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { AiFillEye } from "react-icons/ai";
import { getAuthSkills } from "@/services/SkillService";
import { cookies } from "next/headers";
import { CookieNames } from "@/utils/CookieNamesEnum";
import { Skill } from "../../../../types";

async function UserSkills() {
  const { data: skills } = (await getAuthSkills(
    cookies().get(CookieNames.TOKEN)?.value || ""
  )) as { data: Skill[] };
  return (
    <div className="rounded-md shadow-sm shadow-gray-300">
      <div className="flex items-center justify-between px-4">
        <h2 className="text-lg font-semibold py-3">Skills</h2>
        <button
          className="bg-gray-400 shadow-sm px-3 py-1.5 rounded-md flex items-center space-x-2 font-medium 
        duration-150 hover:bg-gray-300 hover:text-gray-700
        "
        >
          <span title="View projects">View</span>
          <AiFillEye size={22} />
        </button>
      </div>
      <span className="block w-full h-[1px] bg-gray-300"></span>
      <div className="flex flex-wrap  items-center justify-around m-2 gap-4 py-2">
        {skills.map((s) => (
          <div key={s.id} className="flex items-center space-x-1.5">
            <FcCheckmark />
            <span className="text-sm font-medium uppercase">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserSkills;
