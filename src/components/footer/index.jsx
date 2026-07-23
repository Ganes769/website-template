import facebook from 'assets/svgs/facebook.svg';
import { Link } from 'react-router-dom';
import { aosTextAnimation } from 'utils/constants';

const Footer = () => {
  const servicesLinks = [
    { id: "1", name: "Graphics Designing", link: "/graphics-designing" },
    { id: "2", name: "Photography/videography", link: "/photography" },
    { id: "3", name: "SMS Marketing", link: "/sms-marketing" },
    { id: "4", name: "Social Media Marketing", link: "/social-media-marketing" },
    { id: "5", name: "Website Design and Development", link: "/webisite" },
    { id: "6", name: "Email Marketing", link: "/email-marketing" },
    { id: "7", name: "Search Engine Optimization", link: "/seo" },
    { id: "8", name: "Advertisements/Post Boosts", link: "/advertisements-postboost" },
    { id: "9", name: "Domain Registration / Web Hosting", link: "/domain-webhost" },
    { id: "10", name: "Content Writing", link: "/content-writing" },
  ];

  return (
    <footer className="px-4 pt-20 bg-gradient-to-b from-brand-deep to-slate-950 dark:from-slate-900 dark:to-slate-950 dark:border-t dark:border-slate-800 w-full">
      <div className="max-width-container">
        <div className="flex mobile:flex-col laptop:flex-row gap-12">
          <div className="flex-1 mb-4" {...aosTextAnimation()}>
            <h3 className="text-3xl laptop:text-4xl font-semibold mb-6 text-white font-display">
              Merin Entertainment
            </h3>
            <p className="text-blue-200 mb-6 max-w-md leading-relaxed">
              Empowering entrepreneurs through digitization across Nepal and beyond.
            </p>

            <div className="mb-6">
              <h5 className="text-white text-lg font-semibold mb-1">Nepal Office</h5>
              <p className="text-blue-200 leading-relaxed">
                Basuki Marg, Mid-Baneshwor<br />
                (Near Kantipur College of Management and Information Technology)<br />
                House no.253, Kathmandu, Nepal
              </p>
              <p className="text-blue-200 mt-2">+977 (1) 9842983111</p>
            </div>

            <a
              href="https://www.facebook.com/MerinEntertainment"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white"
            >
              <img src={facebook} alt="" className="h-9 rounded-full" />
              <span>Follow us on Facebook</span>
            </a>
          </div>

          <div className="flex-1" {...aosTextAnimation(200)}>
            <h4 className="text-lg font-semibold text-white mb-3 font-display">Services</h4>
            <div className="columns-2 mb-8 gap-6">
              {servicesLinks.map((link) => (
                <Link key={link.id} to={link.link}>
                  <p className="text-blue-200/90 pb-1.5 text-[15px] hover:text-white transition-colors">
                    {link.name}
                  </p>
                </Link>
              ))}
            </div>
            <div className="flex gap-8">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-3 font-display">About</h4>
                <Link to="/company-info"><p className="text-blue-200 pb-1.5 hover:text-white">Company</p></Link>
                <Link to="/startup-support"><p className="text-blue-200 pb-1.5 hover:text-white">Startup Support</p></Link>
                <Link to="/partner"><p className="text-blue-200 pb-1.5 hover:text-white">Partner with us</p></Link>
                <Link to="/academy"><p className="text-blue-200 pb-1.5 hover:text-white">Academy</p></Link>
                <Link to="/events"><p className="text-blue-200 pb-1.5 hover:text-white">Events</p></Link>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-3 font-display">Contact</h4>
                <Link to="/contact"><p className="text-blue-200 pb-1.5 hover:text-white">Contact Us</p></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex py-8 mt-8 border-t border-white/10 justify-between mobile:flex-col laptop:flex-row mobile:text-center laptop:text-left gap-3">
          <p className="text-blue-200/80 text-sm">Copyright © 2023 Sushant Tandukar. All Rights Reserved.</p>
          <p className="text-blue-200/80 text-sm">
            <Link to="/terms-of-use" className="hover:text-white">Terms of Use</Link>
            <span className="mx-2">·</span>
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
