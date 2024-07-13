import React from 'react'
import Sidebar from '../../components/User/Sidebar'
import "../../src/app/globals.css"
const reviews = () => {
  return (
    <div className='flex'>
    <Sidebar/>
    <div className='flex-grow'>
    <p>Reviews</p>
    </div>
</div>
  )
}

export default reviews