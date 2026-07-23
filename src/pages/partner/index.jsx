import { Link } from "react-router-dom";
import { aosDivAnimation, aosTextAnimation } from "utils/constants";
import partnerImage from "assets/images/partner.jpg";

const reasons = [
  {
    id: "1",
    title: "Shared growth",
    description: "Collaborate on projects that expand reach for both brands — from campaigns to digital products.",
  },
  {
    id: "2",
    title: "Complementary expertise",
    description: "Combine your strengths with our design, marketing, events, and IT capabilities.",
  },
  {
    id: "3",
    title: "Local & regional impact",
    description: "Work with a Nepal-based team focused on helping businesses and communities digitize.",
  },
];

const Partner = () => {
  return (
    <main>
      <section className="bg-blue-950 dark:bg-slate-900 dark:border-b dark:border-slate-800">
        <div className="max-width-container py-20 px-4 flex mobile:flex-col laptop:flex-row items-center gap-10">
          <div className="flex-1 mobile:text-center laptop:text-left">
            <p className="text-blue-200 uppercase font-semibold mb-3">Partnership</p>
            <h1 className="text-5xl font-bold text-white mb-6" {...aosTextAnimation()}>
              Your partner for growth
            </h1>
            <p className="text-blue-200 text-lg mb-8" {...aosTextAnimation(100)}>
              Merin Entertainment aims to be one of the leading companies in Nepal. As demand for technology, brand promotion, and awareness grows, we are ready to collaborate with partners who share that vision.
            </p>
            <Link to="/contact">
              <button className="hover:bg-blue-600 border border-white rounded-md px-6 py-2 text-white text-lg" {...aosDivAnimation(200)}>
                Become our partner
              </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center" {...aosDivAnimation(300)}>
            <img src={partnerImage} alt="Partnership" className="w-full max-w-[360px] rounded-full" />
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-width-container">
          <h2 className="h2 mb-4" {...aosTextAnimation()}>Why partner with Merin</h2>
          <p className="p mb-12 max-w-[700px]" {...aosTextAnimation(100)}>
            Whether you are an agency, educator, investor network, or brand looking to expand digitally — we build partnerships that create lasting value.
          </p>

          <div className="grid mobile:grid-cols-1 laptop:grid-cols-3 gap-8">
            {reasons.map((item, index) => (
              <div
                key={item.id}
                className="lift-card p-8 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800"
                {...aosDivAnimation(index * 100 + 100)}
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-sky-400 mb-3">{item.title}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-width-container text-center">
          <h2 className="h2 mb-4" {...aosTextAnimation()}>Let&apos;s build together</h2>
          <p className="p mb-8 max-w-[600px] mx-auto" {...aosTextAnimation(100)}>
            Share your partnership idea and we&apos;ll explore how Merin Entertainment can support mutual growth.
          </p>
          <div className="flex mobile:flex-col laptop:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="button-primary" {...aosDivAnimation(200)}>
                Start a conversation
              </button>
            </Link>
            <Link to="/services">
              <button className="button-primary-outlined" {...aosDivAnimation(300)}>
                Explore our services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partner;
