import AddProject from "@/components/partials/cards/AddProject";
import ToggleShowAddProjectBtn from "@/components/partials/form/ToggleShowAddProjectBtn";
import Skeleton from "@/components/partials/loaders/Skeleton";
import ProjectsList from "@/components/ui/project/ProjectsList";
import { revalidatePath } from "next/cache";
import React, { Suspense } from "react";

function page() {
  const revalidateHandler = async () => {
    "use server";
    revalidatePath("/me");
  };
  return (
    <div className="p-3 ">
      <div className="flex items-center justify-between px-4 shadow-sm shadow-gray-200 rounded-md">
        <h2 className="text-lg font-semibold py-3 text-gray-500">Projects</h2>

        <ToggleShowAddProjectBtn />
      </div>{" "}
      <Suspense fallback={<Skeleton />}>
        <ProjectsList />
      </Suspense>
      <AddProject revalidateHandler={revalidateHandler} />
    </div>
  );
}

export default page;
