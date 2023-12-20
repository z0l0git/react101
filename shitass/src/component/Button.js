import buttonCss from "@/styles/button.module.css";
const Button = (props) => {
  const {
    text,
    bg = "",
    txtColor = "",
    width = "",
    height = "",
    radius = "",
    fontSize = "",
  } = props;
  return (
    <button
      className={buttonCss.button}
      style={{
        backgroundColor: bg,
        color: txtColor,
        width: width,
        height: height,
        borderRadius: radius,
        fontSize: fontSize,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
