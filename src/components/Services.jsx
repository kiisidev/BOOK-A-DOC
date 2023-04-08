import { processes } from "./data";
export default function Services() {
  return (
    <section className=" h-[100vh] w-full relative bg-midAsh">
      <h3 className="text-center relative top-16 pt-12 text-3xl font-medium ">
        Services
      </h3>
      <div className="relative top-40">
        <div className="flex justify-around ">
          {processes.map((process) => (
            <div key={process.num}>
              <div className="w-72 h-72 rounded-3xl bg-midWhite flex flex-col justify-center">
                <div className=" flex justify-center">
                  <img
                    src={process.icon}
                    alt="hospital"
                    className="h-16 w-16"
                  />
                </div>
                <div className="pl-5 pt-5">
                  <h3 className="text-hint text-2xl font-medium">
                    {process.title}
                  </h3>
                  <p className="max-w-[230px]">{process.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-hint px-6 py-4 rounded-3xl mt-3 text-white ">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
