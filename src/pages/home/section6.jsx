import { Link } from "react-router-dom";
import { aosDivAnimation, aosTextAnimation } from "utils/constants";

const Section6 = () => {
  const data = [
    {
      id: "1",
      title: "IT consulting",
      description: "IT consulting is a dynamic and essential field that plays a pivotal role in helping organizations leverage technology to achieve their business objectives. IT consultants are trusted advisors who collaborate with clients to identify their unique challenges and opportunities, offering expert guidance on selecting, implementing, and optimizing IT solutions.",
      link: "/startup-support",
    },
    {
      id: "2",
      title: "Startup Support",
      description: "Startup support is a vital ecosystem that provides aspiring entrepreneurs with the resources and guidance they need to transform their innovative ideas into successful businesses. This ecosystem encompasses a variety of services, including mentorship, funding assistance, co-working spaces, and networking opportunities.",
      link: "/startup-support",
    },
    {
      id: "3",
      title: "Business Incubation and Acceleration",
      description: "Business incubators and accelerators are organizations that provide comprehensive support to startups, typically in the form of mentorship, resources, and physical spaces. They play a vital role in helping early-stage companies overcome challenges, refine their business strategies, and accelerate their growth.",
      link: "/startup-support",
    },
  ];

  return (
    <section
      style={{ backgroundImage: `url(${require("assets/images/peopleoworking.jpg")})` }}
      className="bg-no-repeat bg-cover mb-20 bg-fixed"
    >
      <div className="h-full px-4 py-20 bg-slate-900/70 backdrop-blur-[2px]">
        <div className="flex flex-col items-center max-width-container">
          <p className="section-label !text-sky-300" {...aosTextAnimation()}>For founders</p>
          <h3 className="text-4xl laptop:text-5xl font-bold mb-4 text-white text-center font-display" {...aosTextAnimation(50)}>
            Startup Support Program
          </h3>
          <p className="text-lg text-center text-slate-200 mb-12 max-w-3xl" {...aosTextAnimation(100)}>
            We assist aspiring startups to help introduce their projects among users. By associating with us, you too can nurture your ideas and bring them to life. We provide expert technical help, market insights, and access to investors.
          </p>

          <div className="grid mobile:grid-cols-1 laptop:grid-cols-3 gap-6 w-full">
            {data.map((el) => (
              <div
                key={el.id}
                className="lift-card px-8 py-7 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-white/40 dark:border-slate-700/60"
                {...aosDivAnimation((+el.id * 100) + 100)}
              >
                <h4 className="text-xl font-semibold mb-3 text-blue-700 dark:text-sky-400 font-display">{el.title}</h4>
                <p className="text-[16px] leading-relaxed text-slate-600 dark:text-slate-400 mb-5">{el.description}</p>
                <Link to={el.link}>
                  <button className="button-primary-outlined !text-[15px] !py-1.5">
                    Learn more
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
