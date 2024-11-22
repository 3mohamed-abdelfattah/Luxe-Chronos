import React from 'react'
// Icons
import * as Icons from '@/utils/icons.util';

export const Header = () => {
    return (
        <header className="sticky flex justify-between px-10 items-center bg-transparent text-white py-10 z-50">

            {/* Logo */}
            <p className="font-medium text-2xl cursor-pointer">Luxe Chronos</p>

            {/* Icons */}
            <div className="flex gap-7 font-medium">
                {[Icons.SearchIcon, Icons.ProfileIcon, Icons.CartIcon].map((Icon, index) =>
                    <span className="cursor-pointer hover:scale-125" key={index}><Icon /></span>
                )}
            </div>

        </header>
    )
}