import React, { useState } from "react";
import GirlOnCloud from "../../assets/girlOnCloud.png";
import Button from "../../components/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { readUsers } from "../../../fetch";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const users = await readUsers();
      users.forEach((user) => {
        console.log(user.email);
        user?.email === formData.email &&
          localStorage.setItem("user", JSON.stringify(user));
      });
      navigate("/home");
    } catch (error) {}
  };
  return (
    <div className={`max-w-screen max-h-screen`}>
      <img
        src={GirlOnCloud}
        alt=""
        className="w-screen h-screen object-center "
      />
      <form
        className="absolute top-[15vh] right-[12vw] h-[70vh] w-[25vw] bg-white bg-opacity-[.06] rounded-2xl text-white px-10 py-5 flex flex-col gap-10"
        action=""
      >
        <div className="flex flex-col gap-2">
          <h1 className="m-0 text-xl font-semibold">Login</h1>
          <p className="font-thin">Welcome onboard with us!</p>
        </div>

        <div className="flex flex-col gap-4">
          <p>Email</p>
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-transparent border border-gray-200 rounded-xl px-2 py-3 w-full placeholder:text-gray-300 focus:outline-none"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="flex flex-col gap-4">
          <p>Password</p>
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Enter your email"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="bg-transparent border border-gray-200 rounded-xl px-2 py-3 w-full placeholder:text-gray-300 focus:outline-none"
              required
            />
            <p className="text-end pt-2 font-thin cursor-pointer" onClick={()=>navigate("/forgot_password")}>Forgot password?</p>
          </div>
        </div>
        <div>
          <Button
            title="LOGIN"
            styles="bg-lightGreen font-semibold w-full"
            type="submit"
            onClick={handleLogin}
          />
          <p className="text-center pt-2">
            New to here?{" "}
            <span
              className="font-semibold cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Register
            </span>{" "}
            Here
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
