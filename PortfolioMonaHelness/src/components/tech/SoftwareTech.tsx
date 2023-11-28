import javaIcon from "../../assets/java.svg";
import postsqlIcon from "../../assets/pgsql.svg";
import python from "../../assets/python.svg";
import csharp from "../../assets/csharp.svg";
import kotlin from "../../assets/kotlin.svg";
import gitIcon from "../../assets/gitIcon.svg";
import intellijIcon from "../../assets/intellijIcon.svg";
import vscodeIcon from "../../assets/vscodeIcon.svg";
import pycharmIcon from "../../assets/pycharmIcon.svg";
import androidIcon from "../../assets/androidIcon.svg";
import dockerICon from "../../assets/docker.svg";
import unityIcon from "../../assets/unityIcon.svg";

interface IconProps {
    handleIconChange: (icon: string, string: string) => void;
    isVisable: boolean;
}

export const SoftwareTech = (props: IconProps) => {
    return (
        <div
            style={
                props.isVisable
                    ? {
                          display: "block",
                          width: "100%",
                      }
                    : { display: "none" }
            }>
            <div id="tech">
                <img
                    className="tech-icon"
                    src={python}
                    alt="python icon"
                    onClick={(e) => {
                        props.handleIconChange(python, "python");
                    }}
                />
                <img
                    className="tech-icon"
                    src={javaIcon}
                    alt="python icon"
                    onClick={(e) => {
                        props.handleIconChange(javaIcon, "java");
                    }}
                />
                <img
                    className="tech-icon"
                    src={postsqlIcon}
                    alt="python icon"
                    onClick={(e) => {
                        props.handleIconChange(postsqlIcon, "postgresql");
                    }}
                />
                <img
                    className="tech-icon"
                    src={csharp}
                    alt="python icon"
                    onClick={(e) => {
                        props.handleIconChange(csharp, "cSharp");
                    }}
                />
                <img
                    className="tech-icon"
                    src={kotlin}
                    alt="python icon"
                    onClick={(e) => {
                        props.handleIconChange(kotlin, "kotlin");
                    }}
                />

                <img
                    className="tech-icon"
                    src={gitIcon}
                    alt="python icon"
                    onClick={(e) => {
                        props.handleIconChange(gitIcon, "git");
                    }}
                />
                <img
                    className="tech-icon"
                    src={intellijIcon}
                    alt="python icon"
                    onClick={(e) => {
                        props.handleIconChange(intellijIcon, "intellij");
                    }}
                />
                <img
                    className="tech-icon"
                    src={vscodeIcon}
                    alt="python icon"
                    onClick={(e) => {
                        props.handleIconChange(vscodeIcon, "vscode");
                    }}
                />
                <img
                    className="tech-icon"
                    src={pycharmIcon}
                    alt="python icon"
                    onClick={(e) => {
                        props.handleIconChange(pycharmIcon, "pycharm");
                    }}
                />
                <img
                    className="tech-icon"
                    src={androidIcon}
                    alt="python icon"
                    onClick={(e) => {
                        props.handleIconChange(androidIcon, "androidStudio");
                    }}
                />
                <img
                    className="tech-icon"
                    src={dockerICon}
                    alt="python icon"
                    onClick={(e) => {
                        props.handleIconChange(dockerICon, "docker");
                    }}
                />
                <img
                    className="tech-icon"
                    src={unityIcon}
                    alt="python icon"
                    onClick={(e) => {
                        props.handleIconChange(unityIcon, "unity");
                    }}
                />
            </div>
        </div>
    );
};
