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
      image: chess
    },

  ]

  return <section className="mb-16 px-4 bg-gray-100 py-20">
    <div className='flex flex-col items-center max-width-container'>
      <h3 className='text-5xl font-bold text-center mb-6' {...aosTextAnimation()} >Digitize Business Operation Of Any Size</h3>

      <p className='text-center max-w-4xl text-xl mb-12' {...aosTextAnimation(100)}>We understand how costly and difficult is it to manage the technical infrastructure, let us take care of it and you focus on your core business.</p>

      <div className='grid mobile:grid-cols-1 laptop:grid-cols-4 gap-8'>
        {data.map(el => <div key={el.id} className='group business-type-card mobile:flex mobile:flex-col mobile:items-center mobile:text-center laptop:text-left laptop:block' {...aosDivAnimation((+el.id * 100) + 100)}>
          <img src={el.image} alt="icon" className='w-16 h-16 mb-3' />
          <h4 className='business-type-card-heading'>{el.title}</h4>
          <p className='business-type-card-desc'>{el.description}</p>
          <Link to={"/contact"}>
            <button className="group-hover:border-white group-hover:text-white border-solid border-[1px] border-black rounded-md px-4 py-1 text-lg transition-all hover:px-10">
              Learn more
            </button>
          </Link>
        </div>)}

      </div>
    </div>
  </section>
}

export default Section4;