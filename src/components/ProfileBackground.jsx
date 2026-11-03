import React, { useRef, useEffect } from "react";
import { isFilterEnabled } from "../utils/filterStorage";
const BOARD_W = 1400;
const BOARD_H = 840;
const FILL = 0.88;
const MIN_FONT = 14; 

const Background = ({ children }) => {
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const showFilter = isFilterEnabled();

  useEffect(() => {
    const bg = bgRef.current;
    const content = contentRef.current;
    const parent = bg?.parentElement;
    if (!bg || !content || !parent) return;

    const update = () => {
      const s =
        Math.min(parent.clientWidth / BOARD_W, parent.clientHeight / BOARD_H) *
        FILL;
      const boost = Math.min(2.5, Math.max(1, MIN_FONT / (24 * s)));
      [bg, content].forEach((el) => {
        el.style.setProperty("--stage-scale", s);
        el.style.setProperty("--boost", boost);
      });
      content.dataset.compact = boost > 1.001 ? "true" : "false";
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(parent);
    return () => ro.disconnect();
  }, []);

  // Parallax
  useEffect(() => {
    let mouseX = 0,
      mouseY = 0,
      currentX = 0,
      currentY = 0,
      raf;

    const handleMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      if (bgRef.current) {
        bgRef.current.querySelectorAll(":scope > div").forEach((layer) => {
          let factor = 5;
          switch (layer.id) {
            case "ProfileBG":
              factor = 15;
              break;
            case "ProfileBoard":
              factor = 20;
              break;
            case "RoomFILTER":
              factor = 0;
              break;
            case "ProfileLIGHT1":
            case "ProfileLIGHT2":
              factor = 25;
              break;
            case "RoomHIDE":
              factor = 1;
              break;
            case "RoomPARTICLES":
              factor = -40;
              break;
          }
          layer.style.transform = `translate(${currentX * factor}px, ${currentY * factor}px)`;
        });
      }

    
      if (contentRef.current) {
        contentRef.current.style.transform = `translate(${currentX * 20}px, ${currentY * 20}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={bgRef} className="background">
        <div id="ProfileBG"></div>
        <div id="ProfileBoard">
          <div className="stage stage-board"></div>
        </div>
        {showFilter && <div id="RoomFILTER" style={{ zIndex: -5 }}></div>}
        <div id="ProfileLIGHT1"></div>
        <div id="ProfileLIGHT2"></div>
        <div id="RoomPARTICLES"></div>
        <div id="CreditsHIDE"></div>
      </div>

      <div ref={contentRef} id="ProfileContent">
        <div className="stage">{children}</div>
      </div>
    </>
  );
};

export default Background;