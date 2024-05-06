import { DiJavascript1, DiMongodb, DiNodejs, DiReact } from "react-icons/di";
import {
  SiAntdesign,
  SiExpress,
  SiFramer,
  SiGithub,
  SiJsonwebtokens,
  SiMaterialdesign,
  SiMongoose,
  SiNetlify,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import SkillsTiles from "../../../components/ui/SkillsTiles/Skills";

const technologies = [
  { icon: <DiJavascript1 size={50} />, title: "JavaScript" },
  { icon: <SiTypescript size={50} />, title: "TypeScript" },
  { icon: <DiReact size={50} />, title: "React" },
  { icon: <SiNextdotjs size={50} />, title: "Next.js" },
  { icon: <SiFramer size={50} />, title: "Framer motion" },
  { icon: <SiRedux size={50} />, title: "Redux" },
  { icon: <SiJsonwebtokens size={50} />, title: "JWT" },
  { icon: <DiNodejs size={50} />, title: "NodeJs" },
  { icon: <SiExpress size={50} />, title: "Express" },
  { icon: <DiMongodb size={50} />, title: "MongoDB" },
  { icon: <SiMongoose size={50} />, title: "Mongoose" },
  { icon: <SiTailwindcss size={50} />, title: "Tailwind" },
  { icon: <SiMaterialdesign size={50} />, title: "Material ui" },
  { icon: <SiAntdesign size={50} />, title: "Ant design" },
];

const tools = [
  { icon: <SiVisualstudiocode size={50} />, title: "VS code" },
  { icon: <SiGithub size={50} />, title: "GitHub" },
  { icon: <SiVercel size={50} />, title: "Vercel" },
  { icon: <SiNetlify size={50} />, title: "Netlify" },
];

const Skills = () => {
  return (
    <div className="mt-12">
      <h4 className="text-4xl text-center primary-text font-semibold">
        Skills
      </h4>

      <div className="text-white grid grid-cols-3 md:grid-cols-5 mt-4">
        {technologies.map((tech, index) => (
          <SkillsTiles key={index} icon={tech.icon} title={tech.title} />
        ))}
      </div>

      <h4 className="text-4xl text-white text-center font-semibold mt-16">
        <span className="primary-text font-semibold">Tools</span> i use
      </h4>

      <div className="text-white grid grid-cols-3 md:grid-cols-5 mt-4">
        {tools.map((tech, index) => (
          <SkillsTiles key={index} icon={tech.icon} title={tech.title} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
