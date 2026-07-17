import { Link } from "react-router-dom";
import { aosDivAnimation, aosTextAnimation } from "utils/constants";
import hero from "assets/images/ola_education.jpg";

const programs = [
  {
    id: "1",
    title: "Digital Marketing Fundamentals",
    description: "Learn social media, content strategy, email campaigns, and paid ads to grow a brand online.",
  },
  {
    id: "2",
    title: "Creative Design Essentials",
    description: "Build practical skills in visual identity, marketing design, and digital creative production.",
  },
  {
    id: "3",
    title: "Web & Tech for Business",
    description: "Understand websites, hosting, SEO basics, and how technology supports modern business growth.",
  },
  {
    id: "4",
    title: "Entrepreneurship Mentorship",
    description: "Guidance for young innovators on turning ideas into products, finding customers, and building teams.",
  },
];

const Academy = () => {
  return (
    <main>
      <section className="bg-gray-50">
        <div className="max-width-container py-16 px-4 flex mobile:flex-col laptop:flex-row items-center gap-10">
          <div className="flex-1 mobile:text-center laptop:text-left">
            <p className="text-blue-600 uppercase font-semibold mb-3">Merin Academy</p>
            <h1 className="h2" {...aosTextAnimation()}>
              Educating local innovators
            </h1>
            <p className="p mb-8" {...aosTextAnimation(100)}>
              Merin Entertainment encourages young creators and entrepreneurs to pursue technology and digital skills as a career. Our academy focuses on practical learning that closes the gap between ideas and real-world execution.
            </p>
            <Link to="/contact">
              <button className="button-primary" {...aosDivAnimation(200)}>
                Inquire about training
              </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center" {...aosDivAnimation(200)}>
            <img src={hero} alt="Merin Academy" className="w-full max-w-[450px] rounded-lg" />
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-width-container">
          <h2 className="h2 mb-4" {...aosTextAnimation()}>Learning programs</h2>
          <p className="p mb-12 max-w-[700px]" {...aosTextAnimation(100)}>
            Programs are designed for students, early-career professionals, and founders who want hands-on digital skills.
          </p>

          <div className="grid mobile:grid-cols-1 laptop:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className="p-8 rounded-lg border border-gray-100 bg-white shadow-sm"
                {...aosDivAnimation((index % 2) * 100 + 100)}
              >
                <h3 className="text-2xl font-semibold text-blue-600 mb-3">{program.title}</h3>
                <p className="text-lg mb-6">{program.description}</p>
                <Link to="/contact">
                  <button className="button-primary-outlined">Learn more</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-blue-950">
        <div className="max-width-container flex mobile:flex-col laptop:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white mb-4" {...aosTextAnimation()}>
              Making technology accessible
            </h2>
            <p className="text-blue-200 text-lg" {...aosTextAnimation(100)}>
              We recognize the void in tech education and distribution. Merin Academy helps local communities, SMEs, and startups access modern skills and tools for digital growth.
            </p>
          </div>
          <div>
            <Link to="/events">
              <button className="hover:bg-blue-600 border border-white rounded-md px-6 py-2 text-white text-lg" {...aosDivAnimation(200)}>
                View related events
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academy;
