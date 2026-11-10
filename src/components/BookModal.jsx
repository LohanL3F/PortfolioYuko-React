import React, { useState, useEffect, useRef } from "react";
import "./BookModal.css";
import { playSfx } from "../utils/playSfx";
import paperSwitch from "../assets/Musiques/pageswitch.mp3";
import closeBook from "../assets/Musiques/closeBook.mp3";

export default function BookModal({ isOpen, onClose, pages, imagesPerPage, disableKeys }) {
  const [pageIndex, setPageIndex] = useState(0);
  const prevPerPageRef = useRef(imagesPerPage);

  useEffect(() => {
    if (prevPerPageRef.current !== imagesPerPage) {
      setPageIndex((prev) =>
        Math.floor((prev * prevPerPageRef.current) / imagesPerPage)
      );
      prevPerPageRef.current = imagesPerPage;
    }
  }, [imagesPerPage]);

  useEffect(() => {
    if (isOpen) setPageIndex(0);
  }, [isOpen]);

  const safeIndex = Math.max(0, Math.min(pageIndex, (pages?.length ?? 1) - 1));

  useEffect(() => {
    document.querySelectorAll("video").forEach((v) => v.pause());
  }, [safeIndex, isOpen]);

  useEffect(() => {
    if (!isOpen || disableKeys || !pages?.length) return;
    const len = pages.length;

    const onKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === "ArrowRight") {
        playSfx(paperSwitch, 0.5);
        setPageIndex((p) => (Math.min(p, len - 1) + 1) % len);
      } else if (e.key === "ArrowLeft") {
        playSfx(paperSwitch, 0.5);
        setPageIndex((p) => (Math.min(p, len - 1) - 1 + len) % len);
      } else if (e.key === "Escape" || e.key === "ArrowUp") {
        playSfx(closeBook, 0.5);
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, disableKeys, pages, onClose]);

  const playPageSwitch = () => playSfx(paperSwitch, 0.5);
  const playCloseBook = () => playSfx(closeBook, 0.5);

  if (!isOpen || !pages || pages.length === 0) return null;

  const nextPage = () => setPageIndex(() => (safeIndex + 1) % pages.length);
  const prevPage = () =>
    setPageIndex(() => (safeIndex - 1 + pages.length) % pages.length);

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
            {pages[safeIndex].map((img, idx) => (
              <div className="page-slot" key={`${safeIndex}-${idx}`}>
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
              {safeIndex + 1} / {pages.length}
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