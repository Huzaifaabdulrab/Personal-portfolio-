import { FaHtml5, FaCss3, FaJs, FaGithub, FaBootstrap, FaFigma ,FaReact} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
export default function SkillsArea() {
  return (
    <div id="Skills" className="flex flex-col w-full pb-20  mt-24 text-[1.2rem]">
      
    <hr />
    <hr />
    
      <h1 className="text-[#091057] font-bold text-4xl text-center pt-10 mt-14">Skills</h1>
      <div className="flex flex-wrap justify-center mt-16 ">
        {[{
          name: "HTML",
          icon: <FaHtml5 />,
          percentage: "90%",
          width: "90%", 
        }, {
          name: "CSS",
          icon: <FaCss3 />,
          percentage: "70%",
          width: "70%",
        }, {
          name: "JavaScript",
          icon: <FaJs />,
          percentage: "60%",
          width: "60%",
        }, {
          name: "TypeScript",
          icon: <BiLogoTypescript />,
          percentage: "80%",
          width: "80%",
        }, {
          name: "Tailwind CSS",
          icon: <FaHtml5 />,
          percentage: "60%",
          width: "60%",
        },
        {
            name : "Next.js",
            icon : <FaReact/>,
            percentage:"50%",
            width:"50%"
                }
,             {
          name: "GitHub",
          icon: <FaGithub />,
          percentage: "65%",
          width: "65%",
        }, {
          name: "Bootstrap",
          icon: <FaBootstrap />,
          percentage: "80%",
          width: "80%",
        }, {
          name: "UI & UX",
          icon: <FaFigma />,
          percentage: "50%",
          width: "50%",
        },
].map(({ name, icon, percentage, width }, index) => (
          <div key={index} className="flex flex-wrap items-center w-full sm:w-1/2 lg:w-2/4 px-7 mt-4">
            <p className="flex  ml-5 text-[#091057] font-bold flex-grow">
              {name} <span className="text-2xl pl-2">{icon}</span>
            </p>
            <span className="text-[#091057] font-bold ml-4">{percentage}</span>
            <div className="skills-box flex w-full h-3 rounded-xl bg-[#8b8585]  ml-4 shadow-lg"
            style={{  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3), 0 8px 20px rgba(0, 0, 0, 10)" }}
              >
              <div className={`rounded-xl bg-[#135e94]`} style={{ width }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
