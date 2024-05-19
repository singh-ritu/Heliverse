import React from "react";

const logo_image = [
  {
    image: "assets/img1.png",
  },
  {
    image: "assets/img2.png",
  },
  {
    image: "assets/img3.png",
  },
];

function Rating() {
  return (
    <div className="md:flex justify-between py-14">
      {logo_image.map((logo) => (
        <div className="flex items-center justify-center m-9">
          <img src={logo.image} alt="no-img" />
          <div>
            <img src="assets/img4.png" alt="no-img" />
            <span className="font-sora text-base text-white-10">
              4.5 Score, 9 Reviews
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rating;
