"use client";
import React, { useState } from "react";
import FileUpload from "../form/FileUpload";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineDateRange } from "react-icons/md";
import useSharedVariablesStore from "@/store/SharedVariables";
import ToggleShowAddProjectBtn from "../form/ToggleShowAddProjectBtn";
import { Project } from "../../../../types";
import { handleChange } from "@/utils/FormActions";
import CircleLoader from "../loaders/CircleLoader";
import SpinnerLoader from "../loaders/SpinnerLoader";
import { addProject } from "@/services/ProjectService";
import { Cookie } from "@/services";
import { CookieNames } from "@/utils/CookieNamesEnum";
function AddProject({
  project,
  revalidateHandler,
}: {
  project?: Project;
  revalidateHandler: () => {};
}) {
  const { showAddProject, toggleshowAddProject } = useSharedVariablesStore();
  const [payload, setPayload] = useState<Project>(project);
  const [imageSubmitting, setImageSubmitting] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const updateThumb = async (url: string) => {
    console.log(url);
    setPayload({
      ...payload,
      imageUrl: url,
    });
    setImageSubmitting(false);
  };
  const submit = async () => {
    setSubmitting(true);
    const res = await addProject(
      payload,
      Cookie.getClientCookie(CookieNames.TOKEN) || ""
    );
    setSubmitting(false);
    setPayload();
    revalidateHandler();
  };
  return (
    showAddProject && (
      <div className="absolute w-full inset-0 flex items-center justify-center overflow-y-auto bg-black bg-opacity-30">
        {submitting && <SpinnerLoader />}
        <div className=" py-3 flex flex-col justify-center sm:py-6">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-6 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className="max-w-md mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="w-full pl-2 font-semibold text-xl self-start text-gray-700 flex items-center justify-between">
                    <h2 className="leading-relaxed">New Project</h2>
                    <ToggleShowAddProjectBtn />
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <label className="text-sm mb-1">Title </label>
                      <input
                        type="text"
                        name="title"
                        value={payload?.title || ""}
                        onChange={(e) =>
                          handleChange<Project>(e, payload, setPayload)
                        }
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Title.."
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm mb-1">Description </label>
                      <input
                        type="text"
                        name="description"
                        value={payload?.description || ""}
                        onChange={(e) =>
                          handleChange<Project>(e, payload, setPayload)
                        }
                        multiple
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Description"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm mb-1">Thumbnail </label>
                      <FileUpload
                        callBack={updateThumb}
                        setUploading={setImageSubmitting}
                      />
                      {imageSubmitting && <CircleLoader />}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col">
                        <label className="text-sm mb-1">Start</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            name="startedAt"
                            value={payload?.startedAt || ""}
                            onChange={(e) =>
                              handleChange<Project>(e, payload, setPayload)
                            }
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="2023-11-02"
                          />
                          <div className="absolute left-3 top-2">
                            <MdOutlineDateRange />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm mb-1">End</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            name="endedAt"
                            value={payload?.endedAt || ""}
                            onChange={(e) =>
                              handleChange<Project>(e, payload, setPayload)
                            }
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="26/02/2020"
                          />
                          <div className="absolute left-3 top-2">
                            <MdOutlineDateRange />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center space-x-4">
                    <button
                      onClick={() => toggleshowAddProject(false)}
                      className="flex justify-center items-center w-full text-gray-900 px-4 py-3 gap-3 duration-150 hover:bg-green-300 rounded-md focus:outline-none"
                    >
                      <ImCancelCircle /> <span>Cancel</span>
                    </button>
                    <button
                      onClick={submit}
                      className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-600 duration-100"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default AddProject;
