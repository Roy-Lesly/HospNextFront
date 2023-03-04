import React from 'react'
import Link from 'next/link'

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div
      className={`${
        isSidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
      } fixed inset-0 z-50 transition-transform duration-300 sm:translate-x-0 sm:static sm:h-auto sm:overflow-y-visible`}
    >
      <div className="flex flex-col h-full bg-white text-gray-600 shadow-xl">
        <div className="flex items-center justify-between p-4">
          <Link href="/">
            <p className="text-lg font-semibold uppercase hover:text-gray-800">
              My App
            </p>
          </Link>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 focus:bg-gray-100 transition duration-150 ease-in-out"
            aria-label="Close sidebar"
            onClick={() => setIsSidebarOpen(false)}
          >
            <svg viewBox="0 0 20 20" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                d="M3.293 3.293a1 1 0 0 1 1.414 0L10 8.586l5.293-5.293a1 1 0 1 1 1.414 1.414L11.414 10l5.293 5.293a1 1 0 1 1-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L8.586 10 3.293 4.707a1 1 0 0 1 0-1.414z"
              />
            </svg>
          </button>
        </div>
        <nav className="flex-grow pb-4 pr-4 pl-4 sm:pr-6 sm:pl-6">
          <Link href="/">
            <p className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white hover:no-underline">
              Home
            </p>
          </Link>
          <Link href="/about">
            <p className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white hover:no-underline">
              About
            </p>
          </Link>
          <Link href="/contact">
            <p className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white hover:no-underline">
              Contact
            </p>
          </Link>
        </nav>
      </div>
      <div
        className={`${
          isSidebarOpen ? 'opacity-50' : 'opacity-0'
        } fixed inset-0 z-40 bg-black transition-opacity duration-300`}
        aria-hidden="true"
        onClick={() => setIsSidebarOpen(false)}
      ></div>
    </div>
  )
}

export default Sidebar
