//this is a trial
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../image3.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function AddUser() {
  let navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    username: "",
    mail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Target: " + e.target);
    console.log("Target value");
    console.log(e.target.value);
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/user", details);
      setDetails({
        name: "",
        username: "",
        mail: "",
      });
      navigate("/");
    } catch (error) {
      error.response();
      console.log("Error thrown");
    }
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        {/* <img src={image} class="img-thumbnail" alt="abc"></img> */}
        <div className="row">
          <div
            className="col-md-6 mt-2 offset-md-3 p-4 border rounded shadow"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "800px 500px",
            }}
          >
            <h2 className="text-center m-4">Register User</h2>
            <div className="row">
              <div className="row mb-2 justify-content-center">
                <div
                  htmlFor="Name"
                  className="col-form-label col-md-2 text-start"
                >
                  Name
                </div>
                <input
                  type={"text"}
                  className="col-form-control rounded col-md-5"
                  name="name"
                  placeholder="Enter your Name"
                  value={details.name}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="row mb-2 justify-content-center">
                <div
                  htmlFor="Username"
                  className="col-form-label col-md-2 text-start"
                >
                  Username
                </div>
                <input
                  type={"text"}
                  className="col-form-control rounded col-md-5"
                  name="username"
                  placeholder="Enter your username"
                  value={details.username}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="row mb-2 justify-content-center">
                <div
                  htmlFor="Email"
                  className="col-form-label col-md-2 text-start"
                >
                  Email
                </div>
                <input
                  type={"email"}
                  className="col-form-control rounded col-md-5"
                  name="mail"
                  placeholder="Enter your email id"
                  value={details.mail}
                  onChange={handleChange}
                  required
                ></input>
                {/* <small className='text-muted'>We'll never share your email with anyone else.</small> */}
              </div>
              <button
                type="submit"
                className="btn btn-outline-success col-md-4 text-dark mx-auto"
              >
                Submit
              </button>
              <Link
                className="btn btn-outline-danger col-md-4 mx-2 text-dark mx-auto"
                to="/"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
