import React from "react";

type ArrowBtnProps = {
  className?: string;
  direction?: "left" | "right";
};

const ArrowBtn: React.FC<ArrowBtnProps> = ({
  className,
  direction = "right",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${
        direction === "left" ? "rotate-180" : ""
      }`}
    >
      <path d="M5 12h14" />
      <path d="M13 5l6 7-6 7" />
    </svg>
  );
};

export default ArrowBtn;
