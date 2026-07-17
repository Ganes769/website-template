import nationalAviationAcademy from 'assets/images/national_aviation_academy.png';
import zanibarResturant from 'assets/images/zanibar_resturant.png';
import coffeeExpress from 'assets/images/coffee_express.png';
import olaEducation from 'assets/images/ola_education.jpg';
import jmcTradelink from 'assets/images/jms_tradeling.png';
import genesesNepal from 'assets/images/geneses_nepal.png';
import { aosDivAnimation, aosTextAnimation } from 'utils/constants';

const Section9 = () => {
  return <section className='mb-16 px-4 laptop:py-24  mobile:text-center laptop:text-left'>
    <div className='flex flex-col items-center max-width-container'>
      <h3 className='text-4xl font-bold mb-8' {...aosTextAnimation()}>Some of the Companies we've worked for</h3>

      <div className='flex flex-wrap justify-center'>
        <img src={nationalAviationAcademy} alt="logo" className='h-24 inline' {...aosDivAnimation(100)} />
        <img src={zanibarResturant} alt="logo" className='h-24 inline' {...aosDivAnimation(200)} />
        <img src={coffeeExpress} alt="logo" className='h-24 inline' {...aosDivAnimation(300)} />
        <img src={olaEducation} alt="logo" className='h-24 inline mx-3' {...aosDivAnimation(400)} />
        <img src={jmcTradelink} alt="logo" className='h-24 inline' {...aosDivAnimation(500)} />
        <img src={genesesNepal} alt="logo" className='h-24 inline' {...aosDivAnimation(600)} />
      </div>
    </div>
  </section>
}

export default Section9;