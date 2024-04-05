import Logo from "../../assets/logo.png";
import Doctor from "../../assets/doctor.png";
import Button from "../../components/Button";
import { NavLink, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen justify-between max-w-[1300px] mx-auto px-10">
      {/* navBar */}
      <div className="flex justify-between items-center py-8">
        <div className="flex gap-4 items-center ">
          <img src={Logo} alt="Not Found" className="w-12 h-12" />
          <h3 className="font-semibold text-2xl">NovaNarture</h3>
        </div>

        {/* Navmenu */}
        <div className="flex gap-8">
          <span>Home</span>
          <span>About</span>
          <span>Gallery</span>
          <span>Testimonies</span>
          <span>FAQ</span>
        </div>
        <div>
          <Button title={"Contact Us"} styles="bg-secondaryDark" />
        </div>
      </div>

      {/* Hero section */}
      <div className="grid grid-cols-2 gap-10">
        {/* Intro text */}
        <div className="flex flex-col gap-12 self-center ">
          <h1 className="text-[55px] font-bold m-0">
            Healthy Minds, Happy Lives{" "}
            <span className="text-secondaryLight">Mental Health</span>
          </h1>
          <p className="w-5/6 text-base">
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
            at quam.
          </p>
          <div className="flex justify-between">
            <Button
              title={"Register"}
              styles="bg-secondaryDark w-2/5"
              onClick={() => navigate("/signup")}
            />
            <Button
              title={"Login"}
              styles="bg-secondaryDark w-2/5"
              onClick={() => navigate("/login")}
            />
          </div>
        </div>
        <img src={Doctor} alt="Doctor" />
      </div>
    </div>
  );
}

export default Home;
