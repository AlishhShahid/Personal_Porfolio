function Skills() {
  return (
    <>
      <div className="container pt-16 md:pt-32 px-4">
        <div
          className="grid gap-10 md:grid-cols-2 md:gap-20 items-center"
          data-aos="zoom-in-up"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              Technologies I Work With
            </h2>
            <p className="text-gray-500 pt-2 text-base sm:text-lg md:text-xl">
              I am learning front-end development with React and Next.js, and
              using TypeScript and Tailwind CSS. My goal is to create responsive
              and user-friendly web applications.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 text-cyan-500 text-2xl sm:text-3xl md:text-4xl">
              <div className="space-y-2">
                <h2 data-aos="zoom-in-up">HTML</h2>
                <h2 data-aos="zoom-in-up">CSS</h2>
              </div>
              <div className="space-y-2">
                <h2 data-aos="zoom-in-up">Typescript</h2>
                <h2 data-aos="zoom-in-up">Next.js</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
