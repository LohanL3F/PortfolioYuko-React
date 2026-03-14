import React, { useRef, useEffect } from "react";

const Background = ({ filterEnabled }) => {
  const bgRef = useRef(null);

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
            case "RoomBG":
              factor = 15;
              break;
            case "RoomBED":
              factor = 20;
              break;
            case "RoomCHAR":
              factor = 25;
              break;
            case "RoomFILTER":
              factor = 0;
              break;
            case "RoomLIGHT1":
            case "RoomLIGHT2":
              factor = 30;
              break;
            case "RoomPARTICLES":
              factor = -40;
              break;
            case "RoomHIDE":
              factor = 1;
              break;
            case "RoomPLANTS":
              factor = 20;
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
      <div id="RoomBG"></div>
      <div id="RoomBED"></div>
      <div id="RoomCHAR"></div>
      {filterEnabled && <div id="RoomFILTER"></div>}
      <div id="RoomLIGHT1"></div>
      <div id="RoomLIGHT2"></div>
      <div id="RoomPARTICLES"></div>
      <div id="RoomPLANTS"></div>
      <div id="RoomHIDE"></div>
    </div>
  );
};

export default Background;
