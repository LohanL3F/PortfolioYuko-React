import React, { useRef, useEffect } from "react";
import CreditsPAPER from "../assets/Images/CreditsPAPER.png";
import { isFilterEnabled } from "../utils/filterStorage";

const CreditsBackground = () => {
  const bgRef = useRef(null);
  const textRef = useRef(null);
  const showFilter = isFilterEnabled();

  useEffect(() => {
    let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0, rafId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    };

    const factors = {
      CreditsBG: 15,
      RoomFILTER: 0,
      CreditsLIGHT1: 35,
      CreditsLIGHT2: 35,
      CreditsPAPER: 15,
      CreditsPARTICLES: -40,
      CreditsHIDE: 1,
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      bgRef.current?.querySelectorAll("div").forEach((layer) => {
        const f = factors[layer.id] ?? 5;
        layer.style.translate = `${currentX * f}px ${currentY * f}px`;
      });

      if (textRef.current) {
        textRef.current.style.translate = `${currentX * 15}px ${currentY * 15}px`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={bgRef} className="background">
        <div id="CreditsBG"></div>
        {showFilter && <div id="RoomFILTER"></div>}
        <div id="CreditsLIGHT1"></div>
        <div id="CreditsLIGHT2"></div>
        <div id="CreditsPARTICLES"></div>
        <div id="CreditsHIDE"></div>
        <div id="CreditsPAPER"></div>
      </div>

      <div id="CreditsPaperText" ref={textRef}>
        <div id="CreditsContent">
          <p style={{ fontWeight: "bold", fontSize: "1.4em" }}>CREDITS :</p>
          <p>Concept, Design & Development : YukoSmile</p>
          <p style={{ fontWeight: "bold" }}>Musics :</p>
          <a href="https://youtu.be/yfQ-UJ1J6Os?si=_hD8krjJPVLKtBB3" target="_blank" rel="noreferrer">
            Going Under OST - Make your dreams fizzle (Aggro Crab)
          </a>
          <a href="https://youtu.be/euFDA2hDw7U?si=aOhkgHbv__PFcXp4" target="_blank" rel="noreferrer">
            Going Under OST - 9:01 am (Aggro Crab)
          </a>
          <a href="https://youtu.be/7nTv0VWPJ1A?si=guZmT6XTNNKCt0oM" target="_blank" rel="noreferrer">
            Going Under OST - Small Talk (Aggro Crab)
          </a>
          <a href="https://youtu.be/Fi-M86Aj6gc?si=NEUTBRj7Hs74a0rL" target="_blank" rel="noreferrer">
            Breaking Ground - Daniel Koestner
          </a>
          <p style={{ fontWeight: "bold" }}>Sound Effects :</p>
          <a href="https://pixabay.com/fr/" target="_blank" rel="noreferrer">
            Pixabay library
          </a>
        </div>
      </div>
    </>
  );
};

export default CreditsBackground;
