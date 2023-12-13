import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, userUpdatedProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const formData = { name, photo, email, password };
    // console.log(formvalue);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);

        userUpdatedProfile(name, photo)
          .then(
            Swal.fire({
              icon: "success",
              title: "Signup Successful",
              showConfirmButton: false,
              timer: 1500,
            })
          )
          .catch((error) => console.log(error));

        //   navigate user to homer
        navigate("/");
      })
      .catch((err) => {
        const error = err.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: error,
        });
      });
  };

  return (
    <div className="bg-base-200">
      <div className="hero min-h-screen container ">
        <div className="hero-content flex-col ">
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
              <p>
                Already have an account?{" "}
                <Link to={"/login"} className="text-red-500">
                  login
                </Link>{" "}
                now
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
