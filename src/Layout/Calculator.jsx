import { FaArrowLeft } from "react-icons/fa";
import { FaGlasses } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";
import { MdAccessTimeFilled } from "react-icons/md";
import { BiSolidBullseye } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Calculator() {
  const features = [
    {
      title: "Saves Time",
      desc: "No more manual calculations or flipping through textbooks! Just enter the numbers, and our calculator gives you instant results.",
      icon: <MdAccessTimeFilled className="text-white w-8 h-8" />,
    },
    {
      title: "High Accuracy",
      desc: "Get precise results every time with minimal effort, ensuring your calculations are professional-grade.",
      icon: <BiSolidBullseye className="text-white w-8 h-8" />,
    },
    {
      title: "Mobile Friendly",
      desc: "Use our calculator anywhere, on any device. Responsive and optimized for your convenience.",
      icon: <FaMobileAlt className="text-white w-8 h-8" />,
    },
    {
      title: "Secure & Reliable",
      desc: "Your data is safe with us. We prioritize privacy and security in every calculation.",
      icon: <FaShield className="text-white w-8 h-8" />,
    },
  ];
  return (
    <div className="bg-[linear-gradient(135deg,#f8f9fa_0%,#e9ecef_100%)] w-full h-fullscreen  flex flex-col justify-center  [p-20] ">
      <div className="flex justify-center">
        <div className="bg-white w-[90%] p-6 mt-6 mx-auto flex flex-col sm:flex-row items-center sm:justify-between rounded-[20px] relative">
  <Link to="/home-page">
    <FaArrowLeft
      className="
        absolute sm:static left-4 top-4 sm:left-0 sm:top-0
        w-7 h-7
        text-[#169D53]
        cursor-pointer
        transition-all duration-300 ease-in-out
        hover:text-white
        hover:bg-[#169D53]
        hover:px-2
        hover:py-3
        hover:rounded-lg
        hover:h-10
        hover:w-10
        hover:-translate-y-1
      "
    />
  </Link>

  <div className="flex justify-center sm:justify-start mt-6 sm:mt-0 sm:pl-4">
    <img
      src="/Optislipimage.png"
      alt="OptiSlip"
      style={{ filter: "invert(1) grayscale(1) brightness(0)" }}
      className="h-[15vh] sm:h-[20vh] w-auto"
    />
  </div>

  <div className="mt-4 sm:mt-0 sm:pl-4 text-center sm:text-left">
    <h3 className="text-[#169D53] text-2xl sm:text-[28px] font-bold">
      Optical Calculator
    </h3>
  </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="bg-[linear-gradient(135deg,#169D53,#22c55e)] w-[90%] p-6 mt-6 rounded-[20px] flex flex-col justify-center items-center ">
          <h1 className="md:text-[36px] text-[22px] text-center font-bold text-white mb-5">
            Calculate Distance & Near Cross Numbers in Seconds! 👓
          </h1>
          <p className="text-[18px] opacity-90 text-white  max-w-[600px] mx-auto text-center mb-12">
            Accurate, and professional optical calculations. Designed for
            opticians. Trusted by professionals.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center my-10">
  <div className="bg-white w-[90%] p-6 rounded-[20px] shadow-md border border-gray-100 text-center ">
          <div className="relative text-center">
            <FaGlasses className="absolute top-1 md:left-90 right-72 text-[24px]" />
            <h1 className="md:pl-7 text-[#333] md:text-[24px] text-[18px] font-bold ">
              Professional Optical Calculator
            </h1>
            <p className="text-[#666] text-center">
              Calculate Distance & Near Cross Numbers in Seconds!
            </p>
            <p className="text-[#666] text-center mb-[1.5rem] whitespace-nowrap">
              Accurate, Professional & Trusted by Opticians
            </p>
            <p className="text-[#666] text-center">
              Enter prescription values to calculate distance and near cross
              numbers
            </p>
          </div>
        

       <div className="flex flex-col md:items-center md:justify-center md:flex-row gap-6  max-w-5xl mt-8 mx-auto ">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex-1">
               <div className="bg-[#169D53] rounded-[25px] py-[12px] px-[20px] text-white font-semibold text-[16px] text-center mb-6">
                Right Eye
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm text-left font-semibold mb-1">
                    Sph
                  </label>
                  <select className="w-full border border-gray-300 rounded-md p-2">
                     <option>Select</option>
                    <option>+24.00</option>
                    <option>+23.75</option>
                    <option>+23.50</option>
                    <option>+23.25</option>
                    <option>+23.00</option>
                    <option>+22.75</option>
                    <option>+22.50</option>
                    <option>+22.25</option>
                    <option>+22.00</option>
                    <option>+21.75</option>
                    <option>+21.50</option>
                    <option>+21.25</option>
                    <option>+21.00</option>
                    <option>+20.75</option>
                    <option>+20.50</option>
                    <option>+20.25</option>
                    <option>+20.00</option>
                    <option>+19.75</option>
                    <option>+19.50</option>
                    <option>+19.25</option>
                    <option>+19.00</option>
                    <option>+18.75</option>
                    <option>+18.50</option>
                    <option>+18.25</option>
                    <option>+18.00</option>
                    <option>+17.75</option>
                    <option>+17.50</option>
                    <option>+17.25</option>
                    <option>+17.00</option>
                    <option>+16.75</option>
                    <option>+16.50</option>
                    <option>+16.25</option>
                    <option>+16.00</option>
                    <option>+15.75</option>
                    <option>+15.50</option>
                    <option>+15.25</option>
                    <option>+15.00</option>
                    <option>+14.75</option>
                    <option>+14.50</option>
                    <option>+14.25</option>
                    <option>+14.00</option>
                    <option>+13.75</option>
                    <option>+13.50</option>
                    <option>+13.25</option>
                    <option>+13.00</option>
                    <option>+12.75</option>
                    <option>+12.50</option>
                    <option>+12.25</option>
                    <option>+12.00</option>
                    <option>+11.75</option>
                    <option>+11.50</option>
                    <option>+11.25</option>
                    <option>+11.00</option>
                    <option>+10.75</option>
                    <option>+10.50</option>
                    <option>+10.25</option>
                    <option>+10.00</option>
                    <option>+9.75</option>
                    <option>+9.50</option>
                    <option>+9.25</option>
                    <option>+9.00</option>
                    <option>+8.75</option>
                    <option>+8.50</option>
                    <option>+8.25</option>
                    <option>+8.00</option>
                    <option>+7.75</option>
                    <option>+7.50</option>
                    <option>+7.25</option>
                    <option>+7.00</option>
                    <option>+6.75</option>
                    <option>+6.50</option>
                    <option>+6.25</option>
                    <option>+6.00</option>
                    <option>+5.75</option>
                    <option>+5.50</option>
                    <option>+5.25</option>
                    <option>+5.00</option>
                    <option>+4.75</option>
                    <option>+4.50</option>
                    <option>+4.25</option>
                    <option>+4.00</option>
                    <option>+3.75</option>
                    <option>+3.50</option>
                    <option>+3.25</option>
                    <option>+3.00</option>
                    <option>+2.75</option>
                    <option>+2.50</option>
                    <option>+2.25</option>
                    <option>+2.00</option>
                    <option>+1.75</option>
                    <option>+1.50</option>
                    <option>+1.25</option>
                    <option>+1.00</option>
                    <option>+0.75</option>
                    <option>+0.50</option>
                    <option>+0.25</option>
                    <option>0.00</option>
                    <option>-0.25</option>
                    <option>-0.50</option>
                    <option>-0.75</option>
                    <option>-1.00</option>
                    <option>-1.25</option>
                    <option>-1.50</option>
                    <option>-1.75</option>
                    <option>-2.00</option>
                    <option>-2.25</option>
                    <option>-2.50</option>
                    <option>-2.75</option>
                    <option>-3.00</option>
                    <option>-3.25</option>
                    <option>-3.50</option>
                    <option>-3.75</option>
                    <option>-4.00</option>
                    <option>-4.25</option>
                    <option>-4.50</option>
                    <option>-4.75</option>
                    <option>-5.00</option>
                    <option>-5.25</option>
                    <option>-5.50</option>
                    <option>-5.75</option>
                    <option>-6.00</option>
                    <option>-6.25</option>
                    <option>-6.50</option>
                    <option>-6.75</option>
                    <option>-7.00</option>
                    <option>-7.25</option>
                    <option>-7.50</option>
                    <option>-7.75</option>
                    <option>-8.00</option>
                    <option>-8.25</option>
                    <option>-8.50</option>
                    <option>-8.75</option>
                    <option>-9.00</option>
                    <option>-9.25</option>
                    <option>-9.50</option>
                    <option>-9.75</option>
                    <option>-10.00</option>
                    <option>-10.25</option>
                    <option>-10.50</option>
                    <option>-10.75</option>
                    <option>-11.00</option>
                    <option>-11.25</option>
                    <option>-11.50</option>
                    <option>-11.75</option>
                    <option>-12.00</option>
                    <option>-12.25</option>
                    <option>-12.50</option>
                    <option>-12.75</option>
                    <option>-13.00</option>
                    <option>-13.25</option>
                    <option>-13.50</option>
                    <option>-13.75</option>
                    <option>-14.00</option>
                    <option>-14.25</option>
                    <option>-14.50</option>
                    <option>-14.75</option>
                    <option>-15.00</option>
                    <option>-15.25</option>
                    <option>-15.50</option>
                    <option>-15.75</option>
                    <option>-16.00</option>
                    <option>-16.25</option>
                    <option>-16.50</option>
                    <option>-16.75</option>
                    <option>-17.00</option>
                    <option>-17.25</option>
                    <option>-17.50</option>
                    <option>-17.75</option>
                    <option>-18.00</option>
                    <option>-18.25</option>
                    <option>-18.50</option>
                    <option>-18.75</option>
                    <option>-19.00</option>
                    <option>-19.25</option>
                    <option>-19.50</option>
                    <option>-19.75</option>
                    <option>-19.00</option>
                    <option>-19.25</option>
                    <option>-19.50</option>
                    <option>-19.75</option>
                    <option>-20.00</option>
                    <option>-20.25</option>
                    <option>-20.50</option>
                    <option>-20.75</option>
                    <option>-21.00</option>
                    <option>-21.25</option>
                    <option>-21.50</option>
                    <option>-21.75</option>
                    <option>-22.00</option>
                    <option>-22.25</option>
                    <option>-22.50</option>
                    <option>-22.75</option>
                    <option>-23.00</option>
                    <option>-23.25</option>
                    <option>-23.50</option>
                    <option>-23.75</option>
                    <option>-24.00</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-left font-semibold mb-1">
                    Cyl
                  </label>
                  <select className="w-full border border-gray-300 rounded-md p-2">
                    <option>Select</option>
                    <option>+6.00</option>
                    <option>+5.75</option>
                    <option>+5.50</option>
                    <option>+5.25</option>
                    <option>+5.00</option>
                    <option>+4.75</option>
                    <option>+4.50</option>
                    <option>+4.25</option>
                    <option>+4.00</option>
                    <option>+3.75</option>
                    <option>+3.50</option>
                    <option>+3.25</option>
                    <option>+3.00</option>
                    <option>+2.75</option>
                    <option>+2.50</option>
                    <option>+2.25</option>
                    <option>+2.00</option>
                    <option>+1.75</option>
                    <option>+1.50</option>
                    <option>+1.25</option>
                    <option>+1.00</option>
                    <option>+0.75</option>
                    <option>+0.50</option>
                    <option>+0.25</option>
                    <option>0.00</option>
                    <option>-0.25</option>
                    <option>-0.50</option>
                    <option>-0.75</option>
                    <option>-1.00</option>
                    <option>-1.25</option>
                    <option>-1.50</option>
                    <option>-1.75</option>
                    <option>-2.00</option>
                    <option>-2.25</option>
                    <option>-2.50</option>
                    <option>-2.75</option>
                    <option>-3.00</option>
                    <option>-3.25</option>
                    <option>-3.50</option>
                    <option>-3.75</option>
                    <option>-4.00</option>
                    <option>-4.25</option>
                    <option>-4.50</option>
                    <option>-4.75</option>
                    <option>-5.00</option>
                    <option>-5.25</option>
                    <option>-5.50</option>
                    <option>-5.75</option>
                    <option>-6.00</option>
                  </select>
                </div> 

                <div>
                  <label className="block text-sm text-left font-semibold mb-1">
                    Axis
                  </label>
                  <input
                    type="number"
                    placeholder="1 to 180"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>
            </div>

        
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex-1">
              <div className="bg-[#169D53] rounded-[25px] py-[12px] px-[20px] text-white font-semibold text-[16px] text-center mb-6">
                Left Eye
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm text-left font-semibold mb-1">
                    Sph
                  </label>
                  <select className="w-full border border-gray-300 rounded-md p-2">
                    <option>Select</option>
                    <option>+24.00</option>
                    <option>+23.75</option>
                    <option>+23.50</option>
                    <option>+23.25</option>
                    <option>+23.00</option>
                    <option>+22.75</option>
                    <option>+22.50</option>
                    <option>+22.25</option>
                    <option>+22.00</option>
                    <option>+21.75</option>
                    <option>+21.50</option>
                    <option>+21.25</option>
                    <option>+21.00</option>
                    <option>+20.75</option>
                    <option>+20.50</option>
                    <option>+20.25</option>
                    <option>+20.00</option>
                    <option>+19.75</option>
                    <option>+19.50</option>
                    <option>+19.25</option>
                    <option>+19.00</option>
                    <option>+18.75</option>
                    <option>+18.50</option>
                    <option>+18.25</option>
                    <option>+18.00</option>
                    <option>+17.75</option>
                    <option>+17.50</option>
                    <option>+17.25</option>
                    <option>+17.00</option>
                    <option>+16.75</option>
                    <option>+16.50</option>
                    <option>+16.25</option>
                    <option>+16.00</option>
                    <option>+15.75</option>
                    <option>+15.50</option>
                    <option>+15.25</option>
                    <option>+15.00</option>
                    <option>+14.75</option>
                    <option>+14.50</option>
                    <option>+14.25</option>
                    <option>+14.00</option>
                    <option>+13.75</option>
                    <option>+13.50</option>
                    <option>+13.25</option>
                    <option>+13.00</option>
                    <option>+12.75</option>
                    <option>+12.50</option>
                    <option>+12.25</option>
                    <option>+12.00</option>
                    <option>+11.75</option>
                    <option>+11.50</option>
                    <option>+11.25</option>
                    <option>+11.00</option>
                    <option>+10.75</option>
                    <option>+10.50</option>
                    <option>+10.25</option>
                    <option>+10.00</option>
                    <option>+9.75</option>
                    <option>+9.50</option>
                    <option>+9.25</option>
                    <option>+9.00</option>
                    <option>+8.75</option>
                    <option>+8.50</option>
                    <option>+8.25</option>
                    <option>+8.00</option>
                    <option>+7.75</option>
                    <option>+7.50</option>
                    <option>+7.25</option>
                    <option>+7.00</option>
                    <option>+6.75</option>
                    <option>+6.50</option>
                    <option>+6.25</option>
                    <option>+6.00</option>
                    <option>+5.75</option>
                    <option>+5.50</option>
                    <option>+5.25</option>
                    <option>+5.00</option>
                    <option>+4.75</option>
                    <option>+4.50</option>
                    <option>+4.25</option>
                    <option>+4.00</option>
                    <option>+3.75</option>
                    <option>+3.50</option>
                    <option>+3.25</option>
                    <option>+3.00</option>
                    <option>+2.75</option>
                    <option>+2.50</option>
                    <option>+2.25</option>
                    <option>+2.00</option>
                    <option>+1.75</option>
                    <option>+1.50</option>
                    <option>+1.25</option>
                    <option>+1.00</option>
                    <option>+0.75</option>
                    <option>+0.50</option>
                    <option>+0.25</option>
                    <option>0.00</option>
                    <option>-0.25</option>
                    <option>-0.50</option>
                    <option>-0.75</option>
                    <option>-1.00</option>
                    <option>-1.25</option>
                    <option>-1.50</option>
                    <option>-1.75</option>
                    <option>-2.00</option>
                    <option>-2.25</option>
                    <option>-2.50</option>
                    <option>-2.75</option>
                    <option>-3.00</option>
                    <option>-3.25</option>
                    <option>-3.50</option>
                    <option>-3.75</option>
                    <option>-4.00</option>
                    <option>-4.25</option>
                    <option>-4.50</option>
                    <option>-4.75</option>
                    <option>-5.00</option>
                    <option>-5.25</option>
                    <option>-5.50</option>
                    <option>-5.75</option>
                    <option>-6.00</option>
                    <option>-6.25</option>
                    <option>-6.50</option>
                    <option>-6.75</option>
                    <option>-7.00</option>
                    <option>-7.25</option>
                    <option>-7.50</option>
                    <option>-7.75</option>
                    <option>-8.00</option>
                    <option>-8.25</option>
                    <option>-8.50</option>
                    <option>-8.75</option>
                    <option>-9.00</option>
                    <option>-9.25</option>
                    <option>-9.50</option>
                    <option>-9.75</option>
                    <option>-10.00</option>
                    <option>-10.25</option>
                    <option>-10.50</option>
                    <option>-10.75</option>
                    <option>-11.00</option>
                    <option>-11.25</option>
                    <option>-11.50</option>
                    <option>-11.75</option>
                    <option>-12.00</option>
                    <option>-12.25</option>
                    <option>-12.50</option>
                    <option>-12.75</option>
                    <option>-13.00</option>
                    <option>-13.25</option>
                    <option>-13.50</option>
                    <option>-13.75</option>
                    <option>-14.00</option>
                    <option>-14.25</option>
                    <option>-14.50</option>
                    <option>-14.75</option>
                    <option>-15.00</option>
                    <option>-15.25</option>
                    <option>-15.50</option>
                    <option>-15.75</option>
                    <option>-16.00</option>
                    <option>-16.25</option>
                    <option>-16.50</option>
                    <option>-16.75</option>
                    <option>-17.00</option>
                    <option>-17.25</option>
                    <option>-17.50</option>
                    <option>-17.75</option>
                    <option>-18.00</option>
                    <option>-18.25</option>
                    <option>-18.50</option>
                    <option>-18.75</option>
                    <option>-19.00</option>
                    <option>-19.25</option>
                    <option>-19.50</option>
                    <option>-19.75</option>
                    <option>-19.00</option>
                    <option>-19.25</option>
                    <option>-19.50</option>
                    <option>-19.75</option>
                    <option>-20.00</option>
                    <option>-20.25</option>
                    <option>-20.50</option>
                    <option>-20.75</option>
                    <option>-21.00</option>
                    <option>-21.25</option>
                    <option>-21.50</option>
                    <option>-21.75</option>
                    <option>-22.00</option>
                    <option>-22.25</option>
                    <option>-22.50</option>
                    <option>-22.75</option>
                    <option>-23.00</option>
                    <option>-23.25</option>
                    <option>-23.50</option>
                    <option>-23.75</option>
                    <option>-24.00</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-left font-semibold mb-1">
                    Cyl
                  </label>
                  <select className="w-full border border-gray-300 rounded-md p-2">
                    <option>Select</option>
                    <option>+6.00</option>
                    <option>+5.75</option>
                    <option>+5.50</option>
                    <option>+5.25</option>
                    <option>+5.00</option>
                    <option>+4.75</option>
                    <option>+4.50</option>
                    <option>+4.25</option>
                    <option>+4.00</option>
                    <option>+3.75</option>
                    <option>+3.50</option>
                    <option>+3.25</option>
                    <option>+3.00</option>
                    <option>+2.75</option>
                    <option>+2.50</option>
                    <option>+2.25</option>
                    <option>+2.00</option>
                    <option>+1.75</option>
                    <option>+1.50</option>
                    <option>+1.25</option>
                    <option>+1.00</option>
                    <option>+0.75</option>
                    <option>+0.50</option>
                    <option>+0.25</option>
                    <option>0.00</option>
                    <option>-0.25</option>
                    <option>-0.50</option>
                    <option>-0.75</option>
                    <option>-1.00</option>
                    <option>-1.25</option>
                    <option>-1.50</option>
                    <option>-1.75</option>
                    <option>-2.00</option>
                    <option>-2.25</option>
                    <option>-2.50</option>
                    <option>-2.75</option>
                    <option>-3.00</option>
                    <option>-3.25</option>
                    <option>-3.50</option>
                    <option>-3.75</option>
                    <option>-4.00</option>
                    <option>-4.25</option>
                    <option>-4.50</option>
                    <option>-4.75</option>
                    <option>-5.00</option>
                    <option>-5.25</option>
                    <option>-5.50</option>
                    <option>-5.75</option>
                    <option>-6.00</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-left font-semibold mb-1">
                    Axis
                  </label>
                  <input
                    type="number"
                    placeholder="1 to 180"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>
           
          </div>
        </div>




     <div className="bg-white p-5 rounded-[20px] shadow-md border border-gray-200 w-full max-w-5xl mx-auto my-10">
  <h1 className="text-xl font-semibold text-black text-center mb-4">
    Addition
  </h1>

  <select
    className="
      w-full p-3 rounded-lg border-2 border-[#169D53]
      outline-none
      transition-all duration-300
      cursor-pointer
      mb-10
    "
  >
    {Array.from({ length: 36 }, (_, i) => (i * 0.10).toFixed(2)).map((v) => (
      <option key={v}>+{v}</option>
    ))}
  </select>

 </div>
  <div className="flex flex-col sm:flex-row justify-center gap-4 my-6">
    <button
      className="bg-[#169D53] text-white flex items-center justify-center gap-2 
                 border-none px-[40px] py-[15px] rounded-[25px] text-[16px] 
                 font-semibold cursor-pointer transition-all duration-300 min-w-[150px] 
                 hover:opacity-90 hover:shadow-2xl hover:-translate-y-1
                 w-full sm:w-auto"
    >
      <FaCalculator />
      Calculate
    </button>

    <button
      className="bg-[#6c757d] text-white flex items-center justify-center gap-2 
                 border-none px-[40px] py-[15px] rounded-[25px] text-[16px] 
                 font-semibold cursor-pointer transition-all duration-300 min-w-[150px] 
                 hover:opacity-90 hover:shadow-2xl hover:-translate-y-1
                 w-full sm:w-auto"
    >
      <GrPowerReset />
      Reset
    </button>
  </div>
</div>




 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 w-[90%]">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-8 shadow-md transition-transform duration-300 hover:-translate-y-3 hover:shadow-xl flex flex-col items-center text-center"
        >
          <div
            className="w-16 h-16 flex items-center justify-center rounded-full mb-5"
            style={{
              background: "linear-gradient(135deg, #169D53, #22c55e)",
            }}
          >
            {feature.icon}
          </div>
          <h3 className="text-[20px] text-[#333] font-bold mb-2">{feature.title}</h3>
          <p className="text-[#666] leading-[1.6] text-[17px] ">{feature.desc}</p>
        </div>
      ))}
    </div>


<div className="w-full flex justify-center">
  <div className="bg-[linear-gradient(135deg,#169D53,#22c55e)] p-6 mt-3 rounded-[20px] flex flex-col justify-center items-center w-[90%]  mx-auto">
    <h1 className="text-[24px] font-bold text-white mb-5 text-center">
      Why guess and get it wrong? Do it right the first time
    </h1>
    <p className="text-[18px]  text-white  mx-auto text-center mb-4">
      Try our Prescription Calculator today and enjoy faster, error-free optical calculations!
    </p>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 w-full">
  <div className="bg-white/10 backdrop-blur-md rounded-[15px] py-4 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300">
        <h3 className="text-[24px] font-bold text-white mb-2">✅</h3>
        <p className="text-white text-[14px] leading-[1.5]">
          No errors in calculations
        </p>
      </div>

       <div className="bg-white/10 backdrop-blur-md rounded-[15px] py-4 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300">
        <h3 className="text-[24px] font-bold text-white mb-2">⚡</h3>
        <p className="text-white text-[14px] leading-[1.5]">
          Faster prescription checks
        </p>
      </div>

<div className="bg-white/10 backdrop-blur-md rounded-[15px] py-4 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300">
        <h3 className="text-[24px] font-bold text-white mb-2">⏰</h3>
        <p className="text-white text-[14px] leading-[1.5]">
          More time for other work
        </p>
      </div>


      <div className="bg-white/10 backdrop-blur-md rounded-[15px] py-4 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300">
        <h3 className="text-[24px] font-bold text-white mb-2"> 🎯</h3>
        <p className="text-white text-[14px] leading-[1.5] objet-fit">Accurate cross-number conversions
        </p>
      </div>

</div>

  </div>
</div>

        
      </div>
    </div>
  );
}
