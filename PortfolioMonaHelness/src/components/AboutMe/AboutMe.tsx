import { useInView } from "framer-motion";
import { useRef } from "react";
import "./AboutMe.css";

const ageText = "My name is Mona Helness and I am 21 years old.";
const educationText =
    "I am a third year student at Indøk NTNU, specializing " +
    "within Computer Science. Before switching I " +
    "studied two years of Computer Science, and had a one year study of Spanish language prior to this.";
const workText =
    "I was a summer intern at DNB Markets summer 2023, " +
    "and I was a part of a team that did stock analysis on the sector Industrials and Materials. " +
    "I currently work as a Fitness Instructor at Fresh Fitness.";

const hobbyText = "Apart from work and school, I am a board member at Abakus Linjeforening where I am in charge of daily operations.  ";

export const AboutMe = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div
            ref={ref}
            className="about-me"
            style={{
                transform: isInView ? "none" : "translateX(-20px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}>
            <p className="about-text">{ageText}</p>
            <p className="about-text">{educationText}</p>
            <p className="about-text">{workText}</p>
            <p className="about-text">{hobbyText}</p>
        </div>
    );
};
