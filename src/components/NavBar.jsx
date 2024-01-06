import Logo from "../assets/images/BSGLogo1.svg";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

const NavBar = () => {
  const [loading, setLoading] = useState(false);

  const user = localStorage.getItem("user");

  const logOut = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("user");
      window.location.replace("/");
    }, 1000);
  };

  return (
    <nav className="bg-[#FFFFFF] h-[68px] flex items-center justify-between px-10 mb-[6rem]">
      <img
        src={Logo}
        alt="Logo"
        className="md:w-[150px] sm:w-[100px] w-[100px] h-[60px]"
      />

      {user && (
        <button
          className="text-[14px] bg-[#063231] text-[#FFFFFF] p-[10px] rounded-[12px]"
          onClick={logOut}
        >
          {loading ? (
            <ClipLoader color={"#ffffff"} loading={loading} size={25} />
          ) : (
            "Logout"
          )}
        </button>
      )}
    </nav>
  );
};

export default NavBar;
