import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiUserLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { GoLock } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function Signupinfo() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/verifyemail")
  };

  return (


    <div className="flex flex-col md:flex-row min-h-screen bg-white " style={{ fontFamily: "'Inter', sans-serif" }}>
        <div className="w-full bg-white h-fullscreen pb-20">
              <div className="relative flex items-center justify-center px-5 sm:px-10 pt-10">
          <Link to="/home-page">
            <FaArrowLeft
              className="
                absolute left-5 sm:left-18 top-14
                w-7 h-6 
                text-black 
                cursor-pointer 
                transition-all duration-300 
                hover:text-green-600 
                hover:-translate-x-1
              "
            />
          </Link>
        
          <img
            src="/Optislipimage.png"
            alt="OptiSlip"
            style={{ filter: "invert(1) grayscale(1) brightness(0)" }}
            className="h-[12vh] sm:ml-8 ml-4 sm:h-[20vh]"
          />
        </div>
      <div className="w-full md:w-1/2 flex flex-col px-6 sm:px-10 py-10  items-center mx-auto">
        <div className="flex items-center mb-6">
        
          <h2 className="text-3xl sm:text-4xl md:text-[45px] text-[#007A3F] font-bold">Sign Up</h2>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md">

          <label className="block mb-2 font-semibold text-[#374151]">Username</label>
          <RiUserLine className="absolute md:top-81 md:left-109 top-73 left-10 text-[#6B7C6B]" size={20}/>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="eg. xyz_optical"
            className="w-full sm:w-[90%] p-4 border-2 pl-9 rounded-xl mb-4 border-[#e5e7eb] hover:border-[#169D53] outline-none transition-all duration-300"
          />

          <label className="block mb-2 font-semibold text-[#374151]">Email</label>
          <CiMail className="absolute md:top-109 md:left-109 top-100 left-9 text-[#6B7C6B]" size={20}/>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full sm:w-[90%] p-4 border-2 pl-9 rounded-xl mb-4 border-[#e5e7eb] hover:border-[#169D53] outline-none transition-all duration-300"
          />

          <label className="block mb-2 font-semibold text-[#374151]">Password</label>
          <GoLock className="absolute md:bottom-12 md:left-109 bottom-79  left-9 text-[#6B7C6B]" size={20}/>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            className="w-full sm:w-[90%] p-4 pl-9 border-2 rounded-xl mb-4 border-[#e5e7eb] hover:border-[#169D53] outline-none transition-all duration-300"
          />

          <label className="block mb-2 font-semibold text-[#374151]">Confirm Password</label>
           <GoLock className="absolute md:top-162 md:left-109 top-154 left-9 text-[#6B7C6B]" size={20}/>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm your password"
            className="w-full sm:w-[90%] p-4 border-2 pl-9   rounded-xl mb-4 border-[#e5e7eb] hover:border-[#169D53] outline-none transition-all duration-300"
          />

          <label className="flex items-center mb-6">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="mr-2 text-[#6b7280]"
            />
            Remember me
          </label>

          <button
            type="submit"
            className="w-full sm:w-[90%] bg-[#169D53] py-5 text-white rounded-xl shadow-2xl font-semibold mb-6 hover:bg-[#0f7a42] transition-all duration-300"
          >
            SIGN UP
          </button>

          <p className="text-[#6b7280] text-sm sm:text-base w-full sm:w-[90%] text-center">
            Already have an account?
            <Link to="/signin" className="text-[#169D53] font-bold">
              Login
            </Link>
          </p>

          <div className="flex items-center w-full sm:w-[90%] my-6">
            <div className="border-b border-[#d1d5db] flex-1 h-0.5"></div>
            <span className="mx-2 text-[#3E3E3E] text-[14px]">OR</span>
            <div className="border-b border-[#d1d5db] flex-1 h-0.5"></div>
          </div>

          <button
            type="button"
            className="flex items-center py-5 justify-center w-full sm:w-[90%] p-3 rounded-xl border border-[#e5e7eb] text-[#3c4043] bg-white hover:bg-gray-100 transition-colors mb-6"
          >
            <FcGoogle className="text-red-600 mr-3" size={20} />
            Continue with Google
          </button>

          
        </form>
      </div>
        
    </div>
    </div>
  )}