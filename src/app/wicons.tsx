import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

const Whatsapp = () => {
    return (
        <>
            <div className="fixed z-20 bg-white rounded-[70%] text-[50px] text-[#075e54] bottom-4 right-2">
               <Link href=" https://wa.me/923400292040"> <IoLogoWhatsapp /></Link>
            </div>
        </>
    )
}

export default Whatsapp


