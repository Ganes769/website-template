import { Link } from "react-router-dom";
import { aosDivAnimation, aosTextAnimation } from "utils/constants";

const Section6 = () => {

  const data = [
    {
      id: "1",
      title: "IT consulting",
      description: "IT consulting is a dynamic and essential field that plays a pivotal role in helping organizations leverage technology to achieve their business objectives. IT consultants are trusted advisors who collaborate with clients to identify their unique challenges and opportunities, offering expert guidance on selecting, implementing, and optimizing IT solutions.",
      link: "/startup-support",
    },
    {
      id: "2",
      title: "Startup Support",
      description: "Startup support is a vital ecosystem that provides aspiring entrepreneurs with the resources and guidance they need to transform their innovative ideas into successful businesses. This ecosystem encompasses a variety of services, including mentorship, funding assistance, co-working spaces, and networking opportunities. ",
      link: "/startup-support",
    },
    {
      id: "3",
      title: "Business Incubation and Acceleration",
      description: "Business incubators and accelerators are organizations that provide comprehensive support to startups, typically in the form of mentorship, resources, and physical spaces. They play a vital role in helping early-stage companies overcome challenges, refine their business strategies, and accelerate their growth.",
      link: "/startup-support",
    },
  ]


  return <section style={{
    backgroundImage: `url(${require("assets/images/peopleoworking.jpg")})`
  }} className='bg-no-repeat bg-cover backdrop-blur-lg mb-16 bg-fixed'>
    <div className="h-full mb-16 px-4 pt-16 pb-16 bg-white bg-opacity-70">
      <div className="flex flex-col items-center max-width-container">
        <h3 className='text-5xl font-bold mb-4 mobile:text-center laptop:text-left' {...aosTextAnimation()}>Startup Support Program</h3>

        <p className='text-lg text-center mb-12' {...aosTextAnimation(100)}>We assists aspiring startups to help introduce their projects among users. By associating with us, you too can nurture your ideas and bring them to life. We provide expert technical help, market insights, and access to investors.</p>

        <div className='grid mobile:grid-cols-1 laptop:grid-cols-3 gap-8'>
          {data.map(el => <div key={el.id} className='px-10 py-6 rounded-lg bg-white shadow-xl' {...aosDivAnimation((+el.id * 100) + 100)}>
            <h4 className='text-xl font-semibold mb-2 text-blue-600'>{el.title}</h4>
            <p className='text-lg mb-4'>{el.description}</p>
            <Link to={el.link}>
              <button className="hover:bg-blue-600 hover:text-white border-solid border-[1px] border-blue-600 rounded-md px-4 py-1 text-blue-600 text-lg">
                Learn more
              </button>
            </Link>
          </div>)}
        </div>
      </div>
    </div>

  </section>
}

export default Section6;