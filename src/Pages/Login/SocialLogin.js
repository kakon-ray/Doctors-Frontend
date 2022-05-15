import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const googleSign = () => {
    signInWithGoogle();
  };

  if (loading) {
    return <Loading />;
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
