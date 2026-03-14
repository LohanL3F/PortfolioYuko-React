import React, { useState, useEffect } from "react";
import "./BookModal.css";
import bookModal from "../assets/Images/WorkShopBookModal.png";
import paperSwitch from "../assets/Musiques/pageswitch.mp3";
import pickUp from "../assets/Musiques/paper.mp3";
import closeBook from "../assets/Musiques/closeBook.mp3";

export default function BookModal({ isOpen, onClose, pages }) {
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((v) => v.pause());
  }, [pageIndex, isOpen]);

  const playPageSwitch = () => {
    const audio = new Audio(paperSwitch);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  const playPickUp = () => {
    const audio = new Audio(pickUp);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  const playCloseBook = () => {
    const audio = new Audio(closeBook);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  if (!isOpen || !pages || pages.length === 0) return null;

  const nextPage = () => setPageIndex((prev) => (prev + 1) % pages.length);
  const prevPage = () =>
    setPageIndex((prev) => (prev - 1 + pages.length) % pages.length);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="book-modal" onClick={(e) => e.stopPropagation()}>
        <div className="book-content">
          <button
            className="close-button"
            onClick={() => {
              playCloseBook();
              onClose();
            }}
          >
            ✖
          </button>

          <div className="book-page">
            <div className="page-left">
              {React.cloneElement(pages[pageIndex].left, { key: pageIndex })}
            </div>
            <div className="page-right">
              {pages[pageIndex].right &&
                React.cloneElement(pages[pageIndex].right, { key: pageIndex })}
            </div>
          </div>

          <div className="book-controls">
            <button
              className="ArrowBTN"
              onClick={() => {
                playPageSwitch();
                prevPage();
              }}
            >
              ◀
            </button>
            <span id="pageNum">
              {pageIndex + 1} / {pages.length}
            </span>
            <button
              className="ArrowBTN"
              onClick={() => {
                playPageSwitch();
                nextPage();
              }}
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
