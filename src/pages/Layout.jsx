import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import { Outlet } from 'react-router-dom' /* The Outlet component is used to render the child routes of the current route. It is used in the Layout component to render the child routes of the Layout route. */
import { X } from 'lucide-react'
import { Menu } from 'lucide-react'
import { dummyUserData } from '../assets/assets.js'
import Loading from '../components/Loading.jsx'
import { useState } from 'react'

const Layout = () => {

    const user= dummyUserData
    const [sidebarOpen, setSidebarOpen] = useState(false) /* This is a state variable that is used to toggle the sidebar. It is set to false by default. */

  return user ? (
    <div className='w-full flex h-screen'> 

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

      <div className='flex-1 bg-slate-50'>
        <Outlet/>
      </div>
      {
        Sidebar ?
        <X className='absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden' onClick={()=> setSidebarOpen(false)}/> /* This is the close button for the sidebar. It is only visible on small screens. */
        :
        <Menu className='absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden' onClick={()=> setSidebarOpen (true)}/> /* This is the menu button for the sidebar. It is only visible on small screens. */
      }
    </div>
  ) : (
    <Loading/>
  )
}

export default Layout