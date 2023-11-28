import "./MenuIcon.css";

interface MenuIconProps {
    onClick?: () => void;
    checked?: boolean;
}

export const MenuIcon = (props: MenuIconProps) => {
    return (
        <>
            <input id="toggle" type="checkbox" checked={props.checked} readOnly={true} />
            <label htmlFor="toggle" className="hamburger" onClick={props.onClick}>
                <div className="top-bun"></div>
                <div className="meat"></div>
                <div className="bottom-bun"></div>
            </label>
        </>
    );
};
