import React from "react";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-black-10 z-50">
      <img
        src="https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg"
        alt="logo"
        className="h-4 w-auto"
      />
      <button className="py-1 px-5 bg-green-10 text-white rounded-md">
        Buy now
      </button>
    </div>
  );
}

export default Navbar;
