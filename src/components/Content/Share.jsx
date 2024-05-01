import { useState } from "react";

export default function Share() {
  const [activeState, setActiveState] = useState(false);

  function handleClick() {
    setActiveState((activeState) => !activeState);
  }

  let toggleClassCheck = activeState ? "active" : "invisible";
  let toggleClassButttonCheck = activeState
    ? "text-white bg-grayish-blue-500"
    : "text-grayish-blue-500 bg-grayish-blue-200";

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className={`p-[.375rem] rounded-[1.25rem] text-xl md:text-base md:z-30 md:relative ${toggleClassButttonCheck}`}
      >
        <ion-icon name="arrow-redo"></ion-icon>
      </button>
      <div
        className={`absolute bg-grayish-blue-700 flex items-center gap-3 py-4 px-10 rounded-lg origin-bottom md:rounded-none ${toggleClassCheck}`}
      >
        <span className="text-xs uppercase text-grayish-blue-400 ml-[5px] tracking-widest">
          share
        </span>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-pinterest"></ion-icon>
      </div>
    </div>
  );
}
