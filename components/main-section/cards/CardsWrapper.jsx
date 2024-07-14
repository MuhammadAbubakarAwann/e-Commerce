// components/CardsWrapper.jsx
import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

const CardsWrapper = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6'>
      <Card1 />
      <Card2 />
      <Card3 />
      <Card3 />
    </div>
  )
}

export default CardsWrapper
