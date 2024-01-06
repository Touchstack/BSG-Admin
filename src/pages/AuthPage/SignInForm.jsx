import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useState } from "react";

import NavBar from "../../components/NavBar";


const SignInForm = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    const email = data.email.toLowerCase()
    const password = data.password
    
    const isMatch = await checkCredentials(email, password);

    if (isMatch) {
      console.log("Login successful");
      setLoading(true);
      localStorage.setItem('user', JSON.stringify("Login"));
      setTimeout(() => window.location.replace("/home"), 1000); // Redirect
    } else {
      // Display error message for incorrect email or password
      alert("Invalid email or password. Please try again.");
    }
  };

  const checkCredentials = async (email, password) => {
    const staticEmail = "beststudyguide@gmail.com";
    const staticPassword = "Pass123$1";

    return email === staticEmail && password === staticPassword;
  };

  return (
    <div className="h-screen w-full bg-[#063231]">
       <NavBar />
    
    {/* Form Section */}
       <div className="flex items-center justify-center px-5">
           <div className="flex flex-col bg-[#FFF] w-[402px] h-[456px] rounded-[10px] py-[3rem]">
              <div className="px-[2rem]">
                <h1 className="md:text-[32px] text-[22px] font-[600] text-[#0B111C]">Admin Sign in</h1>

                <p className="text-[#70787C] text-[14px]">
                  Enter the email address you use to sign in to BSG.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="mt-3 px-6 space-y-6">
                {/* Email Input */}
                <div>
                  {/* <label htmlFor="email" className="text-lg font-medium text-gray-800">
                    Email
                  </label> */}
                  <input
                    {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="mt-1 p-3 w-full bg-[#EFF3F4] border border-gray-300 rounded-[12px] outline-none focus:border-none"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                </div>

                {/* Password Input */}
                <div>
                  {/* <label htmlFor="password" className="text-lg font-medium text-gray-800">
                    Password
                  </label> */}
                  <input
                    {...register("password", { required: "Password is required", minLength: 6 })}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="mt-1 p-3 w-full bg-[#EFF3F4] border border-gray-300 rounded-[12px] outline-none focus:border-none"
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#063231] text-white p-[1rem] rounded-[12px] hover:bg-[#066362] focus:outline-none focus:ring focus:border-blue-300"
                  disabled={isSubmitting}
                >
                  {loading ? (
                      <ClipLoader color={"#ffffff"} loading={loading} size={25} />
                    ) : (
                      "Sign In"
                    )}
                </button>
              </form>
           </div>
       </div>
       {/* Form Section */}
    </div>
  );
};

export default SignInForm;
