import "./Projects.css";
import rojo from "../../assets/rojo.png";
import aStar from "../../assets/aStar.png";
import bachelor from "../../assets/bachelor.png";

import github from "../../assets/github.svg";
import { useRef } from "react";
import { useInView } from "framer-motion";

const rojoText =
    "This is a hobby project where I have created some commonly used " +
    "react components. The goal of the project was to learn more about React and to " +
    "create reusable components that I could use for the future.";
const aStarText =
    "An A-star pathfinding algorithm. The algorithm navigates the Studentersamfund " +
    "to find your friend in one of the rooms. This project is from the Introduction " +
    "to artifical intelligence course TDT4136.";

const bachelorText =
    "This project was created as a Bachelor Thesis at Norwegian University of Science " +
    "and Technology in Ålesund. The aim of the project was to give patients with ALS a way " +
    "to perform simple tasks and communicate with the people around them using the Emotiv Epoc X Headset";

export const Projects = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="project-container">
            <div
                className="project"
                style={{
                    transform: isInView ? "none" : "translateX(-20px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
                }}>
                <img className="project-image" src={rojo} alt="rojo component library" />
                <div className="project-content-container">
                    <h2 className="project-title">Rojo component library</h2>
                    <p className="project-text">{rojoText}</p>
                    <a
                        href="https://github.com/rojahno/Rojos"
                        target="_blank"
                        rel="noreferrer"
                        className="gihub-button">
                        <img className="github-icon" src={github} alt="github icon" />
                        View project
                    </a>
                </div>
            </div>

            <div
                className="project"
                style={{
                    transform: isInView ? "none" : "translateX(20px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
                }}>
                <img className="project-image" src={aStar} alt="a star algorithm" />
                <div className="project-content-container">
                    <h2 className="project-title">A-star algorithm</h2>
                    <p className="project-text">{aStarText}</p>
                    <a
                        href="https://github.com/rojahno/a-star-pathfinding"
                        target="_blank"
                        rel="noreferrer"
                        className="gihub-button">
                        <img className="github-icon" src={github} alt="github icon" />
                        {"View project"}
                    </a>
                </div>
            </div>

            <div
                className="project"
                style={{
                    transform: isInView ? "none" : "translateX(-20px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
                }}>
                <img className="project-image" src={bachelor} alt="bachelor raport cover" />
                <div className="project-content-container">
                    <h2 className="project-title">EEG for ALS Bachelor Thesis</h2>
                    <p className="project-text">{bachelorText}</p>
                    <a
                        href="https://github.com/rojahno/Enabled-desktop"
                        target="_blank"
                        rel="noreferrer"
                        className="gihub-button">
                        <img className="github-icon" src={github} alt="github icon" />
                        {"View project"}
                    </a>
                </div>
            </div>
        </div>
    );
};
