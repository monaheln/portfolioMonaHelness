import { useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion } from "../accordion/Accordion";
import "./Experience.css";

export const Experience = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="experiences" ref={ref}>
            <div className="entries">
                <div className="entry">
                    <Accordion
                        year="2023-2026"
                        title="Industrial Economics and Technology Leadership"
                        isInView={isInView}
                        animationDelay={1.4}
                        animatoionPixels={-20}>
                        <p>
                            Student at Indøk NTNU, Trondheim. Specialization within Computer Science. Planned graduation spring 2026.
                        </p>
                    </Accordion>
                </div>

                <div className="entry">
                    <Accordion
                        year="2023-2024"
                        title="Board of Directors - Abakus Linjeforening"
                        isInView={isInView}
                        animationDelay={2}
                        animatoionPixels={20}>
                        <p>
                        In charge of daily operations, with responsibility for communication with companies and sponsors.
                        </p>
                    </Accordion>
                </div>
                <div className="entry">
                    <Accordion
                        year="2021-2023"
                        title="Computer Science"
                        isInView={isInView}
                        animationDelay={1.8}
                        animatoionPixels={-20}>
                        <p>
                            Student at NTNU, Trondhiem. Computer Science, integrated Masters program. 
                        </p>
                    </Accordion>
                </div>
                <div className="entry">
                    <Accordion
                        year="2023"
                        title="Summer intern DNB Markets"
                        isInView={isInView}
                        animationDelay={1.6}
                        animatoionPixels={20}>
                        <p>
                        Worked as an Stock Analyst Intern, within the sectors Industrials and Materials.
                        </p>
                    </Accordion>
                </div>
                <div className="entry">
                    <Accordion
                        year="2016-2020"
                        title="Elvebakken Videregående Skole"
                        isInView={isInView}
                        animationDelay={2.4}
                        animatoionPixels={20}>
                        <p>
                        Specialization within science. 
                        </p>
                    </Accordion>
                </div>
                <div className="entry">
                    <Accordion
                        year="2015-2020"
                        title="Swimming Instructor"
                        isInView={isInView}
                        animationDelay={2.6}
                        animatoionPixels={-20}>
                        <p>
                            Instructor at Lambertseter Svømmeklubb, Oslo
                        </p>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};
