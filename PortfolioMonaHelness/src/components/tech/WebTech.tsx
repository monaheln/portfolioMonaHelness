import cssIcon from "../../assets/css3.svg";
import htmlIcon from "../../assets/html5.svg";
import jsIcon from "../../assets/javascript.svg";
import reactIcon from "../../assets/reactjs.svg";
import typescriptIcon from "../../assets/typescript.svg";
import d3Icon from "../../assets/d3Icon.svg";
import vueIcon from "../../assets/vueIcon.svg";
import flutterIcon from "../../assets/flutterIcon.svg";
import nodeIcon from "../../assets/nodeIcon.svg";
import prettierIcon from "../../assets/prettierIcon.svg";
import jestIcon from "../../assets/jestIcon.svg";
import electronIcon from "../../assets/electronIcon.svg";

interface IconProps {
    handleIconChange: (icon: string, string: string) => void;
    isVisable: boolean;
}

export const WebTech = (props: IconProps) => {
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
                    src={htmlIcon}
                    alt="html icon"
                    onClick={(e) => {
                        props.handleIconChange(htmlIcon, "html");
                    }}
                />
                <img
                    className="tech-icon"
                    src={cssIcon}
                    alt="css icon"
                    onClick={(e) => {
                        props.handleIconChange(cssIcon, "css");
                    }}
                />
                <img
                    className="tech-icon"
                    src={typescriptIcon}
                    alt="typescript icon"
                    onClick={(e) => {
                        props.handleIconChange(typescriptIcon, "ts");
                    }}
                />
                <img
                    className="tech-icon"
                    src={jsIcon}
                    alt="js icon"
                    onClick={(e) => {
                        props.handleIconChange(jsIcon, "js");
                    }}
                />
                <img
                    className="tech-icon"
                    src={reactIcon}
                    alt="react icon"
                    onClick={(e) => {
                        props.handleIconChange(reactIcon, "react");
                    }}
                />
                <img
                    className="tech-icon"
                    src={d3Icon}
                    alt="python icon"
                    onClick={(e) => {
                        props.handleIconChange(d3Icon, "d3");
                    }}
                />
                <img
                    className="tech-icon"
                    src={vueIcon}
                    alt="java icon"
                    onClick={(e) => {
                        props.handleIconChange(vueIcon, "vue");
                    }}
                />
                <img
                    className="tech-icon"
                    src={flutterIcon}
                    alt="postsql icon"
                    onClick={(e) => {
                        props.handleIconChange(flutterIcon, "flutter");
                    }}
                />
                <img
                    className="tech-icon"
                    src={nodeIcon}
                    alt="docker icon"
                    onClick={(e) => {
                        props.handleIconChange(nodeIcon, "node");
                    }}
                />
                <img
                    className="tech-icon"
                    src={prettierIcon}
                    alt="docker icon"
                    onClick={(e) => {
                        props.handleIconChange(prettierIcon, "prettier");
                    }}
                />
                <img
                    className="tech-icon"
                    src={jestIcon}
                    alt="docker icon"
                    onClick={(e) => {
                        props.handleIconChange(jestIcon, "jest");
                    }}
                />
                <img
                    className="tech-icon"
                    src={electronIcon}
                    alt="docker icon"
                    onClick={(e) => {
                        props.handleIconChange(electronIcon, "electron");
                    }}
                />
            </div>
        </div>
    );
};
