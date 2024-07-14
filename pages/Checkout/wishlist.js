import React from 'react'
import Sidebar from '../../components/User/Sidebar'
import "../../src/app/globals.css"
import Wishlist from '../../components/User/Wishlist'
const reviews = () => {
  return (
    <div className=''>
    <Sidebar/>
    <div className='flex-grow'>
    <Wishlist/>
    </div>
</div>
  )
}

export default reviews