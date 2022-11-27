import React from 'react'

export default function Indicator({currentIndex, index, size}) {
  return (
    <button 
    className={`${currentIndex == index ? 'bg-slate-500' : 'bg-slate-300'} rounded-sm text-white border cursor-default`}
    style={{width:size, height:size}}
    >
      {index + 1}
    </button>
  )
}
