import { post } from "@/lib/Fetch";

const upload = async (file: File, token: string) => {
  const form = new FormData();
  form.append("file", file);
  const res = await post("file/upload", form, {
    Authorization: token,
  });
  return res.data;
};
export { upload };
