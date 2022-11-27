import React from 'react'
import Indicator from './Indicator'

export default function IndicatorGroup({currentIndex, totalIndex, size}) {
  return (
    <div className='flex justify-start items-center space-x-6'>
        {[...Array(totalIndex).keys()].map(item => {
            return (
                <Indicator key={item} index={item} currentIndex={currentIndex} size={size} />
            )
        })}
    </div>
  )
}
