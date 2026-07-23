import { Link } from "react-router-dom";
import { aosDivAnimation, aosTextAnimation } from "utils/constants";

const pillars = [
  {
    id: "1",
    title: "IT consulting",
    description: "Trusted advisors who help you identify challenges and opportunities, then select, implement, and optimize the right technology solutions for your goals.",
  },
  {
    id: "2",
    title: "Startup Support",
    description: "Mentorship, market insights, technical help, and networking so aspiring entrepreneurs can turn innovative ideas into lasting businesses.",
  },
  {
    id: "3",
    title: "Business Incubation and Acceleration",
    description: "Comprehensive support for early-stage companies — strategy refinement, resources, and guidance to overcome obstacles and accelerate growth.",
  },
];

const benefits = [
  {
    id: "1",
    title: "Expert technical help",
    description: "Guidance on product, platforms, and digital infrastructure from people who build and ship.",
  },
  {
    id: "2",
    title: "Market insights",
    description: "Practical feedback on positioning, audiences, and go-to-market approaches for Nepal and beyond.",
  },
  {
    id: "3",
    title: "Access to investors",
    description: "Introductions and preparation support to help you present your venture with clarity and confidence.",
  },
  {
    id: "4",
    title: "End-to-end digitization",
    description: "From brand and content to websites and marketing — one partner for your digital foundation.",
  },
];

const StartupSupport = () => {
  return (
    <main>
      <section
        style={{ backgroundImage: `url(${require("assets/images/peopleoworking.jpg")})` }}
        className="bg-no-repeat bg-cover bg-fixed"
      >
        <div className="bg-white bg-opacity-80 dark:bg-slate-950 dark:bg-opacity-80 py-20 px-4">
          <div className="max-width-container mobile:text-center laptop:text-left">
            <p className="section-label">For founders</p>
            <h1 className="h2 max-w-[900px]" {...aosTextAnimation()}>
              Startup Support Program
            </h1>
            <p className="p mb-8 max-w-[700px] mx-auto laptop:mx-0" {...aosTextAnimation(100)}>
              We assist aspiring startups in introducing their projects to users. Associate with us to nurture your ideas, gain expert technical help, market insights, and access to investors.
            </p>
            <Link to="/contact">
              <button className="button-primary" {...aosDivAnimation(200)}>
                Apply to the program
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-width-container">
          <h2 className="h2 mb-4" {...aosTextAnimation()}>How we support you</h2>
          <p className="p mb-12 max-w-[700px]" {...aosTextAnimation(100)}>
            Three pillars that help early-stage teams move from idea to traction with the right technology and guidance.
          </p>

          <div className="grid mobile:grid-cols-1 laptop:grid-cols-3 gap-8">
            {pillars.map((item, index) => (
              <div
                key={item.id}
                className="lift-card px-8 py-6 rounded-lg bg-white dark:bg-slate-900 shadow-xl border border-gray-100 dark:border-slate-800"
                {...aosDivAnimation(index * 100 + 100)}
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-sky-400">{item.title}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">{item.description}</p>
                <Link to="/contact">
                  <button className="button-primary-outlined">Learn more</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-width-container">
          <h2 className="h2 mb-4" {...aosTextAnimation()}>What you get</h2>
          <div className="grid mobile:grid-cols-1 laptop:grid-cols-2 gap-8 mt-10">
            {benefits.map((item, index) => (
              <div key={item.id} className="p-6" {...aosDivAnimation((index % 2) * 100 + 100)}>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-lg text-gray-700 dark:text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-blue-950 dark:bg-slate-900 dark:border-y dark:border-slate-800 text-center">
        <div className="max-width-container">
          <h2 className="text-4xl font-bold text-white mb-4" {...aosTextAnimation()}>
            Ready to bring your idea to life?
          </h2>
          <p className="text-blue-200 text-lg mb-8" {...aosTextAnimation(100)}>
            Tell us about your startup and we&apos;ll share how Merin can support your next steps.
          </p>
          <Link to="/contact">
            <button className="button-primary" {...aosDivAnimation(200)}>
              Get started
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default StartupSupport;
