import React from "react";
import { useTranslation } from "react-i18next";

import serverErrorIMG from "../assets/img/error-server.jpg"

const ErrorServer = () => {
  const { t } = useTranslation();

  return (
    <div className="block bg-yellow-100 p-5 h-[84vh]">
      <h1 className="text-center leading-10 mb-5 text-3xl font-bold text-lime-700">
        {t("databaseError")}
      </h1>
      <img
        src={serverErrorIMG}
        alt="No database connection"
        className="my-0 mx-auto 
        w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4
        h-1/3 sm:h-1/2 lg:h-1/2 xl:h-1/2"
      />
    </div>
  );
};

export default ErrorServer;
