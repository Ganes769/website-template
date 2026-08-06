import website from 'assets/svgs/website.svg';
import design from 'assets/svgs/design.svg';
import ads from 'assets/svgs/ads.svg';
import writing from 'assets/svgs/writing.svg';

import { Link } from 'react-router-dom';
import { aosDivAnimation, aosTextAnimation } from 'utils/constants';

const Section5 = () => {
  const data = [
    {
      id: "1",
      title: "Designing",
      description: "Graphics, brand identity, and UI/UX that make your business look sharp and consistent.",
      image: design,
      link: "/graphics-designing",
    },
    {
      id: "2",
      title: "Website & Web Apps",
      description: "From informative sites to custom software built around your workflows and goals.",
      image: website,
      link: "/webisite",
    },
    {
      id: "3",
      title: "Marketing & Ads",
      description: "Social campaigns, post boosts, and paid ads that put your brand in front of the right people.",
      image: ads,
      link: "/social-media-marketing",
    },
    {
      id: "4",
      title: "Content Writing",
      description: "Clear, engaging copy for websites, campaigns, and ongoing content programs.",
      image: writing,
      link: "/content-writing",
    },
  ];

  return (
    <section className="mb-24 px-4 pt-8">
      <div className="max-width-container">
        <div className="flex mobile:flex-col laptop:flex-row laptop:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label" {...aosTextAnimation()}>Capabilities</p>
            <h3 className="text-4xl laptop:text-5xl font-bold font-display" {...aosTextAnimation(50)}>Our Services</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-3 max-w-xl" {...aosTextAnimation(100)}>
              End-to-end digitization — from creative and content to websites and growth marketing.
            </p>
          </div>
          <Link to="/services" {...aosDivAnimation(150)}>
            <button className="button-primary-outlined">View all services</button>
          </Link>
        </div>

        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 gap-5">
          {data.map((el, index) => (
            <Link
              key={el.id}
              to={el.link}
              className="service-tile group block"
              {...aosDivAnimation((index % 2) * 100 + 100)}
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-brand-soft dark:bg-slate-800 flex items-center justify-center">
                  <img src={el.image} alt="" className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-semibold font-display group-hover:text-blue-700 dark:group-hover:text-sky-400 transition-colors">
                    {el.title}
                  </h4>
                  <p className="text-[16px] text-slate-600 dark:text-slate-400 mb-4">{el.description}</p>
                  <span className="text-blue-700 dark:text-sky-400 font-semibold">Explore →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;
