import Section1 from "../section1";
// import image from "assets/images/Home_image_2.jpg";
import seo from "assets/images/seo.webp";
import onpage from "assets/images/onpageSeo.jpg";
import offpage from "assets/images/offpage.jpg";

import Section2 from "../section2";
// import Section3 from "../section3";

const SEO = () => {

  const options = [
    {
      id: 1,
      title: "On page SEO",
      desc: "Keyword Research, Keyword Selection, Metatag, Header Tag, Title Tag, Content Optimization, Use OF H1 Tag, Alt Tag, Internal Liking, Meta Description, Sitemap.xml, Robots.txt, etc. ",
      image: onpage,
    },
    {
      id: 2,
      title: "Off page SEO",
      desc: "Blog, Forum Posting, Profile Posting, Footer Links, Article Submissions, Article Marketing, social media, Sitemap, Rss Feed Submissions, Link Building, Link Exchange, Image Shearing, Info graphics, Video, link marketing, Local Listing, blog commenting, etc.",
      image: offpage,
    },
  ]

  // const options2 = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum ",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non cumque mollitia quis saepe, corporis doloribus eius commodi veritatis modi minus tempore ipsum praesentium, excepturi eum accusamus exercitationem expedita aliquam.",
  //     image: image,
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dol",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non cumque mollitia quis saepe, corporis doloribus eius commodi veritatis modi minus tempore ipsum praesentium, excepturi eum accusamus exercitationem expedita aliquam.",
  //     image: image,
  //   },
  // ]

  return <main>
    <Section1
      title="Search Engine Optimization (SEO)"
      desc="SEO involves altering website code, content and presence in order to increase rankings in search engines. It increases organic website traffic and keyword ratings. Create a new customer base and increase brand awareness."
      buttonText="Let's talk"
      buttonLink="/contact"
      image={seo}
    />

    <Section2
      title="Count on us for SEO optimization."
      options={options}
    />
    {/* 
    <Section3
      title="What kind of Services are you Looking for"
      options={options2}
      maxColumns={2}
    /> */}

  </main>
}

export default SEO;