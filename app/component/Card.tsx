import Image from "next/image";

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  link: string;
}

function Card({ title, desc, img, tags, link }: propsType) {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {" "}
        <div
          className="border border-grey-accent w-full max-w-[90%] sm:max-w-[350px] mx-auto"
          data-aos="zoom-in-up"
        >
          <div>
            <Image
              className="w-full h-auto"
              src={img}
              width={350}
              height={350}
              alt={title}
            />
          </div>
          <div className="p-4 space-y-4 text-center">
            <div className="text-2xl sm:text-3xl font-extralight">{title}</div>
            <div className="text-sm sm:text-base text-gray-700">{desc}</div>
            <div className="flex flex-wrap gap-2 justify-center">
              {tags.map((el) => (
                <span
                  className="px-3 py-1 bg-cyan-500 text-white text-xs sm:text-sm rounded-full"
                  key={el}
                >
                  {el}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
