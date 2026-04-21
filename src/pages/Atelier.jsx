import React, { useRef, useState, useEffect } from "react";
import soundIcon from "../assets/Images/sound.png";
import noSoundIcon from "../assets/Images/Nosound.png";
import "./Page.css";
import WorkshopBackground from "../components/WorkshopBackground";
import { useNavigate } from "react-router-dom";
import slide from "../assets/Musiques/slide.mp3";
import click from "../assets/Musiques/hover.mp3";
import confirm from "../assets/Musiques/valid2.mp3";
import lightClick from "../assets/Musiques/lightClick.mp3";
import BookModal from "../components/BookModal";
import pickUp from "../assets/Musiques/paper.mp3";

// DRAWINGS :

import AliceConcours from "../assets/Images/Drawings/AliceConcours.png";
import Alicelabest from "../assets/Images/Drawings/Alicelabest.png";
import AliGao from "../assets/Images/Drawings/AliGao.png";
import AnaelCommi4 from "../assets/Images/Drawings/AnaelCommi4.png";
import annivdjak from "../assets/Images/Drawings/annivdjak.png";
import AnnivHugo2 from "../assets/Images/Drawings/AnnivHugo2.png";
import BeachTime from "../assets/Images/Drawings/BeachTime.png";
import BeachYeee from "../assets/Images/Drawings/BeachYeee.png";
import Clouds from "../assets/Images/Drawings/Clouds.png";
import DessinFlorian from "../assets/Images/Drawings/DessinFlorian.png";
import FloDessinYipee from "../assets/Images/Drawings/FloDessinYipee.png";
import FRINWOO from "../assets/Images/Drawings/FRINWOO.png";
import HamideDessin from "../assets/Images/Drawings/HamideDessin.png";
import LesCoupainsBlue from "../assets/Images/Drawings/LesCoupainsBlue.png";
import LucielAnniv from "../assets/Images/Drawings/LucielAnniv.png";
import Manipulation from "../assets/Images/Drawings/Manipulation.png";
import Ocean from "../assets/Images/Drawings/ocean.png";
import PapyAot from "../assets/Images/Drawings/Papy-Aot.png";
import PassingTime from "../assets/Images/Drawings/PassingTime.png";
import SUMMERTIME from "../assets/Images/Drawings/SUMMERTIME.png";
import TheMeeting from "../assets/Images/Drawings/TheMeeting.png";
import VincentRaccoons from "../assets/Images/Drawings/VincentRaccoons.png";
import Yukoc from "../assets/Images/Drawings/Yukoc.png";
import YuyuHopper2 from "../assets/Images/Drawings/YuyuHopper2.png";
import YuyuOctimed from "../assets/Images/Drawings/YuyuOCtimed.png";
import YukoOCBARBU from "../assets/Images/Drawings/YukoOCBARBU.png";
import DragonAndDragon from "../assets/Images/Drawings/DragonAndDragon.png";
import FrinDessin from "../assets/Images/Drawings/FrinDessin.png";
import YukoTutsu from "../assets/Images/Drawings/YukoTutsu.png";
import FrenhirFanart from "../assets/Images/Drawings/FrenhirFanart.png";
import GOODMORNIIING from "../assets/Images/Drawings/GOODMORNIIING.png";
import idk from "../assets/Images/Drawings/idk.png";
import kaaach from "../assets/Images/Drawings/kaaach.png";
import KidFrenhir from "../assets/Images/Drawings/KidFrenhir.png";
import LandscapeTry from "../assets/Images/Drawings/Landscape.png";
import lighttest from "../assets/Images/Drawings/lighttest.png";
import MhiiingFanart from "../assets/Images/Drawings/MhiiingFanart.png";
import PapyragornPfp from "../assets/Images/Drawings/PapyragornPfp.png";
import RehkpeRapido from "../assets/Images/Drawings/RehkpeRapido.png";
import Septsent from "../assets/Images/Drawings/Septsent.png";
import Water from "../assets/Images/Drawings/Water.png";
import WitchFrog from "../assets/Images/Drawings/WitchFrog.png";
import yipee from "../assets/Images/Drawings/yipee.png";
import YukOC2 from "../assets/Images/Drawings/YukOC2.png";
import yuyu from "../assets/Images/Drawings/yuyu.png";
import YuyuOmori from "../assets/Images/Drawings/YuyuOmori.png";
import YuYuTestFurry2 from "../assets/Images/Drawings/YuYuTestFurry2.png";
import LAPIN from "../assets/Images/Drawings/LAPIN.png";
import ConceptLapin from "../assets/Images/Drawings/ConceptLapin.png";
import RandomColorAnimal from "../assets/Images/Drawings/RandomColorAnimal.png";
import RandomColorGirl from "../assets/Images/Drawings/RandomColorGirl.png";
import RandomColorChar from "../assets/Images/Drawings/RandomColorChar.png";

// SKETCHES :

import AliceCroquis from "../assets/Images/Sketches/AliceCroquis.png";
import AlicelabestCroquis from "../assets/Images/Sketches/AlicelabestCroquis.png";
import AnnivHugoCroquis from "../assets/Images/Sketches/AnnivHugoCroquis.png";
import croquisrapido3 from "../assets/Images/Sketches/croquisrapido3.png";
import croquisrapido5 from "../assets/Images/Sketches/croquisrapido5.png";
import croquisrapido8 from "../assets/Images/Sketches/croquisrapido8.png";
import croquisrapido10 from "../assets/Images/Sketches/croquisrapido10.png";
import GeorgeHunterSk from "../assets/Images/Sketches/George HunterSk.png";
import HimaFanartcroquis from "../assets/Images/Sketches/Hima Fanart croquis.png";
import Rainbowcroquis from "../assets/Images/Sketches/Rainbowcroquis.png";
import YuyuHopper from "../assets/Images/Sketches/YuyuHopper.png";
import yuyuhoppersketch from "../assets/Images/Sketches/yuyuhoppersketch.png";
import annivdjakcroquis from "../assets/Images/Sketches/annivdjakcroquis.png";
import AOTPAPYCroquis from "../assets/Images/Sketches/AOTPAPYCroquis.png";
import BeachYeeeCroquis from "../assets/Images/Sketches/BeachYeeeCroquis.png";
import BeastmasterDjakkaCroquis from "../assets/Images/Sketches/BeastmasterDjakkaCroquis.png";
import conceptillu from "../assets/Images/Sketches/conceptillu.png";
import croquis from "../assets/Images/Sketches/croquis.png";
import croquisrapido4 from "../assets/Images/Sketches/croquisrapido4.png";
import FrinCroquis from "../assets/Images/Sketches/FrinCroquis.png";
import GeorgeHunter from "../assets/Images/Sketches/GeorgeHunter.png";
import LesCoupainsWIPO from "../assets/Images/Sketches/LesCoupainsWIPO.png";
import unknown from "../assets/Images/Sketches/unknown.png";
import yukoOCCroquis from "../assets/Images/Sketches/yukoOCCroquis.png";
import yuyuCroquisOC from "../assets/Images/Sketches/yuyuCroquisOC.png";

// ANIMATIONS :

import AliceSmileLight from "../assets/Images/Animations/AliceSmileLight.gif";
import axetestblackbg from "../assets/Images/Animations/axetestblackbg.gif";
import BillieToppy from "../assets/Images/Animations/BillieToppy.mp4";
import Landscape from "../assets/Images/Animations/Landscape.gif";
import LandscapeNight from "../assets/Images/Animations/LandscapeNight.gif";
import MirrorFinished from "../assets/Images/Animations/MirrorFinished.mp4";
import picturesketchwip from "../assets/Images/Animations/picturesketchwip.mp4";
import Shock from "../assets/Images/Animations/Shock.gif";
import StartingScreencolored from "../assets/Images/Animations/StartingScreencolored.mp4";
import music from "../assets/Musiques/9am.mp3";

export default function Atelier({ muted, toggleSound, setMusic }) {

  // Book modal 
  const [bookOpen, setBookOpen] = useState(false);

  // Image closeup
  const [zoomImage, setZoomImage] = useState(null);

  // Plays sound when you zoom picture
  const pickUpSound = () => {
    const audio = new Audio(pickUp);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  // Play page ambiant music
  useEffect(() => {
    setMusic(music);
  }, []);

  // Bookmodal depending from the selected canva
  const booksByCanvas = [
    // DRAWINGS
    [
      {
        left: (
          <img
            src={AliceConcours}
            alt="AliceConcours"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(AliceConcours);
            }}
          />
        ),
        right: (
          <img
            src={Alicelabest}
            alt="Alicelabest"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(Alicelabest);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={AliGao}
            alt="AliGao"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(AliGao);
            }}
          />
        ),
        right: (
          <img
            src={AnaelCommi4}
            alt="AnaelCommi4"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(AnaelCommi4);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={annivdjak}
            alt="annivdjak"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(annivdjak);
            }}
          />
        ),
        right: (
          <img
            src={AnnivHugo2}
            alt="AnnivHugo2"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(AnnivHugo2);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={BeachTime}
            alt="BeachTime"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(BeachTime);
            }}
          />
        ),
        right: (
          <img
            src={BeachYeee}
            alt="BeachYeee"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(BeachYeee);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={Clouds}
            alt="Clouds"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(Clouds);
            }}
          />
        ),
        right: (
          <img
            src={DessinFlorian}
            alt="DessinFlorian"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(DessinFlorian);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={FloDessinYipee}
            alt="FloDessinYipee"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(FloDessinYipee);
            }}
          />
        ),
        right: (
          <img
            src={FRINWOO}
            alt="FRINWOO"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(FRINWOO);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={HamideDessin}
            alt="HamideDessin"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(HamideDessin);
            }}
          />
        ),
        right: (
          <img
            src={LesCoupainsBlue}
            alt="LesCoupainsBlue"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(LesCoupainsBlue);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={LucielAnniv}
            alt="LucielAnniv"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(LucielAnniv);
            }}
          />
        ),
        right: (
          <img
            src={Manipulation}
            alt="Manipulation"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(Manipulation);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={Ocean}
            alt="Ocean"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(Ocean);
            }}
          />
        ),
        right: (
          <img
            src={PapyAot}
            alt="PapyAot"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(PapyAot);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={PassingTime}
            alt="PassingTime"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(PassingTime);
            }}
          />
        ),
        right: (
          <img
            src={SUMMERTIME}
            alt="SUMMERTIME"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(SUMMERTIME);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={TheMeeting}
            alt="TheMeeting"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(TheMeeting);
            }}
          />
        ),
        right: (
          <img
            src={VincentRaccoons}
            alt="VincentRaccoons"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(VincentRaccoons);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={Yukoc}
            alt="Yukoc"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(Yukoc);
            }}
          />
        ),
        right: (
          <img
            src={YuyuHopper2}
            alt="YuyuHopper2"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(YuyuHopper2);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={YuyuOctimed}
            alt="YuyuOctimed"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(YuyuOctimed);
            }}
          />
        ),
        right: (
          <img
            src={ConceptLapin}
            alt="ConceptLapin"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(ConceptLapin);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={YukoOCBARBU}
            alt="YukoOCBARBU"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(YukoOCBARBU);
            }}
          />
        ),
        right: (
          <img
            src={DragonAndDragon}
            alt="DragonAndDragon"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(DragonAndDragon);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={FrinDessin}
            alt="FrinDessin"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(FrinDessin);
            }}
          />
        ),
        right: (
          <img
            src={YukoTutsu}
            alt="YukoTutsu"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(YukoTutsu);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={FrenhirFanart}
            alt="FrenhirFanart"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(FrenhirFanart);
            }}
          />
        ),
        right: (
          <img
            src={GOODMORNIIING}
            alt="GOODMORNIIING"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(GOODMORNIIING);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={idk}
            alt="idk"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(idk);
            }}
          />
        ),
        right: (
          <img
            src={kaaach}
            alt="kaaach"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(kaaach);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={KidFrenhir}
            alt="KidFrenhir"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(KidFrenhir);
            }}
          />
        ),
        right: (
          <img
            src={LandscapeTry}
            alt="LandscapeTry"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(LandscapeTry);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={lighttest}
            alt="lighttest"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(lighttest);
            }}
          />
        ),
        right: (
          <img
            src={MhiiingFanart}
            alt="MhiiingFanart"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(MhiiingFanart);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={PapyragornPfp}
            alt="PapyragornPfp"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(PapyragornPfp);
            }}
          />
        ),
        right: (
          <img
            src={RehkpeRapido}
            alt="RehkpeRapido"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(RehkpeRapido);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={Septsent}
            alt="Septsent"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(Septsent);
            }}
          />
        ),
        right: (
          <img
            src={Water}
            alt="Water"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(Water);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={WitchFrog}
            alt="WitchFrog"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(WitchFrog);
            }}
          />
        ),
        right: (
          <img
            src={yipee}
            alt="yipee"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(yipee);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={YukOC2}
            alt="YukOC2"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(YukOC2);
            }}
          />
        ),
        right: (
          <img
            src={yuyu}
            alt="yuyu"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(yuyu);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={YuyuOmori}
            alt="YuyuOmori"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(YuyuOmori);
            }}
          />
        ),
        right: (
          <img
            src={YuYuTestFurry2}
            alt="YuYuTestFurry2"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(YuYuTestFurry2);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={LAPIN}
            alt="LAPIN"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(LAPIN);
            }}
          />
        ),
        right: (
          <img
            src={RandomColorAnimal}
            alt="RandomColorAnimal"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(RandomColorAnimal);
            }}
        />
        )
      },

      {
        left: (
          <img
            src={RandomColorGirl}
            alt="RandomColorGirl"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(RandomColorGirl);
            }}
          />
        ),
        right: (
          <img
            src={RandomColorChar}
            alt="RandomColorChar"
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(RandomColorChar);
            }}
        />
        )
      },
    ],

    // SKETCHES
    [
      {
        left: (
          <img
            src={AliceCroquis}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(AliceCroquis);
            }}
          />
        ),
        right: (
          <img
            src={AlicelabestCroquis}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(AlicelabestCroquis);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={AnnivHugoCroquis}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(AnnivHugoCroquis);
            }}
          />
        ),
        right: (
          <img
            src={croquisrapido3}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(croquisrapido3);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={croquisrapido5}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(croquisrapido5);
            }}
          />
        ),
        right: (
          <img
            src={croquisrapido8}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(croquisrapido8);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={croquisrapido10}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(croquisrapido10);
            }}
          />
        ),
        right: (
          <img
            src={GeorgeHunterSk}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(GeorgeHunterSk);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={HimaFanartcroquis}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(HimaFanartcroquis);
            }}
          />
        ),
        right: (
          <img
            src={Rainbowcroquis}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(Rainbowcroquis);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={YuyuHopper}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(YuyuHopper);
            }}
          />
        ),
        right: (
          <img
            src={yuyuhoppersketch}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(yuyuhoppersketch);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={annivdjakcroquis}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(annivdjakcroquis);
            }}
          />
        ),
        right: (
          <img
            src={AOTPAPYCroquis}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(AOTPAPYCroquis);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={BeachYeeeCroquis}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(BeachYeeeCroquis);
            }}
          />
        ),
        right: (
          <img
            src={BeastmasterDjakkaCroquis}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(BeastmasterDjakkaCroquis);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={conceptillu}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(conceptillu);
            }}
          />
        ),
        right: (
          <img
            src={croquis}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(croquis);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={croquisrapido4}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(croquisrapido4);
            }}
          />
        ),
        right: (
          <img
            src={FrinCroquis}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(FrinCroquis);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={GeorgeHunter}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(GeorgeHunter);
            }}
          />
        ),
        right: (
          <img
            src={LesCoupainsWIPO}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(LesCoupainsWIPO);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={unknown}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(unknown);
            }}
          />
        ),
        right: (
          <img
            src={yukoOCCroquis}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(yukoOCCroquis);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={yuyuCroquisOC}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(yuyuCroquisOC);
            }}
          />
        ),
        right: null,
      },
    ],

    // ANIMATIONS
    [
      {
        left: (
          <img
            src={AliceSmileLight}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(AliceSmileLight);
            }}
          />
        ),
        right: (
          <img
            src={axetestblackbg}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(axetestblackbg);
            }}
          />
        ),
      },

      {
        left: (
          <video className="picture" controls loop>
            <source src={BillieToppy} type="video/mp4" />
          </video>
        ),
        right: (
          <img
            src={Landscape}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(Landscape);
            }}
          />
        ),
      },

      {
        left: (
          <img
            src={LandscapeNight}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(LandscapeNight);
            }}
          />
        ),
        right: (
          <video className="picture" controls loop>
            <source src={MirrorFinished} type="video/mp4" />
          </video>
        ),
      },

      {
        left: (
          <video className="picture" controls loop>
            <source src={picturesketchwip} type="video/mp4" />
          </video>
        ),
        right: (
          <img
            src={Shock}
            className="picture"
            onClick={() => {
              pickUpSound();
              setZoomImage(Shock);
            }}
          />
        ),
      },

      {
        left: (
          <video className="picture" controls loop>
            <source src={StartingScreencolored} type="video/mp4" />
          </video>
        ),
        right: null,
      },
    ],
  ];
  
  const navigate = useNavigate();
  const [canvasIndex, setCanvasIndex] = useState(0);

  // Next page
  const nextCanvas = () => {
    setCanvasIndex((prev) => (prev + 1) % 3);
    const slideAudio = new Audio(slide);
    slideAudio.volume = 0.5;
    slideAudio.play();
    const clickAudio = new Audio(click);
    clickAudio.volume = 0.5;
    clickAudio.play();
  };

  // Previous page
  const prevCanvas = () => {
    setCanvasIndex((prev) => (prev - 1 + 3) % 3);
    const clickAudio = new Audio(click);
    clickAudio.volume = 0.5;
    clickAudio.play();

  // Sound when you switch page
    const slideAudio = new Audio(slide);
    slideAudio.volume = 0.5;
    slideAudio.play();
  };

  // Sound when you click the "see" button
  const seeBtn = () => {
    const confirmAudio = new Audio(confirm);
    confirmAudio.volume = 0.5;
    confirmAudio.play();
  };

  // Sound when you hover the element
  const playHoverSound = () => {
    const hover = new Audio(click);
    hover.volume = 0.3;
    hover.play().catch(() => {});
  };

  // "Switch" sound when you click on filter or mute button
  const playLightClick = () => {
    const audio = new Audio(lightClick);
    audio.volume = 0.4;
    audio.play().catch(() => {});
  };

  return (
    <div className="page">
      <WorkshopBackground canvasIndex={canvasIndex} />
      <button className="back-button" onClick={() => navigate("/")}>
        ←
      </button>
      <button
        className="sound-button"
        onClick={() => {
          toggleSound();
          playLightClick();
        }}
      >
        <img src={muted ? noSoundIcon : soundIcon} alt="sound toggle" />
      </button>
      <button className="left-button" onClick={prevCanvas}>
        ◀
      </button>
      <button className="right-button" onClick={nextCanvas}>
        ▶
      </button>

      <button
        className="see-button"
        onClick={() => {
          setBookOpen(true);
          seeBtn();
        }}
        onMouseEnter={playHoverSound}
      >
        Voir
      </button>

      <BookModal
        key={canvasIndex}
        isOpen={bookOpen}
        onClose={() => setBookOpen(false)}
        pages={booksByCanvas[canvasIndex]}
      />

      {zoomImage && (
        <div className="image-zoom-overlay" onClick={() => setZoomImage(null)}>
          <img src={zoomImage} className="image-zoomed" />
        </div>
      )}
    </div>
  );
}
