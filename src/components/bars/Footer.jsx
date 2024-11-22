import React from 'react'

export const Footer = () => {
    return (
        <footer className="footerBG h-screen relative flex flex-col justify-between text-primaryColor text-justify w-full text-xl">

            {/* Overlay black color */}
            <span className="overlayF h-screen z-10"></span>

            {/* Right Title (Own a timeless piece) */}
            <span className="flex justify-end items-end p-5 md:px-10 md:py-20 z-10">
                <h3 className="text-sm sm:text-base max-w-[550px]">Own a timeless piece of history with our exclusive limited-edition watches. Meticulously crafted in small batches, each timepiece showcases rare, premium materials, blending elegance with rarity.</h3>
            </span>

            {/* Left Title (Limited Editions) */}
            <span className="p-5 md:p-20 z-10">
                <h1 className="text-2xl sm:text-4xl mb-5 underline underline-offset-4">Limited Editions</h1>
                <h3 className="text-sm sm:text-base max-w-[550px]">Discover the allure of vintage watches and the enduring value of pre-owned timepieces, each crafted to stand the test of time with timeless elegance.</h3>
            </span>

        </footer>
    )
}