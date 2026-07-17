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
      description: "We make from informative sites to custom sofware according to your needs.",
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
  ]

  return <section className="mb-16 px-4 pt-16">
    <div className='max-width-container'>
      <h3 className='text-5xl font-bold mb-4' {...aosTextAnimation()}>Our Services</h3>
      <div className='flex mobile:flex-col laptop:flex-row'>

        <div className='flex-[1.2]'>
          <p className='text-lg mb-6' {...aosTextAnimation(100)}>Merin Tech provides end-to-end digitization services from photography to custom sotware development.</p>

          {
            data.map(el => <div key={el.id} className='flex mobile:flex-col laptop:flex-row mobile:items-center laptop:items-start mobile:text-center laptop:text-left mobile:mb-4 laptop:mb-6' {...aosDivAnimation((+el.id * 100) + 100)}>
              <img src={el.image} alt="icon" className='w-14 h-14 mb-2 mr-6' />
              <div>
                <h4 className='mb-1 text-xl font-semibold'>{el.title}</h4>
                <p className='text-[16px]'>{el.description}</p>
              </div>
            </div>)
          }
        </div>

        <div className='flex-1 flex flex-col items-center'>
          <img src={image} alt='display-item' className='w-full max-w-[450px] mb-3' {...aosDivAnimation(200)} />
          <Link to={"/services"}>
            <button className="text-white text-xl px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-800" {...aosDivAnimation(300)}>Explore all services</button>
          </Link>
        </div>
      </div>
    </div>
  </section>
}

export default Section5;