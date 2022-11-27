import React from 'react'
import Input from './Input'

export default function MultiForm({inputFields, inputData, handleInputChange, goPrev, goNext}) {
  return (
    <form className='flex flex-wrap justify-between items-center gap-y-2'>
			{inputFields.map(inputField => {
					return (
							<Input key={inputField.id} {...inputField} value={inputData[inputField.id]} onChange={e => {handleInputChange(e, inputField.id)}}/>
					)
			})}

			{/* Button Group For next and last Form */}
			<div className="flex justify-between items-center w-full pt-4">
				<button onClick={goPrev} type="button" className='px-6 py-2 bg-violet-300 hover:bg-violet-400 shadow-sm rounded-md text-white'>Prev</button>
				<button onClick={goNext} type="button" className='px-6 py-2 bg-violet-300 hover:bg-violet-400 shadow-sm rounded-md text-white'>Next</button>
			</div>
    </form>
  )
}
