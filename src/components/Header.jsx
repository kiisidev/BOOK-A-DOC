import { stats } from "./data";
import hero from "../assets/hero.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className=" lg:w-full lg:h-[100vh]  bg-midWhite">
      <Navbar />
      <section className="lg:flex lg:justify-between lg:items-center pt-40 ">
        <div className="pl-8">
          <p className="lg:text-[44px] leading-[50px] font-[400]">
            Book appointments <br></br>with top
            <span className="text-hint pl-2">specialists</span> at<br></br>
            <span className="text-hint"> hospitals</span> near you.
          </p>
          <button className="bg-hint px-6 py-4 rounded-3xl mt-3 text-white ">
            Book Appointment
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img src={hero} alt="Doctor" className="lg:w-[600px]" />
          <div className="flex text-center pr-20 pt-3">
            {stats.map((stat) => (
              <span
                key={stat.num}
                className={`${stat.num < 3 ? "px-16" : "pl-8"}`}
              >
                <h2 className="text-5xl font-bold">{stat.value}</h2>
                <p className="text-secondaryText">{stat.title}</p>
              </span>
            ))}
          </div>
        </div>
      </section>
    </header>
  );
}
