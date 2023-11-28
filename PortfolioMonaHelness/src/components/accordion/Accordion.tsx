import { useRef, useState } from "react";
import "./Accordion.css";

interface AccordionProps {
    children?: React.ReactNode;
    year?: string;
    title?: string;
    isInView?: boolean;
    animationDelay?: number;
    onClick?: () => void;
    animatoionPixels: number;
}
export const Accordion = (props: AccordionProps) => {
    const [isActive, setIsActive] = useState(false);
    const [contentHeight, setContentHeight] = useState("0px");
    const content = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        if (isActive) {
            setContentHeight("0px");
        } else {
            if (content !== undefined) {
                setContentHeight(content.current?.scrollHeight + "px");
            }
        }
        setIsActive(!isActive);
    };

    return (
        <div
            className="accordion"
            style={{
                transform: props.isInView ? "none" : "translateX(" + props.animatoionPixels + "px)",
                opacity: props.isInView ? 1 : 0,
                transition: props.animationDelay
                    ? "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) " + props.animationDelay + "s"
                    : "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}>
            <div className="panel" onClick={toggleAccordion}>
                <div className="panel-text-container">
                    <div className="panel-title-container">
                        <div className="panel-title">{props.year} </div>
                        <div className="panel-line" />
                    </div>
                    <p
                        className="panel-content"
                        style={{
                            color: isActive ? "#c3927e" : "#ffff;",
                        }}>
                        {props.title}
                    </p>
                </div>
                <div
                    className="arrow"
                    style={{
                        transform: isActive ? "rotate(-180deg)" : "rotate(0deg)",
                    }}
                />
            </div>
            <div
                className="accordion-content"
                style={{
                    maxHeight: contentHeight,
                }}
                ref={content}>
                {props.children}
            </div>
        </div>
    );
};
