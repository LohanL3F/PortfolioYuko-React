import React, { useRef, useState, useEffect } from "react";
import "./Page.css";
import WorkshopBackground from "../components/WorkshopBackground";
import { useNavigate, useOutletContext } from "react-router-dom";
import slide from "../assets/Musiques/slide.mp3";
import click from "../assets/Musiques/hover.mp3";
import confirm from "../assets/Musiques/valid2.mp3";
import lightClick from "../assets/Musiques/lightClick.mp3";
import BookModal from "../components/BookModal";
import pickUp from "../assets/Musiques/paper.mp3";
import { playSfx } from "../utils/playSfx";

// ASSETS :

import { drawings, sketches, animations, timelapses } from "../utils/loadAssets"

// MUSIC :
import music from "../assets/Musiques/9am.mp3";

export default function Atelier() {
  const { muted, toggleSound, sfxMuted, toggleSfx, setMusic, pauseMusic, resumeMusic } =
    useOutletContext();
  const [bookOpen, setBookOpen] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const [imagesPerPage, setImagesPerPage] = useState(4);

  const toggleImagesPerPage = () => {
  setImagesPerPage((prev) => (prev === 4 ? 2 : 4));
  };

useEffect(() => {
  if (fullscreenVideo) {
    pauseMusic();
  } else {
    resumeMusic();
  }
}, [fullscreenVideo]);

const pickUpSound = () => playSfx(pickUp, 0.5);

useEffect(() => {
  setMusic(music);
}, []);

const renderPicture = (src) => (
  <img
    src={src}
    className="picture"
    onClick={() => {
      pickUpSound();
      setZoomImage(src);
    }}
  />
);

const renderVideo = (src) => (
  <div
    className="video-thumb"
    onClick={() => {
      pickUpSound();
      setFullscreenVideo(src);
    }}
  >
    <video src={src} className="picture" muted preload="metadata" />
    <span className="play-overlay">▶</span>
  </div>
);

const chunkIntoPages = (items, renderer, perPage) => {
  const pages = [];
  for (let i = 0; i < items.length; i += perPage) {
    pages.push(items.slice(i, i + perPage).map((item) => renderer(item)));
  }
  return pages;
};

const renderItem = (item) =>
  item.type === "video" ? renderVideo(item.src) : renderPicture(item.src);

const booksByCanvas = [
  chunkIntoPages(drawings, renderItem, imagesPerPage),
  chunkIntoPages(sketches, renderItem, imagesPerPage),
  chunkIntoPages(animations, renderItem, imagesPerPage),
  chunkIntoPages(timelapses, renderItem, imagesPerPage),
];

const navigate = useNavigate();
const CANVAS_COUNT = booksByCanvas.length;
  const [canvasIndex, setCanvasIndex] = useState(0);
  const nextCanvas = () => {
    setCanvasIndex((prev) => (prev + 1) % CANVAS_COUNT);
    playSfx(slide, 0.5);
    playSfx(click, 0.5);
  };

  const prevCanvas = () => {
    setCanvasIndex((prev) => (prev - 1 + CANVAS_COUNT) % CANVAS_COUNT);
    playSfx(click, 0.5);
    playSfx(slide, 0.5);
  };

  const seeBtn = () => playSfx(confirm, 0.5);

  const playHoverSound = () => playSfx(click, 0.3);

  const playLightClick = () => playSfx(lightClick, 0.4);

  return (
    <div className="page">
      <WorkshopBackground canvasIndex={canvasIndex} />
      <button className="back-button" onClick={() => navigate("/")}>
        ←
      </button>

      <button
        className="pages-toggle-button"
        onClick={toggleImagesPerPage}
      >
        {imagesPerPage === 4 ? "4" : "2"}
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
        key={`${canvasIndex}-${imagesPerPage}`}
        isOpen={bookOpen}
        onClose={() => setBookOpen(false)}
        pages={booksByCanvas[canvasIndex]}
        imagesPerPage={imagesPerPage}
      />

      {zoomImage && (
        <div className="image-zoom-overlay" onClick={() => setZoomImage(null)}>
          <img src={zoomImage} className="image-zoomed" />
        </div>
      )}

      {fullscreenVideo && (
        <div
          className="image-zoom-overlay"
          onClick={() => setFullscreenVideo(null)}
        >
          <video
            className="image-zoomed"
            src={fullscreenVideo}
            controls
            autoPlay
            loop
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
