import { FaGithub, FaEnvelope, FaLinkedin, FaTree } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <hr className="mb-1 w-auto"/>
      <div className="bg-[#e3e3e3] p-14 gap-8 flex flex-col md:flex-row items-start justify-between px-20">
        
        {/* About Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-[#091057]">Huzaifa Abdulrab</h2>
          <p className="text-[#8b8585] mt-2">
            Frontend Developer passionate about building interactive web experiences with modern technologies.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="mb-4 md:mb-0">
          <h3 className=" text-xl font-semibold text-[#091057] ml-12 text-center">Quick Links</h3>
          <ul className="space-y-2 mt-2 ml-[4rem] text-center ">
            <li><Link href="#Screen" className="hover:text-[#091057]">Home</Link></li>
            <li><Link href="#About" className="hover:text-[#091057]">About</Link></li>
            <li><Link href="#Skills" className="hover:text-[#091057]">Skills</Link></li> 
            <li><Link href="#Project" className="hover:text-[#091057]">Projects</Link></li>
            <li><Link href="#Contact" className="hover:text-[#091057]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information & Social Links */}
        <div className="flex flex-col items-start">
          <Link href="mailto:huzaifaabdulrab2@gmail.com" className="font-bold text-[#091057] hover:underline">
            huzaifaabdulrab2@gmail.com
          </Link>
          <p className="text-[#8b8585] mt-2"> &copy; {currentYear} Huzaifa Abdulrab</p>

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


// // components/Footer.js
// import Link from 'next/link';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="text-gray-600 body-font">
//       <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
//         <Link href="/" passHref>
//           <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//             </svg>
//             <span className="ml-3 text-xl">Tailblocks</span>
//           </span>
//         </Link>
        
//         <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
//           © 2020 Tailblocks —
//           <Link
//             href="https://twitter.com/knyttneve"
//             className="text-gray-600 ml-1"
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             @knyttneve
//           </Link>
//         </p>
        
//         <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
//           <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500">
//             <FaFacebook className="w-5 h-5 hover:text-gray-700" />
//           </Link>
//           <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
//             <FaTwitter className="w-5 h-5 hover:text-gray-700" />
//           </Link>
//           <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
//             <FaInstagram className="w-5 h-5 hover:text-gray-700" />
//           </Link>
//           <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
//             <FaLinkedin className="w-5 h-5 hover:text-gray-700" />
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }
