import C from "@/component/HelloWorld";
import Input from "@/component/Input";
import Button from "@/component/Button";
import Layout from "@/component/Layout";
import Container from "@/styles/container.module.css";
import PageText from "@/component/PageText";
import Link from "next/link";

export default function Home() {
  const loginBtn = {
    text: "Log In",
    bg: "#1a77f2",
    txtColor: "white",
    width: "90%",
    height: "50px",
    radius: "5px",
    fontSize: "20px",
  };
  const forgotBtn = {
    text: "Forgot password?",
    txtColor: "#1a77f2",
  };
  const createBtn = {
    text: "Create new account",
    txtColor: "white",
    bg: "#43b72a",
    width: "600%",
    height: "50px",
    radius: "5px",
  };

  return (
    <div className={Container.container}>
      <PageText></PageText>
      <Layout>
        <Input placeholder={"Email or phone number"} />
        <Input placeholder={"Password"} password={"password"}></Input>
        <Button {...loginBtn} />
        <Button {...forgotBtn} />
        <hr className={Container.line}></hr>
        <Link href="/modal" className={Container.btn}>
          <Button {...createBtn}></Button>
        </Link>
      </Layout>
    </div>
  );
}
