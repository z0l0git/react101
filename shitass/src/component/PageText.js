import pageCss from "@/styles/pagetext.module.css";

const PageText = () => {
  return (
    <div className={pageCss.content}>
      <h2 className={pageCss.title}>facebook</h2>
      <p className={pageCss.text}>
        Connect with friends and the world around you on Facebook.
      </p>
    </div>
  );
};

export default PageText;
