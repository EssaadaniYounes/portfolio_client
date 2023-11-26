import React from "react";
import { EditProfileCard } from "@/components";
import { cookies } from "next/headers";

import { User } from "@/services";
import { VscSaveAs } from "react-icons/vsc";
import { CookieNames } from "@/utils/CookieNamesEnum";
import { revalidatePath } from "next/cache";
async function page() {
  const data = (await User.getAuthenticatedUser(
    cookies().get(CookieNames.TOKEN)?.value
  )) as AuthenticatedUser;
  const revalidateHandler = async () => {
    "use server";
    revalidatePath("/me");
  };
  return (
    <div className="mt-4 mx-4 p-2">
      <EditProfileCard user={data} revalidateHandler={revalidateHandler} />
    </div>
  );
}

export default page;
