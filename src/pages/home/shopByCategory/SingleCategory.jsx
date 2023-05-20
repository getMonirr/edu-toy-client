import PropTypes from "prop-types";
import { Rating } from "@smastrom/react-rating";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import "./ShopByCategory.css";

const SingleCategory = ({ toy }) => {
  // use context
  const { user } = useAuth();

  // navigate
  const navigate = useNavigate();

  // handle view details
  const handleViewDetails = (id) => {
    // check authentication
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to log in first to view details",
        confirmButtonText: "Log in",
        confirmButtonColor: "#B92D5E",
        confirmButtonBorder: "red",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }

    // navigate view details page
    navigate(`/toys/${id}`);
  };

  const { _id, imgUrl, category, name, rating, price } = toy;
  return (
    <div data-aos="fade-up" className="card w-full bg-base-100 shadow-xl px-3">
      <figure>
        <img className="h-[300px] object-cover object-center w-full" src={imgUrl} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-edu-baloo text-2xl">{name}</h2>
        <div className="my-4 space-y-2">
          <p>
            <span className="font-bold">Price:</span>{" "}
            <span className="text-edu-primary">${price}</span>
          </p>
          <div className="flex items-center  gap-2">
            <span className="font-bold pt-[2px]">Rating:</span>{" "}
            <Rating value={rating} readOnly style={{ maxWidth: 100 }} />
            <span className="text-[12px] pt-1">{rating} Out of 5</span>
          </div>
        </div>
        <div className="card-actions justify-between items-center">
          <button
            onClick={() => handleViewDetails(_id)}
            className="btn bg-edu-nav border-0 shadow-xl hover:shadow-none hover:bg-edu-primary"
          >
            View Details
          </button>
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
