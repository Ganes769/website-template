import logo from "assets/images/Merinlogo.jpg";
import menuIcon from "assets/svgs/menu-icon.svg";
import { useState } from "react";
import "./index.css";

import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const servicesLinks = [
    { id: "1", name: "Graphics Designing", link: "/graphics-designing" },
    { id: "2", name: "Photography/videography", link: "/photography" },
    { id: "3", name: "SMS Marketing", link: "/sms-marketing" },
    { id: "4", name: "Social Media Marketing", link: "/social-media-marketing" },
    { id: "5", name: "Website Design and Development", link: "/webisite" },
    { id: "6", name: "Email Marketing", link: "/email-marketing" },
    { id: "7", name: "Search Engine Optimization", link: "/seo" },
    { id: "8", name: "Avertisements/Post Boosts", link: "/advertisements-postboost" },
    { id: "9", name: "Domain Registration / Web Hosting", link: "/domain-webhost" },
    { id: "10", name: "Content Writing", link: "/content-writing" },
  ]

  return <header className="px-4 py-3 bg-white sticky top-0 left-0 w-full shadow-lg z-10">
    <div className="max-width-container">
      <nav className="w-full flex justify-between items-center">
        <Link to={'/'} onClick={() => setShowMenu(false)}>
          <img src={logo} className="h-8" alt="logo" />
        </Link>

        <div className="mobile:hidden laptop:flex">
          <NavHoverLink title="Home" link={"/"} />
          <NavHoverLink title="Services" link={"/services"} subLinks={servicesLinks} />
          <NavHoverLink title="Events" link={"/events"} />
          <NavHoverLink title="Academy" link={"/academy"} />
          <NavHoverLink title="Startup Support" link={"/startup-support"} />
          <NavHoverLink title="Contact" link={"/contact"} />
          <NavHoverLink title="Company-Info" link={"/company-info"} />
        </div>

        <button className="mobile:hidden laptop:block hover:bg-blue-600 hover:text-white border-solid border-[1px] border-blue-600 rounded-md px-6 py-1 text-blue-600 text-[16px]" onClick={() => {
          navigate("/contact")
        }}>
          Contact Us
        </button>

        <img src={menuIcon} alt="menu-icon" className="mobile:block laptop:hidden w-10 h-10" onClick={() => { setShowMenu(prev => !prev) }} />
      </nav>
      {showMenu && <aside className="mobile:block laptop:hidden fixed left-0 bg-white w-full h-full py-6 px-4">
        <p className="text-2xl font-semibold text-blue-700 mb-2">Services</p>
        {
          servicesLinks.map(el => <Link key={el.id} to={el.link} onClick={() => setShowMenu(false)}>
            <p className="transition-all text-lg mb-2 ml-8 mr-2 hover:text-blue-600">{el.name}</p>
          </Link>)
        }
        <NavHoverLink title="Events" link={"/events"} onClick={() => setShowMenu(false)} />
        <NavHoverLink title="Academy" link={"/academy"} onClick={() => setShowMenu(false)} />
        <NavHoverLink title="Startup Support" link={"/startup-support"} onClick={() => setShowMenu(false)} />
        <NavHoverLink title="Company-Info" link={"/company-info"} onClick={() => setShowMenu(false)} />
        <NavHoverLink title="Contact" link={"/contact"} onClick={() => setShowMenu(false)} />
      </aside>}
    </div>
  </header>
}

export default Header;

const NavHoverLink = ({ title, link, onClick, subLinks }) => {
  return <div className="nav-link-container">
    {subLinks?.length > 0 ?
      <Link to={link} onClick={onClick}>
        <div className="mr-5 text-lg cursor-pointer hover:text-blue-600 font-semibold mobile:py-4 laptop:py-0 mobile:border-b-[1px] laptop:border-none">
          {title}
        </div>
      </Link>
      : <Link to={link} onClick={onClick}>
        <div className="mr-5 text-lg cursor-pointer hover:text-blue-600 font-semibold mobile:py-4 laptop:py-0 mobile:border-b-[1px] laptop:border-none">
          {title}
        </div>
      </Link>}
    {subLinks?.length > 0 && <div className="relative nav-link-options-container">
      <div className="absolute top-0 bg-white links-container p-8 rounded-lg columns-2 gap-4">
        {
          subLinks?.map(el => <Link key={el.id} to={el.link} onClick={el.onClick}>
            <p className="transition-all text-lg mb-2 mr-2 hover:text-blue-600 hover:scale-110">{el.name}</p>
          </Link>)
        }
      </div>
    </div>}
  </div>
}