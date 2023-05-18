import { Player } from "@lottiefiles/react-lottie-player";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useRouteError } from "react-router-dom";

const Error404 = () => {
  // handle error
  const error = useRouteError();
  console.log(error);

  return (
    <div className="bg-edu-bg min-h-screen">
      <div className="container mx-auto flex flex-col lg:flex-row px-3 py-10 text-center lg:text-left items-center justify-center">
        <div className="lg:w-1/2">
          <h1 className="text-2xl lg:text-5xl font-bold font-edu-baloo text-stone-300 space-y-4">
            Oops... Some things is wrong <br />
            <p className="text-stone-700">
              Status Code: {error?.status || "404"}
            </p>
            <span className="text-2xl lg:text-3xl font-black text-black">
              {error?.data || "Router not found"}
            </span>
          </h1>
          <p className="py-6 lg:text-xl">{error?.statusText || "Not Found"}</p>
          <Link
            to="/"
            className=" lg:max-w-sm rounded-full bg-edu-yellow text-edu-secondary px-3 py-3 mx-auto lg:mx-0 lg:px-12 lg:py-5 text-xl font-medium hover:text-black transition flex justify-center items-center gap-4 lg:my-7"
          >
            <BsArrowLeft /> Back To Home Page
          </Link>
        </div>
        <div className="lg:w-3/4">
          <Player
            autoplay
            loop
            src={"https://assets3.lottiefiles.com/packages/lf20_2ibpmsby.json"}
          ></Player>
        </div>
      </div>
    </div>
  );
};

export default Error404;
