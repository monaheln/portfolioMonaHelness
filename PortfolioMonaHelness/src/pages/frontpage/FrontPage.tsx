import { useRef } from "react";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Experience } from "../../components/experience/Experience";
import { Header } from "../../components/header/Header";
import { Layout } from "../../components/layout/Layout";
import { Profile } from "../../components/profile/Profile";
import { Projects } from "../../components/projects/Projects";
import { Tech } from "../../components/tech/Tech";
import { Sectiontitle } from "../../components/title/SectionTitle";
import "./FrontPage.css";

export const FrontPage = () => {
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const techRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);

    return (
        <div className="frontpage">
            <Layout>
                <Header
                    aboutMeRef={aboutMeRef}
                    projectsRef={projectsRef}
                    techRef={techRef}
                    experienceRef={experienceRef}
                />
                <Profile />
            </Layout>

            <Layout>
                <Sectiontitle forwardedRef={aboutMeRef} text={"About Me"} />
                <AboutMe />
            </Layout>

            <Layout>
                <Sectiontitle forwardedRef={experienceRef} text={"Experience"} />
                <Experience />
            </Layout>

            {/* <Layout>
                <Sectiontitle forwardedRef={techRef} text={"Technology"} />
                <Tech />
            </Layout> */}

            {/* <Layout>
                <Sectiontitle forwardedRef={projectsRef} text={"Projects"} />
                <Projects />
            </Layout> */}
        </div>
    );
};
