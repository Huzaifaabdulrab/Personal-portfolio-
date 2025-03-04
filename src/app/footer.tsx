import { FaGithub, FaEnvelope, FaLinkedin, FaTree, FaCode, FaLaptopCode, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <hr className="mb-1 w-auto" />
      <div className="bg-[#e3e3e3] p-14 gap-8 flex flex-col md:flex-row items-start justify-between px-20">
        {/* About Section */}
        <div className="mb-4 md:mb-0 max-w-sm">
          <h2 className="text-2xl font-bold text-[#091057]">Huzaifa Abdulrab</h2>
          <p className="text-[#8b8585] mt-2">
            Frontend Developer skilled in building interactive, responsive, and dynamic web applications using modern technologies like Next.js, TypeScript, React.js, and Tailwind CSS.
          </p>
          <p className="text-[#8b8585] mt-2">
            Passionate about creating user-friendly interfaces with optimized performance and seamless user experiences.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-[#091057] text-center">Services</h3>
          <ul className="space-y-2 mt-2 text-[#8b8585]  text-center">
            <li className="flex items-center gap-2"><FaCode className=' text-[#091057] text-2xl' /> Web Development</li>
            <li className="flex items-center gap-2"><FaLaptopCode className=' text-[#091057] text-2xl' /> Frontend Development</li>
            <li className="flex items-center gap-2"><FaGlobe className=' text-[#091057] text-2xl' /> Responsive Design</li>
            <li className="flex items-center gap-2"><FaLaptopCode  className=' text-[#091057] text-2xl'/> Custom Web Solutions</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="mb-4 md:mb-0 justify-center  items-center text-center">
          <h3 className="text-xl font-semibold  text-[#091057] ml-10 text-center">Quick Links</h3>
          <ul className="text-[#8b8585] space-y-2 mt-2 ml-[3rem]">
            <li><Link href="#Screen" className="hover:text-[#091057]">Home</Link></li>
            <li><Link href="#About" className="hover:text-[#091057]">About</Link></li>
            <li><Link href="#Skills" className="hover:text-[#091057]">Skills</Link></li>
            <li><Link href="#Project" className="hover:text-[#091057]">Projects</Link></li>
            <li><Link href="#Contact" className="hover:text-[#091057]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information & Social Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold text-[#091057] mb-2">Contact Me</h3>
          <Link href="mailto:huzaifaabdulrab2@gmail.com" className="font-bold text-[#091057] hover:underline">
            huzaifaabdulrab2@gmail.com
          </Link>
          <p className="text-[#8b8585] mt-2">&copy; {currentYear} Huzaifa Abdulrab | Developer</p>

          {/* Social Links */}
          <ul className="flex text-[#091057] text-2xl gap-6 pt-4">
            <Link href="https://linktr.ee/huzaifaabdulrab"><li className="hover:text-[#4a4a4a]"><FaTree /></li></Link>
            <Link href="https://github.com/huzaifaabdulrab"><li className="hover:text-[#4a4a4a]"><FaGithub /></li></Link>
            <Link href="mailto:huzaifaabdulrab2@gmail.com"><li className="hover:text-[#4a4a4a]"><FaEnvelope /></li></Link>
            <Link href="https://www.linkedin.com/in/huzaifa-abdulrab/"><li className="hover:text-[#4a4a4a]"><FaLinkedin /></li></Link>
          </ul>
        </div>
      </div>
    </>
  );
}
