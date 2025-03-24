import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#F2EBE4] p-4">
      <div className="container mx-auto flex justify-center">
        <div className="space-x-4">
          <Link to="/" className="text-black font-bold hover:underline hover:bg-[#B91646] hover:rounded-full hover:p-2 hover:text-white">Home</Link>
          <Link to="/login" className="text-black font-bold hover:underline hover:bg-[#B91646] hover:rounded-full hover:p-2 hover:text-white">Login</Link>
          <Link to="/fav" className="text-black font-bold hover:underline hover:bg-[#B91646] hover:rounded-full hover:p-2 hover:text-white">Favourites</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
