import HelloWorld from "@/component/HelloWorld";

const obj = {
  name: "shit",
  phone: "80052392",
};

export default function Home() {
  return (
    <div>
      <HelloWorld {...obj} />
    </div>
  );
}
