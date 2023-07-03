import style from './Skills.css'
import Tilt from 'react-parallax-tilt';
import { DiJavascript1, DiReact, DiNodejs, DiGit, DiMongodb, } from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiVisualstudiocode, SiVercel, SiWindows, SiNetlify } from "react-icons/si";
import { Slide, Bounce, Flip, Hinge, JackInTheBox, Roll, Rotate, Zoom } from "react-awesome-reveal";



const Skills = () => {
    return (
        <div className='mt-12'>
            <h4 className='text-4xl text-center primary-text font-semibold'>Skills</h4>

            <div className='text-white grid grid-cols-2 md:grid-cols-4 mt-4'>
                <Tilt>
                    <JackInTheBox className='tech-icons flex justify-center items-center'>
                        <DiJavascript1 />
                    </JackInTheBox>
                </Tilt>
                <Tilt>
                    <JackInTheBox className='tech-icons flex justify-center items-center'>
                        <DiReact />
                    </JackInTheBox>
                </Tilt>
                <Tilt>
                    <JackInTheBox className='tech-icons flex justify-center items-center'>
                        <DiNodejs />
                    </JackInTheBox>
                </Tilt>
                <Tilt>
                    <JackInTheBox  className='tech-icons flex justify-center items-center'>
                        <DiMongodb />
                    </JackInTheBox>
                </Tilt>
                <Tilt>
                    <JackInTheBox className='tech-icons flex justify-center items-center'>
                        <SiFirebase />
                    </JackInTheBox>
                </Tilt>
                <Tilt>
                    <JackInTheBox className='tech-icons flex justify-center items-center'>
                        <SiNextdotjs />
                    </JackInTheBox>
                </Tilt>
                <Tilt>
                    <JackInTheBox className='tech-icons flex justify-center items-center'>
                        <DiGit />
                    </JackInTheBox>
                </Tilt>
            </div>


            <h4 className='text-4xl text-white text-center font-semibold mt-16'><span className='primary-text font-semibold'>Tools</span> i use</h4>

            <div className='text-white grid grid-cols-2 md:grid-cols-4 mt-4'>
                <Tilt>
                    <JackInTheBox className='tech-icons flex justify-center items-center'>
                        <SiWindows />
                    </JackInTheBox>
                </Tilt>
                <Tilt>
                    <JackInTheBox className='tech-icons flex justify-center items-center'>
                        <SiVisualstudiocode />
                    </JackInTheBox>
                </Tilt>
                <Tilt>
                    <JackInTheBox className='tech-icons flex justify-center items-center'>
                        <SiVercel />
                    </JackInTheBox>
                </Tilt>
                <Tilt>
                    <JackInTheBox className='tech-icons flex justify-center items-center'>
                        <SiNetlify />
                    </JackInTheBox>
                </Tilt>
            </div>

        </div>
    );
};

export default Skills;