const Button = ({ text, color, children }) => {
    console.log(text);
    return (
        <button style={{ color: color }}>
            {text} - {color}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: "blue",
};

export default Button;
