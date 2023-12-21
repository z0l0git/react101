import radioCss from "@/styles/month.module.css";

const RadioButton = (props) => {
  const { text } = props;
  return (
    <label htmlFor={`gender-radio-${text}`} className={radioCss.gender}>
      <p>{text}</p>
      <input type="radio" id={`gender-radio-${text}`} name="gender" />
    </label>
  );
};

export default RadioButton;
