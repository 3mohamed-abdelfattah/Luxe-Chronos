import React from 'react'
// Icons
import * as Icons from '@/utils/icons.util';

export const SupportedBrand = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-6 text-white bg-secondaryColor py-7 vsm:py-12">
            <h3 className="text-xl vsm:text-2xl">SUPPORTED BRAND</h3>
            {/* Brands Logos */}
            <div className="flex flex-wrap items-center justify-evenly gap-5 sm:gap-20 px-5">
                {[Icons.OmegaIcon, Icons.AudemIcon, Icons.RolexIcon, Icons.PatekIcon, Icons.HublotIcon,].map((Icon, index) =>
                    <span key={index}><Icon /></span>
                )}
            </div>
        </section>
    )
}