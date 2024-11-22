import React from 'react'
import { Header, HeroSection } from '@/components'

export const LandingPage = () => {
    return (
        <main>

            {/* Hero Section*/}
            <section className="bg-photo relative z-10 h-screen">
                <Header />
                <HeroSection />
            </section>

        </main>
    )
}