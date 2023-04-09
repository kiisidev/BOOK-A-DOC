import { testimonials } from "./data";
export default function Testimonial() {
  return (
    <section className="h-[100vh] bg-midAsh">
      <h3 className="text-center pt-20 text-3xl font-medium ">
        See wetin our clients dey yarn
      </h3>
      <div className="flex justify-around pt-40 ">
        {testimonials.map((testimonial) => (
          <div key={testimonial.num}>
            <div className="w-72 h-72 rounded-3xl bg-midWhite flex flex-col justify-center">
              <div className=" flex justify-center">
                <img
                  src={testimonial.pic}
                  alt="testifier"
                  className="h-16 w-16"
                />
              </div>
              <div className="p-5">
                <h3 className="text-hint text-2xl ">{testimonial.name}</h3>
                <p className="max-w-[300px] text-secondaryText">
                  {testimonial.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
