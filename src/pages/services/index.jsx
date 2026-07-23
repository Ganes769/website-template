import { Link } from "react-router-dom";
import { aosDivAnimation, aosTextAnimation } from "utils/constants";
import graphics from "assets/images/graphics_designing.webp";
import photography from "assets/images/photography.png";
import sms from "assets/images/sms_amrketing.jpg";
import social from "assets/images/social_marketing.png";
import website from "assets/images/web_dev.jpg";
import email from "assets/images/email_marketing.webp";
import seo from "assets/images/seo.webp";
import ads from "assets/images/tv_ads.jpg";
import domain from "assets/images/domain_reg.webp";
import content from "assets/images/content_writing.webp";
import hero from "assets/images/services_image.jpg";

const services = [
  {
    id: "1",
    title: "Graphics Designing",
    description: "Visual identity, marketing creatives, UI graphics, packaging, and motion design for your brand.",
    image: graphics,
    link: "/graphics-designing",
  },
  {
    id: "2",
    title: "Photography / Videography",
    description: "Product shoots, brand photography, and video production to showcase your business with clarity.",
    image: photography,
    link: "/photography",
  },
  {
    id: "3",
    title: "SMS Marketing",
    description: "Reach customers directly with targeted SMS campaigns that drive engagement and conversions.",
    image: sms,
    link: "/sms-marketing",
  },
  {
    id: "4",
    title: "Social Media Marketing",
    description: "Grow your presence across social platforms with strategy, content, and paid promotion.",
    image: social,
    link: "/social-media-marketing",
  },
  {
    id: "5",
    title: "Website Design & Development",
    description: "From informative sites to custom web apps built around your business goals.",
    image: website,
    link: "/webisite",
  },
  {
    id: "6",
    title: "Email Marketing",
    description: "Nurture leads and retain customers with thoughtful email campaigns and automation.",
    image: email,
    link: "/email-marketing",
  },
  {
    id: "7",
    title: "Search Engine Optimization",
    description: "Improve visibility and organic traffic with on-page, off-page, and technical SEO.",
    image: seo,
    link: "/seo",
  },
  {
    id: "8",
    title: "Advertisements / Post Boosts",
    description: "Amplify your reach with paid ads and post boosts across digital channels.",
    image: ads,
    link: "/advertisements-postboost",
  },
  {
    id: "9",
    title: "Domain Registration / Web Hosting",
    description: "Secure your domain and host your website with reliable, business-ready infrastructure.",
    image: domain,
    link: "/domain-webhost",
  },
  {
    id: "10",
    title: "Content Writing",
    description: "Informative, engaging content for websites, blogs, and marketing campaigns.",
    image: content,
    link: "/content-writing",
  },
];

const Services = () => {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-white">
        <div className="max-width-container py-16 px-4 flex mobile:flex-col laptop:flex-row items-center gap-10">
          <div className="flex-1 mobile:text-center laptop:text-left">
            <p className="section-label">What we offer</p>
            <h1 className="h2" {...aosTextAnimation()}>
              End-to-end digitization services
            </h1>
            <p className="p mb-8" {...aosTextAnimation(100)}>
              Merin Entertainment provides marketing, creative, and IT solutions to help startups, SMEs, and enterprises grow through digital transformation.
            </p>
            <Link to="/contact">
              <button className="button-primary" {...aosDivAnimation(200)}>
                Looking for a solution? Let&apos;s talk
              </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center" {...aosDivAnimation(200)}>
            <img src={hero} alt="Our services" className="w-full max-w-[450px] rounded-2xl shadow-xl float-soft" />
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-width-container">
          <h2 className="h2 mb-4" {...aosTextAnimation()}>All services</h2>
          <p className="p mb-12 max-w-[700px]" {...aosTextAnimation(100)}>
            Explore our full range of digital services. Select a service to learn more about how we can support your business.
          </p>

          <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={service.link}
                className="group lift-card block bg-white border border-slate-100 rounded-2xl overflow-hidden"
                {...aosDivAnimation((index % 3) * 100 + 100)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-display group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-slate-600 mb-4">{service.description}</p>
                  <span className="text-blue-700 font-semibold text-lg">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-blue-950">
        <div className="max-width-container text-center">
          <h2 className="text-4xl font-bold text-white mb-4" {...aosTextAnimation()}>
            Need a custom package?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-[600px] mx-auto" {...aosTextAnimation(100)}>
            Tell us about your goals and we&apos;ll recommend the right mix of design, marketing, and technology services.
          </p>
          <Link to="/contact">
            <button className="button-primary" {...aosDivAnimation(200)}>
              Contact us
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
