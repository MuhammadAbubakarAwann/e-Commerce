import React from 'react'
import PaymentOptions from '../../components/User/PaymentOptions'
import "../../src/app/globals.css"
import Sidebar from '../../components/User/Sidebar'

const payment = () => {
  return (
    <div className='flex'>
    <Sidebar/>
    <div className='flex-grow mt-10'>
    <PaymentOptions/>
    </div>
</div>
  )
}

export default payment