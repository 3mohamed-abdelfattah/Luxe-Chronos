import React from 'react'
import { Header, HeroSection, SupportedBrand, CollectionSection } from '@/components'
import VideoBG from '@/assets/for_landing/heroBg.mp4'

export const LandingPage = () => {
    return (
        <main>

            {/* Hero Section*/}
            <section className="relative h-screen">

                <video autoPlay muted loop className='absolute -z-20 h-screen w-full object-fill'>
                    <source src={VideoBG} type="video/mp4" />
                </video>

                <Header />
                <HeroSection />
            </section>

            <SupportedBrand />
            <CollectionSection />

        </main>
    )
}