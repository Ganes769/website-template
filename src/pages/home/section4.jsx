import rocket from 'assets/svgs/rocket.svg';
import house from 'assets/svgs/house.svg';
import building from 'assets/svgs/building.svg';
import chess from 'assets/svgs/chess.svg';

import "./index.css";
import { Link } from 'react-router-dom';
import { aosDivAnimation, aosTextAnimation } from 'utils/constants';

const Section4 = () => {
  const data = [
    {
      id: "1",
      title: "Startups",
      description: "We extend our support to emerging startups with proper consulting, training, and by offering affordable technical solutions that will help them streamline their business operations.",
      image: rocket,
    },
    {
      id: "2",
      title: "SMEs",
      description: "Business survival is an ever-existing challenge. When it comes to SMEs, the challenges are tougher amid a highly competitive marketplace.",
      image: house,
    },
    {
      id: "3",
      title: "Corporations",
      description: "Contrary to SMEs, corporate companies have bigger shoes to fill. Corporate enterprises need to ensure their profits in a tight market comprising fresh tech-savvy startups.",
      image: building,
    },
    {
      id: "4",
      title: "Government",
      description: "Merin Technology provides technical consulting and custom solutions to digitize the operations, helping government organization to adapt and function with the latest technology.",
      image: chess,
    },
  ];

  return (
    <section className="mb-20 px-4 py-20 bg-gradient-to-b from-slate-100 to-slate-50">
      <div className="flex flex-col items-center max-width-container">
        <p className="section-label" {...aosTextAnimation()}>Who we serve</p>
        <h3 className="text-4xl laptop:text-5xl font-bold text-center mb-6 font-display" {...aosTextAnimation(50)}>
          Digitize Business Operations Of Any Size
        </h3>
        <p className="text-center max-w-3xl text-lg text-slate-600 mb-12" {...aosTextAnimation(100)}>
          We understand how costly and difficult it is to manage technical infrastructure — let us take care of it so you can focus on your core business.
        </p>

        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-6 w-full">
          {data.map((el) => (
            <div
              key={el.id}
              className="group business-type-card lift-card mobile:flex mobile:flex-col mobile:items-center mobile:text-center laptop:text-left laptop:block"
              {...aosDivAnimation((+el.id * 100) + 100)}
            >
              <img src={el.image} alt="" className="w-14 h-14 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h4 className="business-type-card-heading">{el.title}</h4>
              <p className="business-type-card-desc">{el.description}</p>
              <Link to="/contact">
                <button className="group-hover:border-white group-hover:text-white border border-slate-800 rounded-lg px-4 py-1.5 text-[15px] font-semibold transition-all duration-300 hover:px-6">
                  Learn more
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
