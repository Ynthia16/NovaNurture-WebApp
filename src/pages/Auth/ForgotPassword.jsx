import React, { useState } from "react";
import resetPassword from "../../assets/resetPw.png";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: "" });
  const navigate = useNavigate();
  const handleReset = async (e) => {
    e.preventDefault();
    await sendPasswordResetEmail(auth, formData.email);
  };
  return (
    <div className="flex-1 w-full h-screen justify-center align-middle pt-20 m-auto bg-slate-50 items-center   ">
      <div className="w-[40%] self-center m-auto rounded-lg bg-white px-20 py-10 shadow-xl">
        <img
          src={resetPassword}
          alt="Reset Password"
          className="w-[100px] h-[100px] object-center m-auto"
        />

        <div className="flex flex-col gap-2 text-center">
          <h1 className="m-0 text-xl font-semibold">Forgot your Password ?</h1>
          <p className="font-thin">
            Enter your email so that we can send you a reset link.
          </p>
        </div>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-transparent border border-gray-200 rounded-xl px-2 py-3 w-full placeholder:text-gray-300 focus:outline-none my-5"
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <Button
            title="RESET PASSWORD"
            styles="bg-[#294C5A] font-semibold w-full"
            type="submit"
            onClick={handleReset}
          />
        </form>
        <div className="flex flex-col gap-2 text-center mt-2">
          <p
            className="font-semibold cursor-pointer self-center"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
