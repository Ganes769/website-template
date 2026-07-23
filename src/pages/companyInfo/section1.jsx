import { aosTextAnimation } from "utils/constants";

const Section1 = () => {
  return (
    <section className="mb-16 py-20 bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100 dark:from-slate-900 dark:via-slate-900/70 dark:to-slate-950">
      <div className="max-width-container px-4">
        <p className="section-label" {...aosTextAnimation()}>About Us</p>
        <h2 className="laptop:text-6xl mobile:text-4xl font-bold mb-6 font-display leading-tight max-w-5xl" {...aosTextAnimation(50)}>
          Fueling technological innovation and building an ecosystem of cloud based business solutions to power{" "}
          <span className="text-blue-700 dark:text-sky-400">Digital Transformation</span>
        </h2>
      </div>
    </section>
  );
};

export default Section1;