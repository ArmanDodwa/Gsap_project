import React from 'react'
import constant from '../constant/index.js'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/gsap-core';

const Navbar = () => {

    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger: "nav",
                start: "bottom top",
            }

        })
        navTween.fromTo("nav", {
            backgroundColor: 'transparent'},{
                backgroundColor: '#0000050',
                backgrounfilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut',
            },
        )
    })

    const { navLinks } = constant;

  return (
    <nav className='top-0 left-0 w-full  bg-black/5 backdrop-blur-md z-50 flex flex-row justify-between p-4'>
        <div className='flex items-center gap-2 ml-20'>
            <a href="#home" className='flex items-center gap-2'></a>
            <img src="/images/logo.png" alt="logo" className='w-10 h-10 object-cover' />
            <p className='text-[25px]'>Velvet Pour</p>
        </div>

        <ul className='flex items-center text-[18px] gap-15 mr-20 '>
            {navLinks.map((link) => (
                <li key={link.id}>
                    <a href={`#${link.id}`} className='flex items-center gap-2'>
                        {link.icon}
                        {link.title}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar