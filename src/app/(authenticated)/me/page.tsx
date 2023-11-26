export const revalidate = 1;
import React, { Suspense } from "react";
import { Gloria_Hallelujah } from "next/font/google";
import { UserDetails, UserProjects, UserSkills } from "@/components";
const caveat = Gloria_Hallelujah({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

function page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <section className="col-span-1 ">
        <Suspense fallback={<p>Rendering</p>}>
          <UserDetails />
        </Suspense>
      </section>
      <section className="col-span-1 m-3 space-y-2">
        <UserSkills />
        <UserProjects />
      </section>
    </div>
  );
}

export default page;
