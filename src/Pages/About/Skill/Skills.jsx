import style from './Skills.css'
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiGit,
    DiMongodb,
} from "react-icons/di";
import {
    SiFirebase,
    SiNextdotjs,
    SiVisualstudiocode,
    SiVercel,
    SiWindows,
    SiNetlify
} from "react-icons/si";



const Skills = () => {
    return (
        <div className='mt-12'>
            <h4 className='text-4xl text-center primary-text font-semibold'>Skills</h4>

            <div className='text-white grid grid-cols-2 md:grid-cols-4 mt-4'>
                <span className='tech-icons flex justify-center items-center'>
                    <DiJavascript1 />
                </span>
                <span className='tech-icons flex justify-center items-center'>
                    <DiReact />
                </span>
                <span className='tech-icons flex justify-center items-center'>
                    <DiNodejs />
                </span>
                <span className='tech-icons flex justify-center items-center'>
                    <DiMongodb />
                </span>
                <span className='tech-icons flex justify-center items-center'>
                    <SiFirebase />
                </span>
                <span className='tech-icons flex justify-center items-center'>
                    <SiNextdotjs />
                </span>
                <span className='tech-icons flex justify-center items-center'>
                    <DiGit />
                </span>
            </div>


            <h4 className='text-4xl text-white text-center font-semibold mt-16'><span className='primary-text font-semibold'>Tools</span> i use</h4>

            <div className='text-white grid grid-cols-2 md:grid-cols-4 mt-4'>
                <span className='tech-icons flex justify-center items-center'>
                    <SiWindows />
                </span>
                <span className='tech-icons flex justify-center items-center'>
                    <SiVisualstudiocode />
                </span>
                <span className='tech-icons flex justify-center items-center'>
                    <SiVercel />
                </span>
                <span className='tech-icons flex justify-center items-center'>
                    <SiNetlify />
                </span>
            </div>

        </div>
    );
};

export default Skills;