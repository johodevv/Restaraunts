import React from 'react'

export default function Nav() {
  return (
    <nav className='flex items-center justify-between'>
        <h1 className='text-3xl font-extrabold text-[#fb0240]'>Logo</h1>
        <div className="flex gap-4">
            <a href="#" className='text-xl'>Joylashuv</a>
            <a href="#" className='text-xl'>Ovqatlar</a>
        </div>
    </nav>
  )
}
