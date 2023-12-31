import { getAuthProjects } from "@/services/ProjectService";
import { CookieNames } from "@/utils/CookieNamesEnum";
import { cookies } from "next/headers";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import { Project } from "../../../../types";
import Link from "next/link";
async function UserProjects() {
  const { data: projects } = (await getAuthProjects(
    cookies().get(CookieNames.TOKEN)?.value || ""
  )) as { data: Project[] };
  return (
    <div className="rounded-md shadow-sm shadow-gray-300 p-2">
      <div className="flex items-center justify-between px-4">
        <h2 className="text-lg font-semibold py-3">Projects</h2>
        <Link
          href={"/projects"}
          className="bg-gray-400 shadow-sm px-3 py-1.5 rounded-md flex items-center space-x-2 font-medium 
        duration-150 hover:bg-gray-300 hover:text-gray-700
        "
        >
          <span title="View projects">View</span>
          <AiFillEye size={22} />
        </Link>
      </div>{" "}
      <span className="block w-full h-[1px] bg-gray-300"></span>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, idx) => (
              <tr key={p.id}>
                <td>{++idx}</td>
                <td>{p.title}</td>
                <td>{p.description?.slice(0, 25)}..</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserProjects;
