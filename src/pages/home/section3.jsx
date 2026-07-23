import image from 'assets/images/person_image.jpg';
import { Link } from 'react-router-dom';
import { aosDivAnimation } from 'utils/constants';

const Section3 = () => {
  return (
    <section className="mb-20 px-4">
      <div
        className="lift-card relative max-width-container overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 px-6 py-10 laptop:px-12"
        {...aosDivAnimation(100)}
      >
        <div className="flex mobile:flex-col laptop:flex-row gap-8 items-center">
          <img
            src={image}
            className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-md"
            alt="Sushant Tandukar"
          />
          <div className="flex-1 mobile:text-center laptop:text-left">
            <p className="section-label">Client voice</p>
            <p className="mb-5 text-xl laptop:text-2xl leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
              &ldquo;Merin Entertainment helped us move from scattered marketing ideas to a clear digital presence. Professional, responsive, and genuinely invested in our growth.&rdquo;
            </p>
            <p className="text-xl font-semibold font-display text-slate-900 dark:text-white">Sushant Tandukar</p>
            <p className="text-slate-500 dark:text-slate-400">Software Developer (Frontend), Logica Beans</p>
          </div>
          <Link to="/contact" className="shrink-0">
            <button className="button-primary">Let&apos;s talk</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section3;
