import React from 'react'
// Assets
import VideoBG from '@/assets/for_landing/heroBg.mp4'
// Components
import { Header, HeroSection, SupportedBrand, CollectionSection, Footer } from '@/components'

export const LandingPage = () => {
    return (
        <main>
            {/* Hero Section*/}
            <section className="relative h-screen">
                {/* Hero Background Video*/}
                <video autoPlay muted loop className='absolute -z-20 h-screen w-full object-fill'>
                    <source src={VideoBG} type="video/mp4" />
                </video>
                <Header />
                <HeroSection />
            </section>

            <SupportedBrand />
            <CollectionSection />
            <Footer />
        </main>
    )
}