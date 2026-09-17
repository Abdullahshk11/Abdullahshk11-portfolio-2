"use client"
import React from 'react'
import Image from "next/image";
import LiquidCarveButton from "./Github-btn"
import MovingGradientButton from "./VeiwLive-btn"
import Link from 'next/link';

const Projects = () => {
    return (
        <>
            <section className='flex w-full flex-col items-center gap-6 bg-[#114631] p-4 text-center sm:flex-row sm:justify-around sm:p-6 sm:text-left text-white'>
                <div className="w-full max-w-md sm:flex-1">
                    <h3 className='text-2xl font-bold sm:text-3xl'>Mern-Stack</h3>
                    <p className="mt-3">A full-stack shopping website with a responsive frontend and connected backend.</p>
                </div>
                <div className="flex w-full max-w-md flex-col gap-3 sm:flex-1">
                    <Image
                        src="/Mern.png"
                        alt="Profile"
                        width={500}
                        height={500}
                        className='h-auto w-full rounded-lg object-cover brightness-100 transition-all duration-300 hover:brightness-60'
                    />
                    <div className='flex flex-wrap justify-center gap-2 sm:justify-start'>
                        <Link href="https://github.com/Abdullahshk11/Frontend" target='_blank'>
                        <LiquidCarveButton />
                        </Link>
                        <Link href="https://frontend-sigma-henna-0xf54jh35x.vercel.app/" target='_blank'>
                        <MovingGradientButton />
                        </Link>
                    </div>
                </div>
            </section>
            <div className="h-1 w-full bg-[#2A835F]" />
            <section className='flex w-full flex-col items-center gap-6 bg-[#114631] p-4 text-center sm:flex-row sm:justify-around sm:p-6 sm:text-left text-white'>
                <div className="flex w-full max-w-md flex-col gap-3 sm:flex-1">
                    <Image
                        src="/Coffie-shop.png"
                        alt="Profile"
                        width={500}
                        height={500}
                        className='h-auto w-full rounded-lg object-cover brightness-100 transition-all duration-300 hover:brightness-60'
                    />
                    <div className='flex flex-wrap justify-center gap-2 sm:justify-start'>
                        <Link href='https://github.com/Abdullahshk11/coffie-shop' target='_blank'>
                        <LiquidCarveButton />
                        </Link>
                        <Link href='https://coffie-shop-beta.vercel.app/' target='_blank'>
                        <MovingGradientButton />
                        </Link>
                    </div>
                </div>
                <div className="w-full max-w-md sm:flex-1">
                    <h3 className='mt-3 text-2xl font-bold sm:text-3xl'>Coffie-shop</h3>
                    <p>A stylish coffee shop website for browsing drinks, exploring the menu, and enjoying a warm café-inspired design.</p>
                </div>
            </section>
            <div className="h-1 w-full bg-[#2A835F]" />
             <section className='flex w-full flex-col items-center gap-6 bg-[#114631] p-4 text-center sm:flex-row sm:justify-around sm:p-6 sm:text-left text-white'>
                <div className="w-full max-w-md sm:flex-1">
                    <h3 className='text-2xl font-bold sm:text-3xl'>Mytask - Todo app</h3>
                    <p className="mt-3">A simple todo app for creating, tracking, and managing daily tasks in one place.</p>
                </div>
                <div className="flex w-full max-w-md flex-col gap-3 sm:flex-1 ">
                    <Image
                        src="/Mytask.png"
                        alt="Profile"
                        width={500}
                        height={500}
                        className='h-auto w-full rounded-lg object-cover brightness-100 transition-all duration-300 hover:brightness-60'
                    />
                    <div className='flex flex-wrap justify-center gap-2 sm:justify-start'>
                        <Link href='https://github.com/Abdullahshk11/MyTask'>
                        <LiquidCarveButton />
                        </Link>
                        <Link href='https://github.com/Abdullahshk11/MyTask'>
                        <MovingGradientButton />
                        </Link>
                    </div>
                </div>
            </section>
                <div className="h-1 w-full bg-[#2A835F]" />
                 <section className='flex w-full flex-col items-center gap-6 bg-[#114631] p-4 text-center sm:flex-row sm:justify-around sm:p-6 sm:text-left text-white'>
                     <div className="flex w-full max-w-md flex-col gap-3 sm:flex-1 bg-[#114631]">
                    <Image
                        src="/gym.png"
                        alt="Profile"
                        width={500}
                        height={500}
                        className='h-auto w-full rounded-lg object-cover brightness-100 transition-all duration-300 hover:brightness-60'
                    />
                    <div className='flex flex-wrap justify-center gap-2 sm:justify-start'>
                        <Link href='https://github.com/Abdullahshk11/gym'>
                        <LiquidCarveButton />
                        </Link>
                        <Link href='https://abdullahshk11.github.io/gym/'>
                        <MovingGradientButton />
                        </Link>
                    </div>
                </div>
                <div className="w-full max-w-md sm:flex-1">
                    <h3 className='mt-3 text-2xl font-bold sm:text-3xl'>gym website</h3>
                    <p>A gym website that showcases fitness services, training options, and a focused workout experience.</p>
                </div>
            </section>
        </>
    )
}

export default Projects
