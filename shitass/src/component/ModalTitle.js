import titleCss from "@/styles/modaltitle.module.css";
import Link from "next/link";

const ModalTitle = ({ title }) => {
  return (
    <div className={titleCss.content}>
      <div>
        <h2 className={titleCss.title}>Sign up</h2>
        <p>It's quick and easy.</p>
      </div>
      <Link href="/">
        <p className={titleCss.X}>x</p>
      </Link>
    </div>
  );
};

export default ModalTitle;
