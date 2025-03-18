import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const updateToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="bg-[#F2EBE4] fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto max-w-[1360px] relative h-auto p-5 flex flex-col md:flex-row md:justify-between md:h-[80px] md:items-center">
        <div>
          <a href="#home">
            <h1 className="font-bold text-black">Chotiya Khawsanga</h1>
          </a>
        </div>
        <ul className={` ${!toggle ? 'hidden' : 'flex'}  flex flex-col my-5 md:flex md:flex-row font-bold`}>
           <li className='my-2 md:mx-4 text-black rounded-full hover:bg-[#B91646] hover:text-white py-2 px-3'><a href='#home'>Home</a></li>
           <li className='my-2 md:mx-4 text-black rounded-full hover:bg-[#B91646] hover:text-white py-2 px-3'><a href='#aboutme'>About me</a></li>
           <li className='my-2 md:mx-4 text-black rounded-full hover:bg-[#B91646]  hover:text-white py-2 px-3'><a href='#gallery'>Gallery</a></li>
         </ul>
         <ul className={` ${!toggle ? 'hidden' : 'flex'}  flex flex-col my-5 md:flex md:flex-row font-bold`}>
           <li className='my-2' ><a className='inline-flex justify-center items-center py-2 px-3 bg-[#B91646] text-white rounded-full font-bold' href='#'>contact</a></li>
         </ul>
        <FaBars onClick={updateToggle} className="absolute right-5 cursor-pointer text-xl md:hidden" />
      </div>
    </nav>
  );
}

export default Navbar;
