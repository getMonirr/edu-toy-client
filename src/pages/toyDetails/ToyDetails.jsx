import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  // use loader data
  const {
    _id,
    imgUrl,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    detailsDescription,
    date,
    category,
  } = useLoaderData();
  return (
    <div className="container mx-auto my-16 p-0">
      <div className="card lg:card-side bg-base-100 shadow-xl mx-auto lg:w-3/4 px-2 lg:px-0">
        <figure>
          <img src={imgUrl} alt="Album" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title  lg:mb-10 text-2xl lg:text-4xl font-edu-baloo">
            {name}
          </h2>
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="font-bold text-slate-500">
                Seller Name:{" "}
                <span className="text-slate-700">{sellerName}</span>
              </p>
              <p className="font-bold text-slate-500 flex flex-col lg:flex-row lg:items-center">
                Seller Email:{" "}
                <span className="bg-edu-yellow px-3 py-2 rounded-tl-2xl rounded-br-2xl ml-2 text-black">
                  {sellerEmail}
                </span>
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-lg flex items-center gap-3">
                Price:{" "}
                <span className="text-4xl font-bold font-edu-baloo text-edu-secondary">
                  ${price}{" "}
                </span>
                <span className="bg-edu-yellow px-3 py-2 rounded-tl-2xl rounded-br-2xl -ml-3 text-black text-xs -mt-1 font-bold hidden lg:block">
                  Buy 1, Get 1 FREE
                </span>
              </p>
              <p>
                Quantity:{" "}
                <span className="mask mask-heart p-3 bg-edu-secondary text-white">
                  {quantity}
                </span>
              </p>
              <div className="text-lg flex items-center pt-1 gap-2">
                Rating:{" "}
                <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
              </div>
            </div>
          </div>
          <div className="card-actions justify-end mt-8">
            <p className="font-bold font-edu-baloo text-xl">
              Description of {name}:{" "}
            </p>
            <p>{detailsDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
