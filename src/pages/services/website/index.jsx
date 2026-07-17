import Section1 from "../section1";
import image from "assets/images/Home_image_2.jpg";
import webDev from "assets/images/web_dev.jpg";
import listContacts from "assets/images/list_numbers.jpg";
import contact from "assets/images/conatct_form.webp";
import location from "assets/images/identify_location.jpg";
import seo from "assets/images/seo.webp";
import carousel from "assets/images/carousel.jpg";
import social from "assets/images/social_marketing.png";
import comms from "assets/images/reach_and_comms.jpg";
import sms from "assets/images/sms_content.webp";
import Section2 from "../section2";
import Section3 from "../section3";

const Website = () => {

  const options = [
    {
      id: 1,
      title: "Mobile Responsive Layout ",
      desc: "A mobile-responsive layout is a design approach that ensures websites and applications adapt effortlessly to different screen sizes and devices. It prioritizes user experience by optimizing content and navigation for mobile users, allowing information to be easily accessible and readable on smartphones and tablets. ",
      image: listContacts,
    },
    {
      id: 2,
      title: "SEO Friendly",
      desc: "'SEO-friendly' refers to a website or content that is designed and optimized to rank well in search engine results pages (SERPs). It involves various strategies and best practices, such as using relevant keywords, creating high-quality content, optimizing page titles and meta descriptions, improving website speed and performance, ensuring mobile responsiveness, and building high-quality backlinks.",
      image: seo,
    },
    {
      id: 3,
      title: "Contact Form",
      desc: "A contact form is an essential web element used on websites to facilitate communication between website visitors and the site owner or organization. It typically includes fields for the user to input their name, email address, subject, and message. The purpose of a contact form is to simplify the process of reaching out, making it more convenient than traditional email addresses.",
      image: contact,
    },
    {
      id: 4,
      title: "Google Map",
      desc: "Google Map integration involves incorporating Google Maps into a website or application to provide location-based services and enhance user experiences. This integration allows users to view maps, get directions, and explore nearby places directly within the platform. It can be valuable for businesses, organizations, or services with physical locations, as it helps users find them easily.",
      image: location,
    },
    {
      id: 5,
      title: "Image Slider",
      desc: "An image slider UI, also known as a carousel or image slider, is a user interface element commonly used in web design and applications to display a series of images or content items in a visually appealing and interactive way. Image sliders are often used to showcase featured products, highlight key messages, or provide visual storytelling on a website or app.",
      image: carousel,
    },
    {
      id: 6,
      title: "Social Media Integration",
      desc: "Social media integration is the process of seamlessly incorporating social media elements and functionalities into digital platforms like websites and applications. It enables users to interact with, share, and stay connected to social networks directly from the platform, fostering engagement, expanding reach, and enhancing the overall user experience.",
      image: social,
    },
    {
      id: 7,
      title: "Free Domain & Hosting for 1 year",
      desc: " It includes a complimentary domain registration (website address) and web hosting services (server space to host your website) for a 12-month period. While this can be a cost-effective way for individuals or businesses to establish an online presence, it's important to review the terms and conditions of such offers, as some providers may require a commitment or charge fees after the initial free period.",
      image: comms,
    },
    {
      id: 8,
      title: "1 year Tech Support",
      desc: "This support can encompass various forms of assistance, including phone, email, chat, or even in-person support, depending on the provider and the nature of the product or service. It's a valuable offering for customers, ensuring they have access to help, troubleshooting, and expertise for a specified period, enhancing their overall experience and peace of mind.",
      image: sms,
    },

  ]

  const options2 = [
    {
      id: 1,
      title: "Informational Website",
      list: [
        { id: "1", content: "4k per layout (page) (Wordpress)" },
        { id: "2", content: "6k per layout (page) (Laravel)" },
      ],
      image: image,
    },
    {
      id: 2,
      title: "News Portal",
      list: [
        { id: "1", content: "5k per layout (page) (Wordpress)" },
        { id: "2", content: "8k per layout (page) (Laravel)" },
      ],
      image: image,
    },
    {
      id: 3,
      title: "Travel Portal",
      list: [
        { id: "1", content: "6k per layout (page) (Wordpress)" },
        { id: "2", content: "10k per layout (page) (Laravel)" },
      ],
      image: image,
    },
    {
      id: 4,
      title: "E-commerce Website",
      list: [
        { id: "1", content: "6k per layout (page) (Wordpress)" },
        { id: "2", content: "10k per layout (page) (Laravel)" },
        { id: "3", content: "6k per layout (page) (OpenCart)" },
      ],
      image: image,
    },
    {
      id: 5,
      title: "Custom Development",
      list: [
        { id: "1", content: "8k per layout (page) (Wordpress)" },
        { id: "2", content: "12k per layout (page) (Laravel)" },
        { id: "3", content: "8k per layout (page) (OpenCart)" },
      ],
      image: image,
    },
  ]

  return <main>
    <Section1
      title="Website Design and Development"
      desc="Living in the digital world, a website is now a necessity for a business, big or small. If you have a business and don’t have a website, you are probably losing a number of great opportunities for your business. A website itself can be used to accomplish many different marketing strategies to help your business grow. The web has a far wider reach than any other form of advertising. While it takes time to build up enough traffic to your website to make a worthwhile impact on your company`s marketing campaign, it costs next to nothing to do so. Your website will be the center of your company`s online presence."
      buttonText="Let's talk"
      buttonLink="/contact"
      image={webDev}
    />

    <Section2
      title="Count on us for website services."
      options={options}
    />

    <Section3
      title="Our packages"
      options={options2}
    />

  </main>
}

export default Website;