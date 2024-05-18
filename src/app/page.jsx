import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <main className="pt-20 px-2">
      <Navbar />
      <div className="flex items-center justify-between">
        <img src="assets/logo.png" alt="no-img" className="h-10 w-auto" />
        <button className="hidden lg:block bg-white py-4 px-9 text-black-10 rounded-md font-outfit">
          Purchase Now
        </button>
      </div>
      <div className="py-20">
        <div>
          <span className=" flex flex-col font-sora text-lg font-medium items-center justify-center pb-3">
            Transform your <span> website</span>
          </span>
          <p className="font-outfit text-lg font-light flex items-center justify-center text-white-20">
            With Motion Art Effect
          </p>
        </div>
        <div className="px-8">
          <div className="mb-3 text-center sm:text-left text-white-20">
            <h1 className="text-4xl font-sora leading-custom-55">
              Attracts Your Visitors Attention With Colorful Motion Art Effect
            </h1>
          </div>
          <p className="font-outfit text-base text-white-10 flex items-center leading-custon-24 text-center">
            unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website
          </p>
        </div>
      </div>
    </main>
  );
}
// className="flex min-h-screen flex-col items-center justify-between"
