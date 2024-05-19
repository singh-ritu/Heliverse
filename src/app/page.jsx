import Navbar from "./Components/Navbar";
import Rating from "./Components/Rating";
import ApplyCards from "./Components/ApplyCards";

export default function Home() {
  return (
    <main className="py-20 md:px-32 text-center">
      <Navbar />
      <div className="flex items-center justify-between pt-6">
        <img src="assets/logo.png" alt="no-img" className="h-10 w-auto" />
        <button className="hidden lg:block bg-white py-4 px-9 text-black-10 rounded-md font-outfit">
          Purchase Now
        </button>
      </div>
      <div className="py-20 md:flex justify-between">
        <div className="text-center md:text-left md:w-full">
          <span className=" flex flex-col font-sora text-lg font-medium pb-3">
            Transform your <span> website</span>
          </span>
          <span className="font-outfit text-lg font-light text-white-20 md:flex-col">
            With Motion Art <span>Effect</span>
          </span>
        </div>
        <div>
          <div className="mb-3 text-center pt-8 sm:text-left text-white-20 md:pt-0">
            <h1 className="text-4xl font-sora leading-custom-55 font-medium lg:text-6xl lg:leading-custon-75">
              Attract Your Visitors Attention With Colorful Motion Art Effect
            </h1>
          </div>
          <p className="font-outfit text-base text-white-10 flex items-center leading-custon-24 text-center md:text-left">
            unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website
          </p>
        </div>
        <div className="block md:w-full"></div>
      </div>
      <h2 className="text-2xl text-white-20 font-outfit text-center">
        Trusted by thousands of users around the world
      </h2>
      <Rating />
      <div className="py-16  md:flex justify-between items-center">
        <div>
          <div className="text-centre">
            <h2 className="text-3xl font-sora text-white-20 mb-3 leading-custon-45 mx-4">
              Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
            </h2>
          </div>
          <p className="text-lg font-outfit text-white-10">
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </p>
          <div className="flex items-center justify-between bg-custom-gradient p-5 m-4 rounded-2xl">
            <button className="text-white font-sora text-xl">
              Purchase from Envato
            </button>
            <img src="assets/arrow.svg" alt="no-img" className="text-white" />
          </div>
        </div>
        <img src="assets/img5.png" alt="no-img" />
      </div>
      <h2 className="font-sora text-2xl leading-custom-55 text-white-20">
        Apply On Any Section Or Enable For Whole Page
      </h2>
      <ApplyCards />
    </main>
  );
}
// className="flex min-h-screen flex-col items-center justify-between"
