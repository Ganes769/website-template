import Section1 from "../section1";
import image from "assets/images/Home_image_2.jpg";
import graphics from "assets/images/graphics_designing.webp";
import identify from "assets/images/identify.webp";
import marketing from "assets/images/marketing.png";
import uiux from "assets/images/uiux.webp";
import publication from "assets/images/publication.webp";
import packaging from "assets/images/packaging.jpg";
import motion from "assets/images/motion_graphics.jpg";
import Section2 from "../section2";
import Section3 from "../section3";

const GraphicsDesigning = () => {

  const options = [
    {
      id: 1,
      title: "Visual identity graphic design",
      desc: "A brand is a relationship between a business or organization and its audience. A brand identity is how the organization communicates its personality, tone and essence, as well as memories, emotions and experiences. Visual identity graphic design is exactly that: the visual elements of brand identity that act as the face of a brand to communicate those intangible qualities through images, shapes ad color.",
      image: identify,
    },
    {
      id: 2,
      title: "Marketing and advertising graphic design (OOH Advertisement) ",
      desc: "We have a multitude of out of home advertising solutions, all of which offer their own unique impact – billboards, advertising posters, walls, bus and rail media, street furniture, specialty signage, digital, mobile billboards, sports media and more – that are sure to fit your needs. ",
      image: marketing,
    },
    {
      id: 3,
      title: "User interface graphic design",
      desc: "User interface graphic design is a crucial component of creating user-friendly and visually appealing digital experiences. It involves designing the graphical elements and layout of software, websites, or applications to ensure they are intuitive, engaging, and easy to navigate. Graphic designers working on UI design focus on factors like color schemes, typography, icons, buttons, and overall visual aesthetics to enhance the user's interaction and experience. Ex. Web page design, theme design, app design, etc.",
      image: uiux,
    },
    {
      id: 4,
      title: "Publication graphic design",
      desc: "Publication graphic design is the art of crafting visually appealing and informative printed materials, such as magazines, newspapers, brochures, books, and posters. Graphic designers in this field meticulously plan the layout, typography, images, and overall aesthetics to create publications that not only capture readers' attention but also convey information effectively. Ex. Books, newspapers, magazines, catalogs, newsletters, directories, annual reports, etc.",
      image: publication,
    },
    {
      id: 5,
      title: "Packaging graphic design",
      desc: "Packaging graphic design is a specialized field focused on creating eye-catching and informative packaging for products. Graphic designers in this domain work to make a product stand out on store shelves, communicate its features and benefits, and reinforce the brand's identity. They consider factors like color, typography, imagery, and layout to ensure that the packaging not only protects the product but also entices potential customers.",
      image: packaging,
    },
    {
      id: 6,
      title: "Motion graphic design",
      desc: "Motion graphic design is a dynamic and creative field that involves the use of animation, visual effects, and graphics to convey information or tell a story in a compelling and engaging way. Graphic designers in motion graphics combine elements such as text, images, illustrations, and video footage to create visually stunning and informative videos or animations. Ex. Animated logos, trailers, promotional videos, etc.",
      image: motion,
    }

  ]

  const options2 = [
    {
      id: 1,
      title: "Graphic Designing",
      desc: "Promotional product/service design [Flyer, Leaflet, Banner, Poster]. 500 / Design.",
      image: image,
    },
  ]

  return <main>
    <Section1
      title="Graphics Designing"
      desc="Graphic design is a creative discipline that involves the art and skill of visual communication. Graphic designers use typography, images, colors, and layout techniques to convey messages, ideas, or information effectively through various mediums such as print, digital media, advertising, and branding. They work on a wide range of projects, including logos, posters, brochures, websites, and social media content."
      buttonText="Let's talk"
      buttonLink="/contact"
      image={graphics}
    />

    <Section2
      title="Count on us for designing support for your business."
      options={options}
    />

    <Section3
      title="What kind of Services are you Looking for"
      options={options2}
    />

  </main>
}

export default GraphicsDesigning