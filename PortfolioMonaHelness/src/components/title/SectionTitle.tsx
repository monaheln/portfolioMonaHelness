import "./SectionTitle.css";
import { useInView } from "framer-motion";
interface TitleProps {
    text?: React.ReactNode;
    forwardedRef: React.RefObject<HTMLDivElement>;
}

export const Sectiontitle = (props: TitleProps) => {
    const isInView = useInView(props.forwardedRef, { once: true });

    return (
        <h2
            ref={props.forwardedRef}
            className="section-title"
            style={{
                transform: isInView ? "none" : "translateX(-20px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}>
            {props.text}
        </h2>
    );
};
