"use client";
import { Cookie } from "@/services";
import { deleteProject } from "@/services/ProjectService";
import { CookieNames } from "@/utils/CookieNamesEnum";
import React from "react";
import { MdDelete } from "react-icons/md";

function DeleteProjectBtn({ id }: { id: string }) {
  return (
    <button
      onClick={async () =>
        await deleteProject(id, Cookie.getClientCookie(CookieNames.TOKEN) || "")
      }
      title="Delete"
      className="flex uppercase items-center btn btn-xs sm:btn-sm btn-error text-white"
    >
      <MdDelete />
      <span className="hidden sm:block">DELETE</span>
    </button>
  );
}

export default DeleteProjectBtn;
