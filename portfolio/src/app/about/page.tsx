"use client"
import Lottie from "lottie-react";
import aboutAnimation from '../../../aboutanimation.json';

export default function About() {
    return (
        <div>
            <div className="aboutMain">
                <div>
                    <h1 className="whoIam">About Me</h1>
                    <p className="mySkills">
                        Greetings, I&apos;m Muhammad Saif Tanoli, deeply engaged in learning web and app development. I&apos;ve built a strong foundation in front-end technologies and am now advancing my skills in the full MERN Stack. My passion lies in creating responsive, user-friendly digital experiences. As I continue to expand my expertise, I&apos;m eager to apply what I&apos;ve learned to real-world projects and drive innovation in web and app development.
                    </p>
                </div>
                <div>
                    <Lottie className="aboutAnimation" animationData={aboutAnimation} />
                </div>
            </div>
        </div>
    );
}