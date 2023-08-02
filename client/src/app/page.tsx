
import image from "../../public/assets/profileImage.jpeg";
import Image from 'next/image'

import Footer from "../app/footer/footer"
export default function Home() {
  return (
    <>
     <Image className="object-cover w-[10rem] h-[10rem] rounded-full" src={image} width={400} height={400} alt="" />
      <Footer></Footer>
    </>
  )
}