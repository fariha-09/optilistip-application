import { FaTimes } from 'react-icons/fa';

export default function Promotionpage({ onClose, onNavigate }) {

return ( 
 <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-[#BF0000] w-[350px] h-[600px] rounded-[20px] flex flex-col items-center justify-center text-center p-6 gap-4">
        
        <FaTimes
          className="absolute top-4 right-4 bg-[#1C1C1C82] p-1 rounded-full text-white text-[20px] cursor-pointer hover:bg-black transition"
          onClick={onClose}
        />

        <h1 className="text-white text-[50px] font-bold leading-tight">
          DISCOUNT
        </h1>

        <p className="text-white text-[20px] font-medium">UP TO</p>

        <h1 className="text-white text-[60px] font-bold leading-none">50%</h1>

        <p className="text-white text-[20px] font-medium">OFF</p>

        <button
          className="mt-6 bg-white text-black font-bold text-[24px] py-2 px-10 rounded-[61px] hover:bg-black hover:text-white transition-all"
          onClick={onNavigate}
        >
          CLICK HERE
        </button>

      </div>
    </div>

);
}
