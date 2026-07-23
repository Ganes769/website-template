import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="relative h-[92vh] min-h-[560px] mb-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center hero-kenburns"
        style={{ backgroundImage: `url(${require("assets/images/peopleoworking.jpg")})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/85 via-blue-800/70 to-sky-700/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%)]" />

      <div className="relative z-10 h-full flex items-center px-5">
        <div className="max-width-container w-full mobile:text-center laptop:text-left">
          <p className="hero-fade-up text-sky-200 uppercase tracking-[0.2em] text-sm font-semibold mb-5">
            Merin Entertainment
          </p>
          <h1 className="hero-fade-up-delay-1 max-w-[900px] laptop:text-6xl mobile:text-4xl text-white font-bold leading-[1.1] mb-6 font-display">
            Empowering Entrepreneurs Through Digitization
          </h1>
          <p className="hero-fade-up-delay-1 max-w-[720px] mobile:text-lg laptop:text-2xl text-blue-50/95 mb-10 leading-relaxed mx-auto laptop:mx-0">
            Creating an ecosystem of innovative business solutions for emerging young technopreneurs that are simple yet scalable and affordable.
          </p>
          <div className="hero-fade-up-delay-2 flex mobile:flex-col laptop:flex-row gap-4 mobile:items-center laptop:items-start">
            <Link to="/contact">
              <button className="button-primary !px-7 !py-3.5 !text-lg">
                Start a project
              </button>
            </Link>
            <Link to="/services">
              <button className="border border-white/70 text-white rounded-lg px-7 py-3.5 text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Explore services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
