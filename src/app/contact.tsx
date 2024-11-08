import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaTree } from "react-icons/fa";

export default function Contact() {
  return (
    <div id="Contact" className="px-3 py-4 mx-auto">
      <div className="flex flex-col text-center w-full ">
        <h1 className="sm:text-3xl text-4xl font-bold text-[#091057]">
          Contact Us
        </h1>
      </div>

      <p className="lg:w-2/3 text-[#8b8585] text-center mt-10 mx-auto text-base">
        Feel free to reach out for collaborations, questions, or just to say
        hello!
      </p>

      {/* Form Start */}
      <form
        action="https://formspree.io/f/xjkvwdge"
        method="POST"
        className="flex flex-col mb-3 sm:mb-1 sm:flex-row flex-wrap lg:w-2/4 md:w-2/3 mx-auto mt-10"
      >
        {/* Name Input */}
        <div className="p-2 w-full sm:w-[30rem] lg:w-auto lg:flex-1">
          <label htmlFor="name" className="text-lg text-[#091057] flex pl-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full h-12 rounded-xl text-[#8b8585] border border-[#8b8585] transition-colors duration-200 ease-in-out outline-none py-2 px-3 focus:border-[#091057] shadow-xl"
            required
          />
        </div>

        {/* Email Input */}
        <div className="p-2 w-full sm:w-[30rem] lg:w-auto lg:flex-1">
          <label htmlFor="email" className="text-lg text-[#091057] pl-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full h-12 rounded-xl text-[#8b8585] border border-[#8b8585] transition-colors duration-200 ease-in-out outline-none py-2 px-3 focus:border-[#091057] shadow-xl"
            required
          />
        </div>
<div>
        {/* Subject Input */}
        <div className="p-2 w-full sm:w-[30rem] lg:w-auto lg:flex-1">
          <label htmlFor="Subject" className="text-lg text-[#091057] flex pl-2">
            Subject:
          </label>
          <input
            type="text"
            id="Subject"
            name="Subject"
            className="w-full h-12 rounded-xl text-[#8b8585] border border-[#8b8585] transition-colors duration-200 ease-in-out outline-none py-2 px-3 focus:border-[#091057] shadow-xl"
            required
          />
        </div>
        </div>
        {/* Message Input */}
        <div className="py-10 flex justify-center w-full">
          <div className="w-full max-w-[60rem] px-4">
            <label htmlFor="message" className="text-lg text-[#091057] pl-2">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full h-36 min-h-[10rem] rounded-xl border border-[#8b8585] text-[#8b8585] transition-colors duration-200 ease-in-out outline-none py-2 px-3 focus:border-[#091057] resize-none shadow-2xl"
              required
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex mt-5 items-center justify-center w-full">
          <button
            style={{
              boxShadow: "0 8px 20px rgba(9, 16, 87, 0.35)",
            }}
            className="bg-[#091057] text-white w-auto px-6 py-3 rounded-xl hover:bg-[#8b8585] hover:text-[#091057]"
          >
            Send Message
          </button>
        </div>
      </form>
      {/* Form End */}
    </div>
  );
}
