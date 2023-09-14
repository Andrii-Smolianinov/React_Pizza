import React from "react";

export default function NotFoundSection() {
  return (
    <div className="block bg-yellow-100 p-5 h-[84vh]">
      <h1 className="text-center leading-10 mb-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-red-600">Page not found</h1>
      <img src="images/not-found.jpg" alt="not found" className="w-1/3 h-4/6 my-0 mx-auto" />
    </div>
  );
}
