import React from "react";
import { useTranslation } from "react-i18next";

const ErrorServer = () => {
  const { t } = useTranslation();

  return (
    <div className="p-5 h-[65vh]">
      <h1 className="text-center leading-10 mb-5 text-3xl font-bold text-lime-700">
        {t("databaseError")}
      </h1>

      <div
        className="mx-auto bg-[url('/src/assets/img/error-server.jpg')] bg-cover bg-center
        w-11/12 lg:w-2/4 xl:w-2/5
        h-[90%]"
      ></div>
    </div>
  );
};

export default ErrorServer;
