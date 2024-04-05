import React from "react";

const ImageTextCard = ({ title, icon, children, userName, imageStyles }) => {
  return (
    <div
      className={`group hover:bg-secondaryDark rounded-xl p-10 text-center flex flex-col items-center justify-center gap-3 border border-black hover:border-none hover:text-white hover:scale-125 transform duration-300 hover:z-50`}
    >
      {icon}
      {title && <h2 className="text-xl font-semibold">{title}</h2>}
      <p className="">{children}</p>
      {userName && <h3 className="font-semibold text-lg">{userName}</h3>}
    </div>
  );
};

export default ImageTextCard;
