import { Link } from "react-router-dom";
import { aosDivAnimation, aosTextAnimation } from "utils/constants";
import hero from "assets/images/carousel.jpg";

const upcomingEvents = [];

const pastHighlights = [
  {
    id: "1",
    title: "Digital Marketing Workshops",
    description: "Hands-on sessions covering social media strategy, content planning, and paid advertising for growing brands.",
  },
  {
    id: "2",
    title: "Startup Demo Days",
    description: "Opportunities for early-stage founders to present ideas, receive feedback, and connect with mentors and partners.",
  },
  {
    id: "3",
    title: "Product Demo Sessions",
    description: "Live walkthroughs of tools and digital solutions that help businesses streamline operations and reach customers.",
  },
];

const Events = () => {
  return (
    <main>
      <section className="bg-gray-50 dark:bg-slate-900">
        <div className="max-width-container py-16 px-4 flex mobile:flex-col laptop:flex-row items-center gap-10">
          <div className="flex-1 mobile:text-center laptop:text-left">
            <p className="section-label">Digital events</p>
            <h1 className="h2" {...aosTextAnimation()}>
              Trainings, demos & announcements
            </h1>
            <p className="p mb-8" {...aosTextAnimation(100)}>
              Get access to upcoming events, past highlights, product demos, and training sessions from Merin Entertainment.
            </p>
            <Link to="/contact">
              <button className="button-primary" {...aosDivAnimation(200)}>
                Partner on an event
              </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center" {...aosDivAnimation(200)}>
            <img src={hero} alt="Digital events" className="w-full max-w-[450px] rounded-lg" />
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-width-container">
          <h2 className="h2 mb-4" {...aosTextAnimation()}>Upcoming events</h2>
          <p className="p mb-10 max-w-[700px]" {...aosTextAnimation(100)}>
            Check back soon for workshops, webinars, and community sessions. You can also reach out if you want to co-host an event with us.
          </p>

          {upcomingEvents.length === 0 ? (
            <div className="border border-dashed border-gray-300 dark:border-slate-700 rounded-lg py-16 px-6 text-center bg-gray-50 dark:bg-slate-900/60" {...aosDivAnimation(150)}>
              <p className="text-xl text-red-600 dark:text-rose-400 font-semibold mb-2">No events currently!</p>
              <p className="text-lg text-gray-600 dark:text-slate-400 mb-6">
                We are preparing the next round of digital events. Stay tuned or contact us to get notified.
              </p>
              <Link to="/contact">
                <button className="button-primary-outlined">Notify me</button>
              </Link>
            </div>
          ) : (
            <div className="grid mobile:grid-cols-1 laptop:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-6 border border-gray-100 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                  <p className="p">{event.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-4 py-16 bg-white dark:bg-transparent">
        <div className="max-width-container">
          <h2 className="h2 mb-4" {...aosTextAnimation()}>What we host</h2>
          <p className="p mb-12 max-w-[700px]" {...aosTextAnimation(100)}>
            From skill-building workshops to startup showcases, our events help entrepreneurs and businesses stay ahead digitally.
          </p>

          <div className="grid mobile:grid-cols-1 laptop:grid-cols-3 gap-8">
            {pastHighlights.map((item, index) => (
              <div
                key={item.id}
                className="lift-card px-8 py-6 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800"
                {...aosDivAnimation(index * 100 + 100)}
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-sky-400 mb-3">{item.title}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
