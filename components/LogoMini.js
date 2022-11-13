import React from "react";

const LogoMini = () => {
  return (
    <div className="flex justify-start  lg:flex-1">
      <a href="#">
        <span className="sr-only">City Church Choucester</span>
        <div className="bg-myblue rounded-tl-3xl rounded-br-3xl border-2 border-white text-white text-xl font-sans px-4 py-2 hover:opacity-50">
          CCC
        </div>
      </a>
    </div>
  );
};

export default LogoMini;
