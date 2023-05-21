import { useEffect, useRef, useState } from "react";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Testimonial.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // fake feedback data
  useEffect(() => {
    fetch("/feedback.json")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
      });
  }, []);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="bg-[#EBE4CB] py-16 lg:py-32 px-8">
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
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper max-w-3xl"
        >
          {feedbacks.map((fd, index) => (
            <SwiperSlide key={index}>
              <div className="">
                <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-edu-secondary" />
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img src={fd?.img} />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">{fd?.name}</h4>
                    <hr />
                    <p className="my-4">
                      <FaQuoteLeft className="mx-auto" />
                      <span className="my-2 inline-block">{fd?.feedback}</span>
                      <FaQuoteRight className="mx-auto" />
                    </p>
                    <div className="flex justify-center items-center gap-2 mt-4 text-edu-yellow">
                      <Rating
                        value={fd?.rating}
                        readOnly
                        style={{ maxWidth: 100 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
