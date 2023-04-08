import { TickCircle } from "iconsax-react";
import { serviceLists } from "./data";
import nurse from "../assets/nurse.jpg";
export default function About() {
  return (
    <section className="h-[100vh] bg-midWhite">
      <h3 className="text-center relative top-16 pt-12 text-3xl font-medium ">
        About
      </h3>
      <div className="flex mt-40 justify-between">
        <aside className="ml-32 ">
          <h2 className="text-4xl max-w-md font-medium text-hint">
            Book an appointment today, online, with<br></br>easy steps
          </h2>
          <div className="pt-5">
            {serviceLists.map((serviceList) => (
              <span className="flex items-center pt-6">
                <TickCircle size="32" color="#014dd5" variant="Outline" />
                <h3 className="pl-2 text-xl max-w-md font-normal">
                  {serviceList.title}
                </h3>
              </span>
            ))}
          </div>
        </aside>
        <aside className="mr-32">
          <img src={nurse} alt="nurse" className="w-96 rounded-tl-[100px] rounded-br-[100px]  border-2 border-hint"/>
        </aside>
      </div>
    </section>
  );
}
