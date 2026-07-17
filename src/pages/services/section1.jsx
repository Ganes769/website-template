import { Link } from "react-router-dom";
import { aosDivAnimation, aosTextAnimation } from "utils/constants";

const Section1 = ({
  title,
  desc,
  buttonText,
  buttonLink,
  image
}) => {
  return <section className="bg-white">
    <div className="max-width-container py-12 px-4 mb-16 flex mobile:flex-col laptop:flex-row items-center">
      <div className="flex-1 mobile:text-center laptop:text-left">
        <h6 className="text-blue-600 uppercase font-semibold mb-3">Industry Types</h6>
        <h2 className="h2" {...aosTextAnimation()}>{title}</h2>
        <p className="p mb-8" {...aosTextAnimation(100)}>{desc}</p>
        <Link to={buttonLink}>
          <button className="button-primary" {...aosDivAnimation(200)}>
            {buttonText}
          </button>
        </Link>
      </div>
      <div className="flex-1 laptop:flex justify-end mobile:hidden">
        <img src={image} alt="icons" className="max-w-lg w-full" {...aosDivAnimation(200)} />
      </div>

    </div>

  </section>
}

export default Section1;