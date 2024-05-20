import React from "react";

function SupportCard() {
  return (
    <div
      className="bg-custom-gradient-2 p-8 m-6 rounded-2xl border-solid border-2 border-white/10 transition-all duration-300
    md:flex flex-col items-center"
    >
      <h2 className="font-sora text-xl text-white-20 leading-custom-40">
        Supported by All Popular Browsers
      </h2>
      <p className="text-white-10 font-outfit text-lg py-6">
        Rest assured, Motion Art is designed to be compatible with all major web
        browsers.
      </p>
      <img
        src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img8.png"
        alt="no-img"
        className="py-4"
      />
    </div>
  );
}

export default SupportCard;
