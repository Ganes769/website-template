import Section1 from "../section1";
import image from "assets/images/Home_image_2.jpg";
import social from "assets/images/social_marketing.png";
import setupAccount from "assets/images/setup_account.jpg";
import publication from "assets/images/publication.webp";
import graphics from "assets/images/graphics_designing.jpg";
import smsContent from "assets/images/sms_content.webp";
import partner from "assets/images/partner.jpg";
import identify from "assets/images/identify.webp";
import location from "assets/images/identify_location.jpg";
import Section2 from "../section2";
import Section3 from "../section3";

const SocialMediaMarketing = () => {

  const options = [
    {
      id: 1,
      title: "Setting up account ",
      desc: "Setting up a social media account involves several essential steps. First, choose the right platform(s) based on your goals and target audience. Then, create an account by providing accurate information, including a profile picture and a concise bio that reflects your brand or personality. Customize your profile with relevant details and settings, and establish a posting schedule to maintain consistency.",
      image: setupAccount,
    },
    {
      id: 2,
      title: "Posting posts",
      desc: "Posting posts on social media is a fundamental aspect of maintaining an active and engaging online presence. Start by creating compelling and relevant content that resonates with your audience and aligns with your brand or objectives. Consider using visuals like images or videos to enhance the impact of your posts.",
      image: publication,
    },
    {
      id: 3,
      title: "Boosting the news feed",
      desc: "Boosting the news feed refers to the practice of using paid advertising on social media platforms to increase the visibility and reach of specific posts or content. This process involves selecting a particular post you want to promote, defining your target audience based on demographics, interests, and behavior, and allocating a budget for the campaign. ",
      image: graphics,
    },
    {
      id: 4,
      title: "Posting about upcoming events",
      desc: "Posting about upcoming events is a vital part of event promotion on social media. To effectively generate interest and engagement, create visually appealing posts that include event details such as date, time, location, and a brief description. Use relevant hashtags to increase the post's discoverability and consider running paid advertisements if the event is significant.",
      image: smsContent,
    },
    {
      id: 5,
      title: "Monthly strategies/campaign ",
      desc: "Implementing monthly strategies or campaigns is an effective way to maintain a dynamic and engaging online presence. Start by setting clear objectives for the month, whether it's increasing brand awareness, boosting sales, or enhancing customer engagement.",
      image: partner,
    },
    {
      id: 6,
      title: "Monitoring and replying to customers",
      desc: "Monitoring and replying to customers is a critical aspect of customer service and engagement. It involves regularly checking various communication channels such as social media, email, chat, or phone for customer inquiries, comments, and feedback. Timely responses are essential to show customers that their concerns are valued.",
      image: identify,
    },
    {
      id: 7,
      title: "Research about the related industries",
      desc: "Researching related industries is a crucial step in understanding the broader market landscape and identifying potential opportunities or threats. Start by conducting comprehensive market research, including studying industry reports, market trends, and competitor analysis. Explore factors such as market size, growth rate, key players, and emerging technologies.",
      image: location,
    },
    {
      id: 8,
      title: "Covering and posting offline activities ",
      desc: "Covering and posting about offline activities is a great way to engage your online audience and bridge the gap between your physical and digital presence. Start by documenting your offline events or activities through photos, videos, or live streams, showcasing key moments, highlights, and behind-the-scenes content. ",
      image: smsContent,
    },

  ]

  const options2 = [
    {
      id: 1,
      title: "PACKAGE I",
      desc: "Rs. 12,000/- (Monthly)",
      list: [
        { id: "1", content: "Facebook / Instagram Page Management 2 post per week. " },
        { id: "2", content: "Email Marketing once per week " },
        { id: "3", content: "10 Graphic Designs " },
        { id: "4", content: "1 product/service photo-shoot " },

      ],
      image: image,
    },
    {
      id: 2,
      title: "PACKAGE II",
      desc: "Rs. 18,000/- (Monthly)",
      list: [
        { id: "1", content: "Facebook / Instagram Page Management (2-4) post per week. " },
        { id: "2", content: "Email Marketing once per week " },
        { id: "3", content: "12 Graphic Designs " },
        { id: "4", content: "2 products/services photo-shoot " },

      ],
      image: image,
    },
    {
      id: 2,
      title: "PACKAGE III",
      desc: "Rs. 20,000/- (Monthly) ",
      list: [
        { id: "1", content: "Facebook / Instagram Page Management (2-4) post per week. " },
        { id: "2", content: "Email Marketing once per week " },
        { id: "3", content: "15 Graphic Designs " },
        { id: "4", content: "4 products/services photo-shoot " },
        { id: "5", content: "40$ Facebook Page / Post Boost" },
      ],
      image: image,
    },
  ]

  return <main>
    <Section1
      title="Social Media Marketing"
      desc="More than 3 billion are active users and most of these people log in several times per day and spend a lot of time on the network. For someone planning to advertise on social media platforms, the situation couldn’t be better. Placing ads alone does not guarantee results. Constant monitoring is required. This is where Merin entertainment comes in. Merin entertainment guides businesses through the types of ads that can be placed and suggests appropriate types of ad. social networking sites have given the option to target the selected audience. Moreover, the performance of the ad can be measured. These require special attention and understanding of the market, which is the specialty of this agency."
      buttonText="Let's talk"
      buttonLink="/contact"
      image={social}
    />

    <Section2
      title="Count on us for marketing through social Media platforms."
      options={options}
    />

    <Section3
      title="Our Packages"
      options={options2}
    // maxColumns={2}
    />

  </main>
}

export default SocialMediaMarketing;