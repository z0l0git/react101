import Input from "@/component/Input";
import Button from "@/component/Button";
import Layout from "@/component/Layout";
import Container from "@/styles/container.module.css";
import PageText from "@/component/PageText";
import ModalTitle from "@/component/ModalTitle";

export default function Modal() {
  return (
    <div className={Container.container}>
      <ModalTitle></ModalTitle>
    </div>
  );
}
