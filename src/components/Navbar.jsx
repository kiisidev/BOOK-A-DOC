import React from "react";

export default function Navbar() {
  return (
    <nav className=" lg:flex justify-between items-center fixed top-4 right-0 left-10 ">
      <h2 className="text-2xl">BOOK-A-DOC</h2>
      <ul className="lg:flex ">
        <li className="mx-16 border-b-2 border-hint">Home</li>
        <li className="mx-16">About</li>
        <li className="mx-16">Services</li>
        <li className="mx-16">Contact</li>
      </ul>
      <div className="relative lg:right-8">
        <button className="bg-hint  mr-4 px-4 py-2 rounded-3xl text-primary">
          Sign in
        </button>
        <button className="bg-transparent border-2 border-hint mr-4 px-4 py-2 rounded-3xl">
          Sign up
        </button>
      </div>
    </nav>
  );
}
