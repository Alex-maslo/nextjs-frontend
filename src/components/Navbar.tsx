import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content flex items-center justify-around">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Home
        </Link>{" "}
        <Link href={"/users"} className="btn btn-ghost text-xl">
          Users
        </Link>{" "}
      </div>
    </div>
  );
};

export default Navbar;
