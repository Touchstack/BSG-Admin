import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import Logo from "../../assets/images/favicon.png";


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
      setTimeout(() => window.location.replace("/home"), 2000); // Redirect
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
    <div className="h-screen w-full bg-gradient-to-r from-[#FFF5DB] to-[#C7D9A7] pb-[7rem] flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="flex items-center justify-center ">
        <img src={Logo} alt="Logo" className="md:w-[150px] sm:w-[100px] w-[100px]" />
      </div>

      <div>
        <p className="md:text-[38px] text-[28px] font-[700] text-[#063231]">Admin Login</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 px-5 space-y-6">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="text-lg font-medium text-gray-800">
            Email
          </label>
          <input
            {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
            type="email"
            id="email"
            name="email"
            className="mt-1 p-3 w-full border border-gray-300 rounded-full outline-none focus:border-none"
          />
          {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="text-lg font-medium text-gray-800">
            Password
          </label>
          <input
            {...register("password", { required: "Password is required", minLength: 6 })}
            type="password"
            id="password"
            name="password"
            className="mt-1 p-3 w-full border border-gray-300 rounded-full outline-none focus:border-none"
          />
          {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#063231] text-white p-[1rem] rounded-full hover:bg-[#066362] focus:outline-none focus:ring focus:border-blue-300"
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
  );
};

export default SignInForm;
