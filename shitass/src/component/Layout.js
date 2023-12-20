import layoutCss from "@/styles/layout.module.css";

const Layout = (props) => {
  return <div className={layoutCss.layout}>{props.children}</div>;
};

export default Layout;
