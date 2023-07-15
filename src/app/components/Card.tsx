import React from 'react'
import { IProduct } from './products'
interface CardProps {
  product: IProduct;
}

export const Card: React.FC<CardProps> = ({ product }) => {
  const { id, type, img, title, description, save, OriginalPrice, DiscountedPrice, affiram, shipping } = product
  return (
    <div key={id} className='flex flex-col rounded-[10px] bg-white mx-3 shadow-2xl my-20' h-full  >
      <section>
        <div className='flex justify-center'>
          <img src={img} alt={title} className="w-52 h-52 " />
        </div>
        <div className='flex flex-col '>
          <h3 className='font-bold text-xl my-5'>{title}</h3>
          <div className='flex flex-col gap-1'>
            {description.map((des) => {
              return (
                <p className='text-base font-normal text-left'>{des}</p>
              )
            })}
          </div>
        </div>
      </section>
      <section className="flex flex-col ">
        <div>
          <div className='w-fit p-2 rounded-[20px]  bg-[#FF1B1B] pt-5 '>
            <p className='text-white text-xs font-light'>SAVE ${save}</p>
          </div>
        </div>
        <button>{type === 'prebuilt' ? 'Buy Now' : 'Customize'}</button>
      </section>
    </div>
  )
}
// flex h-full shrink-0 flex-col justify-between rounded-[10px] bg-white shadow-productCard !mx-[12.5px] w-[350px] text-ellipsis whitespace-nowrap