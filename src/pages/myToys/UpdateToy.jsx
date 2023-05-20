import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Player } from "@lottiefiles/react-lottie-player";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
  const [toy, setToy] = useState({});
  const { price, quantity, detailsDescription } = toy;

  // dynamic title
  useTitle("| Update Toy");

  // use context
  const { user } = useAuth();

  // get id
  const { id } = useParams();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.quantity = data.quantity || quantity;
    data.price = data.price || price;
    data.detailsDescription = data.detailsDescription || detailsDescription;

    fetch(
      `https://edu-toy-server.vercel.app/my-toys/${id}?email=${user?.email}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("edu-toy-token")}`,
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount) {
          Swal.fire(
            "Your toy is updated",
            "see your toy go to my toy page",
            "success"
          );
        }
      });
  };

  // fetch data
  useEffect(() => {
    fetch(
      `https://edu-toy-server.vercel.app/my-toys/${id}?email=${user?.email}`,
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
        setToy(data);
      });
  }, []);

  return (
    <div className="container mx-auto my-16 flex flex-col lg:flex-row items-center gap-8 justify-evenly px-4">
      <div>
        <Player
          autoplay
          loop
          src={"https://assets10.lottiefiles.com/packages/lf20_yefkwifo.json"}
          className="lg:h-[600px]"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl ">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className=" font-bold leading-7 text-edu-primary text-4xl font-edu-baloo ">
              Update your Toy
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="price"
                  className="block text-sm font-bold leading-6 text-edu-nav"
                >
                  Price <span className="text-edu-primary">*</span>
                </label>
                <div className="mt-2">
                  <input
                    {...register("price")}
                    type="number"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={price}
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
                    {...register("quantity")}
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={quantity}
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
                    defaultValue={detailsDescription}
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
            Update Toy Info
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
