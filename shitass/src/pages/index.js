import C from "@/component/HelloWorld";
import Input from "@/component/Input";
import Button from "@/component/Button";
import Layout from "@/component/Layout";
import Container from "@/styles/container.module.css";
import PageText from "@/component/PageText";
import Link from "next/link";
import Image from "next/image";
import buttonCss from "@/styles/button.module.css";
import igCss from "@/styles/instacon.module.css";
import InstaButton from "@/component/InstaButton";

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
    width: "700%",
    height: "50px",
    radius: "5px",
    fontSize: "15px",
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={Container.container}>
      <PageText></PageText>
      <Layout>
        <Input placeholder={"Email or phone number"} onChange={handleChange} />
        <Input placeholder={"Password"} password={"password"}></Input>
        <Button {...loginBtn} />
        <Button {...forgotBtn} />
        <hr className={Container.line}></hr>
        <Link href="/modal" className={buttonCss.button}>
          <Button {...createBtn}></Button>
        </Link>
      </Layout>
    </div>
  );
}

// const coms = [
//   { component: "InstaButton", params: { imgsrc: "/home.png", text: "Home" } },
//   {
//     component: "InstaButton",
//     params: { imgsrc: "/search.png", text: "Search" },
//   },
//   {
//     component: "InstaButton",
//     params: { imgsrc: "/compass.png", text: "Explore" },
//   },
//   { component: "InstaButton", params: { imgsrc: "/reels.png", text: "Reels" } },
//   {
//     component: "InstaButton",
//     params: { imgsrc: "/msngr.png", text: "Messenger" },
//   },
//   {
//     component: "InstaButton",
//     params: { imgsrc: "/heart.png", text: "Notifications" },
//   },
//   { component: "InstaButton", params: { imgsrc: "/add.png", text: "Create" } },

//   {
//     component: "InstaButton",
//     params: { imgsrc: "/profile.png", text: "Profile" },
//   },
// ];

// const compToRender = [
//   {
//     component: "InstaButton",
//     params: { imgsrc: "/at.png", text: "Threads" },
//   },
//   {
//     component: "InstaButton",
//     params: { imgsrc: "/menu.png", text: "More" },
//   },
// ];

// export default function Home() {
//   return (
//     <div className={igCss.container}>
//       <div>
//         <Image src="/iglogo.svg" width={100} height={100} alt="logo" />
//       </div>
//       <div className={igCss.middle}>
//         {coms.map((com, i) => {
//           return (
//             <InstaButton
//               key={i}
//               imgsrc={com.params.imgsrc}
//               text={com.params.text}
//             />
//           );
//         })}
//       </div>
//       <div className={igCss.bottom}>
//         {compToRender.map(({ component, params }, i) => {
//           return (
//             <InstaButton key={i} imgsrc={params.imgsrc} text={params.text} />
//           );
//         })}
//       </div>
//     </div>
//   );
