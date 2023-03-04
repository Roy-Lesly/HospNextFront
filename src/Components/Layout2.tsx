import React, { useState } from 'react'
import Navbar from './Navbar2'
import Sidebar from './Sidebar2'
import Footer from './Footer2'

const Layout2 = ({ children }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex flex-col flex-1 w-full">
        <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Layout2