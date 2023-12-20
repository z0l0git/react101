import facebookStyle from "@/styles/fb.module.css";

const FacebookLoginTopBar = () => {
  return (
    <div className={facebookStyle.topBar}>
      <div>
        <h1>facebook</h1>
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
      <div>
        <div>
          <input></input>
          <input></input>
          <div>
            <p>Login</p>
          </div>
          <a>Forgot password?</a>
          <hr></hr>
          <div>
            <p>Create New Account</p>
          </div>
        </div>
        <p>Create a Page for a celebrity, band or business.</p>
      </div>
    </div>
  );
};

export default FacebookLoginTopBar;
