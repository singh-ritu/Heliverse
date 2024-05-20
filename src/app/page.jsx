import Navbar from "./Components/Navbar";
import Rating from "./Components/Rating";
import ApplyCards from "./Components/ApplyCards";
import SupportCard from "./Components/SupportCard";
import FeatureCards from "./Components/FeatureCards";

export default function Home() {
  return (
    <>
      <main className="py-20 text-center">
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
          <div className="p-2">
            <div className="mb-3 text-center mx-8  pt-8 text-white-20 md:pt-0">
              <h1 className="text-4xl font-sora leading-custom-55 font-medium lg:text-6xl lg:leading-custom -75">
                Attract Your Visitors Attention With Colorful Motion Art Effect
              </h1>
            </div>
            <p className="font-outfit text-base text-white-10 leading-custom-24 text-center md:text-left">
              unleash the power of creativity with Motion Art for Elementor -
              your ultimate solution for seamlessly integrating captivating
              animations into your website
            </p>
          </div>
          <div className="block md:w-full"></div>
        </div>
        <h2 className="text-2xl text-white-20 font-outfit text-center">
          Trusted by thousands of users around the world
        </h2>

        <Rating />

        <div className="pb-16 flex flex-col items-center">
          <div className="p-2 flex-col items-center flex">
            <h2 className="text-2xl font-sora text-white-20 mb-3 leading-custom-45 mx-4">
              Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
            </h2>
            <p className="text-base font-outfit text-white-10 leading-custom-30">
              Motion Art for Elementor is a groundbreaking plugin that empowers
              you to effortlessly infuse your website with visually stunning
              motion art elements.
            </p>
            <button className="text-white font-sora text-xl flex items-center justify-between bg-custom-gradient px-5 py-3 mt-8 rounded-2xl">
              <p>Purchase from Envato</p>
              <img src="assets/arrow.svg" alt="no-img" className="text-white" />
            </button>
          </div>
          <img src="assets/img5.png" alt="no-img" />
        </div>

        <div className="p-2">
          <h2 className="font-sora text-2xl leading-custom-55 text-white-20">
            Apply On Any Section Or Enable For Whole Page
          </h2>
          <ApplyCards />
        </div>

        <SupportCard />

        <div className="p-2 text-center">
          <div className=" md:mx-48">
            <h2 className="font-sora text-2xl text-white-20 leading-custom-45 mb-3 mx-7 pt-8 item-center">
              An All-Round Plugin With Powerful Features
            </h2>
            <p className="font-outfit text-base text-white-10 leading-custom-30">
              Whether you're a seasoned web designer or just starting out,
              Motion Art for Elementor seamlessly integrates with the Elementor
              platform, providing you with a seamless and intuitive experience.
            </p>
          </div>
          <FeatureCards />
        </div>
      </main>
      <footer>
        <div className=" bg-custom-gradient-3 p-4 text-center">
          <div className="flex justify-center items-center p-2 gap-8">
            <p className="font-outfit text-sm text-white-30">Documentation</p>
            <p className="font-outfit text-sm text-white-30">Support</p>
          </div>
          <p className="font-outfit text-sm text-white-30 pt-4">
            © 2023 Copywrite. All rights reserved by QodeMatrix
          </p>
        </div>
      </footer>
    </>
  );
}
// className="flex min-h-screen flex-col items-center justify-between"
