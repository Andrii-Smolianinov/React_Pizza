import React from "react";
import { HashLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
    <HashLoader color="#36d7b7" size={50} className="block mx-auto mt-40" />
  );
};

export default Loader;
