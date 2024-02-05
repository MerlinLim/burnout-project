"use client";

import { clsx } from "clsx";

interface ButtonType {
  handleClick?: () => void;
  isLocked?: boolean;
  text: string;
}

const Button = ({ handleClick, text, isLocked}: ButtonType) => {
  return (
    <div className="relative flex">
      <button type="button" onClick={handleClick} className={clsx("w-[7rem] border-2 border-red-400 rounded-lg", {"pointer-events-none bg-white/10 backdrop-brightness-50 border-red-400/50": isLocked})}>
        <div className="p-2 first-letter:uppercase">{text}</div>
      </button>
      <div className={clsx("-z-10 absolute top-1 left-1 w-[7rem] border-2 border-purple-600 rounded-lg p-2 text-transparent", {"border-purple-600/50": isLocked})}>
        {text}
      </div>
    </div>
  );
};

export default Button;
