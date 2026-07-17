import Section1 from "../section1";
import image from "assets/images/Home_image_2.jpg";
import email from "assets/images/email_marketing.webp";
import list from "assets/images/list_numbers.jpg";
import prepEmail from "assets/images/prep_email.webp";
import Section2 from "../section2";
import Section3 from "../section3";

const EmailMarketing = () => {

  const options = [
    {
      id: 1,
      title: "List Emails of customers",
      desc: "Collecting and maintaining a list of customers' email addresses is a fundamental aspect of modern marketing and communication. This practice allows businesses to reach out to their audience with updates, promotions, and valuable content. However, it's crucial to emphasize the importance of obtaining explicit consent from customers to add them to such lists, ensuring compliance with privacy regulations.",
      image: list,
    },
    {
      id: 2,
      title: "Preparing email template ",
      desc: "Preparing an email template involves crafting a standardized, reusable email design and content structure for various purposes, such as newsletters, marketing campaigns, or customer communications. Key steps include selecting an appealing layout, incorporating branding elements like logos and color schemes, and optimizing for mobile responsiveness.",
      image: prepEmail,
    },
  ]

  const options2 = [
    {
      id: 1,
      title: "Email Marketing ",
      desc: "Effective email marketing campaigns nurture customer relationships, drive sales, and help organizations stay connected with their audience in a personalized and efficient way.",
      list: [
        { id: "1", content: "4 templates per month - 4000 per month" }
      ],
      image: image,
    },
  ]

  return <main>
    <Section1
      title="Email Marketing"
      desc="Email Marketing helps you reach out to your current and potential customers and keep them updated on your company’s latest deals and news. A personalized, segmented, and targeted email marketing campaign is important for brand awareness and drive conversions. Our experts use tools, strategy, implementation, and result tracking in order to achieve the best brand engagement. We can take care of your complete email marketing strategy from template to tracking and reporting."
      buttonText="Let's talk"
      buttonLink="/contact"
      image={email}
    />

    <Section2
      title="Count on us for marketing through Emails."
      options={options}
    />

    <Section3
      title="What kind of Services are you Looking for"
      options={options2}
      maxColumns={3}
    />

  </main>
}

export default EmailMarketing;