export const revalidate = 1;
import Image from "next/image";
import React from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { Gloria_Hallelujah } from "next/font/google";
import Link from "next/link";
import { getProfileData } from "@/services/UserService";
import { cookies } from "next/headers";
import { CookieNames } from "@/utils/CookieNamesEnum";
import { UserData } from "../../../../types";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaTreeCity, FaMapLocationDot } from "react-icons/fa6";

const caveat = Gloria_Hallelujah({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
async function UserDetails() {
  const { data } = (await getProfileData(
    cookies().get(CookieNames.TOKEN)?.value ?? ""
  )) as { data: UserData };
  return (
    <section className="flex-1 bg-gray-100 m-3 rounded-md shadow-gray-300 overflow-hidden shadow-sm">
      <div className="mx-auto w-fit mt-4">
        <Image
          src={data.profileUrl || ""}
          width={300}
          height={300}
          alt="Profile"
          priority
          className="rounded-md shadow-sm"
        />
      </div>
      <div className="mt-2 items-center text-center">
        <p className="text-center font-semibold text-lg text-gray-700">
          {data.firstName + " " + data.lastName}
        </p>
        <span className="block text-center font-semibold text-xs text-gray-500">
          {data.email}
        </span>
      </div>
      <div className="divider w-[80%] mx-auto" />

      <div className="mt-2 ml-6">
        {data.phone && (
          <p className="text-left flex items-center space-x-2  text-sm text-gray-700">
            <MdOutlineSmartphone />
            <span>{data.phone}</span>
          </p>
        )}
        {data.city && (
          <p className="text-left flex items-center space-x-2  text-sm text-gray-700">
            <FaTreeCity />
            <span>{data.city}</span>
          </p>
        )}
        {data.address && (
          <p className="text-left flex items-center space-x-2  text-sm text-gray-700">
            <FaMapLocationDot />
            <span>{data.address.slice(0, 30)}..</span>
          </p>
        )}
      </div>
      <div className="divider w-[80%] mx-auto" />
      <div className="ml-6">
        <p
          className={
            caveat.className +
            " text-sm font-medium text-justify m-1.5 text-gray-700"
          }
        >
          <q>{data.bio}</q>
        </p>
      </div>
      <Link
        href={"/me/edit-profile"}
        className="btn btn-wide flex items-center mx-auto m-2  bg-gray-400 hover:bg-gray-300"
      >
        <span>Edit</span>
        <AiTwotoneEdit size={22} />
      </Link>
    </section>
  );
}

export default UserDetails;
