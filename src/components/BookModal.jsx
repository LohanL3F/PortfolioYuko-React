import React, { useState, useEffect } from "react";
import "./BookModal.css";
import bookModal from "../assets/Images/WorkShopBookModal.png";
import { playSfx } from "../utils/playSfx";
import paperSwitch from "../assets/Musiques/pageswitch.mp3";
import pickUp from "../assets/Musiques/paper.mp3";
import closeBook from "../assets/Musiques/closeBook.mp3";

export default function BookModal({ isOpen, onClose, pages, imagesPerPage }) {
  const [pageIndex, setPageIndex] = useState(0);

  const [prevPerPage, setPrevPerPage] = useState(imagesPerPage);

  if (prevPerPage !== imagesPerPage) {
    setPrevPerPage(imagesPerPage);
    setPageIndex(Math.floor((pageIndex * prevPerPage) / imagesPerPage));
  }

  const safeIndex = Math.min(pageIndex, pages.length - 1);

  useEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((v) => v.pause());
  }, [safeIndex, isOpen]);

  const playPageSwitch = () => playSfx(paperSwitch, 0.5);
  const playPickUp = () => playSfx(pickUp, 0.5);
  const playCloseBook = () => playSfx(closeBook, 0.5);

  useEffect(() => {
  if (isOpen) setPageIndex(0);
}, [isOpen]);

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

          <div className={`book-page book-page--${imagesPerPage}`}>
            {pages[pageIndex].map((img, idx) => (
              <div className="page-slot" key={`${pageIndex}-${idx}`}>
                {img}
              </div>
            ))}
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
