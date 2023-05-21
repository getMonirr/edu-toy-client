import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import PageDetails from "../shared/pageDetails/PageDetails";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";

const AllToys = () => {
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);
  // dynamic title
  useTitle("| All Toy");

  // handleSearchByName
  const handleSearchByName = (e) => {
    const searchText = e.target.value;

    if (searchText) {
      fetch(`https://edu-toy-server.vercel.app/search?name=${searchText}`)
        .then((res) => res.json())
        .then((data) => setToys(data))
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `Oops... ${err?.message}`,
            text: "Something went wrong! server problem: failed to fetch",
          });
        });
    } else {
      fetch(`https://edu-toy-server.vercel.app/toys`)
        .then((res) => res.json())
        .then((data) => setToys(data))
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `Oops... ${err?.message}`,
            text: "Something went wrong! server problem: failed to fetch",
          });
        });
    }
  };

  return (
    <>
      <PageDetails title={"Haven Of Toy"}>
        <div className=" justify-center flex">
          <input
            onChange={handleSearchByName}
            type="text"
            placeholder="Search… By Toy name"
            className="input input-bordered rounded-lg rounded-tr-none rounded-br-none w-full rounded-tl-3xl rounded-bl-3xl text-edu-primary focus:ring-0 focus:outline-none focus:border-edu-primary"
          />
          <button className="btn rounded-bl-none rounded-tl-none rounded-lg bg-edu-primary hover:bg-edu-nav text-edu-bg border-edu-primary py-4 px-9 rounded-br-3xl rounded-tr-3xl">
            search
          </button>
        </div>
      </PageDetails>

      {/* table */}
      <div className="container mx-auto">
        <div className="text-center my-16">
          <h1 className=" text-4xl font-black uppercase text-edu-primary font-edu-baloo text-center">
            Here is our available toy
          </h1>
          <div className="h-1 lg:h-2 w-48 bg-edu-secondary mx-auto my-4"></div>
          <p>You can find your toy</p>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full mb-32">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Toy Name</th>
                <th>Category</th>
                <th>Price </th>
                <th>Quantity </th>
                <th>Seller Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {toys.length !== 0 ? (
                toys.map((toy, index) => (
                  <tr key={toy._id}>
                    <th>{index + 1}</th>
                    <td>{toy?.name}</td>
                    <td>{toy?.category}</td>
                    <td>${toy?.price}</td>
                    <td>{toy?.quantity}</td>
                    <td>{toy?.sellerName || "Not Found"}</td>
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
                <tr>No toy found</tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <th>No</th>
                <th>Toy Name</th>
                <th>Category</th>
                <th>Price </th>
                <th>Available Quantity </th>
                <th>Seller Name</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllToys;
