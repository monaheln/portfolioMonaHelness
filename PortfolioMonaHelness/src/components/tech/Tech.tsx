import "./Tech.css";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import htmlIcon from "../../assets/html5.svg";
import python from "../../assets/python.svg";
import { WebTech } from "./WebTech";
import { SoftwareTech } from "./SoftwareTech";
import { techText } from "./TechText";

export const Tech = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [currentTab, setCurrentTab] = useState<number>(0);
    const [currentIcon, setCurrentIcon] = useState<string>(htmlIcon);
    const [currentTitle, setCurrentTitle] = useState<string>(techText.html[0]);
    const [currentText, setCurrentText] = useState<string>(techText.html[1]);

    function changeTab(tab: number) {
        if (tab === 0) {
            handleIconChange(htmlIcon, "html");
            setCurrentTitle(techText.html[0]);
            setCurrentText(techText.html[1]);
        } else {
            handleIconChange(python, "python");
            setCurrentTitle(techText.python[0]);
            setCurrentText(techText.python[1]);
        }
        setCurrentTab(tab);
    }

    function handleIconChange(icon: string, textKey: string) {
        try {
            if (Object.keys(techText).includes(textKey)) {
                setCurrentIcon(icon);
                let values = Object.values(techText);
                let keys = Object.keys(techText);
                let index = keys.indexOf(textKey);
                setCurrentTitle(values[index][0]);
                setCurrentText(values[index][1]);
            } else {
                throw new Error("Error: " + textKey + " not found in TechText.tsx");
            }
        } catch (e: any) {
            console.error(e.message);
        }
    }

    return (
        <>
            <div
                ref={ref}
                id="tech-container"
                style={{
                    transform: isInView ? "none" : "translateX(-20px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
                }}>
                <div id="selector-tab">
                    <div
                        className="tech-tab"
                        style={
                            currentTab === 0
                                ? {
                                      background: "linear-gradient(45deg, #dcd3c8, #a48364, #905f31)",
                                  }
                                : {}
                        }
                        onClick={() => changeTab(0)}>
                        Web
                    </div>
                    <div
                        className="tech-tab"
                        style={
                            currentTab === 1
                                ? {
                                      background: "linear-gradient(45deg, #dcd3c8, #a48364, #905f31)",
                                  }
                                : {}
                        }
                        onClick={() => changeTab(1)}>
                        Software
                    </div>
                </div>

                <div className="main-icon-container">
                    <div id="icon-container">
                        <img className="main-icon" src={currentIcon} alt="html icon" />
                        <h2 className="main-icon-title">{currentTitle}</h2>
                    </div>
                    <p className="main-icon-text">{currentText}</p>
                </div>
                <WebTech isVisable={currentTab === 1 ? false : true} handleIconChange={handleIconChange} />
                <SoftwareTech isVisable={currentTab === 1 ? true : false} handleIconChange={handleIconChange} />
            </div>
        </>
    );
};
