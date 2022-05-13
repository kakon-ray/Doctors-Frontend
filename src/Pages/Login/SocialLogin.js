import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialLogin = () => {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  

  return (
    <>
      <div className="flex items-center w-80 mx-auto">
        <div className="border-t-2 w-1/2 border-accent-500"></div>
        <span className="pt- mt-0 px-6">or</span>
        <div className="border-t-2 w-1/2 border-accent-500"></div>
      </div>

      <div class="form-control py-4 mx-8">
        <button class="btn btn-outline hover:bg-accent text-accent font-bold" onClick={()=>signInWithGoogle()}>
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
