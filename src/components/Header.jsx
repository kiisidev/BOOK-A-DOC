import hero from "../assets/hero.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className=" w-full h-[100vh]  bg-midWhite">
      <div className="relative lg:left-10 right-10 ">
        <Navbar />
        <section className="lg:flex lg:justify-between lg:items-center pt-24 ">
          <div className="mt-5">
            <p className="lg:text-[44px] leading-[48px] font-[400]">
              Book appointments <br></br>with top
              <span className="text-hint">specialists</span> at<br></br>
              <span className="text-hint"> hospitals</span> near you.
            </p>
            <button className="bg-hint px-5 py-3 rounded-3xl mt-3 text-white ">
              Book Appointment
            </button>
          </div>
          <img src={hero} alt="Doctor" className="lg:w-[600px] mr-20" />
        </section>
      </div>
    </header>
  );
}
