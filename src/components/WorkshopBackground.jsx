import React, { useRef, useEffect } from "react";
import { isFilterEnabled } from "../utils/filterStorage";

const WorkshopBackground = ({ canvasIndex }) => {
  const bgRef = useRef(null);
  const showFilter = isFilterEnabled();

  const getZIndex = (id) => {
    if (canvasIndex === 0) {
      if (id === "WorkshopCANVA") return -6;
      if (id === "WorkshopCANVA2") return -7;
      if (id === "WorkshopCANVA3") return -8;
    } else if (canvasIndex === 1) {
      if (id === "WorkshopCANVA") return -7;
      if (id === "WorkshopCANVA2") return -6;
      if (id === "WorkshopCANVA3") return -7;
    } else if (canvasIndex === 2) {
      if (id === "WorkshopCANVA") return -8;
      if (id === "WorkshopCANVA2") return -7;
      if (id === "WorkshopCANVA3") return -6;
    }
    return -7;
  };

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

    const animateLayer = (layer, factor, baseX = 0) => {
      layer.style.transform = `translateX(${baseX}vw) translate(${currentX * factor}px, ${currentY * factor}px)`;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      if (!bgRef.current) return;

      const layers = [
        { id: "WorkshopBG", factor: 15 },
        { id: "WorkshopBOOK", factor: 15 },
        { id: "WorkshopPC", factor: 25 },
        { id: "RoomFILTER", factor: 0 },
        { id: "CanvasWrapper", factor: 20 },
        { id: "WorkshopLIGHT1", factor: 35 },
        { id: "WorkshopLIGHT2", factor: 35 },
        { id: "WorkshopPARTICLES", factor: -40 },
        { id: "WorkshopHIDE", factor: 1 },
      ];

      layers.forEach(({ id, factor, baseX = 0 }) => {
        const layer = bgRef.current.querySelector(`#${id}`);
        if (layer) animateLayer(layer, factor, baseX);
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [canvasIndex]);

  return (
    <div ref={bgRef} className={`background canvas-${canvasIndex}`}>
      <div id="WorkshopBG"></div>
      <div id="WorkshopBOOK"></div>
      <div id="WorkshopPC"></div>

      {/* Slider */}
      <div className="canvas-wrapper" id="CanvasWrapper">
        <div
          id="WorkshopCANVA"
          className="canvas"
          style={{
            zIndex: getZIndex("WorkshopCANVA"),
            transform: `translateX(${(-canvasIndex + 0) * 100}vw)`,
          }}
        />
        <div
          id="WorkshopCANVA2"
          className="canvas"
          style={{
            zIndex: getZIndex("WorkshopCANVA2"),
            transform: `translateX(${(-canvasIndex + 1) * 100}vw)`,
          }}
        />
        <div
          id="WorkshopCANVA3"
          className="canvas"
          style={{
            zIndex: getZIndex("WorkshopCANVA3"),
            transform: `translateX(${(-canvasIndex + 2) * 100}vw)`,
          }}
        />
      </div>

      {showFilter && <div id="RoomFILTER" style={{ zIndex: -5 }}></div>}
      <div id="WorkshopLIGHT1" style={{ zIndex: -4 }}></div>
      <div id="WorkshopLIGHT2" style={{ zIndex: -3 }}></div>
      <div id="WorkshopPARTICLES" style={{ zIndex: -2 }}></div>
      <div id="WorkshopHIDE" style={{ zIndex: -1 }}></div>
    </div>
  );
};

export default WorkshopBackground;
