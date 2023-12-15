import { getAuthProjects } from "@/services/ProjectService";
import { CookieNames } from "@/utils/CookieNamesEnum";
import { cookies } from "next/headers";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import { Project } from "../../../../types";
import UpdateProjectBtn from "./UpdateProjectBtn";
import DeleteProjectBtn from "./DeleteProjectBtn";
async function ProjectsList() {
  const { data: projects } = (await getAuthProjects(
    cookies().get(CookieNames.TOKEN)?.value || ""
  )) as { data: Project[] };
  return (
    <div className="rounded-md shadow-sm shadow-gray-300 p-2">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, idx) => (
              <tr key={p.id}>
                <td>{++idx}</td>
                <td>{p.title}</td>
                <td>{p.description?.slice(0, 50)}</td>
                <td className="flex items-center space-x-2">
                  <UpdateProjectBtn id={p.id} project={p} />
                  <DeleteProjectBtn id={p.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectsList;
