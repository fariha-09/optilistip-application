import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Herosection() {
  return (
    <div className="pt-10 mx-3">
      <div className="p-[30px] border-4 border-[#169D53] rounded-[15px] bg-white">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-[20px] mb-[20px]">
          <div className="flex-shrink-0 bg-[#169D53] rounded-full w-[120px] h-[120px] flex items-center justify-center mx-auto sm:mx-0">
            <img
              src="/Optislipimage.png"
              alt="Logo"
              className="w-20 h-20 invert filter brightness-0"
            />
          </div>
          <div className="flex-grow">
            <h2 className="font-bold text-[22px] mt-6 mb-1 text-[#333]">
              Your Shop Name
            </h2>
            <div className="flex items-center text-[#666] text-[15px]">
              <FaLocationDot className="h-4 w-4 mr-1 text-[#169D53]" /> Address: Your Shop Address
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[30px] mb-[10px]">
          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-3">
            <div className="bg-[#25D366] rounded-full p-3 text-white mb-2 lg:mb-0">
              <FaWhatsapp size={20} />
            </div>
            <span className="font-semibold text-[#333] text-[14px] text-center lg:text-left">
              +92 300 1234567
            </span>
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-3">
            <div className="bg-[#1877f2] rounded-full p-3 text-white mb-2 lg:mb-0">
              <FaFacebookF size={20} />
            </div>
            <span className="font-semibold text-[#333] text-[14px] text-center lg:text-left">
              your shop
            </span>
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-3">
            <div className="bg-[#E4405F] rounded-full p-3 text-white mb-2 lg:mb-0">
              <FaInstagram size={20} />
            </div>
            <span className="font-semibold text-[#333] text-[14px] text-center lg:text-left">
              your shop
            </span>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-3">
            <div className="bg-[#6c757d] rounded-full p-3 text-white mb-2 lg:mb-0">
              <FaGlobe size={20} />
            </div>
            <span className="font-semibold text-[#333] text-[14px] text-center lg:text-left">
              https://yourshop.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
