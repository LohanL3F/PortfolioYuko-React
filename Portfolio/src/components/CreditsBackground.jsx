import React, { useRef, useEffect } from "react";
import CreditsPAPER from "../assets/Images/CreditsPAPER.png";
import { isFilterEnabled } from "../utils/filterStorage";

const CreditsBackground = () => {
  const bgRef = useRef(null);
  const showFilter = isFilterEnabled();

  // Parallax
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      if (bgRef.current) {
        bgRef.current.querySelectorAll("div").forEach((layer) => {
          let factor = 5;

          switch (layer.id) {
            case "CreditsBG":
              factor = 15;
              break;
            case "RoomFILTER":
              factor = 0;
            case "CreditsLIGHT1":
            case "CreditsLIGHT2":
              factor = 35;
              break;

            case "CreditsPAPER":
              factor = 15;
              break;

            case "CreditsPARTICLES":
              factor = -40;
              break;
            case "CreditsHIDE":
              factor = 1;
              break;
          }

          layer.style.transform = `translate(${currentX * factor}px, ${currentY * factor}px)`;
        });
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={bgRef} className="background">
      <div id="CreditsBG"></div>
      {showFilter && <div id="RoomFILTER"></div>}
      <div id="CreditsLIGHT1"></div>
      <div id="CreditsLIGHT2"></div>
      <div id="CreditsPARTICLES"></div>
      <div id="CreditsHIDE"></div>
      <div id="CreditsPAPER">
        <div id="CreditsContent">
          <p style={{ fontWeight: "bold", fontSize: "34px" }}>CREDITS :</p>
          <p>Concept, Design & Development : YukoSmile</p>
          <p style={{ fontWeight: "bold" }}>Musics :</p>
          <p>Going Under OST - Make your dreams fizzle (Aggro Crab)</p>
          <p>Going Under OST - 9:01 am (Aggro Crab)</p>
          <p>Going Under OST - Small Talk (Aggro Crab)</p>
          <p style={{ fontWeight: "bold" }}>Sound Effects :</p>
          <p>Pixabay library</p>
        </div>
      </div>
    </div>
  );
};

export default CreditsBackground;
