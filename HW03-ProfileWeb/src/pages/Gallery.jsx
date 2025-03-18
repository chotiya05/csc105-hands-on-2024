import React from 'react';
import gallery1 from '../image/eve3.jpg';
import gallery2 from '../image/sky.jpg';
import gallery3 from '../image/eve5.jpg';
import gallery4 from '../image/eve7.jpg';
import gallery5 from '../image/paint.jpg';
import gallery6 from '../image/dog.jpg';

function Gallery() {
  return (
    <div className='pt-10 pb-20 text-center bg-[#F2EBE4]'>
      <div className='container mx-auto max-w-[1320px]'>
        <h3 className='text-[2.2rem] font-semibold text-black'>Gallery</h3>
      </div>

      <div className='my-10 flex justify-center'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center items-center max-w-[1100px]'>
          <div className='relative flex justify-center'>
            <img src={gallery1} alt='Gallery Image 1' className='max-w-[320px] w-full h-auto rounded-lg shadow-md' />
          </div>
          <div className='relative flex justify-center'>
            <img src={gallery2} alt='Gallery Image 2' className='max-w-[320px] w-full h-auto rounded-lg shadow-md' />
          </div>
          <div className='relative flex justify-center'>
            <img src={gallery3} alt='Gallery Image 3' className='max-w-[320px] w-full h-auto rounded-lg shadow-md' />
          </div>
          <div className='relative flex justify-center'>
            <img src={gallery5} alt='Gallery Image 4' className='max-w-[320px] w-full h-auto rounded-lg shadow-md' />
          </div>
          <div className='relative flex justify-center'>
            <img src={gallery4} alt='Gallery Image 5' className='max-w-[320px] w-full h-auto rounded-lg shadow-md' />
          </div>
          <div className='relative flex justify-center'>
            <img src={gallery6} alt='Gallery Image 6' className='max-w-[320px] w-full h-auto rounded-lg shadow-md' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
