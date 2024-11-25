import React from 'react'
import MotionTransition from './transition-component'
import Link from 'next/link'
import { socialNetworks } from '@/data'

const Header = () => {
  return (
    <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 px-20">
      <header>
        <div className='container justify-between max-w-6xl mx-auto md:flex'>
          <Link href="/">
          <h1 className='my-3 text-4xl font-bold text-white text-center md:text-left'>
            Boris
            <span className='text-secondary'>Dev</span>
          </h1>
          </Link>
          <div className='flex items-center justify-center gap-7 '>
            {socialNetworks.map((item) => (
              <Link 
                key={item.id} 
                href={item.src} 
                target="_blank" 
                className="transiton-all duration-300 hover:text-secondary"
                >
                {item.logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  )
}

export default Header