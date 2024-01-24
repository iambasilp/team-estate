import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import styles from "../style";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div class={`m-auto xl:container px-12 sm:px-0 mx-auto ${styles.paddingY}`}>
      <div class="mx-auto h-full sm:w-max">
        <div class="m-auto  py-12">
          <div class="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
            <h3 class="text-2xl font-semibold text-gray-700 dark:text-white">Create new account</h3>
            <OAuth />

            <form action="" class="mt-10 space-y-8 dark:text-white" onSubmit={handleSubmit}>
              <div>
                <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    id="username"
                    type="text"
                    placeholder="Your username"
                    class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="flex flex-col items-end">
                <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    id="password"
                    type="password"
                    placeholder="Your password"
                    class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <button
                  disabled={loading}
                  class="w-full rounded-full bg-blue-500 dark:bg-blue-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-blue-600 focus:bg-blue-600 active:bg-sky-800"
                >
                  <span class="text-base font-semibold text-white dark:text-gray-900">
                    {loading ? "Loading..." : "Sign Up"}
                  </span>
                </button>
                <Link to={"/sign-in"} href="#" type="reset" class="-ml-3 w-max p-3">
                  <span class="text-sm tracking-wide text-blue-600 dark:text-blue-400">Sign in to your account</span>
                </Link>
              </div>
            </form>
          </div>
          <div class="border-t pt-12 text-gray-500 dark:border-gray-800">
            <div class="space-x-4 text-center">
              <span>&copy; BNAS</span>
              <a href="#" class="text-sm hover:text-blue-900 dark:hover:text-gray-300">
                Contact
              </a>
              <a href="#" class="text-sm hover:text-blue-900 dark:hover:text-gray-300">
                Privacy & Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
