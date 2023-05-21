import { Player } from "@lottiefiles/react-lottie-player";

const Step = () => {
  return (
    <section className="text-gray-800 body-font ">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="text-center max-w-xl mx-auto mb-32">
          <h2 className="text-4xl lg:text-6xl font-bold font-edu-baloo text-edu-primary capitalize ">
            How It Work
          </h2>
          <div className=" h-1 lg:h-2 w-48 bg-edu-secondary mx-auto my-4"></div>
          <p>
            In this section you understand how we work for our lovely customers.{" "}
            <br />
            Our most priority is our customers satisfaction.
          </p>
        </div>
        <div className="flex flex-wrap w-full lg:justify-between">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-edu-yellow pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-edu-primary inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  STEP 1
                </h2>
                <p className="leading-relaxed">
                  Just explore your favorite toy from our shop. anything you can
                  choose. everything for you.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-edu-yellow pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-edu-primary inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  STEP 2
                </h2>
                <p className="leading-relaxed">
                  See the details about your toys. When it makes and how it
                  works, who is the seller?
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-edu-yellow pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-edu-primary inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx={12} cy={5} r={3} />
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  STEP 3
                </h2>
                <p className="leading-relaxed">
                  For this step add your toy to your favorite . then you can see
                  all the favorite toys from your favorite box.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-edu-yellow pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-edu-primary inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  STEP 4
                </h2>
                <p className="leading-relaxed">
                  And order your toy from our shop. you can choose any payment
                  method like cash on delivery, or internet banking.
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-edu-primary inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  FINISH
                </h2>
                <p className="leading-relaxed">
                  We delivery your toy very carefully.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center border bg-[#E1E7EA] mt-14 md:mt-0">
            <Player
              autoplay
              loop
              src={
                "https://assets9.lottiefiles.com/packages/lf20_wo6gq7h6.json"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;
