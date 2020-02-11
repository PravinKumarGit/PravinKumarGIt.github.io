import React from "react";
import LoaderComponent from "./loader.style";

export default function Loader({ ...props }) {
  const { label, type } = props;
  const color = {
    circle: "greenCirle",
    label: "greenLabel"
  };
  switch (type) {
    case "light":
      color.circle = "whiteCirle";
      color.label = "whiteLabel";
      break;
    default:
  }
  return (
    <LoaderComponent>
      <svg className="isoContentLoader" viewBox="0 0 50 50">
        <circle
          className={`isoContentLoaderCircle ${color.circle}`}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="3.6"
        />
      </svg>
      <p className={color.label}>{label || "Loading..."}</p>
    </LoaderComponent>
  );
}
