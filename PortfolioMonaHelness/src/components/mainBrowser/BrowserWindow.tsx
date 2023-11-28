import "./BrowserWindow.css";
interface MainBrowserProps {
    children?: React.ReactNode;
    backgroundColor?: string;
    circleColor?: string;
}

export const BrowserWindow = (props: MainBrowserProps) => {
    return (
        <div className="main-browser" style={{ backgroundColor: props.backgroundColor }}>
            <div className="icon-window">
                <div className="icons">
                    <Circle circleColor={props.circleColor} />
                    <Circle circleColor={props.circleColor} />
                    <Circle circleColor={props.circleColor} />
                </div>
            </div>
            <div className="content-window">{props.children}</div>
        </div>
    );
};

interface CircleProps {
    circleColor?: string;
}
const Circle = (props: CircleProps) => {
    return (
        <div
            className="icon-circle"
            style={{
                backgroundColor: props.circleColor,
            }}></div>
    );
};
