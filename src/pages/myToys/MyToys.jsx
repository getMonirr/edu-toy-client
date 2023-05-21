import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import PageDetails from "../shared/pageDetails/PageDetails";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  // use context
  const { user } = useAuth();
  const [toys, setToys] = useState([]);

  // dynamic title
  useTitle("| My Toys");

  // handle toy delete
  const handleToyDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete toy
        fetch(
          `https://edu-toy-server.vercel.app/my-toys/${id}?email=${user?.email}`,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("edu-toy-token")}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const rest = toys.filter((toy) => toy._id !== id);
              setToys(rest);
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: `Oops... ${err?.message}`,
              text: "Something went wrong!",
            });
          });
      }
    });
  };

  // sorting by price
  const handleSortByPrice = (e) => {
    const sortBy = e.target.value;
    fetch(
      `https://edu-toy-server.vercel.app/sort-my-toys?email=${user?.email}&sort=${sortBy}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("edu-toy-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `Oops... ${err?.message}`,
          text: "Something went wrong! server problem: failed to fetch",
        });
      });
  };

  // fetch user's toys
  useEffect(() => {
    fetch(`https://edu-toy-server.vercel.app/my-toys?email=${user?.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("edu-toy-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `Oops... ${err?.message}`,
          text: "Something went wrong! server problem: failed to fetch",
        });
      });
  }, [user]);

  return (
    <div className="container mx-auto mb-32">
      <PageDetails title={"My toy page"} />
      <div className="overflow-x-auto w-full">
        <div className="text-center my-16">
          <h1 className=" text-4xl font-black uppercase text-edu-primary font-edu-baloo text-center">
            Here is your added toy
          </h1>
          <div className="h-1 lg:h-2 w-48 bg-edu-secondary mx-auto my-4"></div>
          <p>You can modify,update and delete your toy</p>
        </div>
        <div className="text-end mb-4">
          <select
            className="border-edu-primary focus:ring-0 focus:outline-none focus:border-edu-primary"
            name="sort"
            id=""
            onChange={handleSortByPrice}
          >
            <option disabled selected>
              Sort By Price
            </option>
            <option value="low">Low to high</option>
            <option value="high">High to low</option>
          </select>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Picture</th>

              <th>Category</th>
              <th>Price </th>
              <th>Quantity </th>
              <th>Seller Email</th>
              <th>Seller Name</th>
              <th>Action</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {Array.isArray(toys) && toys.length !== 0 ? (
              toys.map((toy, index) => (
                <tr key={toy._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-24 rounded">
                          <img src={toy?.imgUrl} alt={toy?.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{toy?.name}</div>
                        <div className="text-sm opacity-50">
                          <Rating
                            value={toy?.rating}
                            readOnly
                            style={{ maxWidth: 80 }}
                          />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{toy?.category}</td>
                  <td>${toy?.price}</td>
                  <td>{toy?.quantity}</td>
                  <td>{toy?.sellerEmail}</td>
                  <td>{toy?.sellerName || "Not Found"}</td>
                  <td>
                    <div className="flex items-center">
                      <Link
                        to={`/update-toys/${toy?._id}`}
                        className="cursor-pointer bg-edu-yellow hover:bg-yellow-400 font-medium shadow-lg hover:shadow-none border-edu-primary hover:border-edu-primary px-3 py-2 text-edu-secondary rounded-sm mr-4"
                      >
                        update
                      </Link>
                      <button
                        onClick={() => handleToyDelete(toy._id)}
                        className=" shadow-xl hover:shadow-none bg-edu-primary hover:bg-red-600 border-edu-primary hover:border-edu-primary px-3 py-2 text-white rounded-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                  <td>
                    <Link
                      to={`/toys/${toy._id}`}
                      className="btn btn-primary bg-edu-primary hover:bg-edu-nav border-edu-primary hover:border-edu-primary"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <p>No Toy Found</p>
              </tr>
            )}
          </tbody>
          {/* foot */}
          <tfoot>
            {toys.length > 10 && (
              <tr>
                <th>No</th>
                <th>Picture</th>
                <th>Toy Name</th>
                <th>Category</th>
                <th>Price </th>
                <th>Quantity </th>
                <th>Seller Name</th>
                <th>Action</th>
              </tr>
            )}
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
