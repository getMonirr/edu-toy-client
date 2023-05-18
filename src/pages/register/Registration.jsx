import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="hero min-h-[700px] bg-edu-secondary">
      <div className="hero-content flex flex-col md:flex-row">
        <Player
          autoplay
          loop
          src="https://assets3.lottiefiles.com/packages/lf20_tpa51dr0.json"
          style={{ height: "500px", width: "100%" }}
        ></Player>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-edu-bg">
          <div className="card-body">
            <div>
              <p className="text-2xl font-bold mb-4">Create an account</p>
              <p className="text-xl font-bold mb-4 text-red-500">for error</p>
            </div>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="input input-bordered"
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
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Password <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Photo Url <span>(optional)</span>
                  </span>
                </label>
                <input
                  type="url"
                  placeholder="photoUrl"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary bg-edu-yellow text-edu-secondary border-yellow-300 hover:bg-edu-secondary hover:text-edu-yellow hover:border-edu-primary transition hover:shadow-none shadow-lg"
                >
                  Create an Account
                </button>
              </div>
            </form>
            <div>
              <p className="text-sm mt-4 text-center">
                Already have an Account?{" "}
                <Link to="/login" className="text-edu-nav">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
