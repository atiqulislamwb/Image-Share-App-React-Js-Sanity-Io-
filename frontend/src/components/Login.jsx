import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/logo.png";
import background from "../assets/background.mp4";
import { client } from "../client.js";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
function Login() {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    const { name, googleId, imageUrl } = response.profileObj;
    const doc = {
      _id: googleId,
      _type: "user",
      userName: name,
      image: imageUrl,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen ">
      <div className="w-full h-full relative">
        <video
          src={background}
          type="video/mp4"
          loop
          controls={false}
          autoPlay
          muted
          className="w-full h-full object-cover  "
        />
        <div className="absolute flex flex-col justify-center top-0 right-0 bottom-0 left-0 items-center bg-blackOverlay  ">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo of the company" />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
              clientId="286899622206-g0ac13bfmk74fq9puor51b5ff1n1ekjp.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className="bg-blue-800  text-white flex justify-center items-center p-3 rounded-full cursor-pointer outline-none "
                  type="button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign In With Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
          {/* added functionality next time */}
          <div className="shadow-2xl ">
            <button
              className="bg-blue-800  text-white flex justify-center items-center p-3 rounded-full cursor-pointer outline-none mt-4"
              type="button"
              onClick={() => alert("Github login")}
            >
              <AiOutlineGithub className="mr-4 " /> Sign In With Github
            </button>
          </div>
          <div className="shadow-2xl ">
            <button
              className="bg-blue-800  text-white flex justify-center items-center p-3 rounded-full cursor-pointer outline-none mt-4"
              type="button"
              onClick={() => alert("Facebook login")}
            >
              <BsFacebook className="mr-4" /> Sign In With Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
