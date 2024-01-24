import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };
  return (
    // <button
    //   onClick={handleGoogleClick}
    //   type='button'
    //   classNameName='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
    // >
    //   Continue with google
    // </button>
<div className="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
  <button
    onClick={handleGoogleClick}
    className="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition transform shadow-md active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
  >
    <div className="w-max mx-auto flex items-center justify-center space-x-4">
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-5" alt="" />
      <span className="block w-max text-sm font-semibold tracking-wide text-blue-700 dark:text-white">With Google</span>
    </div>
  </button>
</div>


  );
}
