import titleCss from "@/styles/modaltitle.module.css";

const ModalTitle = ({ title }) => {
  return (
    <div className={titleCss.content}>
      <h2 className={titleCss.title}>Sign up</h2>
      <p>It's quick and easy.</p>
    </div>
  );
};

export default ModalTitle;
