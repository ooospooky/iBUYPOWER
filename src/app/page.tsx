import SliderComponent from "./components/Slider";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="pt-3 text-center ">
        <h1 className="font-bold text-5xl sm:text-4xl mb-5 ">Best Seller Gaming PC</h1>
        <h2 className="font-bold text-4xl sm:text-3xl">Prebuild & Custom</h2>
      </div>
      <SliderComponent />
    </div>
  )
}