import inputCss from "@/styles/input.module.css";

const Input = (props) => {
  const { placeholder, password = "", width = "", bg = "" } = props;
  return (
    <input
      placeholder={placeholder}
      type={password}
      className={inputCss.input}
      style={{ width: width, background: bg }}
    ></input>
  );
};

export default Input;
