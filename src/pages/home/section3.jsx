import image from 'assets/images/person_image.jpg';
import { Link } from 'react-router-dom';
import { aosDivAnimation } from 'utils/constants';

const Section3 = () => {
  return (
    <section className="mb-24 px-4">
      <div
        className="lift-card relative max-width-container overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 text-white px-6 py-12 laptop:px-14"
        {...aosDivAnimation(100)}
      >
        <div className="absolute top-6 left-8 text-7xl font-display text-white/15 leading-none select-none" aria-hidden="true">
          &ldquo;
        </div>
        <div className="relative flex mobile:flex-col laptop:flex-row gap-8 items-center">
          <img
            src={image}
            className="h-28 w-28 rounded-full object-cover border-4 border-white/30 shadow-lg"
            alt="Sushant Tandukar"
          />
          <div className="flex-1 mobile:text-center laptop:text-left">
            <p className="text-sky-200 uppercase tracking-wider text-sm font-semibold mb-3">Client voice</p>
            <p className="mb-5 text-xl laptop:text-2xl leading-relaxed font-medium text-blue-50">
              Merin Entertainment helped us move from scattered marketing ideas to a clear digital presence. Professional, responsive, and genuinely invested in our growth.
            </p>
            <p className="text-xl font-semibold font-display text-white">Sushant Tandukar</p>
            <p className="text-blue-200">Software Developer (Frontend), Logica Beans</p>
          </div>
          <Link to="/contact" className="shrink-0">
            <button className="bg-white text-blue-800 hover:bg-sky-100 font-semibold rounded-lg px-6 py-2.5 text-lg transition-colors duration-300">
              Let&apos;s talk
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section3;
