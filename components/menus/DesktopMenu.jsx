import Link from "next/link"

const DesktopMenu = () => {
  return (
    <div className='flex space-x-2'>
        <Link
            href='/'
            className='text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
        >
            Home
        </Link>
        <Link
            href='/shop'
            className='text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
        >
            Shop
        </Link>
        <Link
            href='/Cart'
            className='text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
        >
            Cart
        </Link>
        <Link
            href='/contact'
            className='text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
        >
            Contact
        </Link>
    </div>
  )
}

export default DesktopMenu