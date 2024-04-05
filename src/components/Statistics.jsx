import React from "react";

const Statistics = () => {
  return (
    <div className="bg-secondaryDark py-5">
      <div className="max-w-[1200px] mx-auto flex justify-between">
        <div className="text-white">
          <p className="text-base">Users</p>
          <p className="text-4xl font-semibold ">40+</p>
        </div>
        <div className="text-white">
          <p className="text-base">Posts</p>
          <p className="text-4xl font-semibold ">122+</p>
        </div>
        <div className="text-white">
          <p className="text-base">Feedbacks</p>
          <p className="text-4xl font-semibold ">82+</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
