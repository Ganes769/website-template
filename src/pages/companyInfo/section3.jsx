import logo from "assets/images/Merinlogo.jpg";
import { aosDivAnimation, aosTextAnimation } from "utils/constants";

const Section3 = () => {
  return <section className="mb-16 py-16">

    <div className="max-width-container px-4">
      <h2 className="h2 max-w-[900px] laptop:text-6xl mobile:text-5xl font-semibold leading-normal mb-10" {...aosTextAnimation()}>Introduction
      </h2>

      <div className="flex mobile:flex-col laptop:flex-row">
        <div className="flex-1">
          <p className="p mb-3" {...aosTextAnimation(100)}>Merin entertainment Pvt. Ltd different services are running successfully from its office located at Basuki marg, Mid-baneshwor, Kathmandu some of which are Marketing solution, Event Organizing, Brand Promotion, Multimedia production, Digital marketing, IT solution and soon.</p>

          <p className="p mb-3" {...aosTextAnimation(200)}>Our key areas of operation include: </p>

          <p className="p mb-2" {...aosTextAnimation(300)}><strong>Building smarter business solutions:</strong> With the perfect blend of technical consulting and carefully designed cloud based business solutions, we help companies transform their business to a digital platform. Using AI (Artificial Intelligence) and BI (Business Intelligence), we try to solve complex business problems with simple to use solutions. </p>

          <p className="p mb-2" {...aosTextAnimation(400)}>
            <strong>Educating local resources:</strong> Young and innovative minds are the need of the current hour. However, the cost of technology alone of products and education forbids young entrepreneurs to acquaint with the latest developments. MerinTech recognizes the void in the tech distribution process, and thus encourages young innovators, and creators to pursue technology as a career.
          </p>

          <p className="p mb-2" {...aosTextAnimation(500)}>
            <strong>Making technology accessible:</strong> MerinTech focuses on making technology easily available for businesses. As a responsible social enterprise, we have devised an ecosystem catered towards uplifting the business operations of local communities, SMEs, and Startups with access to modern technology.
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center laptop:px-10">
          <img src={logo} alt="logo" className="mb-8" {...aosDivAnimation(300)} />
          <div className="border-solid border-blue-200 border-[1px] shadow-xl p-10 rounded-lg" {...aosDivAnimation(500)}>
            <h4 className="text-blue-600 text-xl mb-3 font-semibold">OUR MISSION</h4>
            <p className="p font-semibold text-lg">
              Merin Entertainment has its goal of being one of the leading companies in Nepal within a year of its establishment. As the people’s attraction and need towards new technology and Brand Promotion and awareness is flourishing, Merin Entertainment is making its mind and being prepared to grab this opportunity to achieve its target. |
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
}
export default Section3;