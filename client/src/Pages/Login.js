import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1/user/login",
        input
      );
      alert(res.data.message);
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("username", res.data.name)
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div>
      <section class="h-100 h-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-8 col-xl-6">
              <div class="card rounded-3">
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login</h3>

                  <form class="px-md-2" onSubmit={handleSubmit}>
                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        name="email"
                        value={input.email}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                        id="form3Example1q"
                        class="form-control"
                      />
                      <label class="form-label" for="form3Example1q">
                        username
                      </label>
                    </div>

                    <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                      <div class="col-md-6">
                        <div class="form-outline">
                          <input
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={(e) =>
                              setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                              })
                            }
                            id="form3Example1w"
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example1w">
                            Password
                          </label>
                        </div>
                      </div>
                    </div>

                    <button type="submit" class="btn btn-success btn-lg mb-1">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
