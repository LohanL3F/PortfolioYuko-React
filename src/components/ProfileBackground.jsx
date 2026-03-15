import React, { useRef, useEffect } from "react";
import { isFilterEnabled } from "../utils/filterStorage";

const Background = ({ filterEnabled }) => {
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
            case "ProfileBG":
              factor = 15;
              break;
            case "SkillsBoard":
            case "SocialsLinks":
              factor = 0;
              break;
            case "ProfileBoard":
              factor = 20;
              break;
            case "BoardContent":
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

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={bgRef} className="background">
      <div id="ProfileBG"></div>
      <div id="ProfileBoard"></div>
      {showFilter && <div id="RoomFILTER" style={{ zIndex: -5 }}></div>}
      <div id="ProfileLIGHT1"></div>
      <div id="ProfileLIGHT2"></div>
      <div id="RoomPARTICLES"></div>
      <div id="CreditsHIDE"></div>
      <div id="BoardContent">
        <h1>À propos de moi :</h1>
        <p className="near-picture">
          Mon pseudo est Yuko, mais mon vrai nom est Lohan Lefèvre ! Je suis un
          étudiant en développement web. J'aime créer des expériences immersives
          et interactives en utilisant des éléments de mes univers
        </p>
        <br />
        <p className="near-picture">
          Je suis passionné par l'art et l'informatique depuis mon plus jeune
          age, créer, faire découvrir des univers à travers mes créations est
          une de mes passions.
        </p>
        <br />
        <p className="near-picture">
          Je souhaiterais travailler dans le développement web, en particulier
          dans la création de sites web interactifs et immersifs !
        </p>
        <br />
        <p>Jusqu'à maintenant, voici les technologies que j'ai apprises :</p>
        <div id="SkillsBoard">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Git</p>
          <p>Jekyll</p>
          <p>Docker</p>
          <p>PHP</p>
          <p>MySQL</p>
          <p>Java</p>
          <p>Tailwind CSS</p>
          <p>Bootstrap</p>
        </div>

        <p>
          Si vous souhaitez me contacter ou avoir accès à mes réseaux, les voici
          :
        </p>

        <div id="SocialsLinks">
          <a href="https://github.com/LohanL3F" target="_blank">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/lohan-lef%C3%A8vre-4946962b4/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://www.instagram.com/yu.ko._/" target="_blank">
            Instagram
          </a>
          <a href="https://discord.com/invite/G8x9TwggCz" target="_blank">
            Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default Background;
