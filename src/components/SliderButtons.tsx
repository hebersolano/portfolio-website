"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

function SliderButtons({
  containerStyle,
  btnStyle,
  iconStyle,
}: {
  containerStyle: string;
  btnStyle: string;
  iconStyle: string;
}) {
  const swiper = useSwiper();

  return (
    <div className={containerStyle}>
      <button className={btnStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyle} />
      </button>
      <button className={btnStyle}>
        <PiCaretRightBold
          className={iconStyle}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
}

export default SliderButtons;
