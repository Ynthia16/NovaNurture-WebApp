/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import {
  NavLink,
  Outlet,
  redirect,
  useNavigate,
  useLocation
} from "react-router-dom";
import LogoDash from "../../assets/LogoDash.png";
import { BsHouse, BsHouseFill } from "react-icons/bs";
import { GiMirrorMirror, GiShintoShrineMirror } from "react-icons/gi";
import { MdPostAdd } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import Button from "../../components/Button";

export function loader() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (!user) {
    throw redirect("/login");
  }
  return null;
}

export default function MainProtectedLayout() {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const navLinks = [
    {
      icon: (
        <BsHouseFill
          color={pathname.includes("home") ? "black" : "white"}
          size={25}
        />
      ),
      title: "Home"
    },
    {
      icon: (
        <GiMirrorMirror
          color={pathname.includes("reflection") ? "black" : "white"}
          size={25}
        />
      ),
      title: "Reflection"
    },
    {
      icon: (
        <MdPostAdd
          color={pathname.includes("post") ? "black" : "white"}
          size={25}
        />
      ),
      title: "Post"
    }
  ];
  const { email, name } = user;

  function handleLogout() {
    localStorage.removeItem("user");
    return navigate("/login");
  }

  return (
    <div className="max-h-screen overflow-hidden flex">
      <div className="bg-secondaryLight h-screen w-1/5  py-5 flex flex-col justify-between">
        <div className="flex items-center gap-5 px-5">
          <img src={LogoDash} alt="Not Found" className="w-12 h-12" />
          <h3 className="font-semibold text-xl text-white m-0">NovaNarture</h3>
        </div>
        {/* navlinks */}
        <div className="grid place-content-center gap-4 w-full">
          {navLinks.map((item) => {
            return (
              <NavLink
                to={`/${item.title.toLowerCase()}`}
                className={`${
                  pathname.includes(item.title.toLowerCase())
                    ? "text-black bg-lightGreen "
                    : "text-white "
                } flex gap-3 px-5 py-3 w-full`}
              >
                {item.icon}
                <p className={` text-lg`}>{item.title}</p>
              </NavLink>
            );
          })}
        </div>
        <div className="px-5 flex flex-col gap-4 items-center">
        <div className="px-5 flex flex-col gap-4 items-center" onClick={()=>navigate("/edit_user")}>
        
          <BiUserCircle color="white" size={50} className="t" />
          <p className="text-white">@{name.split(" ").join("_")}</p>
          <p className="text-gray-300 text-wrap ">{email}</p>
          </div>
          <Button
            title="LOGOUT"
            styles="bg-lightGreen font-bold w-full"
            onClick={handleLogout}
          />
        </div>
      </div>
      <div className="flex-1 ">
        <Outlet />
      </div>
    </div>
  );
}
