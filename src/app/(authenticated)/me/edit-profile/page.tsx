import React from "react";
import { EditProfileCard } from "@/components";
import { cookies } from "next/headers";

import { getAuthenticatedUser } from "@/services/UserService";
import { CookieNames } from "@/utils/CookieNamesEnum";
import { revalidatePath } from "next/cache";
async function page() {
  const data = (await getAuthenticatedUser(
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
