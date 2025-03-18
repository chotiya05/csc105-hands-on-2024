import React from 'react' 
import HomeImg from '../image/eve1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Home () {
  return (
    <div className='bg-[#F2EBE4] h-screen flex justify-center items-center'>
      <div className='container mx-auto max-w-[1360px] p-6 md:p-10 flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left gap-4 md:gap-8'>
        
        <div className='font-bold font-semibold md:w-[50%] '>

          <h1 className='text-[1.2rem]  md:ml-35'>Hello, </h1>
          <h1 className='text-[2.5rem] md:ml-35 text-black'>I'm <span className='text-[2.5rem]  text-[#B91646]'>Chotiya</span> </h1>
          <h1 className='text-black text-[2.5rem] md:ml-35'>Khawsanga</h1>
          <h1 className='md:ml-35'>I'm a CS Student at KMUTT</h1>
          <div className="flex items-center justify-center md:justify-start space-x-4 mt-4 md:ml-40">
            <a href="https://www.facebook.com/chotiya.khawsanga/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-700 ">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="https://www.instagram.com/eve_chotiya/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black text-black hover:bg-gray-200 ">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://github.com/chotiya05" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black text-black hover:bg-gray-200 ">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
          <a href='#' className='inline-flex justify-center items-center py-3 px-8 mt-6 bg-[#B91646] text-white rounded-full font-bold md:ml-40 '>My Portfolio</a>
          
        </div>
        <div className="md:w-[48%] mt-4 md:mt-0 flex justify-center">
          <img src={HomeImg} className='w-full max-w-[250px] md:max-w-[380px]' />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
