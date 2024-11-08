import { FaHtml5, FaCss3, FaJs, FaGithub,FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
export default function ServicesSection() {
    const services = [
        {
          title: "Frontend Development",
          description:
            "Utilizing HTML, CSS, and JavaScript to craft responsive and visually engaging web interfaces, ensuring optimal user experiences across all devices.",
          icon: <FaHtml5 className="text-[#091057] text-4xl mb-4" />,
        },
        {
          title: "CSS Frameworks",
          description:
            "Leveraging frameworks like Tailwind CSS and Bootstrap to create beautiful, responsive layouts with minimal effort.",
          icon: <FaCss3 className="text-[#091057] text-4xl mb-4" />,
        },
        {
          title: "JavaScript Development",
          description:
            "Developing dynamic web applications using JavaScript, enhancing interactivity and user engagement.",
          icon: <FaJs className="text-[#091057] text-4xl mb-4" />,
        },
        {
          title: "TypeScript Development",
          description:
            "Building robust applications with TypeScript for enhanced code quality and maintainability.",
          icon: <BiLogoTypescript className="text-[#091057] text-4xl mb-4" />,
        },
        {
          title: "Next.js Development",
          description:
            "Creating high-performance web applications with Next.js, focusing on server-side rendering and static site generation.",
          icon: <FaReact className="text-[#091057] text-4xl mb-4" />,
        },
        {
            title: "Version Control with GitHub",
            description:
              "Utilizing Git and GitHub for efficient version control and collaboration in software development, ensuring smooth workflow and code management.",
            icon: <FaGithub className="text-[#091057] text-4xl mb-4" />,
        },
    ];
      
    return (
        <>
            <h1 id="Service" className="text-[#091057] font-bold text-4xl text-center pt-10 mt-14">Our Service</h1>
            <div className="flex flex-wrap py-10 px-20 justify-center gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-[#e8e6e6]  shadow-xl border border-gray-300 rounded-lg p-6 w-80 flex flex-col items-center text-center"
                    >
                        <div className="text-[#091057] mb-4">{service.icon}</div>
                        <h3 className="text-2xl font-bold text-[#8b8585]">{service.title}</h3>
                        <p className="mt-4 text-[#353333] font-semibold">{service.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
