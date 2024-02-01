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

      // create a pop window
      const result = await signInWithPopup(auth, provider);
      // send this data to the backend  for verification and authentication.
      const res = await fetch("./api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

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
      console.log("could not sign in with google", error); // i dont wanna show error to the user , so just log it for now
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="p-3 text-white uppercase bg-red-700 rounded-lg hover:opacity-95"
    >
      {" "}
      Continue with google
    </button>
  );
}
