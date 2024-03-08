import React from "react";
import { useTranslation } from "react-i18next";

import serverErrorIMG from "../assets/img/error-server.jpg";

const ErrorServer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-5 h-[65vh]">
      <h1 className="text-center leading-10 mb-5 text-3xl font-bold text-lime-700">
        {t("databaseError")}
      </h1>

      <img
        src={serverErrorIMG}
        alt="No database connection"
        className="my-0 mx-auto 
        h-[70%] sm:h-[90%]
        w-11/12 lg:w-2/4 xl:w-2/5"
      />
    </div>
  );
};

export default ErrorServer;
