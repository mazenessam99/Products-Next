import React from 'react'
import Link from 'next/link'
export default function About() {
  return (
    <>
      <h3 className='text-center mt-8 text-2xl'>About Page</h3>
      <div className="flex gap-3 items-center justify-center mt-8">
        <button className='p-2 bg-purple-600 text-white border-0 rounded '>
          <Link href={'/about/mession'}>MISSION</Link>
        </button>

        <button className='p-2 bg-purple-600 text-white border-0 rounded '>
          <Link href={'/about/vision'}>VISSION</Link>
        </button>
      </div>
    </>
  )
}
