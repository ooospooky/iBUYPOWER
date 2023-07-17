import Image from "next/image";
import { products } from "./components/products";
import SliderComponent from "./components/Slider";
{/*  Font wight
 <p className="font-bold">bold 600</p>
<p className="font-medium">medium 500</p>
<p className="font-normal">normal 400</p>
<p className="font-light">light 300</p> 
*/}
export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="pt-36 text-center ">
        <h1 className="font-bold text-5xl sm:text-4xl mb-5 ">Best Seller Gaming PC</h1>
        <h2 className="font-bold text-4xl sm:text-3xl">Prebuild & Custom</h2>
      </div>
      <SliderComponent />
    </div>
  )
}
