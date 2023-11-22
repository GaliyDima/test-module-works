import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button className="c-button" onClick={onClick}>
      <span className="c-main">
        <span className="c-ico">
          <span className="c-blur"></span> <span className="ico-text">+</span>
        </span>
        {text}
      </span>
    </button>
  );
};

export default Button;
