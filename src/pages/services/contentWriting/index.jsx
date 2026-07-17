import Section1 from "../section1";
import image from "assets/images/Home_image_2.jpg";
import contentWriting from "assets/images/content_writing.webp";
// import Section2 from "../section2";
import Section3 from "../section3";

const ContentWriting = () => {

  // const options = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non cumque mollitia quis saepe, corporis doloribus eius commodi veritatis modi minus tempore ipsum praesentium, excepturi eum accusamus exercitationem expedita aliquam.",
  //     image: image,
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non cumque mollitia quis saepe, corporis doloribus eius commodi veritatis modi minus tempore ipsum praesentium, excepturi eum accusamus exercitationem expedita aliquam.",
  //     image: image,
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non cumque mollitia quis saepe, corporis doloribus eius commodi veritatis modi minus tempore ipsum praesentium, excepturi eum accusamus exercitationem expedita aliquam.",
  //     image: image,
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non cumque mollitia quis saepe, corporis doloribus eius commodi veritatis modi minus tempore ipsum praesentium, excepturi eum accusamus exercitationem expedita aliquam.",
  //     image: image,
  //   },
  //   {
  //     id: 5,
  //     title: "Lorem ipsum",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non cumque mollitia quis saepe, corporis doloribus eius commodi veritatis modi minus tempore ipsum praesentium, excepturi eum accusamus exercitationem expedita aliquam.",
  //     image: image,
  //   },
  //   {
  //     id: 6,
  //     title: "Lorem ipsum",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non cumque mollitia quis saepe, corporis doloribus eius commodi veritatis modi minus tempore ipsum praesentium, excepturi eum accusamus exercitationem expedita aliquam.",
  //     image: image,
  //   }

  // ]

  const options2 = [
    {
      id: 1,
      title: "Blogging (Content Writing)",
      desc: "It involves creating content that is informative, engaging, and relevant to the target audience. Effective content writing requires a deep understanding of the subject matter, audience demographics, and the goals of the content. Key aspects of content writing include clear and concise language, proper grammar and punctuation, a compelling tone, and a well-structured format.",
      list: [
        { id: "1", content: "3 articles per week - 6000/ month" }
      ],
      image: image,
    },
  ]

  return <main>
    <Section1
      title="Content Writing"
      desc="Websites have turned from the stage of popularity to the stage of necessity. Most of the population in the present generation depends on the internet to get their products and services, anywhere and anytime. The Internet has become their favorite marketplace to find their favorite shops, blogs, and source of trusted information. So, it is a must for every website owner to keep their websites attractive and informative at same time. Good content on a website are the paths to gain more traffic. Content writing is one of the most effective and easiest methods to keep your website informative and updated than any other online tools."
      buttonText="Let's talk"
      buttonLink="/contact"
      image={contentWriting}
    />

    {/* <Section2
      title="Count on us for marketing through SMS."
      options={options}
    /> */}

    <Section3
      title="What kind of Services are you Looking for"
      options={options2}
      maxColumns={2}
    />

  </main>
}

export default ContentWriting;