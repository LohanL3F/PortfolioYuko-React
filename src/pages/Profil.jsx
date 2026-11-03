import React, { useEffect } from "react";
import music from "../assets/Musiques/BreakingGround.mp3";
import soundIcon from "../assets/Images/sound.png";
import noSoundIcon from "../assets/Images/Nosound.png";
import "./Page.css";
import ProfileBackground from "../components/ProfileBackground";
import { useNavigate, useOutletContext } from "react-router-dom";
import lightClick from "../assets/Musiques/lightClick.mp3";
import { playSfx } from "../utils/playSfx";

export default function Profile() {
  const { muted, toggleSound, setMusic } = useOutletContext();
  const navigate = useNavigate();

  const playLightClick = () => playSfx(lightClick, 0.4);

  // Plays page ambiant music
  useEffect(() => {
    setMusic(music);
  }, []);

  return (
    <div className="page">
      <ProfileBackground>
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
          <p>Stack MERN</p>
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
          <a href="https://linktr.ee/yukosmile" target="_blank">Linktree</a>
        </div>
      </div>
  </ProfileBackground>
  <button className="back-button" onClick={() => navigate("/")}>←</button>
    </div>
  );
}
