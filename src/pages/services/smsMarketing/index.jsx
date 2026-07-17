import Section1 from "../section1";
import image from "assets/images/Home_image_2.jpg";
import smsMarketing from "assets/images/sms_amrketing.jpg";
import bulksms from "assets/images/bulk_sms.svg";
import reachComms from "assets/images/reach_and_comms.jpg";
import smsContent from "assets/images/sms_content.webp";
import list from "assets/images/list_numbers.jpg";
import Section2 from "../section2";
import Section3 from "../section3";

const SmsMarketing = () => {

  const options = [
    {
      id: 1,
      title: "Send Bulk SMS to a group ",
      desc: "Sending bulk SMS to a group is a convenient and efficient way to communicate with a large number of recipients simultaneously. Whether it's for business announcements, event invitations, or personal messages, bulk SMS services allow you to compose a single message and distribute it to multiple contacts at once. This method not only saves time but also ensures that your message reaches your intended audience promptly. ",
      image: bulksms,
    },
    {
      id: 2,
      title: "Reach and communicate",
      desc: "Reaching out and effectively communicating are fundamental aspects of human interaction. Whether in personal relationships, professional endeavors, or broader social contexts, the ability to connect with others is essential. It involves not only conveying thoughts, ideas, and emotions clearly but also listening attentively to understand and empathize with the perspectives of those we engage with.",
      image: reachComms,
    },
    {
      id: 3,
      title: "Preparing the contents of SMS ",
      desc: "Preparing the contents of an SMS (Short Message Service) is a skill that involves condensing information into a concise and impactful message. Given the character limit typically imposed on SMS, brevity and clarity are key. It's important to start with a clear purpose and a specific message in mind. Begin with a greeting if appropriate, followed by the main message content.",
      image: smsContent,
    },
    {
      id: 4,
      title: "Listing out the customers’ phone number",
      desc: "Before attempting to list such information, it is crucial to ensure you have proper consent or a legitimate reason to do so, such as for business purposes like customer communication or support. If you have obtained the necessary permissions, take measures to protect this data from unauthorized access or breaches, such as using secure storage methods and encryption.",
      image: list,
    },
  ]

  const options2 = [
    {
      id: 1,
      title: "SMS Marketing ",
      desc: " SMS marketing's success lies in its simplicity, making it a valuable tool for businesses seeking to engage their audience and drive results.",
      list: [{ id: "1", content: "[1 sms : 132 words] Rs. 2.5 / 1 sms" }],
      image: image,
    },
  ]

  return <main>
    <Section1
      title="SMS Marketing"
      desc="Web-based SMS application is used for both sending and receiving mass SMS which supports delivery to all the major operators like NT (Nepal Telecom), Ncell, and Smart Tel. "
      buttonText="Let's talk"
      buttonLink="/contact"
      image={smsMarketing}
    />

    <Section2
      title="Count on us for marketing through SMS."
      options={options}
    />

    <Section3
      title="What kind of Services are you Looking for"
      options={options2}
      maxColumns={2}
    />

  </main>
}

export default SmsMarketing;