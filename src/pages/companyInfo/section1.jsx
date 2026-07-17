import { aosTextAnimation } from "utils/constants";

const Section1 = () => {
  return <section className="mb-16 py-16 bg-gray-50">

    <div className="max-width-container px-4">
      <p className="uppercase text-blue-600 font-semibold">About Us</p>
      <h2 className="laptop:text-6xl mobile:text-5xl font-semibold mb-10" {...aosTextAnimation()}>Fueling technological innovation and building an ecosystem of cloud based business solutions to power <span className="text-blue-800">Digital Transformation</span>
      </h2>

    </div>

  </section>
}
export default Section1;