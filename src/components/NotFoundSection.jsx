import React from "react";
import notFoundIMG from "../assets/img/not-found.png"

export default function NotFoundSection() {
  return (
    <div className="block bg-yellow-100 p-5 h-[84vh]">
      <h1 className="text-center leading-10 mb-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-red-600">
        Page not found
      </h1>
      <img
        src={notFoundIMG}
        alt="Page not found"
        className="my-0 mx-auto 
        w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4
        h-1/3 sm:h-1/2 lg:h-1/2 xl:h-1/2"
      />
    </div>
  );
}
