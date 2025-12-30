import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

export default function Mynewshop() {
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
  <div className="w-full bg-white h-full pb-20">

    <div className="relative flex items-center justify-center px-4 sm:px-10 pt-10">
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

    <div className="flex justify-center mt-4 px-4 sm:px-0">
      <label
        htmlFor="fileInput"
        className="w-36 h-36 rounded-full border-[3px] border-green-600 flex justify-center items-center bg-[#2D2D2D] text-white cursor-pointer overflow-hidden"
      >
        {image ? (
          <img
            src={image}
            alt="preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-center text-[#FFFFFF] underline ">
            Upload <br /> Image
          </span>
        )}
      </label>

      <input
        type="file"
        id="fileInput"
        className="hidden"
        onChange={handleImage}
      />
    </div>

    <div className="flex justify-center mt-10 px-4 sm:px-0">
      <div className="w-full max-w-2xl space-y-6">
        <div>
          <label className="text-sm font-medium text-gray-700">
            Shop Name
          </label>
          <input
            type="text"
            placeholder="eg. Opti Slip"
            className="w-full mt-1 border rounded-xl p-4 outline-none text-[15px]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Address</label>
          <textarea
            rows={2}
            placeholder="eg. Civic Center, Mountain View, CA, United States, California"
            className="w-full mt-1 border rounded-xl p-4 outline-none text-[15px]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="flex mt-1">
            <select className="bg-[#007A3F] text-white px-4 rounded-l-xl outline-none">
              <option>+1</option>
              <option>+92</option>
              <option>+91</option>
            </select>

            <input
              type="text"
              placeholder="218-310-3335"
              className="w-full border border-l-0 rounded-r-xl p-4 outline-none text-[15px]"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">
            Whatsapp Number
          </label>
          <div className="flex mt-1">
            <select className="bg-[#007A3F] text-white px-4 rounded-l-xl outline-none">
              <option>+1</option>
              <option>+92</option>
              <option>+91</option>
            </select>

            <input
              type="text"
              placeholder="218-310-3335"
              className="w-full border border-l-0 rounded-r-xl p-4 outline-none text-[15px]"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            type="text"
            placeholder="eg. opti_slip"
            className="w-full mt-1 border rounded-xl p-4 outline-none text-[15px]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full mt-1 border rounded-xl p-4 outline-none text-[15px]"
          />
        </div>

        <div className="text-center pt-4">
          <button className="bg-[#007A3F] text-white font-medium py-3 px-12 rounded-full hover:bg-green-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-10 px-4 sm:px-0">
      <div className="w-full max-w-2xl space-y-6">

        <h2 className="text-[20px] font-semibold text-[#007A3F] mb-3">
          Add New Sub User
        </h2>
        <div className="border border-[#007A3F] rounded-xl p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Sub User Name
            </label>
            <input
              type="text"
              placeholder="user_xzy"
              className="w-full mt-1 border rounded-xl p-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="user@email.com"
              className="w-full mt-1 border rounded-xl p-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-1 border rounded-xl p-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+1 218-310-3335"
              className="w-full mt-1 border rounded-xl p-3 outline-none"
            />
          </div>
        </div>

        <div className="text-center mt-3">
          <button className="bg-[#007A3F] text-white font-medium py-3 px-10 rounded-full hover:bg-green-700 transition">
            Add Sub User
          </button>
        </div>
        <h2 className="text-[20px] font-semibold text-[#007A3F] mb-4">
          Existing Sub Users
        </h2>
        <div className="border rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex justify-between">
            <p className="font-semibold text-gray-900">Mr Jhon Smith</p>
            <div className="flex gap-4">
              <MdEdit className="text-[22px] cursor-pointer" style={{ color: "#007A3F" }} />
              <RiDeleteBinLine className="text-[22px] cursor-pointer" style={{ color: "#FF0000" }} />
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <MdOutlineEmail className="text-[19px] text-[#007A3F]" />
            <p className="text-gray-600 text-[15px]">your@email.com</p>
          </div>

          <div className="flex items-center gap-3 mt-1">
            <LuPhone className="text-[19px] text-[#007A3F]" />
            <p className="text-gray-600 text-[15px]">+1-123-1234567</p>
          </div>

          <div className="flex items-center gap-3 mt-1">
            <CiCalendar className="text-[19px] text-[#007A3F]" />
            <p className="text-gray-600 text-[15px]">Created: Jan 02, 2025</p>
          </div>
        </div>
        <div className="border rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex justify-between">
            <p className="font-semibold text-gray-900">Mr Khan</p>
            <div className="flex gap-4">
              <MdEdit className="text-[22px] cursor-pointer" style={{ color: "#007A3F" }} />
              <RiDeleteBinLine className="text-[22px] cursor-pointer" style={{ color: "#FF0000" }} />
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <MdOutlineEmail className="text-[19px] text-[#007A3F]" />
            <p className="text-gray-600 text-[15px]">your@email.com</p>
          </div>

          <div className="flex items-center gap-3 mt-1">
            <LuPhone className="text-[19px] text-[#007A3F]" />
            <p className="text-gray-600 text-[15px]">+1-123-1234567</p>
          </div>

          <div className="flex items-center gap-3 mt-1">
            <CiCalendar className="text-[19px] text-[#007A3F]" />
            <p className="text-gray-600 text-[15px]">Created: Jan 02, 2025</p>
          </div>
        </div>

      </div>
    </div>

</div>
  );
}
