import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="relative h-[92vh] min-h-[600px] mb-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center hero-kenburns"
        style={{ backgroundImage: `url(${require("assets/images/peopleoworking.jpg")})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#06122e]/92 via-blue-900/75 to-sky-800/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.18),transparent_50%)]" />

      <div className="relative z-10 h-full flex flex-col justify-center px-5 pb-16">
        <div className="max-width-container w-full mobile:text-center laptop:text-left">
          <p className="hero-fade-up font-display text-3xl laptop:text-5xl font-bold text-white mb-4 tracking-tight">
            Merin Entertainment
          </p>
          <h1 className="hero-fade-up-delay-1 max-w-[820px] laptop:text-5xl mobile:text-3xl text-white/95 font-semibold leading-[1.15] mb-6 font-display">
            Empowering Entrepreneurs Through Digitization
          </h1>
          <p className="hero-fade-up-delay-1 max-w-[640px] text-lg laptop:text-xl text-blue-100/90 mb-10 leading-relaxed mx-auto laptop:mx-0">
            Innovative business solutions for emerging technopreneurs — simple, scalable, and affordable.
          </p>
          <div className="hero-fade-up-delay-2 flex mobile:flex-col laptop:flex-row gap-4 mobile:items-center laptop:items-start">
            <Link to="/contact">
              <button className="button-primary !px-8 !py-3.5 !text-lg !rounded-xl">
                Start a project
              </button>
            </Link>
            <Link to="/services">
              <button className="border border-white/60 text-white rounded-xl px-8 py-3.5 text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
                Explore services
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 scroll-cue">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Section1;
