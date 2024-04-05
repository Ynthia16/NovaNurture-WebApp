import React, { useState } from "react";
import GirlOnCloud from "../../assets/girlOnCloud.png";
import Button from "../../components/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { writeUserData } from "../../../fetch";
import { generateFantasyNames } from "../../../fetch/names";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  function combineNames(names) {
    const combinedNames = [];
    for (let i = 0; i < names.length; i += 2) {
      if (i + 1 < names.length) {
        combinedNames.push(names[i] + " " + names[i + 1]);
      } else {
        combinedNames.push(names[i]);
      }
    }
    return combinedNames;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      const combinedNames = generateFantasyNames().join(" ");
      await writeUserData({ email: formData.email, name: combinedNames });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`max-w-screen max-h-screen`}>
      <img
        src={GirlOnCloud}
        alt=""
        className="w-screen h-screen object-center "
      />
      <form
        className="absolute top-[9vh] right-[12vw] h-[82vh] w-[25vw] bg-white bg-opacity-[.06] rounded-2xl text-white px-10 py-5 flex flex-col gap-10"
        action=""
      >
        <div className="flex flex-col gap-2">
          <h1 className="m-0 text-xl font-semibold">Register</h1>
          <p className="font-thin">Register now to be one of us!</p>
        </div>
        <div className="flex flex-col gap-4">
          <p>Email</p>
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-transparent border border-gray-200 rounded-xl px-2 py-3 w-full placeholder:text-gray-300 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="bg-transparent border border-gray-200 rounded-xl px-2 py-3 w-full placeholder:text-gray-300 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p>Confirm password</p>
          <input
            type="password"
            placeholder="Confirm your password"
            className="bg-transparent border border-gray-200 rounded-xl px-2 py-3 w-full placeholder:text-gray-300 focus:outline-none"
          />
        </div>

        <div>
          <Button
            title="REGISTER"
            styles="bg-lightGreen font-semibold w-full"
            type="submit"
            onClick={handleSubmit}
          />
          <p className="text-center pt-2">
            Have an account?{" "}
            <span
              className="font-semibold cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>{" "}
            Here
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
