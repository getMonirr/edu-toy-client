import { useEffect, useState } from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/images`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  const onInit = () => {};
  return (
    <div className="bg-[#EEDFE4]">
      <div className="container mx-auto py-16 lg:py-32 px-2">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold font-edu-baloo text-edu-primary capitalize ">
            Edu-kit gallery
          </h2>
          <div className="h-1 lg:h-2 w-48 bg-edu-secondary mx-auto my-4"></div>
          <p>
            Here is our most popular education and learning kid gallery section.{" "}
            <br />
            just explore your toy
          </p>
        </div>
        <LightGallery
          elementClassNames="grid grid-cols-1 lg:grid-cols-4 gap-8 grid-flow-row-dense"
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          {images.map((img, index) => {
            return (
              <a
                data-aos="fade-up"
                data-aos-duration="3000"
                key={index}
                className="grid-flow-row-dense"
                href={img.imgUrl}
              >
                <img
                  className="object-fill h-[300px] lg:h-[400px] object-center w-full p-1 bg-edu-nav grayscale hover:grayscale-0 transition"
                  alt="img1"
                  src={img.imgUrl}
                />
              </a>
            );
          })}
        </LightGallery>
      </div>
    </div>
  );
};

export default Gallery;
