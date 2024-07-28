const Button = ({ text, color, children }) => {
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };

    return (
        <button
            onClick={onClickButton}
            // onMouseEnter={onClickButton}
        >
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: "blue",
};

export default Button;
