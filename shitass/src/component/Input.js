import inputCss from "@/styles/input.module.css";

const Input = (props) => {
  const { placeholder, password = "" } = props;
  return (
    <input
      placeholder={placeholder}
      type={password}
      className={inputCss.input}
    ></input>
  );
};

export default Input;
