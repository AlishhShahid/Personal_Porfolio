import Heading from "./Heading";
import Card from "./Card";

const data = [
  {
    id: 0,
    title: "Resume",
    desc: "Here is My Resume",
    img: "/resume01.jpg",
    tags: ["HTML", "CSS", "Typescript"],
    link: "https://hackathon-milestones-1-2.vercel.app/",
  },
  {
    id: 1,
    title: "Resume Builder",
    desc: "Here is Shareable Resume Builder",
    img: "/resume02.jpg",
    tags: ["HTML", "CSS", "Typescript"],
    link: "https://hackathon-milestone-05-five.vercel.app/",
  },
  {
    id: 2,
    title: "Dynamic Routes",
    desc: "Dynamic Routes using Components",
    img: "/country.jpg",
    tags: ["Next.js", "Dynamic Routing"],
    link: "https://assignment-02-dynamic-routes-using-component.vercel.app/",
  },
  {
    id: 3,
    title: "Figma Design",
    desc: "Figma Design implementation",
    img: "/figma.jpg",
    tags: ["HTML", "CSS", "Next.js"],
    link: "https://assignment-04-figma-design.vercel.app/",
  },
];

function Projects() {
  return (
    <div className="container pt-32 px-4">
      <Heading title="My Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            link={el.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
