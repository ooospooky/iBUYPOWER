import React from 'react'
import { CardProps, CardHeaderProps, CardImageProps, CardDescriptionProps, CardPriceProps, CardShippingProps, CardButtonProps } from '../interface/interface'

const CardHeader: React.FC<CardHeaderProps> = ({ type }) => {
  return (
    <p className="px-2 py-1 border-2 rounded-[30px] border-[#929292] w-fit text-xs text-[#929292]">
      {type === 'prebuilt' ? 'Prebuilt PC' : 'Custom PC'}
    </p>
  );
};

const CardImage: React.FC<CardImageProps> = ({ img, title }) => {
  return (
    <div className="flex justify-center">
      <img src={img} alt={title} className="w-52 h-52" />
    </div>
  );
};

const CardDescription: React.FC<CardDescriptionProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-xl my-5 overflow-hidden whitespace-nowrap overflow-ellipsis">
        {title}
      </h3>
      <div className="flex flex-col gap-1">
        {description.map((eachDescription, index) => (
          <p
            key={index}
            className="text-base font-normal text-left tracking-normal overflow-hidden whitespace-nowrap overflow-ellipsis"
          >
            {eachDescription}
          </p>
        ))}
      </div>
    </div>
  );
};

const CardPrice: React.FC<CardPriceProps> = ({ save, DiscountedPrice, OriginalPrice, affiram }) => {
  return (
    <div>
      <div className="w-fit p-1 rounded-[20px] bg-[#FF1B1B]">
        <p className="text-white text-xs font-light">SAVE ${save}</p>
      </div>
      <div className="mt-3 flex flex-row gap-4">
        <p className="text-3xl font-bold self-end">${DiscountedPrice}</p>
        <p className="text-base font-normal self-end line-through tracking-normal text-gray-600">
          ${OriginalPrice}
        </p>
      </div>
      <p className="text-sm tracking-normal mt-1 flex items-end">
        Starting at
        <span className="text-[#004CFF]">&thinsp;${affiram}&thinsp;</span> with
        <img src="/icon-affirm.svg" alt="Affirm" className="w-18 h-10 self-end -mb-[7px]" />
      </p>
    </div>
  );
};

const CardShipping: React.FC<CardShippingProps> = ({ shipping }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-bold">Free Shipping</span>
      <span className="overflow-hidden whitespace-nowrap text-xs">{shipping}</span>
    </div>
  );
};
const CardButton: React.FC<CardButtonProps> = ({ type }) => {
  return (
    <div className="rounded-[30px] px-3 py-[6px] border border-red-600 text-red-600 tracking-[-0.24px] text-sm  flex justify-center items-center whitespace-nowrap">
      {type === 'prebuilt' ? 'Buy Now' : 'Customize'}
    </div>
  )
}

export const Card: React.FC<CardProps> = ({ product }) => {
  const { id, type, img, title, description, save, OriginalPrice, DiscountedPrice, affiram, shipping } = product;

  return (
    <div key={id} className="flex flex-col rounded-2xl mx-3 shadow-2xl my-20 h-full sm:mx-14">
      <section className="px-5 pt-2   ">
        <CardHeader type={type} />
        <CardImage img={img} title={title} />
        <CardDescription title={title} description={description} />
      </section>
      <section className="flex flex-col mt-2 bg-[#F2F6FA] p-5 rounded-b-2xl">
        <CardPrice
          save={save}
          DiscountedPrice={DiscountedPrice}
          OriginalPrice={OriginalPrice}
          affiram={affiram}
        />
        <div className="mt-5 flex flex-row justify-between">
          <CardShipping shipping={shipping} />
          <CardButton type={type} />
        </div>
      </section>
    </div>
  );
};