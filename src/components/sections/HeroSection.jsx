import React from 'react'
import { Navigation } from '@/components'

export const HeroSection = () => {
    return (
        <section className="overlay z-20">
            <article className="flex justify-between flex-col h-screen">
                <span></span>
                <span className="flex flex-col gap-5 items-center text-center text-primaryColor">

                    {/* Heading Titles */}
                    <h1 className="text-4xl max-w-[750px] font-medium">Experience Timeless Sophistication with Luxe Chronos</h1>
                    <h2 className="max-w-[700px]">Seconds holds meaning. Our meticulously collection of luxury and everyday timepieces goes beyond simply marking time.</h2>

                    {/* Buttons */}
                    <span className='flex gap-10 mb-7'>
                        <button className="bg-white text-black w-64 py-3 font-medium rounded-xl active:scale-105">Shop now</button>
                        <button className="border-2 border-white w-64 py-3 font-medium rounded-xl hover:bg-white hover:text-black active:scale-105">New collections</button>
                    </span>
                </span>
            </article>

            {/* Left Navigation Bar*/}
            <Navigation />

        </section>
    )
}