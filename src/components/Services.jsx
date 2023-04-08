import React from "react";
import { processes } from "./data";
export default function Services() {
  return (
    <section className="h-[100vh] bg-midAsh">
      <h3 className="text-center relative top-16 pt-12 text-3xl font-medium ">
        Services
      </h3>
      <div className="flex">
        {processes.map((process) => (
          <div key={process.num}>
            <img src={process.icon} alt="hospital" />
            
          </div>
        ))}
      </div>
    </section>
  );
}
