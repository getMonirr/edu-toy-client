import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-[700px] bg-edu-secondary">
      <div className="hero-content flex flex-col lg:flex-row gap-0">
        <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/packages/lf20_dn6rwtwl.json"
          style={{ height: "500px", width: "100%" }}
        ></Player>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-edu-bg">
          <div className="card-body">
            <div>
              <p className="text-2xl font-bold mb-4">Welcome back</p>
            </div>
            <div className="mb-4">
              <button className="capitalize flex justify-center items-center btn bg-edu-bg text-black border-base-300 btn-block gap-4 hover:bg-edu-yellow hover:text-edu-secondary hover:border-base-300 shadow-xl hover:shadow-none">
                <Player
                  loop
                  autoplay
                  style={{ height: "40px", width: "40px" }}
                  src={
                    "https://assets9.lottiefiles.com/private_files/lf30_29gwi53x.json"
                  }
                ></Player>
                Login With google
              </button>
            </div>
            <div className="divider">OR</div>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-edu-yellow text-edu-secondary border-yellow-300 hover:bg-edu-secondary hover:text-edu-yellow hover:border-edu-primary transition hover:shadow-none shadow-lg">
                  Login
                </button>
              </div>
            </form>
            <div>
              <p className="text-sm mt-4 text-center">
                Don’t have an account yet?{" "}
                <Link to="/registration" className="text-edu-nav">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
