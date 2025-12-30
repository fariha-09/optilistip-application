import { FaRegCalendarAlt } from "react-icons/fa";

export default function DateSelector() {
  return (
    <div className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm shadow-sm bg-white">
      <FaRegCalendarAlt className="text-gray-600" />
      <span>01 Jan - 30 Jan</span>
      <select className="outline-none bg-transparent cursor-pointer text-gray-600">
        <option>Jan-2025</option> <option>Feb-2025</option>{" "}
        <option>Mar-2025</option>{" "}
      </select>
    </div>
  );
}
