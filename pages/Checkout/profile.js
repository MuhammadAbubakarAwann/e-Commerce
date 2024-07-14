import React from 'react'
import ProfilePage from '../../components/User/Profile'
import Sidebar from '../../components/User/Sidebar'
import "../../src/app/globals.css"


const profile = () => {
  return (
    <div className=''>
    <Sidebar/>
    <div className='flex-grow'>
    <ProfilePage/>
    </div>
</div>  
  )
}

export default profile