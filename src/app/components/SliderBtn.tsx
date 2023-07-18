import React from 'react'
import { SliderBtnProps } from '../interface/interface'

export const SliderBtn: React.FC<SliderBtnProps> = ({ itemsToShow, handleNext, handlePrev }) => {
  return (
    // only when itemToShow ===4,  display button
    <div className={`flex justify-end gap-2 mr-4 -mb-16  z-10 relative  ${itemsToShow !== 4 && 'hidden'} `} >
      <button onClick={handlePrev} className='text-4xl shadow-md border-2 px-3 py-1 hover:bg-[#3A3A3A] hover:text-white '>&lt;</button>
      <button onClick={handleNext} className='text-4xl shadow-md border-2 px-3 py-1 hover:bg-[#3A3A3A] hover:text-white '>&gt;</button>
    </div>
  )
}
