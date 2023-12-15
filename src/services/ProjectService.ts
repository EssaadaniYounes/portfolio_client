import { _delete, getAll, post } from "@/lib/Fetch";
import { Project } from "../../types";

const getAuthProjects = async (token: string) => {
  const res = await getAll("projects/auth", {
    Authorization: token,
  });
  return res?.data;
};
const addProject = async (payload: Project, token: string) => {
  const res = await post("projects", payload, {
    Authorization: token,
  });
  return res?.data;
};
const deleteProject = async (id: string, token: string) => {
  const res = await _delete(`projects/${id}`, {
    Authorization: token,
  });
  return res?.data;
};
export { getAuthProjects, addProject, deleteProject };
