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
    { id: "8", name: "Avertisements/Post Boosts", link: "/advertisements-postboost" },
    { id: "9", name: "Domain Registration / Web Hosting", link: "/domain-webhost" },
    { id: "10", name: "Content Writing", link: "/content-writing" },
  ]

  return <footer className="px-4 pt-24 bg-blue-950 w-full">
    <div className='max-width-container'>
      <div className="flex mobile:flex-col laptop:flex-row">
        <div className="flex-1 mb-8" {...aosTextAnimation()}>
          <h3 className='text-5xl font-semibold mb-8 text-white'>Merin Entertainment Global offices</h3>

          <div className="mb-6">
            <h5 className="text-white text-lg font-semibold">Nepal</h5>
            <p className="text-blue-200">Basuki Marg, Mid-Baneshwor (Near Kantipur College of Management and Information Technology),<br />House no.253 Kathmandu, Nepal</p>
            <p className="text-blue-200">+977 (1) 9842983111</p>
          </div>

          <div>
            <h5 className="inline font-semibold text-blue-200 text-lg">Follow us : <a href='https://www.facebook.com/MerinEntertainment' target='_blank' rel="noreferrer"><img src={facebook} alt='logo' className='h-10 inline rounded-full mx-1' /></a>
              {/* <img src={image} alt='logo' className='h-10 inline rounded-full mx-1' /> 
            <img src={image} alt='logo' className='h-10 inline rounded-full mx-1' /> */}
            </h5>
          </div>
        </div>

        <div className="flex-1 gap-8" {...aosTextAnimation(200)}>
          {/* {
            data.map(section => <div key={section.id}>
              <p className="text-white font-semibold text-xl mb-2">{section.title}</p>
              {
                section.links.map(link => <p className="text-blue-200 pb-1" key={link.id}>{link.name}</p>)
              }
            </div>)
          } */}

          <h4 className="text-xl font-semibold text-white mb-2">Services</h4>
          <div className="columns-2 mb-4">
            {
              servicesLinks.map(link => <Link key={link.id} to={link.link}>
                <p className="text-blue-200 pb-1" >{link.name}</p>
              </Link>)
            }
          </div>
          <div className="flex">
            <div className='flex-1'>
              <h4 className="text-xl font-semibold text-white mb-2">About</h4>
              <Link to={'/company-info'}>
                <p className="text-blue-200 pb-1" >Company-info</p>
              </Link>
              <Link to={'/startup-support'}>
                <p className="text-blue-200 pb-1" >Startup Support</p>
              </Link>
              <Link to={'/partner'}>
                <p className="text-blue-200 pb-1" >Partner with us</p>
              </Link>
              <Link to={'/academy'}>
                <p className="text-blue-200 pb-1" >Academy</p>
              </Link>
              <Link to={'/events'}>
                <p className="text-blue-200 pb-1" >Events</p>
              </Link>
            </div>
            <div className='flex-1'>
              <h4 className="text-xl font-semibold text-white mb-2">Contact</h4>
              <Link to={'/contact'}>
                <p className="text-blue-200 pb-1" >Contact Us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex py-8 justify-between mobile:flex-col laptop:flex-row mobile:text-center laptop:text-left'>
        <p className='text-blue-200 mb-3'>Copyright @2023 Sushant Tandukar. All Rights Reserved.</p>
        <p className='text-blue-200'>
          <Link to="/terms-of-use" className="hover:text-white">Terms of Use</Link>
          <span className="mx-2">|</span>
          <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
        </p>
      </div>
    </div>
  </footer>
}

export default Footer