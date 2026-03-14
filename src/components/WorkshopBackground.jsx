import React, { useRef, useEffect } from "react";
import { isFilterEnabled } from "../utils/filterStorage";

const WorkshopBackground = () => {
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
            case "WorkshopBG":
              factor = 15;
              break;
            case "WorkshopBOOK":
              factor = 15;
              break;
            case "WorkshopPC":
              factor = 25;
              break;
            case "WorkshopCANVA":
              factor = 30;
              break;
            case "RoomFILTER":
              factor = 0;
              break;
            case "WorkshopLIGHT1":
            case "WorkshopLIGHT2":
              factor = 35;
              break;
            case "WorkshopPARTICLES":
              factor = -40;
              break;
            case "WorkshopHIDE":
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
      <div id="WorkshopBG"></div>
      <div id="WorkshopBOOK"></div>
      <div id="WorkshopPC"></div>
      <div id="WorkshopCANVA"></div>
      {showFilter && <div id="RoomFILTER"></div>}{" "}
      <div id="WorkshopLIGHT1"></div>
      <div id="WorkshopLIGHT2"></div>
      <div id="WorkshopPARTICLES"></div>
      <div id="WorkshopHIDE"></div>
    </div>
  );
};

export default WorkshopBackground;
