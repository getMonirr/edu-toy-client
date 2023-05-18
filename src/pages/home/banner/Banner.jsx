import { Player } from "@lottiefiles/react-lottie-player";
// import bannerImg from "../../../assets/bannerCube.png";
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-edu-primary pb-10 lg:py-6">
      <div className=" flex justify-center items-center gap-4 p-4 flex-col lg:flex-row-reverse container w-full">
        {/* <img src={bannerImg} className="lg:max-w-2xl rounded-lg" /> */}
        <Player
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_Mr2XfXxSpQ.json"
          //   style={{ height: "800px", width: "800px" }}
          className="lg:h-[800px] lg:w-[800px]"
        ></Player>
        <div>
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
          <button className=" rounded-full bg-edu-yellow text-edu-secondary px-6 py-3 mx-auto lg:mx-0 lg:px-12 lg:py-5 text-2xl font-medium hover:text-black transition flex justify-center items-center gap-4 lg:my-7">
            <BsArrowRight /> Get Your Toys
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
