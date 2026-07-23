import image from 'assets/images/services_image.jpg';
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
      description: "Designing graphics, User Interfaces / User Experience.",
      image: design,
    },
    {
      id: "2",
      title: "Website / Webapp development",
      description: "We make from informative sites to custom software according to your needs.",
      image: website,
    },
    {
      id: "3",
      title: "Marketing / Advertisements",
      description: "We offer many social media marketing packages, posts boosts, google ads etc.",
      image: ads,
    },
    {
      id: "4",
      title: "Content Writing",
      description: "We create content that is informative, engaging, and relevant to the target audience.",
      image: writing,
    },
  ];

  return (
    <section className="mb-20 px-4 pt-8">
      <div className="max-width-container">
        <p className="section-label" {...aosTextAnimation()}>Capabilities</p>
        <h3 className="text-4xl laptop:text-5xl font-bold mb-4 font-display" {...aosTextAnimation(50)}>Our Services</h3>
        <div className="flex mobile:flex-col laptop:flex-row gap-10">
          <div className="flex-[1.2]">
            <p className="text-lg text-slate-600 mb-8" {...aosTextAnimation(100)}>
              Merin Tech provides end-to-end digitization services from photography to custom software development.
            </p>

            {data.map((el) => (
              <div
                key={el.id}
                className="flex mobile:flex-col laptop:flex-row mobile:items-center laptop:items-start mobile:text-center laptop:text-left mb-6 p-4 rounded-xl hover:bg-brand-soft transition-colors duration-300"
                {...aosDivAnimation((+el.id * 100) + 100)}
              >
                <img src={el.image} alt="" className="w-12 h-12 mb-2 mr-5" />
                <div>
                  <h4 className="mb-1 text-xl font-semibold font-display">{el.title}</h4>
                  <p className="text-[16px] text-slate-600">{el.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col items-center">
            <img
              src={image}
              alt="Our services"
              className="w-full max-w-[450px] mb-5 rounded-2xl shadow-lg"
              {...aosDivAnimation(200)}
            />
            <Link to="/services">
              <button className="button-primary" {...aosDivAnimation(300)}>
                Explore all services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
