import React from "react";

const cardImage = [
  {
    title: "Apply On Section",
    detail:
      "Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. ",
    image: "assets/img11.png",
  },
  {
    title: "Apply On Page",
    detail:
      "Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.",
    image: "assets/img10.png",
  },
];

function ApplyCards() {
  return (
    <div>
      {cardImage.map((card) => (
        <div className="bg-custom-gradient-2 p-5 m-5 rounded-lg">
          <h2 className="font-sora text-xl text-white-20 mb-4 leading-custon-40">
            {card.title}
          </h2>
          <p className="text-white-10 font-outfit text-base">{card.detail}</p>
          <img src={card.image} alt="no-img" className="w-full my-6" />
        </div>
      ))}
    </div>
  );
}

export default ApplyCards;
