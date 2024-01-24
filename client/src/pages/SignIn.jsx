import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import styles from "../style";
import OAuth from "../components/OAuth";

const SignIn = () => {
   const [formData, setFormData] = useState({});
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { loading, error } = useSelector((state) => state.user);

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.id]: e.target.value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         dispatch(signInStart());

         const res = await fetch("/api/auth/signin", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         const data = await res.json();

         if (data.success === false) {
            dispatch(signInFailure(data.message));
            return;
         }

         dispatch(signInSuccess(data));
         navigate("/");
      } catch (error) {
         dispatch(signInFailure(error.message));
      }
   };

   return (
      <div className={`m-auto xl:container px-12 sm:px-0 mx-auto ${styles.paddingY}`}>
         <div className="mx-auto h-full sm:w-max">
            <div className="m-auto  py-12">
               <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
                  <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">Login to your account</h3>
                  <OAuth />

                  <form action="" className="mt-10 space-y-8 dark:text-white" onSubmit={handleSubmit}>
                     <div>
                        <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                           <input
                              id="email"
                              type="email"
                              placeholder="Your email"
                              className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                              onChange={handleChange}
                           />
                        </div>
                     </div>

                     <div className="flex flex-col items-end">
                        <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                           <input
                              id="password"
                              type="password"
                              placeholder="Your password"
                              className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                              onChange={handleChange}
                           />
                        </div>
                     </div>

                     <div>
                        <button
                           disabled={loading}
                           className="w-full rounded-full bg-blue-500 dark:bg-blue-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-blue-600 focus:bg-blue-600 active:bg-sky-800"
                        >
                           <span className="text-base font-semibold text-white dark:text-gray-900">
                              {loading ? "Loading..." : "Sign In"}
                           </span>
                        </button>
                        <Link to={"/sign-up"} href="#" type="reset" className="-ml-3 w-max p-3">
                           <span className="text-sm tracking-wide text-blue-600 dark:text-blue-400">
                              Create new account
                           </span>
                        </Link>
                     </div>
                  </form>
               </div>
               <div className="border-t pt-12 text-gray-500 dark:border-gray-800">
                  <div className="space-x-4 text-center">
                     <span>&copy; BNAS</span>
                     <a href="#" className="text-sm hover:text-blue-900 dark:hover:text-gray-300">
                        Contact
                     </a>
                     <a href="#" className="text-sm hover:text-blue-900 dark:hover:text-gray-300">
                        Privacy & Terms
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignIn;
