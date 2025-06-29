import React from 'react'

const Hero = () => {
  return (
    <>
        <section id='hero' className='absolute inset-0 size-full bg-[url("/images/noise.png")]'>
            <h1 className='title'>MOJITI</h1>
            <img src='/images/hero-left-leaf.png' alt='left leaf' className='absolute left-0 top-[80%] -translate-y-1/2 w-[200px] h-[200px] object-cover' />
            <img src='/images/hero-right-leaf.png' alt='right leaf' className='absolute right-0 top-[40%] -translate-y-1/2 w-[200px] h-[200px] object-cover' />
        </section>
    </>
  )
}

export default Hero