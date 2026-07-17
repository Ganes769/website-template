import Section1 from "../section1";
import image from "assets/images/Home_image_2.jpg";
import photography from "assets/images/photography.jpg";
import planning from "assets/images/planning.jpg";
import location from "assets/images/identify_location.jpg";
import editing from "assets/images/editing_photo.jpeg";
import product from "assets/images/product_shoot.webp";
import tvAds from "assets/images/tv_ads.jpg";
import Section2 from "../section2";
import Section3 from "../section3";

const Photography = () => {

  const options = [
    {
      id: 1,
      title: "Identify the subject matter and prepare the plan",
      desc: "Identifying the subject matter and preparing a plan are fundamental steps in any project or task. The subject matter refers to the core topic or focus of the endeavor, while the plan outlines the strategy and steps needed to achieve the desired outcome. Whether it's a research project, a business venture, or a creative endeavor, a clear understanding of the subject matter helps in defining objectives and scope.",
      image: planning,
    },
    {
      id: 2,
      title: "Identify the preferred location and take a shot",
      desc: "The preferred location is the chosen spot or area that aligns with specific criteria or objectives. Whether it's capturing a stunning landscape photograph or selecting a new office space for a business, the choice of location is paramount. Once the ideal location is pinpointed, taking a shot, whether with a camera or in decision-making, involves seizing the opportunity and acting swiftly and decisively.",
      image: location,
    },
    {
      id: 3,
      title: "Finally editing and submitting / uploading in required place",
      desc: "Editing involves the careful review and refinement of your work, ensuring it meets the desired quality and standards. It's the phase where you polish and fine-tune your project, correcting errors, improving clarity, and enhancing overall effectiveness. Once the editing process is complete, you're ready to submit your work, whether it's a report to your supervisor or an article for publication.",
      image: editing,
    },
    {
      id: 4,
      title: "Product shot, brand ambassador shot, model shot",
      desc: "Product shots focus on highlighting a product's features and quality, aiding customers in their purchasing decisions.Brand ambassador shots feature a well-known individual endorsing a brand to build trust and connect with the audience. Model shots showcase products in real-life contexts, demonstrating how they look when worn or used, especially in fashion and beauty marketing.",
      image: product,
    },
    {
      id: 5,
      title: "Tv commercial ad shot",
      desc: "A TV commercial ad shot is a critical component of advertising campaigns, where the visual and audio elements come together to convey a compelling message to a wide audience. These shots involve carefully choreographed scenes, precise camera work, and engaging storytelling to promote products, services, or brands effectively. TV ad shots often aim to captivate viewers within a short time frame, leaving a lasting impression that drives consumer engagement and action. ",
      image: tvAds,
    },
  ]

  const options2 = [
    {
      id: 1,
      title: "Photography",
      image: image,
      list: [
        { id: "1", content: "Post Production – Rs. 5000/- " },
        { id: "2", content: "Studio – Rs. 3500/- " },
        { id: "3", content: "Photographer – 5000/- " },
        { id: "4", content: "Light + labour – 4000/-" },
      ]
    },
    {
      id: 2,
      title: "Videography",
      image: image,
      list: [
        { id: "1", content: "Camera + Cinetography + labour + light – Rs. 15000/- " },
        { id: "2", content: "Editing – Rs. 20000/-" },
      ]
    },
  ]

  return <main>
    <Section1
      title="Photography / Videography"
      desc="Photography is the art or practice of taking and processing photographs. Videography refers to the process of capturing moving images on electronic media and even streaming media. The term includes methods of video production and post-production. Photography and Videography help you elevate your business profile. Photos and videos are necessary elements in Website, Facebook, YouTube, etc. to boost your company profile and products / services. "
      buttonText="Let's talk"
      buttonLink="/contact"
      image={photography}
    />

    <Section2
      title="Count on us for professional photography and videography."
      options={options}
    />

    <Section3
      title="What kind of Services are you Looking for"
      options={options2}
      maxColumns={2}
    />

  </main>
}

export default Photography;