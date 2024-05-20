import React from "react";
const card_logo = [
  {
    image: "assets/img9.png",
    title: "Light Weight",
    detail: "Motion Art for Elementor is designed to be lightweight.",
  },
  {
    image: "assets/img6.png",
    title: "100% Responsive",
    detail: "Create a consistent visual experience across all devices.",
  },
  {
    image: "assets/img7.png",
    title: "User Friendly Interface",
    detail:
      "Ensure a smooth experience for both applicants and administrators.",
  },
];
function FeatureCards() {
  return (
    <div className="lg:flex justify-center">
      {card_logo.map((card) => (
        <div className=" w-full bg-custom-gradient-2 mt-20 mx-3 p-8 rounded-2xl text-left border-solid border-2 border-white/10 transition-all duration-300">
          <img src={card.image} alt="no-img" />
          <h2 className="font-sora text-xl text-white-20 leading-custom-45 py-5">
            {card.title}
          </h2>
          <p className="font-outfit text-base text-white-10 leading-custom-30 pr-5">
            {card.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FeatureCards;
