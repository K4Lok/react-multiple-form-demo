import React from 'react'

export default function Input(props) {
  return (
    <label className='space-y-1 inline-block shrink' style={{flexBasis: props.span}} htmlFor={props.id}>
        <p className='text-xl capitalize'>{props.name}</p>
        <input id={props.id} {...props} style={{flex: props.span}} className='w-full h-10 rounded-sm text-xl text-violet-300 focus:outline-purple-200 px-4'/>
    </label>
  )
}
