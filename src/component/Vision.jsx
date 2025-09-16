import React from 'react'
import dominate from '../assets/Dominate.jpg'
import manage1 from '../assets/Manage1.png'
import manage2 from '../assets/Manage2.png'

const Vision = () => {
  return (
    <div className='my-5'>
        <div className='w-[95%] md:w-11/12 container mx-auto flex flex-col md:flex-row gap-5 md:h-[400px] lg:h-[500px]'>
            {/* Dominate */}
            <div className='md:h-[100%] md:w-[45%]'>
                {/* text */}
                <div className='md:h-[40%] font-bold text-center'>
                    <h1 className='text-[rgba(74,74,74,1)] pt-5 text-xl lg:text-4xl pb-3'>Your Vision. Our expertise. Extraordinary events</h1>
                    <h1 className='text-[rgba(237,186,55,1)] pb-5 text-xl lg:text-4xl'>Dominate the scene</h1>
                </div>
                {/* image */}
                <span className='md:w-full'><img className='rounded-xl md:h-[60%] w-full' src={dominate} alt="" /></span>
            </div>
            {/* Manage */}
            <div className='md:h-[100%] md:w-[55%]'>
                {/* image */}
                <div className='flex flex-col md:flex-row gap-3 md:h-[50%]'>
                    <span className='md:w-[50%]'><img className='rounded-lg h-full w-full' src={manage1} alt="" /></span>
                    <span className='md:w-[50%]'><img className='rounded-lg h-full w-full' src={manage2} alt="" /></span>
                </div>
                {/* text */}
                <div className='md:h-[50%] flex flex-col md:justify-center text-center gap-5'>
                    <h1 className='py-3 font-bold text-lg lg:text-3xl'>Manage more than 1000+ events that created lasting and still creating impressions</h1>
                    <div className='flex flex-col md:flex-row gap-4 md:justify-between lg:w-[80%] mx-auto'>
                        {/* first */}
                        <div>
                            <h1 className='text-[rgba(0,78,74,1)] font-bold text-2xl lg:text-4xl'>23K+</h1>
                            <p className='text-[10px] lg:text-[12px]'>Events hosted</p>
                        </div>
                        {/* second */}
                        <div>
                            <h1 className='text-[rgba(0,78,74,1)] font-bold text-2xl lg:text-4xl'>30K+</h1>
                            <p className='text-[10px] lg:text-[12px]'>Satisfied customers</p>
                        </div>
                        {/* third */}
                        <div>
                            <h1 className='text-[rgba(0,78,74,1)] font-bold text-2xl lg:text-4xl'>12+</h1>
                            <p className='text-[10px] lg:text-[12px]'>Years of mastery</p>
                        </div>
                        {/* fourth */}
                        <div>
                            <h1 className='text-[rgba(0,78,74,1)] font-bold text-2xl lg:text-4xl'>65+</h1>
                            <p className='text-[10px] lg:text-[12px]'>Worldwide users</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vision