"use client";
import useSharedVariablesStore from "@/store/SharedVariables";
import React from "react";
import { IoIosAddCircle, IoIosCloseCircleOutline } from "react-icons/io";

function ToggleShowAddProjectBtn() {
  const { showAddProject, toggleshowAddProject } = useSharedVariablesStore();
  return (
    <div className=" " onClick={() => toggleshowAddProject(!showAddProject)}>
      {showAddProject ? (
        <div
          title="Close"
          className="flex items-center space-x-2  btn btn-sm  bg-green-300"
        >
          <IoIosCloseCircleOutline size={20} />
          <span className="hidden sm:block">Close</span>
        </div>
      ) : (
        <div
          title="Add"
          className="flex items-center space-x-2 btn btn-sm text-white btn-info"
        >
          <IoIosAddCircle size={20} />
          <span className="hidden sm:block">Add</span>
        </div>
      )}
    </div>
  );
}

export default ToggleShowAddProjectBtn;
