import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [token] = useToken(user);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const googleSign = () => {
    signInWithGoogle();
  };

  if (loading) {
    return <Loading />;
  }
  if (token) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Login Success",
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      navigate(from, { replace: true });
    }, 1000);
  }

  var socialError;

  if (error) {
    socialError = (
      <p className="text-center text-red-600 text-sm py-6">{error?.message}</p>
    );
  }

  return (
    <>
      <div className="flex items-center w-80 mx-auto">
        <div className="border-t-2 w-1/2 border-accent-500"></div>
        <span className="pt- mt-0 px-6">or</span>
        <div className="border-t-2 w-1/2 border-accent-500"></div>
      </div>

      <div class="form-control py-4 mx-8">
        <button
          class="btn btn-outline hover:bg-accent text-accent font-bold"
          onClick={googleSign}
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
      {socialError}
    </>
  );
};

export default SocialLogin;
