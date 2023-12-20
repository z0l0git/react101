import Input from "@/component/Input";
import Button from "@/component/Button";
import Layout from "@/component/Layout";
import modalCss from "@/styles/modalcontainer.module.css";
import PageText from "@/component/PageText";
import ModalTitle from "@/component/ModalTitle";
import MonthSelector from "@/component/MonthSelector";

export default function Modal() {
  const inputLong = {
    width: "90%",
  };
  const inputShort = {
    width: "48%",
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
        <Input placeholder={"Email or phone number"}></Input>
        <Input placeholder={"New Password"}></Input>
        <div className={modalCss.birthday}>
          <p>Birthday</p>
          <div className={modalCss.birthdaySelector}>
            <MonthSelector></MonthSelector>
            <MonthSelector></MonthSelector>
            <MonthSelector></MonthSelector>
          </div>
        </div>
        <div className={modalCss.birthday}>
          <p>Gender</p>
          <div className={modalCss.birthdaySelector}>
            <MonthSelector></MonthSelector>
            <MonthSelector></MonthSelector>
            <MonthSelector></MonthSelector>
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
      </div>
    </div>
  );
}
