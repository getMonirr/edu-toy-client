import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import cube from "../../../assets/abacus.png";
import img from "../../../assets/bannerImg.jpg";
import g1 from "../../../assets/gallery/g1.jpg";
import g2 from "../../../assets/gallery/g2.jpg";
import g3 from "../../../assets/gallery/g3.jpg";
import g4 from "../../../assets/gallery/g4.jpg";
import g5 from "../../../assets/gallery/g5.jpg";
import g6 from "../../../assets/gallery/g6.jpg";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="bg-[#EEDFE4]">
      <div className="container mx-auto py-32 px-2">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl lg:text-6xl font-bold font-edu-baloo text-edu-primary capitalize ">
            Edu-kit gallery
          </h2>
          <div className="h-2 w-48 bg-edu-secondary mx-auto my-4"></div>
          <p>
            Here is our most popular education and learning kid gallery section.{" "}
            <br />
            just explore your toy
          </p>
        </div>
        <LightGallery
          elementClassNames="grid grid-cols-1 lg:grid-cols-3 gap-8 grid-flow-row-dense"
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          <a className="grid-flow-row-dense" href={cube}>
            <img
              className="object-fill h-[300px] lg:h-[450px] object-center w-full p-1 bg-edu-nav grayscale hover:grayscale-0 transition"
              alt="img1"
              src={cube}
            />
          </a>
          <a className="" href={g2}>
            <img
              className="object-fill h-[300px] lg:h-[450px] object-center w-full p-1 bg-edu-nav grayscale hover:grayscale-0 transition"
              alt="img1"
              src={g2}
            />
          </a>
          <a className="" href={g1}>
            <img
              className="object-fill h-[300px] lg:h-[450px] object-center w-full p-1 bg-edu-nav grayscale hover:grayscale-0 transition"
              alt="img1"
              src={g1}
            />
          </a>
          <a className="" href={g3}>
            <img
              className="object-fill h-[300px] lg:h-[450px] object-center w-full p-1 bg-edu-nav grayscale hover:grayscale-0 transition"
              alt="img1"
              src={g3}
            />
          </a>
          <a className="" href={g4}>
            <img
              className="object-fill h-[300px] lg:h-[450px] object-center w-full p-1 bg-edu-nav grayscale hover:grayscale-0 transition"
              alt="img1"
              src={g4}
            />
          </a>
          <a className="" href={g5}>
            <img
              className="object-fill h-[300px] lg:h-[450px] object-center w-full p-1 bg-edu-nav grayscale hover:grayscale-0 transition"
              alt="img1"
              src={g5}
            />
          </a>
          <a className="" href={g6}>
            <img
              className="object-fill h-[300px] lg:h-[450px] object-center w-full p-1 bg-edu-nav grayscale hover:grayscale-0 transition"
              alt="img1"
              src={g6}
            />
          </a>
          <a className="" href={img}>
            <img
              className="object-fill h-[300px] lg:h-[450px] object-center w-full p-1 bg-edu-nav grayscale hover:grayscale-0 transition"
              alt="img2"
              src={img}
            />
          </a>
        </LightGallery>
      </div>
    </div>
  );
};

export default Gallery;
