import { aosTextAnimation } from "utils/constants";

const Section2 = ({
  title,
  options,
}) => {
  return <section className="">
    <div className="max-width-container py-12 px-4 mb-16">

      <h2 className="h2 mobile:leading-[48px] laptop:leading-[64px] max-w-[800px]" {...aosTextAnimation()}>{title}</h2>

      <div className="grid mobile:grid-cols-1 laptop:grid-cols-2">
        {
          options.map(el => <div key={el.id} className="mobile:p-0 laptop:p-8 text-center" {...aosTextAnimation(100)}>
            <img src={el.image} alt={el.title} className="mx-auto h-64 mb-4" />
            <h4 className="font-semibold text-2xl mb-3">{el.title}</h4>
            <p className="p">{el.desc}</p>
          </div>)
        }
      </div>

    </div>

  </section>
}

export default Section2;