import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function PagesLayout({children}) {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>

        </div>
    )
}
