import image from 'assets/images/partner.jpg';
import { Link } from 'react-router-dom';
import { aosDivAnimation, aosTextAnimation } from 'utils/constants';

const Section8 = () => {
  return (
    <section className="mb-20 px-4 py-20 bg-gradient-to-r from-brand-deep via-blue-900 to-blue-800">
      <div className="max-width-container flex mobile:flex-col laptop:flex-row gap-10 items-center">
        <div className="flex-1 flex flex-col justify-center mobile:text-center laptop:text-left">
          <p className="text-sky-300 uppercase tracking-wider text-sm font-semibold mb-3" {...aosTextAnimation()}>
            Partnership
          </p>
          <h3 className="text-4xl laptop:text-5xl font-bold mb-6 text-white font-display" {...aosTextAnimation(50)}>
            Your Partner For Growth
          </h3>
          <p className="pb-8 text-blue-100 text-lg leading-relaxed" {...aosTextAnimation(100)}>
            Merin Entertainment has its goal of being one of the leading companies in Nepal. As people&apos;s need for technology, brand promotion, and awareness flourishes, we are prepared to collaborate and grow together.
          </p>
          <div>
            <Link to="/partner">
              <button
                className="border border-white/80 rounded-lg px-6 py-2.5 text-white text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
                {...aosDivAnimation(200)}
              >
                Become our partner
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-1 mobile:hidden laptop:flex justify-center" {...aosDivAnimation(300)}>
          <img src={image} className="w-full max-w-[340px] rounded-full shadow-2xl float-soft" alt="Partner with Merin" />
        </div>
      </div>
    </section>
  );
};

export default Section8;
