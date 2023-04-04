const Home = () => {
  return (
    <>
      <header className="relative lg:left-4 lg:top-4 w-full">
        <nav className="lg:flex justify-between items-center">
          <h2 className="text-2xl">BOOK-A-DOC</h2>
          <ul className="lg:flex ">
            <li className="mx-16">Home</li>
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
      </header>
    </>
  );
};

export default Home;
