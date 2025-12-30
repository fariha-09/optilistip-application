import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Actionbuttons from "../components/Actionbuttons";
import { useNavigate } from "react-router-dom";
import Promotionpage from "./Promotionpage";
import { useState } from "react";

export default function Homepage() {
   const [showPromo, setShowPromo] = useState(true);  
  const navigate = useNavigate();

  const closePromo = () => setShowPromo(false);

  const goToLink = () => {
    navigate("https://codesvista.com");   
  };

  return (
      <div className="relative">
      {showPromo && (
        <Promotionpage
          onClose={closePromo}
          onNavigate={goToLink}
        />
      )}
      <Navbar />
      <Herosection />
      <Actionbuttons />
      </div>
  )}