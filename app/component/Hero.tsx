function Hero() {
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto h-full grid grid-cols-1 lg:grid-cols-2">
        <div
          className="h-[400px] sm:h-[600px] lg:h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/me.jpg')" }}
        ></div>

        <div className="flex justify-center items-center p-8 lg:p-16 text-center lg:text-left">
          <div>
            <p
              data-aos="zoom-in-up"
              className="text-[50px] sm:text-[70px] lg:text-[100px] font-bold leading-tight mb-4 sm:mb-6 lg:mb-8"
            >
              I&apos;m
            </p>
            <p
              data-aos="zoom-in-up"
              className="text-[50px] sm:text-[70px] lg:text-[100px] font-bold leading-tight mb-4 sm:mb-6 lg:mb-8"
            >
              Alishba
            </p>
            <p
              data-aos="zoom-in-up"
              className="text-[50px] sm:text-[70px] lg:text-[100px] font-bold leading-tight"
            >
              Shahid
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
