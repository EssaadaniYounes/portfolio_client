import { getAll } from "@/lib/Fetch";

const getAuthSkills = async (token: string) => {
  const res = await getAll("skills/auth", {
    Authorization: token,
  });
  return res?.data;
};

export { getAuthSkills };
