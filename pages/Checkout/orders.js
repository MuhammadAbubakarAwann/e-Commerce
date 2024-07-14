import React from 'react'
import Sidebar from '../../components/User/Sidebar'
import Orders  from '../../components/User/Orders'
import "../../src/app/globals.css"
const reviews = () => {
  return (
    <div className=''>
    <Sidebar/>
    <div className='flex-grow'>
    <Orders/>
    </div>
</div>
  )
}

export default reviews