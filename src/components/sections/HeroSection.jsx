import React from 'react'
import { Navigation } from '@/components'

export const HeroSection = () => {
    return (
        <section className="overlay z-20 px-5 lg:px-0">
            <article className="flex justify-between flex-col h-screen">
                <span></span>
                <span className="flex flex-col gap-5 items-center text-center text-primaryColor">

                    {/* Heading Titles */}
                    <h1 className="text-sm tiny:text-2xl vsm:text-3xl md:text-4xl md:max-w-[750px] font-medium">Experience Timeless Sophistication with Luxe Chronos</h1>
                    <h2 className="md:max-w-[750px] text-xs vsm:text-base">Seconds holds meaning. Our meticulously collection of luxury and everyday timepieces goes beyond simply marking time.</h2>

                    {/* Buttons */}
                    <span className="flex flex-wrap vsm:flex-nowrap justify-center gap-2 vsm:gap-5 sm:gap-10 mb-7">
                        <button className="bg-white text-black text-sm tiny:text-base w-28 tiny:w-36 sm:w-64 py-3 font-medium rounded-xl active:scale-105">Shop now</button>
                        <button className="border-2 border-white text-sm tiny:text-base w-40 tiny:w-44 sm:w-64 py-3 font-medium rounded-xl hover:bg-white hover:text-black active:scale-105">New collections</button>
                    </span>
                </span>
            </article>

            {/* Left Navigation Bar*/}
            <span className="hidden md:block">
                <Navigation />
            </span>

        </section>
    )
}