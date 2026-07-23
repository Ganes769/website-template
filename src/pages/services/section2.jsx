import { aosTextAnimation } from "utils/constants";

const Section2 = ({
  title,
  options,
}) => {
  return (
    <section>
      <div className="max-width-container py-12 px-4 mb-10">
        <h2 className="h2 mobile:leading-[48px] laptop:leading-[64px] max-w-[800px]" {...aosTextAnimation()}>
          {title}
        </h2>

        <div className="grid mobile:grid-cols-1 laptop:grid-cols-2 gap-8 mt-8">
          {options.map((el, index) => (
            <div
              key={el.id}
              className="lift-card mobile:p-4 laptop:p-8 text-center rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900"
              {...aosTextAnimation(100 + index * 50)}
            >
              <img src={el.image} alt={el.title} className="mx-auto h-56 object-contain mb-5" />
              <h4 className="font-semibold text-2xl mb-3 font-display">{el.title}</h4>
              <p className="p">{el.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
