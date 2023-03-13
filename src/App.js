import "./App.css";

function App() {
  return (
    <div className="bg-[url('../public/images/IMG_1585.jpg')] bg-cover w-full h-full -z-999 py-3 text-slate-600">
      <nav className="flex justify-around items-center contrast-50">
        <div className="hover:scale-105 animate-bounce">
          <a href="/" className="font-bold">
            Chill!
          </a>
        </div>
        <div className="flex gap-5 justify-center items-center max-sm:hidden">
          <ul className="flex gap-5">
            <li className="hover:underline hover:-translate-y-0.5">
              <a href="home">Home</a>
            </li>
            <li className="hover:underline hover:-translate-y-0.5">
              <a href="about">About</a>
            </li>
            <li className="hover:underline hover:-translate-y-0.5">
              <a href="serives">Services</a>
            </li>
            <li className="hover:underline hover:-translate-y-0.5">
              <a href="contact">Contact</a>
            </li>
          </ul>
          <div className="rounded border-2 p-1 border-white hover:scale-105 bg-slate-600">
            <span className="text-white">Get Started</span>
          </div>
        </div>
        <div className="w-7 h-7 sm:hidden rounded border-2">
          <img
            src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/256/external-bars-stroke-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
            alt=""
          />
        </div>
      </nav>
      <div className="w-full mt-20 pt-20 flex flex-col justify-center items-center">
        <span className="font-extrabold text-5xl">Welcome</span>
      </div>
    </div>
  );
}

export default App;
