import PropTypes from "prop-types";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const SingleCategory = ({ toy }) => {
  const { _id, imgUrl, category, name, rating, price } = toy;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={imgUrl} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-edu-baloo text-2xl">{name}</h2>
        <div className="my-4 space-y-2">
          <p>
            <span className="font-bold">Price:</span>{" "}
            <span className="text-edu-primary">${price}</span>
          </p>
          <p className="flex items-center  gap-2">
            <span className="font-bold pt-[2px]">Rating:</span>{" "}
            <Rating value={rating} readOnly style={{ maxWidth: 100 }} />
            <span className="text-[12px] pt-1">{rating} Out of 5</span>
          </p>
        </div>
        <div className="card-actions justify-between items-center">
          <Link
            to={`/toys/${_id}`}
            className="btn bg-edu-nav border-0 shadow-xl hover:shadow-none hover:bg-edu-primary"
          >
            View Details
          </Link>
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;

SingleCategory.propTypes = {
  toy: PropTypes.object,
};
