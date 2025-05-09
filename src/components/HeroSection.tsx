import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex items-center justify-center h-screen"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Transform Your Software into Instant Cash
        </h1>
        <p className="text-xl mb-6">
          Get a quote in minutes and sell your unused licenses effortlessly.
        </p>
        <button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-800">
          <Link to='contact' smooth={true} duration={2000}>Get a Quote</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
