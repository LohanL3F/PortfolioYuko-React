import React from "react";

export default function NavButton({
  className,
  children,
  onClick,
  onMouseEnter,
}) {
  return (
    <div
      className={`NavButton ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </div>
  );
}
