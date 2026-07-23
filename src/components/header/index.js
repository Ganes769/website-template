import logo from "assets/images/Merinlogo.jpg";
import menuIcon from "assets/svgs/menu-icon.svg";
import { useEffect, useState } from "react";
import "./index.css";

import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "components/themeToggle";

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  return (
    <header className={`site-header px-4 py-3 sticky top-0 left-0 w-full z-20 ${scrolled ? "is-scrolled" : ""}`}>
      <div className="max-width-container">
        <nav className="w-full flex justify-between items-center gap-4">
          <Link to="/" onClick={() => setShowMenu(false)} className="shrink-0">
            <img src={logo} className="h-9 rounded transition-transform duration-300 hover:scale-[1.03]" alt="Merin Entertainment" />
          </Link>

          <div className="mobile:hidden laptop:flex items-center">
            <NavHoverLink title="Home" link="/" />
            <NavHoverLink title="Services" link="/services" subLinks={servicesLinks} />
            <NavHoverLink title="Events" link="/events" />
            <NavHoverLink title="Academy" link="/academy" />
            <NavHoverLink title="Startup Support" link="/startup-support" />
            <NavHoverLink title="Company" link="/company-info" />
            <NavHoverLink title="Contact" link="/contact" />
          </div>

          <div className="mobile:hidden laptop:flex items-center gap-3">
            <ThemeToggle />
            <button
              className="button-primary-outlined !py-1.5 !px-5 !text-[15px]"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>

          <div className="mobile:flex laptop:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="p-1 rounded-lg dark:bg-slate-200/90"
              aria-label="Toggle menu"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <img src={menuIcon} alt="" className="w-8 h-8" />
            </button>
          </div>
        </nav>

        {showMenu && (
          <aside className="mobile:block laptop:hidden fixed inset-0 top-[61px] bg-white/95 dark:bg-slate-950/95 backdrop-blur-md w-full h-[calc(100vh-61px)] py-6 px-4 overflow-y-auto animate-fade-up">
            <Link to="/services" onClick={() => setShowMenu(false)}>
              <p className="text-2xl font-semibold text-blue-700 dark:text-sky-400 mb-3 font-display">Services</p>
            </Link>
            {servicesLinks.map((el) => (
              <Link key={el.id} to={el.link} onClick={() => setShowMenu(false)}>
                <p className="transition-all text-lg mb-2 ml-4 hover:text-blue-600 dark:text-slate-300 dark:hover:text-sky-300">{el.name}</p>
              </Link>
            ))}
            <NavHoverLink title="Events" link="/events" onClick={() => setShowMenu(false)} />
            <NavHoverLink title="Academy" link="/academy" onClick={() => setShowMenu(false)} />
            <NavHoverLink title="Startup Support" link="/startup-support" onClick={() => setShowMenu(false)} />
            <NavHoverLink title="Company" link="/company-info" onClick={() => setShowMenu(false)} />
            <NavHoverLink title="Contact" link="/contact" onClick={() => setShowMenu(false)} />
          </aside>
        )}
      </div>
    </header>
  );
};

export default Header;

const NavHoverLink = ({ title, link, onClick, subLinks }) => {
  return (
    <div className="nav-link-container">
      <Link to={link} onClick={onClick}>
        <div className="nav-underline mr-4 text-[15px] desktop:text-base cursor-pointer hover:text-blue-700 dark:text-slate-200 dark:hover:text-sky-300 font-semibold mobile:py-3 laptop:py-0 mobile:border-b mobile:border-slate-200 dark:mobile:border-slate-800 laptop:border-none">
          {title}
        </div>
      </Link>
      {subLinks?.length > 0 && (
        <div className="relative nav-link-options-container">
          <div className="absolute top-2 left-0 bg-white dark:bg-slate-900 links-container p-6 rounded-xl columns-2 gap-4 min-w-[420px]">
            {subLinks.map((el) => (
              <Link key={el.id} to={el.link} onClick={onClick}>
                <p className="transition-all duration-300 text-[15px] mb-2.5 mr-2 hover:text-blue-600 dark:text-slate-300 dark:hover:text-sky-300 hover:translate-x-1">
                  {el.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
