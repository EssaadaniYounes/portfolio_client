import { getAll, post } from "@/lib/Fetch";

import Cookie from "./Cookie";
import { ResponseStatus } from "@/utils/ResponseStatus";
import { AuthenticatedUser, RegisterCredentials } from "../../types";

const getAuthenticatedUser = async (token?: string) => {
  let res = await getAll("auth/user", {
    Authorization: token ?? "",
  });

  return res.data;
};

const login = async (
  values: LoginCredentials,
  setSubmitting: any,
  setError: any
) => {
  const res = await post("auth/login", values);

  setSubmitting(true);
  if (!(res.status == ResponseStatus.SUCCESS)) {
    setSubmitting(false);
    return setError("Error while trying to log in!");
  }
  await Cookie.setCookie("token", `Bearer ${res.data.token}`, 1);
  return res;
};

const logout = async () => {
  await Cookie.removeCookie("token");
};

const register = async (payload: RegisterCredentials) => {
  const res = await post("auth/register", payload);
  return res;
};

const getProfileData = async (token: string) => {
  let res = await getAll("user/data", {
    Authorization: token,
  });
  return res.data;
};

const updateProfile = async (payload: AuthenticatedUser, token: string) => {
  const res = await post("user/edit-profile", payload, {
    Authorization: token ?? "",
  });
  return res;
};

export {
  getAuthenticatedUser,
  login,
  logout,
  register,
  getProfileData,
  updateProfile,
};
