import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export default function AboutMission() {
  return (
<>
    <Link href='/about' className="text-prurple-700 flex items-center gap-3 mb-3 transition hover:text-purple-600"> <FaArrowLeft/> back to About</Link>
    <h2 className='text-white text-2xl text-center mt-4'>Mission_page</h2>
</>
  )
}
