import React from 'react'
import { IProduct } from './products'
interface CardProps {
  product: IProduct;
}

export const Card: React.FC<CardProps> = ({ product }) => {
  const { id, type, img, title, description, save, OriginalPrice, DiscountedPrice, affiram, shipping } = product
  return (
    <div key={id} className='flex flex-col rounded-[10px] bg-white mx-3 shadow-2xl my-20  ' h-full  >
      <section className='px-5'>
        <p className='p-1 border-2 rounded-[30px] border-[#929292] w-fit text-xs text-[#929292]'>{type === 'prebuilt' ? 'Prebuilt PC' : 'Custom PC'}</p>
        <div className='flex justify-center'>
          <img src={img} alt={title} className="w-52 h-52 " />
        </div>
        <div className='flex flex-col '>
          <h3 className='font-bold text-xl my-5 overflow-hidden whitespace-nowrap overflow-ellipsis'>{title}</h3>
          <div className='flex flex-col gap-1'>
            {description.map((des) => {
              return (
                <p className='text-base font-normal text-left tracking-normal overflow-hidden whitespace-nowrap overflow-ellipsis'>{des}</p>
              )
            })}
          </div>
        </div>
      </section>
      <section className="flex flex-col mt-2 bg-[#F2F6FA] p-5">
        <div className=''>
          <div className='w-fit p-1 rounded-[20px]  bg-[#FF1B1B]  '>
            <p className='text-white text-xs font-light'>SAVE ${save}</p>
          </div>
          <div className='mt-3 flex flex-row gap-4'>
            <p className='text-3xl font-bold self-end'>${DiscountedPrice}</p>
            <p className='text-base font-normal self-end line-through  tracking-normal text-gray-600'>${OriginalPrice}</p>
          </div>
          <p className='text-sm tracking-normal mt-1 flex items-end'>
            Starting at
            <span className='text-[#004CFF]'>&thinsp;${affiram}&thinsp;</span> with
            <img src='/icon-affirm.svg' alt='Affirm' className=' w-18 h-10 self-end -mb-[7px]' />
          </p>
        </div>
        <div className='mt-5  flex flex-row justify-between'>
          <div className='flex flex-col gap-2'>
            <span className="text-xs font-bold">Free Shipping</span>
            <span className="overflow-hidden whitespace-nowrap text-xs">{shipping}</span>
          </div>
          <div className='rounded-[30px] px-3 py-2 border-2 border-red-600 text-red-600 tracking-[-0.24px] text-base'>{type === 'prebuilt' ? 'Buy Now' : 'Customize'}</div>
        </div>
      </section>
    </div>
  )
}
// flex h-full shrink-0 flex-col justify-between rounded-[10px] bg-white shadow-productCard !mx-[12.5px] w-[350px] text-ellipsis whitespace-nowrap