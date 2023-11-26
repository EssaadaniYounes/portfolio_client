import Fetch from "@/lib/fetch";

export default class FileService {
  static async upload(file: File, token: string) {
    const form = new FormData();
    form.append("file", file);
    const res = await Fetch.getInstance().post("file/upload", form, {
      Authorization: token,
    });
    return res.data;
  }
}
