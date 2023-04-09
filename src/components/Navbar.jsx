import { useState } from "react";
import { HambergerMenu, CloseCircle } from "iconsax-react";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  return (
    <nav className=" lg:flex lg:justify-between lg:items-center lg:fixed lg:w-full  bg-transparent lg:backdrop-blur-lg lg:border-b-[1px] lg:border-b-white-300 lg:z-50 lg:pl-8 ">
      <span onClick={handleClick} className="z-50 lg:hidden absolute right-8 top-8 ">
        {toggle ? <CloseCircle color="#000" /> : <HambergerMenu color="#000" />}
      </span>
      <h2 className=" font-medium text-2xl absolute left-8 top-8  lg:block lg:static lg:text-2xl ">
        BOOK-A-DOC
      </h2>
      <ul className={` ${toggle ? "flex" : "hidden" } bg-transparent  w-full h-[100vh] flex flex-col justify-center items-center lg:flex lg:flex-row lg:h-16 lg:w-64`}>
        <li className=" text-2xl font-medium my-8   lg:mx-16 lg:border-b-2 lg:border-hint lg:font-normal lg:text-sm">
          Home
        </li>
        <li className=" text-2xl font-medium my-8   lg:mx-16 lg:font-normal lg:text-sm">
          About
        </li>
        <li className=" text-2xl font-medium my-8  lg:mx-16 lg:font-normal lg:text-sm">
          Services
        </li>
        <li className="text-2xl font-medium my-8   lg:mx-16 lg:font-normal lg:text-sm">
          Contact
        </li>
      </ul>
      <div className=" hidden lg:block lg:relative lg:right-8">
        <button className="lg:bg-hint lg:px-4 lg:py-2 lg:rounded-3xl lg:text-primary lg:mr-4">
          Sign in
        </button>
        <button className="lg:bg-transparent lg:border-2 lg:border-hint lg:px-4 lg:py-2 lg:rounded-3xl">
          Sign up
        </button>
      </div>
    </nav>
  );
}
