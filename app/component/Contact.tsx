import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

function Contact() {
  return (
    <>
      <div className="pt-32 container">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <h2 className="text-5xl" data-aos="zoom-in-up">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-[18px] pt-2" data-aos="zoom-in-up">
              Got a question or project? Feel free to message, call, or reach
              out via the contact form to get in touch.
            </p>

            <div className="flex gap-3 items-center" data-aos="zoom-in-up">
              <MdOutlineMail className="text-cyan-500" size={30} />{" "}
              alishbashahidzaheer14@gmail.com
            </div>

            <div className="flex gap-3 items-center" data-aos="zoom-in-up">
              <BsTelephone className="text-cyan-500" size={30} /> +92 (331)
              3254473
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col gap-1" data-aos="zoom-in-up">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="h-[40px] bg-transparent border border-cyan-500"
                id="name"
              />
            </div>

            <div className="flex flex-col gap-1" data-aos="zoom-in-up">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="h-[40px] bg-transparent border border-cyan-500"
                id="email"
              />
            </div>

            <div className="flex flex-col gap-1" data-aos="zoom-in-up">
              <label htmlFor="msg">Message</label>
              <textarea
                className="bg-transparent border border-cyan-500"
                id="msg"
                rows={8}
              />
            </div>
            <button
              className="bg-cyan-500 p-2 px-6 hover:bg-cyan-600 transition-colors duration-300"
              data-aos="zoom-in-up">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
