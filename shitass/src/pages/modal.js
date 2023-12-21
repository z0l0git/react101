import Input from "@/component/Input";
import Button from "@/component/Button";
import RadioButton from "@/component/RadioButton";
import modalCss from "@/styles/modalcontainer.module.css";
import YearSelector from "@/component/YearSelector";
import ModalTitle from "@/component/ModalTitle";
import MonthSelector from "@/component/MonthSelector";
import DatSelector from "@/component/DatSelector";

export default function Modal() {
  const inputLong = {
    width: "100%",
    bg: "#f0f2f5",
  };
  const inputShort = {
    width: "60%",
    bg: "#f0f2f5",
  };
  const createBtn = {
    text: "Sign Up",
    txtColor: "white",
    bg: "#01a401",
    width: "47%",
    height: "37px",
    radius: "5px",
    fontSize: "18px",
  };

  return (
    <div className={modalCss.container}>
      <div className={modalCss.content}>
        <ModalTitle></ModalTitle>
        <hr className={modalCss.line}></hr>
        <div className={modalCss.flex}>
          <Input {...inputShort} placeholder={"First Name"}></Input>
          <Input {...inputShort} placeholder={"Last Name"}></Input>
        </div>
        <Input {...inputLong} placeholder={"Email or phone number"}></Input>
        <Input
          {...inputLong}
          placeholder={"New Password"}
          password={"password"}
        ></Input>
        <div className={modalCss.birthday}>
          <p className={modalCss.btext}>Birthday</p>
          <div className={modalCss.birthdaySelector}>
            <MonthSelector></MonthSelector>
            <DatSelector></DatSelector>
            <YearSelector></YearSelector>
          </div>
        </div>
        <div className={modalCss.birthday}>
          <p className={modalCss.btext}>Gender</p>
          <div className={modalCss.birthdaySelector}>
            <RadioButton text={"Male"}></RadioButton>
            <RadioButton text={"Female"}></RadioButton>
            <RadioButton text={"Custom"}></RadioButton>
          </div>
        </div>
        <p className={modalCss.smalltext}>
          People who use our service may have uploaded your contact information
          to Facebook. Learn more.
        </p>
        <p className={modalCss.smalltext}>
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy. You may receive SMS Notifications from us and can opt
          out any time.
        </p>
        <div className={modalCss.flexcenter}>
          <Button {...createBtn}></Button>
        </div>
      </div>
    </div>
  );
}
