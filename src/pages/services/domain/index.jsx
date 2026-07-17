import Section1 from "../section1";
import image from "assets/images/Home_image_2.jpg";
import domainReg from "assets/images/domain_reg.webp";
import pointDomain from "assets/images/point_domain.webp";
import Section2 from "../section2";
import Section3 from "../section3";

const Domain = () => {

  const options = [
    {
      id: 1,
      title: "Register the domain name ",
      desc: "Domain registration is the process of securing a unique website address on the internet, known as a domain name. It involves choosing a relevant and memorable name, checking its availability, and registering it through a domain registrar. This registration typically comes with an annual fee, allowing individuals, businesses, and organizations to establish their online presence and create websites accessible to internet users worldwide.",
      image: domainReg,
    },
    {
      id: 2,
      title: "Point the domain to the hosting account",
      desc: "This process involves configuring the domain's DNS (Domain Name System) settings to connect it with the hosting server where the website's files and data are stored. To achieve this, you typically need to access your domain registrar's control panel and update the DNS records to include the nameservers provided by your hosting provider. This action tells the internet where to find your website's content when someone enters your domain name into a web browser.",
      image: pointDomain,
    },
  ]

  const options2 = [
    {
      id: 1,
      title: "Domain Registration",
      desc: "[.com, .net, .info]",
      list: [
        { id: "1", content: "Rs. 1430." }
      ],
      image: image,
    },
    {
      id: 2,
      title: "Web Hosting",
      // desc: "Rs 2000 with the money will determine full of interest. Rs 3000 the money with full like wish of edition.",
      list: [
        { id: "1", content: "Starting Package – 100mb for only Rs. 1000/- " },
        { id: "2", content: "1 GB - 3000/ year " },
        { id: "3", content: "5 GB - 7000/ year" },
      ],
      image: image,
    },
  ]

  return <main>
    <Section1
      title="Domain Registration and Web Hosting "
      desc="We help you choose meaningful Domain name for your company’s website and register it. Register your domain in .com, .net, .org, website, etc. We also provide you with different packages for getting your own space on the server."
      buttonText="Let's talk"
      buttonLink="/conatct"
      image={domainReg}
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

export default Domain;