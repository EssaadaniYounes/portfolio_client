import Image from "next/image";
import React from "react";

function AuthCardContainer({
  title,
  children,
}: {
  title: string;
  children: any;
}) {
  return (
    <div className="card md:card-side bg-white max-h-fit w-1/2 md:w-[90%]  s:w-2/3 shadow-xl md:space-x-6 space-x-0">
      <figure className="bg-blue-200  md:shadow-md">
        <Image
          src="/images/login.png"
          className="hidden md:block"
          alt="Album"
          width={600}
          height={1000}
        />
      </figure>
      <div className="card-body p-3 md:pl-0 mx-auto max-w-md md:max-w-full md:space-y-2">
        <h2 className="mx-auto text-3xl font-bold text-gray-700 ">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default AuthCardContainer;
