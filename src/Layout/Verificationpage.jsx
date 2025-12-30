import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Verificationpage() {
  return (
    <div className="bg-[#169D53] w-full h-full pb-10">
      <div className="relative flex items-center justify-center px-5 sm:px-10 pt-0">
        <Link to="/signin">
          <FaArrowLeft
            className="
        absolute left-5 sm:left-20 top-9
        w-7 h-6 
        text-white 
        cursor-pointer 
        transition-all duration-300 
        hover:-translate-x-1
      "
          />
        </Link>

        <img
          src="/Optislipimage.png"
          alt="OptiSlip"
          className="h-[12vh] sm:ml-4 ml-4 sm:mt-10 mt-18 sm:h-[34vh]"
        />
      </div>

      <p className="text-[#FFFFFF] text-[16px] w-[30%] text-center mx-auto ">
        We've sent a 6-digit verification code to your email address. Please
        check your inbox and enter the code below to verify your account.
      </p>

      <div className="bg-white/10 text-white/60 rounded-[20px] w-[30%] mx-auto py-4 px-10 leading-[2] text-center mt-6">
        <p className="text-[18px]">Verification code sent to:</p>
        <h1 className="text-[24px] text-[#FFFFFF]">your@email.com</h1>
      </div>

      <div className=" w-[32%] mx-auto">
        <input type="text" required className="bg-[#FFFFFF] h-25 text-black text-[30px] rounded-[20px] py-4 px-10 leading-[2] text-center mt-6">
      
      </input>
      </div>

      <div className="mt-8  flex justify-center">
        <Link to="/home-page" className="bg-[#FFFFFF] text-center text-[20px] text-[#007A3F] py-4 px-12 font-semibold rounded-[20px] mb-8 w-[32%]">
      PROCEED
        </Link>
      </div>
      <div className="w-[30%] mx-auto">
        <p className="text-white/60 text-center">Didn’t recieve the code?</p>
        <p className="text-[#FFFFFF] underline text-center cursor-pointer text-[16px] my-4">Resend Code</p>
        </div>

    </div>
  );
}
