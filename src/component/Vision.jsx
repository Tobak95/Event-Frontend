import React from 'react'
import dominate from '../assets/Dominate.jpg'
import manage1 from '../assets/Manage1.png'
import manage2 from '../assets/Manage2.png'

const Vision = () => {
  return (
    <div className='mt-10 layout'>
        <div className='w-[95%] md:w-11/12 container mx-auto flex flex-col md:flex-row gap-5 md:h-[400px] lg:h-[500px]'>
            {/* Dominate */}
            <div className='md:h-[100%] md:w-[45%]'>
                {/* text */}
                <div className='md:h-[35%] font-bold text-center flex flex-col gap-2'>
                    <h1 className='text-[rgba(74,74,74,1)] text-xl lg:text-4xl'>Your Vision. Our expertise.</h1>
                    <h1 className='text-[rgba(74,74,74,1)] text-xl lg:text-4xl'> Extraordinary events.</h1>
                    <h1 className='text-[rgba(237,186,55,1)] text-xl lg:text-4xl'>Dominate the scene.</h1>

                    
                </div>
                {/* image */}
                <img className='rounded-xl md:h-[65%] md:w-full object-cover' src={dominate} alt="" />
            </div>
            {/* Manage */}
            <div className='md:h-[100%] md:w-[55%]'>
                {/* image */}
                <div className='flex flex-col md:flex-row gap-3 md:h-[55%]'>
                    <img className='rounded-lg h-full w-full object-cover' src={manage1} alt="" />
                    <img className='rounded-lg h-full w-full object-cover' src={manage2} alt="" />
                </div>
                {/* text */}
                <div className='md:h-[45%] flex flex-col md:justify-center text-center gap-5'>
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