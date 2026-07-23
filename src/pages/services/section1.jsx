import { Link } from "react-router-dom";
import { aosDivAnimation, aosTextAnimation } from "utils/constants";

const Section1 = ({
  title,
  desc,
  buttonText,
  buttonLink,
  image
}) => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
      <div className="max-width-container py-14 px-4 mb-8 flex mobile:flex-col laptop:flex-row items-center gap-10">
        <div className="flex-1 mobile:text-center laptop:text-left">
          <p className="section-label">Service</p>
          <h2 className="h2" {...aosTextAnimation()}>{title}</h2>
          <p className="p mb-8 max-w-xl mx-auto laptop:mx-0" {...aosTextAnimation(100)}>{desc}</p>
          <Link to={buttonLink}>
            <button className="button-primary" {...aosDivAnimation(200)}>
              {buttonText}
            </button>
          </Link>
        </div>
        <div className="flex-1 laptop:flex justify-end mobile:hidden" {...aosDivAnimation(200)}>
          <img src={image} alt={title} className="max-w-lg w-full rounded-2xl shadow-lg float-soft" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
