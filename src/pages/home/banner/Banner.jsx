import { Player } from "@lottiefiles/react-lottie-player";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-edu-primary pb-10 lg:py-6">
      <div className=" flex justify-center items-center gap-4 p-4 flex-col lg:flex-row-reverse container w-full">
        <div className="-z-0">
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_Mr2XfXxSpQ.json"
            className="lg:h-[800px] lg:w-[800px]"
          ></Player>
        </div>
        <div data-aos="fade-right" data-aos-delay="800">
          <h1 className="text-2xl lg:text-6xl font-bold font-edu-baloo text-edu-yellow">
            Education & Learning <br />
            <span className="text-6xl lg:text-9xl text-edu-bg font-black">
              Toy Store
            </span>
          </h1>
          <p className="py-6 text-edu-bg lg:text-xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to={"/all-toys"}>
            {" "}
            <button className=" rounded-full bg-edu-yellow text-edu-secondary px-6 py-3 mx-auto lg:mx-0 lg:px-12 lg:py-5 text-2xl font-medium hover:text-black transition flex justify-center items-center gap-4 lg:my-7 shadow-2xl">
              <BsArrowRight /> Get Your Toys
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
