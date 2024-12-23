import React from 'react'

export const Navigation = () => {
    return (
        <ul className="fixed left-5 top-[35%] flex flex-col gap-10 font-medium text-lg text-white/40 z-50">
            {['Home', 'Shop', 'About', 'Contact'].map((nav, index) =>
                <li className={nav == `Home` ? `text-white scale-105 underline underline-offset-2` : `cursor-pointer hover:scale-105 hover:text-white hover:underline underline-offset-2`} key={index}>{nav}</li>
            )}
        </ul>
    )
}