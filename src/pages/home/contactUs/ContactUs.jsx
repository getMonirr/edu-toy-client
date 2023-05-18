import { Player } from "@lottiefiles/react-lottie-player";
import Swal from "sweetalert2";

const ContactUs = () => {
  const handleContact = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name && email && message) {
      Swal.fire("Submit successful", "We receive your message", "success");
      form.reset();
    }
  };
  return (
    <div className="my-16 px-2 lg:my-32">
      <div className="text-center max-w-xl mx-auto mb-16">
        <h2 className="text-4xl lg:text-6xl font-bold font-edu-baloo text-edu-primary capitalize ">
          Contact Us
        </h2>
        <div className="h-1 lg:h-2 w-48 bg-edu-secondary mx-auto my-4"></div>
        <p className="text-black">
          Do not hesitate to talk with us, Relax we are ready to support 24/7
          hours
        </p>
      </div>
      <div className="flex flex-col gap-24 lg:flex-row justify-evenly items-center">
        <div>
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_hokifDNfXn.json"
            className="h-[300px]"
          ></Player>
          <div>
            <div className="flex items-center">
              <Player
                autoplay
                loop
                src={
                  "https://assets10.lottiefiles.com/packages/lf20_ebqz3ltq.json"
                }
                className="h-20 lg:h-28"
              ></Player>
              <p className="flex flex-col text-xl font-bold font-edu-baloo">
                <span className="text-sm">Email:</span>
                support@edu-toy.com
              </p>
            </div>
            <div className="flex items-center">
              <Player
                autoplay
                loop
                src={
                  "https://assets5.lottiefiles.com/packages/lf20_wmsbdykq.json"
                }
                className="h-20 lg:h-28"
              ></Player>
              <p className="flex flex-col text-xl font-bold font-edu-baloo">
                <span className="text-sm">Phone:</span>
                +880 6546465465
              </p>
            </div>
          </div>
        </div>
        <div>
          <form
            className="space-y-4 w-full lg:w-[500px]"
            onSubmit={handleContact}
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Name <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Message <span className="text-red-500">*</span>
                </span>
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Type your message"
                className="border-2 p-4"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary bg-edu-yellow text-edu-secondary border-yellow-300 hover:bg-edu-secondary hover:text-edu-yellow hover:border-edu-primary transition hover:shadow-none shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
