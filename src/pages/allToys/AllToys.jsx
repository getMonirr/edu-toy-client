import { Link, useLoaderData } from "react-router-dom";
import bgImg from "../../assets/bannerImg.jpg";
import { useState } from "react";

const AllToys = () => {
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);

  // handleSearchByName
  const handleSearchByName = (e) => {
    const searchText = e.target.value;

    if (searchText) {
      fetch(`http://localhost:4000/search?name=${searchText}`)
        .then((res) => res.json())
        .then((data) => setToys(data));
    } else {
      fetch(`http://localhost:4000/toys`)
        .then((res) => res.json())
        .then((data) => setToys(data));
    }
  };

  return (
    <>
      <div
        className="hero min-h-[200px] lg:min-h-[300px]"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-[#ffffffe6]"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="lg:max-w-md">
            <h1 className="mb-5 text-4xl lg:text-6xl font-bold text-black font-edu-baloo ">
              Haven of toy
            </h1>
            <div className="form-control lg:w-[500px] mx-auto">
              <div className=" justify-center flex">
                <input
                  onChange={handleSearchByName}
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered rounded-lg rounded-tr-none rounded-br-none w-full rounded-tl-3xl rounded-bl-3xl text-edu-primary focus:ring-0 focus:outline-none focus:border-edu-primary"
                />
                <button className="btn rounded-bl-none rounded-tl-none rounded-lg bg-edu-primary hover:bg-edu-nav text-edu-bg border-edu-primary py-4 px-9 rounded-br-3xl rounded-tr-3xl">
                  search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                    <td>{toy?.sellerName}</td>
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
