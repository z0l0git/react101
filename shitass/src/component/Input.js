import inputCss from "@/styles/input.module.css";

const Input = (props) => {
  const { placeholder, password = "", width = "" } = props;
  return (
    <input
      placeholder={placeholder}
      type={password}
      className={inputCss.input}
      style={{ width: width }}
    ></input>
  );
};

export default Input;
