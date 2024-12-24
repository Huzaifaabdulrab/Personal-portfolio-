import Link from "next/link";
import SocialIcon from "./Socialicons";
import Image from "next/image";
import portfolio from "../public/Images/portfolio.png";
import { Button } from "@/components/ui/button";

export default function Screen() {
  return (
    <div id="Screen" className="bg-[#e3e3e3] flex flex-col md:flex-row pt-12">
      <div className="text-white mt-24 ml-14 font-bold md:w-1/2">
        <h3
          className="text-[#135e94] text-2xl font-sans"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}
        >
          Hii, I am
        </h3>
        <h1
          className="HA-Name text-[#091057] text-5xl font-bold ml-1 mt-3 mb-2"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}
        >
          Huzaifa Abdulrab
        </h1>
        <p
          className="text-sky-800 text-2xl mb-2 mt-3"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}
        >
          Frontend Developer
        </p>
        <p
          className="text-1xl text-[#8b8585] pt-3"
          style={{ textShadow: "1px 1px 2px rgba(255, 255, 255, 0.8)" }}
        >
          To apply my expertise in HTML, CSS, JavaScript, and <br />
          TypeScript to create dynamic, responsive, and <br /> user-friendly
          web applications.
        </p>
        <br /><Button
                
        variant={"outline"}
  className="bg-[#135e94] hover:bg-[#135e94] mr-2 mt-7 mb-4 md:inline hover:!text-white sm:mt-1 w-32 rounded-xl" // Add rounded-md here
  style={{ boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}
>   
  <a href={"/cv.pdf"} download >Download CV</a>


</Button>
<Button 
  className="bg-[#d3d3d3] text-[#135e94] md:ml-0 mt-10 mb-16 hover:bg-[#d3d3d3] hover:!text-[#135e94] sm:ml-2 mt-5 w-32 rounded-xl" // Add rounded-md here
  style={{ boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}
>
  
<Link href="#Contact">
 Contact me</Link>
</Button>
      </div>

      <div className="flex justify-center items-center lg:ml-16 w-full md:w-1/2 m-auto">
        <Image
          src={portfolio}
          alt="Huzaifa Abdulrab image"
          width={350}
          height={400}
          className="rounded-md w-full max-w-xs" // Responsive width
        />
      </div>
      <SocialIcon />
    </div>
  );
}


