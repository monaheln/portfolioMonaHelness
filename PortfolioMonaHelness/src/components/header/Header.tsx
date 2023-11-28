import "./Header.css";
import { useEffect, useRef, useState } from "react";
import { MenuIcon } from "../menuIcon/MenuIcon";

interface HeaderProps {
    aboutMeRef: React.RefObject<HTMLDivElement>;
    techRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    experienceRef: React.RefObject<HTMLDivElement>;
}

export const Header = (props: HeaderProps) => {
    const homeRef = useRef<HTMLDivElement>(null);
    const dropdown = useRef<HTMLUListElement>(null);
    const [isNavShowing, setIsNavShowing] = useState(false);

    const [contentHeight, setContentHeight] = useState("0px");

    function closeOnClick() {
        if (isNavShowing) {
            toggleNav();
        }
    }

    useOnClickOutside(homeRef, () => closeOnClick());

    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            var elementPosition = ref.current.offsetTop;
            var headerPx = homeRef.current?.offsetHeight as number;
            window.scrollTo({
                top: elementPosition - (headerPx + 20),
                behavior: "smooth",
            });
        }
        if (isNavShowing) {
            toggleNav();
        }
    };

    const toggleNav = () => {
        if (isNavShowing) {
            setContentHeight("0px");
        } else {
            if (dropdown !== undefined && homeRef !== undefined) {
                let headerPx = homeRef.current?.offsetHeight as number;
                let dropdownPx = dropdown.current?.scrollHeight as number;
                setContentHeight(headerPx + dropdownPx + 20 + "px");
            }
        }
        setIsNavShowing(!isNavShowing);
    };

    return (
        <div className="header" ref={homeRef}>
            <div
                className="title"
                onClick={(e) => {
                    scrollToRef(homeRef);
                }}>
                Portfolio
            </div>
            <ul className="navbar" ref={dropdown}>
                <div
                    className="nav"
                    onClick={(e) => {
                        scrollToRef(props.aboutMeRef);
                    }}>
                    About me
                </div>
                <div
                    className="nav"
                    onClick={(e) => {
                        scrollToRef(props.experienceRef);
                    }}>
                    Experience
                </div>
                {/* <div
                    className="nav"
                    onClick={(e) => {
                        scrollToRef(props.techRef);
                    }}>
                    Technology
                </div> */}
                {/* <div
                    className="nav"
                    onClick={(e) => {
                        scrollToRef(props.projectsRef);
                    }}>
                    Projects
                </div> */}
            </ul>

            <ul
                className="navbar-mobile"
                ref={dropdown}
                style={{
                    visibility: isNavShowing ? "visible" : "hidden",
                    maxHeight: contentHeight,
                }}>
                <div
                    className="nav"
                    onClick={(e) => {
                        scrollToRef(props.aboutMeRef);
                    }}>
                    About me
                </div>
                <div
                    className="nav"
                    onClick={(e) => {
                        scrollToRef(props.experienceRef);
                    }}>
                    Experience
                </div>
                {/* <div
                    className="nav"
                    onClick={(e) => {
                        scrollToRef(props.techRef);
                    }}>
                    Technology
                </div> */}
                {/* <div
                    className="nav"
                    onClick={(e) => {
                        scrollToRef(props.projectsRef);
                    }}>
                    Projects
                </div> */}
            </ul>
            <MenuIcon onClick={toggleNav} checked={isNavShowing} />
        </div>
    );
};

function useOnClickOutside(ref: any, handleOutsideClick: (event: Event) => any) {
    useEffect(() => {
        const listener = (event: Event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handleOutsideClick(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handleOutsideClick]);
}
