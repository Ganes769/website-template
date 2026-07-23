import image from 'assets/images/Home_image_2.jpg';
import { Link } from 'react-router-dom';
import { aosDivAnimation, aosTextAnimation } from 'utils/constants';

const Section2 = () => {
  return (
    <section className="mb-20 px-4">
      <div className="flex items-center mobile:flex-col-reverse laptop:flex-row gap-10 max-width-container">
        <div className="flex-[1]">
          <p className="section-label" {...aosTextAnimation()}>About Merin</p>
          <h3 className="text-4xl laptop:text-5xl font-bold mb-6 font-display" {...aosTextAnimation(50)}>
            Go Digital, Go Online
          </h3>
          <p className="p pb-4" {...aosTextAnimation(100)}>
            In this time and age, tech-dependency has risen to the maximum. Our lives run based on the touch of smartphone screens. In such a high-tech world, businesses are bound to get left behind if they do not seek a digital alternative. It&apos;s high time for businesses to implement the latest digital technology to cater to a global audience witnessing rapid digitization.
          </p>
          <p className="p mb-4" {...aosTextAnimation(200)}>
            Merin Entertainment assures state-of-the-art qualities in its marketing solution for a whole range of clients. Merin Entertainment provides print and electronic media solutions advertisement along with creative assistance.
          </p>
          <p className="p mb-10" {...aosTextAnimation(300)}>
            Merin Tech provides fitting solutions for your business to connect with the digital world.
          </p>

          <Link to="/contact">
            <button className="button-primary" {...aosTextAnimation(400)}>Contact us</button>
          </Link>
        </div>

        <div className="flex-[0.9] flex justify-center" {...aosDivAnimation(200)}>
          <img
            src={image}
            alt="Go digital with Merin"
            className="w-[85%] max-w-lg rounded-2xl shadow-xl float-soft"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
