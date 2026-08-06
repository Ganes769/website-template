import image from 'assets/images/Home_image_2.jpg';
import { Link } from 'react-router-dom';
import { aosDivAnimation, aosTextAnimation } from 'utils/constants';

const Section2 = () => {
  return (
    <section className="mb-24 px-4 pt-24">
      <div className="flex items-center mobile:flex-col-reverse laptop:flex-row gap-14 max-width-container">
        <div className="flex-[1]">
          <p className="section-label" {...aosTextAnimation()}>About Merin</p>
          <h3 className="text-4xl laptop:text-5xl font-bold mb-6 font-display" {...aosTextAnimation(50)}>
            Go Digital, Go Online
          </h3>
          <p className="p pb-4" {...aosTextAnimation(100)}>
            In this time and age, tech-dependency has risen to the maximum. Our lives run based on the touch of smartphone screens. In such a high-tech world, businesses are bound to get left behind if they do not seek a digital alternative.
          </p>
          <p className="p mb-4" {...aosTextAnimation(200)}>
            Merin Entertainment assures state-of-the-art qualities in its marketing solution for a whole range of clients — print and electronic media, creative assistance, and digital strategy.
          </p>
          <p className="p mb-10" {...aosTextAnimation(300)}>
            Merin Tech provides fitting solutions for your business to connect with the digital world.
          </p>

          <div className="flex flex-wrap gap-3" {...aosTextAnimation(400)}>
            <Link to="/contact">
              <button className="button-primary">Contact us</button>
            </Link>
            <Link to="/company-info">
              <button className="button-primary-outlined">Our story</button>
            </Link>
          </div>
        </div>

        <div className="flex-[0.95] flex justify-center" {...aosDivAnimation(200)}>
          <div className="image-frame w-[88%] max-w-lg">
            <img
              src={image}
              alt="Go digital with Merin"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
