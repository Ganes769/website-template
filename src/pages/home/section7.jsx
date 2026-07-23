import { Link } from "react-router-dom";
import { aosDivAnimation, aosTextAnimation } from "utils/constants";

const Section7 = () => {
  return (
    <section className="mb-20 px-4">
      <div className="max-width-container">
        <p className="section-label" {...aosTextAnimation()}>Community</p>
        <h3 className="text-4xl laptop:text-5xl font-bold mb-4 font-display" {...aosTextAnimation(50)}>
          Digital events
        </h3>

        <div className="flex mobile:flex-col laptop:flex-row gap-8 items-start">
          <div className="flex-1">
            <p className="pb-6 text-lg text-slate-600 dark:text-slate-400 max-w-xl" {...aosTextAnimation(100)}>
              Get access to all our upcoming events, past events, announcements, product demos, trainings and many more.
            </p>
            <Link to="/events">
              <button className="button-primary-outlined" {...aosDivAnimation(200)}>
                View all events
              </button>
            </Link>
          </div>
          <div className="flex-[0.6] w-full" {...aosDivAnimation(250)}>
            <div className="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 px-6 py-10 text-center">
              <p className="text-lg font-semibold text-rose-600 dark:text-rose-400 mb-1">No events currently</p>
              <p className="text-slate-500 dark:text-slate-400">New workshops and demos will appear here soon.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
