import { Link } from "react-router-dom";
import { aosTextAnimation } from "utils/constants";

const Section1 = () => {
  return <section style={{
    backgroundImage: `url(${require("assets/images/peopleoworking.jpg")})`
  }} className="h-screen bg-no-repeat bg-cover backdrop-blur-lg mb-16 bg-fixed">

    <div className="w-full h-full bg-blue-600 bg-opacity-50 laptop:pt-40 mobile:pt-32 mobile:text-center laptop:text-left px-5 ">
      <div className="max-width-container">
        <h2 className="max-w-[900px] laptop:text-6xl mobile:text-5xl text-white font-bold leading-normal mb-10" {...aosTextAnimation()}>Empowering Entrepreneurs Through Digitization
        </h2>
        <p className="max-w-[1000px] mobile:text-xl laptop:text-3xl text-white mb-10" {...aosTextAnimation(200)}>
          Creating an ecosystem of innovative business solutions for emerging young technopreneurs that are simple yet scalable and affordable.
        </p>

        <Link to={"/contact"} {...aosTextAnimation(400)}>
          <button className="text-white text-xl px-6 py-4 bg-blue-600 rounded-md hover:bg-blue-800" >Learn more about our ventures</button>
        </Link>
      </div>
    </div>
  </section>
}

export default Section1;