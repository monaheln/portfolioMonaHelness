import "./Layout.css";
import stack from "../../assets/stack.png";

interface LayoutProps {
    children?: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
    return (
        <section className="layout-container">
            <div className="layout">{props.children}</div>
            <div className="stack-container">
                <img className="stack" src={stack} alt={"stack"} />
            </div>
        </section>
    );
};
