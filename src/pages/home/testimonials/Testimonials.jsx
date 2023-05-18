import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="bg-[#EEDFE4] py-16 lg:py-32 px-2">
      <div className="text-neutral-700 dark:text-neutral-300 container mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold font-edu-baloo text-edu-primary capitalize ">
            Our Customer Loves
          </h2>
          <div className="h-1 lg:h-2 w-48 bg-edu-secondary mx-auto my-4"></div>
          <p className="text-black">
            Our Customer Loves us. you can see what our customers say with our
            services.
          </p>
        </div>
        {/*First Testimonial*/}
        <div className="grid gap-6 text-center md:grid-cols-3">
          <div>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-edu-secondary" />
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                <hr />
                <p className="my-4">
                  <FaQuoteLeft className="mx-auto" />
                  <span className="my-2 inline-block">
                    Lorem ipsum dolor sit amet eos adipisci, consectetur
                    adipisicing elit.
                  </span>
                  <FaQuoteRight className="mx-auto" />
                </p>
                <div className="flex justify-center items-center gap-2 mt-4 text-edu-yellow">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsStarHalf />
                </div>
              </div>
            </div>
          </div>
          {/*Second Testimonial*/}
          <div>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-edu-secondary" />
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                <hr />
                <p className="my-4">
                  <FaQuoteLeft className="mx-auto" />
                  <span className="my-2 inline-block">
                    Lorem ipsum dolor sit amet eos adipisci, consectetur
                    adipisicing elit.
                  </span>
                  <FaQuoteRight className="mx-auto" />
                </p>
                <div className="flex justify-center items-center gap-2 mt-4 text-edu-yellow">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsStarHalf />
                </div>
              </div>
            </div>
          </div>
          {/*Third Testimonial*/}
          <div>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-edu-secondary" />
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                <hr />
                <p className="my-4">
                  <FaQuoteLeft className="mx-auto" />
                  <span className="my-2 inline-block">
                    Lorem ipsum dolor sit amet eos adipisci, consectetur
                    adipisicing elit.
                  </span>
                  <FaQuoteRight className="mx-auto" />
                </p>
                <div className="flex justify-center items-center gap-2 mt-4 text-edu-yellow">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsStarHalf />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
