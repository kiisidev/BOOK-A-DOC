import React from "react";

export default function Navbar() {
  return (
    <nav className=" lg:flex lg:justify-between lg:items-center fixed lg:w-full lg:bg-transparent backdrop-blur-lg border-b-[1px] border-b-white-300 z-50 p-4 pl-8 ">
      <h2 className="text-2xl">BOOK-A-DOC</h2>
      <ul className="lg:flex ">
        <li className="mx-16 border-b-2 border-hint">Home</li>
        <li className="mx-16">About</li>
        <li className="mx-16">Services</li>
        <li className="mx-16">Contact</li>
      </ul>
      <div className="relative lg:right-8">
        <button className="bg-hint px-4 py-2 rounded-3xl text-primary">
          Sign in
        </button>
        <button className="bg-transparent border-2 border-hint px-4 py-2 rounded-3xl">
          Sign up
        </button>
      </div>
    </nav>
  );
}
