import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-cyan-400 py-2 justify-between">
      <div className="flex">
        <div className="mx-2 text-xl align-middle">
            Weather App
        </div>
        <ul className="flex mx-2 ">
          <li className="mx-2 ">Home</li>
          <li className="mx-2 ">About Us</li>
        </ul>
      </div>
      <div className="mr-5">
        <input
          type=""
          className="mx-2 px-2 border border-cyan-600 rounded-lg "
          placeholder="Search city"
        />
      </div>
    </div>
  );
};

export default Navbar;
