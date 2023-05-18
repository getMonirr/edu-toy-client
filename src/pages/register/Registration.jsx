import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Registration = () => {
  const [error, setError] = useState("");
  const [isRegBtnDisable, setIsRegBtnDisable] = useState(false);

  // use context
  const { createUser, logOut } = useAuth();

  // navigate
  const navigate = useNavigate();

  // handle create user with form submit
  const handleCreateUser = (e) => {
    setIsRegBtnDisable(true);
    setError("");
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    // password validation

    if (password.length < 6) {
      setError("password should be 6 char long");
      setIsRegBtnDisable(false);
      return;
    }

    // Minimum eight characters, at least one letter, one number and one special character:
    const PASS_CODE =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const isPass = PASS_CODE.test(password);

    if (!isPass) {
      setError(
        "Minimum eight characters, at least one letter, one number and one special character"
      );
      setIsRegBtnDisable(false);
      return;
    }

    // create user
    if (isPass && email) {
      createUser(email, password).then((userCredential) => {
        const newUser = userCredential.user;
        if (newUser) {
          updateProfile(newUser, { displayName: name, photoURL: photoUrl })
            .then(() => {
              // show success message
              Swal.fire(
                "Registration Successful",
                "Please Login with email & password",
                "success"
              );

              // log out
              logOut()
                .then()
                .catch((err) => setError(err?.message));

              // user navigate to log in page
              navigate("/login");
            })
            .catch((err) => {
              setError(err?.message);
              setIsRegBtnDisable(false);
            });
        }
      });
    }
  };

  return (
    <div className="hero min-h-[700px] bg-edu-secondary py-12">
      <div className="hero-content flex flex-col md:flex-row">
        <Player
          autoplay
          loop
          src="https://assets3.lottiefiles.com/packages/lf20_tpa51dr0.json"
          style={{ height: "500px", width: "100%" }}
        ></Player>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-edu-bg">
          <div className="card-body">
            <div>
              <p className="text-2xl font-bold mb-4">Create an account</p>
              <p className="text-sm font-bold mb-4 text-red-500">{error}</p>
            </div>
            <form className="space-y-4" onSubmit={handleCreateUser}>
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
                  name="password"
                />
                <label className="label">
                  <span className="label-text text-[12px]">
                    Minimum eight characters, at least one letter, one number
                    and one special character{" "}
                    <span className="text-red-500">*</span>
                  </span>
                </label>
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
                  name="photoUrl"
                />
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={isRegBtnDisable}
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
