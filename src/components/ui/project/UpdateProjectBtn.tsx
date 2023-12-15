"use client";
import React from "react";
import { Project } from "../../../../types";
import { RiEdit2Fill } from "react-icons/ri";

function UpdateProjectBtn({ id, project }: { id: string; project: Project }) {
  return (
    <button
      title="Edit"
      className="flex uppercase items-center btn btn-xs sm:btn-sm btn-warning text-white"
    >
      <RiEdit2Fill />
      <span className="hidden sm:block">EDIT</span>
    </button>
  );
}

export default UpdateProjectBtn;
