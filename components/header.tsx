'use client';

import Link from "next/link";

import { useState } from "react";

import { Hamburger } from "./svg";

const Header = () => {
    const [hamburgerIsOpen, hamburgerSetOpen] = useState(false);
    const links = [
        "Home",
        "About",
        "Projects",
        "Contact"
    ];
    return (
        <header className="sticky top-0 h-[4rem] w-full bg-neutral-900 md:backdrop-blur-[0.5rem] shadow-lg">
            <nav className="h-full w-full flex justify-between py-2 px-4 gap-4">
                <Link href={`/`} className="flex items-center max-md:hidden w-1/3 text-2xl font-extrabold">Aaryan Dehade</Link>
                <Link href={`/`} className="flex items-center md:hidden w-1/4 text-4xl font-extrabold">AD</Link>
                <ul className={`${!hamburgerIsOpen && "max-md:hidden"} flex flex-col md:flex-row max-md:w-1/2 w-1/3 items-center justify-between mt-16 md:mt-0`}>
                    {links.map((link, index) => (
                        <li key={index} className="max-md:py-4 text-center">
                            <Link href={`/${link.toLowerCase()}`} className="max-md:text-3xl">{link}</Link>
                        </li>)
                        )
                    }
                    <li className="md:hidden py-4 w-full text-center">
                        <Link href={`https://blog.aaryandehade.me`} className="text-3xl">Blog</Link>
                    </li>
                </ul>
                <Link href={`https://blog.aaryandehade.me`} className="hidden md:flex w-1/3 justify-end items-center text-xl">Blog</Link>
                <button className="flex justify-end md:hidden w-1/4">
                    <Hamburger open={hamburgerIsOpen} setOpen={hamburgerSetOpen} />
                </button>
            </nav>
        </header>
    );
}

export default Header;