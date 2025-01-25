"use client"

import Image from "next/image"
import htmlLog from "../../public/HTML5_logo_and_wordmark.svg.png"
import cssLogo from "../../public/Csslog.png"
import jslogo from "../../public/javasctiptlogo.webp"
import nestjsLogo from "../../public/Nextjslogo.svg"
import reactLogo from "../../public/Reactjslogo.png"
import tallwindLogo from "../../public/tallwindLof.png"

export default function Skills() {
    return (
        <div>
            <div className="skillsMain">
                <h1 className="whatIdo">What I do _________________________________________</h1>
                <div className="SkillsInnerDev">
                    <div>
                        <p className="mySkills">
                            I have a grasp of WordPress and am currently learning the MERN Stack to broaden my skills. I approach each project with dedication, always aiming to deliver creative and precise solutions.
                        </p>
                        <p className="mySkills">
                            I&apos;m eager to tackle challenging projects that let me apply my knowledge and grow as a developer. If you need a dedicated front-end expert or someone who&apos;s quickly mastering full-stack development, let&apos;s connect!
                        </p>
                        <div className="skillsAnimation">
                            <div className="skillsIcon">
                                <Image src={htmlLog} width={50} height={50} alt="html" className="skillsImages" />
                                <h1>HTML5</h1>
                            </div>
                            <div className="skillsIcon">
                                <Image src={cssLogo} width={50} height={50} alt="css3" className="skillsImages" />
                                <h1>CSS3</h1>
                            </div>
                            <div className="skillsIcon">
                                <Image src={jslogo} width={50} height={50} alt="JavaScript" className="skillsImages" />
                                <h1>JavaScript</h1>
                            </div>
                            <div className="skillsIcon">
                                <Image src={nestjsLogo} width={50} height={50} alt="Next.js" className="skillsImages" />
                                <h1>Next.js</h1>
                            </div>
                            <div className="skillsIcon">
                                <Image src={reactLogo} width={50} height={50} alt="React.js" className="skillsImages" />
                                <h1>React.js</h1>
                            </div>
                            <div className="skillsIcon">
                                <Image src={tallwindLogo} width={50} height={50} alt="Tailwind CSS" className="skillsImages" />
                                <h1>Tailwind CSS</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}