import React from 'react'
import * as Icons from '@/utils/icons.util';

export const Header = () => {
    return (
        <header className="flex justify-around items-center bg-transparent text-white py-10">

            {/* Logo */}
            <p className="font-bold text-xl">
                Luxe
                <span className="text-secondaryColor"> Chronos</span>
            </p>

            {/* Navigation */}
            <ul className="flex gap-10 font-medium">
                {['Home', 'Shop', 'About', 'Blog', 'Contact'].map((nav, index) =>
                    <li key={index}>{nav}</li>
                )}
            </ul>

            {/* Icons */}
            <div className="flex gap-5 font-medium">
                {[Icons.SearchIcon, Icons.ProfileIcon, Icons.CartIcon].map((Icon, index) =>
                    <span key={index}><Icon /></span>
                )}
            </div>

        </header>
    )
}