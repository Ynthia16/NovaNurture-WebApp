import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { editUser } from "../../../fetch";
import { auth } from "../../../FirebaseConfig";

const EditUser = () => {
  const [id, setId] = useState("");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setId(user.id);
    setEmail(user.email);
    setName(user.name);
  }, []);

  return (
    <div>
      <p className="text-center py-10 text-lg font-bold">Edit profile</p>

      <div>
        <form
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
          className="w-[70%] max-w-[1200px] mx-auto "
        >
          <div className="mb-5 w-full flex-row ">
            <label className=" text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow  border rounded  py-1 px-3  leading-tight focus:outline-none focus:shadow-outline w-4/6 float-end"
              id="name"
              type="text"
              placeholder="NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full flex-row ">
            <label className=" text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded  py-1 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline  w-4/6 float-end"
              id="email"
              type="text"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full flex-row ">
            <label className=" text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <Button
              title="RESET PASSWORD"
              styles="bg-lightGreen font-semibold py-1 w-4/6 float-end"
              type="submit"
            />
          </div>
        </form>
      </div>
      <div className="w-full flex align-middle my-20 ">
        <Button
          title="SAVE CHANGES"
          styles="bg-[#294C5A] font-semibold py-1 w-[30%] m-auto "
          type="submit"
          onClick={() => {
            editUser(id, auth.currentUser, name, email);
          }}
        />
      </div>
    </div>
  );
};

export default EditUser;
