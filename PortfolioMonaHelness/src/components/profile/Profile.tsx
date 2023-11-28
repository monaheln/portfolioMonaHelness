import "./Profile.css";
import linkedIn from "../../assets/linkedin.svg";
import gituhb from "../../assets/github.svg";
import profilePicture from "../../assets/profile_picture.jpeg"; 
import { useEffect, useRef, useState } from "react";

const profileText = "Industrial Economics and Technology Leadership student at NTNU in Trondheim, Norway.";

export const Profile = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const name = "MONA";
    const nameRef = useRef<HTMLHeadingElement>(null);
    const [nameText, setNameText] = useState(name);

    useEffect(() => {
        let iteration = 0;
        function scrambledName() {
            let newName = nameText
                .split("")
                .map((_letter, index) => {
                    if (index < iteration) {
                        return name[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");
            iteration += 1 / 4;
            return newName;
        }

        function beginScrambling() {
            let interval = setInterval(() => {
                if (nameRef.current) {
                    let newName = scrambledName();
                    if (iteration === name.length) {
                        clearInterval(interval);
                    }
                    setNameText(newName);
                }
            }, 30);
            return () => clearInterval(interval);
        }

        let beginInterval = setInterval(() => {
            beginScrambling();
            clearInterval(beginInterval);
        }, 2000);
        return () => clearInterval(beginInterval);
        // eslint-disable-next-line
    }, []);

    return (
        <div id="profile">
            <div id="profile-container">
                <div id="img-container">
                    <img id="profile-image" src={profilePicture} alt="" />
                    <h2 id="profile-name" ref={nameRef}>
                        HELLO,
                        <br />
                        IM {nameText}
                    </h2>
                </div>
                <p id="text-container">{profileText}</p>
                <div id="button-container">
                    <a
                        href="https://www.linkedin.com/in/mona-helness-a70702250/"
                        target="_blank"
                        rel="noreferrer">
                        <img src={linkedIn} id="profile-button" alt="linkedin" />
                    </a>
                    <a href="https://github.com/monaheln" target="_blank" rel="noreferrer">
                        <img src={gituhb} id="profile-button" alt="github" />
                    </a>
                </div>
            </div>
        </div>
    );
};
