import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function SocialIcon() {
  return (
    <>
    <div id="icons" className="box relative flex justify-between items-center w-full md:w-2/4 lg:w-4/5 p-4 bg-white shadow-lg 
            bottom-0 mx-auto -mt-6 sm:bg-white sm:border sm:border-gray-300 sm:bg-transparent lg:bg-white rounded-full">
            <a href="https://www.facebook.com/huzaifaabdulrab" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl sm:text-2xl md:text-3xl text-[#091057]" />
            </a>
            <a href="https://github.com/Huzaifaabdulrab" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl sm:text-2xl md:text-3xl text-[#091057]" />
            </a>
            <a href="https://www.instagram.com/huzaifaabdulrab" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl sm:text-2xl md:text-3xl text-[#091057]" />
            </a>
            <a href="https://www.linkedin.com/in/huzaifa-abdulrab/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl sm:text-2xl md:text-3xl text-[#091057]" />
            </a>
            <a href="https://wa.me/923400292040" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-xl sm:text-2xl md:text-3xl text-[#091057]" />
            </a>
    
          </div>
    </>
  );
}
