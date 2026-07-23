import nationalAviationAcademy from 'assets/images/national_aviation_academy.png';
import zanibarResturant from 'assets/images/zanibar_resturant.png';
import coffeeExpress from 'assets/images/coffee_express.png';
import olaEducation from 'assets/images/ola_education.jpg';
import jmcTradelink from 'assets/images/jms_tradeling.png';
import genesesNepal from 'assets/images/geneses_nepal.png';
import { aosDivAnimation, aosTextAnimation } from 'utils/constants';

const Section9 = () => {
  const logos = [
    { src: nationalAviationAcademy, delay: 100 },
    { src: zanibarResturant, delay: 150 },
    { src: coffeeExpress, delay: 200 },
    { src: olaEducation, delay: 250 },
    { src: jmcTradelink, delay: 300 },
    { src: genesesNepal, delay: 350 },
  ];

  return (
    <section className="mb-24 px-4 py-16">
      <div className="flex flex-col items-center max-width-container">
        <p className="section-label" {...aosTextAnimation()}>Trusted by</p>
        <h3 className="text-3xl laptop:text-4xl font-bold mb-10 text-center font-display" {...aosTextAnimation(50)}>
          Companies we&apos;ve worked with
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-6 laptop:gap-10">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt="Client logo"
              className="h-16 laptop:h-20 opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500"
              {...aosDivAnimation(logo.delay)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section9;
