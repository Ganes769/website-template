import { Link } from "react-router-dom";
import { aosDivAnimation, aosTextAnimation } from "utils/constants";

const columnClass = {
  1: "laptop:grid-cols-1",
  2: "laptop:grid-cols-2",
  3: "laptop:grid-cols-3",
  4: "laptop:grid-cols-4",
};

const Section3 = ({
  title,
  options,
  maxColumns = 3,
}) => {
  return (
    <section className="bg-slate-50">
      <div className="max-width-container py-14 px-4 mb-8">
        <h2 className="h2 mobile:leading-[48px] laptop:leading-[64px] text-center mb-10" {...aosTextAnimation()}>
          {title}
        </h2>

        <div className={`grid mobile:grid-cols-1 ${columnClass[maxColumns] || "laptop:grid-cols-3"} gap-6`}>
          {options.map((el) => (
            <div
              key={el.id}
              className="lift-card w-full h-full p-8 bg-white border border-blue-100/80 rounded-xl"
              {...aosDivAnimation((+el.id * 100) + 100)}
            >
              <h4 className="font-semibold text-xl mb-3 font-display">{el.title}</h4>
              {el.desc && <p className="p mb-6">{el.desc}</p>}
              {el?.list?.length > 0 && (
                <ul className="list-disc pl-5 mb-5 space-y-1">
                  {el.list.map((item) => (
                    <li key={item.id} className="text-[16px] text-slate-600">{item.content}</li>
                  ))}
                </ul>
              )}
              <Link to="/contact">
                <button className="button-primary-outlined">Get started</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
