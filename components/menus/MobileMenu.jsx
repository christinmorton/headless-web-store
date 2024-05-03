import Link from "next/link"

import { FaUser, FaGoogle } from "react-icons/fa";

const MobileMenu = () => {
  return (
    <div id='mobile-menu'>
        <div className='space-y-1 px-2 pb-3 pt-2'>
          <Link
            href='/'
            className='text-black block rounded-md px-3 py-2 text-base font-medium'
          >
            Home
          </Link>
          <Link
            href='/shop'
            className='text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
          >
            Shop
          </Link>
          <Link
            href='/cart'
            className='text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
          >
            Cart
          </Link>
          <Link
            href='/contact'
            className='text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
          >
            Contact
          </Link>
          <button className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4'>
            <FaGoogle className='text-white mr-2' />
            <span>Login or Register</span>
          </button>
        </div>
      </div>
  )
}

export default MobileMenu