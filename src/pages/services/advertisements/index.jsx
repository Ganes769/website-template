import Section1 from "../section1";
import image from "assets/images/Home_image_2.jpg";
import identify from "assets/images/identify.webp";
import account from "assets/images/setup_account.jpg";
import upload from "assets/images/upload.webp";
import comms from "assets/images/reach_and_comms.jpg";
import partner from "assets/images/partner.jpg";
import planning from "assets/images/planning.jpg";
import Section2 from "../section2";
import Section3 from "../section3";

const Advertisements = () => {

  const options = [
    {
      id: 1,
      title: "Setting up Account (if needed)",
      desc: "Depending on the specific context, this may involve providing essential information such as name, email address, username, and password, followed by a verification process to confirm identity and security. Once the account is established, users can customize settings, preferences, and profiles as per their requirements. Account setup is often required for services like email accounts, social media platforms, e-commerce websites, and more, enabling users to access and utilize these platforms efficiently and securely.",
      image: account,
    },
    {
      id: 2,
      title: "Posting posts / uploading videos ",
      desc: "It involves creating and sharing content with an online audience. To post effectively, start by creating engaging and relevant content, whether it's a text-based post, image, or video. Ensure that your content aligns with your objectives and target audience. Use appropriate captions, hashtags, and descriptions to make your content discoverable. For videos, optimize them for quality and engagement, considering factors like resolution, length, and format. ",
      image: upload,
    },
    {
      id: 3,
      title: "Growing a larger audience ",
      desc: "Growing a larger audience is a dynamic process that involves crafting valuable and consistent content, understanding your target audience, and leveraging various channels effectively. Engaging with your audience through social media, collaborations, and strategic advertising can help expand your reach.",
      image: comms,
    },
    {
      id: 4,
      title: "Encouraging engagement ",
      desc: "Encouraging engagement is vital for building a vibrant online community and fostering meaningful interactions with your audience. To stimulate engagement, create content that resonates with your target audience's interests and needs. Pose questions, ask for opinions, and encourage users to share their thoughts and experiences.",
      image: partner,
    },
    {
      id: 5,
      title: "Measuring growth of the Brand",
      desc: "Measuring the growth of a brand is essential to gauge its performance and impact. It involves tracking key metrics like brand awareness, audience growth, and engagement levels. By monitoring these indicators, businesses can assess the effectiveness of their marketing strategies and adapt their approach accordingly. ",
      image: planning,
    },
  ]

  const options2 = [
    {
      id: 1,
      title: "Google Ads",
      list: [
        { id: "1", content: "20$" }
      ],
      image: image,
    },
    {
      id: 2,
      title: "Facebook Video Ads",
      list: [
        { id: "1", content: "100$" }
      ],
      image: image,
    },
    {
      id: 3,
      title: "Facebook/ Instagram Post Boost",
      list: [
        { id: "1", content: "150$" }
      ],
      image: image,
    },
  ]

  return <main>
    <Section1
      title="Advertisements / Post Boosts"
      desc="Video ads appear before or in between other videos on Facebook YouTube, besides playing videos and in search results. Video Ads / Post Boost increases brand loyalty and acts as a customer service tool. It pushes people to your website. Inform customers about new products or features. Create shareable, possibly viral content. Facebook / YouTube have built-in analytics that make it easy to see how your ad performs. You can also adjust your ad at any time and run multiple ads at once which works best. "
      buttonText="Let's talk"
      buttonLink="/contact"
      image={identify}
    />

    <Section2
      title="Count on us for Ads and boosting."
      options={options}
    />

    <Section3
      title="What kind of Services are you Looking for"
      options={options2}
    />

  </main>
}

export default Advertisements;