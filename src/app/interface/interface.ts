export interface IProduct {
  id: number;
  type: "prebuilt" | "customize";
  img: string;
  title: string;
  description: string[];
  save: string;
  OriginalPrice: string;
  DiscountedPrice: string;
  affiram: string;
  shipping: string;
}
export interface CardProps {
  product: IProduct;
}

export interface CardHeaderProps {
  type: string;
}
export interface CardImageProps {
  img: string;
  title: string;
}
export interface CardDescriptionProps {
  title: string;
  description: string[];
}
export interface CardPriceProps {
  save: string;
  DiscountedPrice: string;
  OriginalPrice: string;
  affiram: string;
}

export interface CardShippingProps {
  shipping: string;
}

export interface CardButtonProps {
  type: string;
}
