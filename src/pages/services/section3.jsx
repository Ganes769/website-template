import { Link } from "react-router-dom";
import { aosDivAnimation, aosTextAnimation } from "utils/constants";

const Section3 = ({
  title,
  options,
  maxColumns = 3,
}) => {
  return <section className="bg-white">
    <div className="max-width-container py-12 px-4 mb-16">

      <h2 className="h2 mobile:leading-[48px] laptop:leading-[64px] text-center mb-8" {...aosTextAnimation()}>{title}</h2>

      <div className={`grid mobile:grid-cols-1 laptop:grid-cols-${maxColumns} gap-6 place-items-center`}>
        {
          options.map(el => <div key={el.id} className="w-full h-full p-8 hover:bg-gray-100 shadow-lg border-solid border-[1px] border-blue-100 rounded-md" {...aosDivAnimation((+el.id * 100) + 100)}>
            {/* <img src={el.image} alt={el.title} className="w-16 max-w-[300px] mb-4 rounded-full" /> */}
            <h4 className="font-semibold text-xl mb-3">{el.title}</h4>
            {el.desc && <p className="p mb-6">{el.desc}</p>}
            {el?.list?.length && <ul className="list-disc pl-5 mb-4">
              {
                el?.list.map(item => <li key={item.id} className="text-[16px]">{item.content}</li>)
              }
            </ul>}
            <Link to={'/contact'}><button className="button-primary-outlined">Get started</button></Link>
          </div>)
        }
      </div>
    </div>

  </section>
}

export default Section3;