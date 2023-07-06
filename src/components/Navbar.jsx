import React from 'react'
import Buscador from './Buscador'

const Navbar = ({onNewCategory}) => {
  return (
    <nav className='bg-slate-800 w-full p-4 flex flex-row items-center justify-between '>
        <div className='flex flex-row gap-4 items-center'>
            <h1 className='text-white font-bold text-xl'>Gif App Ai</h1>
            
            <Buscador onNewCategory={onNewCategory}/>
        </div>
        <div>
            <ul className=' hidden md:flex md:flex-row items-center text-white gap-4'>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar