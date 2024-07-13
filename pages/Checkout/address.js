import React from 'react'
import AddressBook from '../../components/User/AddressBook'
import "../../src/app/globals.css"
import Sidebar from '../../components/User/Sidebar'


const address = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex-grow'>
        <AddressBook/>
        </div>
    </div>
  )
}

export default address