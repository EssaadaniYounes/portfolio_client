"use client";
import { Cookie, User } from "@/services";
import { CookieNames } from "@/utils/CookieNamesEnum";
import React, { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { VscSaveAs } from "react-icons/vsc";
import FileUpload from "../form/FileUpload";
import Image from "next/image";
import CircleLoader from "../loaders/CircleLoader";
import useRedirect from "@/hooks/useRedirect";
import SpinnerLoader from "../loaders/SpinnerLoader";
import { AuthenticatedUser } from "../../../../types";
function EditProfileCard({
  user,
  revalidateHandler,
}: {
  user: AuthenticatedUser;
}) {
  const redirect = useRedirect();
  const [payload, setPayload] = useState<AuthenticatedUser>(user);
  const [skill, setSkill] = useState<string>("");
  const [submiting, setSubmiting] = useState<boolean>(false);
  const [profileUploading, setProfileUploading] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPayload({ ...payload, [name]: value });
  };

  const addSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      const skills = payload.skills ?? [];
      skills.push(skill);
      setPayload({ ...payload, ["skills"]: skills });
      setSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    const skills = payload.skills?.filter((s) => s != skill);
    setPayload({ ...payload, ["skills"]: skills });
  };

  const updateProfile = async () => {
    setSubmiting(true);
    await User.updateProfile(
      payload,
      Cookie.getClientCookie(CookieNames.TOKEN) ?? ""
    );
    setSubmiting(false);
    revalidateHandler();
    redirect("/me");
  };
  const updateProfileURL = async (url: string) => {
    setPayload({
      ...payload,
      profileUrl: url,
    });
    setProfileUploading(false);
  };

  return (
    <>
      {submiting && <SpinnerLoader />}

      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold  text-gray-700 capitalize">
          Edit user data
        </h3>
        <button
          onClick={updateProfile}
          className="btn btn-sm bg-orange-300 text-gray-700"
        >
          <span>Save</span>
          <VscSaveAs size={20} />
        </button>
      </div>
      <div className="space-y-2">
        <div className="shadow-md rounded-md p-4 shadow-gray-200 bg-gray-50">
          <h1 className="text-sm font-bold text-gray-700 mb-2 flex items-center space-x-2">
            <BiSolidUser size={19} />
            <span className="mt-1">Personal information</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-3 sm:space-y-0 sm:gap-y-2 sm:gap-x-3 ">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium">First name :</label>
              <input
                type="text"
                value={payload.firstName}
                name="firstName"
                onChange={handleChange}
                className="border rounded-md p-1.5 focus:outline-none"
              />
            </div>
            <div className="flex flex-col  space-y-1">
              <label className="text-sm font-medium">Last name :</label>
              <input
                type="text"
                value={payload.lastName}
                name="lastName"
                onChange={handleChange}
                className="border rounded-md p-1.5 focus:outline-none"
              />
            </div>

            <div className="flex flex-col  space-y-1">
              <label className="text-sm font-medium">Email :</label>
              <input
                type="text"
                value={payload.email}
                name="email"
                onChange={handleChange}
                className="border rounded-md p-1.5 focus:outline-none"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium">City :</label>
              <input
                type="text"
                value={payload.city}
                name="city"
                onChange={handleChange}
                className="border rounded-md p-1.5 focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-1  col-span-1 sm:col-span-2">
              <label className="text-sm font-medium">Adress :</label>
              <input
                type="text"
                value={payload.address}
                name="address"
                onChange={handleChange}
                className="border rounded-md p-1.5 focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium">Phone :</label>
              <input
                type="text"
                value={payload.phone}
                name="phone"
                onChange={handleChange}
                className="border rounded-md p-1.5 focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-1 col-span-1 sm:col-span-2 ">
              <label className="text-sm font-medium">Bio :</label>
              <textarea
                rows={1}
                name="bio"
                onChange={handleChange}
                value={payload.bio}
                className="border rounded-md p-1.5 focus:outline-none"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-2 md:space-y-0 md:space-x-3 ">
          <div className="shadow-md rounded-md p-4 shadow-gray-200 bg-gray-50">
            <h1 className="text-sm font-bold text-gray-700 mb-2 flex items-center space-x-2">
              <BiSolidUser size={19} />
              <span className="mt-1">Profile</span>
            </h1>
            <div className="flex flex-wrap items-center gap-3 justify-center ">
              <div className=" w-[48%] md:w-[70%]">
                <FileUpload
                  callBack={updateProfileURL}
                  setUploading={setProfileUploading}
                />
              </div>
              <div className=" w-[48%] md:w-[70%] flex items-center justify-center">
                <div className="avatar ">
                  <div className="rounded-2xl overflow-hidden">
                    {profileUploading ? (
                      <CircleLoader />
                    ) : (
                      <Image
                        src={payload.profileUrl ?? "/images/blank-profile.png"}
                        alt="Profile"
                        width={125}
                        height={125}
                        priority
                        className=" shadow-md"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/*
               */}
            </div>
          </div>
          <div className="shadow-md rounded-md p-4 shadow-gray-200 bg-gray-50">
            <h1 className="text-sm font-bold text-gray-700 mb-2 flex items-center space-x-2">
              <BiSolidUser size={19} />
              <span className="mt-1">Skills</span>
            </h1>
            <div className="grid grid-cols-1 ">
              <div className="flex flex-col  space-y-1">
                <div className="flex flex-col  space-y-1">
                  <label className="text-sm font-medium">Skill :</label>
                  <input
                    type="text"
                    name="email"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    onKeyDown={(e) => addSkill(e)}
                    className="border rounded-md p-1.5 focus:outline-none"
                  />
                </div>
                <div>
                  <h4 className="my-2 text-sm font-semibold">
                    Your skills :
                    {payload.skills?.length > 0 && (
                      <span className="text-xs font-medium">
                        (double click to remove skill)
                      </span>
                    )}
                  </h4>
                  <div className="flex flex-wrap gap-2 items-center justify-start">
                    {payload.skills?.map((s) => {
                      return (
                        <span
                          onDoubleClick={() => removeSkill(s)}
                          className="bg-green-200 cursor-pointer rounded-md px-2 py-[3px] text-sm font-medium"
                          key={s}
                        >
                          {s}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfileCard;
