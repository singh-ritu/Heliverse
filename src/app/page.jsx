import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <main className="pt-20">
      <Navbar />
      <div className="flex p-4 items-center justify-between">
        <img src="assets/logo.png" alt="no-img" className="h-10 w-auto" />
        <button className="hidden lg:block bg-white py-4 px-9 text-black-10 rounded-md font-outfit">
          Purchase Now
        </button>
      </div>
    </main>
  );
}
// className="flex min-h-screen flex-col items-center justify-between"
