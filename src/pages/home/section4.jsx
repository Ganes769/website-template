import { Link } from 'react-router-dom';
import { aosDivAnimation, aosTextAnimation } from 'utils/constants';

const Section4 = () => {
  const data = [
    {
      id: "01",
      title: "Startups",
      description: "Consulting, training, and affordable technical solutions that help emerging startups streamline operations and launch with confidence.",
      link: "/startup-support",
    },
    {
      id: "02",
      title: "SMEs",
      description: "Practical digitization for small and mid-sized businesses competing in a fast-moving marketplace.",
      link: "/services",
    },
    {
      id: "03",
      title: "Corporations",
      description: "Scalable marketing and technology support for enterprises that need reliable digital execution at scale.",
      link: "/services",
    },
    {
      id: "04",
      title: "Government",
      description: "Technical consulting and custom solutions that help public organizations adopt modern digital operations.",
      link: "/contact",
    },
  ];

  return (
    <section className="mb-24 px-4 py-20 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-900/80 dark:to-slate-950/50">
      <div className="flex flex-col items-center max-width-container">
        <p className="section-label" {...aosTextAnimation()}>Who we serve</p>
        <h3 className="text-4xl laptop:text-5xl font-bold text-center mb-6 font-display" {...aosTextAnimation(50)}>
          Digitize Business Of Any Size
        </h3>
        <p className="text-center max-w-3xl text-lg text-slate-600 dark:text-slate-400 mb-14" {...aosTextAnimation(100)}>
          We handle the technical infrastructure so you can focus on your core business.
        </p>

        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5 w-full">
          {data.map((el, index) => (
            <div
              key={el.id}
              className="biz-card"
              {...aosDivAnimation(index * 100 + 100)}
            >
              <p className="biz-num mb-4">{el.id}</p>
              <h4 className="text-xl font-semibold mb-3 font-display">{el.title}</h4>
              <p className="biz-desc text-[15px] leading-relaxed mb-6">{el.description}</p>
              <Link to={el.link}>
                <button className="biz-btn border rounded-lg px-4 py-1.5 text-[15px] font-semibold transition-all duration-300">
                  Learn more
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
