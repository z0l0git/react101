const HelloWorld = (props) => {
  const { name, phone, obj } = props;
  console.log(obj);
  console.log(props);
  return (
    <div>
      Hello {name} Phone = {phone}
    </div>
  );
};

export default HelloWorld;
