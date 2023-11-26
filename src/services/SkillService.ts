import Fetch from "@/lib/fetch";

import Cookie from "./Cookie";
import { ResponseStatus } from "@/utils/ResponseStatus";
import { CookieNames } from "@/utils/CookieNamesEnum";

export default class SkillService {
  static async getAuthSkills(token: string) {
    const res = await Fetch.getInstance().getAll("skills/auth", {
      Authorization: token,
    });
    return res?.data;
  }
}
