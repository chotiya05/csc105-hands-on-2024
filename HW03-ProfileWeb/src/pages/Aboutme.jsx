import React from 'react'
import imgeve from '../image/S__9641989.jpg'

function AboutMe() {
  return (
    <div className='bg-[#F2EBE4] min-h-screen flex justify-center items-center p-10'>
      <div className='container max-w-4xl  p-8 flex flex-col md:flex-row gap-8'>

        <div className='md:w-[80%]  flex justify-center'>
          <img src={imgeve} alt='Profile' className='w-full  rounded-lg border-4 border-[#B91646]' />
        </div>

        <div className='md:w-1/2 md:ml-10'>
          <h1 className='text-3xl font-bold pb-5 font-semibold'>About Me</h1>
          <p><span className='font-semibold'>Name:</span> Chotiya Khawsanga (Eve)</p>
          <p><span className='font-semibold'>Date of Birth:</span> September 30, 2005</p>
          <p><span className='font-semibold'>Nationality:</span> Thai</p>
          <p><span className='font-semibold'>Religion:</span> Buddhism</p>
          <p><span className='font-semibold'>University:</span> King Mongkut's University of Technology Thonburi</p>
          <p><span className='font-semibold'>Major:</span> Computer - Science</p>
          <p><span className='font-semibold'>Phone Number:</span> 0984711669</p>
          <p><span className='font-semibold'>Email:</span> evechotiya@gmail.com</p>
          <a href='#' className='inline-flex justify-center items-center py-3 px-8 mt-10 bg-[#B91646] text-white rounded-full font-bold'>Read More</a>
          
        </div>
      </div>
    </div>
  );
}

export default AboutMe;