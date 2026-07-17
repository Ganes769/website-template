import AutoCounter from "components/counter";
import { aosTextAnimation } from "utils/constants";

const Section2 = () => {
  return <section className="mb-16 py-16">

    <div className="max-width-container px-4">
      <h2 className="h2 max-w-[900px] laptop:text-6xl mobile:text-5xl font-semibold leading-normal mb-10" {...aosTextAnimation(100)}>Foundation
      </h2>
      <div className="flex mobile:flex-col laptop:flex-row">
        <div className="flex-1 mb-10" {...aosTextAnimation(200)}>
          <p className="p mb-4">Merin Entertainment is a Marketing solution company working in different and varies brand and product in a market, it provides all forms of marketing solutions initiated and run by a team of dedicated marketing experts and event creator's as well as entrepreneurs from diverse field shaped in 2018.</p>
          <p className="p">Merin Entertainment holds to be the pioneer to run Product information and report covering in market and recently it has made it breakthrough in different company’s Branding by giving a different branding space in public vehicles, which is a completely new and effective trend in Nepal.</p>
        </div>
        <div className="flex-1" {...aosTextAnimation(400)}>
          <div className="grid mobile:grid-cols-2 laptop:grid-cols-3 gap-4 px-6">
            <AutoCounter title="Years of operation" totalCount={5} timeoutInterval={400} />
            <AutoCounter title="Expert workforce" totalCount={20} hasPlus timeoutInterval={180} />
            <AutoCounter title="ventured startups" totalCount={8} timeoutInterval={250} />
            <AutoCounter title="country presence" totalCount={3} timeoutInterval={300} />
            <AutoCounter title="cloud components" totalCount={200} hasPlus timeoutInterval={30} />
            <AutoCounter title="customers served till date" totalCount={30} hasPlus timeoutInterval={200} />


          </div>
        </div>
      </div>
    </div>

  </section>
}
export default Section2;