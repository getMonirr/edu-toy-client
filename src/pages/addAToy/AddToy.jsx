import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Player } from "@lottiefiles/react-lottie-player";
import Swal from "sweetalert2";
import PageDetails from "../shared/pageDetails/PageDetails";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  // use context
  const { user } = useAuth();

  // use dynamic title
  useTitle("| Add Toys");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.price = parseFloat(data.price);
    data.quantity = parseInt(data.quantity);
    fetch(`https://edu-toy-server.vercel.app/toys`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire(
            "Your toy is added",
            "see your toy go to my toy page",
            "success"
          );
        }
      });
  };
  return (
    <>
      <PageDetails title={"Add Your Toy"} />
      <div className="container mx-auto my-16 flex flex-col lg:flex-row items-center gap-8 justify-evenly px-4">
        <div>
          <Player
            autoplay
            loop
            src={"https://assets8.lottiefiles.com/packages/lf20_sxhmqgbs.json"}
            className="lg:h-[600px]"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl ">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className=" font-bold leading-7 text-edu-primary text-4xl font-edu-baloo ">
                Add your Toy
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold leading-6 text-edu-nav"
                  >
                    Toy name <span className="text-edu-primary">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter name"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="sellerName"
                    className="block text-sm font-bold leading-6 text-edu-nav"
                  >
                    Seller Name
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("sellerName")}
                      type="text"
                      name="sellerName"
                      id="sellerName"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={user?.displayName || ""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="sellerEmail"
                    className="block text-sm font-bold leading-6 text-edu-nav"
                  >
                    Seller Email
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("sellerEmail")}
                      type="email"
                      name="sellerEmail"
                      id="sellerEmail"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      readOnly
                      value={user?.email}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="block text-sm font-bold leading-6 text-edu-nav"
                  >
                    Category<span className="text-edu-primary">*</span>
                  </label>
                  <div className="mt-2">
                    <select
                      {...register("category", { required: true })}
                      id="category"
                      name="category"
                      autoComplete="category-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="Math Toys">Math Toys</option>
                      <option value={"Language Toys"}>Language Toys</option>
                      <option value={"Science Toys"}>Science Toys</option>
                      <option value={"Engineering Toys"}>
                        Engineering Toys
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="imgUrl"
                    className="block text-sm font-bold leading-6 text-edu-nav"
                  >
                    Photo Url
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("imgUrl")}
                      type="url"
                      name="imgUrl"
                      id="imgUrl"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="price"
                    className="block text-sm font-bold leading-6 text-edu-nav"
                  >
                    Price <span className="text-edu-primary">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("price", { required: true })}
                      type="number"
                      name="price"
                      id="price"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="rating"
                    className="block text-sm font-bold leading-6 text-edu-nav"
                  >
                    Rating
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("rating")}
                      type="number"
                      name="rating"
                      id="rating"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      min="1"
                      max="5"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-bold leading-6 text-edu-nav"
                  >
                    Quantity <span className="text-edu-primary">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("quantity", { required: true })}
                      type="number"
                      name="quantity"
                      id="quantity"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="detailsDescription"
                    className="block text-sm font-bold leading-6 text-edu-nav"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      {...register("detailsDescription")}
                      rows="5"
                      type="textarea"
                      name="detailsDescription"
                      id="detailsDescription"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-edu-primary px-6 py-3 text-sm font-semibold text-white hover:bg-edu-nav focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-xl hover:shadow-none"
            >
              Add Toy
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddToy;
