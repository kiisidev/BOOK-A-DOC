import Services from "./components/Services";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <About />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
