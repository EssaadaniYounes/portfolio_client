import Fetch from "@/lib/fetch";

import Cookie from "./Cookie";
import { ResponseStatus } from "@/utils/ResponseStatus";
import { CookieNames } from "@/utils/CookieNamesEnum";

export default class User {
  static async getAuthenticatedUser(token?: string) {
    let res = await Fetch.getInstance().getAll("auth/user", {
      Authorization: token ?? "",
    });

    return res.data;
  }

  static async login(
    values: LoginCredentials,
    setSubmitting: any,
    setError: any
  ) {
    const res = await Fetch.getInstance().post("auth/login", values);

    setSubmitting(true);
    if (!(res.status == ResponseStatus.SUCCESS)) {
      setSubmitting(false);
      return setError("Error while trying to log in!");
    }
    await Cookie.setCookie("token", `Bearer ${res.data.token}`, 1);
    return res;
  }

  static async Logout() {
    await Cookie.removeCookie("token");
  }

  static async register(payload: RegisterCredentials) {
    const res = await Fetch.getInstance().post("auth/register", payload);
    return res;
  }

  static async getProfileData(token: string) {
    let res = await Fetch.getInstance().getAll("user/data", {
      Authorization: token,
    });
    return res.data;
  }

  static async updateProfile(payload: AuthenticatedUser, token: string) {
    const res = await Fetch.getInstance().post("user/edit-profile", payload, {
      Authorization: token ?? "",
    });

    console.log(res);
  }
}
