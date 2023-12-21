import igbtnCss from "@/styles/instabtn.module.css";
import Image from "next/image";

const InstaButton = (props) => {
  const { imgsrc = "", text } = props;
  return (
    <div className={igbtnCss.button}>
      <Image src={imgsrc} width={30} height={30} alt="logo"></Image>
      <p>{text}</p>
    </div>
  );
};
export default InstaButton;
