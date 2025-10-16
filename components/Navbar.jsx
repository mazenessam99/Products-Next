"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Navbar() {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Service', path: '/services' },
        { name: 'Contact', path: '/contact' },
        { name: 'Login', path: '/login' },


    ]
    const pathName = usePathname();
    return (
        <div 
        className=' bg-gray-50 p-4'>
            <div className='container flex items-center justify-between '>
                <Link href='/' className='text-purple-700 font-bold '>Logo</Link>
            <ul className='flex justify-between gap-5'>
                {links.map((link) => (

                    <li key={link.name}>
                        <Link href={link.path} className={pathName === link.path ? 'text-purple-700 font-bold' : 'text-black font-bold'}>{link.name}</Link>
                    </li>

                ))}
            </ul>
            </div>
        </div>
    );
}
