"use client";
import { Cookie } from "@/services";
import { upload } from "@/services/FileService";
import { CookieNames } from "@/utils/CookieNamesEnum";
import React, { RefObject, useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

function FileUpload({
  callBack,
  setUploading,
}: {
  callBack: (url: string) => {};
  setUploading: (value: boolean) => {};
}) {
  const fileInputRef = useRef(null);
  const uploadFile = async () => {
    setUploading(true);
    const chosedFile = fileInputRef.current.files[0];
    console.log(chosedFile);
    const { data } = await upload(
      chosedFile,
      Cookie.getClientCookie(CookieNames.TOKEN) ?? ""
    );
    await callBack(data);
  };
  return (
    <label
      htmlFor="uploadFile1"
      className="bg-white text-black text-base rounded w-full h-32 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed font-[sans-serif]"
    >
      <IoCloudUploadOutline size={25} />
      Upload file
      <input
        ref={fileInputRef}
        type="file"
        id="uploadFile1"
        className="hidden"
        onChange={uploadFile}
      />
      <p className="text-xs text-gray-400 mt-2">PNG, JPG are Allowed.</p>
    </label>
  );
}

export default FileUpload;
